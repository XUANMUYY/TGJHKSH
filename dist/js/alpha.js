import * as THREE from 'three'
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls.js"
import {Lensflare, LensflareElement} from 'three/addons/objects/Lensflare.js'
import {TGTools} from './TGTools.atmospherematerial.js'
import {GUI} from "three/addons/libs/lil-gui.module.min.js";
import {gsap} from "gsap";
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import {VignetteShader} from 'three/examples/jsm/shaders/VignetteShader.js'
import {HorizontalBlurShader} from "three/addons/shaders/HorizontalBlurShader.js";
import {VerticalBlurShader} from "three/addons/shaders/VerticalBlurShader.js";
import {CopyShader} from "three/addons/shaders/CopyShader.js";

let EarthRadius = 250;
let EarthSegments = 50;
let VIEW_HEIGHT = window.innerHeight;
let VIEW_WIDTH = window.innerWidth;

let SpaceHtmlContainer;

let scene, renderer;

let composer,
    vignettePass,
    hblur,
    vblur;

let EarthMaterial,
    CloudsMaterial,
    NightMaterial,
    MoonMaterial,
    SunMaterial;

let Earth,
    Clouds,
    NightLight,
    Atmosphere,
    Moon,
    Sun;

let SolarSystem,
    EarthSystem;

let SkyBox;

let camera, control_camera;

let light,
    sunLight,
    sunLight1,
    sunFlare;

let texture_box, path, guiPath;

let imgLoader,
    LoadingManager;

let CtrlRotation = [];

let imagesLoaded = [], diffuseTextures = [], flareTextures = [], earthTextures = [], skyBoxTextures = [],
    guiTextures = [];
let sunTexture;

let then;

let LoadFinished = false;
let Mode = "Space";

initData();
initLoader();
loading();

function initData() {
    path = "../textures/MainTexture/";
    guiPath = "../img/gui/";
}

function initLoader() {
    texture_box = [
        // Galaxy skybox
        path + "skybox/posX.jpg",
        path + "skybox/negX.jpg",
        path + "skybox/posY.jpg",
        path + "skybox/negY.jpg",
        path + "skybox/posZ.jpg",
        path + "skybox/negZ.jpg",
        // Flares
        path + "flares/flare1.jpg",
        path + "flares/flare2.jpg",
        path + "flares/flare3.jpg",
        path + "flares/flare4.jpg",
        path + "flares/flare5.jpg",
        // Earth Orbit textures
        path + "earth/diffuse.jpg",
        path + "earth/bump.jpg",
        path + "earth/specular.jpg",
        path + "earth/clouds.png",
        path + "earth/night.jpg",
        path + "earth/moon.jpg",
        path + "earth/storm.png",
        // top views diffuses
        path + "diffuses/south_america_diffuse.jpg",
        path + "diffuses/europe_diffuse.jpg",
        path + "diffuses/north_america_diffuse.jpg",
        path + "diffuses/africa_diffuse.jpg",
        path + "diffuses/asia_diffuse.jpg",
        path + "diffuses/australia_diffuse.jpg",
        //sun
        path + "flares/sun.png",
    ];
    imgLoader = new PxLoader();

    for (let i = 0, il = texture_box.length; i < il; i++) {

        let imageLoaded = imgLoader.addImage(texture_box[i]);
        imagesLoaded.push(imageLoaded);
    }

    imgLoader.addEventListener('progress', imageLoaderProgress);
    imgLoader.addEventListener('complete', imageLoaderComplete);

    function imageLoaderProgress(event) {

        let percentage = 200;

        if (event.totalCount) {

            percentage = Math.floor(percentage * event.completedCount / event.totalCount);
            document.getElementById('beginButton').style.width = percentage + 'px';
        }

    }

    function imageLoaderComplete(event) {

        let cross = undefined;

        //材质分类器
        for (let i = 0, il = imagesLoaded.length; i < il; i++) {
            imagesLoaded[i].crossOrigin = cross;
            if (i >= 0 && i <= 5) {

                let skyBoxTexture = new THREE.Texture(imagesLoaded[i]);
                skyBoxTexture.anisotropy = 8;
                skyBoxTexture.needsUpdate = true;
                skyBoxTextures.push(skyBoxTexture);
            }
            if (i >= 6 && i <= 10) {

                let flareTexture = new THREE.Texture(imagesLoaded[i]);
                flareTexture.anisotropy = 8;
                flareTexture.needsUpdate = true;
                flareTextures.push(flareTexture);
            }
            if (i >= 11 && i <= 17) {

                let earthTexture = new THREE.Texture(imagesLoaded[i]);
                earthTexture.anisotropy = 8;
                earthTexture.needsUpdate = true;
                earthTextures.push(earthTexture);
            }
            if (i >= 18 && i <= 23) {

                let diffuseTexture = new THREE.Texture(imagesLoaded[i]);
                diffuseTexture.anisotropy = 8;
                diffuseTexture.needsUpdate = true;
                diffuseTextures.push(diffuseTexture);
            }
            if (i === 24) {

                sunTexture = new THREE.Texture(imagesLoaded[i]);
                sunTexture.anisotropy = 8;
                sunTexture.needsUpdate = true;
            }
        }

        document.getElementById('loadingScreen').remove();
        gsap.to(document.getElementById('loadingScreen'), {
            duration: 0.6,
            onComplete: function () {
                //document.getElementById('loadingScreen').remove();
                gsap.to( [ hblur.uniforms[ "h" ], vblur.uniforms[ "v" ] ], {
                    duration: 2.0,
                    value: 0.0 / 512,
                    delay: 0.5,
                    ease: "Linear.easeNone",
                } );
                gsap.to( vignettePass.uniforms[ "offset" ],  {
                    duration: 2.0,
                    value: 0.0,
                    delay: 0.5,
                    ease: "Cubic.easeOut",
                    onComplete: function () {
                        LoadFinished = true;
                    }
                } );
            }
        })

        //模式判断
        if (Mode==="Space"){
            SpaceMode();
        }
    }
}

function loading() {
    let loadingScreen = document.createElement('div');
    loadingScreen.innerText = 'hello_world';
    loadingScreen.id = 'loadingScreen';

    let loadingImage = document.createElement('img');
    loadingImage.id = 'imageContainer';
    loadingImage.src = '../img/gui/loadingScreen.jpg';
    loadingScreen.appendChild(loadingImage);

    let beginButton = document.createElement('div');
    beginButton.id = 'beginButton';
    loadingScreen.appendChild(beginButton);
    loadingImage.addEventListener('load', function () {
        document.body.appendChild(loadingScreen);
        gsap.to(loadingScreen, {
            duration: 0.4,
            opacity: 1.0,
            onComplete: function () {
                LoadFinished = false;
                imgLoader.start();
            }
        })
    }, false)
}

function SpaceMode() {
    SpaceInitRenderer();
    SpaceInitCamera();
    SpaceInitControlCamera();
    SpaceInitScene();
    SpaceInitSkyBox();
    SpaceInitCube();
    SpaceInitSystem();
    SpaceInitShaderPass();
    SpaceInitLight();
    SpaceInitFlare();
    animate();
}

function SpaceInitRenderer() {
    renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
    renderer.setSize(VIEW_WIDTH, VIEW_HEIGHT);
    renderer.setClearColor(0x000000, 1);
    renderer.sortObjects = false;
    {
        SpaceHtmlContainer = renderer.domElement;
        SpaceHtmlContainer.id = "SpaceHtmlContainer";
        document.body.appendChild(SpaceHtmlContainer);
    }
}

function SpaceInitCamera() {
    let fov = 40 // 视野范围
    let aspect = VIEW_WIDTH / VIEW_HEIGHT // 相机默认值 画布的宽高比
    let near = 1 // 近平面
    let far = 40000 // 远平面.
    // 透视投影相机
    camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
    // 相机位置  正上方向下看
    camera.position.set(-2000, 500, -1000)// 相机位置
    camera.lookAt(0, 0, 0) // 相机朝向
}

function SpaceInitControlCamera() {
    control_camera = new OrbitControls(camera, renderer.domElement);
    control_camera.zoomSpeed = 0.07;
    control_camera.distance = 900;
    control_camera.minDistance = 900;
    control_camera.maxDistance = 1120;
    // control_camera.enableRotate = false;
    // control_camera.enableZoom = false;
}

function SpaceInitScene() {
    //空间
    scene = new THREE.Scene();
    scene.background = '#000000'
}

function SpaceInitSkyBox() {
    //Galaxy
    {
        LoadingManager = new THREE.LoadingManager();
        LoadingManager.onStart = function (url, itemsLoaded, itemsTotal) {
            console.log('Started loading');
        };
        LoadingManager.onLoad = function () {
            console.log('Loading complete!');
            scene.background = Galaxy;
        };
        LoadingManager.onProgress = function (url, itemsLoaded, itemsTotal) {
            console.log('Loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.');
        };
        LoadingManager.onError = function (url) {
            console.log('There was an error loading ' + url);
        };

        let GalaxyGeometry = new THREE.CubeTextureLoader(LoadingManager)
        let Galaxy = GalaxyGeometry.load([
            path + 'skybox/posX.jpg',
            path + 'skybox/negX.jpg',
            path + 'skybox/posY.jpg',
            path + 'skybox/negY.jpg',
            path + 'skybox/posZ.jpg',
            path + 'skybox/negZ.jpg',]);
    }
}

function SpaceInitCube() {
    //Earth
    {
        EarthMaterial = new THREE.MeshPhongMaterial({
            map: earthTextures[0],
            bumpMap: earthTextures[1],
            specularMap: earthTextures[2],
            shininess: 40,
            bumpScale: 2.0,
            specular: '#141310',
        });
        let EarthGeometry = new THREE.OctahedronGeometry(EarthRadius, EarthSegments);
        Earth = new THREE.Mesh(EarthGeometry, EarthMaterial);
        Earth.rotation.y = THREE.MathUtils.degToRad(180);
        Earth.rotation.z = THREE.MathUtils.degToRad(23);
        {
            Earth.rotation.xinit = Earth.rotation.x ;
            Earth.rotation.xspeed = 0;
            Earth.rotation.yinit = Earth.rotation.y ;
            Earth.rotation.yspeed = 0.01;
            Earth.rotation.zinit = Earth.rotation.z ;
            Earth.rotation.zspeed = 0;
            CtrlRotation.push(Earth);
        }
        //scene.add(Earth);

    }

    // Clouds
    {
        CloudsMaterial = new THREE.MeshLambertMaterial({
            map: earthTextures[3],
            transparent: true,
            depthWrite: false,
        });
        let cloudsGeometry = new THREE.OctahedronGeometry(EarthRadius + 0.3, EarthSegments);
        Clouds = new THREE.Mesh(cloudsGeometry, CloudsMaterial);
        Clouds.rotation.y = THREE.MathUtils.degToRad(180);
        {
            Clouds.rotation.xinit = Clouds.rotation.x ;
            Clouds.rotation.xspeed = 0.01;
            Clouds.rotation.yinit = Clouds.rotation.y ;
            Clouds.rotation.yspeed = -0.01;
            Clouds.rotation.zinit = Clouds.rotation.z ;
            Clouds.rotation.zspeed = 0;
            CtrlRotation.push(Clouds);
        }
        Earth.add(Clouds);
    }

    // Night lights
    {
        NightMaterial = new THREE.MeshLambertMaterial({
            map: earthTextures[4],
            color: 0xf1ba3c,
            opacity: 0.8,
            side: THREE.BackSide,
            transparent: true,
            depthWrite: false,
            blending: THREE.AdditiveBlending,
            blendDst: THREE.OneFactor,
            blendSrc: THREE.OneFactor,
        });

        let NightGeometry = new THREE.OctahedronGeometry(EarthRadius, EarthSegments);
        NightGeometry.applyMatrix4(new THREE.Matrix4().makeScale(-1, 1, 1));
        NightLight = new THREE.Mesh(NightGeometry, NightMaterial);
        NightLight.rotation.y = THREE.MathUtils.degToRad(180);
        Earth.add(NightLight);
    }

    // Atmosphere
    {
        Atmosphere = new TGTools.Atmosphere(EarthRadius, EarthSegments);
        Earth.add(Atmosphere);
    }

    // Moon
    {
        MoonMaterial = new THREE.MeshLambertMaterial({
            map: earthTextures[5],
        });
        let moonGeometry = new THREE.OctahedronGeometry(45, 2);
        Moon = new THREE.Mesh(moonGeometry, MoonMaterial);
        Moon.position.set(1000, 500, -5000);
        Moon.rotation.y = THREE.MathUtils.degToRad(90);
        //Earth.add(Moon);
    }

    //Sun
    {
        SunMaterial = new THREE.SpriteMaterial({
            map: sunTexture,
            transparent: true,
            depthWrite: false

        });
        Sun = new THREE.Sprite(SunMaterial);
        Sun.position.set(10000, 0, 0);
        Sun.scale.x = Sun.scale.y = 200;
        //scene.add(Sun);
    }

}

// TODO 组建SYSTEM，重新排布行星
function SpaceInitSystem(){
    SolarSystem = new THREE.Object3D();
    EarthSystem = new THREE.Object3D();

    {
        EarthSystem.add(Earth);
        EarthSystem.add(Moon)
    }

    {
        SolarSystem.add(Sun);
    }
    scene.add(SolarSystem);
    scene.add(EarthSystem);
}

// TODO 提高天空盒中星空贴图亮度
function SpaceInitLight() {
    //环境光
    {
        let ambientLight = new THREE.AmbientLight(0x07215c,1.2);
        ambientLight.color.setRGB(0.02, 0.02, 0.07);
        scene.add(ambientLight);
    }
    //太阳光
    {
        sunLight = new THREE.PointLight('#e8f7ff', 1.2);
        sunLight.position.copy(Sun.position);
        scene.add(sunLight);
        sunLight1 = new THREE.DirectionalLight(0x000000, 0);
        sunLight1.position.set(1, 0, 0).normalize();
        scene.add(sunLight1);
    }
    // // 方向光
    // light = new THREE.PointLight(color, intensity)
    // light.position.set(0, 0, 1000)
    // scene.add(light)
}

function SpaceInitFlare() {
    //太阳镜面眩光
    sunFlare = new Lensflare(new LensflareElement());
    sunFlare.addElement(new LensflareElement(flareTextures[0], 400, 0.0));
    sunFlare.addElement(new LensflareElement(flareTextures[4], 900, 0.0));
    sunFlare.addElement(new LensflareElement(flareTextures[2], 70, 0.1));
    sunFlare.addElement(new LensflareElement(flareTextures[1], 80, 0.2));
    sunFlare.addElement(new LensflareElement(flareTextures[3], 220, 0.3, new THREE.Color('#0033ff')));
    sunFlare.addElement(new LensflareElement(flareTextures[1], 100, 0.4, new THREE.Color('#004422')));
    sunFlare.addElement(new LensflareElement(flareTextures[1], 310, 0.5, new THREE.Color('#6600cc')));
    sunFlare.addElement(new LensflareElement(flareTextures[3], 490, 0.6, new THREE.Color('#003300')));
    sunFlare.addElement(new LensflareElement(flareTextures[2], 150, 0.6, new THREE.Color('#0033ff')));
    sunFlare.addElement(new LensflareElement(flareTextures[3], 700, 0.9, new THREE.Color('#ffffff')));
    sunLight.add(sunFlare);
}

// TODO 加入后期处理通道
// TODO FINISHED
function SpaceInitShaderPass(){

    var renderTarget,
        renderTargetParameters;

    renderTargetParameters = { minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, format: THREE.RGBAFormat, stencilBufer: true };
    renderTarget = new THREE.WebGLRenderTarget( VIEW_WIDTH, VIEW_HEIGHT, renderTargetParameters );

    composer = new EffectComposer(renderer, renderTarget );

    let renderPass = new RenderPass(scene,camera );
    composer.addPass( renderPass );

    {
        vignettePass = new ShaderPass( VignetteShader );
        vignettePass.uniforms[ "darkness" ].value = 100.0;
        vignettePass.uniforms[ "offset" ].value = 100.0;
        composer.addPass( vignettePass );

        hblur = new ShaderPass(HorizontalBlurShader);
        hblur.uniforms["h"].value = 2.0 / 512;
        composer.addPass(hblur);

        vblur = new ShaderPass(VerticalBlurShader);
        vblur.uniforms["v"].value = 2.0 / 512;
        composer.addPass(vblur);
    }

    let copyShader = new ShaderPass( CopyShader );
    copyShader.renderToScreen = true;
    composer.addPass( copyShader );
}

// TODO 渲染器选择，添加在后期渲染器与直接渲染器间的切换
function render(time) {
    time *= 0.001;
    const deltaTime = time - then*(then!=null);
    then = time;

    SpaceRotationAnimation(time);

    // renderer.clear();
    control_camera.update();
    // renderer.render(scene, camera);
    composer.render(deltaTime);
}

function animate() {
    window.requestAnimationFrame((time) => {
        render(time);
        requestAnimationFrame(animate);
    })
}

function SpaceRotationAnimation(time){
    CtrlRotation.forEach((obj) => {
        obj.rotation.x = obj.rotation.xinit+ time*obj.rotation.xspeed;
        obj.rotation.y = obj.rotation.yinit+ time*obj.rotation.yspeed;
        obj.rotation.z = obj.rotation.zinit+ time*obj.rotation.zspeed;
    })
}
