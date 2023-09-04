import * as THREE from 'three'
import * as dat from "three/addons/libs/lil-gui.module.min.js";
import {color} from "three/nodes";

var TGTools = TGTools || {}

/**
 * from http://stemkoski.blogspot.fr/2013/07/shaders-in-threejs-glow-and-halo.html
 * @return {[type]} [description]
 */
TGTools.createAtmosphereMaterial = function () {
    var vertexShader = [
        'varying vec3	vVertexWorldPosition;',
        'varying vec3	vVertexNormal;',

        'varying vec4	vFragColor;',

        'void main(){',
        '	vVertexNormal	= normalize(normalMatrix * normal);',

        '	vVertexWorldPosition	= (modelMatrix * vec4(position, 1.0)).xyz;',

        '	// set gl_Position',
        '	gl_Position	= projectionMatrix * modelViewMatrix * vec4(position, 1.0);',
        '}',

    ].join('\n')
    var fragmentShader = [
        'uniform vec3	glowColor;',
        'uniform float	coeficient;',
        'uniform float	power;',

        'varying vec3	vVertexNormal;',
        'varying vec3	vVertexWorldPosition;',

        'varying vec4	vFragColor;',

        'void main(){',
        '	vec3 worldCameraToVertex= vVertexWorldPosition - cameraPosition;',
        '	vec3 viewCameraToVertex	= (viewMatrix * vec4(worldCameraToVertex, 0.0)).xyz;',
        '	viewCameraToVertex	= normalize(viewCameraToVertex);',
        '	float intensity		= pow(coeficient + dot(vVertexNormal, viewCameraToVertex), power);',
        '	gl_FragColor		= vec4(glowColor, intensity);',
        '}',
    ].join('\n')

    // create custom material from the shader code above
    //   that is within specially labeled script tags
    var material = new THREE.ShaderMaterial({
        uniforms: {
            coeficient: {
                type: "f",
                value: 1.0
            },
            power: {
                type: "f",
                value: 2
            },
            glowColor: {
                type: "c",
                value: new THREE.Color('pink')
            },
        },
        vertexShader: vertexShader,
        fragmentShader: fragmentShader,
        //blending	: THREE.AdditiveBlending,
        transparent: true,
        depthWrite: false,
    });
    return material
}

TGTools.addAtmosphereMaterial2DatGui = function (material, datGui) {
    datGui = datGui || new dat.GUI()
    var uniforms = material.uniforms
    // options
    var options = {
        coeficient: uniforms['coeficient'].value,
        power: uniforms['power'].value,
        glowColor: '#' + uniforms.glowColor.value.getHexString(),
        presetFront: function () {
            options.coeficient = 1
            options.power = 2
            onChange()
        },
        presetBack: function () {
            options.coeficient = 0.5
            options.power = 4.0
            onChange()
        },
    }
    var onChange = function () {
        uniforms['coeficient'].value = options.coeficient
        uniforms['power'].value = options.power
        uniforms.glowColor.value.set(options.glowColor);
    }
    onChange()

    // config datGui
    datGui.add(options, 'coeficient', -2.0, 2)
        .listen().onChange(onChange)
    datGui.add(options, 'power', -5.0, 5)
        .listen().onChange(onChange)
    datGui.addColor(options, 'glowColor')
        .listen().onChange(onChange)
    datGui.add(options, 'presetFront')
    datGui.add(options, 'presetBack')
}


TGTools.Atmosphere = function (radius, segments) {
    var scope = new THREE.Object3D();

    var inGeometry = new THREE.OctahedronGeometry(radius + 0.6, segments);
    // inGeometry.computeTangents();
    inGeometry.computeBoundingSphere();

    var outGeometry = new THREE.OctahedronGeometry(radius + 6.0, segments);
    // outGeometry.computeTangents();
    outGeometry.computeBoundingSphere();

    var inMaterial = new TGTools.InsideGlowMaterial();
    var outMaterial = new TGTools.OutsideGlowMaterial('#95D3F4', 0.71, 28.0, 1.0);

    var inMesh = new THREE.Mesh(inGeometry, inMaterial);
    inMesh.flipSided = true;
    inMesh.matrixAutoUpdate = false;
    inMesh.updateMatrix();

    var outMesh = new THREE.Mesh(outGeometry, outMaterial);
    outMesh.position.set(7, 0, 0);

    scope.add(inMesh);
    scope.add(outMesh);

    scope.material = inMaterial;
    return scope
};

TGTools.Atmosphere.prototype = Object.create(THREE.Object3D.prototype);

TGTools.Atmosphere.prototype.update = function (camera) {
    this.material.uniforms.viewVector.value = camera.position;
};
TGTools.InsideGlowMaterial = function (color, aperture, scale, useLight, opacity) {
    var scope = new THREE.ShaderMaterial();
    var _color = (color === undefined) ? new THREE.Color('#95D3F4') : new THREE.Color(color);
    var _aperture = (aperture === undefined) ? 0.9999999999 : aperture;
    var _scale = (scale === undefined) ? 0.5555555555 : scale;
    var _useLight = (useLight === undefined) ? true : useLight;

    var vector = new THREE.Vector4(_color.r, _color.g, _color.b, 0.1);

    scope.uniforms = THREE.UniformsUtils.merge([

        THREE.UniformsLib["lights"], {

            "uColor": {type: "v4", value: vector},
            "viewVector": {type: "v3", value: new THREE.Vector4(1.0, 1.0, 1.0, 1.0)},
            "uTop": {type: "f", value: _aperture},//0.94 },
            "uPower": {type: "f", value: _scale},//0.65555555555 },
            "usingDirectionalLighting": {type: "i", value: _useLight}

        }]);

    scope.vertexShader = [

        'uniform vec3 viewVector;',
        'attribute vec4 tangent;',
        'varying vec3 vNormal; ',
        'varying float intensity;',
        'uniform float uTop;',
        'uniform float uPower;',

        'void main() {',

        'vNormal = normalize( normalMatrix * normal );',
        'vec3 vNormel = normalize( normalMatrix * viewVector );',
        'intensity = pow( uTop - dot(vNormal, vNormel), uPower );',
        'gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );',

        '}'

    ].join('\n');

    scope.fragmentShader = [

		'uniform vec4 uColor;',
		'varying vec3 vNormal;',
		'varying float intensity;',
		'uniform bool usingDirectionalLighting;',

		'#if NUM_DIR_LIGHTS > 0',

		'uniform vec3 directionalLightColor[ NUM_DIR_LIGHTS ];',
		'uniform vec3 directionalLightDirection[ NUM_DIR_LIGHTS ];',

		'#endif',

		'void main() {',

		'vec3 dirDiffuse = vec3( 0.0 );',
		'vec3 dirSpecular = vec3( 0.0 );',

		'#if NUM_DIR_LIGHTS > 0',

		'if ( usingDirectionalLighting ) {',

		'for ( int i = 0; i < NUM_DIR_LIGHTS; i++ ) {',

		'vec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );',
		'vec3 dirVector = normalize( lDirection.xyz );',

		'float directionalLightWeightingFull = max( dot( vNormal, dirVector ), 0.0 );',
		'float directionalLightWeightingHalf = max( 10.0 * dot( vNormal, dirVector ) + 0.5, 0.0 );',
		'vec3 dirDiffuseWeight = mix( vec3( directionalLightWeightingFull ), vec3( directionalLightWeightingHalf ), uColor.xyz );',

		'dirDiffuse += dirDiffuseWeight;',

		'}',

		'} else {',

		'dirDiffuse = vec3( 1.0 );',

		'}',

		'#else',

		'dirDiffuse = vec3( 1.0 );',

		'#endif',

		'gl_FragColor = intensity * intensity * vec4( dirDiffuse, 1.0 );',

		'}'

    ].join('\n');

    scope.transparent = true;
    scope.blending = THREE.AdditiveBlending;
    scope.depthWrite = false;
    scope.depthTest = true;
    scope.needsUpdate = true;
    scope.lights = true;
    return scope

};

TGTools.InsideGlowMaterial.prototype = Object.create(THREE.ShaderMaterial.prototype);

TGTools.OutsideGlowMaterial = function (color, aperture, scale, opacity) {


    var scope = new THREE.ShaderMaterial();

    scope.uniforms = {

        aperture: {type: "f", value: aperture},
        scale: {type: "f", value: scale},
        color: {type: "c", value: new THREE.Color(color)},
        opacity: {type: "f", value: opacity}

    };

    scope.vertexShader = [

        'varying vec3 vVertexWorldPosition;',
        'varying vec3 vVertexNormal;',

        'void main(){',

        'vVertexNormal = normalize( normalMatrix * normal );',
        'vVertexWorldPosition = ( modelMatrix * vec4( position, 1.0 ) ).xyz;',
        'gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );',

        '}'

    ].join('\n');

    scope.fragmentShader = [

        'uniform vec3 color;',
        'uniform float aperture;',
        'uniform float scale;',
        'uniform float opacity;',

        'varying vec3 vVertexNormal;',
        'varying vec3 vVertexWorldPosition;',

        'void main() {',

        'vec3 worldCameraToVertex = vVertexWorldPosition - cameraPosition;',
        'vec3 viewCameraToVertex = ( viewMatrix * vec4( worldCameraToVertex, 0.0 ) ).xyz;',
        'viewCameraToVertex	= normalize( viewCameraToVertex );',
        'float intensity = pow( aperture + dot( vVertexNormal, viewCameraToVertex ), scale );',
        'gl_FragColor = vec4( color, intensity ) * opacity;',

        '}'

    ].join('\n');

    scope.transparent = true;
//	scope.alphaTest = 0.9;
    scope.depthWrite = false;
    scope.needsUpdate = true;
    scope.side = THREE.BackSide;

    return scope
};

TGTools.OutsideGlowMaterial.prototype = Object.create(THREE.ShaderMaterial.prototype);


export {TGTools};