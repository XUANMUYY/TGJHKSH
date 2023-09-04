(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const tl="154",Gi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Wi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ed=0,Hl=1,Td=2,Bh=1,bd=2,On=3,hi=0,Re=1,kn=2,Gn=0,xr=1,os=2,Gl=3,Wl=4,Ad=5,fr=100,wd=101,Rd=102,Xl=103,Yl=104,Cd=200,wo=201,Pd=202,Ld=203,zh=204,kh=205,Dd=206,Ud=207,Id=208,Nd=209,Fd=210,Od=0,Bd=1,zd=2,Ro=3,kd=4,Vd=5,Hd=6,Gd=7,va=0,Wd=1,Xd=2,Wn=0,Yd=1,qd=2,$d=3,jd=4,Kd=5,Vh=300,Tr=301,br=302,Co=303,Po=304,xa=306,Lo=1e3,gn=1001,Do=1002,Se=1003,ql=1004,Pa=1005,Fe=1006,Zd=1007,ls=1008,oi=1009,Jd=1010,Qd=1011,el=1012,Hh=1013,ei=1014,ni=1015,Ar=1016,Gh=1017,Wh=1018,Pi=1020,tf=1021,sn=1023,ef=1024,nf=1025,Li=1026,wr=1027,rf=1028,Xh=1029,sf=1030,Yh=1031,qh=1033,La=33776,Da=33777,Ua=33778,Ia=33779,$l=35840,jl=35841,Kl=35842,Zl=35843,af=36196,Jl=37492,Ql=37496,tc=37808,ec=37809,nc=37810,ic=37811,rc=37812,sc=37813,ac=37814,oc=37815,lc=37816,cc=37817,hc=37818,uc=37819,dc=37820,fc=37821,Na=36492,of=36283,pc=36284,mc=36285,_c=36286,$h=3e3,Di=3001,lf=3200,cf=3201,nl=0,hf=1,Ui="",Pt="srgb",Rn="srgb-linear",jh="display-p3",Fa=7680,uf=519,df=512,ff=513,pf=514,mf=515,_f=516,gf=517,vf=518,xf=519,Uo=35044,gc="300 es",Io=1035,Vn=2e3,la=2001;class ki{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,t);t.target=null}}}const Te=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let vc=1234567;const Qr=Math.PI/180,cs=180/Math.PI;function Xn(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Te[r&255]+Te[r>>8&255]+Te[r>>16&255]+Te[r>>24&255]+"-"+Te[t&255]+Te[t>>8&255]+"-"+Te[t>>16&15|64]+Te[t>>24&255]+"-"+Te[e&63|128]+Te[e>>8&255]+"-"+Te[e>>16&255]+Te[e>>24&255]+Te[n&255]+Te[n>>8&255]+Te[n>>16&255]+Te[n>>24&255]).toLowerCase()}function Ae(r,t,e){return Math.max(t,Math.min(e,r))}function il(r,t){return(r%t+t)%t}function Mf(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function yf(r,t,e){return r!==t?(e-r)/(t-r):0}function ts(r,t,e){return(1-e)*r+e*t}function Sf(r,t,e,n){return ts(r,t,1-Math.exp(-e*n))}function Ef(r,t=1){return t-Math.abs(il(r,t*2)-t)}function Tf(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function bf(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function Af(r,t){return r+Math.floor(Math.random()*(t-r+1))}function wf(r,t){return r+Math.random()*(t-r)}function Rf(r){return r*(.5-Math.random())}function Cf(r){r!==void 0&&(vc=r);let t=vc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Pf(r){return r*Qr}function Lf(r){return r*cs}function No(r){return(r&r-1)===0&&r!==0}function Df(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function ca(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Uf(r,t,e,n,i){const s=Math.cos,a=Math.sin,o=s(e/2),l=a(e/2),c=s((t+n)/2),h=a((t+n)/2),d=s((t-n)/2),u=a((t-n)/2),m=s((n-t)/2),g=a((n-t)/2);switch(i){case"XYX":r.set(o*h,l*d,l*u,o*c);break;case"YZY":r.set(l*u,o*h,l*d,o*c);break;case"ZXZ":r.set(l*d,l*u,o*h,o*c);break;case"XZX":r.set(o*h,l*g,l*m,o*c);break;case"YXY":r.set(l*m,o*h,l*g,o*c);break;case"ZYZ":r.set(l*g,l*m,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Hn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Xt(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Or={DEG2RAD:Qr,RAD2DEG:cs,generateUUID:Xn,clamp:Ae,euclideanModulo:il,mapLinear:Mf,inverseLerp:yf,lerp:ts,damp:Sf,pingpong:Ef,smoothstep:Tf,smootherstep:bf,randInt:Af,randFloat:wf,randFloatSpread:Rf,seededRandom:Cf,degToRad:Pf,radToDeg:Lf,isPowerOfTwo:No,ceilPowerOfTwo:Df,floorPowerOfTwo:ca,setQuaternionFromProperEuler:Uf,normalize:Xt,denormalize:Hn};class pt{constructor(t=0,e=0){pt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*i+t.x,this.y=s*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class It{constructor(t,e,n,i,s,a,o,l,c){It.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c)}set(t,e,n,i,s,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],m=n[5],g=n[8],_=i[0],p=i[3],f=i[6],M=i[1],v=i[4],y=i[7],S=i[2],w=i[5],b=i[8];return s[0]=a*_+o*M+l*S,s[3]=a*p+o*v+l*w,s[6]=a*f+o*y+l*b,s[1]=c*_+h*M+d*S,s[4]=c*p+h*v+d*w,s[7]=c*f+h*y+d*b,s[2]=u*_+m*M+g*S,s[5]=u*p+m*v+g*w,s[8]=u*f+m*y+g*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*s*h+n*o*l+i*s*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*s,m=c*s-a*l,g=e*d+n*u+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=d*_,t[1]=(i*c-h*n)*_,t[2]=(o*n-i*a)*_,t[3]=u*_,t[4]=(h*e-i*l)*_,t[5]=(i*s-o*e)*_,t[6]=m*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Oa.makeScale(t,e)),this}rotate(t){return this.premultiply(Oa.makeRotation(-t)),this}translate(t,e){return this.premultiply(Oa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Oa=new It;function Kh(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function hs(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}const xc={};function es(r){r in xc||(xc[r]=!0,console.warn(r))}function Mr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ba(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const If=new It().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Nf=new It().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Ff(r){return r.convertSRGBToLinear().applyMatrix3(Nf)}function Of(r){return r.applyMatrix3(If).convertLinearToSRGB()}const Bf={[Rn]:r=>r,[Pt]:r=>r.convertSRGBToLinear(),[jh]:Ff},zf={[Rn]:r=>r,[Pt]:r=>r.convertLinearToSRGB(),[jh]:Of},dn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return Rn},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;const n=Bf[t],i=zf[e];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${t}" to "${e}".`);return i(n(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this.workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this.workingColorSpace)}};let Xi;class Zh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Xi===void 0&&(Xi=hs("canvas")),Xi.width=t.width,Xi.height=t.height;const n=Xi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Xi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=hs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Mr(s[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Mr(e[n]/255)*255):e[n]=Mr(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let kf=0;class Jh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:kf++}),this.uuid=Xn(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(za(i[a].image)):s.push(za(i[a]))}else s=za(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function za(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Zh.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Vf=0;class he extends ki{constructor(t=he.DEFAULT_IMAGE,e=he.DEFAULT_MAPPING,n=gn,i=gn,s=Fe,a=ls,o=sn,l=oi,c=he.DEFAULT_ANISOTROPY,h=Ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vf++}),this.uuid=Xn(),this.name="",this.source=new Jh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new It,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(es("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Di?Pt:Ui),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Vh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Lo:t.x=t.x-Math.floor(t.x);break;case gn:t.x=t.x<0?0:1;break;case Do:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Lo:t.y=t.y-Math.floor(t.y);break;case gn:t.y=t.y<0?0:1;break;case Do:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return es("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Pt?Di:$h}set encoding(t){es("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Di?Pt:Ui}}he.DEFAULT_IMAGE=null;he.DEFAULT_MAPPING=Vh;he.DEFAULT_ANISOTROPY=1;class qt{constructor(t=0,e=0,n=0,i=1){qt.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],m=l[5],g=l[9],_=l[2],p=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,y=(m+1)/2,S=(f+1)/2,w=(h+u)/4,b=(d+_)/4,P=(g+p)/4;return v>y&&v>S?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=w/n,s=b/n):y>S?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=w/i,s=P/i):S<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(S),n=b/s,i=P/s),this.set(n,i,s,e),this}let M=Math.sqrt((p-g)*(p-g)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(d-_)/M,this.z=(u-h)/M,this.w=Math.acos((c+m+f-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class qn extends ki{constructor(t=1,e=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new qt(0,0,t,e),this.scissorTest=!1,this.viewport=new qt(0,0,t,e);const i={width:t,height:e,depth:1};n.encoding!==void 0&&(es("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Di?Pt:Ui),this.texture=new he(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Fe,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Jh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qh extends he{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Se,this.minFilter=Se,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hf extends he{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Se,this.minFilter=Se,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bi{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3];const u=s[a+0],m=s[a+1],g=s[a+2],_=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(o===1){t[e+0]=u,t[e+1]=m,t[e+2]=g,t[e+3]=_;return}if(d!==_||l!==u||c!==m||h!==g){let p=1-o;const f=l*u+c*m+h*g+d*_,M=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const S=Math.sqrt(v),w=Math.atan2(S,f*M);p=Math.sin(p*w)/S,o=Math.sin(o*w)/S}const y=o*M;if(l=l*p+u*y,c=c*p+m*y,h=h*p+g*y,d=d*p+_*y,p===1-o){const S=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=S,c*=S,h*=S,d*=S}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=s[a],u=s[a+1],m=s[a+2],g=s[a+3];return t[e]=o*g+h*d+l*m-c*u,t[e+1]=l*g+h*u+c*d-o*m,t[e+2]=c*g+h*m+o*u-l*d,t[e+3]=h*g-o*d-l*u-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,i=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),d=o(s/2),u=l(n/2),m=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=u*h*d+c*m*g,this._y=c*m*d-u*h*g,this._z=c*h*g+u*m*d,this._w=c*h*d-u*m*g;break;case"YXZ":this._x=u*h*d+c*m*g,this._y=c*m*d-u*h*g,this._z=c*h*g-u*m*d,this._w=c*h*d+u*m*g;break;case"ZXY":this._x=u*h*d-c*m*g,this._y=c*m*d+u*h*g,this._z=c*h*g+u*m*d,this._w=c*h*d-u*m*g;break;case"ZYX":this._x=u*h*d-c*m*g,this._y=c*m*d+u*h*g,this._z=c*h*g-u*m*d,this._w=c*h*d+u*m*g;break;case"YZX":this._x=u*h*d+c*m*g,this._y=c*m*d+u*h*g,this._z=c*h*g-u*m*d,this._w=c*h*d-u*m*g;break;case"XZY":this._x=u*h*d-c*m*g,this._y=c*m*d-u*h*g,this._z=c*h*g+u*m*d,this._w=c*h*d+u*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){const m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-c)*m,this._z=(a-i)*m}else if(n>o&&n>d){const m=2*Math.sqrt(1+n-o-d);this._w=(h-l)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(s+c)/m}else if(o>d){const m=2*Math.sqrt(1+o-n-d);this._w=(s-c)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+d-n-o);this._w=(a-i)/m,this._x=(s+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ae(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-s*l,this._y=i*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*i+e*this._y,this._z=m*s+e*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=a*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=s*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(s),n*Math.cos(s),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,n=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Mc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Mc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=l*e+a*i-o*n,h=l*n+o*e-s*i,d=l*i+s*n-a*e,u=-s*e-a*n-o*i;return this.x=c*l+u*-s+h*-o-d*-a,this.y=h*l+u*-a+d*-s-c*-o,this.z=d*l+u*-o+c*-a-h*-s,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ka.copy(this).projectOnVector(t),this.sub(ka)}reflect(t){return this.sub(ka.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ka=new D,Mc=new Bi;class Ms{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Dn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Dn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Dn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){if(t.updateWorldMatrix(!1,!1),t.boundingBox!==void 0)t.boundingBox===null&&t.computeBoundingBox(),Yi.copy(t.boundingBox),Yi.applyMatrix4(t.matrixWorld),this.union(Yi);else{const i=t.geometry;if(i!==void 0)if(e&&i.attributes!==void 0&&i.attributes.position!==void 0){const s=i.attributes.position;for(let a=0,o=s.count;a<o;a++)Dn.fromBufferAttribute(s,a).applyMatrix4(t.matrixWorld),this.expandByPoint(Dn)}else i.boundingBox===null&&i.computeBoundingBox(),Yi.copy(i.boundingBox),Yi.applyMatrix4(t.matrixWorld),this.union(Yi)}const n=t.children;for(let i=0,s=n.length;i<s;i++)this.expandByObject(n[i],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Dn),Dn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Br),bs.subVectors(this.max,Br),qi.subVectors(t.a,Br),$i.subVectors(t.b,Br),ji.subVectors(t.c,Br),Kn.subVectors($i,qi),Zn.subVectors(ji,$i),_i.subVectors(qi,ji);let e=[0,-Kn.z,Kn.y,0,-Zn.z,Zn.y,0,-_i.z,_i.y,Kn.z,0,-Kn.x,Zn.z,0,-Zn.x,_i.z,0,-_i.x,-Kn.y,Kn.x,0,-Zn.y,Zn.x,0,-_i.y,_i.x,0];return!Va(e,qi,$i,ji,bs)||(e=[1,0,0,0,1,0,0,0,1],!Va(e,qi,$i,ji,bs))?!1:(As.crossVectors(Kn,Zn),e=[As.x,As.y,As.z],Va(e,qi,$i,ji,bs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Dn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Dn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ln),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ln=[new D,new D,new D,new D,new D,new D,new D,new D],Dn=new D,Yi=new Ms,qi=new D,$i=new D,ji=new D,Kn=new D,Zn=new D,_i=new D,Br=new D,bs=new D,As=new D,gi=new D;function Va(r,t,e,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){gi.fromArray(r,s);const o=i.x*Math.abs(gi.x)+i.y*Math.abs(gi.y)+i.z*Math.abs(gi.z),l=t.dot(gi),c=e.dot(gi),h=n.dot(gi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Gf=new Ms,zr=new D,Ha=new D;class rl{constructor(t=new D,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Gf.setFromPoints(t).getCenter(n);let i=0;for(let s=0,a=t.length;s<a;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;zr.subVectors(t,this.center);const e=zr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(zr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ha.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(zr.copy(t.center).add(Ha)),this.expandByPoint(zr.copy(t.center).sub(Ha))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Un=new D,Ga=new D,ws=new D,Jn=new D,Wa=new D,Rs=new D,Xa=new D;class Wf{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Un)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Un.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Un.copy(this.origin).addScaledVector(this.direction,e),Un.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Ga.copy(t).add(e).multiplyScalar(.5),ws.copy(e).sub(t).normalize(),Jn.copy(this.origin).sub(Ga);const s=t.distanceTo(e)*.5,a=-this.direction.dot(ws),o=Jn.dot(this.direction),l=-Jn.dot(ws),c=Jn.lengthSq(),h=Math.abs(1-a*a);let d,u,m,g;if(h>0)if(d=a*l-o,u=a*o-l,g=s*h,d>=0)if(u>=-g)if(u<=g){const _=1/h;d*=_,u*=_,m=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=s,d=Math.max(0,-(a*u+o)),m=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(a*u+o)),m=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*s+o)),u=d>0?-s:Math.min(Math.max(-s,-l),s),m=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-s,-l),s),m=u*(u+2*l)+c):(d=Math.max(0,-(a*s+o)),u=d>0?s:Math.min(Math.max(-s,-l),s),m=-d*d+u*(u+2*l)+c);else u=a>0?-s:s,d=Math.max(0,-(a*u+o)),m=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Ga).addScaledVector(ws,u),m}intersectSphere(t,e){Un.subVectors(t.center,this.origin);const n=Un.dot(this.direction),i=Un.dot(Un)-n*n,s=t.radius*t.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(s=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(s=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Un)!==null}intersectTriangle(t,e,n,i,s){Wa.subVectors(e,t),Rs.subVectors(n,t),Xa.crossVectors(Wa,Rs);let a=this.direction.dot(Xa),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Jn.subVectors(this.origin,t);const l=o*this.direction.dot(Rs.crossVectors(Jn,Rs));if(l<0)return null;const c=o*this.direction.dot(Wa.cross(Jn));if(c<0||l+c>a)return null;const h=-o*Jn.dot(Xa);return h<0?null:this.at(h/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ne{constructor(t,e,n,i,s,a,o,l,c,h,d,u,m,g,_,p){ne.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c,h,d,u,m,g,_,p)}set(t,e,n,i,s,a,o,l,c,h,d,u,m,g,_,p){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=i,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=d,f[14]=u,f[3]=m,f[7]=g,f[11]=_,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ne().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Ki.setFromMatrixColumn(t,0).length(),s=1/Ki.setFromMatrixColumn(t,1).length(),a=1/Ki.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const u=a*h,m=a*d,g=o*h,_=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=m+g*c,e[5]=u-_*c,e[9]=-o*l,e[2]=_-u*c,e[6]=g+m*c,e[10]=a*l}else if(t.order==="YXZ"){const u=l*h,m=l*d,g=c*h,_=c*d;e[0]=u+_*o,e[4]=g*o-m,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=m*o-g,e[6]=_+u*o,e[10]=a*l}else if(t.order==="ZXY"){const u=l*h,m=l*d,g=c*h,_=c*d;e[0]=u-_*o,e[4]=-a*d,e[8]=g+m*o,e[1]=m+g*o,e[5]=a*h,e[9]=_-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const u=a*h,m=a*d,g=o*h,_=o*d;e[0]=l*h,e[4]=g*c-m,e[8]=u*c+_,e[1]=l*d,e[5]=_*c+u,e[9]=m*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const u=a*l,m=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=_-u*d,e[8]=g*d+m,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=m*d+g,e[10]=u-_*d}else if(t.order==="XZY"){const u=a*l,m=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+_,e[5]=a*h,e[9]=m*d-g,e[2]=g*d-m,e[6]=o*h,e[10]=_*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Xf,t,Yf)}lookAt(t,e,n){const i=this.elements;return Ge.subVectors(t,e),Ge.lengthSq()===0&&(Ge.z=1),Ge.normalize(),Qn.crossVectors(n,Ge),Qn.lengthSq()===0&&(Math.abs(n.z)===1?Ge.x+=1e-4:Ge.z+=1e-4,Ge.normalize(),Qn.crossVectors(n,Ge)),Qn.normalize(),Cs.crossVectors(Ge,Qn),i[0]=Qn.x,i[4]=Cs.x,i[8]=Ge.x,i[1]=Qn.y,i[5]=Cs.y,i[9]=Ge.y,i[2]=Qn.z,i[6]=Cs.z,i[10]=Ge.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],m=n[13],g=n[2],_=n[6],p=n[10],f=n[14],M=n[3],v=n[7],y=n[11],S=n[15],w=i[0],b=i[4],P=i[8],x=i[12],T=i[1],V=i[5],$=i[9],U=i[13],N=i[2],O=i[6],K=i[10],k=i[14],X=i[3],Q=i[7],Z=i[11],z=i[15];return s[0]=a*w+o*T+l*N+c*X,s[4]=a*b+o*V+l*O+c*Q,s[8]=a*P+o*$+l*K+c*Z,s[12]=a*x+o*U+l*k+c*z,s[1]=h*w+d*T+u*N+m*X,s[5]=h*b+d*V+u*O+m*Q,s[9]=h*P+d*$+u*K+m*Z,s[13]=h*x+d*U+u*k+m*z,s[2]=g*w+_*T+p*N+f*X,s[6]=g*b+_*V+p*O+f*Q,s[10]=g*P+_*$+p*K+f*Z,s[14]=g*x+_*U+p*k+f*z,s[3]=M*w+v*T+y*N+S*X,s[7]=M*b+v*V+y*O+S*Q,s[11]=M*P+v*$+y*K+S*Z,s[15]=M*x+v*U+y*k+S*z,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],m=t[14],g=t[3],_=t[7],p=t[11],f=t[15];return g*(+s*l*d-i*c*d-s*o*u+n*c*u+i*o*m-n*l*m)+_*(+e*l*m-e*c*u+s*a*u-i*a*m+i*c*h-s*l*h)+p*(+e*c*d-e*o*m-s*a*d+n*a*m+s*o*h-n*c*h)+f*(-i*o*h-e*l*d+e*o*u+i*a*d-n*a*u+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],m=t[11],g=t[12],_=t[13],p=t[14],f=t[15],M=d*p*c-_*u*c+_*l*m-o*p*m-d*l*f+o*u*f,v=g*u*c-h*p*c-g*l*m+a*p*m+h*l*f-a*u*f,y=h*_*c-g*d*c+g*o*m-a*_*m-h*o*f+a*d*f,S=g*d*l-h*_*l-g*o*u+a*_*u+h*o*p-a*d*p,w=e*M+n*v+i*y+s*S;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/w;return t[0]=M*b,t[1]=(_*u*s-d*p*s-_*i*m+n*p*m+d*i*f-n*u*f)*b,t[2]=(o*p*s-_*l*s+_*i*c-n*p*c-o*i*f+n*l*f)*b,t[3]=(d*l*s-o*u*s-d*i*c+n*u*c+o*i*m-n*l*m)*b,t[4]=v*b,t[5]=(h*p*s-g*u*s+g*i*m-e*p*m-h*i*f+e*u*f)*b,t[6]=(g*l*s-a*p*s-g*i*c+e*p*c+a*i*f-e*l*f)*b,t[7]=(a*u*s-h*l*s+h*i*c-e*u*c-a*i*m+e*l*m)*b,t[8]=y*b,t[9]=(g*d*s-h*_*s-g*n*m+e*_*m+h*n*f-e*d*f)*b,t[10]=(a*_*s-g*o*s+g*n*c-e*_*c-a*n*f+e*o*f)*b,t[11]=(h*o*s-a*d*s-h*n*c+e*d*c+a*n*m-e*o*m)*b,t[12]=S*b,t[13]=(h*_*i-g*d*i+g*n*u-e*_*u-h*n*p+e*d*p)*b,t[14]=(g*o*i-a*_*i-g*n*l+e*_*l+a*n*p-e*o*p)*b,t[15]=(a*d*i-h*o*i+h*n*l-e*d*l-a*n*u+e*o*u)*b,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,a){return this.set(1,n,s,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,h=a+a,d=o+o,u=s*c,m=s*h,g=s*d,_=a*h,p=a*d,f=o*d,M=l*c,v=l*h,y=l*d,S=n.x,w=n.y,b=n.z;return i[0]=(1-(_+f))*S,i[1]=(m+y)*S,i[2]=(g-v)*S,i[3]=0,i[4]=(m-y)*w,i[5]=(1-(u+f))*w,i[6]=(p+M)*w,i[7]=0,i[8]=(g+v)*b,i[9]=(p-M)*b,i[10]=(1-(u+_))*b,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=Ki.set(i[0],i[1],i[2]).length();const a=Ki.set(i[4],i[5],i[6]).length(),o=Ki.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],fn.copy(this);const c=1/s,h=1/a,d=1/o;return fn.elements[0]*=c,fn.elements[1]*=c,fn.elements[2]*=c,fn.elements[4]*=h,fn.elements[5]*=h,fn.elements[6]*=h,fn.elements[8]*=d,fn.elements[9]*=d,fn.elements[10]*=d,e.setFromRotationMatrix(fn),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,i,s,a,o=Vn){const l=this.elements,c=2*s/(e-t),h=2*s/(n-i),d=(e+t)/(e-t),u=(n+i)/(n-i);let m,g;if(o===Vn)m=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===la)m=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,a,o=Vn){const l=this.elements,c=1/(e-t),h=1/(n-i),d=1/(a-s),u=(e+t)*c,m=(n+i)*h;let g,_;if(o===Vn)g=(a+s)*d,_=-2*d;else if(o===la)g=s*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ki=new D,fn=new ne,Xf=new D(0,0,0),Yf=new D(1,1,1),Qn=new D,Cs=new D,Ge=new D,yc=new ne,Sc=new Bi;class Ma{constructor(t=0,e=0,n=0,i=Ma.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],m=i[10];switch(e){case"XYZ":this._y=Math.asin(Ae(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ae(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ae(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ae(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ae(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Ae(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return yc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(yc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Sc.setFromEuler(this),this.setFromQuaternion(Sc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ma.DEFAULT_ORDER="XYZ";class tu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let qf=0;const Ec=new D,Zi=new Bi,In=new ne,Ps=new D,kr=new D,$f=new D,jf=new Bi,Tc=new D(1,0,0),bc=new D(0,1,0),Ac=new D(0,0,1),Kf={type:"added"},wc={type:"removed"};class se extends ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qf++}),this.uuid=Xn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=se.DEFAULT_UP.clone();const t=new D,e=new Ma,n=new Bi,i=new D(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ne},normalMatrix:{value:new It}}),this.matrix=new ne,this.matrixWorld=new ne,this.matrixAutoUpdate=se.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new tu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Zi.setFromAxisAngle(t,e),this.quaternion.multiply(Zi),this}rotateOnWorldAxis(t,e){return Zi.setFromAxisAngle(t,e),this.quaternion.premultiply(Zi),this}rotateX(t){return this.rotateOnAxis(Tc,t)}rotateY(t){return this.rotateOnAxis(bc,t)}rotateZ(t){return this.rotateOnAxis(Ac,t)}translateOnAxis(t,e){return Ec.copy(t).applyQuaternion(this.quaternion),this.position.add(Ec.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Tc,t)}translateY(t){return this.translateOnAxis(bc,t)}translateZ(t){return this.translateOnAxis(Ac,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(In.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ps.copy(t):Ps.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),kr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?In.lookAt(kr,Ps,this.up):In.lookAt(Ps,kr,this.up),this.quaternion.setFromRotationMatrix(In),i&&(In.extractRotation(i.matrixWorld),Zi.setFromRotationMatrix(In),this.quaternion.premultiply(Zi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Kf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(wc)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(wc)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),In.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),In.multiply(t.parent.matrixWorld)),t.applyMatrix4(In),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e){let n=[];this[t]===e&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectsByProperty(t,e);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(kr,t,$f),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(kr,jf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++){const o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));i.material=o}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),m=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}se.DEFAULT_UP=new D(0,1,0);se.DEFAULT_MATRIX_AUTO_UPDATE=!0;se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const pn=new D,Nn=new D,Ya=new D,Fn=new D,Ji=new D,Qi=new D,Rc=new D,qa=new D,$a=new D,ja=new D;let Ls=!1;class rn{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),pn.subVectors(t,e),i.cross(pn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){pn.subVectors(i,e),Nn.subVectors(n,e),Ya.subVectors(t,e);const a=pn.dot(pn),o=pn.dot(Nn),l=pn.dot(Ya),c=Nn.dot(Nn),h=Nn.dot(Ya),d=a*c-o*o;if(d===0)return s.set(-2,-1,-1);const u=1/d,m=(c*l-o*h)*u,g=(a*h-o*l)*u;return s.set(1-m-g,g,m)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Fn),Fn.x>=0&&Fn.y>=0&&Fn.x+Fn.y<=1}static getUV(t,e,n,i,s,a,o,l){return Ls===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ls=!0),this.getInterpolation(t,e,n,i,s,a,o,l)}static getInterpolation(t,e,n,i,s,a,o,l){return this.getBarycoord(t,e,n,i,Fn),l.setScalar(0),l.addScaledVector(s,Fn.x),l.addScaledVector(a,Fn.y),l.addScaledVector(o,Fn.z),l}static isFrontFacing(t,e,n,i){return pn.subVectors(n,e),Nn.subVectors(t,e),pn.cross(Nn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return pn.subVectors(this.c,this.b),Nn.subVectors(this.a,this.b),pn.cross(Nn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return rn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return rn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,s){return Ls===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ls=!0),rn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}getInterpolation(t,e,n,i,s){return rn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return rn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return rn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let a,o;Ji.subVectors(i,n),Qi.subVectors(s,n),qa.subVectors(t,n);const l=Ji.dot(qa),c=Qi.dot(qa);if(l<=0&&c<=0)return e.copy(n);$a.subVectors(t,i);const h=Ji.dot($a),d=Qi.dot($a);if(h>=0&&d<=h)return e.copy(i);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Ji,a);ja.subVectors(t,s);const m=Ji.dot(ja),g=Qi.dot(ja);if(g>=0&&m<=g)return e.copy(s);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Qi,o);const p=h*g-m*d;if(p<=0&&d-h>=0&&m-g>=0)return Rc.subVectors(s,i),o=(d-h)/(d-h+(m-g)),e.copy(i).addScaledVector(Rc,o);const f=1/(p+_+u);return a=_*f,o=u*f,e.copy(n).addScaledVector(Ji,a).addScaledVector(Qi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let Zf=0;class Vi extends ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zf++}),this.uuid=Xn(),this.name="",this.type="Material",this.blending=xr,this.side=hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zh,this.blendDst=kh,this.blendEquation=fr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ro,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=uf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fa,this.stencilZFail=Fa,this.stencilZPass=Fa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==xr&&(n.blending=this.blending),this.side!==hi&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=i(t.textures),a=i(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const eu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mn={h:0,s:0,l:0},Ds={h:0,s:0,l:0};function Ka(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class Tt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Pt){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,dn.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=dn.workingColorSpace){return this.r=t,this.g=e,this.b=n,dn.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=dn.workingColorSpace){if(t=il(t,1),e=Ae(e,0,1),n=Ae(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=Ka(a,s,t+1/3),this.g=Ka(a,s,t),this.b=Ka(a,s,t-1/3)}return dn.toWorkingColorSpace(this,i),this}setStyle(t,e=Pt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Pt){const n=eu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Mr(t.r),this.g=Mr(t.g),this.b=Mr(t.b),this}copyLinearToSRGB(t){return this.r=Ba(t.r),this.g=Ba(t.g),this.b=Ba(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Pt){return dn.fromWorkingColorSpace(be.copy(this),t),Math.round(Ae(be.r*255,0,255))*65536+Math.round(Ae(be.g*255,0,255))*256+Math.round(Ae(be.b*255,0,255))}getHexString(t=Pt){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=dn.workingColorSpace){dn.fromWorkingColorSpace(be.copy(this),e);const n=be.r,i=be.g,s=be.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=dn.workingColorSpace){return dn.fromWorkingColorSpace(be.copy(this),e),t.r=be.r,t.g=be.g,t.b=be.b,t}getStyle(t=Pt){dn.fromWorkingColorSpace(be.copy(this),t);const e=be.r,n=be.g,i=be.b;return t!==Pt?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(mn),mn.h+=t,mn.s+=e,mn.l+=n,this.setHSL(mn.h,mn.s,mn.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(mn),t.getHSL(Ds);const n=ts(mn.h,Ds.h,e),i=ts(mn.s,Ds.s,e),s=ts(mn.l,Ds.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const be=new Tt;Tt.NAMES=eu;class sl extends Vi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=va,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const oe=new D,Us=new pt;class vn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Uo,this.updateRange={offset:0,count:-1},this.gpuType=ni,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Us.fromBufferAttribute(this,e),Us.applyMatrix3(t),this.setXY(e,Us.x,Us.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)oe.fromBufferAttribute(this,e),oe.applyMatrix3(t),this.setXYZ(e,oe.x,oe.y,oe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)oe.fromBufferAttribute(this,e),oe.applyMatrix4(t),this.setXYZ(e,oe.x,oe.y,oe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)oe.fromBufferAttribute(this,e),oe.applyNormalMatrix(t),this.setXYZ(e,oe.x,oe.y,oe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)oe.fromBufferAttribute(this,e),oe.transformDirection(t),this.setXYZ(e,oe.x,oe.y,oe.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Hn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Xt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Hn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Xt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Hn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Xt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Hn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Xt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Xt(e,this.array),n=Xt(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Xt(e,this.array),n=Xt(n,this.array),i=Xt(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Xt(e,this.array),n=Xt(n,this.array),i=Xt(i,this.array),s=Xt(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Uo&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}}class nu extends vn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class iu extends vn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class cn extends vn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Jf=0;const Qe=new ne,Za=new se,tr=new D,We=new Ms,Vr=new Ms,ge=new D;class Mn extends ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jf++}),this.uuid=Xn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Kh(t)?iu:nu)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new It().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Qe.makeRotationFromQuaternion(t),this.applyMatrix4(Qe),this}rotateX(t){return Qe.makeRotationX(t),this.applyMatrix4(Qe),this}rotateY(t){return Qe.makeRotationY(t),this.applyMatrix4(Qe),this}rotateZ(t){return Qe.makeRotationZ(t),this.applyMatrix4(Qe),this}translate(t,e,n){return Qe.makeTranslation(t,e,n),this.applyMatrix4(Qe),this}scale(t,e,n){return Qe.makeScale(t,e,n),this.applyMatrix4(Qe),this}lookAt(t){return Za.lookAt(t),Za.updateMatrix(),this.applyMatrix4(Za.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(tr).negate(),this.translate(tr.x,tr.y,tr.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new cn(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ms);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];We.setFromBufferAttribute(s),this.morphTargetsRelative?(ge.addVectors(this.boundingBox.min,We.min),this.boundingBox.expandByPoint(ge),ge.addVectors(this.boundingBox.max,We.max),this.boundingBox.expandByPoint(ge)):(this.boundingBox.expandByPoint(We.min),this.boundingBox.expandByPoint(We.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rl);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(t){const n=this.boundingSphere.center;if(We.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];Vr.setFromBufferAttribute(o),this.morphTargetsRelative?(ge.addVectors(We.min,Vr.min),We.expandByPoint(ge),ge.addVectors(We.max,Vr.max),We.expandByPoint(ge)):(We.expandByPoint(Vr.min),We.expandByPoint(Vr.max))}We.getCenter(n);let i=0;for(let s=0,a=t.count;s<a;s++)ge.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(ge));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)ge.fromBufferAttribute(o,c),l&&(tr.fromBufferAttribute(t,c),ge.add(tr)),i=Math.max(i,n.distanceToSquared(ge))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,s=e.normal.array,a=e.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let T=0;T<o;T++)c[T]=new D,h[T]=new D;const d=new D,u=new D,m=new D,g=new pt,_=new pt,p=new pt,f=new D,M=new D;function v(T,V,$){d.fromArray(i,T*3),u.fromArray(i,V*3),m.fromArray(i,$*3),g.fromArray(a,T*2),_.fromArray(a,V*2),p.fromArray(a,$*2),u.sub(d),m.sub(d),_.sub(g),p.sub(g);const U=1/(_.x*p.y-p.x*_.y);isFinite(U)&&(f.copy(u).multiplyScalar(p.y).addScaledVector(m,-_.y).multiplyScalar(U),M.copy(m).multiplyScalar(_.x).addScaledVector(u,-p.x).multiplyScalar(U),c[T].add(f),c[V].add(f),c[$].add(f),h[T].add(M),h[V].add(M),h[$].add(M))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let T=0,V=y.length;T<V;++T){const $=y[T],U=$.start,N=$.count;for(let O=U,K=U+N;O<K;O+=3)v(n[O+0],n[O+1],n[O+2])}const S=new D,w=new D,b=new D,P=new D;function x(T){b.fromArray(s,T*3),P.copy(b);const V=c[T];S.copy(V),S.sub(b.multiplyScalar(b.dot(V))).normalize(),w.crossVectors(P,V);const U=w.dot(h[T])<0?-1:1;l[T*4]=S.x,l[T*4+1]=S.y,l[T*4+2]=S.z,l[T*4+3]=U}for(let T=0,V=y.length;T<V;++T){const $=y[T],U=$.start,N=$.count;for(let O=U,K=U+N;O<K;O+=3)x(n[O+0]),x(n[O+1]),x(n[O+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new vn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,m=n.count;u<m;u++)n.setXYZ(u,0,0,0);const i=new D,s=new D,a=new D,o=new D,l=new D,c=new D,h=new D,d=new D;if(t)for(let u=0,m=t.count;u<m;u+=3){const g=t.getX(u+0),_=t.getX(u+1),p=t.getX(u+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),a.fromBufferAttribute(e,p),h.subVectors(a,s),d.subVectors(i,s),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,m=e.count;u<m;u+=3)i.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,s),d.subVectors(i,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ge.fromBufferAttribute(t,e),ge.normalize(),t.setXYZ(e,ge.x,ge.y,ge.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let m=0,g=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?m=l[_]*o.data.stride+o.offset:m=l[_]*h;for(let f=0;f<h;f++)u[g++]=c[m++]}return new vn(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Mn,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],m=t(u,n);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const m=c[d];h.push(m.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],d=s[c];for(let u=0,m=d.length;u<m;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Cc=new ne,vi=new Wf,Is=new rl,Pc=new D,er=new D,nr=new D,ir=new D,Ja=new D,Ns=new D,Fs=new pt,Os=new pt,Bs=new pt,Lc=new D,Dc=new D,Uc=new D,zs=new D,ks=new D;class ve extends se{constructor(t=new Mn,e=new sl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(s&&o){Ns.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],d=s[l];h!==0&&(Ja.fromBufferAttribute(d,t),a?Ns.addScaledVector(Ja,h):Ns.addScaledVector(Ja.sub(e),h))}e.add(Ns)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Is.copy(n.boundingSphere),Is.applyMatrix4(s),vi.copy(t.ray).recast(t.near),!(Is.containsPoint(vi.origin)===!1&&(vi.intersectSphere(Is,Pc)===null||vi.origin.distanceToSquared(Pc)>(t.far-t.near)**2))&&(Cc.copy(s).invert(),vi.copy(t.ray).applyMatrix4(Cc),!(n.boundingBox!==null&&vi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,vi)))}_computeIntersections(t,e,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){const p=u[g],f=a[p.materialIndex],M=Math.max(p.start,m.start),v=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let y=M,S=v;y<S;y+=3){const w=o.getX(y),b=o.getX(y+1),P=o.getX(y+2);i=Vs(this,f,t,n,c,h,d,w,b,P),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let p=g,f=_;p<f;p+=3){const M=o.getX(p),v=o.getX(p+1),y=o.getX(p+2);i=Vs(this,a,t,n,c,h,d,M,v,y),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){const p=u[g],f=a[p.materialIndex],M=Math.max(p.start,m.start),v=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let y=M,S=v;y<S;y+=3){const w=y,b=y+1,P=y+2;i=Vs(this,f,t,n,c,h,d,w,b,P),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=g,f=_;p<f;p+=3){const M=p,v=p+1,y=p+2;i=Vs(this,a,t,n,c,h,d,M,v,y),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}}function Qf(r,t,e,n,i,s,a,o){let l;if(t.side===Re?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,t.side===hi,o),l===null)return null;ks.copy(o),ks.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(ks);return c<e.near||c>e.far?null:{distance:c,point:ks.clone(),object:r}}function Vs(r,t,e,n,i,s,a,o,l,c){r.getVertexPosition(o,er),r.getVertexPosition(l,nr),r.getVertexPosition(c,ir);const h=Qf(r,t,e,n,er,nr,ir,zs);if(h){i&&(Fs.fromBufferAttribute(i,o),Os.fromBufferAttribute(i,l),Bs.fromBufferAttribute(i,c),h.uv=rn.getInterpolation(zs,er,nr,ir,Fs,Os,Bs,new pt)),s&&(Fs.fromBufferAttribute(s,o),Os.fromBufferAttribute(s,l),Bs.fromBufferAttribute(s,c),h.uv1=rn.getInterpolation(zs,er,nr,ir,Fs,Os,Bs,new pt),h.uv2=h.uv1),a&&(Lc.fromBufferAttribute(a,o),Dc.fromBufferAttribute(a,l),Uc.fromBufferAttribute(a,c),h.normal=rn.getInterpolation(zs,er,nr,ir,Lc,Dc,Uc,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new D,materialIndex:0};rn.getNormal(er,nr,ir,d.normal),h.face=d}return h}class ys extends Mn{constructor(t=1,e=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],d=[];let u=0,m=0;g("z","y","x",-1,-1,n,e,t,a,s,0),g("z","y","x",1,-1,n,e,-t,a,s,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new cn(c,3)),this.setAttribute("normal",new cn(h,3)),this.setAttribute("uv",new cn(d,2));function g(_,p,f,M,v,y,S,w,b,P,x){const T=y/b,V=S/P,$=y/2,U=S/2,N=w/2,O=b+1,K=P+1;let k=0,X=0;const Q=new D;for(let Z=0;Z<K;Z++){const z=Z*V-U;for(let G=0;G<O;G++){const ot=G*T-$;Q[_]=ot*M,Q[p]=z*v,Q[f]=N,c.push(Q.x,Q.y,Q.z),Q[_]=0,Q[p]=0,Q[f]=w>0?1:-1,h.push(Q.x,Q.y,Q.z),d.push(G/b),d.push(1-Z/P),k+=1}}for(let Z=0;Z<P;Z++)for(let z=0;z<b;z++){const G=u+z+O*Z,ot=u+z+O*(Z+1),it=u+(z+1)+O*(Z+1),at=u+(z+1)+O*Z;l.push(G,ot,at),l.push(ot,it,at),X+=6}o.addGroup(m,X,x),m+=X,u+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ys(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Rr(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ie(r){const t={};for(let e=0;e<r.length;e++){const n=Rr(r[e]);for(const i in n)t[i]=n[i]}return t}function tp(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function ru(r){return r.getRenderTarget()===null?r.outputColorSpace:Rn}const al={clone:Rr,merge:Ie};var ep=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,np=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ne extends Vi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ep,this.fragmentShader=np,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Rr(t.uniforms),this.uniformsGroups=tp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class su extends se{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ne,this.projectionMatrix=new ne,this.projectionMatrixInverse=new ne,this.coordinateSystem=Vn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class $e extends su{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=cs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Qr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return cs*2*Math.atan(Math.tan(Qr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Qr*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const rr=-90,sr=1;class ip extends se{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null;const i=new $e(rr,sr,t,e);i.layers=this.layers,this.add(i);const s=new $e(rr,sr,t,e);s.layers=this.layers,this.add(s);const a=new $e(rr,sr,t,e);a.layers=this.layers,this.add(a);const o=new $e(rr,sr,t,e);o.layers=this.layers,this.add(o);const l=new $e(rr,sr,t,e);l.layers=this.layers,this.add(l);const c=new $e(rr,sr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===Vn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===la)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[i,s,a,o,l,c]=this.children,h=t.getRenderTarget(),d=t.toneMapping,u=t.xr.enabled;t.toneMapping=Wn,t.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,i),t.setRenderTarget(n,1),t.render(e,s),t.setRenderTarget(n,2),t.render(e,a),t.setRenderTarget(n,3),t.render(e,o),t.setRenderTarget(n,4),t.render(e,l),n.texture.generateMipmaps=m,t.setRenderTarget(n,5),t.render(e,c),t.setRenderTarget(h),t.toneMapping=d,t.xr.enabled=u,n.texture.needsPMREMUpdate=!0}}class ol extends he{constructor(t,e,n,i,s,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Tr,super(t,e,n,i,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class rp extends qn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(es("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Di?Pt:Ui),this.texture=new ol(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Fe}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ys(5,5,5),s=new Ne({name:"CubemapFromEquirect",uniforms:Rr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Re,blending:Gn});s.uniforms.tEquirect.value=e;const a=new ve(i,s),o=e.minFilter;return e.minFilter===ls&&(e.minFilter=Fe),new ip(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(s)}}const Qa=new D,sp=new D,ap=new It;class Si{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Qa.subVectors(n,e).cross(sp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Qa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||ap.getNormalMatrix(t),i=this.coplanarPoint(Qa).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xi=new rl,Hs=new D;class ll{constructor(t=new Si,e=new Si,n=new Si,i=new Si,s=new Si,a=new Si){this.planes=[t,e,n,i,s,a]}set(t,e,n,i,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Vn){const n=this.planes,i=t.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],d=i[6],u=i[7],m=i[8],g=i[9],_=i[10],p=i[11],f=i[12],M=i[13],v=i[14],y=i[15];if(n[0].setComponents(l-s,u-c,p-m,y-f).normalize(),n[1].setComponents(l+s,u+c,p+m,y+f).normalize(),n[2].setComponents(l+a,u+h,p+g,y+M).normalize(),n[3].setComponents(l-a,u-h,p-g,y-M).normalize(),n[4].setComponents(l-o,u-d,p-_,y-v).normalize(),e===Vn)n[5].setComponents(l+o,u+d,p+_,y+v).normalize();else if(e===la)n[5].setComponents(o,d,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),xi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),xi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(xi)}intersectsSprite(t){return xi.center.set(0,0,0),xi.radius=.7071067811865476,xi.applyMatrix4(t.matrixWorld),this.intersectsSphere(xi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Hs.x=i.normal.x>0?t.max.x:t.min.x,Hs.y=i.normal.y>0?t.max.y:t.min.y,Hs.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Hs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function au(){let r=null,t=!1,e=null,n=null;function i(s,a){e(s,a),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function op(r,t){const e=t.isWebGL2,n=new WeakMap;function i(c,h){const d=c.array,u=c.usage,m=r.createBuffer();r.bindBuffer(h,m),r.bufferData(h,d,u),c.onUploadCallback();let g;if(d instanceof Float32Array)g=r.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)g=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=r.UNSIGNED_SHORT;else if(d instanceof Int16Array)g=r.SHORT;else if(d instanceof Uint32Array)g=r.UNSIGNED_INT;else if(d instanceof Int32Array)g=r.INT;else if(d instanceof Int8Array)g=r.BYTE;else if(d instanceof Uint8Array)g=r.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)g=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function s(c,h,d){const u=h.array,m=h.updateRange;r.bindBuffer(d,c),m.count===-1?r.bufferSubData(d,0,u):(e?r.bufferSubData(d,m.offset*u.BYTES_PER_ELEMENT,u,m.offset,m.count):r.bufferSubData(d,m.offset*u.BYTES_PER_ELEMENT,u.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(r.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const u=n.get(c);(!u||u.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);d===void 0?n.set(c,i(c,h)):d.version<c.version&&(s(d.buffer,c,h),d.version=c.version)}return{get:a,remove:o,update:l}}class cl extends Mn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,d=t/o,u=e/l,m=[],g=[],_=[],p=[];for(let f=0;f<h;f++){const M=f*u-a;for(let v=0;v<c;v++){const y=v*d-s;g.push(y,-M,0),_.push(0,0,1),p.push(v/o),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let M=0;M<o;M++){const v=M+c*f,y=M+c*(f+1),S=M+1+c*(f+1),w=M+1+c*f;m.push(v,y,w),m.push(y,S,w)}this.setIndex(m),this.setAttribute("position",new cn(g,3)),this.setAttribute("normal",new cn(_,3)),this.setAttribute("uv",new cn(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cl(t.width,t.height,t.widthSegments,t.heightSegments)}}var lp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,hp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,up=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,fp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,mp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_p=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,xp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Mp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,yp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Sp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ep=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ap=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Rp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Cp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Pp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Lp=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Dp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Up=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ip=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Np=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Fp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Op=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Bp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,zp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,kp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Vp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Gp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,$p=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,jp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Kp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Qp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,tm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,em=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,im=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,sm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,am=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,om=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,cm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,um=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,dm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,fm=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,pm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,_m=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Mm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,ym=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Sm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Em=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,Tm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,bm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Am=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Rm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Cm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Pm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Lm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Dm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Um=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Im=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Nm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Fm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Om=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Bm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,km=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Hm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Gm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Wm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Xm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ym=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,qm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$m=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,jm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Km=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Zm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,t_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,e_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,n_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,i_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,r_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const s_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,a_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,l_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,h_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,u_=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,d_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,f_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,p_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,m_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,__=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,g_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,v_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,x_=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,M_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,y_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,S_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,E_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,T_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,b_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,A_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,w_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,R_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,C_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,P_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,L_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,D_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,U_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,I_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,N_=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,F_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,O_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,B_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Dt={alphahash_fragment:lp,alphahash_pars_fragment:cp,alphamap_fragment:hp,alphamap_pars_fragment:up,alphatest_fragment:dp,alphatest_pars_fragment:fp,aomap_fragment:pp,aomap_pars_fragment:mp,begin_vertex:_p,beginnormal_vertex:gp,bsdfs:vp,iridescence_fragment:xp,bumpmap_pars_fragment:Mp,clipping_planes_fragment:yp,clipping_planes_pars_fragment:Sp,clipping_planes_pars_vertex:Ep,clipping_planes_vertex:Tp,color_fragment:bp,color_pars_fragment:Ap,color_pars_vertex:wp,color_vertex:Rp,common:Cp,cube_uv_reflection_fragment:Pp,defaultnormal_vertex:Lp,displacementmap_pars_vertex:Dp,displacementmap_vertex:Up,emissivemap_fragment:Ip,emissivemap_pars_fragment:Np,colorspace_fragment:Fp,colorspace_pars_fragment:Op,envmap_fragment:Bp,envmap_common_pars_fragment:zp,envmap_pars_fragment:kp,envmap_pars_vertex:Vp,envmap_physical_pars_fragment:Qp,envmap_vertex:Hp,fog_vertex:Gp,fog_pars_vertex:Wp,fog_fragment:Xp,fog_pars_fragment:Yp,gradientmap_pars_fragment:qp,lightmap_fragment:$p,lightmap_pars_fragment:jp,lights_lambert_fragment:Kp,lights_lambert_pars_fragment:Zp,lights_pars_begin:Jp,lights_toon_fragment:tm,lights_toon_pars_fragment:em,lights_phong_fragment:nm,lights_phong_pars_fragment:im,lights_physical_fragment:rm,lights_physical_pars_fragment:sm,lights_fragment_begin:am,lights_fragment_maps:om,lights_fragment_end:lm,logdepthbuf_fragment:cm,logdepthbuf_pars_fragment:hm,logdepthbuf_pars_vertex:um,logdepthbuf_vertex:dm,map_fragment:fm,map_pars_fragment:pm,map_particle_fragment:mm,map_particle_pars_fragment:_m,metalnessmap_fragment:gm,metalnessmap_pars_fragment:vm,morphcolor_vertex:xm,morphnormal_vertex:Mm,morphtarget_pars_vertex:ym,morphtarget_vertex:Sm,normal_fragment_begin:Em,normal_fragment_maps:Tm,normal_pars_fragment:bm,normal_pars_vertex:Am,normal_vertex:wm,normalmap_pars_fragment:Rm,clearcoat_normal_fragment_begin:Cm,clearcoat_normal_fragment_maps:Pm,clearcoat_pars_fragment:Lm,iridescence_pars_fragment:Dm,opaque_fragment:Um,packing:Im,premultiplied_alpha_fragment:Nm,project_vertex:Fm,dithering_fragment:Om,dithering_pars_fragment:Bm,roughnessmap_fragment:zm,roughnessmap_pars_fragment:km,shadowmap_pars_fragment:Vm,shadowmap_pars_vertex:Hm,shadowmap_vertex:Gm,shadowmask_pars_fragment:Wm,skinbase_vertex:Xm,skinning_pars_vertex:Ym,skinning_vertex:qm,skinnormal_vertex:$m,specularmap_fragment:jm,specularmap_pars_fragment:Km,tonemapping_fragment:Zm,tonemapping_pars_fragment:Jm,transmission_fragment:Qm,transmission_pars_fragment:t_,uv_pars_fragment:e_,uv_pars_vertex:n_,uv_vertex:i_,worldpos_vertex:r_,background_vert:s_,background_frag:a_,backgroundCube_vert:o_,backgroundCube_frag:l_,cube_vert:c_,cube_frag:h_,depth_vert:u_,depth_frag:d_,distanceRGBA_vert:f_,distanceRGBA_frag:p_,equirect_vert:m_,equirect_frag:__,linedashed_vert:g_,linedashed_frag:v_,meshbasic_vert:x_,meshbasic_frag:M_,meshlambert_vert:y_,meshlambert_frag:S_,meshmatcap_vert:E_,meshmatcap_frag:T_,meshnormal_vert:b_,meshnormal_frag:A_,meshphong_vert:w_,meshphong_frag:R_,meshphysical_vert:C_,meshphysical_frag:P_,meshtoon_vert:L_,meshtoon_frag:D_,points_vert:U_,points_frag:I_,shadow_vert:N_,shadow_frag:F_,sprite_vert:O_,sprite_frag:B_},st={common:{diffuse:{value:new Tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new It}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new It}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new It}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new It},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new It},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new It},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new It}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new It}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new It}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0},uvTransform:{value:new It}},sprite:{diffuse:{value:new Tt(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}}},En={basic:{uniforms:Ie([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.fog]),vertexShader:Dt.meshbasic_vert,fragmentShader:Dt.meshbasic_frag},lambert:{uniforms:Ie([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Tt(0)}}]),vertexShader:Dt.meshlambert_vert,fragmentShader:Dt.meshlambert_frag},phong:{uniforms:Ie([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Tt(0)},specular:{value:new Tt(1118481)},shininess:{value:30}}]),vertexShader:Dt.meshphong_vert,fragmentShader:Dt.meshphong_frag},standard:{uniforms:Ie([st.common,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.roughnessmap,st.metalnessmap,st.fog,st.lights,{emissive:{value:new Tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag},toon:{uniforms:Ie([st.common,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.gradientmap,st.fog,st.lights,{emissive:{value:new Tt(0)}}]),vertexShader:Dt.meshtoon_vert,fragmentShader:Dt.meshtoon_frag},matcap:{uniforms:Ie([st.common,st.bumpmap,st.normalmap,st.displacementmap,st.fog,{matcap:{value:null}}]),vertexShader:Dt.meshmatcap_vert,fragmentShader:Dt.meshmatcap_frag},points:{uniforms:Ie([st.points,st.fog]),vertexShader:Dt.points_vert,fragmentShader:Dt.points_frag},dashed:{uniforms:Ie([st.common,st.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Dt.linedashed_vert,fragmentShader:Dt.linedashed_frag},depth:{uniforms:Ie([st.common,st.displacementmap]),vertexShader:Dt.depth_vert,fragmentShader:Dt.depth_frag},normal:{uniforms:Ie([st.common,st.bumpmap,st.normalmap,st.displacementmap,{opacity:{value:1}}]),vertexShader:Dt.meshnormal_vert,fragmentShader:Dt.meshnormal_frag},sprite:{uniforms:Ie([st.sprite,st.fog]),vertexShader:Dt.sprite_vert,fragmentShader:Dt.sprite_frag},background:{uniforms:{uvTransform:{value:new It},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Dt.background_vert,fragmentShader:Dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Dt.backgroundCube_vert,fragmentShader:Dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Dt.cube_vert,fragmentShader:Dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Dt.equirect_vert,fragmentShader:Dt.equirect_frag},distanceRGBA:{uniforms:Ie([st.common,st.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Dt.distanceRGBA_vert,fragmentShader:Dt.distanceRGBA_frag},shadow:{uniforms:Ie([st.lights,st.fog,{color:{value:new Tt(0)},opacity:{value:1}}]),vertexShader:Dt.shadow_vert,fragmentShader:Dt.shadow_frag}};En.physical={uniforms:Ie([En.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new It},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new It},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new It},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new It},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new It},sheen:{value:0},sheenColor:{value:new Tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new It},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new It},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new It},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new It},attenuationDistance:{value:0},attenuationColor:{value:new Tt(0)},specularColor:{value:new Tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new It},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new It},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new It}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag};const Gs={r:0,b:0,g:0};function z_(r,t,e,n,i,s,a){const o=new Tt(0);let l=s===!0?0:1,c,h,d=null,u=0,m=null;function g(p,f){let M=!1,v=f.isScene===!0?f.background:null;switch(v&&v.isTexture&&(v=(f.backgroundBlurriness>0?e:t).get(v)),v===null?_(o,l):v&&v.isColor&&(_(v,1),M=!0),r.xr.getEnvironmentBlendMode()){case"opaque":M=!0;break;case"additive":n.buffers.color.setClear(0,0,0,1,a),M=!0;break;case"alpha-blend":n.buffers.color.setClear(0,0,0,0,a),M=!0;break}(r.autoClear||M)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),v&&(v.isCubeTexture||v.mapping===xa)?(h===void 0&&(h=new ve(new ys(1,1,1),new Ne({name:"BackgroundCubeMaterial",uniforms:Rr(En.backgroundCube.uniforms),vertexShader:En.backgroundCube.vertexShader,fragmentShader:En.backgroundCube.fragmentShader,side:Re,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,b,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=v.colorSpace!==Pt,(d!==v||u!==v.version||m!==r.toneMapping)&&(h.material.needsUpdate=!0,d=v,u=v.version,m=r.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new ve(new cl(2,2),new Ne({name:"BackgroundMaterial",uniforms:Rr(En.background.uniforms),vertexShader:En.background.vertexShader,fragmentShader:En.background.fragmentShader,side:hi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=v.colorSpace!==Pt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||u!==v.version||m!==r.toneMapping)&&(c.material.needsUpdate=!0,d=v,u=v.version,m=r.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,f){p.getRGB(Gs,ru(r)),n.buffers.color.setClear(Gs.r,Gs.g,Gs.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(p,f=1){o.set(p),l=f,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(o,l)},render:g}}function k_(r,t,e,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=p(null);let c=l,h=!1;function d(N,O,K,k,X){let Q=!1;if(a){const Z=_(k,K,O);c!==Z&&(c=Z,m(c.object)),Q=f(N,k,K,X),Q&&M(N,k,K,X)}else{const Z=O.wireframe===!0;(c.geometry!==k.id||c.program!==K.id||c.wireframe!==Z)&&(c.geometry=k.id,c.program=K.id,c.wireframe=Z,Q=!0)}X!==null&&e.update(X,r.ELEMENT_ARRAY_BUFFER),(Q||h)&&(h=!1,P(N,O,K,k),X!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function u(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function m(N){return n.isWebGL2?r.bindVertexArray(N):s.bindVertexArrayOES(N)}function g(N){return n.isWebGL2?r.deleteVertexArray(N):s.deleteVertexArrayOES(N)}function _(N,O,K){const k=K.wireframe===!0;let X=o[N.id];X===void 0&&(X={},o[N.id]=X);let Q=X[O.id];Q===void 0&&(Q={},X[O.id]=Q);let Z=Q[k];return Z===void 0&&(Z=p(u()),Q[k]=Z),Z}function p(N){const O=[],K=[],k=[];for(let X=0;X<i;X++)O[X]=0,K[X]=0,k[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:K,attributeDivisors:k,object:N,attributes:{},index:null}}function f(N,O,K,k){const X=c.attributes,Q=O.attributes;let Z=0;const z=K.getAttributes();for(const G in z)if(z[G].location>=0){const it=X[G];let at=Q[G];if(at===void 0&&(G==="instanceMatrix"&&N.instanceMatrix&&(at=N.instanceMatrix),G==="instanceColor"&&N.instanceColor&&(at=N.instanceColor)),it===void 0||it.attribute!==at||at&&it.data!==at.data)return!0;Z++}return c.attributesNum!==Z||c.index!==k}function M(N,O,K,k){const X={},Q=O.attributes;let Z=0;const z=K.getAttributes();for(const G in z)if(z[G].location>=0){let it=Q[G];it===void 0&&(G==="instanceMatrix"&&N.instanceMatrix&&(it=N.instanceMatrix),G==="instanceColor"&&N.instanceColor&&(it=N.instanceColor));const at={};at.attribute=it,it&&it.data&&(at.data=it.data),X[G]=at,Z++}c.attributes=X,c.attributesNum=Z,c.index=k}function v(){const N=c.newAttributes;for(let O=0,K=N.length;O<K;O++)N[O]=0}function y(N){S(N,0)}function S(N,O){const K=c.newAttributes,k=c.enabledAttributes,X=c.attributeDivisors;K[N]=1,k[N]===0&&(r.enableVertexAttribArray(N),k[N]=1),X[N]!==O&&((n.isWebGL2?r:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,O),X[N]=O)}function w(){const N=c.newAttributes,O=c.enabledAttributes;for(let K=0,k=O.length;K<k;K++)O[K]!==N[K]&&(r.disableVertexAttribArray(K),O[K]=0)}function b(N,O,K,k,X,Q,Z){Z===!0?r.vertexAttribIPointer(N,O,K,X,Q):r.vertexAttribPointer(N,O,K,k,X,Q)}function P(N,O,K,k){if(n.isWebGL2===!1&&(N.isInstancedMesh||k.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;v();const X=k.attributes,Q=K.getAttributes(),Z=O.defaultAttributeValues;for(const z in Q){const G=Q[z];if(G.location>=0){let ot=X[z];if(ot===void 0&&(z==="instanceMatrix"&&N.instanceMatrix&&(ot=N.instanceMatrix),z==="instanceColor"&&N.instanceColor&&(ot=N.instanceColor)),ot!==void 0){const it=ot.normalized,at=ot.itemSize,gt=e.get(ot);if(gt===void 0)continue;const wt=gt.buffer,Mt=gt.type,kt=gt.bytesPerElement,Me=n.isWebGL2===!0&&(Mt===r.INT||Mt===r.UNSIGNED_INT||ot.gpuType===Hh);if(ot.isInterleavedBufferAttribute){const Ut=ot.data,F=Ut.stride,fe=ot.offset;if(Ut.isInstancedInterleavedBuffer){for(let vt=0;vt<G.locationSize;vt++)S(G.location+vt,Ut.meshPerAttribute);N.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=Ut.meshPerAttribute*Ut.count)}else for(let vt=0;vt<G.locationSize;vt++)y(G.location+vt);r.bindBuffer(r.ARRAY_BUFFER,wt);for(let vt=0;vt<G.locationSize;vt++)b(G.location+vt,at/G.locationSize,Mt,it,F*kt,(fe+at/G.locationSize*vt)*kt,Me)}else{if(ot.isInstancedBufferAttribute){for(let Ut=0;Ut<G.locationSize;Ut++)S(G.location+Ut,ot.meshPerAttribute);N.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let Ut=0;Ut<G.locationSize;Ut++)y(G.location+Ut);r.bindBuffer(r.ARRAY_BUFFER,wt);for(let Ut=0;Ut<G.locationSize;Ut++)b(G.location+Ut,at/G.locationSize,Mt,it,at*kt,at/G.locationSize*Ut*kt,Me)}}else if(Z!==void 0){const it=Z[z];if(it!==void 0)switch(it.length){case 2:r.vertexAttrib2fv(G.location,it);break;case 3:r.vertexAttrib3fv(G.location,it);break;case 4:r.vertexAttrib4fv(G.location,it);break;default:r.vertexAttrib1fv(G.location,it)}}}}w()}function x(){$();for(const N in o){const O=o[N];for(const K in O){const k=O[K];for(const X in k)g(k[X].object),delete k[X];delete O[K]}delete o[N]}}function T(N){if(o[N.id]===void 0)return;const O=o[N.id];for(const K in O){const k=O[K];for(const X in k)g(k[X].object),delete k[X];delete O[K]}delete o[N.id]}function V(N){for(const O in o){const K=o[O];if(K[N.id]===void 0)continue;const k=K[N.id];for(const X in k)g(k[X].object),delete k[X];delete K[N.id]}}function $(){U(),h=!0,c!==l&&(c=l,m(c.object))}function U(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:$,resetDefaultState:U,dispose:x,releaseStatesOfGeometry:T,releaseStatesOfProgram:V,initAttributes:v,enableAttribute:y,disableUnusedAttributes:w}}function V_(r,t,e,n){const i=n.isWebGL2;let s;function a(c){s=c}function o(c,h){r.drawArrays(s,c,h),e.update(h,s,1)}function l(c,h,d){if(d===0)return;let u,m;if(i)u=r,m="drawArraysInstanced";else if(u=t.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",u===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[m](s,c,h,d),e.update(h,s,d)}this.setMode=a,this.render=o,this.renderInstances=l}function H_(r,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const b=t.get("EXT_texture_filter_anisotropic");n=r.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(b){if(b==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let o=e.precision!==void 0?e.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),u=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),p=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),f=r.getParameter(r.MAX_VARYING_VECTORS),M=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),v=u>0,y=a||t.has("OES_texture_float"),S=v&&y,w=a?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:u,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:f,maxFragmentUniforms:M,vertexTextures:v,floatFragmentTextures:y,floatVertexTextures:S,maxSamples:w}}function G_(r){const t=this;let e=null,n=0,i=!1,s=!1;const a=new Si,o=new It,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const m=d.length!==0||u||n!==0||i;return i=u,n=d.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,m){const g=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,f=r.get(d);if(!i||g===null||g.length===0||s&&!p)s?h(null):c();else{const M=s?0:n,v=M*4;let y=f.clippingState||null;l.value=y,y=h(g,u,v,m);for(let S=0;S!==v;++S)y[S]=e[S];f.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,m,g){const _=d!==null?d.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const f=m+_*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(p===null||p.length<f)&&(p=new Float32Array(f));for(let v=0,y=m;v!==_;++v,y+=4)a.copy(d[v]).applyMatrix4(M,o),a.normal.toArray(p,y),p[y+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function W_(r){let t=new WeakMap;function e(a,o){return o===Co?a.mapping=Tr:o===Po&&(a.mapping=br),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Co||o===Po)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new rp(l.height/2);return c.fromEquirectangularTexture(r,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class hl extends su{constructor(t=-1,e=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const mr=4,Ic=[.125,.215,.35,.446,.526,.582],wi=20,to=new hl,Nc=new Tt;let eo=null;const Ei=(1+Math.sqrt(5))/2,ar=1/Ei,Fc=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,Ei,ar),new D(0,Ei,-ar),new D(ar,0,Ei),new D(-ar,0,Ei),new D(Ei,ar,0),new D(-Ei,ar,0)];class Oc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){eo=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(eo),t.scissorTest=!1,Ws(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Tr||t.mapping===br?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),eo=this._renderer.getRenderTarget();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Fe,minFilter:Fe,generateMipmaps:!1,type:Ar,format:sn,colorSpace:Rn,depthBuffer:!1},i=Bc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bc(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=X_(s)),this._blurMaterial=Y_(s,t,e)}return i}_compileMaterial(t){const e=new ve(this._lodPlanes[0],t);this._renderer.compile(e,to)}_sceneToCubeUV(t,e,n,i){const o=new $e(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Nc),h.toneMapping=Wn,h.autoClear=!1;const m=new sl({name:"PMREM.Background",side:Re,depthWrite:!1,depthTest:!1}),g=new ve(new ys,m);let _=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,_=!0):(m.color.copy(Nc),_=!0);for(let f=0;f<6;f++){const M=f%3;M===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):M===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const v=this._cubeSize;Ws(i,M*v,f>2?v:0,v,v),h.setRenderTarget(i),_&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Tr||t.mapping===br;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=kc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zc());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new ve(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;Ws(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,to)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Fc[(i-1)%Fc.length];this._blur(t,i-1,i,s,a)}e.autoClear=n}_blur(t,e,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",s),this._halfBlur(a,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new ve(this._lodPlanes[i],c),u=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*wi-1),_=s/g,p=isFinite(s)?1+Math.floor(h*_):wi;p>wi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${wi}`);const f=[];let M=0;for(let b=0;b<wi;++b){const P=b/_,x=Math.exp(-P*P/2);f.push(x),b===0?M+=x:b<p&&(M+=2*x)}for(let b=0;b<f.length;b++)f[b]=f[b]/M;u.envMap.value=t.texture,u.samples.value=p,u.weights.value=f,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:v}=this;u.dTheta.value=g,u.mipInt.value=v-n;const y=this._sizeLods[i],S=3*y*(i>v-mr?i-v+mr:0),w=4*(this._cubeSize-y);Ws(e,S,w,3*y,2*y),l.setRenderTarget(e),l.render(d,to)}}function X_(r){const t=[],e=[],n=[];let i=r;const s=r-mr+1+Ic.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>r-mr?l=Ic[a-r+mr-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,g=6,_=3,p=2,f=1,M=new Float32Array(_*g*m),v=new Float32Array(p*g*m),y=new Float32Array(f*g*m);for(let w=0;w<m;w++){const b=w%3*2/3-1,P=w>2?0:-1,x=[b,P,0,b+2/3,P,0,b+2/3,P+1,0,b,P,0,b+2/3,P+1,0,b,P+1,0];M.set(x,_*g*w),v.set(u,p*g*w);const T=[w,w,w,w,w,w];y.set(T,f*g*w)}const S=new Mn;S.setAttribute("position",new vn(M,_)),S.setAttribute("uv",new vn(v,p)),S.setAttribute("faceIndex",new vn(y,f)),t.push(S),i>mr&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Bc(r,t,e){const n=new qn(r,t,e);return n.texture.mapping=xa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ws(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function Y_(r,t,e){const n=new Float32Array(wi),i=new D(0,1,0);return new Ne({name:"SphericalGaussianBlur",defines:{n:wi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ul(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function zc(){return new Ne({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ul(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function kc(){return new Ne({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ul(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function ul(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function q_(r){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Co||l===Po,h=l===Tr||l===br;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=t.get(o);return e===null&&(e=new Oc(r)),d=c?e.fromEquirectangular(o,d):e.fromCubemap(o,d),t.set(o,d),d.texture}else{if(t.has(o))return t.get(o).texture;{const d=o.image;if(c&&d&&d.height>0||h&&d&&i(d)){e===null&&(e=new Oc(r));const u=c?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,u),o.addEventListener("dispose",s),u.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function $_(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function j_(r,t,e,n){const i={},s=new WeakMap;function a(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);for(const g in u.morphAttributes){const _=u.morphAttributes[g];for(let p=0,f=_.length;p<f;p++)t.remove(_[p])}u.removeEventListener("dispose",a),delete i[u.id];const m=s.get(u);m&&(t.remove(m),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,e.memory.geometries++),u}function l(d){const u=d.attributes;for(const g in u)t.update(u[g],r.ARRAY_BUFFER);const m=d.morphAttributes;for(const g in m){const _=m[g];for(let p=0,f=_.length;p<f;p++)t.update(_[p],r.ARRAY_BUFFER)}}function c(d){const u=[],m=d.index,g=d.attributes.position;let _=0;if(m!==null){const M=m.array;_=m.version;for(let v=0,y=M.length;v<y;v+=3){const S=M[v+0],w=M[v+1],b=M[v+2];u.push(S,w,w,b,b,S)}}else{const M=g.array;_=g.version;for(let v=0,y=M.length/3-1;v<y;v+=3){const S=v+0,w=v+1,b=v+2;u.push(S,w,w,b,b,S)}}const p=new(Kh(u)?iu:nu)(u,1);p.version=_;const f=s.get(d);f&&t.remove(f),s.set(d,p)}function h(d){const u=s.get(d);if(u){const m=d.index;m!==null&&u.version<m.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function K_(r,t,e,n){const i=n.isWebGL2;let s;function a(u){s=u}let o,l;function c(u){o=u.type,l=u.bytesPerElement}function h(u,m){r.drawElements(s,m,o,u*l),e.update(m,s,1)}function d(u,m,g){if(g===0)return;let _,p;if(i)_=r,p="drawElementsInstanced";else if(_=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[p](s,m,o,u*l,g),e.update(m,s,g)}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=d}function Z_(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function J_(r,t){return r[0]-t[0]}function Q_(r,t){return Math.abs(t[1])-Math.abs(r[1])}function tg(r,t,e){const n={},i=new Float32Array(8),s=new WeakMap,a=new qt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,d){const u=c.morphTargetInfluences;if(t.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let p=s.get(h);if(p===void 0||p.count!==_){let O=function(){U.dispose(),s.delete(h),h.removeEventListener("dispose",O)};var m=O;p!==void 0&&p.texture.dispose();const v=h.morphAttributes.position!==void 0,y=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,w=h.morphAttributes.position||[],b=h.morphAttributes.normal||[],P=h.morphAttributes.color||[];let x=0;v===!0&&(x=1),y===!0&&(x=2),S===!0&&(x=3);let T=h.attributes.position.count*x,V=1;T>t.maxTextureSize&&(V=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const $=new Float32Array(T*V*4*_),U=new Qh($,T,V,_);U.type=ni,U.needsUpdate=!0;const N=x*4;for(let K=0;K<_;K++){const k=w[K],X=b[K],Q=P[K],Z=T*V*4*K;for(let z=0;z<k.count;z++){const G=z*N;v===!0&&(a.fromBufferAttribute(k,z),$[Z+G+0]=a.x,$[Z+G+1]=a.y,$[Z+G+2]=a.z,$[Z+G+3]=0),y===!0&&(a.fromBufferAttribute(X,z),$[Z+G+4]=a.x,$[Z+G+5]=a.y,$[Z+G+6]=a.z,$[Z+G+7]=0),S===!0&&(a.fromBufferAttribute(Q,z),$[Z+G+8]=a.x,$[Z+G+9]=a.y,$[Z+G+10]=a.z,$[Z+G+11]=Q.itemSize===4?a.w:1)}}p={count:_,texture:U,size:new pt(T,V)},s.set(h,p),h.addEventListener("dispose",O)}let f=0;for(let v=0;v<u.length;v++)f+=u[v];const M=h.morphTargetsRelative?1:1-f;d.getUniforms().setValue(r,"morphTargetBaseInfluence",M),d.getUniforms().setValue(r,"morphTargetInfluences",u),d.getUniforms().setValue(r,"morphTargetsTexture",p.texture,e),d.getUniforms().setValue(r,"morphTargetsTextureSize",p.size)}else{const g=u===void 0?0:u.length;let _=n[h.id];if(_===void 0||_.length!==g){_=[];for(let y=0;y<g;y++)_[y]=[y,0];n[h.id]=_}for(let y=0;y<g;y++){const S=_[y];S[0]=y,S[1]=u[y]}_.sort(Q_);for(let y=0;y<8;y++)y<g&&_[y][1]?(o[y][0]=_[y][0],o[y][1]=_[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(J_);const p=h.morphAttributes.position,f=h.morphAttributes.normal;let M=0;for(let y=0;y<8;y++){const S=o[y],w=S[0],b=S[1];w!==Number.MAX_SAFE_INTEGER&&b?(p&&h.getAttribute("morphTarget"+y)!==p[w]&&h.setAttribute("morphTarget"+y,p[w]),f&&h.getAttribute("morphNormal"+y)!==f[w]&&h.setAttribute("morphNormal"+y,f[w]),i[y]=b,M+=b):(p&&h.hasAttribute("morphTarget"+y)===!0&&h.deleteAttribute("morphTarget"+y),f&&h.hasAttribute("morphNormal"+y)===!0&&h.deleteAttribute("morphNormal"+y),i[y]=0)}const v=h.morphTargetsRelative?1:1-M;d.getUniforms().setValue(r,"morphTargetBaseInfluence",v),d.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function eg(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,d=t.get(l,h);if(i.get(d)!==c&&(t.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;i.get(u)!==c&&(u.update(),i.set(u,c))}return d}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}const ou=new he,lu=new Qh,cu=new Hf,hu=new ol,Vc=[],Hc=[],Gc=new Float32Array(16),Wc=new Float32Array(9),Xc=new Float32Array(4);function Nr(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=Vc[i];if(s===void 0&&(s=new Float32Array(i),Vc[i]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function ue(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function de(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function ya(r,t){let e=Hc[t];e===void 0&&(e=new Int32Array(t),Hc[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function ng(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function ig(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ue(e,t))return;r.uniform2fv(this.addr,t),de(e,t)}}function rg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ue(e,t))return;r.uniform3fv(this.addr,t),de(e,t)}}function sg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ue(e,t))return;r.uniform4fv(this.addr,t),de(e,t)}}function ag(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(ue(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),de(e,t)}else{if(ue(e,n))return;Xc.set(n),r.uniformMatrix2fv(this.addr,!1,Xc),de(e,n)}}function og(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(ue(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),de(e,t)}else{if(ue(e,n))return;Wc.set(n),r.uniformMatrix3fv(this.addr,!1,Wc),de(e,n)}}function lg(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(ue(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),de(e,t)}else{if(ue(e,n))return;Gc.set(n),r.uniformMatrix4fv(this.addr,!1,Gc),de(e,n)}}function cg(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function hg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ue(e,t))return;r.uniform2iv(this.addr,t),de(e,t)}}function ug(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ue(e,t))return;r.uniform3iv(this.addr,t),de(e,t)}}function dg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ue(e,t))return;r.uniform4iv(this.addr,t),de(e,t)}}function fg(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function pg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ue(e,t))return;r.uniform2uiv(this.addr,t),de(e,t)}}function mg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ue(e,t))return;r.uniform3uiv(this.addr,t),de(e,t)}}function _g(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ue(e,t))return;r.uniform4uiv(this.addr,t),de(e,t)}}function gg(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2D(t||ou,i)}function vg(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||cu,i)}function xg(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||hu,i)}function Mg(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||lu,i)}function yg(r){switch(r){case 5126:return ng;case 35664:return ig;case 35665:return rg;case 35666:return sg;case 35674:return ag;case 35675:return og;case 35676:return lg;case 5124:case 35670:return cg;case 35667:case 35671:return hg;case 35668:case 35672:return ug;case 35669:case 35673:return dg;case 5125:return fg;case 36294:return pg;case 36295:return mg;case 36296:return _g;case 35678:case 36198:case 36298:case 36306:case 35682:return gg;case 35679:case 36299:case 36307:return vg;case 35680:case 36300:case 36308:case 36293:return xg;case 36289:case 36303:case 36311:case 36292:return Mg}}function Sg(r,t){r.uniform1fv(this.addr,t)}function Eg(r,t){const e=Nr(t,this.size,2);r.uniform2fv(this.addr,e)}function Tg(r,t){const e=Nr(t,this.size,3);r.uniform3fv(this.addr,e)}function bg(r,t){const e=Nr(t,this.size,4);r.uniform4fv(this.addr,e)}function Ag(r,t){const e=Nr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function wg(r,t){const e=Nr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function Rg(r,t){const e=Nr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function Cg(r,t){r.uniform1iv(this.addr,t)}function Pg(r,t){r.uniform2iv(this.addr,t)}function Lg(r,t){r.uniform3iv(this.addr,t)}function Dg(r,t){r.uniform4iv(this.addr,t)}function Ug(r,t){r.uniform1uiv(this.addr,t)}function Ig(r,t){r.uniform2uiv(this.addr,t)}function Ng(r,t){r.uniform3uiv(this.addr,t)}function Fg(r,t){r.uniform4uiv(this.addr,t)}function Og(r,t,e){const n=this.cache,i=t.length,s=ya(e,i);ue(n,s)||(r.uniform1iv(this.addr,s),de(n,s));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||ou,s[a])}function Bg(r,t,e){const n=this.cache,i=t.length,s=ya(e,i);ue(n,s)||(r.uniform1iv(this.addr,s),de(n,s));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||cu,s[a])}function zg(r,t,e){const n=this.cache,i=t.length,s=ya(e,i);ue(n,s)||(r.uniform1iv(this.addr,s),de(n,s));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||hu,s[a])}function kg(r,t,e){const n=this.cache,i=t.length,s=ya(e,i);ue(n,s)||(r.uniform1iv(this.addr,s),de(n,s));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||lu,s[a])}function Vg(r){switch(r){case 5126:return Sg;case 35664:return Eg;case 35665:return Tg;case 35666:return bg;case 35674:return Ag;case 35675:return wg;case 35676:return Rg;case 5124:case 35670:return Cg;case 35667:case 35671:return Pg;case 35668:case 35672:return Lg;case 35669:case 35673:return Dg;case 5125:return Ug;case 36294:return Ig;case 36295:return Ng;case 36296:return Fg;case 35678:case 36198:case 36298:case 36306:case 35682:return Og;case 35679:case 36299:case 36307:return Bg;case 35680:case 36300:case 36308:case 36293:return zg;case 36289:case 36303:case 36311:case 36292:return kg}}class Hg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=yg(e.type)}}class Gg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=Vg(e.type)}}class Wg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(t,e[o.id],n)}}}const no=/(\w+)(\])?(\[|\.)?/g;function Yc(r,t){r.seq.push(t),r.map[t.id]=t}function Xg(r,t,e){const n=r.name,i=n.length;for(no.lastIndex=0;;){const s=no.exec(n),a=no.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Yc(e,c===void 0?new Hg(o,r,t):new Gg(o,r,t));break}else{let d=e.map[o];d===void 0&&(d=new Wg(o),Yc(e,d)),e=d}}}class Qs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),a=t.getUniformLocation(e,s.name);Xg(s,a,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function qc(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}let Yg=0;function qg(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function $g(r){switch(r){case Rn:return["Linear","( value )"];case Pt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),["Linear","( value )"]}}function $c(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+qg(r.getShaderSource(t),a)}else return i}function jg(r,t){const e=$g(t);return"vec4 "+r+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function Kg(r,t){let e;switch(t){case Yd:e="Linear";break;case qd:e="Reinhard";break;case $d:e="OptimizedCineon";break;case jd:e="ACESFilmic";break;case Kd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Zg(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(qr).join(`
`)}function Jg(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Qg(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function qr(r){return r!==""}function jc(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Kc(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const t0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fo(r){return r.replace(t0,n0)}const e0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function n0(r,t){let e=Dt[t];if(e===void 0){const n=e0.get(t);if(n!==void 0)e=Dt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Fo(e)}const i0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zc(r){return r.replace(i0,r0)}function r0(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Jc(r){let t="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function s0(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Bh?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===bd?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===On&&(t="SHADOWMAP_TYPE_VSM"),t}function a0(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Tr:case br:t="ENVMAP_TYPE_CUBE";break;case xa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function o0(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case br:t="ENVMAP_MODE_REFRACTION";break}return t}function l0(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case va:t="ENVMAP_BLENDING_MULTIPLY";break;case Wd:t="ENVMAP_BLENDING_MIX";break;case Xd:t="ENVMAP_BLENDING_ADD";break}return t}function c0(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function h0(r,t,e,n){const i=r.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=s0(e),c=a0(e),h=o0(e),d=l0(e),u=c0(e),m=e.isWebGL2?"":Zg(e),g=Jg(s),_=i.createProgram();let p,f,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(qr).join(`
`),p.length>0&&(p+=`
`),f=[m,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(qr).join(`
`),f.length>0&&(f+=`
`)):(p=[Jc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qr).join(`
`),f=[m,Jc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Wn?"#define TONE_MAPPING":"",e.toneMapping!==Wn?Dt.tonemapping_pars_fragment:"",e.toneMapping!==Wn?Kg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Dt.colorspace_pars_fragment,jg("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(qr).join(`
`)),a=Fo(a),a=jc(a,e),a=Kc(a,e),o=Fo(o),o=jc(o,e),o=Kc(o,e),a=Zc(a),o=Zc(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",e.glslVersion===gc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===gc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const v=M+p+a,y=M+f+o,S=qc(i,i.VERTEX_SHADER,v),w=qc(i,i.FRAGMENT_SHADER,y);if(i.attachShader(_,S),i.attachShader(_,w),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_),r.debug.checkShaderErrors){const x=i.getProgramInfoLog(_).trim(),T=i.getShaderInfoLog(S).trim(),V=i.getShaderInfoLog(w).trim();let $=!0,U=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if($=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,S,w);else{const N=$c(i,S,"vertex"),O=$c(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Program Info Log: `+x+`
`+N+`
`+O)}else x!==""?console.warn("THREE.WebGLProgram: Program Info Log:",x):(T===""||V==="")&&(U=!1);U&&(this.diagnostics={runnable:$,programLog:x,vertexShader:{log:T,prefix:p},fragmentShader:{log:V,prefix:f}})}i.deleteShader(S),i.deleteShader(w);let b;this.getUniforms=function(){return b===void 0&&(b=new Qs(i,_)),b};let P;return this.getAttributes=function(){return P===void 0&&(P=Qg(i,_)),P},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Yg++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=S,this.fragmentShader=w,this}let u0=0;class d0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new f0(t),e.set(t,n)),n}}class f0{constructor(t){this.id=u0++,this.code=t,this.usedTimes=0}}function p0(r,t,e,n,i,s,a){const o=new tu,l=new d0,c=[],h=i.isWebGL2,d=i.logarithmicDepthBuffer,u=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return x===0?"uv":`uv${x}`}function p(x,T,V,$,U){const N=$.fog,O=U.geometry,K=x.isMeshStandardMaterial?$.environment:null,k=(x.isMeshStandardMaterial?e:t).get(x.envMap||K),X=k&&k.mapping===xa?k.image.height:null,Q=g[x.type];x.precision!==null&&(m=i.getMaxPrecision(x.precision),m!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));const Z=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,z=Z!==void 0?Z.length:0;let G=0;O.morphAttributes.position!==void 0&&(G=1),O.morphAttributes.normal!==void 0&&(G=2),O.morphAttributes.color!==void 0&&(G=3);let ot,it,at,gt;if(Q){const yn=En[Q];ot=yn.vertexShader,it=yn.fragmentShader}else ot=x.vertexShader,it=x.fragmentShader,l.update(x),at=l.getVertexShaderID(x),gt=l.getFragmentShaderID(x);const wt=r.getRenderTarget(),Mt=U.isInstancedMesh===!0,kt=!!x.map,Me=!!x.matcap,Ut=!!k,F=!!x.aoMap,fe=!!x.lightMap,vt=!!x.bumpMap,bt=!!x.normalMap,yt=!!x.displacementMap,$t=!!x.emissiveMap,Nt=!!x.metalnessMap,Ct=!!x.roughnessMap,Gt=x.anisotropy>0,ce=x.clearcoat>0,pe=x.iridescence>0,R=x.sheen>0,E=x.transmission>0,Y=Gt&&!!x.anisotropyMap,nt=ce&&!!x.clearcoatMap,et=ce&&!!x.clearcoatNormalMap,C=ce&&!!x.clearcoatRoughnessMap,J=pe&&!!x.iridescenceMap,tt=pe&&!!x.iridescenceThicknessMap,H=R&&!!x.sheenColorMap,dt=R&&!!x.sheenRoughnessMap,_t=!!x.specularMap,mt=!!x.specularColorMap,ft=!!x.specularIntensityMap,ht=E&&!!x.transmissionMap,St=E&&!!x.thicknessMap,Ot=!!x.gradientMap,L=!!x.alphaMap,lt=x.alphaTest>0,W=!!x.alphaHash,rt=!!x.extensions,ct=!!O.attributes.uv1,Vt=!!O.attributes.uv2,jt=!!O.attributes.uv3;return{isWebGL2:h,shaderID:Q,shaderType:x.type,shaderName:x.name,vertexShader:ot,fragmentShader:it,defines:x.defines,customVertexShaderID:at,customFragmentShaderID:gt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,instancing:Mt,instancingColor:Mt&&U.instanceColor!==null,supportsVertexTextures:u,outputColorSpace:wt===null?r.outputColorSpace:wt.isXRRenderTarget===!0?wt.texture.colorSpace:Rn,map:kt,matcap:Me,envMap:Ut,envMapMode:Ut&&k.mapping,envMapCubeUVHeight:X,aoMap:F,lightMap:fe,bumpMap:vt,normalMap:bt,displacementMap:u&&yt,emissiveMap:$t,normalMapObjectSpace:bt&&x.normalMapType===hf,normalMapTangentSpace:bt&&x.normalMapType===nl,metalnessMap:Nt,roughnessMap:Ct,anisotropy:Gt,anisotropyMap:Y,clearcoat:ce,clearcoatMap:nt,clearcoatNormalMap:et,clearcoatRoughnessMap:C,iridescence:pe,iridescenceMap:J,iridescenceThicknessMap:tt,sheen:R,sheenColorMap:H,sheenRoughnessMap:dt,specularMap:_t,specularColorMap:mt,specularIntensityMap:ft,transmission:E,transmissionMap:ht,thicknessMap:St,gradientMap:Ot,opaque:x.transparent===!1&&x.blending===xr,alphaMap:L,alphaTest:lt,alphaHash:W,combine:x.combine,mapUv:kt&&_(x.map.channel),aoMapUv:F&&_(x.aoMap.channel),lightMapUv:fe&&_(x.lightMap.channel),bumpMapUv:vt&&_(x.bumpMap.channel),normalMapUv:bt&&_(x.normalMap.channel),displacementMapUv:yt&&_(x.displacementMap.channel),emissiveMapUv:$t&&_(x.emissiveMap.channel),metalnessMapUv:Nt&&_(x.metalnessMap.channel),roughnessMapUv:Ct&&_(x.roughnessMap.channel),anisotropyMapUv:Y&&_(x.anisotropyMap.channel),clearcoatMapUv:nt&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:et&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:C&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:tt&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:H&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:dt&&_(x.sheenRoughnessMap.channel),specularMapUv:_t&&_(x.specularMap.channel),specularColorMapUv:mt&&_(x.specularColorMap.channel),specularIntensityMapUv:ft&&_(x.specularIntensityMap.channel),transmissionMapUv:ht&&_(x.transmissionMap.channel),thicknessMapUv:St&&_(x.thicknessMap.channel),alphaMapUv:L&&_(x.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(bt||Gt),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:ct,vertexUv2s:Vt,vertexUv3s:jt,pointsUvs:U.isPoints===!0&&!!O.attributes.uv&&(kt||L),fog:!!N,useFog:x.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:U.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:G,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&V.length>0,shadowMapType:r.shadowMap.type,toneMapping:x.toneMapped?r.toneMapping:Wn,useLegacyLights:r.useLegacyLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===kn,flipSided:x.side===Re,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:rt&&x.extensions.derivatives===!0,extensionFragDepth:rt&&x.extensions.fragDepth===!0,extensionDrawBuffers:rt&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:rt&&x.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function f(x){const T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(const V in x.defines)T.push(V),T.push(x.defines[V]);return x.isRawShaderMaterial===!1&&(M(T,x),v(T,x),T.push(r.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function M(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function v(x,T){o.disableAll(),T.isWebGL2&&o.enable(0),T.supportsVertexTextures&&o.enable(1),T.instancing&&o.enable(2),T.instancingColor&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),T.anisotropy&&o.enable(17),x.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.skinning&&o.enable(4),T.morphTargets&&o.enable(5),T.morphNormals&&o.enable(6),T.morphColors&&o.enable(7),T.premultipliedAlpha&&o.enable(8),T.shadowMapEnabled&&o.enable(9),T.useLegacyLights&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),x.push(o.mask)}function y(x){const T=g[x.type];let V;if(T){const $=En[T];V=al.clone($.uniforms)}else V=x.uniforms;return V}function S(x,T){let V;for(let $=0,U=c.length;$<U;$++){const N=c[$];if(N.cacheKey===T){V=N,++V.usedTimes;break}}return V===void 0&&(V=new h0(r,T,x,s),c.push(V)),V}function w(x){if(--x.usedTimes===0){const T=c.indexOf(x);c[T]=c[c.length-1],c.pop(),x.destroy()}}function b(x){l.remove(x)}function P(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:y,acquireProgram:S,releaseProgram:w,releaseShaderCache:b,programs:c,dispose:P}}function m0(){let r=new WeakMap;function t(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function e(s){r.delete(s)}function n(s,a,o){r.get(s)[a]=o}function i(){r=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function _0(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Qc(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function th(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function a(d,u,m,g,_,p){let f=r[t];return f===void 0?(f={id:d.id,object:d,geometry:u,material:m,groupOrder:g,renderOrder:d.renderOrder,z:_,group:p},r[t]=f):(f.id=d.id,f.object=d,f.geometry=u,f.material=m,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=_,f.group=p),t++,f}function o(d,u,m,g,_,p){const f=a(d,u,m,g,_,p);m.transmission>0?n.push(f):m.transparent===!0?i.push(f):e.push(f)}function l(d,u,m,g,_,p){const f=a(d,u,m,g,_,p);m.transmission>0?n.unshift(f):m.transparent===!0?i.unshift(f):e.unshift(f)}function c(d,u){e.length>1&&e.sort(d||_0),n.length>1&&n.sort(u||Qc),i.length>1&&i.sort(u||Qc)}function h(){for(let d=t,u=r.length;d<u;d++){const m=r[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:h,sort:c}}function g0(){let r=new WeakMap;function t(n,i){const s=r.get(n);let a;return s===void 0?(a=new th,r.set(n,[a])):i>=s.length?(a=new th,s.push(a)):a=s[i],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function v0(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new Tt};break;case"SpotLight":e={position:new D,direction:new D,color:new Tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Tt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Tt,groundColor:new Tt};break;case"RectAreaLight":e={color:new Tt,position:new D,halfWidth:new D,halfHeight:new D};break}return r[t.id]=e,e}}}function x0(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let M0=0;function y0(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function S0(r,t){const e=new v0,n=x0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)i.probe.push(new D);const s=new D,a=new ne,o=new ne;function l(h,d){let u=0,m=0,g=0;for(let V=0;V<9;V++)i.probe[V].set(0,0,0);let _=0,p=0,f=0,M=0,v=0,y=0,S=0,w=0,b=0,P=0;h.sort(y0);const x=d===!0?Math.PI:1;for(let V=0,$=h.length;V<$;V++){const U=h[V],N=U.color,O=U.intensity,K=U.distance,k=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)u+=N.r*O*x,m+=N.g*O*x,g+=N.b*O*x;else if(U.isLightProbe)for(let X=0;X<9;X++)i.probe[X].addScaledVector(U.sh.coefficients[X],O);else if(U.isDirectionalLight){const X=e.get(U);if(X.color.copy(U.color).multiplyScalar(U.intensity*x),U.castShadow){const Q=U.shadow,Z=n.get(U);Z.shadowBias=Q.bias,Z.shadowNormalBias=Q.normalBias,Z.shadowRadius=Q.radius,Z.shadowMapSize=Q.mapSize,i.directionalShadow[_]=Z,i.directionalShadowMap[_]=k,i.directionalShadowMatrix[_]=U.shadow.matrix,y++}i.directional[_]=X,_++}else if(U.isSpotLight){const X=e.get(U);X.position.setFromMatrixPosition(U.matrixWorld),X.color.copy(N).multiplyScalar(O*x),X.distance=K,X.coneCos=Math.cos(U.angle),X.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),X.decay=U.decay,i.spot[f]=X;const Q=U.shadow;if(U.map&&(i.spotLightMap[b]=U.map,b++,Q.updateMatrices(U),U.castShadow&&P++),i.spotLightMatrix[f]=Q.matrix,U.castShadow){const Z=n.get(U);Z.shadowBias=Q.bias,Z.shadowNormalBias=Q.normalBias,Z.shadowRadius=Q.radius,Z.shadowMapSize=Q.mapSize,i.spotShadow[f]=Z,i.spotShadowMap[f]=k,w++}f++}else if(U.isRectAreaLight){const X=e.get(U);X.color.copy(N).multiplyScalar(O),X.halfWidth.set(U.width*.5,0,0),X.halfHeight.set(0,U.height*.5,0),i.rectArea[M]=X,M++}else if(U.isPointLight){const X=e.get(U);if(X.color.copy(U.color).multiplyScalar(U.intensity*x),X.distance=U.distance,X.decay=U.decay,U.castShadow){const Q=U.shadow,Z=n.get(U);Z.shadowBias=Q.bias,Z.shadowNormalBias=Q.normalBias,Z.shadowRadius=Q.radius,Z.shadowMapSize=Q.mapSize,Z.shadowCameraNear=Q.camera.near,Z.shadowCameraFar=Q.camera.far,i.pointShadow[p]=Z,i.pointShadowMap[p]=k,i.pointShadowMatrix[p]=U.shadow.matrix,S++}i.point[p]=X,p++}else if(U.isHemisphereLight){const X=e.get(U);X.skyColor.copy(U.color).multiplyScalar(O*x),X.groundColor.copy(U.groundColor).multiplyScalar(O*x),i.hemi[v]=X,v++}}M>0&&(t.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=st.LTC_FLOAT_1,i.rectAreaLTC2=st.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=st.LTC_HALF_1,i.rectAreaLTC2=st.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=u,i.ambient[1]=m,i.ambient[2]=g;const T=i.hash;(T.directionalLength!==_||T.pointLength!==p||T.spotLength!==f||T.rectAreaLength!==M||T.hemiLength!==v||T.numDirectionalShadows!==y||T.numPointShadows!==S||T.numSpotShadows!==w||T.numSpotMaps!==b)&&(i.directional.length=_,i.spot.length=f,i.rectArea.length=M,i.point.length=p,i.hemi.length=v,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=w+b-P,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=P,T.directionalLength=_,T.pointLength=p,T.spotLength=f,T.rectAreaLength=M,T.hemiLength=v,T.numDirectionalShadows=y,T.numPointShadows=S,T.numSpotShadows=w,T.numSpotMaps=b,i.version=M0++)}function c(h,d){let u=0,m=0,g=0,_=0,p=0;const f=d.matrixWorldInverse;for(let M=0,v=h.length;M<v;M++){const y=h[M];if(y.isDirectionalLight){const S=i.directional[u];S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(f),u++}else if(y.isSpotLight){const S=i.spot[g];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(f),S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(f),g++}else if(y.isRectAreaLight){const S=i.rectArea[_];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(f),o.identity(),a.copy(y.matrixWorld),a.premultiply(f),o.extractRotation(a),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(y.isPointLight){const S=i.point[m];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(f),m++}else if(y.isHemisphereLight){const S=i.hemi[p];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(f),p++}}}return{setup:l,setupView:c,state:i}}function eh(r,t){const e=new S0(r,t),n=[],i=[];function s(){n.length=0,i.length=0}function a(d){n.push(d)}function o(d){i.push(d)}function l(d){e.setup(n,d)}function c(d){e.setupView(n,d)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function E0(r,t){let e=new WeakMap;function n(s,a=0){const o=e.get(s);let l;return o===void 0?(l=new eh(r,t),e.set(s,[l])):a>=o.length?(l=new eh(r,t),o.push(l)):l=o[a],l}function i(){e=new WeakMap}return{get:n,dispose:i}}class T0 extends Vi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=lf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class b0 extends Vi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const A0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,w0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function R0(r,t,e){let n=new ll;const i=new pt,s=new pt,a=new qt,o=new T0({depthPacking:cf}),l=new b0,c={},h=e.maxTextureSize,d={[hi]:Re,[Re]:hi,[kn]:kn},u=new Ne({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:A0,fragmentShader:w0}),m=u.clone();m.defines.HORIZONTAL_PASS=1;const g=new Mn;g.setAttribute("position",new vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ve(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bh;let f=this.type;this.render=function(S,w,b){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||S.length===0)return;const P=r.getRenderTarget(),x=r.getActiveCubeFace(),T=r.getActiveMipmapLevel(),V=r.state;V.setBlending(Gn),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const $=f!==On&&this.type===On,U=f===On&&this.type!==On;for(let N=0,O=S.length;N<O;N++){const K=S[N],k=K.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);const X=k.getFrameExtents();if(i.multiply(X),s.copy(k.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/X.x),i.x=s.x*X.x,k.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/X.y),i.y=s.y*X.y,k.mapSize.y=s.y)),k.map===null||$===!0||U===!0){const Z=this.type!==On?{minFilter:Se,magFilter:Se}:{};k.map!==null&&k.map.dispose(),k.map=new qn(i.x,i.y,Z),k.map.texture.name=K.name+".shadowMap",k.camera.updateProjectionMatrix()}r.setRenderTarget(k.map),r.clear();const Q=k.getViewportCount();for(let Z=0;Z<Q;Z++){const z=k.getViewport(Z);a.set(s.x*z.x,s.y*z.y,s.x*z.z,s.y*z.w),V.viewport(a),k.updateMatrices(K,Z),n=k.getFrustum(),y(w,b,k.camera,K,this.type)}k.isPointLightShadow!==!0&&this.type===On&&M(k,b),k.needsUpdate=!1}f=this.type,p.needsUpdate=!1,r.setRenderTarget(P,x,T)};function M(S,w){const b=t.update(_);u.defines.VSM_SAMPLES!==S.blurSamples&&(u.defines.VSM_SAMPLES=S.blurSamples,m.defines.VSM_SAMPLES=S.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new qn(i.x,i.y)),u.uniforms.shadow_pass.value=S.map.texture,u.uniforms.resolution.value=S.mapSize,u.uniforms.radius.value=S.radius,r.setRenderTarget(S.mapPass),r.clear(),r.renderBufferDirect(w,null,b,u,_,null),m.uniforms.shadow_pass.value=S.mapPass.texture,m.uniforms.resolution.value=S.mapSize,m.uniforms.radius.value=S.radius,r.setRenderTarget(S.map),r.clear(),r.renderBufferDirect(w,null,b,m,_,null)}function v(S,w,b,P){let x=null;const T=b.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(T!==void 0)x=T;else if(x=b.isPointLight===!0?l:o,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const V=x.uuid,$=w.uuid;let U=c[V];U===void 0&&(U={},c[V]=U);let N=U[$];N===void 0&&(N=x.clone(),U[$]=N),x=N}if(x.visible=w.visible,x.wireframe=w.wireframe,P===On?x.side=w.shadowSide!==null?w.shadowSide:w.side:x.side=w.shadowSide!==null?w.shadowSide:d[w.side],x.alphaMap=w.alphaMap,x.alphaTest=w.alphaTest,x.map=w.map,x.clipShadows=w.clipShadows,x.clippingPlanes=w.clippingPlanes,x.clipIntersection=w.clipIntersection,x.displacementMap=w.displacementMap,x.displacementScale=w.displacementScale,x.displacementBias=w.displacementBias,x.wireframeLinewidth=w.wireframeLinewidth,x.linewidth=w.linewidth,b.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const V=r.properties.get(x);V.light=b}return x}function y(S,w,b,P,x){if(S.visible===!1)return;if(S.layers.test(w.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&x===On)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,S.matrixWorld);const $=t.update(S),U=S.material;if(Array.isArray(U)){const N=$.groups;for(let O=0,K=N.length;O<K;O++){const k=N[O],X=U[k.materialIndex];if(X&&X.visible){const Q=v(S,X,P,x);r.renderBufferDirect(b,null,$,Q,S,k)}}}else if(U.visible){const N=v(S,U,P,x);r.renderBufferDirect(b,null,$,N,S,null)}}const V=S.children;for(let $=0,U=V.length;$<U;$++)y(V[$],w,b,P,x)}}function C0(r,t,e){const n=e.isWebGL2;function i(){let L=!1;const lt=new qt;let W=null;const rt=new qt(0,0,0,0);return{setMask:function(ct){W!==ct&&!L&&(r.colorMask(ct,ct,ct,ct),W=ct)},setLocked:function(ct){L=ct},setClear:function(ct,Vt,jt,me,yn){yn===!0&&(ct*=me,Vt*=me,jt*=me),lt.set(ct,Vt,jt,me),rt.equals(lt)===!1&&(r.clearColor(ct,Vt,jt,me),rt.copy(lt))},reset:function(){L=!1,W=null,rt.set(-1,0,0,0)}}}function s(){let L=!1,lt=null,W=null,rt=null;return{setTest:function(ct){ct?wt(r.DEPTH_TEST):Mt(r.DEPTH_TEST)},setMask:function(ct){lt!==ct&&!L&&(r.depthMask(ct),lt=ct)},setFunc:function(ct){if(W!==ct){switch(ct){case Od:r.depthFunc(r.NEVER);break;case Bd:r.depthFunc(r.ALWAYS);break;case zd:r.depthFunc(r.LESS);break;case Ro:r.depthFunc(r.LEQUAL);break;case kd:r.depthFunc(r.EQUAL);break;case Vd:r.depthFunc(r.GEQUAL);break;case Hd:r.depthFunc(r.GREATER);break;case Gd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}W=ct}},setLocked:function(ct){L=ct},setClear:function(ct){rt!==ct&&(r.clearDepth(ct),rt=ct)},reset:function(){L=!1,lt=null,W=null,rt=null}}}function a(){let L=!1,lt=null,W=null,rt=null,ct=null,Vt=null,jt=null,me=null,yn=null;return{setTest:function(Jt){L||(Jt?wt(r.STENCIL_TEST):Mt(r.STENCIL_TEST))},setMask:function(Jt){lt!==Jt&&!L&&(r.stencilMask(Jt),lt=Jt)},setFunc:function(Jt,Sn,Le){(W!==Jt||rt!==Sn||ct!==Le)&&(r.stencilFunc(Jt,Sn,Le),W=Jt,rt=Sn,ct=Le)},setOp:function(Jt,Sn,Le){(Vt!==Jt||jt!==Sn||me!==Le)&&(r.stencilOp(Jt,Sn,Le),Vt=Jt,jt=Sn,me=Le)},setLocked:function(Jt){L=Jt},setClear:function(Jt){yn!==Jt&&(r.clearStencil(Jt),yn=Jt)},reset:function(){L=!1,lt=null,W=null,rt=null,ct=null,Vt=null,jt=null,me=null,yn=null}}}const o=new i,l=new s,c=new a,h=new WeakMap,d=new WeakMap;let u={},m={},g=new WeakMap,_=[],p=null,f=!1,M=null,v=null,y=null,S=null,w=null,b=null,P=null,x=!1,T=null,V=null,$=null,U=null,N=null;const O=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,k=0;const X=r.getParameter(r.VERSION);X.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(X)[1]),K=k>=1):X.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),K=k>=2);let Q=null,Z={};const z=r.getParameter(r.SCISSOR_BOX),G=r.getParameter(r.VIEWPORT),ot=new qt().fromArray(z),it=new qt().fromArray(G);function at(L,lt,W,rt){const ct=new Uint8Array(4),Vt=r.createTexture();r.bindTexture(L,Vt),r.texParameteri(L,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(L,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let jt=0;jt<W;jt++)n&&(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)?r.texImage3D(lt,0,r.RGBA,1,1,rt,0,r.RGBA,r.UNSIGNED_BYTE,ct):r.texImage2D(lt+jt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ct);return Vt}const gt={};gt[r.TEXTURE_2D]=at(r.TEXTURE_2D,r.TEXTURE_2D,1),gt[r.TEXTURE_CUBE_MAP]=at(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(gt[r.TEXTURE_2D_ARRAY]=at(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),gt[r.TEXTURE_3D]=at(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),wt(r.DEPTH_TEST),l.setFunc(Ro),yt(!1),$t(Hl),wt(r.CULL_FACE),vt(Gn);function wt(L){u[L]!==!0&&(r.enable(L),u[L]=!0)}function Mt(L){u[L]!==!1&&(r.disable(L),u[L]=!1)}function kt(L,lt){return m[L]!==lt?(r.bindFramebuffer(L,lt),m[L]=lt,n&&(L===r.DRAW_FRAMEBUFFER&&(m[r.FRAMEBUFFER]=lt),L===r.FRAMEBUFFER&&(m[r.DRAW_FRAMEBUFFER]=lt)),!0):!1}function Me(L,lt){let W=_,rt=!1;if(L)if(W=g.get(lt),W===void 0&&(W=[],g.set(lt,W)),L.isWebGLMultipleRenderTargets){const ct=L.texture;if(W.length!==ct.length||W[0]!==r.COLOR_ATTACHMENT0){for(let Vt=0,jt=ct.length;Vt<jt;Vt++)W[Vt]=r.COLOR_ATTACHMENT0+Vt;W.length=ct.length,rt=!0}}else W[0]!==r.COLOR_ATTACHMENT0&&(W[0]=r.COLOR_ATTACHMENT0,rt=!0);else W[0]!==r.BACK&&(W[0]=r.BACK,rt=!0);rt&&(e.isWebGL2?r.drawBuffers(W):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(W))}function Ut(L){return p!==L?(r.useProgram(L),p=L,!0):!1}const F={[fr]:r.FUNC_ADD,[wd]:r.FUNC_SUBTRACT,[Rd]:r.FUNC_REVERSE_SUBTRACT};if(n)F[Xl]=r.MIN,F[Yl]=r.MAX;else{const L=t.get("EXT_blend_minmax");L!==null&&(F[Xl]=L.MIN_EXT,F[Yl]=L.MAX_EXT)}const fe={[Cd]:r.ZERO,[wo]:r.ONE,[Pd]:r.SRC_COLOR,[zh]:r.SRC_ALPHA,[Fd]:r.SRC_ALPHA_SATURATE,[Id]:r.DST_COLOR,[Dd]:r.DST_ALPHA,[Ld]:r.ONE_MINUS_SRC_COLOR,[kh]:r.ONE_MINUS_SRC_ALPHA,[Nd]:r.ONE_MINUS_DST_COLOR,[Ud]:r.ONE_MINUS_DST_ALPHA};function vt(L,lt,W,rt,ct,Vt,jt,me){if(L===Gn){f===!0&&(Mt(r.BLEND),f=!1);return}if(f===!1&&(wt(r.BLEND),f=!0),L!==Ad){if(L!==M||me!==x){if((v!==fr||w!==fr)&&(r.blendEquation(r.FUNC_ADD),v=fr,w=fr),me)switch(L){case xr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case os:r.blendFunc(r.ONE,r.ONE);break;case Gl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Wl:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case xr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case os:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Gl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Wl:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}y=null,S=null,b=null,P=null,M=L,x=me}return}ct=ct||lt,Vt=Vt||W,jt=jt||rt,(lt!==v||ct!==w)&&(r.blendEquationSeparate(F[lt],F[ct]),v=lt,w=ct),(W!==y||rt!==S||Vt!==b||jt!==P)&&(r.blendFuncSeparate(fe[W],fe[rt],fe[Vt],fe[jt]),y=W,S=rt,b=Vt,P=jt),M=L,x=!1}function bt(L,lt){L.side===kn?Mt(r.CULL_FACE):wt(r.CULL_FACE);let W=L.side===Re;lt&&(W=!W),yt(W),L.blending===xr&&L.transparent===!1?vt(Gn):vt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),o.setMask(L.colorWrite);const rt=L.stencilWrite;c.setTest(rt),rt&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Ct(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?wt(r.SAMPLE_ALPHA_TO_COVERAGE):Mt(r.SAMPLE_ALPHA_TO_COVERAGE)}function yt(L){T!==L&&(L?r.frontFace(r.CW):r.frontFace(r.CCW),T=L)}function $t(L){L!==Ed?(wt(r.CULL_FACE),L!==V&&(L===Hl?r.cullFace(r.BACK):L===Td?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Mt(r.CULL_FACE),V=L}function Nt(L){L!==$&&(K&&r.lineWidth(L),$=L)}function Ct(L,lt,W){L?(wt(r.POLYGON_OFFSET_FILL),(U!==lt||N!==W)&&(r.polygonOffset(lt,W),U=lt,N=W)):Mt(r.POLYGON_OFFSET_FILL)}function Gt(L){L?wt(r.SCISSOR_TEST):Mt(r.SCISSOR_TEST)}function ce(L){L===void 0&&(L=r.TEXTURE0+O-1),Q!==L&&(r.activeTexture(L),Q=L)}function pe(L,lt,W){W===void 0&&(Q===null?W=r.TEXTURE0+O-1:W=Q);let rt=Z[W];rt===void 0&&(rt={type:void 0,texture:void 0},Z[W]=rt),(rt.type!==L||rt.texture!==lt)&&(Q!==W&&(r.activeTexture(W),Q=W),r.bindTexture(L,lt||gt[L]),rt.type=L,rt.texture=lt)}function R(){const L=Z[Q];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function E(){try{r.compressedTexImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Y(){try{r.compressedTexImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function nt(){try{r.texSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function et(){try{r.texSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function C(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function tt(){try{r.texStorage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function H(){try{r.texStorage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function dt(){try{r.texImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function _t(){try{r.texImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function mt(L){ot.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),ot.copy(L))}function ft(L){it.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),it.copy(L))}function ht(L,lt){let W=d.get(lt);W===void 0&&(W=new WeakMap,d.set(lt,W));let rt=W.get(L);rt===void 0&&(rt=r.getUniformBlockIndex(lt,L.name),W.set(L,rt))}function St(L,lt){const rt=d.get(lt).get(L);h.get(lt)!==rt&&(r.uniformBlockBinding(lt,rt,L.__bindingPointIndex),h.set(lt,rt))}function Ot(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},Q=null,Z={},m={},g=new WeakMap,_=[],p=null,f=!1,M=null,v=null,y=null,S=null,w=null,b=null,P=null,x=!1,T=null,V=null,$=null,U=null,N=null,ot.set(0,0,r.canvas.width,r.canvas.height),it.set(0,0,r.canvas.width,r.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:wt,disable:Mt,bindFramebuffer:kt,drawBuffers:Me,useProgram:Ut,setBlending:vt,setMaterial:bt,setFlipSided:yt,setCullFace:$t,setLineWidth:Nt,setPolygonOffset:Ct,setScissorTest:Gt,activeTexture:ce,bindTexture:pe,unbindTexture:R,compressedTexImage2D:E,compressedTexImage3D:Y,texImage2D:dt,texImage3D:_t,updateUBOMapping:ht,uniformBlockBinding:St,texStorage2D:tt,texStorage3D:H,texSubImage2D:nt,texSubImage3D:et,compressedTexSubImage2D:C,compressedTexSubImage3D:J,scissor:mt,viewport:ft,reset:Ot}}function P0(r,t,e,n,i,s,a){const o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,h=i.maxTextureSize,d=i.maxSamples,u=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let _;const p=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(R,E){return f?new OffscreenCanvas(R,E):hs("canvas")}function v(R,E,Y,nt){let et=1;if((R.width>nt||R.height>nt)&&(et=nt/Math.max(R.width,R.height)),et<1||E===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const C=E?ca:Math.floor,J=C(et*R.width),tt=C(et*R.height);_===void 0&&(_=M(J,tt));const H=Y?M(J,tt):_;return H.width=J,H.height=tt,H.getContext("2d").drawImage(R,0,0,J,tt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+J+"x"+tt+")."),H}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function y(R){return No(R.width)&&No(R.height)}function S(R){return o?!1:R.wrapS!==gn||R.wrapT!==gn||R.minFilter!==Se&&R.minFilter!==Fe}function w(R,E){return R.generateMipmaps&&E&&R.minFilter!==Se&&R.minFilter!==Fe}function b(R){r.generateMipmap(R)}function P(R,E,Y,nt,et=!1){if(o===!1)return E;if(R!==null){if(r[R]!==void 0)return r[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let C=E;return E===r.RED&&(Y===r.FLOAT&&(C=r.R32F),Y===r.HALF_FLOAT&&(C=r.R16F),Y===r.UNSIGNED_BYTE&&(C=r.R8)),E===r.RG&&(Y===r.FLOAT&&(C=r.RG32F),Y===r.HALF_FLOAT&&(C=r.RG16F),Y===r.UNSIGNED_BYTE&&(C=r.RG8)),E===r.RGBA&&(Y===r.FLOAT&&(C=r.RGBA32F),Y===r.HALF_FLOAT&&(C=r.RGBA16F),Y===r.UNSIGNED_BYTE&&(C=nt===Pt&&et===!1?r.SRGB8_ALPHA8:r.RGBA8),Y===r.UNSIGNED_SHORT_4_4_4_4&&(C=r.RGBA4),Y===r.UNSIGNED_SHORT_5_5_5_1&&(C=r.RGB5_A1)),(C===r.R16F||C===r.R32F||C===r.RG16F||C===r.RG32F||C===r.RGBA16F||C===r.RGBA32F)&&t.get("EXT_color_buffer_float"),C}function x(R,E,Y){return w(R,Y)===!0||R.isFramebufferTexture&&R.minFilter!==Se&&R.minFilter!==Fe?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function T(R){return R===Se||R===ql||R===Pa?r.NEAREST:r.LINEAR}function V(R){const E=R.target;E.removeEventListener("dispose",V),U(E),E.isVideoTexture&&g.delete(E)}function $(R){const E=R.target;E.removeEventListener("dispose",$),O(E)}function U(R){const E=n.get(R);if(E.__webglInit===void 0)return;const Y=R.source,nt=p.get(Y);if(nt){const et=nt[E.__cacheKey];et.usedTimes--,et.usedTimes===0&&N(R),Object.keys(nt).length===0&&p.delete(Y)}n.remove(R)}function N(R){const E=n.get(R);r.deleteTexture(E.__webglTexture);const Y=R.source,nt=p.get(Y);delete nt[E.__cacheKey],a.memory.textures--}function O(R){const E=R.texture,Y=n.get(R),nt=n.get(E);if(nt.__webglTexture!==void 0&&(r.deleteTexture(nt.__webglTexture),a.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let et=0;et<6;et++)r.deleteFramebuffer(Y.__webglFramebuffer[et]),Y.__webglDepthbuffer&&r.deleteRenderbuffer(Y.__webglDepthbuffer[et]);else{if(r.deleteFramebuffer(Y.__webglFramebuffer),Y.__webglDepthbuffer&&r.deleteRenderbuffer(Y.__webglDepthbuffer),Y.__webglMultisampledFramebuffer&&r.deleteFramebuffer(Y.__webglMultisampledFramebuffer),Y.__webglColorRenderbuffer)for(let et=0;et<Y.__webglColorRenderbuffer.length;et++)Y.__webglColorRenderbuffer[et]&&r.deleteRenderbuffer(Y.__webglColorRenderbuffer[et]);Y.__webglDepthRenderbuffer&&r.deleteRenderbuffer(Y.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let et=0,C=E.length;et<C;et++){const J=n.get(E[et]);J.__webglTexture&&(r.deleteTexture(J.__webglTexture),a.memory.textures--),n.remove(E[et])}n.remove(E),n.remove(R)}let K=0;function k(){K=0}function X(){const R=K;return R>=l&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+l),K+=1,R}function Q(R){const E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function Z(R,E){const Y=n.get(R);if(R.isVideoTexture&&ce(R),R.isRenderTargetTexture===!1&&R.version>0&&Y.__version!==R.version){const nt=R.image;if(nt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{kt(Y,R,E);return}}e.bindTexture(r.TEXTURE_2D,Y.__webglTexture,r.TEXTURE0+E)}function z(R,E){const Y=n.get(R);if(R.version>0&&Y.__version!==R.version){kt(Y,R,E);return}e.bindTexture(r.TEXTURE_2D_ARRAY,Y.__webglTexture,r.TEXTURE0+E)}function G(R,E){const Y=n.get(R);if(R.version>0&&Y.__version!==R.version){kt(Y,R,E);return}e.bindTexture(r.TEXTURE_3D,Y.__webglTexture,r.TEXTURE0+E)}function ot(R,E){const Y=n.get(R);if(R.version>0&&Y.__version!==R.version){Me(Y,R,E);return}e.bindTexture(r.TEXTURE_CUBE_MAP,Y.__webglTexture,r.TEXTURE0+E)}const it={[Lo]:r.REPEAT,[gn]:r.CLAMP_TO_EDGE,[Do]:r.MIRRORED_REPEAT},at={[Se]:r.NEAREST,[ql]:r.NEAREST_MIPMAP_NEAREST,[Pa]:r.NEAREST_MIPMAP_LINEAR,[Fe]:r.LINEAR,[Zd]:r.LINEAR_MIPMAP_NEAREST,[ls]:r.LINEAR_MIPMAP_LINEAR},gt={[df]:r.NEVER,[xf]:r.ALWAYS,[ff]:r.LESS,[mf]:r.LEQUAL,[pf]:r.EQUAL,[vf]:r.GEQUAL,[_f]:r.GREATER,[gf]:r.NOTEQUAL};function wt(R,E,Y){if(Y?(r.texParameteri(R,r.TEXTURE_WRAP_S,it[E.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,it[E.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,it[E.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,at[E.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,at[E.minFilter])):(r.texParameteri(R,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(R,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(E.wrapS!==gn||E.wrapT!==gn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(R,r.TEXTURE_MAG_FILTER,T(E.magFilter)),r.texParameteri(R,r.TEXTURE_MIN_FILTER,T(E.minFilter)),E.minFilter!==Se&&E.minFilter!==Fe&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,gt[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const nt=t.get("EXT_texture_filter_anisotropic");if(E.magFilter===Se||E.minFilter!==Pa&&E.minFilter!==ls||E.type===ni&&t.has("OES_texture_float_linear")===!1||o===!1&&E.type===Ar&&t.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(r.texParameterf(R,nt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function Mt(R,E){let Y=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",V));const nt=E.source;let et=p.get(nt);et===void 0&&(et={},p.set(nt,et));const C=Q(E);if(C!==R.__cacheKey){et[C]===void 0&&(et[C]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,Y=!0),et[C].usedTimes++;const J=et[R.__cacheKey];J!==void 0&&(et[R.__cacheKey].usedTimes--,J.usedTimes===0&&N(E)),R.__cacheKey=C,R.__webglTexture=et[C].texture}return Y}function kt(R,E,Y){let nt=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(nt=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(nt=r.TEXTURE_3D);const et=Mt(R,E),C=E.source;e.bindTexture(nt,R.__webglTexture,r.TEXTURE0+Y);const J=n.get(C);if(C.version!==J.__version||et===!0){e.activeTexture(r.TEXTURE0+Y),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.NONE);const tt=S(E)&&y(E.image)===!1;let H=v(E.image,tt,!1,h);H=pe(E,H);const dt=y(H)||o,_t=s.convert(E.format,E.colorSpace);let mt=s.convert(E.type),ft=P(E.internalFormat,_t,mt,E.colorSpace);wt(nt,E,dt);let ht;const St=E.mipmaps,Ot=o&&E.isVideoTexture!==!0,L=J.__version===void 0||et===!0,lt=x(E,H,dt);if(E.isDepthTexture)ft=r.DEPTH_COMPONENT,o?E.type===ni?ft=r.DEPTH_COMPONENT32F:E.type===ei?ft=r.DEPTH_COMPONENT24:E.type===Pi?ft=r.DEPTH24_STENCIL8:ft=r.DEPTH_COMPONENT16:E.type===ni&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Li&&ft===r.DEPTH_COMPONENT&&E.type!==el&&E.type!==ei&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=ei,mt=s.convert(E.type)),E.format===wr&&ft===r.DEPTH_COMPONENT&&(ft=r.DEPTH_STENCIL,E.type!==Pi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Pi,mt=s.convert(E.type))),L&&(Ot?e.texStorage2D(r.TEXTURE_2D,1,ft,H.width,H.height):e.texImage2D(r.TEXTURE_2D,0,ft,H.width,H.height,0,_t,mt,null));else if(E.isDataTexture)if(St.length>0&&dt){Ot&&L&&e.texStorage2D(r.TEXTURE_2D,lt,ft,St[0].width,St[0].height);for(let W=0,rt=St.length;W<rt;W++)ht=St[W],Ot?e.texSubImage2D(r.TEXTURE_2D,W,0,0,ht.width,ht.height,_t,mt,ht.data):e.texImage2D(r.TEXTURE_2D,W,ft,ht.width,ht.height,0,_t,mt,ht.data);E.generateMipmaps=!1}else Ot?(L&&e.texStorage2D(r.TEXTURE_2D,lt,ft,H.width,H.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,H.width,H.height,_t,mt,H.data)):e.texImage2D(r.TEXTURE_2D,0,ft,H.width,H.height,0,_t,mt,H.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ot&&L&&e.texStorage3D(r.TEXTURE_2D_ARRAY,lt,ft,St[0].width,St[0].height,H.depth);for(let W=0,rt=St.length;W<rt;W++)ht=St[W],E.format!==sn?_t!==null?Ot?e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,W,0,0,0,ht.width,ht.height,H.depth,_t,ht.data,0,0):e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,W,ft,ht.width,ht.height,H.depth,0,ht.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ot?e.texSubImage3D(r.TEXTURE_2D_ARRAY,W,0,0,0,ht.width,ht.height,H.depth,_t,mt,ht.data):e.texImage3D(r.TEXTURE_2D_ARRAY,W,ft,ht.width,ht.height,H.depth,0,_t,mt,ht.data)}else{Ot&&L&&e.texStorage2D(r.TEXTURE_2D,lt,ft,St[0].width,St[0].height);for(let W=0,rt=St.length;W<rt;W++)ht=St[W],E.format!==sn?_t!==null?Ot?e.compressedTexSubImage2D(r.TEXTURE_2D,W,0,0,ht.width,ht.height,_t,ht.data):e.compressedTexImage2D(r.TEXTURE_2D,W,ft,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ot?e.texSubImage2D(r.TEXTURE_2D,W,0,0,ht.width,ht.height,_t,mt,ht.data):e.texImage2D(r.TEXTURE_2D,W,ft,ht.width,ht.height,0,_t,mt,ht.data)}else if(E.isDataArrayTexture)Ot?(L&&e.texStorage3D(r.TEXTURE_2D_ARRAY,lt,ft,H.width,H.height,H.depth),e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,H.width,H.height,H.depth,_t,mt,H.data)):e.texImage3D(r.TEXTURE_2D_ARRAY,0,ft,H.width,H.height,H.depth,0,_t,mt,H.data);else if(E.isData3DTexture)Ot?(L&&e.texStorage3D(r.TEXTURE_3D,lt,ft,H.width,H.height,H.depth),e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,H.width,H.height,H.depth,_t,mt,H.data)):e.texImage3D(r.TEXTURE_3D,0,ft,H.width,H.height,H.depth,0,_t,mt,H.data);else if(E.isFramebufferTexture){if(L)if(Ot)e.texStorage2D(r.TEXTURE_2D,lt,ft,H.width,H.height);else{let W=H.width,rt=H.height;for(let ct=0;ct<lt;ct++)e.texImage2D(r.TEXTURE_2D,ct,ft,W,rt,0,_t,mt,null),W>>=1,rt>>=1}}else if(St.length>0&&dt){Ot&&L&&e.texStorage2D(r.TEXTURE_2D,lt,ft,St[0].width,St[0].height);for(let W=0,rt=St.length;W<rt;W++)ht=St[W],Ot?e.texSubImage2D(r.TEXTURE_2D,W,0,0,_t,mt,ht):e.texImage2D(r.TEXTURE_2D,W,ft,_t,mt,ht);E.generateMipmaps=!1}else Ot?(L&&e.texStorage2D(r.TEXTURE_2D,lt,ft,H.width,H.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,_t,mt,H)):e.texImage2D(r.TEXTURE_2D,0,ft,_t,mt,H);w(E,dt)&&b(nt),J.__version=C.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function Me(R,E,Y){if(E.image.length!==6)return;const nt=Mt(R,E),et=E.source;e.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+Y);const C=n.get(et);if(et.version!==C.__version||nt===!0){e.activeTexture(r.TEXTURE0+Y),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.NONE);const J=E.isCompressedTexture||E.image[0].isCompressedTexture,tt=E.image[0]&&E.image[0].isDataTexture,H=[];for(let W=0;W<6;W++)!J&&!tt?H[W]=v(E.image[W],!1,!0,c):H[W]=tt?E.image[W].image:E.image[W],H[W]=pe(E,H[W]);const dt=H[0],_t=y(dt)||o,mt=s.convert(E.format,E.colorSpace),ft=s.convert(E.type),ht=P(E.internalFormat,mt,ft,E.colorSpace),St=o&&E.isVideoTexture!==!0,Ot=C.__version===void 0||nt===!0;let L=x(E,dt,_t);wt(r.TEXTURE_CUBE_MAP,E,_t);let lt;if(J){St&&Ot&&e.texStorage2D(r.TEXTURE_CUBE_MAP,L,ht,dt.width,dt.height);for(let W=0;W<6;W++){lt=H[W].mipmaps;for(let rt=0;rt<lt.length;rt++){const ct=lt[rt];E.format!==sn?mt!==null?St?e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+W,rt,0,0,ct.width,ct.height,mt,ct.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+W,rt,ht,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):St?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+W,rt,0,0,ct.width,ct.height,mt,ft,ct.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+W,rt,ht,ct.width,ct.height,0,mt,ft,ct.data)}}}else{lt=E.mipmaps,St&&Ot&&(lt.length>0&&L++,e.texStorage2D(r.TEXTURE_CUBE_MAP,L,ht,H[0].width,H[0].height));for(let W=0;W<6;W++)if(tt){St?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,H[W].width,H[W].height,mt,ft,H[W].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,ht,H[W].width,H[W].height,0,mt,ft,H[W].data);for(let rt=0;rt<lt.length;rt++){const Vt=lt[rt].image[W].image;St?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+W,rt+1,0,0,Vt.width,Vt.height,mt,ft,Vt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+W,rt+1,ht,Vt.width,Vt.height,0,mt,ft,Vt.data)}}else{St?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,mt,ft,H[W]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,ht,mt,ft,H[W]);for(let rt=0;rt<lt.length;rt++){const ct=lt[rt];St?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+W,rt+1,0,0,mt,ft,ct.image[W]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+W,rt+1,ht,mt,ft,ct.image[W])}}}w(E,_t)&&b(r.TEXTURE_CUBE_MAP),C.__version=et.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function Ut(R,E,Y,nt,et){const C=s.convert(Y.format,Y.colorSpace),J=s.convert(Y.type),tt=P(Y.internalFormat,C,J,Y.colorSpace);n.get(E).__hasExternalTextures||(et===r.TEXTURE_3D||et===r.TEXTURE_2D_ARRAY?e.texImage3D(et,0,tt,E.width,E.height,E.depth,0,C,J,null):e.texImage2D(et,0,tt,E.width,E.height,0,C,J,null)),e.bindFramebuffer(r.FRAMEBUFFER,R),Gt(E)?u.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,nt,et,n.get(Y).__webglTexture,0,Ct(E)):(et===r.TEXTURE_2D||et>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,nt,et,n.get(Y).__webglTexture,0),e.bindFramebuffer(r.FRAMEBUFFER,null)}function F(R,E,Y){if(r.bindRenderbuffer(r.RENDERBUFFER,R),E.depthBuffer&&!E.stencilBuffer){let nt=r.DEPTH_COMPONENT16;if(Y||Gt(E)){const et=E.depthTexture;et&&et.isDepthTexture&&(et.type===ni?nt=r.DEPTH_COMPONENT32F:et.type===ei&&(nt=r.DEPTH_COMPONENT24));const C=Ct(E);Gt(E)?u.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,C,nt,E.width,E.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,C,nt,E.width,E.height)}else r.renderbufferStorage(r.RENDERBUFFER,nt,E.width,E.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,R)}else if(E.depthBuffer&&E.stencilBuffer){const nt=Ct(E);Y&&Gt(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,nt,r.DEPTH24_STENCIL8,E.width,E.height):Gt(E)?u.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,nt,r.DEPTH24_STENCIL8,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,R)}else{const nt=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let et=0;et<nt.length;et++){const C=nt[et],J=s.convert(C.format,C.colorSpace),tt=s.convert(C.type),H=P(C.internalFormat,J,tt,C.colorSpace),dt=Ct(E);Y&&Gt(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,dt,H,E.width,E.height):Gt(E)?u.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,dt,H,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,H,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function fe(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Z(E.depthTexture,0);const nt=n.get(E.depthTexture).__webglTexture,et=Ct(E);if(E.depthTexture.format===Li)Gt(E)?u.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,nt,0,et):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,nt,0);else if(E.depthTexture.format===wr)Gt(E)?u.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,nt,0,et):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function vt(R){const E=n.get(R),Y=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");fe(E.__webglFramebuffer,R)}else if(Y){E.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)e.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[nt]),E.__webglDepthbuffer[nt]=r.createRenderbuffer(),F(E.__webglDepthbuffer[nt],R,!1)}else e.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=r.createRenderbuffer(),F(E.__webglDepthbuffer,R,!1);e.bindFramebuffer(r.FRAMEBUFFER,null)}function bt(R,E,Y){const nt=n.get(R);E!==void 0&&Ut(nt.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D),Y!==void 0&&vt(R)}function yt(R){const E=R.texture,Y=n.get(R),nt=n.get(E);R.addEventListener("dispose",$),R.isWebGLMultipleRenderTargets!==!0&&(nt.__webglTexture===void 0&&(nt.__webglTexture=r.createTexture()),nt.__version=E.version,a.memory.textures++);const et=R.isWebGLCubeRenderTarget===!0,C=R.isWebGLMultipleRenderTargets===!0,J=y(R)||o;if(et){Y.__webglFramebuffer=[];for(let tt=0;tt<6;tt++)Y.__webglFramebuffer[tt]=r.createFramebuffer()}else{if(Y.__webglFramebuffer=r.createFramebuffer(),C)if(i.drawBuffers){const tt=R.texture;for(let H=0,dt=tt.length;H<dt;H++){const _t=n.get(tt[H]);_t.__webglTexture===void 0&&(_t.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&R.samples>0&&Gt(R)===!1){const tt=C?E:[E];Y.__webglMultisampledFramebuffer=r.createFramebuffer(),Y.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let H=0;H<tt.length;H++){const dt=tt[H];Y.__webglColorRenderbuffer[H]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Y.__webglColorRenderbuffer[H]);const _t=s.convert(dt.format,dt.colorSpace),mt=s.convert(dt.type),ft=P(dt.internalFormat,_t,mt,dt.colorSpace,R.isXRRenderTarget===!0),ht=Ct(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,ht,ft,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+H,r.RENDERBUFFER,Y.__webglColorRenderbuffer[H])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(Y.__webglDepthRenderbuffer=r.createRenderbuffer(),F(Y.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(et){e.bindTexture(r.TEXTURE_CUBE_MAP,nt.__webglTexture),wt(r.TEXTURE_CUBE_MAP,E,J);for(let tt=0;tt<6;tt++)Ut(Y.__webglFramebuffer[tt],R,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+tt);w(E,J)&&b(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(C){const tt=R.texture;for(let H=0,dt=tt.length;H<dt;H++){const _t=tt[H],mt=n.get(_t);e.bindTexture(r.TEXTURE_2D,mt.__webglTexture),wt(r.TEXTURE_2D,_t,J),Ut(Y.__webglFramebuffer,R,_t,r.COLOR_ATTACHMENT0+H,r.TEXTURE_2D),w(_t,J)&&b(r.TEXTURE_2D)}e.unbindTexture()}else{let tt=r.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(o?tt=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(tt,nt.__webglTexture),wt(tt,E,J),Ut(Y.__webglFramebuffer,R,E,r.COLOR_ATTACHMENT0,tt),w(E,J)&&b(tt),e.unbindTexture()}R.depthBuffer&&vt(R)}function $t(R){const E=y(R)||o,Y=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let nt=0,et=Y.length;nt<et;nt++){const C=Y[nt];if(w(C,E)){const J=R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,tt=n.get(C).__webglTexture;e.bindTexture(J,tt),b(J),e.unbindTexture()}}}function Nt(R){if(o&&R.samples>0&&Gt(R)===!1){const E=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],Y=R.width,nt=R.height;let et=r.COLOR_BUFFER_BIT;const C=[],J=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,tt=n.get(R),H=R.isWebGLMultipleRenderTargets===!0;if(H)for(let dt=0;dt<E.length;dt++)e.bindFramebuffer(r.FRAMEBUFFER,tt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+dt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,tt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+dt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,tt.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,tt.__webglFramebuffer);for(let dt=0;dt<E.length;dt++){C.push(r.COLOR_ATTACHMENT0+dt),R.depthBuffer&&C.push(J);const _t=tt.__ignoreDepthValues!==void 0?tt.__ignoreDepthValues:!1;if(_t===!1&&(R.depthBuffer&&(et|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&(et|=r.STENCIL_BUFFER_BIT)),H&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,tt.__webglColorRenderbuffer[dt]),_t===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[J]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[J])),H){const mt=n.get(E[dt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,mt,0)}r.blitFramebuffer(0,0,Y,nt,0,0,Y,nt,et,r.NEAREST),m&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,C)}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),H)for(let dt=0;dt<E.length;dt++){e.bindFramebuffer(r.FRAMEBUFFER,tt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+dt,r.RENDERBUFFER,tt.__webglColorRenderbuffer[dt]);const _t=n.get(E[dt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,tt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+dt,r.TEXTURE_2D,_t,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,tt.__webglMultisampledFramebuffer)}}function Ct(R){return Math.min(d,R.samples)}function Gt(R){const E=n.get(R);return o&&R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ce(R){const E=a.render.frame;g.get(R)!==E&&(g.set(R,E),R.update())}function pe(R,E){const Y=R.colorSpace,nt=R.format,et=R.type;return R.isCompressedTexture===!0||R.format===Io||Y!==Rn&&Y!==Ui&&(Y===Pt?o===!1?t.has("EXT_sRGB")===!0&&nt===sn?(R.format=Io,R.minFilter=Fe,R.generateMipmaps=!1):E=Zh.sRGBToLinear(E):(nt!==sn||et!==oi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),E}this.allocateTextureUnit=X,this.resetTextureUnits=k,this.setTexture2D=Z,this.setTexture2DArray=z,this.setTexture3D=G,this.setTextureCube=ot,this.rebindTextures=bt,this.setupRenderTarget=yt,this.updateRenderTargetMipmap=$t,this.updateMultisampleRenderTarget=Nt,this.setupDepthRenderbuffer=vt,this.setupFrameBufferTexture=Ut,this.useMultisampledRTT=Gt}function L0(r,t,e){const n=e.isWebGL2;function i(s,a=Ui){let o;if(s===oi)return r.UNSIGNED_BYTE;if(s===Gh)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Wh)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Jd)return r.BYTE;if(s===Qd)return r.SHORT;if(s===el)return r.UNSIGNED_SHORT;if(s===Hh)return r.INT;if(s===ei)return r.UNSIGNED_INT;if(s===ni)return r.FLOAT;if(s===Ar)return n?r.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===tf)return r.ALPHA;if(s===sn)return r.RGBA;if(s===ef)return r.LUMINANCE;if(s===nf)return r.LUMINANCE_ALPHA;if(s===Li)return r.DEPTH_COMPONENT;if(s===wr)return r.DEPTH_STENCIL;if(s===Io)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===rf)return r.RED;if(s===Xh)return r.RED_INTEGER;if(s===sf)return r.RG;if(s===Yh)return r.RG_INTEGER;if(s===qh)return r.RGBA_INTEGER;if(s===La||s===Da||s===Ua||s===Ia)if(a===Pt)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===La)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Da)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ua)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ia)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===La)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Da)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ua)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ia)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===$l||s===jl||s===Kl||s===Zl)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===$l)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===jl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Kl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Zl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===af)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Jl||s===Ql)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Jl)return a===Pt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Ql)return a===Pt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===tc||s===ec||s===nc||s===ic||s===rc||s===sc||s===ac||s===oc||s===lc||s===cc||s===hc||s===uc||s===dc||s===fc)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(s===tc)return a===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ec)return a===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===nc)return a===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ic)return a===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===rc)return a===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===sc)return a===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ac)return a===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===oc)return a===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===lc)return a===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===cc)return a===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===hc)return a===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===uc)return a===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===dc)return a===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===fc)return a===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Na)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(s===Na)return a===Pt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===of||s===pc||s===mc||s===_c)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(s===Na)return o.COMPRESSED_RED_RGTC1_EXT;if(s===pc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===mc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===_c)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Pi?n?r.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class D0 extends $e{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Xs extends se{constructor(){super(),this.isGroup=!0,this.type="Group"}}const U0={type:"move"};class io{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,n),f=this._getHandJoint(c,_);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),m=.02,g=.005;c.inputState.pinching&&u>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(U0)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Xs;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class I0 extends he{constructor(t,e,n,i,s,a,o,l,c,h){if(h=h!==void 0?h:Li,h!==Li&&h!==wr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Li&&(n=ei),n===void 0&&h===wr&&(n=Pi),super(null,i,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Se,this.minFilter=l!==void 0?l:Se,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class N0 extends ki{constructor(t,e){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,m=null,g=null;const _=e.getContextAttributes();let p=null,f=null;const M=[],v=[],y=new $e;y.layers.enable(1),y.viewport=new qt;const S=new $e;S.layers.enable(2),S.viewport=new qt;const w=[y,S],b=new D0;b.layers.enable(1),b.layers.enable(2);let P=null,x=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let G=M[z];return G===void 0&&(G=new io,M[z]=G),G.getTargetRaySpace()},this.getControllerGrip=function(z){let G=M[z];return G===void 0&&(G=new io,M[z]=G),G.getGripSpace()},this.getHand=function(z){let G=M[z];return G===void 0&&(G=new io,M[z]=G),G.getHandSpace()};function T(z){const G=v.indexOf(z.inputSource);if(G===-1)return;const ot=M[G];ot!==void 0&&(ot.update(z.inputSource,z.frame,c||a),ot.dispatchEvent({type:z.type,data:z.inputSource}))}function V(){i.removeEventListener("select",T),i.removeEventListener("selectstart",T),i.removeEventListener("selectend",T),i.removeEventListener("squeeze",T),i.removeEventListener("squeezestart",T),i.removeEventListener("squeezeend",T),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",$);for(let z=0;z<M.length;z++){const G=v[z];G!==null&&(v[z]=null,M[z].disconnect(G))}P=null,x=null,t.setRenderTarget(p),m=null,u=null,d=null,i=null,f=null,Z.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){s=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){o=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(z){c=z},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(z){if(i=z,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",T),i.addEventListener("selectstart",T),i.addEventListener("selectend",T),i.addEventListener("squeeze",T),i.addEventListener("squeezestart",T),i.addEventListener("squeezeend",T),i.addEventListener("end",V),i.addEventListener("inputsourceschange",$),_.xrCompatible!==!0&&await e.makeXRCompatible(),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const G={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(i,e,G),i.updateRenderState({baseLayer:m}),f=new qn(m.framebufferWidth,m.framebufferHeight,{format:sn,type:oi,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let G=null,ot=null,it=null;_.depth&&(it=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,G=_.stencil?wr:Li,ot=_.stencil?Pi:ei);const at={colorFormat:e.RGBA8,depthFormat:it,scaleFactor:s};d=new XRWebGLBinding(i,e),u=d.createProjectionLayer(at),i.updateRenderState({layers:[u]}),f=new qn(u.textureWidth,u.textureHeight,{format:sn,type:oi,depthTexture:new I0(u.textureWidth,u.textureHeight,ot,void 0,void 0,void 0,void 0,void 0,void 0,G),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});const gt=t.properties.get(f);gt.__ignoreDepthValues=u.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Z.setContext(i),Z.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function $(z){for(let G=0;G<z.removed.length;G++){const ot=z.removed[G],it=v.indexOf(ot);it>=0&&(v[it]=null,M[it].disconnect(ot))}for(let G=0;G<z.added.length;G++){const ot=z.added[G];let it=v.indexOf(ot);if(it===-1){for(let gt=0;gt<M.length;gt++)if(gt>=v.length){v.push(ot),it=gt;break}else if(v[gt]===null){v[gt]=ot,it=gt;break}if(it===-1)break}const at=M[it];at&&at.connect(ot)}}const U=new D,N=new D;function O(z,G,ot){U.setFromMatrixPosition(G.matrixWorld),N.setFromMatrixPosition(ot.matrixWorld);const it=U.distanceTo(N),at=G.projectionMatrix.elements,gt=ot.projectionMatrix.elements,wt=at[14]/(at[10]-1),Mt=at[14]/(at[10]+1),kt=(at[9]+1)/at[5],Me=(at[9]-1)/at[5],Ut=(at[8]-1)/at[0],F=(gt[8]+1)/gt[0],fe=wt*Ut,vt=wt*F,bt=it/(-Ut+F),yt=bt*-Ut;G.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(yt),z.translateZ(bt),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();const $t=wt+bt,Nt=Mt+bt,Ct=fe-yt,Gt=vt+(it-yt),ce=kt*Mt/Nt*$t,pe=Me*Mt/Nt*$t;z.projectionMatrix.makePerspective(Ct,Gt,ce,pe,$t,Nt),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}function K(z,G){G===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(G.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(i===null)return;b.near=S.near=y.near=z.near,b.far=S.far=y.far=z.far,(P!==b.near||x!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),P=b.near,x=b.far);const G=z.parent,ot=b.cameras;K(b,G);for(let it=0;it<ot.length;it++)K(ot[it],G);ot.length===2?O(b,y,S):b.projectionMatrix.copy(y.projectionMatrix),k(z,b,G)};function k(z,G,ot){ot===null?z.matrix.copy(G.matrixWorld):(z.matrix.copy(ot.matrixWorld),z.matrix.invert(),z.matrix.multiply(G.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0);const it=z.children;for(let at=0,gt=it.length;at<gt;at++)it[at].updateMatrixWorld(!0);z.projectionMatrix.copy(G.projectionMatrix),z.projectionMatrixInverse.copy(G.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=cs*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(u===null&&m===null))return l},this.setFoveation=function(z){l=z,u!==null&&(u.fixedFoveation=z),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=z)};let X=null;function Q(z,G){if(h=G.getViewerPose(c||a),g=G,h!==null){const ot=h.views;m!==null&&(t.setRenderTargetFramebuffer(f,m.framebuffer),t.setRenderTarget(f));let it=!1;ot.length!==b.cameras.length&&(b.cameras.length=0,it=!0);for(let at=0;at<ot.length;at++){const gt=ot[at];let wt=null;if(m!==null)wt=m.getViewport(gt);else{const kt=d.getViewSubImage(u,gt);wt=kt.viewport,at===0&&(t.setRenderTargetTextures(f,kt.colorTexture,u.ignoreDepthValues?void 0:kt.depthStencilTexture),t.setRenderTarget(f))}let Mt=w[at];Mt===void 0&&(Mt=new $e,Mt.layers.enable(at),Mt.viewport=new qt,w[at]=Mt),Mt.matrix.fromArray(gt.transform.matrix),Mt.matrix.decompose(Mt.position,Mt.quaternion,Mt.scale),Mt.projectionMatrix.fromArray(gt.projectionMatrix),Mt.projectionMatrixInverse.copy(Mt.projectionMatrix).invert(),Mt.viewport.set(wt.x,wt.y,wt.width,wt.height),at===0&&(b.matrix.copy(Mt.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),it===!0&&b.cameras.push(Mt)}}for(let ot=0;ot<M.length;ot++){const it=v[ot],at=M[ot];it!==null&&at!==void 0&&at.update(it,G,c||a)}X&&X(z,G),G.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:G}),g=null}const Z=new au;Z.setAnimationLoop(Q),this.setAnimationLoop=function(z){X=z},this.dispose=function(){}}}function F0(r,t){function e(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,ru(r)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function i(p,f,M,v,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(p,f):f.isMeshToonMaterial?(s(p,f),d(p,f)):f.isMeshPhongMaterial?(s(p,f),h(p,f)):f.isMeshStandardMaterial?(s(p,f),u(p,f),f.isMeshPhysicalMaterial&&m(p,f,y)):f.isMeshMatcapMaterial?(s(p,f),g(p,f)):f.isMeshDepthMaterial?s(p,f):f.isMeshDistanceMaterial?(s(p,f),_(p,f)):f.isMeshNormalMaterial?s(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?l(p,f,M,v):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,e(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Re&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,e(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Re&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,e(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,e(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const M=t.get(f).envMap;if(M&&(p.envMap.value=M,p.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;const v=r.useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*v,e(f.lightMap,p.lightMapTransform)}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,M,v){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*M,p.scale.value=v*.5,f.map&&(p.map.value=f.map,e(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function h(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function d(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function u(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,p.roughnessMapTransform)),t.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,M){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Re&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function _(p,f){const M=t.get(f).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function O0(r,t,e,n){let i={},s={},a=[];const o=e.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(M,v){const y=v.program;n.uniformBlockBinding(M,y)}function c(M,v){let y=i[M.id];y===void 0&&(g(M),y=h(M),i[M.id]=y,M.addEventListener("dispose",p));const S=v.program;n.updateUBOMapping(M,S);const w=t.render.frame;s[M.id]!==w&&(u(M),s[M.id]=w)}function h(M){const v=d();M.__bindingPointIndex=v;const y=r.createBuffer(),S=M.__size,w=M.usage;return r.bindBuffer(r.UNIFORM_BUFFER,y),r.bufferData(r.UNIFORM_BUFFER,S,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,y),y}function d(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){const v=i[M.id],y=M.uniforms,S=M.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let w=0,b=y.length;w<b;w++){const P=y[w];if(m(P,w,S)===!0){const x=P.__offset,T=Array.isArray(P.value)?P.value:[P.value];let V=0;for(let $=0;$<T.length;$++){const U=T[$],N=_(U);typeof U=="number"?(P.__data[0]=U,r.bufferSubData(r.UNIFORM_BUFFER,x+V,P.__data)):U.isMatrix3?(P.__data[0]=U.elements[0],P.__data[1]=U.elements[1],P.__data[2]=U.elements[2],P.__data[3]=U.elements[0],P.__data[4]=U.elements[3],P.__data[5]=U.elements[4],P.__data[6]=U.elements[5],P.__data[7]=U.elements[0],P.__data[8]=U.elements[6],P.__data[9]=U.elements[7],P.__data[10]=U.elements[8],P.__data[11]=U.elements[0]):(U.toArray(P.__data,V),V+=N.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,x,P.__data)}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function m(M,v,y){const S=M.value;if(y[v]===void 0){if(typeof S=="number")y[v]=S;else{const w=Array.isArray(S)?S:[S],b=[];for(let P=0;P<w.length;P++)b.push(w[P].clone());y[v]=b}return!0}else if(typeof S=="number"){if(y[v]!==S)return y[v]=S,!0}else{const w=Array.isArray(y[v])?y[v]:[y[v]],b=Array.isArray(S)?S:[S];for(let P=0;P<w.length;P++){const x=w[P];if(x.equals(b[P])===!1)return x.copy(b[P]),!0}}return!1}function g(M){const v=M.uniforms;let y=0;const S=16;let w=0;for(let b=0,P=v.length;b<P;b++){const x=v[b],T={boundary:0,storage:0},V=Array.isArray(x.value)?x.value:[x.value];for(let $=0,U=V.length;$<U;$++){const N=V[$],O=_(N);T.boundary+=O.boundary,T.storage+=O.storage}if(x.__data=new Float32Array(T.storage/Float32Array.BYTES_PER_ELEMENT),x.__offset=y,b>0){w=y%S;const $=S-w;w!==0&&$-T.boundary<0&&(y+=S-w,x.__offset=y)}y+=T.storage}return w=y%S,w>0&&(y+=S-w),M.__size=y,M.__cache={},this}function _(M){const v={boundary:0,storage:0};return typeof M=="number"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),v}function p(M){const v=M.target;v.removeEventListener("dispose",p);const y=a.indexOf(v.__bindingPointIndex);a.splice(y,1),r.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function f(){for(const M in i)r.deleteBuffer(i[M]);a=[],i={},s={}}return{bind:l,update:c,dispose:f}}function B0(){const r=hs("canvas");return r.style.display="block",r}class uu{constructor(t={}){const{canvas:e=B0(),context:n=null,depth:i=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let u;n!==null?u=n.getContextAttributes().alpha:u=a;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const f=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Pt,this.useLegacyLights=!0,this.toneMapping=Wn,this.toneMappingExposure=1;const v=this;let y=!1,S=0,w=0,b=null,P=-1,x=null;const T=new qt,V=new qt;let $=null;const U=new Tt(0);let N=0,O=e.width,K=e.height,k=1,X=null,Q=null;const Z=new qt(0,0,O,K),z=new qt(0,0,O,K);let G=!1;const ot=new ll;let it=!1,at=!1,gt=null;const wt=new ne,Mt=new pt,kt=new D,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ut(){return b===null?k:1}let F=n;function fe(A,B){for(let q=0;q<A.length;q++){const I=A[q],j=e.getContext(I,B);if(j!==null)return j}return null}try{const A={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${tl}`),e.addEventListener("webglcontextlost",lt,!1),e.addEventListener("webglcontextrestored",W,!1),e.addEventListener("webglcontextcreationerror",rt,!1),F===null){const B=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&B.shift(),F=fe(B,A),F===null)throw fe(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&F instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let vt,bt,yt,$t,Nt,Ct,Gt,ce,pe,R,E,Y,nt,et,C,J,tt,H,dt,_t,mt,ft,ht,St;function Ot(){vt=new $_(F),bt=new H_(F,vt,t),vt.init(bt),ft=new L0(F,vt,bt),yt=new C0(F,vt,bt),$t=new Z_(F),Nt=new m0,Ct=new P0(F,vt,yt,Nt,bt,ft,$t),Gt=new W_(v),ce=new q_(v),pe=new op(F,bt),ht=new k_(F,vt,pe,bt),R=new j_(F,pe,$t,ht),E=new eg(F,R,pe,$t),dt=new tg(F,bt,Ct),J=new G_(Nt),Y=new p0(v,Gt,ce,vt,bt,ht,J),nt=new F0(v,Nt),et=new g0,C=new E0(vt,bt),H=new z_(v,Gt,ce,yt,E,u,l),tt=new R0(v,E,bt),St=new O0(F,$t,bt,yt),_t=new V_(F,vt,$t,bt),mt=new K_(F,vt,$t,bt),$t.programs=Y.programs,v.capabilities=bt,v.extensions=vt,v.properties=Nt,v.renderLists=et,v.shadowMap=tt,v.state=yt,v.info=$t}Ot();const L=new N0(v,F);this.xr=L,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const A=vt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=vt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(A){A!==void 0&&(k=A,this.setSize(O,K,!1))},this.getSize=function(A){return A.set(O,K)},this.setSize=function(A,B,q=!0){if(L.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=A,K=B,e.width=Math.floor(A*k),e.height=Math.floor(B*k),q===!0&&(e.style.width=A+"px",e.style.height=B+"px"),this.setViewport(0,0,A,B)},this.getDrawingBufferSize=function(A){return A.set(O*k,K*k).floor()},this.setDrawingBufferSize=function(A,B,q){O=A,K=B,k=q,e.width=Math.floor(A*q),e.height=Math.floor(B*q),this.setViewport(0,0,A,B)},this.getCurrentViewport=function(A){return A.copy(T)},this.getViewport=function(A){return A.copy(Z)},this.setViewport=function(A,B,q,I){A.isVector4?Z.set(A.x,A.y,A.z,A.w):Z.set(A,B,q,I),yt.viewport(T.copy(Z).multiplyScalar(k).floor())},this.getScissor=function(A){return A.copy(z)},this.setScissor=function(A,B,q,I){A.isVector4?z.set(A.x,A.y,A.z,A.w):z.set(A,B,q,I),yt.scissor(V.copy(z).multiplyScalar(k).floor())},this.getScissorTest=function(){return G},this.setScissorTest=function(A){yt.setScissorTest(G=A)},this.setOpaqueSort=function(A){X=A},this.setTransparentSort=function(A){Q=A},this.getClearColor=function(A){return A.copy(H.getClearColor())},this.setClearColor=function(){H.setClearColor.apply(H,arguments)},this.getClearAlpha=function(){return H.getClearAlpha()},this.setClearAlpha=function(){H.setClearAlpha.apply(H,arguments)},this.clear=function(A=!0,B=!0,q=!0){let I=0;if(A){let j=!1;if(b!==null){const ut=b.texture.format;j=ut===qh||ut===Yh||ut===Xh}if(j){const ut=b.texture.type,xt=ut===oi||ut===ei||ut===el||ut===Pi||ut===Gh||ut===Wh,Et=H.getClearColor(),At=H.getClearAlpha(),Ft=Et.r,Rt=Et.g,Lt=Et.b;xt?(m[0]=Ft,m[1]=Rt,m[2]=Lt,m[3]=At,F.clearBufferuiv(F.COLOR,0,m)):(g[0]=Ft,g[1]=Rt,g[2]=Lt,g[3]=At,F.clearBufferiv(F.COLOR,0,g))}else I|=F.COLOR_BUFFER_BIT}B&&(I|=F.DEPTH_BUFFER_BIT),q&&(I|=F.STENCIL_BUFFER_BIT),F.clear(I)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",lt,!1),e.removeEventListener("webglcontextrestored",W,!1),e.removeEventListener("webglcontextcreationerror",rt,!1),et.dispose(),C.dispose(),Nt.dispose(),Gt.dispose(),ce.dispose(),E.dispose(),ht.dispose(),St.dispose(),Y.dispose(),L.dispose(),L.removeEventListener("sessionstart",Jt),L.removeEventListener("sessionend",Sn),gt&&(gt.dispose(),gt=null),Le.stop()};function lt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function W(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const A=$t.autoReset,B=tt.enabled,q=tt.autoUpdate,I=tt.needsUpdate,j=tt.type;Ot(),$t.autoReset=A,tt.enabled=B,tt.autoUpdate=q,tt.needsUpdate=I,tt.type=j}function rt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ct(A){const B=A.target;B.removeEventListener("dispose",ct),Vt(B)}function Vt(A){jt(A),Nt.remove(A)}function jt(A){const B=Nt.get(A).programs;B!==void 0&&(B.forEach(function(q){Y.releaseProgram(q)}),A.isShaderMaterial&&Y.releaseShaderCache(A))}this.renderBufferDirect=function(A,B,q,I,j,ut){B===null&&(B=Me);const xt=j.isMesh&&j.matrixWorld.determinant()<0,Et=xd(A,B,q,I,j);yt.setMaterial(I,xt);let At=q.index,Ft=1;I.wireframe===!0&&(At=R.getWireframeAttribute(q),Ft=2);const Rt=q.drawRange,Lt=q.attributes.position;let Qt=Rt.start*Ft,ie=(Rt.start+Rt.count)*Ft;ut!==null&&(Qt=Math.max(Qt,ut.start*Ft),ie=Math.min(ie,(ut.start+ut.count)*Ft)),At!==null?(Qt=Math.max(Qt,0),ie=Math.min(ie,At.count)):Lt!=null&&(Qt=Math.max(Qt,0),ie=Math.min(ie,Lt.count));const un=ie-Qt;if(un<0||un===1/0)return;ht.setup(j,I,Et,q,At);let Pn,ae=_t;if(At!==null&&(Pn=pe.get(At),ae=mt,ae.setIndex(Pn)),j.isMesh)I.wireframe===!0?(yt.setLineWidth(I.wireframeLinewidth*Ut()),ae.setMode(F.LINES)):ae.setMode(F.TRIANGLES);else if(j.isLine){let zt=I.linewidth;zt===void 0&&(zt=1),yt.setLineWidth(zt*Ut()),j.isLineSegments?ae.setMode(F.LINES):j.isLineLoop?ae.setMode(F.LINE_LOOP):ae.setMode(F.LINE_STRIP)}else j.isPoints?ae.setMode(F.POINTS):j.isSprite&&ae.setMode(F.TRIANGLES);if(j.isInstancedMesh)ae.renderInstances(Qt,un,j.count);else if(q.isInstancedBufferGeometry){const zt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Aa=Math.min(q.instanceCount,zt);ae.renderInstances(Qt,un,Aa)}else ae.render(Qt,un)},this.compile=function(A,B){function q(I,j,ut){I.transparent===!0&&I.side===kn&&I.forceSinglePass===!1?(I.side=Re,I.needsUpdate=!0,Ts(I,j,ut),I.side=hi,I.needsUpdate=!0,Ts(I,j,ut),I.side=kn):Ts(I,j,ut)}p=C.get(A),p.init(),M.push(p),A.traverseVisible(function(I){I.isLight&&I.layers.test(B.layers)&&(p.pushLight(I),I.castShadow&&p.pushShadow(I))}),p.setupLights(v.useLegacyLights),A.traverse(function(I){const j=I.material;if(j)if(Array.isArray(j))for(let ut=0;ut<j.length;ut++){const xt=j[ut];q(xt,A,I)}else q(j,A,I)}),M.pop(),p=null};let me=null;function yn(A){me&&me(A)}function Jt(){Le.stop()}function Sn(){Le.start()}const Le=new au;Le.setAnimationLoop(yn),typeof self<"u"&&Le.setContext(self),this.setAnimationLoop=function(A){me=A,L.setAnimationLoop(A),A===null?Le.stop():Le.start()},L.addEventListener("sessionstart",Jt),L.addEventListener("sessionend",Sn),this.render=function(A,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),L.enabled===!0&&L.isPresenting===!0&&(L.cameraAutoUpdate===!0&&L.updateCamera(B),B=L.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,B,b),p=C.get(A,M.length),p.init(),M.push(p),wt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),ot.setFromProjectionMatrix(wt),at=this.localClippingEnabled,it=J.init(this.clippingPlanes,at),_=et.get(A,f.length),_.init(),f.push(_),Fl(A,B,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(X,Q),this.info.render.frame++,it===!0&&J.beginShadows();const q=p.state.shadowsArray;if(tt.render(q,A,B),it===!0&&J.endShadows(),this.info.autoReset===!0&&this.info.reset(),H.render(_,A),p.setupLights(v.useLegacyLights),B.isArrayCamera){const I=B.cameras;for(let j=0,ut=I.length;j<ut;j++){const xt=I[j];Ol(_,A,xt,xt.viewport)}}else Ol(_,A,B);b!==null&&(Ct.updateMultisampleRenderTarget(b),Ct.updateRenderTargetMipmap(b)),A.isScene===!0&&A.onAfterRender(v,A,B),ht.resetDefaultState(),P=-1,x=null,M.pop(),M.length>0?p=M[M.length-1]:p=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function Fl(A,B,q,I){if(A.visible===!1)return;if(A.layers.test(B.layers)){if(A.isGroup)q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(B);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ot.intersectsSprite(A)){I&&kt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(wt);const xt=E.update(A),Et=A.material;Et.visible&&_.push(A,xt,Et,q,kt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||ot.intersectsObject(A))){const xt=E.update(A),Et=A.material;if(I&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),kt.copy(A.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),kt.copy(xt.boundingSphere.center)),kt.applyMatrix4(A.matrixWorld).applyMatrix4(wt)),Array.isArray(Et)){const At=xt.groups;for(let Ft=0,Rt=At.length;Ft<Rt;Ft++){const Lt=At[Ft],Qt=Et[Lt.materialIndex];Qt&&Qt.visible&&_.push(A,xt,Qt,q,kt.z,Lt)}}else Et.visible&&_.push(A,xt,Et,q,kt.z,null)}}const ut=A.children;for(let xt=0,Et=ut.length;xt<Et;xt++)Fl(ut[xt],B,q,I)}function Ol(A,B,q,I){const j=A.opaque,ut=A.transmissive,xt=A.transparent;p.setupLightsView(q),it===!0&&J.setGlobalState(v.clippingPlanes,q),ut.length>0&&vd(j,ut,B,q),I&&yt.viewport(T.copy(I)),j.length>0&&Es(j,B,q),ut.length>0&&Es(ut,B,q),xt.length>0&&Es(xt,B,q),yt.buffers.depth.setTest(!0),yt.buffers.depth.setMask(!0),yt.buffers.color.setMask(!0),yt.setPolygonOffset(!1)}function vd(A,B,q,I){const j=bt.isWebGL2;gt===null&&(gt=new qn(1,1,{generateMipmaps:!0,type:vt.has("EXT_color_buffer_half_float")?Ar:oi,minFilter:ls,samples:j?4:0})),v.getDrawingBufferSize(Mt),j?gt.setSize(Mt.x,Mt.y):gt.setSize(ca(Mt.x),ca(Mt.y));const ut=v.getRenderTarget();v.setRenderTarget(gt),v.getClearColor(U),N=v.getClearAlpha(),N<1&&v.setClearColor(16777215,.5),v.clear();const xt=v.toneMapping;v.toneMapping=Wn,Es(A,q,I),Ct.updateMultisampleRenderTarget(gt),Ct.updateRenderTargetMipmap(gt);let Et=!1;for(let At=0,Ft=B.length;At<Ft;At++){const Rt=B[At],Lt=Rt.object,Qt=Rt.geometry,ie=Rt.material,un=Rt.group;if(ie.side===kn&&Lt.layers.test(I.layers)){const Pn=ie.side;ie.side=Re,ie.needsUpdate=!0,Bl(Lt,q,I,Qt,ie,un),ie.side=Pn,ie.needsUpdate=!0,Et=!0}}Et===!0&&(Ct.updateMultisampleRenderTarget(gt),Ct.updateRenderTargetMipmap(gt)),v.setRenderTarget(ut),v.setClearColor(U,N),v.toneMapping=xt}function Es(A,B,q){const I=B.isScene===!0?B.overrideMaterial:null;for(let j=0,ut=A.length;j<ut;j++){const xt=A[j],Et=xt.object,At=xt.geometry,Ft=I===null?xt.material:I,Rt=xt.group;Et.layers.test(q.layers)&&Bl(Et,B,q,At,Ft,Rt)}}function Bl(A,B,q,I,j,ut){A.onBeforeRender(v,B,q,I,j,ut),A.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),j.onBeforeRender(v,B,q,I,A,ut),j.transparent===!0&&j.side===kn&&j.forceSinglePass===!1?(j.side=Re,j.needsUpdate=!0,v.renderBufferDirect(q,B,I,j,A,ut),j.side=hi,j.needsUpdate=!0,v.renderBufferDirect(q,B,I,j,A,ut),j.side=kn):v.renderBufferDirect(q,B,I,j,A,ut),A.onAfterRender(v,B,q,I,j,ut)}function Ts(A,B,q){B.isScene!==!0&&(B=Me);const I=Nt.get(A),j=p.state.lights,ut=p.state.shadowsArray,xt=j.state.version,Et=Y.getParameters(A,j.state,ut,B,q),At=Y.getProgramCacheKey(Et);let Ft=I.programs;I.environment=A.isMeshStandardMaterial?B.environment:null,I.fog=B.fog,I.envMap=(A.isMeshStandardMaterial?ce:Gt).get(A.envMap||I.environment),Ft===void 0&&(A.addEventListener("dispose",ct),Ft=new Map,I.programs=Ft);let Rt=Ft.get(At);if(Rt!==void 0){if(I.currentProgram===Rt&&I.lightsStateVersion===xt)return zl(A,Et),Rt}else Et.uniforms=Y.getUniforms(A),A.onBuild(q,Et,v),A.onBeforeCompile(Et,v),Rt=Y.acquireProgram(Et,At),Ft.set(At,Rt),I.uniforms=Et.uniforms;const Lt=I.uniforms;(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Lt.clippingPlanes=J.uniform),zl(A,Et),I.needsLights=yd(A),I.lightsStateVersion=xt,I.needsLights&&(Lt.ambientLightColor.value=j.state.ambient,Lt.lightProbe.value=j.state.probe,Lt.directionalLights.value=j.state.directional,Lt.directionalLightShadows.value=j.state.directionalShadow,Lt.spotLights.value=j.state.spot,Lt.spotLightShadows.value=j.state.spotShadow,Lt.rectAreaLights.value=j.state.rectArea,Lt.ltc_1.value=j.state.rectAreaLTC1,Lt.ltc_2.value=j.state.rectAreaLTC2,Lt.pointLights.value=j.state.point,Lt.pointLightShadows.value=j.state.pointShadow,Lt.hemisphereLights.value=j.state.hemi,Lt.directionalShadowMap.value=j.state.directionalShadowMap,Lt.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Lt.spotShadowMap.value=j.state.spotShadowMap,Lt.spotLightMatrix.value=j.state.spotLightMatrix,Lt.spotLightMap.value=j.state.spotLightMap,Lt.pointShadowMap.value=j.state.pointShadowMap,Lt.pointShadowMatrix.value=j.state.pointShadowMatrix);const Qt=Rt.getUniforms(),ie=Qs.seqWithValue(Qt.seq,Lt);return I.currentProgram=Rt,I.uniformsList=ie,Rt}function zl(A,B){const q=Nt.get(A);q.outputColorSpace=B.outputColorSpace,q.instancing=B.instancing,q.skinning=B.skinning,q.morphTargets=B.morphTargets,q.morphNormals=B.morphNormals,q.morphColors=B.morphColors,q.morphTargetsCount=B.morphTargetsCount,q.numClippingPlanes=B.numClippingPlanes,q.numIntersection=B.numClipIntersection,q.vertexAlphas=B.vertexAlphas,q.vertexTangents=B.vertexTangents,q.toneMapping=B.toneMapping}function xd(A,B,q,I,j){B.isScene!==!0&&(B=Me),Ct.resetTextureUnits();const ut=B.fog,xt=I.isMeshStandardMaterial?B.environment:null,Et=b===null?v.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Rn,At=(I.isMeshStandardMaterial?ce:Gt).get(I.envMap||xt),Ft=I.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Rt=!!q.attributes.tangent&&(!!I.normalMap||I.anisotropy>0),Lt=!!q.morphAttributes.position,Qt=!!q.morphAttributes.normal,ie=!!q.morphAttributes.color,un=I.toneMapped?v.toneMapping:Wn,Pn=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ae=Pn!==void 0?Pn.length:0,zt=Nt.get(I),Aa=p.state.lights;if(it===!0&&(at===!0||A!==x)){const He=A===x&&I.id===P;J.setState(I,A,He)}let _e=!1;I.version===zt.__version?(zt.needsLights&&zt.lightsStateVersion!==Aa.state.version||zt.outputColorSpace!==Et||j.isInstancedMesh&&zt.instancing===!1||!j.isInstancedMesh&&zt.instancing===!0||j.isSkinnedMesh&&zt.skinning===!1||!j.isSkinnedMesh&&zt.skinning===!0||zt.envMap!==At||I.fog===!0&&zt.fog!==ut||zt.numClippingPlanes!==void 0&&(zt.numClippingPlanes!==J.numPlanes||zt.numIntersection!==J.numIntersection)||zt.vertexAlphas!==Ft||zt.vertexTangents!==Rt||zt.morphTargets!==Lt||zt.morphNormals!==Qt||zt.morphColors!==ie||zt.toneMapping!==un||bt.isWebGL2===!0&&zt.morphTargetsCount!==ae)&&(_e=!0):(_e=!0,zt.__version=I.version);let pi=zt.currentProgram;_e===!0&&(pi=Ts(I,B,j));let kl=!1,Fr=!1,wa=!1;const De=pi.getUniforms(),mi=zt.uniforms;if(yt.useProgram(pi.program)&&(kl=!0,Fr=!0,wa=!0),I.id!==P&&(P=I.id,Fr=!0),kl||x!==A){if(De.setValue(F,"projectionMatrix",A.projectionMatrix),bt.logarithmicDepthBuffer&&De.setValue(F,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),x!==A&&(x=A,Fr=!0,wa=!0),I.isShaderMaterial||I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshStandardMaterial||I.envMap){const He=De.map.cameraPosition;He!==void 0&&He.setValue(F,kt.setFromMatrixPosition(A.matrixWorld))}(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial)&&De.setValue(F,"isOrthographic",A.isOrthographicCamera===!0),(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial||I.isShadowMaterial||j.isSkinnedMesh)&&De.setValue(F,"viewMatrix",A.matrixWorldInverse)}if(j.isSkinnedMesh){De.setOptional(F,j,"bindMatrix"),De.setOptional(F,j,"bindMatrixInverse");const He=j.skeleton;He&&(bt.floatVertexTextures?(He.boneTexture===null&&He.computeBoneTexture(),De.setValue(F,"boneTexture",He.boneTexture,Ct),De.setValue(F,"boneTextureSize",He.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ra=q.morphAttributes;if((Ra.position!==void 0||Ra.normal!==void 0||Ra.color!==void 0&&bt.isWebGL2===!0)&&dt.update(j,q,pi),(Fr||zt.receiveShadow!==j.receiveShadow)&&(zt.receiveShadow=j.receiveShadow,De.setValue(F,"receiveShadow",j.receiveShadow)),I.isMeshGouraudMaterial&&I.envMap!==null&&(mi.envMap.value=At,mi.flipEnvMap.value=At.isCubeTexture&&At.isRenderTargetTexture===!1?-1:1),Fr&&(De.setValue(F,"toneMappingExposure",v.toneMappingExposure),zt.needsLights&&Md(mi,wa),ut&&I.fog===!0&&nt.refreshFogUniforms(mi,ut),nt.refreshMaterialUniforms(mi,I,k,K,gt),Qs.upload(F,zt.uniformsList,mi,Ct)),I.isShaderMaterial&&I.uniformsNeedUpdate===!0&&(Qs.upload(F,zt.uniformsList,mi,Ct),I.uniformsNeedUpdate=!1),I.isSpriteMaterial&&De.setValue(F,"center",j.center),De.setValue(F,"modelViewMatrix",j.modelViewMatrix),De.setValue(F,"normalMatrix",j.normalMatrix),De.setValue(F,"modelMatrix",j.matrixWorld),I.isShaderMaterial||I.isRawShaderMaterial){const He=I.uniformsGroups;for(let Ca=0,Sd=He.length;Ca<Sd;Ca++)if(bt.isWebGL2){const Vl=He[Ca];St.update(Vl,pi),St.bind(Vl,pi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return pi}function Md(A,B){A.ambientLightColor.needsUpdate=B,A.lightProbe.needsUpdate=B,A.directionalLights.needsUpdate=B,A.directionalLightShadows.needsUpdate=B,A.pointLights.needsUpdate=B,A.pointLightShadows.needsUpdate=B,A.spotLights.needsUpdate=B,A.spotLightShadows.needsUpdate=B,A.rectAreaLights.needsUpdate=B,A.hemisphereLights.needsUpdate=B}function yd(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(A,B,q){Nt.get(A.texture).__webglTexture=B,Nt.get(A.depthTexture).__webglTexture=q;const I=Nt.get(A);I.__hasExternalTextures=!0,I.__hasExternalTextures&&(I.__autoAllocateDepthBuffer=q===void 0,I.__autoAllocateDepthBuffer||vt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),I.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,B){const q=Nt.get(A);q.__webglFramebuffer=B,q.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(A,B=0,q=0){b=A,S=B,w=q;let I=!0,j=null,ut=!1,xt=!1;if(A){const At=Nt.get(A);At.__useDefaultFramebuffer!==void 0?(yt.bindFramebuffer(F.FRAMEBUFFER,null),I=!1):At.__webglFramebuffer===void 0?Ct.setupRenderTarget(A):At.__hasExternalTextures&&Ct.rebindTextures(A,Nt.get(A.texture).__webglTexture,Nt.get(A.depthTexture).__webglTexture);const Ft=A.texture;(Ft.isData3DTexture||Ft.isDataArrayTexture||Ft.isCompressedArrayTexture)&&(xt=!0);const Rt=Nt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(j=Rt[B],ut=!0):bt.isWebGL2&&A.samples>0&&Ct.useMultisampledRTT(A)===!1?j=Nt.get(A).__webglMultisampledFramebuffer:j=Rt,T.copy(A.viewport),V.copy(A.scissor),$=A.scissorTest}else T.copy(Z).multiplyScalar(k).floor(),V.copy(z).multiplyScalar(k).floor(),$=G;if(yt.bindFramebuffer(F.FRAMEBUFFER,j)&&bt.drawBuffers&&I&&yt.drawBuffers(A,j),yt.viewport(T),yt.scissor(V),yt.setScissorTest($),ut){const At=Nt.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+B,At.__webglTexture,q)}else if(xt){const At=Nt.get(A.texture),Ft=B||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,At.__webglTexture,q||0,Ft)}P=-1},this.readRenderTargetPixels=function(A,B,q,I,j,ut,xt){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=Nt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&xt!==void 0&&(Et=Et[xt]),Et){yt.bindFramebuffer(F.FRAMEBUFFER,Et);try{const At=A.texture,Ft=At.format,Rt=At.type;if(Ft!==sn&&ft.convert(Ft)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Lt=Rt===Ar&&(vt.has("EXT_color_buffer_half_float")||bt.isWebGL2&&vt.has("EXT_color_buffer_float"));if(Rt!==oi&&ft.convert(Rt)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Rt===ni&&(bt.isWebGL2||vt.has("OES_texture_float")||vt.has("WEBGL_color_buffer_float")))&&!Lt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=A.width-I&&q>=0&&q<=A.height-j&&F.readPixels(B,q,I,j,ft.convert(Ft),ft.convert(Rt),ut)}finally{const At=b!==null?Nt.get(b).__webglFramebuffer:null;yt.bindFramebuffer(F.FRAMEBUFFER,At)}}},this.copyFramebufferToTexture=function(A,B,q=0){const I=Math.pow(2,-q),j=Math.floor(B.image.width*I),ut=Math.floor(B.image.height*I);Ct.setTexture2D(B,0),F.copyTexSubImage2D(F.TEXTURE_2D,q,0,0,A.x,A.y,j,ut),yt.unbindTexture()},this.copyTextureToTexture=function(A,B,q,I=0){const j=B.image.width,ut=B.image.height,xt=ft.convert(q.format),Et=ft.convert(q.type);Ct.setTexture2D(q,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,q.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,q.unpackAlignment),B.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,I,A.x,A.y,j,ut,xt,Et,B.image.data):B.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,I,A.x,A.y,B.mipmaps[0].width,B.mipmaps[0].height,xt,B.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,I,A.x,A.y,xt,Et,B.image),I===0&&q.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),yt.unbindTexture()},this.copyTextureToTexture3D=function(A,B,q,I,j=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ut=A.max.x-A.min.x+1,xt=A.max.y-A.min.y+1,Et=A.max.z-A.min.z+1,At=ft.convert(I.format),Ft=ft.convert(I.type);let Rt;if(I.isData3DTexture)Ct.setTexture3D(I,0),Rt=F.TEXTURE_3D;else if(I.isDataArrayTexture)Ct.setTexture2DArray(I,0),Rt=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,I.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,I.unpackAlignment);const Lt=F.getParameter(F.UNPACK_ROW_LENGTH),Qt=F.getParameter(F.UNPACK_IMAGE_HEIGHT),ie=F.getParameter(F.UNPACK_SKIP_PIXELS),un=F.getParameter(F.UNPACK_SKIP_ROWS),Pn=F.getParameter(F.UNPACK_SKIP_IMAGES),ae=q.isCompressedTexture?q.mipmaps[0]:q.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,ae.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ae.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,A.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,A.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,A.min.z),q.isDataTexture||q.isData3DTexture?F.texSubImage3D(Rt,j,B.x,B.y,B.z,ut,xt,Et,At,Ft,ae.data):q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),F.compressedTexSubImage3D(Rt,j,B.x,B.y,B.z,ut,xt,Et,At,ae.data)):F.texSubImage3D(Rt,j,B.x,B.y,B.z,ut,xt,Et,At,Ft,ae),F.pixelStorei(F.UNPACK_ROW_LENGTH,Lt),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Qt),F.pixelStorei(F.UNPACK_SKIP_PIXELS,ie),F.pixelStorei(F.UNPACK_SKIP_ROWS,un),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Pn),j===0&&I.generateMipmaps&&F.generateMipmap(Rt),yt.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?Ct.setTextureCube(A,0):A.isData3DTexture?Ct.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Ct.setTexture2DArray(A,0):Ct.setTexture2D(A,0),yt.unbindTexture()},this.resetState=function(){S=0,w=0,b=null,yt.reset(),ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(t){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!t}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Pt?Di:$h}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Di?Pt:Rn}}class z0 extends uu{}z0.prototype.isWebGL1Renderer=!0;class k0 extends se{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class du{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Uo,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Xn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ue=new D;class Cr{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix4(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyNormalMatrix(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.transformDirection(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}setX(t,e){return this.normalized&&(e=Xt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Xt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Xt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Xt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Hn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Hn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Hn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Hn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Xt(e,this.array),n=Xt(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Xt(e,this.array),n=Xt(n,this.array),i=Xt(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Xt(e,this.array),n=Xt(n,this.array),i=Xt(i,this.array),s=Xt(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new vn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Cr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class fu extends Vi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Tt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let or;const Hr=new D,lr=new D,cr=new D,hr=new pt,Gr=new pt,pu=new ne,Ys=new D,Wr=new D,qs=new D,nh=new pt,ro=new pt,ih=new pt;class V0 extends se{constructor(t){if(super(),this.isSprite=!0,this.type="Sprite",or===void 0){or=new Mn;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new du(e,5);or.setIndex([0,1,2,0,2,3]),or.setAttribute("position",new Cr(n,3,0,!1)),or.setAttribute("uv",new Cr(n,2,3,!1))}this.geometry=or,this.material=t!==void 0?t:new fu,this.center=new pt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),lr.setFromMatrixScale(this.matrixWorld),pu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),cr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&lr.multiplyScalar(-cr.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const a=this.center;$s(Ys.set(-.5,-.5,0),cr,a,lr,i,s),$s(Wr.set(.5,-.5,0),cr,a,lr,i,s),$s(qs.set(.5,.5,0),cr,a,lr,i,s),nh.set(0,0),ro.set(1,0),ih.set(1,1);let o=t.ray.intersectTriangle(Ys,Wr,qs,!1,Hr);if(o===null&&($s(Wr.set(-.5,.5,0),cr,a,lr,i,s),ro.set(0,1),o=t.ray.intersectTriangle(Ys,qs,Wr,!1,Hr),o===null))return;const l=t.ray.origin.distanceTo(Hr);l<t.near||l>t.far||e.push({distance:l,point:Hr.clone(),uv:rn.getInterpolation(Hr,Ys,Wr,qs,nh,ro,ih,new pt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function $s(r,t,e,n,i,s){hr.subVectors(r,e).addScalar(.5).multiply(n),i!==void 0?(Gr.x=s*hr.x-i*hr.y,Gr.y=i*hr.x+s*hr.y):Gr.copy(hr),r.copy(t),r.x+=Gr.x,r.y+=Gr.y,r.applyMatrix4(pu)}class rh extends he{constructor(t,e){super({width:t,height:e}),this.isFramebufferTexture=!0,this.magFilter=Se,this.minFilter=Se,this.generateMipmaps=!1,this.needsUpdate=!0}}class dl extends Mn{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const s=[],a=[];o(i),c(n),h(),this.setAttribute("position",new cn(s,3)),this.setAttribute("normal",new cn(s.slice(),3)),this.setAttribute("uv",new cn(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(M){const v=new D,y=new D,S=new D;for(let w=0;w<e.length;w+=3)m(e[w+0],v),m(e[w+1],y),m(e[w+2],S),l(v,y,S,M)}function l(M,v,y,S){const w=S+1,b=[];for(let P=0;P<=w;P++){b[P]=[];const x=M.clone().lerp(y,P/w),T=v.clone().lerp(y,P/w),V=w-P;for(let $=0;$<=V;$++)$===0&&P===w?b[P][$]=x:b[P][$]=x.clone().lerp(T,$/V)}for(let P=0;P<w;P++)for(let x=0;x<2*(w-P)-1;x++){const T=Math.floor(x/2);x%2===0?(u(b[P][T+1]),u(b[P+1][T]),u(b[P][T])):(u(b[P][T+1]),u(b[P+1][T+1]),u(b[P+1][T]))}}function c(M){const v=new D;for(let y=0;y<s.length;y+=3)v.x=s[y+0],v.y=s[y+1],v.z=s[y+2],v.normalize().multiplyScalar(M),s[y+0]=v.x,s[y+1]=v.y,s[y+2]=v.z}function h(){const M=new D;for(let v=0;v<s.length;v+=3){M.x=s[v+0],M.y=s[v+1],M.z=s[v+2];const y=p(M)/2/Math.PI+.5,S=f(M)/Math.PI+.5;a.push(y,1-S)}g(),d()}function d(){for(let M=0;M<a.length;M+=6){const v=a[M+0],y=a[M+2],S=a[M+4],w=Math.max(v,y,S),b=Math.min(v,y,S);w>.9&&b<.1&&(v<.2&&(a[M+0]+=1),y<.2&&(a[M+2]+=1),S<.2&&(a[M+4]+=1))}}function u(M){s.push(M.x,M.y,M.z)}function m(M,v){const y=M*3;v.x=t[y+0],v.y=t[y+1],v.z=t[y+2]}function g(){const M=new D,v=new D,y=new D,S=new D,w=new pt,b=new pt,P=new pt;for(let x=0,T=0;x<s.length;x+=9,T+=6){M.set(s[x+0],s[x+1],s[x+2]),v.set(s[x+3],s[x+4],s[x+5]),y.set(s[x+6],s[x+7],s[x+8]),w.set(a[T+0],a[T+1]),b.set(a[T+2],a[T+3]),P.set(a[T+4],a[T+5]),S.copy(M).add(v).add(y).divideScalar(3);const V=p(S);_(w,T+0,M,V),_(b,T+2,v,V),_(P,T+4,y,V)}}function _(M,v,y,S){S<0&&M.x===1&&(a[v]=M.x-1),y.x===0&&y.z===0&&(a[v]=S/2/Math.PI+.5)}function p(M){return Math.atan2(M.z,-M.x)}function f(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new dl(t.vertices,t.indices,t.radius,t.details)}}class ii extends dl{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ii(t.radius,t.detail)}}class so extends Ne{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class H0 extends Vi{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Tt(16777215),this.specular=new Tt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nl,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=va,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ao extends Vi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nl,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=va,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const sh={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};let mu=class{constructor(t,e,n){const i=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){const m=c[d],g=c[d+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}};const G0=new mu;class fl{constructor(t){this.manager=t!==void 0?t:G0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}fl.DEFAULT_MATERIAL_NAME="__DEFAULT";class W0 extends fl{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,a=sh.get(t);if(a!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0),a;const o=hs("img");function l(){h(),sh.add(t,this),e&&e(this),s.manager.itemEnd(t)}function c(d){h(),i&&i(d),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(t),o.src=t,o}}class X0 extends fl{constructor(t){super(t)}load(t,e,n,i){const s=new ol;s.colorSpace=Pt;const a=new W0(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function l(c){a.load(t[c],function(h){s.images[c]=h,o++,o===6&&(s.needsUpdate=!0,e&&e(s))},void 0,i)}for(let c=0;c<t.length;++c)l(c);return s}}class pl extends se{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Tt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const oo=new ne,ah=new D,oh=new D;class _u{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pt(512,512),this.map=null,this.mapPass=null,this.matrix=new ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ll,this._frameExtents=new pt(1,1),this._viewportCount=1,this._viewports=[new qt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;ah.setFromMatrixPosition(t.matrixWorld),e.position.copy(ah),oh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(oh),e.updateMatrixWorld(),oo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(oo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(oo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const lh=new ne,Xr=new D,lo=new D;class Y0 extends _u{constructor(){super(new $e(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new pt(4,2),this._viewportCount=6,this._viewports=[new qt(2,1,1,1),new qt(0,1,1,1),new qt(3,1,1,1),new qt(1,1,1,1),new qt(3,0,1,1),new qt(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Xr.setFromMatrixPosition(t.matrixWorld),n.position.copy(Xr),lo.copy(n.position),lo.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(lo),n.updateMatrixWorld(),i.makeTranslation(-Xr.x,-Xr.y,-Xr.z),lh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lh)}}class q0 extends pl{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Y0}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class $0 extends _u{constructor(){super(new hl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class j0 extends pl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(se.DEFAULT_UP),this.updateMatrix(),this.target=new se,this.shadow=new $0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class K0 extends pl{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Z0{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ch(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=ch();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function ch(){return(typeof performance>"u"?Date:performance).now()}class hh{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Ae(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const uh=new pt;class J0{constructor(t=new pt(1/0,1/0),e=new pt(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=uh.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y)}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,uh).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:tl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=tl);const dh={type:"change"},co={type:"start"},fh={type:"end"};class Q0 extends ki{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Gi.ROTATE,MIDDLE:Gi.DOLLY,RIGHT:Gi.PAN},this.touches={ONE:Wi.ROTATE,TWO:Wi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(C){C.addEventListener("keydown",Gt),this._domElementKeyEvents=C},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Gt),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(dh),n.update(),s=i.NONE},this.update=function(){const C=new D,J=new Bi().setFromUnitVectors(t.up,new D(0,1,0)),tt=J.clone().invert(),H=new D,dt=new Bi,_t=new D,mt=2*Math.PI;return function(){const ht=n.object.position;C.copy(ht).sub(n.target),C.applyQuaternion(J),o.setFromVector3(C),n.autoRotate&&s===i.NONE&&x(b()),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let St=n.minAzimuthAngle,Ot=n.maxAzimuthAngle;return isFinite(St)&&isFinite(Ot)&&(St<-Math.PI?St+=mt:St>Math.PI&&(St-=mt),Ot<-Math.PI?Ot+=mt:Ot>Math.PI&&(Ot-=mt),St<=Ot?o.theta=Math.max(St,Math.min(Ot,o.theta)):o.theta=o.theta>(St+Ot)/2?Math.max(St,o.theta):Math.min(Ot,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=c,o.radius=Math.max(n.minDistance,Math.min(n.maxDistance,o.radius)),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),C.setFromSpherical(o),C.applyQuaternion(tt),ht.copy(n.target).add(C),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0)),c=1,d||H.distanceToSquared(n.object.position)>a||8*(1-dt.dot(n.object.quaternion))>a||_t.distanceToSquared(n.target)>0?(n.dispatchEvent(dh),H.copy(n.object.position),dt.copy(n.object.quaternion),_t.copy(n.target),d=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",R),n.domElement.removeEventListener("pointerdown",vt),n.domElement.removeEventListener("pointercancel",yt),n.domElement.removeEventListener("wheel",Ct),n.domElement.removeEventListener("pointermove",bt),n.domElement.removeEventListener("pointerup",yt),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Gt),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const a=1e-6,o=new hh,l=new hh;let c=1;const h=new D;let d=!1;const u=new pt,m=new pt,g=new pt,_=new pt,p=new pt,f=new pt,M=new pt,v=new pt,y=new pt,S=[],w={};function b(){return 2*Math.PI/60/60*n.autoRotateSpeed}function P(){return Math.pow(.95,n.zoomSpeed)}function x(C){l.theta-=C}function T(C){l.phi-=C}const V=function(){const C=new D;return function(tt,H){C.setFromMatrixColumn(H,0),C.multiplyScalar(-tt),h.add(C)}}(),$=function(){const C=new D;return function(tt,H){n.screenSpacePanning===!0?C.setFromMatrixColumn(H,1):(C.setFromMatrixColumn(H,0),C.crossVectors(n.object.up,C)),C.multiplyScalar(tt),h.add(C)}}(),U=function(){const C=new D;return function(tt,H){const dt=n.domElement;if(n.object.isPerspectiveCamera){const _t=n.object.position;C.copy(_t).sub(n.target);let mt=C.length();mt*=Math.tan(n.object.fov/2*Math.PI/180),V(2*tt*mt/dt.clientHeight,n.object.matrix),$(2*H*mt/dt.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(V(tt*(n.object.right-n.object.left)/n.object.zoom/dt.clientWidth,n.object.matrix),$(H*(n.object.top-n.object.bottom)/n.object.zoom/dt.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function N(C){n.object.isPerspectiveCamera?c/=C:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*C)),n.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function O(C){n.object.isPerspectiveCamera?c*=C:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/C)),n.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function K(C){u.set(C.clientX,C.clientY)}function k(C){M.set(C.clientX,C.clientY)}function X(C){_.set(C.clientX,C.clientY)}function Q(C){m.set(C.clientX,C.clientY),g.subVectors(m,u).multiplyScalar(n.rotateSpeed);const J=n.domElement;x(2*Math.PI*g.x/J.clientHeight),T(2*Math.PI*g.y/J.clientHeight),u.copy(m),n.update()}function Z(C){v.set(C.clientX,C.clientY),y.subVectors(v,M),y.y>0?N(P()):y.y<0&&O(P()),M.copy(v),n.update()}function z(C){p.set(C.clientX,C.clientY),f.subVectors(p,_).multiplyScalar(n.panSpeed),U(f.x,f.y),_.copy(p),n.update()}function G(C){C.deltaY<0?O(P()):C.deltaY>0&&N(P()),n.update()}function ot(C){let J=!1;switch(C.code){case n.keys.UP:C.ctrlKey||C.metaKey||C.shiftKey?T(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):U(0,n.keyPanSpeed),J=!0;break;case n.keys.BOTTOM:C.ctrlKey||C.metaKey||C.shiftKey?T(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):U(0,-n.keyPanSpeed),J=!0;break;case n.keys.LEFT:C.ctrlKey||C.metaKey||C.shiftKey?x(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):U(n.keyPanSpeed,0),J=!0;break;case n.keys.RIGHT:C.ctrlKey||C.metaKey||C.shiftKey?x(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):U(-n.keyPanSpeed,0),J=!0;break}J&&(C.preventDefault(),n.update())}function it(){if(S.length===1)u.set(S[0].pageX,S[0].pageY);else{const C=.5*(S[0].pageX+S[1].pageX),J=.5*(S[0].pageY+S[1].pageY);u.set(C,J)}}function at(){if(S.length===1)_.set(S[0].pageX,S[0].pageY);else{const C=.5*(S[0].pageX+S[1].pageX),J=.5*(S[0].pageY+S[1].pageY);_.set(C,J)}}function gt(){const C=S[0].pageX-S[1].pageX,J=S[0].pageY-S[1].pageY,tt=Math.sqrt(C*C+J*J);M.set(0,tt)}function wt(){n.enableZoom&&gt(),n.enablePan&&at()}function Mt(){n.enableZoom&&gt(),n.enableRotate&&it()}function kt(C){if(S.length==1)m.set(C.pageX,C.pageY);else{const tt=et(C),H=.5*(C.pageX+tt.x),dt=.5*(C.pageY+tt.y);m.set(H,dt)}g.subVectors(m,u).multiplyScalar(n.rotateSpeed);const J=n.domElement;x(2*Math.PI*g.x/J.clientHeight),T(2*Math.PI*g.y/J.clientHeight),u.copy(m)}function Me(C){if(S.length===1)p.set(C.pageX,C.pageY);else{const J=et(C),tt=.5*(C.pageX+J.x),H=.5*(C.pageY+J.y);p.set(tt,H)}f.subVectors(p,_).multiplyScalar(n.panSpeed),U(f.x,f.y),_.copy(p)}function Ut(C){const J=et(C),tt=C.pageX-J.x,H=C.pageY-J.y,dt=Math.sqrt(tt*tt+H*H);v.set(0,dt),y.set(0,Math.pow(v.y/M.y,n.zoomSpeed)),N(y.y),M.copy(v)}function F(C){n.enableZoom&&Ut(C),n.enablePan&&Me(C)}function fe(C){n.enableZoom&&Ut(C),n.enableRotate&&kt(C)}function vt(C){n.enabled!==!1&&(S.length===0&&(n.domElement.setPointerCapture(C.pointerId),n.domElement.addEventListener("pointermove",bt),n.domElement.addEventListener("pointerup",yt)),E(C),C.pointerType==="touch"?ce(C):$t(C))}function bt(C){n.enabled!==!1&&(C.pointerType==="touch"?pe(C):Nt(C))}function yt(C){Y(C),S.length===0&&(n.domElement.releasePointerCapture(C.pointerId),n.domElement.removeEventListener("pointermove",bt),n.domElement.removeEventListener("pointerup",yt)),n.dispatchEvent(fh),s=i.NONE}function $t(C){let J;switch(C.button){case 0:J=n.mouseButtons.LEFT;break;case 1:J=n.mouseButtons.MIDDLE;break;case 2:J=n.mouseButtons.RIGHT;break;default:J=-1}switch(J){case Gi.DOLLY:if(n.enableZoom===!1)return;k(C),s=i.DOLLY;break;case Gi.ROTATE:if(C.ctrlKey||C.metaKey||C.shiftKey){if(n.enablePan===!1)return;X(C),s=i.PAN}else{if(n.enableRotate===!1)return;K(C),s=i.ROTATE}break;case Gi.PAN:if(C.ctrlKey||C.metaKey||C.shiftKey){if(n.enableRotate===!1)return;K(C),s=i.ROTATE}else{if(n.enablePan===!1)return;X(C),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(co)}function Nt(C){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;Q(C);break;case i.DOLLY:if(n.enableZoom===!1)return;Z(C);break;case i.PAN:if(n.enablePan===!1)return;z(C);break}}function Ct(C){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(C.preventDefault(),n.dispatchEvent(co),G(C),n.dispatchEvent(fh))}function Gt(C){n.enabled===!1||n.enablePan===!1||ot(C)}function ce(C){switch(nt(C),S.length){case 1:switch(n.touches.ONE){case Wi.ROTATE:if(n.enableRotate===!1)return;it(),s=i.TOUCH_ROTATE;break;case Wi.PAN:if(n.enablePan===!1)return;at(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case Wi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;wt(),s=i.TOUCH_DOLLY_PAN;break;case Wi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Mt(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(co)}function pe(C){switch(nt(C),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;kt(C),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;Me(C),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;F(C),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;fe(C),n.update();break;default:s=i.NONE}}function R(C){n.enabled!==!1&&C.preventDefault()}function E(C){S.push(C)}function Y(C){delete w[C.pointerId];for(let J=0;J<S.length;J++)if(S[J].pointerId==C.pointerId){S.splice(J,1);return}}function nt(C){let J=w[C.pointerId];J===void 0&&(J=new pt,w[C.pointerId]=J),J.set(C.pageX,C.pageY)}function et(C){const J=C.pointerId===S[0].pointerId?S[1]:S[0];return w[J.pointerId]}n.domElement.addEventListener("contextmenu",R),n.domElement.addEventListener("pointerdown",vt),n.domElement.addEventListener("pointercancel",yt),n.domElement.addEventListener("wheel",Ct,{passive:!1}),this.update()}}class us extends ve{constructor(){super(us.Geometry,new sl({opacity:0,transparent:!0})),this.isLensflare=!0,this.type="Lensflare",this.frustumCulled=!1,this.renderOrder=1/0;const t=new D,e=new D,n=new rh(16,16),i=new rh(16,16),s=us.Geometry,a=new so({uniforms:{scale:{value:null},screenPosition:{value:null}},vertexShader:`

				precision highp float;

				uniform vec3 screenPosition;
				uniform vec2 scale;

				attribute vec3 position;

				void main() {

					gl_Position = vec4( position.xy * scale + screenPosition.xy, screenPosition.z, 1.0 );

				}`,fragmentShader:`

				precision highp float;

				void main() {

					gl_FragColor = vec4( 1.0, 0.0, 1.0, 1.0 );

				}`,depthTest:!0,depthWrite:!1,transparent:!1}),o=new so({uniforms:{map:{value:n},scale:{value:null},screenPosition:{value:null}},vertexShader:`

				precision highp float;

				uniform vec3 screenPosition;
				uniform vec2 scale;

				attribute vec3 position;
				attribute vec2 uv;

				varying vec2 vUV;

				void main() {

					vUV = uv;

					gl_Position = vec4( position.xy * scale + screenPosition.xy, screenPosition.z, 1.0 );

				}`,fragmentShader:`

				precision highp float;

				uniform sampler2D map;

				varying vec2 vUV;

				void main() {

					gl_FragColor = texture2D( map, vUV );

				}`,depthTest:!1,depthWrite:!1,transparent:!1}),l=new ve(s,a),c=[],h=Ye.Shader,d=new so({uniforms:{map:{value:null},occlusionMap:{value:i},color:{value:new Tt(16777215)},scale:{value:new pt},screenPosition:{value:new D}},vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:os,transparent:!0,depthWrite:!1}),u=new ve(s,d);this.addElement=function(f){c.push(f)};const m=new pt,g=new pt,_=new J0,p=new qt;this.onBeforeRender=function(f,M,v){f.getCurrentViewport(p);const y=p.w/p.z,S=p.z/2,w=p.w/2;let b=16/p.w;if(m.set(b*y,b),_.min.set(p.x,p.y),_.max.set(p.x+(p.z-16),p.y+(p.w-16)),e.setFromMatrixPosition(this.matrixWorld),e.applyMatrix4(v.matrixWorldInverse),!(e.z>0)&&(t.copy(e).applyMatrix4(v.projectionMatrix),g.x=p.x+t.x*S+S-8,g.y=p.y+t.y*w+w-8,_.containsPoint(g))){f.copyFramebufferToTexture(g,n);let P=a.uniforms;P.scale.value=m,P.screenPosition.value=t,f.renderBufferDirect(v,null,s,a,l,null),f.copyFramebufferToTexture(g,i),P=o.uniforms,P.scale.value=m,P.screenPosition.value=t,f.renderBufferDirect(v,null,s,o,l,null);const x=-t.x*2,T=-t.y*2;for(let V=0,$=c.length;V<$;V++){const U=c[V],N=d.uniforms;N.color.value.copy(U.color),N.map.value=U.texture,N.screenPosition.value.x=t.x+x*U.distance,N.screenPosition.value.y=t.y+T*U.distance,b=U.size/p.w;const O=p.w/p.z;N.scale.value.set(b*O,b),d.uniformsNeedUpdate=!0,f.renderBufferDirect(v,null,s,d,u,null)}}},this.dispose=function(){a.dispose(),o.dispose(),d.dispose(),n.dispose(),i.dispose();for(let f=0,M=c.length;f<M;f++)c[f].texture.dispose()}}}class Ye{constructor(t,e=1,n=0,i=new Tt(16777215)){this.texture=t,this.size=e,this.distance=n,this.color=i}}Ye.Shader={uniforms:{map:{value:null},occlusionMap:{value:null},color:{value:null},scale:{value:null},screenPosition:{value:null}},vertexShader:`

		precision highp float;

		uniform vec3 screenPosition;
		uniform vec2 scale;

		uniform sampler2D occlusionMap;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUV;
		varying float vVisibility;

		void main() {

			vUV = uv;

			vec2 pos = position.xy;

			vec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );
			visibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );
			visibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );
			visibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );
			visibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );
			visibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );
			visibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );
			visibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );
			visibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );

			vVisibility =        visibility.r / 9.0;
			vVisibility *= 1.0 - visibility.g / 9.0;
			vVisibility *=       visibility.b / 9.0;

			gl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D map;
		uniform vec3 color;

		varying vec2 vUV;
		varying float vVisibility;

		void main() {

			vec4 texture = texture2D( map, vUV );
			texture.a *= vVisibility;
			gl_FragColor = texture;
			gl_FragColor.rgb *= color;

		}`};us.Geometry=function(){const r=new Mn,t=new Float32Array([-1,-1,0,0,0,1,-1,0,1,0,1,1,0,1,1,-1,1,0,0,1]),e=new du(t,5);return r.setIndex([0,1,2,0,2,3]),r.setAttribute("position",new Cr(e,3,0,!1)),r.setAttribute("uv",new Cr(e,2,3,!1)),r}();/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.17.0
 * @author George Michael Brower
 * @license MIT
 */class An{constructor(t,e,n,i,s="div"){this.parent=t,this.object=e,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(i),this.$name=document.createElement("div"),this.$name.classList.add("name"),An.nextNameID=An.nextNameID||0,this.$name.id="lil-gui-name-"+ ++An.nextNameID,this.$widget=document.createElement(s),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(t){return this._name=t,this.$name.innerHTML=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled||(this._disabled=t,this.domElement.classList.toggle("disabled",t),this.$disable.toggleAttribute("disabled",t)),this}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const e=this.parent.add(this.object,this.property,t);return e.name(this._name),this.destroy(),e}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.object[this.property]=t,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class tv extends An{constructor(t,e,n){super(t,e,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Oo(r){let t,e;return(t=r.match(/(#|0x)?([a-f0-9]{6})/i))?e=t[2]:(t=r.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?e=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=r.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(e=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),!!e&&"#"+e}const ev={isPrimitive:!0,match:r=>typeof r=="string",fromHexString:Oo,toHexString:Oo},ds={isPrimitive:!0,match:r=>typeof r=="number",fromHexString:r=>parseInt(r.substring(1),16),toHexString:r=>"#"+r.toString(16).padStart(6,0)},nv={isPrimitive:!1,match:Array.isArray,fromHexString(r,t,e=1){const n=ds.fromHexString(r);t[0]=(n>>16&255)/255*e,t[1]=(n>>8&255)/255*e,t[2]=(255&n)/255*e},toHexString:([r,t,e],n=1)=>ds.toHexString(r*(n=255/n)<<16^t*n<<8^e*n<<0)},iv={isPrimitive:!1,match:r=>Object(r)===r,fromHexString(r,t,e=1){const n=ds.fromHexString(r);t.r=(n>>16&255)/255*e,t.g=(n>>8&255)/255*e,t.b=(255&n)/255*e},toHexString:({r,g:t,b:e},n=1)=>ds.toHexString(r*(n=255/n)<<16^t*n<<8^e*n<<0)},rv=[ev,ds,nv,iv];class sv extends An{constructor(t,e,n,i){var s;super(t,e,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=(s=this.initialValue,rv.find(a=>a.match(s))),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const a=Oo(this.$text.value);a&&this._setValueFromHexString(a)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const e=this._format.fromHexString(t);this.setValue(e)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class ho extends An{constructor(t,e,n){super(t,e,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",i=>{i.preventDefault(),this.getValue().call(this.object)}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class av extends An{constructor(t,e,n,i,s,a){super(t,e,n,"number"),this._initInput(),this.min(i),this.max(s);const o=a!==void 0;this.step(o?a:this._getImplicitStep(),o),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,e=!0){return this._step=t,this._stepExplicit=e,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let e=(t-this._min)/(this._max-this._min);e=Math.max(0,Math.min(e,1)),this.$fill.style.width=100*e+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=h=>{const d=parseFloat(this.$input.value);isNaN(d)||(this._snapClampSetValue(d+h),this.$input.value=this.getValue())};let e,n,i,s,a,o=!1;const l=h=>{if(o){const d=h.clientX-e,u=h.clientY-n;Math.abs(u)>5?(h.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(d)>5&&c()}if(!o){const d=h.clientY-i;a-=d*this._step*this._arrowKeyMultiplier(h),s+a>this._max?a=this._max-s:s+a<this._min&&(a=this._min-s),this._snapClampSetValue(s+a)}i=h.clientY},c=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",l),window.removeEventListener("mouseup",c)};this.$input.addEventListener("input",()=>{let h=parseFloat(this.$input.value);isNaN(h)||(this._stepExplicit&&(h=this._snap(h)),this.setValue(this._clamp(h)))}),this.$input.addEventListener("keydown",h=>{h.code==="Enter"&&this.$input.blur(),h.code==="ArrowUp"&&(h.preventDefault(),t(this._step*this._arrowKeyMultiplier(h))),h.code==="ArrowDown"&&(h.preventDefault(),t(this._step*this._arrowKeyMultiplier(h)*-1))}),this.$input.addEventListener("wheel",h=>{this._inputFocused&&(h.preventDefault(),t(this._step*this._normalizeMouseWheel(h)))},{passive:!1}),this.$input.addEventListener("mousedown",h=>{e=h.clientX,n=i=h.clientY,o=!0,s=this.getValue(),a=0,window.addEventListener("mousemove",l),window.addEventListener("mouseup",c)}),this.$input.addEventListener("focus",()=>{this._inputFocused=!0}),this.$input.addEventListener("blur",()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()})}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const t=u=>{const m=this.$slider.getBoundingClientRect();let g=(_=u,p=m.left,f=m.right,M=this._min,v=this._max,(_-p)/(f-p)*(v-M)+M);var _,p,f,M,v;this._snapClampSetValue(g)},e=u=>{t(u.clientX)},n=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",e),window.removeEventListener("mouseup",n)};let i,s,a=!1;const o=u=>{u.preventDefault(),this._setDraggingStyle(!0),t(u.touches[0].clientX),a=!1},l=u=>{if(a){const m=u.touches[0].clientX-i,g=u.touches[0].clientY-s;Math.abs(m)>Math.abs(g)?o(u):(window.removeEventListener("touchmove",l),window.removeEventListener("touchend",c))}else u.preventDefault(),t(u.touches[0].clientX)},c=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",l),window.removeEventListener("touchend",c)},h=this._callOnFinishChange.bind(this);let d;this.$slider.addEventListener("mousedown",u=>{this._setDraggingStyle(!0),t(u.clientX),window.addEventListener("mousemove",e),window.addEventListener("mouseup",n)}),this.$slider.addEventListener("touchstart",u=>{u.touches.length>1||(this._hasScrollBar?(i=u.touches[0].clientX,s=u.touches[0].clientY,a=!0):o(u),window.addEventListener("touchmove",l,{passive:!1}),window.addEventListener("touchend",c))},{passive:!1}),this.$slider.addEventListener("wheel",u=>{if(Math.abs(u.deltaX)<Math.abs(u.deltaY)&&this._hasScrollBar)return;u.preventDefault();const m=this._normalizeMouseWheel(u)*this._step;this._snapClampSetValue(this.getValue()+m),this.$input.value=this.getValue(),clearTimeout(d),d=setTimeout(h,400)},{passive:!1})}_setDraggingStyle(t,e="horizontal"){this.$slider&&this.$slider.classList.toggle("active",t),document.body.classList.toggle("lil-gui-dragging",t),document.body.classList.toggle("lil-gui-"+e,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:e,deltaY:n}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(e=0,n=-t.wheelDelta/120,n*=this._stepExplicit?1:10),e+-n}_arrowKeyMultiplier(t){let e=this._stepExplicit?1:10;return t.shiftKey?e*=10:t.altKey&&(e/=10),e}_snap(t){const e=Math.round(t/this._step)*this._step;return parseFloat(e.toPrecision(15))}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class ov extends An{constructor(t,e,n,i){super(t,e,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(i)?i:Object.values(i),this._names=Array.isArray(i)?i:Object.keys(i),this._names.forEach(s=>{const a=document.createElement("option");a.innerHTML=s,this.$select.appendChild(a)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const t=this.getValue(),e=this._values.indexOf(t);return this.$select.selectedIndex=e,this.$display.innerHTML=e===-1?t:this._names[e],this}}class lv extends An{constructor(t,e,n){super(t,e,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",i=>{i.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}let ph=!1;class ml{constructor({parent:t,autoPlace:e=t===void 0,container:n,width:i,title:s="Controls",injectStyles:a=!0,touchStyles:o=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",l=>{l.code!=="Enter"&&l.code!=="Space"||(l.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(s),o&&this.domElement.classList.add("allow-touch-styles"),this.parent)return this.parent.children.push(this),this.parent.folders.push(this),void this.parent.$children.appendChild(this.domElement);this.domElement.classList.add("root"),!ph&&a&&(function(l){const c=document.createElement("style");c.innerHTML=l;const h=document.querySelector("head link[rel=stylesheet], head style");h?document.head.insertBefore(c,h):document.head.appendChild(c)}('.lil-gui{--background-color:#1f1f1f;--text-color:#ebebeb;--title-background-color:#111;--title-text-color:#ebebeb;--widget-color:#424242;--hover-color:#4f4f4f;--focus-color:#595959;--number-color:#2cc9ff;--string-color:#a2db3c;--font-size:11px;--input-font-size:11px;--font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif;--font-family-mono:Menlo,Monaco,Consolas,"Droid Sans Mono",monospace;--padding:4px;--spacing:4px;--widget-height:20px;--name-width:45%;--slider-knob-width:2px;--slider-input-width:27%;--color-input-width:27%;--slider-input-min-width:45px;--color-input-min-width:45px;--folder-indent:7px;--widget-padding:0 0 0 3px;--widget-border-radius:2px;--checkbox-size:calc(var(--widget-height)*0.75);--scrollbar-width:5px;background-color:var(--background-color);color:var(--text-color);font-family:var(--font-family);font-size:var(--font-size);font-style:normal;font-weight:400;line-height:1;text-align:left;touch-action:manipulation;user-select:none;-webkit-user-select:none}.lil-gui,.lil-gui *{box-sizing:border-box;margin:0;padding:0}.lil-gui.root{display:flex;flex-direction:column;width:var(--width,245px)}.lil-gui.root>.title{background:var(--title-background-color);color:var(--title-text-color)}.lil-gui.root>.children{overflow-x:hidden;overflow-y:auto}.lil-gui.root>.children::-webkit-scrollbar{background:var(--background-color);height:var(--scrollbar-width);width:var(--scrollbar-width)}.lil-gui.root>.children::-webkit-scrollbar-thumb{background:var(--focus-color);border-radius:var(--scrollbar-width)}.lil-gui.force-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}.lil-gui.autoPlace{max-height:100%;position:fixed;right:15px;top:0;z-index:1001}.lil-gui .controller{align-items:center;display:flex;margin:var(--spacing) 0;padding:0 var(--padding)}.lil-gui .controller.disabled{opacity:.5}.lil-gui .controller.disabled,.lil-gui .controller.disabled *{pointer-events:none!important}.lil-gui .controller>.name{flex-shrink:0;line-height:var(--widget-height);min-width:var(--name-width);padding-right:var(--spacing);white-space:pre}.lil-gui .controller .widget{align-items:center;display:flex;min-height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.string input{color:var(--string-color)}.lil-gui .controller.boolean .widget{cursor:pointer}.lil-gui .controller.color .display{border-radius:var(--widget-border-radius);height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.color input[type=color]{cursor:pointer;height:100%;opacity:0;width:100%}.lil-gui .controller.color input[type=text]{flex-shrink:0;font-family:var(--font-family-mono);margin-left:var(--spacing);min-width:var(--color-input-min-width);width:var(--color-input-width)}.lil-gui .controller.option select{max-width:100%;opacity:0;position:absolute;width:100%}.lil-gui .controller.option .display{background:var(--widget-color);border-radius:var(--widget-border-radius);height:var(--widget-height);line-height:var(--widget-height);max-width:100%;overflow:hidden;padding-left:.55em;padding-right:1.75em;pointer-events:none;position:relative;word-break:break-all}.lil-gui .controller.option .display.active{background:var(--focus-color)}.lil-gui .controller.option .display:after{bottom:0;content:"↕";font-family:lil-gui;padding-right:.375em;position:absolute;right:0;top:0}.lil-gui .controller.option .widget,.lil-gui .controller.option select{cursor:pointer}.lil-gui .controller.number input{color:var(--number-color)}.lil-gui .controller.number.hasSlider input{flex-shrink:0;margin-left:var(--spacing);min-width:var(--slider-input-min-width);width:var(--slider-input-width)}.lil-gui .controller.number .slider{background-color:var(--widget-color);border-radius:var(--widget-border-radius);cursor:ew-resize;height:var(--widget-height);overflow:hidden;padding-right:var(--slider-knob-width);touch-action:pan-y;width:100%}.lil-gui .controller.number .slider.active{background-color:var(--focus-color)}.lil-gui .controller.number .slider.active .fill{opacity:.95}.lil-gui .controller.number .fill{border-right:var(--slider-knob-width) solid var(--number-color);box-sizing:content-box;height:100%}.lil-gui-dragging .lil-gui{--hover-color:var(--widget-color)}.lil-gui-dragging *{cursor:ew-resize!important}.lil-gui-dragging.lil-gui-vertical *{cursor:ns-resize!important}.lil-gui .title{--title-height:calc(var(--widget-height) + var(--spacing)*1.25);-webkit-tap-highlight-color:transparent;text-decoration-skip:objects;cursor:pointer;font-weight:600;height:var(--title-height);line-height:calc(var(--title-height) - 4px);outline:none;padding:0 var(--padding)}.lil-gui .title:before{content:"▾";display:inline-block;font-family:lil-gui;padding-right:2px}.lil-gui .title:active{background:var(--title-background-color);opacity:.75}.lil-gui.root>.title:focus{text-decoration:none!important}.lil-gui.closed>.title:before{content:"▸"}.lil-gui.closed>.children{opacity:0;transform:translateY(-7px)}.lil-gui.closed:not(.transition)>.children{display:none}.lil-gui.transition>.children{overflow:hidden;pointer-events:none;transition-duration:.3s;transition-property:height,opacity,transform;transition-timing-function:cubic-bezier(.2,.6,.35,1)}.lil-gui .children:empty:before{content:"Empty";display:block;font-style:italic;height:var(--widget-height);line-height:var(--widget-height);margin:var(--spacing) 0;opacity:.5;padding:0 var(--padding)}.lil-gui.root>.children>.lil-gui>.title{border-width:0;border-bottom:1px solid var(--widget-color);border-left:0 solid var(--widget-color);border-right:0 solid var(--widget-color);border-top:1px solid var(--widget-color);transition:border-color .3s}.lil-gui.root>.children>.lil-gui.closed>.title{border-bottom-color:transparent}.lil-gui+.controller{border-top:1px solid var(--widget-color);margin-top:0;padding-top:var(--spacing)}.lil-gui .lil-gui .lil-gui>.title{border:none}.lil-gui .lil-gui .lil-gui>.children{border:none;border-left:2px solid var(--widget-color);margin-left:var(--folder-indent)}.lil-gui .lil-gui .controller{border:none}.lil-gui input{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:0;border-radius:var(--widget-border-radius);color:var(--text-color);font-family:var(--font-family);font-size:var(--input-font-size);height:var(--widget-height);outline:none;width:100%}.lil-gui input:disabled{opacity:1}.lil-gui input[type=number],.lil-gui input[type=text]{padding:var(--widget-padding)}.lil-gui input[type=number]:focus,.lil-gui input[type=text]:focus{background:var(--focus-color)}.lil-gui input::-webkit-inner-spin-button,.lil-gui input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.lil-gui input[type=number]{-moz-appearance:textfield}.lil-gui input[type=checkbox]{appearance:none;-webkit-appearance:none;border-radius:var(--widget-border-radius);cursor:pointer;height:var(--checkbox-size);text-align:center;width:var(--checkbox-size)}.lil-gui input[type=checkbox]:checked:before{content:"✓";font-family:lil-gui;font-size:var(--checkbox-size);line-height:var(--checkbox-size)}.lil-gui button{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:1px solid var(--widget-color);border-radius:var(--widget-border-radius);color:var(--text-color);cursor:pointer;font-family:var(--font-family);font-size:var(--font-size);height:var(--widget-height);line-height:calc(var(--widget-height) - 4px);outline:none;text-align:center;text-transform:none;width:100%}.lil-gui button:active{background:var(--focus-color)}@font-face{font-family:lil-gui;src:url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff")}@media (pointer:coarse){.lil-gui.allow-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}}@media (hover:hover){.lil-gui .controller.color .display:hover:before{border:1px solid #fff9;border-radius:var(--widget-border-radius);bottom:0;content:" ";display:block;left:0;position:absolute;right:0;top:0}.lil-gui .controller.option .display.focus{background:var(--focus-color)}.lil-gui .controller.option .widget:hover .display{background:var(--hover-color)}.lil-gui .controller.number .slider:hover{background-color:var(--hover-color)}body:not(.lil-gui-dragging) .lil-gui .title:hover{background:var(--title-background-color);opacity:.85}.lil-gui .title:focus{text-decoration:underline var(--focus-color)}.lil-gui input:hover{background:var(--hover-color)}.lil-gui input:active{background:var(--focus-color)}.lil-gui input[type=checkbox]:focus{box-shadow:inset 0 0 0 1px var(--focus-color)}.lil-gui button:hover{background:var(--hover-color);border-color:var(--hover-color)}.lil-gui button:focus{border-color:var(--focus-color)}}'),ph=!0),n?n.appendChild(this.domElement):e&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),i&&this.domElement.style.setProperty("--width",i+"px"),this.domElement.addEventListener("keydown",l=>l.stopPropagation()),this.domElement.addEventListener("keyup",l=>l.stopPropagation())}add(t,e,n,i,s){if(Object(n)===n)return new ov(this,t,e,n);const a=t[e];switch(typeof a){case"number":return new av(this,t,e,n,i,s);case"boolean":return new tv(this,t,e);case"string":return new lv(this,t,e);case"function":return new ho(this,t,e)}console.error(`gui.add failed
	property:`,e,`
	object:`,t,`
	value:`,a)}addColor(t,e,n=1){return new sv(this,t,e,n)}addFolder(t){return new ml({parent:this,title:t})}load(t,e=!0){return t.controllers&&this.controllers.forEach(n=>{n instanceof ho||n._name in t.controllers&&n.load(t.controllers[n._name])}),e&&t.folders&&this.folders.forEach(n=>{n._title in t.folders&&n.load(t.folders[n._title])}),this}save(t=!0){const e={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof ho)){if(n._name in e.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);e.controllers[n._name]=n.save()}}),t&&this.folders.forEach(n=>{if(n._title in e.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);e.folders[n._title]=n.save()}),e}open(t=!0){return this._closed=!t,this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._closed=!t,this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const e=this.$children.clientHeight;this.$children.style.height=e+"px",this.domElement.classList.add("transition");const n=s=>{s.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const i=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!t),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this}title(t){return this._title=t,this.$title.innerHTML=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(e=>e.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(e=>{t=t.concat(e.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(e=>{t=t.concat(e.foldersRecursive())}),t}}var Ke=Ke||{};Ke.createAtmosphereMaterial=function(){var r=["varying vec3	vVertexWorldPosition;","varying vec3	vVertexNormal;","varying vec4	vFragColor;","void main(){","	vVertexNormal	= normalize(normalMatrix * normal);","	vVertexWorldPosition	= (modelMatrix * vec4(position, 1.0)).xyz;","	// set gl_Position","	gl_Position	= projectionMatrix * modelViewMatrix * vec4(position, 1.0);","}"].join(`
`),t=["uniform vec3	glowColor;","uniform float	coeficient;","uniform float	power;","varying vec3	vVertexNormal;","varying vec3	vVertexWorldPosition;","varying vec4	vFragColor;","void main(){","	vec3 worldCameraToVertex= vVertexWorldPosition - cameraPosition;","	vec3 viewCameraToVertex	= (viewMatrix * vec4(worldCameraToVertex, 0.0)).xyz;","	viewCameraToVertex	= normalize(viewCameraToVertex);","	float intensity		= pow(coeficient + dot(vVertexNormal, viewCameraToVertex), power);","	gl_FragColor		= vec4(glowColor, intensity);","}"].join(`
`),e=new Ne({uniforms:{coeficient:{type:"f",value:1},power:{type:"f",value:2},glowColor:{type:"c",value:new Tt("pink")}},vertexShader:r,fragmentShader:t,transparent:!0,depthWrite:!1});return e};Ke.addAtmosphereMaterial2DatGui=function(r,t){t=t||new ml;var e=r.uniforms,n={coeficient:e.coeficient.value,power:e.power.value,glowColor:"#"+e.glowColor.value.getHexString(),presetFront:function(){n.coeficient=1,n.power=2,i()},presetBack:function(){n.coeficient=.5,n.power=4,i()}},i=function(){e.coeficient.value=n.coeficient,e.power.value=n.power,e.glowColor.value.set(n.glowColor)};i(),t.add(n,"coeficient",-2,2).listen().onChange(i),t.add(n,"power",-5,5).listen().onChange(i),t.addColor(n,"glowColor").listen().onChange(i),t.add(n,"presetFront"),t.add(n,"presetBack")};Ke.Atmosphere=function(r,t){var e=new se,n=new ii(r+.6,t);n.computeBoundingSphere();var i=new ii(r+6,t);i.computeBoundingSphere();var s=new Ke.InsideGlowMaterial,a=new Ke.OutsideGlowMaterial("#95D3F4",.71,28,1),o=new ve(n,s);o.flipSided=!0,o.matrixAutoUpdate=!1,o.updateMatrix();var l=new ve(i,a);return l.position.set(7,0,0),e.add(o),e.add(l),e.material=s,e};Ke.Atmosphere.prototype=Object.create(se.prototype);Ke.Atmosphere.prototype.update=function(r){this.material.uniforms.viewVector.value=r.position};Ke.InsideGlowMaterial=function(r,t,e,n,i){var s=new Ne,a=r===void 0?new Tt("#95D3F4"):new Tt(r),o=t===void 0?.9999999999:t,l=e===void 0?.5555555555:e,c=n===void 0?!0:n,h=new qt(a.r,a.g,a.b,.1);return s.uniforms=al.merge([st.lights,{uColor:{type:"v4",value:h},viewVector:{type:"v3",value:new qt(1,1,1,1)},uTop:{type:"f",value:o},uPower:{type:"f",value:l},usingDirectionalLighting:{type:"i",value:c}}]),s.vertexShader=["uniform vec3 viewVector;","attribute vec4 tangent;","varying vec3 vNormal; ","varying float intensity;","uniform float uTop;","uniform float uPower;","void main() {","vNormal = normalize( normalMatrix * normal );","vec3 vNormel = normalize( normalMatrix * viewVector );","intensity = pow( uTop - dot(vNormal, vNormel), uPower );","gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );","}"].join(`
`),s.fragmentShader=["uniform vec4 uColor;","varying vec3 vNormal;","varying float intensity;","uniform bool usingDirectionalLighting;","#if NUM_DIR_LIGHTS > 0","uniform vec3 directionalLightColor[ NUM_DIR_LIGHTS ];","uniform vec3 directionalLightDirection[ NUM_DIR_LIGHTS ];","#endif","void main() {","vec3 dirDiffuse = vec3( 0.0 );","vec3 dirSpecular = vec3( 0.0 );","#if NUM_DIR_LIGHTS > 0","if ( usingDirectionalLighting ) {","for ( int i = 0; i < NUM_DIR_LIGHTS; i++ ) {","vec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );","vec3 dirVector = normalize( lDirection.xyz );","float directionalLightWeightingFull = max( dot( vNormal, dirVector ), 0.0 );","float directionalLightWeightingHalf = max( 10.0 * dot( vNormal, dirVector ) + 0.5, 0.0 );","vec3 dirDiffuseWeight = mix( vec3( directionalLightWeightingFull ), vec3( directionalLightWeightingHalf ), uColor.xyz );","dirDiffuse += dirDiffuseWeight;","}","} else {","dirDiffuse = vec3( 1.0 );","}","#else","dirDiffuse = vec3( 1.0 );","#endif","gl_FragColor = intensity * intensity * vec4( dirDiffuse, 1.0 );","}"].join(`
`),s.transparent=!0,s.blending=os,s.depthWrite=!1,s.depthTest=!0,s.needsUpdate=!0,s.lights=!0,s};Ke.InsideGlowMaterial.prototype=Object.create(Ne.prototype);Ke.OutsideGlowMaterial=function(r,t,e,n){var i=new Ne;return i.uniforms={aperture:{type:"f",value:t},scale:{type:"f",value:e},color:{type:"c",value:new Tt(r)},opacity:{type:"f",value:n}},i.vertexShader=["varying vec3 vVertexWorldPosition;","varying vec3 vVertexNormal;","void main(){","vVertexNormal = normalize( normalMatrix * normal );","vVertexWorldPosition = ( modelMatrix * vec4( position, 1.0 ) ).xyz;","gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );","}"].join(`
`),i.fragmentShader=["uniform vec3 color;","uniform float aperture;","uniform float scale;","uniform float opacity;","varying vec3 vVertexNormal;","varying vec3 vVertexWorldPosition;","void main() {","vec3 worldCameraToVertex = vVertexWorldPosition - cameraPosition;","vec3 viewCameraToVertex = ( viewMatrix * vec4( worldCameraToVertex, 0.0 ) ).xyz;","viewCameraToVertex	= normalize( viewCameraToVertex );","float intensity = pow( aperture + dot( vVertexNormal, viewCameraToVertex ), scale );","gl_FragColor = vec4( color, intensity ) * opacity;","}"].join(`
`),i.transparent=!0,i.depthWrite=!1,i.needsUpdate=!0,i.side=Re,i};Ke.OutsideGlowMaterial.prototype=Object.create(Ne.prototype);function Bn(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function gu(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}/*!
 * GSAP 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ze={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Pr={duration:.5,overwrite:!1,delay:0},_l,Ce,te,an=1e8,Yt=1/an,Bo=Math.PI*2,cv=Bo/4,hv=0,vu=Math.sqrt,uv=Math.cos,dv=Math.sin,xe=function(t){return typeof t=="string"},ee=function(t){return typeof t=="function"},$n=function(t){return typeof t=="number"},gl=function(t){return typeof t>"u"},Cn=function(t){return typeof t=="object"},Be=function(t){return t!==!1},vl=function(){return typeof window<"u"},js=function(t){return ee(t)||xe(t)},xu=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Pe=Array.isArray,zo=/(?:-?\.?\d|\.)+/gi,Mu=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,_r=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,uo=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,yu=/[+-]=-?[.\d]+/,Su=/[^,'"\[\]\s]+/gi,fv=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Kt,nn,ko,xl,Je={},ha={},Eu,Tu=function(t){return(ha=zi(t,Je))&&Ve},Ml=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},ua=function(t,e){return!e&&console.warn(t)},bu=function(t,e){return t&&(Je[t]=e)&&ha&&(ha[t]=e)||Je},fs=function(){return 0},pv={suppressEvents:!0,isStart:!0,kill:!1},ta={suppressEvents:!0,kill:!1},mv={suppressEvents:!0},yl={},li=[],Vo={},Au,qe={},fo={},mh=30,ea=[],Sl="",El=function(t){var e=t[0],n,i;if(Cn(e)||ee(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=ea.length;i--&&!ea[i].targetTest(e););n=ea[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Ku(t[i],n)))||t.splice(i,1);return t},Ii=function(t){return t._gsap||El(on(t))[0]._gsap},wu=function(t,e,n){return(n=t[e])&&ee(n)?t[e]():gl(n)&&t.getAttribute&&t.getAttribute(e)||n},ze=function(t,e){return(t=t.split(",")).forEach(e)||t},re=function(t){return Math.round(t*1e5)/1e5||0},Ee=function(t){return Math.round(t*1e7)/1e7||0},yr=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},_v=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},da=function(){var t=li.length,e=li.slice(0),n,i;for(Vo={},li.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Ru=function(t,e,n,i){li.length&&!Ce&&da(),t.render(e,n,i||Ce&&e<0&&(t._initted||t._startAt)),li.length&&!Ce&&da()},Cu=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Su).length<2?e:xe(t)?t.trim():t},Pu=function(t){return t},hn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},gv=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},zi=function(t,e){for(var n in e)t[n]=e[n];return t},_h=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Cn(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},fa=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},ns=function(t){var e=t.parent||Kt,n=t.keyframes?gv(Pe(t.keyframes)):hn;if(Be(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},vv=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Lu=function(t,e,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=t[i],o;if(s)for(o=e[s];a&&a[s]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=a,e.parent=e._dp=t,e},Sa=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,a=e._next;s?s._next=a:t[n]===e&&(t[n]=a),a?a._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},ui=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Ni=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},xv=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Ho=function(t,e,n,i){return t._startAt&&(Ce?t._startAt.revert(ta):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},Mv=function r(t){return!t||t._ts&&r(t.parent)},gh=function(t){return t._repeat?Lr(t._tTime,t=t.duration()+t._rDelay)*t:0},Lr=function(t,e){var n=Math.floor(t/=e);return t&&n===t?n-1:n},pa=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Ea=function(t){return t._end=Ee(t._start+(t._tDur/Math.abs(t._ts||t._rts||Yt)||0))},Ta=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Ee(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Ea(t),n._dirty||Ni(n,t)),t},Du=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=pa(t.rawTime(),e),(!e._dur||Ss(0,e.totalDuration(),n)-e._tTime>Yt)&&e.render(n,!0)),Ni(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Yt}},Tn=function(t,e,n,i){return e.parent&&ui(e),e._start=Ee(($n(n)?n:n||t!==Kt?en(t,n,e):t._time)+e._delay),e._end=Ee(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Lu(t,e,"_first","_last",t._sort?"_start":0),Go(e)||(t._recent=e),i||Du(t,e),t._ts<0&&Ta(t,t._tTime),t},Uu=function(t,e){return(Je.ScrollTrigger||Ml("scrollTrigger",e))&&Je.ScrollTrigger.create(e,t)},Iu=function(t,e,n,i,s){if(bl(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!Ce&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Au!==je.frame)return li.push(t),t._lazy=[s,i],1},yv=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},Go=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},Sv=function(t,e,n,i){var s=t.ratio,a=e<0||!e&&(!t._start&&yv(t)&&!(!t._initted&&Go(t))||(t._ts<0||t._dp._ts<0)&&!Go(t))?0:1,o=t._rDelay,l=0,c,h,d;if(o&&t._repeat&&(l=Ss(0,t._tDur,e),h=Lr(l,o),t._yoyo&&h&1&&(a=1-a),h!==Lr(t._tTime,o)&&(s=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==s||Ce||i||t._zTime===Yt||!e&&t._zTime){if(!t._initted&&Iu(t,e,i,n,l))return;for(d=t._zTime,t._zTime=e||(n?Yt:0),n||(n=e&&!d),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,c=t._pt;c;)c.r(a,c.d),c=c._next;e<0&&Ho(t,e,n,!0),t._onUpdate&&!n&&ln(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&ln(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&ui(t,1),!n&&!Ce&&(ln(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Ev=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Dr=function(t,e,n,i){var s=t._repeat,a=Ee(e)||0,o=t._tTime/t._tDur;return o&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=s?s<0?1e10:Ee(a*(s+1)+t._rDelay*s):a,o>0&&!i&&Ta(t,t._tTime=t._tDur*o),t.parent&&Ea(t),n||Ni(t.parent,t),t},vh=function(t){return t instanceof Oe?Ni(t):Dr(t,t._dur)},Tv={_start:0,endTime:fs,totalDuration:fs},en=function r(t,e,n){var i=t.labels,s=t._recent||Tv,a=t.duration()>=an?s.endTime(!1):t._dur,o,l,c;return xe(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",o=e.indexOf("="),l==="<"||l===">"?(o>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(e in i||(i[e]=a),i[e]):(l=parseFloat(e.charAt(o-1)+e.substr(o+1)),c&&n&&(l=l/100*(Pe(n)?n[0]:n).totalDuration()),o>1?r(t,e.substr(0,o-1),n)+l:a+l)):e==null?a:+e},is=function(t,e,n){var i=$n(e[1]),s=(i?2:1)+(t<2?0:1),a=e[s],o,l;if(i&&(a.duration=e[1]),a.parent=n,t){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Be(l.vars.inherit)&&l.parent;a.immediateRender=Be(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[s-1]}return new le(e[0],a,e[s+1])},fi=function(t,e){return t||t===0?e(t):e},Ss=function(t,e,n){return n<t?t:n>e?e:n},we=function(t,e){return!xe(t)||!(e=fv.exec(t))?"":e[1]},bv=function(t,e,n){return fi(n,function(i){return Ss(t,e,i)})},Wo=[].slice,Nu=function(t,e){return t&&Cn(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Cn(t[0]))&&!t.nodeType&&t!==nn},Av=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return xe(i)&&!e||Nu(i,1)?(s=n).push.apply(s,on(i)):n.push(i)})||n},on=function(t,e,n){return te&&!e&&te.selector?te.selector(t):xe(t)&&!n&&(ko||!Ur())?Wo.call((e||xl).querySelectorAll(t),0):Pe(t)?Av(t,n):Nu(t)?Wo.call(t,0):t?[t]:[]},Xo=function(t){return t=on(t)[0]||ua("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return on(e,n.querySelectorAll?n:n===t?ua("Invalid scope")||xl.createElement("div"):t)}},Fu=function(t){return t.sort(function(){return .5-Math.random()})},Ou=function(t){if(ee(t))return t;var e=Cn(t)?t:{each:t},n=Fi(e.ease),i=e.from||0,s=parseFloat(e.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=e.axis,h=i,d=i;return xe(i)?h=d={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(h=i[0],d=i[1]),function(u,m,g){var _=(g||e).length,p=a[_],f,M,v,y,S,w,b,P,x;if(!p){if(x=e.grid==="auto"?0:(e.grid||[1,an])[1],!x){for(b=-an;b<(b=g[x++].getBoundingClientRect().left)&&x<_;);x--}for(p=a[_]=[],f=l?Math.min(x,_)*h-.5:i%x,M=x===an?0:l?_*d/x-.5:i/x|0,b=0,P=an,w=0;w<_;w++)v=w%x-f,y=M-(w/x|0),p[w]=S=c?Math.abs(c==="y"?y:v):vu(v*v+y*y),S>b&&(b=S),S<P&&(P=S);i==="random"&&Fu(p),p.max=b-P,p.min=P,p.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(x>_?_-1:c?c==="y"?_/x:x:Math.max(x,_/x))||0)*(i==="edges"?-1:1),p.b=_<0?s-_:s,p.u=we(e.amount||e.each)||0,n=n&&_<0?qu(n):n}return _=(p[u]-p.min)/p.max||0,Ee(p.b+(n?n(_):_)*p.v)+p.u}},Yo=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Ee(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+($n(n)?0:we(n))}},Bu=function(t,e){var n=Pe(t),i,s;return!n&&Cn(t)&&(i=n=t.radius||an,t.values?(t=on(t.values),(s=!$n(t[0]))&&(i*=i)):t=Yo(t.increment)),fi(e,n?ee(t)?function(a){return s=t(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=an,h=0,d=t.length,u,m;d--;)s?(u=t[d].x-o,m=t[d].y-l,u=u*u+m*m):u=Math.abs(t[d]-o),u<c&&(c=u,h=d);return h=!i||c<=i?t[h]:a,s||h===a||$n(a)?h:h+we(a)}:Yo(t))},zu=function(t,e,n,i){return fi(Pe(t)?!e:n===!0?!!(n=0):!i,function(){return Pe(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},wv=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,a){return a(s)},i)}},Rv=function(t,e){return function(n){return t(parseFloat(n))+(e||we(n))}},Cv=function(t,e,n){return Vu(t,e,0,1,n)},ku=function(t,e,n){return fi(n,function(i){return t[~~e(i)]})},Pv=function r(t,e,n){var i=e-t;return Pe(t)?ku(t,r(0,t.length),e):fi(n,function(s){return(i+(s-t)%i)%i+t})},Lv=function r(t,e,n){var i=e-t,s=i*2;return Pe(t)?ku(t,r(0,t.length-1),e):fi(n,function(a){return a=(s+(a-t)%s)%s||0,t+(a>i?s-a:a)})},ps=function(t){for(var e=0,n="",i,s,a,o;~(i=t.indexOf("random(",e));)a=t.indexOf(")",i),o=t.charAt(i+7)==="[",s=t.substr(i+7,a-i-7).match(o?Su:zo),n+=t.substr(e,i-e)+zu(o?s:+s[0],o?0:+s[1],+s[2]||1e-5),e=a+1;return n+t.substr(e,t.length-e)},Vu=function(t,e,n,i,s){var a=e-t,o=i-n;return fi(s,function(l){return n+((l-t)/a*o||0)})},Dv=function r(t,e,n,i){var s=isNaN(t+e)?0:function(m){return(1-m)*t+m*e};if(!s){var a=xe(t),o={},l,c,h,d,u;if(n===!0&&(i=1)&&(n=null),a)t={p:t},e={p:e};else if(Pe(t)&&!Pe(e)){for(h=[],d=t.length,u=d-2,c=1;c<d;c++)h.push(r(t[c-1],t[c]));d--,s=function(g){g*=d;var _=Math.min(u,~~g);return h[_](g-_)},n=e}else i||(t=zi(Pe(t)?[]:{},t));if(!h){for(l in e)Tl.call(o,t,l,"get",e[l]);s=function(g){return Rl(g,o)||(a?t.p:t)}}}return fi(n,s)},xh=function(t,e,n){var i=t.labels,s=an,a,o,l;for(a in i)o=i[a]-e,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},ln=function(t,e,n){var i=t.vars,s=i[e],a=te,o=t._ctx,l,c,h;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&li.length&&da(),o&&(te=o),h=l?s.apply(c,l):s.call(c),te=a,h},$r=function(t){return ui(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Ce),t.progress()<1&&ln(t,"onInterrupt"),t},gr,Hu=[],Gu=function(t){if(vl()&&t){t=!t.name&&t.default||t;var e=t.name,n=ee(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:fs,render:Rl,add:Tl,kill:$v,modifier:qv,rawVars:0},a={targetTest:0,get:0,getSetter:wl,aliases:{},register:0};if(Ur(),t!==i){if(qe[e])return;hn(i,hn(fa(t,s),a)),zi(i.prototype,zi(s,fa(t,a))),qe[i.prop=e]=i,t.targetTest&&(ea.push(i),yl[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}bu(e,i),t.register&&t.register(Ve,i,ke)}else t&&Hu.push(t)},Wt=255,jr={aqua:[0,Wt,Wt],lime:[0,Wt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Wt],navy:[0,0,128],white:[Wt,Wt,Wt],olive:[128,128,0],yellow:[Wt,Wt,0],orange:[Wt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Wt,0,0],pink:[Wt,192,203],cyan:[0,Wt,Wt],transparent:[Wt,Wt,Wt,0]},po=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Wt+.5|0},Wu=function(t,e,n){var i=t?$n(t)?[t>>16,t>>8&Wt,t&Wt]:0:jr.black,s,a,o,l,c,h,d,u,m,g;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),jr[t])i=jr[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+s+s+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&Wt,i&Wt,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&Wt,t&Wt]}else if(t.substr(0,3)==="hsl"){if(i=g=t.match(zo),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,a=h<=.5?h*(c+1):h+c-h*c,s=h*2-a,i.length>3&&(i[3]*=1),i[0]=po(l+1/3,s,a),i[1]=po(l,s,a),i[2]=po(l-1/3,s,a);else if(~t.indexOf("="))return i=t.match(Mu),n&&i.length<4&&(i[3]=1),i}else i=t.match(zo)||jr.transparent;i=i.map(Number)}return e&&!g&&(s=i[0]/Wt,a=i[1]/Wt,o=i[2]/Wt,d=Math.max(s,a,o),u=Math.min(s,a,o),h=(d+u)/2,d===u?l=c=0:(m=d-u,c=h>.5?m/(2-d-u):m/(d+u),l=d===s?(a-o)/m+(a<o?6:0):d===a?(o-s)/m+2:(s-a)/m+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},Xu=function(t){var e=[],n=[],i=-1;return t.split(ci).forEach(function(s){var a=s.match(_r)||[];e.push.apply(e,a),n.push(i+=a.length+1)}),e.c=n,e},Mh=function(t,e,n){var i="",s=(t+i).match(ci),a=e?"hsla(":"rgba(",o=0,l,c,h,d;if(!s)return t;if(s=s.map(function(u){return(u=Wu(u,e,1))&&a+(e?u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:u.join(","))+")"}),n&&(h=Xu(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(ci,"1").split(_r),d=c.length-1;o<d;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=t.split(ci),d=c.length-1;o<d;o++)i+=c[o]+s[o];return i+c[d]},ci=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in jr)r+="|"+t+"\\b";return new RegExp(r+")","gi")}(),Uv=/hsl[a]?\(/,Yu=function(t){var e=t.join(" "),n;if(ci.lastIndex=0,ci.test(e))return n=Uv.test(e),t[1]=Mh(t[1],n),t[0]=Mh(t[0],n,Xu(t[1])),!0},ms,je=function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,h,d,u,m,g=function _(p){var f=r()-i,M=p===!0,v,y,S,w;if(f>t&&(n+=f-e),i+=f,S=i-n,v=S-a,(v>0||M)&&(w=++d.frame,u=S-d.time*1e3,d.time=S=S/1e3,a+=v+(v>=s?4:s-v),y=1),M||(l=c(_)),y)for(m=0;m<o.length;m++)o[m](S,u,w,p)};return d={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return u/(1e3/(p||60))},wake:function(){Eu&&(!ko&&vl()&&(nn=ko=window,xl=nn.document||{},Je.gsap=Ve,(nn.gsapVersions||(nn.gsapVersions=[])).push(Ve.version),Tu(ha||nn.GreenSockGlobals||!nn.gsap&&nn||{}),h=nn.requestAnimationFrame,Hu.forEach(Gu)),l&&d.sleep(),c=h||function(p){return setTimeout(p,a-d.time*1e3+1|0)},ms=1,g(2))},sleep:function(){(h?nn.cancelAnimationFrame:clearTimeout)(l),ms=0,c=fs},lagSmoothing:function(p,f){t=p||1/0,e=Math.min(f||33,t)},fps:function(p){s=1e3/(p||240),a=d.time*1e3+s},add:function(p,f,M){var v=f?function(y,S,w,b){p(y,S,w,b),d.remove(v)}:p;return d.remove(p),o[M?"unshift":"push"](v),Ur(),v},remove:function(p,f){~(f=o.indexOf(p))&&o.splice(f,1)&&m>=f&&m--},_listeners:o},d}(),Ur=function(){return!ms&&je.wake()},Bt={},Iv=/^[\d.\-M][\d.\-,\s]/,Nv=/["']/g,Fv=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),e[i]=isNaN(c)?c.replace(Nv,"").trim():+c,i=l.substr(o+1).trim();return e},Ov=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},Bv=function(t){var e=(t+"").split("("),n=Bt[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[Fv(e[1])]:Ov(t).split(",").map(Cu)):Bt._CE&&Iv.test(t)?Bt._CE("",t):n},qu=function(t){return function(e){return 1-t(1-e)}},$u=function r(t,e){for(var n=t._first,i;n;)n instanceof Oe?r(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?r(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},Fi=function(t,e){return t&&(ee(t)?t:Bt[t]||Bv(t))||e},Hi=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},a;return ze(t,function(o){Bt[o]=Je[o]=s,Bt[a=o.toLowerCase()]=n;for(var l in s)Bt[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Bt[o+"."+l]=s[l]}),s},ju=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},mo=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),a=s/Bo*(Math.asin(1/i)||0),o=function(h){return h===1?1:i*Math.pow(2,-10*h)*dv((h-a)*s)+1},l=t==="out"?o:t==="in"?function(c){return 1-o(1-c)}:ju(o);return s=Bo/s,l.config=function(c,h){return r(t,c,h)},l},_o=function r(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:ju(n);return i.config=function(s){return r(t,s)},i};ze("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;Hi(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});Bt.Linear.easeNone=Bt.none=Bt.Linear.easeIn;Hi("Elastic",mo("in"),mo("out"),mo());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(o){return o<e?r*o*o:o<n?r*Math.pow(o-1.5/t,2)+.75:o<i?r*(o-=2.25/t)*o+.9375:r*Math.pow(o-2.625/t,2)+.984375};Hi("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Hi("Expo",function(r){return r?Math.pow(2,10*(r-1)):0});Hi("Circ",function(r){return-(vu(1-r*r)-1)});Hi("Sine",function(r){return r===1?1:-uv(r*cv)+1});Hi("Back",_o("in"),_o("out"),_o());Bt.SteppedEase=Bt.steps=Je.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,a=1-Yt;return function(o){return((i*Ss(0,a,o)|0)+s)*n}}};Pr.ease=Bt["quad.out"];ze("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Sl+=r+","+r+"Params,"});var Ku=function(t,e){this.id=hv++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:wu,this.set=e?e.getSetter:wl},_s=function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Dr(this,+e.duration,1,1),this.data=e.data,te&&(this._ctx=te,te.data.push(this)),ms||je.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Dr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Ur(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Ta(this,n),!s._dp||s.parent||Du(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Tn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Yt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Ru(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+gh(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+gh(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Lr(this._tTime,s)+1:1},t.timeScale=function(n){if(!arguments.length)return this._rts===-Yt?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?pa(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Yt?0:this._rts,this.totalTime(Ss(-Math.abs(this._delay),this._tDur,i),!0),Ea(this),xv(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ur(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Yt&&(this._tTime-=Yt)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Tn(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Be(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?pa(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=mv);var i=Ce;return Ce=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Ce=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(i._ts||1),i=i._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1/0:this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,vh(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,vh(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(en(this,n),Be(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Be(i))},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Yt:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Yt,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Yt)},t.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},t.then=function(n){var i=this;return new Promise(function(s){var a=ee(n)?n:Pu,o=function(){var c=i.then;i.then=null,ee(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=c),s(a),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},t.kill=function(){$r(this)},r}();hn(_s.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Yt,_prom:0,_ps:!1,_rts:1});var Oe=function(r){gu(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Be(n.sortChildren),Kt&&Tn(n.parent||Kt,Bn(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Uu(Bn(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,a){return is(0,arguments,this),this},e.from=function(i,s,a){return is(1,arguments,this),this},e.fromTo=function(i,s,a,o){return is(2,arguments,this),this},e.set=function(i,s,a){return s.duration=0,s.parent=this,ns(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new le(i,s,en(this,a),1),this},e.call=function(i,s,a){return Tn(this,le.delayedCall(0,i,s),a)},e.staggerTo=function(i,s,a,o,l,c,h){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=h,a.parent=this,new le(i,a,en(this,l)),this},e.staggerFrom=function(i,s,a,o,l,c,h){return a.runBackwards=1,ns(a).immediateRender=Be(a.immediateRender),this.staggerTo(i,s,a,o,l,c,h)},e.staggerFromTo=function(i,s,a,o,l,c,h,d){return o.startAt=a,ns(o).immediateRender=Be(o.immediateRender),this.staggerTo(i,s,o,l,c,h,d)},e.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:Ee(i),d=this._zTime<0!=i<0&&(this._initted||!c),u,m,g,_,p,f,M,v,y,S,w,b;if(this!==Kt&&h>l&&i>=0&&(h=l),h!==this._tTime||a||d){if(o!==this._time&&c&&(h+=this._time-o,i+=this._time-o),u=h,y=this._start,v=this._ts,f=!v,d&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,a);if(u=Ee(h%p),h===l?(_=this._repeat,u=c):(_=~~(h/p),_&&_===h/p&&(u=c,_--),u>c&&(u=c)),S=Lr(this._tTime,p),!o&&this._tTime&&S!==_&&this._tTime-S*p-this._dur<=0&&(S=_),w&&_&1&&(u=c-u,b=1),_!==S&&!this._lock){var P=w&&S&1,x=P===(w&&_&1);if(_<S&&(P=!P),o=P?0:h%c?c:h,this._lock=1,this.render(o||(b?0:Ee(_*p)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&ln(this,"onRepeat"),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1),o&&o!==this._time||f!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,x&&(this._lock=2,o=P?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!f)return this;$u(this,b)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=Ev(this,Ee(o),Ee(u)),M&&(h-=u-(u=M._start))),this._tTime=h,this._time=u,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&u&&!s&&!_&&(ln(this,"onStart"),this._tTime!==h))return this;if(u>=o&&i>=0)for(m=this._first;m;){if(g=m._next,(m._act||u>=m._start)&&m._ts&&M!==m){if(m.parent!==this)return this.render(i,s,a);if(m.render(m._ts>0?(u-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(u-m._start)*m._ts,s,a),u!==this._time||!this._ts&&!f){M=0,g&&(h+=this._zTime=-Yt);break}}m=g}else{m=this._last;for(var T=i<0?i:u;m;){if(g=m._prev,(m._act||T<=m._end)&&m._ts&&M!==m){if(m.parent!==this)return this.render(i,s,a);if(m.render(m._ts>0?(T-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(T-m._start)*m._ts,s,a||Ce&&(m._initted||m._startAt)),u!==this._time||!this._ts&&!f){M=0,g&&(h+=this._zTime=T?-Yt:Yt);break}}m=g}}if(M&&!s&&(this.pause(),M.render(u>=o?0:-Yt)._zTime=u>=o?1:-1,this._ts))return this._start=y,Ea(this),this.render(i,s,a);this._onUpdate&&!s&&ln(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&o)&&(y===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&ui(this,1),!s&&!(i<0&&!o)&&(h||o||!l)&&(ln(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var a=this;if($n(s)||(s=en(this,s,i)),!(i instanceof _s)){if(Pe(i))return i.forEach(function(o){return a.add(o,s)}),this;if(xe(i))return this.addLabel(i,s);if(ee(i))i=le.delayedCall(0,i);else return this}return this!==i?Tn(this,i,s):this},e.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-an);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof le?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},e.remove=function(i){return xe(i)?this.removeLabel(i):ee(i)?this.killTweensOf(i):(Sa(this,i),i===this._recent&&(this._recent=this._last),Ni(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ee(je.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=en(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,a){var o=le.delayedCall(0,s||fs,a);return o.data="isPause",this._hasPause=1,Tn(this,o,en(this,i))},e.removePause=function(i){var s=this._first;for(i=en(this,i);s;)s._start===i&&s.data==="isPause"&&ui(s),s=s._next},e.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)ri!==o[l]&&o[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var a=[],o=on(i),l=this._first,c=$n(s),h;l;)l instanceof le?_v(l._targets,o)&&(c?(!ri||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(h=l.getTweensOf(o,s)).length&&a.push.apply(a,h),l=l._next;return a},e.tweenTo=function(i,s){s=s||{};var a=this,o=en(a,i),l=s,c=l.startAt,h=l.onStart,d=l.onStartParams,u=l.immediateRender,m,g=le.to(a,hn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||Yt,onStart:function(){if(a.pause(),!m){var p=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==p&&Dr(g,p,0,1).render(g._time,!0,!0),m=1}h&&h.apply(g,d||[])}},s));return u?g.render(0):g},e.tweenFromTo=function(i,s,a){return this.tweenTo(s,hn({startAt:{time:en(this,i)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),xh(this,en(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),xh(this,en(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Yt)},e.shiftChildren=function(i,s,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,c;o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return Ni(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Ni(this)},e.totalDuration=function(i){var s=0,a=this,o=a._last,l=an,c,h,d;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(d=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Tn(a,o,h-o._delay,1)._lock=0):l=h,h<0&&o._ts&&(s-=h,(!d&&!a._dp||d&&d.smoothChildTiming)&&(a._start+=h/a._ts,a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;Dr(a,a===Kt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(i){if(Kt._ts&&(Ru(Kt,pa(i,Kt)),Au=je.frame),je.frame>=mh){mh+=Ze.autoSleep||120;var s=Kt._first;if((!s||!s._ts)&&Ze.autoSleep&&je._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||je.sleep()}}},t}(_s);hn(Oe.prototype,{_lock:0,_hasPause:0,_forcing:0});var zv=function(t,e,n,i,s,a,o){var l=new ke(this._pt,t,e,0,1,nd,null,s),c=0,h=0,d,u,m,g,_,p,f,M;for(l.b=n,l.e=i,n+="",i+="",(f=~i.indexOf("random("))&&(i=ps(i)),a&&(M=[n,i],a(M,t,e),n=M[0],i=M[1]),u=n.match(uo)||[];d=uo.exec(i);)g=d[0],_=i.substring(c,d.index),m?m=(m+1)%5:_.substr(-5)==="rgba("&&(m=1),g!==u[h++]&&(p=parseFloat(u[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:p,c:g.charAt(1)==="="?yr(p,g)-p:parseFloat(g)-p,m:m&&m<4?Math.round:0},c=uo.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(yu.test(i)||f)&&(l.e=0),this._pt=l,l},Tl=function(t,e,n,i,s,a,o,l,c,h){ee(i)&&(i=i(s||0,t,a));var d=t[e],u=n!=="get"?n:ee(d)?c?t[e.indexOf("set")||!ee(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():d,m=ee(d)?c?Wv:td:Al,g;if(xe(i)&&(~i.indexOf("random(")&&(i=ps(i)),i.charAt(1)==="="&&(g=yr(u,i)+(we(u)||0),(g||g===0)&&(i=g))),!h||u!==i||qo)return!isNaN(u*i)&&i!==""?(g=new ke(this._pt,t,e,+u||0,i-(u||0),typeof d=="boolean"?Yv:ed,0,m),c&&(g.fp=c),o&&g.modifier(o,this,t),this._pt=g):(!d&&!(e in t)&&Ml(e,i),zv.call(this,t,e,u,i,m,l||Ze.stringFilter,c))},kv=function(t,e,n,i,s){if(ee(t)&&(t=rs(t,s,e,n,i)),!Cn(t)||t.style&&t.nodeType||Pe(t)||xu(t))return xe(t)?rs(t,s,e,n,i):t;var a={},o;for(o in t)a[o]=rs(t[o],s,e,n,i);return a},Zu=function(t,e,n,i,s,a){var o,l,c,h;if(qe[t]&&(o=new qe[t]).init(s,o.rawVars?e[t]:kv(e[t],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new ke(n._pt,s,t,0,1,o.render,o,0,o.priority),n!==gr))for(c=n._ptLookup[n._targets.indexOf(s)],h=o._props.length;h--;)c[o._props[h]]=l;return o},ri,qo,bl=function r(t,e,n){var i=t.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.onUpdateParams,d=i.callbackScope,u=i.runBackwards,m=i.yoyoEase,g=i.keyframes,_=i.autoRevert,p=t._dur,f=t._startAt,M=t._targets,v=t.parent,y=v&&v.data==="nested"?v.vars.targets:M,S=t._overwrite==="auto"&&!_l,w=t.timeline,b,P,x,T,V,$,U,N,O,K,k,X,Q;if(w&&(!g||!s)&&(s="none"),t._ease=Fi(s,Pr.ease),t._yEase=m?qu(Fi(m===!0?s:m,Pr.ease)):0,m&&t._yoyo&&!t._repeat&&(m=t._yEase,t._yEase=t._ease,t._ease=m),t._from=!w&&!!i.runBackwards,!w||g&&!i.stagger){if(N=M[0]?Ii(M[0]).harness:0,X=N&&i[N.prop],b=fa(i,yl),f&&(f._zTime<0&&f.progress(1),e<0&&u&&o&&!_?f.render(-1,!0):f.revert(u&&p?ta:pv),f._lazy=0),a){if(ui(t._startAt=le.set(M,hn({data:"isStart",overwrite:!1,parent:v,immediateRender:!0,lazy:!f&&Be(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:h,callbackScope:d,stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Ce||!o&&!_)&&t._startAt.revert(ta),o&&p&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(u&&p&&!f){if(e&&(o=!1),x=hn({overwrite:!1,data:"isFromStart",lazy:o&&!f&&Be(l),immediateRender:o,stagger:0,parent:v},b),X&&(x[N.prop]=X),ui(t._startAt=le.set(M,x)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Ce?t._startAt.revert(ta):t._startAt.render(-1,!0)),t._zTime=e,!o)r(t._startAt,Yt,Yt);else if(!e)return}for(t._pt=t._ptCache=0,l=p&&Be(l)||l&&!p,P=0;P<M.length;P++){if(V=M[P],U=V._gsap||El(M)[P]._gsap,t._ptLookup[P]=K={},Vo[U.id]&&li.length&&da(),k=y===M?P:y.indexOf(V),N&&(O=new N).init(V,X||b,t,k,y)!==!1&&(t._pt=T=new ke(t._pt,V,O.name,0,1,O.render,O,0,O.priority),O._props.forEach(function(Z){K[Z]=T}),O.priority&&($=1)),!N||X)for(x in b)qe[x]&&(O=Zu(x,b,t,k,V,y))?O.priority&&($=1):K[x]=T=Tl.call(t,V,x,"get",b[x],k,y,0,i.stringFilter);t._op&&t._op[P]&&t.kill(V,t._op[P]),S&&t._pt&&(ri=t,Kt.killTweensOf(V,K,t.globalTime(e)),Q=!t.parent,ri=0),t._pt&&l&&(Vo[U.id]=1)}$&&id(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!Q,g&&e<=0&&w.render(an,!0,!0)},Vv=function(t,e,n,i,s,a,o){var l=(t._pt&&t._ptCache||(t._ptCache={}))[e],c,h,d,u;if(!l)for(l=t._ptCache[e]=[],d=t._ptLookup,u=t._targets.length;u--;){if(c=d[u][e],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==e&&c.fp!==e;)c=c._next;if(!c)return qo=1,t.vars[e]="+=0",bl(t,o),qo=0,1;l.push(c)}for(u=l.length;u--;)h=l[u],c=h._pt||h,c.s=(i||i===0)&&!s?i:c.s+(i||0)+a*c.c,c.c=n-c.s,h.e&&(h.e=re(n)+we(h.e)),h.b&&(h.b=c.s+we(h.b))},Hv=function(t,e){var n=t[0]?Ii(t[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return e;s=zi({},e);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},Gv=function(t,e,n,i){var s=e.ease||i||"power1.inOut",a,o;if(Pe(e))o=n[t]||(n[t]=[]),e.forEach(function(l,c){return o.push({t:c/(e.length-1)*100,v:l,e:s})});else for(a in e)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:s})},rs=function(t,e,n,i,s){return ee(t)?t.call(e,n,i,s):xe(t)&&~t.indexOf("random(")?ps(t):t},Ju=Sl+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Qu={};ze(Ju+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Qu[r]=1});var le=function(r){gu(t,r);function t(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:ns(i))||this;var l=o.vars,c=l.duration,h=l.delay,d=l.immediateRender,u=l.stagger,m=l.overwrite,g=l.keyframes,_=l.defaults,p=l.scrollTrigger,f=l.yoyoEase,M=i.parent||Kt,v=(Pe(n)||xu(n)?$n(n[0]):"length"in i)?[n]:on(n),y,S,w,b,P,x,T,V;if(o._targets=v.length?El(v):ua("GSAP target "+n+" not found. https://greensock.com",!Ze.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=m,g||u||js(c)||js(h)){if(i=o.vars,y=o.timeline=new Oe({data:"nested",defaults:_||{},targets:M&&M.data==="nested"?M.vars.targets:v}),y.kill(),y.parent=y._dp=Bn(o),y._start=0,u||js(c)||js(h)){if(b=v.length,T=u&&Ou(u),Cn(u))for(P in u)~Ju.indexOf(P)&&(V||(V={}),V[P]=u[P]);for(S=0;S<b;S++)w=fa(i,Qu),w.stagger=0,f&&(w.yoyoEase=f),V&&zi(w,V),x=v[S],w.duration=+rs(c,Bn(o),S,x,v),w.delay=(+rs(h,Bn(o),S,x,v)||0)-o._delay,!u&&b===1&&w.delay&&(o._delay=h=w.delay,o._start+=h,w.delay=0),y.to(x,w,T?T(S,x,v):0),y._ease=Bt.none;y.duration()?c=h=0:o.timeline=0}else if(g){ns(hn(y.vars.defaults,{ease:"none"})),y._ease=Fi(g.ease||i.ease||"none");var $=0,U,N,O;if(Pe(g))g.forEach(function(K){return y.to(v,K,">")}),y.duration();else{w={};for(P in g)P==="ease"||P==="easeEach"||Gv(P,g[P],w,g.easeEach);for(P in w)for(U=w[P].sort(function(K,k){return K.t-k.t}),$=0,S=0;S<U.length;S++)N=U[S],O={ease:N.e,duration:(N.t-(S?U[S-1].t:0))/100*c},O[P]=N.v,y.to(v,O,$),$+=O.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||o.duration(c=y.duration())}else o.timeline=0;return m===!0&&!_l&&(ri=Bn(o),Kt.killTweensOf(v),ri=0),Tn(M,Bn(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(d||!c&&!g&&o._start===Ee(M._time)&&Be(d)&&Mv(Bn(o))&&M.data!=="nested")&&(o._tTime=-Yt,o.render(Math.max(0,-h)||0)),p&&Uu(Bn(o),p),o}var e=t.prototype;return e.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,h=i<0,d=i>l-Yt&&!h?l:i<Yt?0:i,u,m,g,_,p,f,M,v,y;if(!c)Sv(this,i,s,a);else if(d!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h){if(u=d,v=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,s,a);if(u=Ee(d%_),d===l?(g=this._repeat,u=c):(g=~~(d/_),g&&g===d/_&&(u=c,g--),u>c&&(u=c)),f=this._yoyo&&g&1,f&&(y=this._yEase,u=c-u),p=Lr(this._tTime,_),u===o&&!a&&this._initted)return this._tTime=d,this;g!==p&&(v&&this._yEase&&$u(v,f),this.vars.repeatRefresh&&!f&&!this._lock&&(this._lock=a=1,this.render(Ee(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(Iu(this,h?i:u,a,s,d))return this._tTime=0,this;if(o!==this._time)return this;if(c!==this._dur)return this.render(i,s,a)}if(this._tTime=d,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=M=(y||this._ease)(u/c),this._from&&(this.ratio=M=1-M),u&&!o&&!s&&!g&&(ln(this,"onStart"),this._tTime!==d))return this;for(m=this._pt;m;)m.r(M,m.d),m=m._next;v&&v.render(i<0?i:!u&&f?-Yt:v._dur*v._ease(u/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&Ho(this,i,s,a),ln(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!s&&this.parent&&ln(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(h&&!this._onUpdate&&Ho(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&ui(this,1),!s&&!(h&&!o)&&(d||o||f)&&(ln(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,a,o){ms||je.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||bl(this,l),c=this._ease(l/this._dur),Vv(this,i,s,a,o,c,l)?this.resetTo(i,s,a,o):(Ta(this,0),this.parent||Lu(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?$r(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,ri&&ri.vars.overwrite!==!0)._first||$r(this),this.parent&&a!==this.timeline.totalDuration()&&Dr(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?on(i):o,c=this._ptLookup,h=this._pt,d,u,m,g,_,p,f;if((!s||s==="all")&&vv(o,l))return s==="all"&&(this._pt=0),$r(this);for(d=this._op=this._op||[],s!=="all"&&(xe(s)&&(_={},ze(s,function(M){return _[M]=1}),s=_),s=Hv(o,s)),f=o.length;f--;)if(~l.indexOf(o[f])){u=c[f],s==="all"?(d[f]=s,g=u,m={}):(m=d[f]=d[f]||{},g=s);for(_ in g)p=u&&u[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&Sa(this,p,"_pt"),delete u[_]),m!=="all"&&(m[_]=1)}return this._initted&&!this._pt&&h&&$r(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return is(1,arguments)},t.delayedCall=function(i,s,a,o){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(i,s,a){return is(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,a){return Kt.killTweensOf(i,s,a)},t}(_s);hn(le.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ze("staggerTo,staggerFrom,staggerFromTo",function(r){le[r]=function(){var t=new Oe,e=Wo.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var Al=function(t,e,n){return t[e]=n},td=function(t,e,n){return t[e](n)},Wv=function(t,e,n,i){return t[e](i.fp,n)},Xv=function(t,e,n){return t.setAttribute(e,n)},wl=function(t,e){return ee(t[e])?td:gl(t[e])&&t.setAttribute?Xv:Al},ed=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},Yv=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},nd=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Rl=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},qv=function(t,e,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(t,e,n),s=a},$v=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Sa(this,e,"_pt"):e.dep||(n=1),e=i;return!n},jv=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},id=function(t){for(var e=t._pt,n,i,s,a;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:a)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:a=e,e=n}t._pt=s},ke=function(){function r(e,n,i,s,a,o,l,c,h){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||ed,this.d=l||this,this.set=c||Al,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=jv,this.m=n,this.mt=s,this.tween=i},r}();ze(Sl+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return yl[r]=1});Je.TweenMax=Je.TweenLite=le;Je.TimelineLite=Je.TimelineMax=Oe;Kt=new Oe({sortChildren:!1,defaults:Pr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ze.stringFilter=Yu;var Oi=[],na={},Kv=[],yh=0,Zv=0,go=function(t){return(na[t]||Kv).map(function(e){return e()})},$o=function(){var t=Date.now(),e=[];t-yh>2&&(go("matchMediaInit"),Oi.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=nn.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&e.push(n))}),go("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n)}),yh=t,go("matchMedia"))},rd=function(){function r(e,n){this.selector=n&&Xo(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Zv++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){ee(n)&&(s=i,i=n,n=ee);var a=this,o=function(){var c=te,h=a.selector,d;return c&&c!==a&&c.data.push(a),s&&(a.selector=Xo(s)),te=a,d=i.apply(a,arguments),ee(d)&&a._r.push(d),te=c,a.selector=h,a.isReverted=!1,d};return a.last=o,n===ee?o(a):n?a[n]=o:o},t.ignore=function(n){var i=te;te=null,n(this),te=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof le&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n){var a=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}))}),a.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1/0}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof le)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,s)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),i)for(var o=Oi.length;o--;)Oi[o].id===this.id&&Oi.splice(o,1)},t.revert=function(n){this.kill(n||{})},r}(),Jv=function(){function r(e){this.contexts=[],this.scope=e}var t=r.prototype;return t.add=function(n,i,s){Cn(n)||(n={matches:n});var a=new rd(0,s||this.scope),o=a.conditions={},l,c,h;te&&!a.selector&&(a.selector=te.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?h=1:(l=nn.matchMedia(n[c]),l&&(Oi.indexOf(a)<0&&Oi.push(a),(o[c]=l.matches)&&(h=1),l.addListener?l.addListener($o):l.addEventListener("change",$o)));return h&&i(a),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),ma={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return Gu(i)})},timeline:function(t){return new Oe(t)},getTweensOf:function(t,e){return Kt.getTweensOf(t,e)},getProperty:function(t,e,n,i){xe(t)&&(t=on(t)[0]);var s=Ii(t||{}).get,a=n?Pu:Cu;return n==="native"&&(n=""),t&&(e?a((qe[e]&&qe[e].get||s)(t,e,n,i)):function(o,l,c){return a((qe[o]&&qe[o].get||s)(t,o,l,c))})},quickSetter:function(t,e,n){if(t=on(t),t.length>1){var i=t.map(function(h){return Ve.quickSetter(h,e,n)}),s=i.length;return function(h){for(var d=s;d--;)i[d](h)}}t=t[0]||{};var a=qe[e],o=Ii(t),l=o.harness&&(o.harness.aliases||{})[e]||e,c=a?function(h){var d=new a;gr._pt=0,d.init(t,n?h+n:h,gr,0,[t]),d.render(1,d),gr._pt&&Rl(1,gr)}:o.set(t,l);return a?c:function(h){return c(t,l,n?h+n:h,o,1)}},quickTo:function(t,e,n){var i,s=Ve.to(t,zi((i={},i[e]="+=0.1",i.paused=!0,i),n||{})),a=function(l,c,h){return s.resetTo(e,l,c,h)};return a.tween=s,a},isTweening:function(t){return Kt.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Fi(t.ease,Pr.ease)),_h(Pr,t||{})},config:function(t){return _h(Ze,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,a=t.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!qe[o]&&!Je[o]&&ua(e+" effect requires "+o+" plugin.")}),fo[e]=function(o,l,c){return n(on(o),hn(l||{},s),c)},a&&(Oe.prototype[e]=function(o,l,c){return this.add(fo[e](o,Cn(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){Bt[t]=Fi(e)},parseEase:function(t,e){return arguments.length?Fi(t,e):Bt},getById:function(t){return Kt.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Oe(t),i,s;for(n.smoothChildTiming=Be(t.smoothChildTiming),Kt.remove(n),n._dp=0,n._time=n._tTime=Kt._time,i=Kt._first;i;)s=i._next,(e||!(!i._dur&&i instanceof le&&i.vars.onComplete===i._targets[0]))&&Tn(n,i,i._start-i._delay),i=s;return Tn(Kt,n,0),n},context:function(t,e){return t?new rd(t,e):te},matchMedia:function(t){return new Jv(t)},matchMediaRefresh:function(){return Oi.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||$o()},addEventListener:function(t,e){var n=na[t]||(na[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=na[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:Pv,wrapYoyo:Lv,distribute:Ou,random:zu,snap:Bu,normalize:Cv,getUnit:we,clamp:bv,splitColor:Wu,toArray:on,selector:Xo,mapRange:Vu,pipe:wv,unitize:Rv,interpolate:Dv,shuffle:Fu},install:Tu,effects:fo,ticker:je,updateRoot:Oe.updateRoot,plugins:qe,globalTimeline:Kt,core:{PropTween:ke,globals:bu,Tween:le,Timeline:Oe,Animation:_s,getCache:Ii,_removeLinkedListItem:Sa,reverting:function(){return Ce},context:function(t){return t&&te&&(te.data.push(t),t._ctx=te),te},suppressOverwrites:function(t){return _l=t}}};ze("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return ma[r]=le[r]});je.add(Oe.updateRoot);gr=ma.to({},{duration:0});var Qv=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},tx=function(t,e){var n=t._targets,i,s,a;for(i in e)for(s=n.length;s--;)a=t._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=Qv(a,i)),a&&a.modifier&&a.modifier(e[i],t,n[s],i))},vo=function(t,e){return{name:t,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(xe(s)&&(l={},ze(s,function(h){return l[h]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}tx(o,s)}}}},Ve=ma.registerPlugin({name:"attr",init:function(t,e,n,i,s){var a,o,l;this.tween=n;for(a in e)l=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(l||0)+"",e[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)Ce?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},vo("roundProps",Yo),vo("modifiers"),vo("snap",Bu))||ma;le.version=Oe.version=Ve.version="3.12.2";Eu=1;vl()&&Ur();Bt.Power0;Bt.Power1;Bt.Power2;Bt.Power3;Bt.Power4;Bt.Linear;Bt.Quad;Bt.Cubic;Bt.Quart;Bt.Quint;Bt.Strong;Bt.Elastic;Bt.Back;Bt.SteppedEase;Bt.Bounce;Bt.Sine;Bt.Expo;Bt.Circ;/*!
 * CSSPlugin 3.12.2
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Sh,si,Sr,Cl,Ci,Eh,Pl,ex=function(){return typeof window<"u"},jn={},Ti=180/Math.PI,Er=Math.PI/180,ur=Math.atan2,Th=1e8,Ll=/([A-Z])/g,nx=/(left|right|width|margin|padding|x)/i,ix=/[\s,\(]\S/,bn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},jo=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},rx=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},sx=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},ax=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},sd=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},ad=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},ox=function(t,e,n){return t.style[e]=n},lx=function(t,e,n){return t.style.setProperty(e,n)},cx=function(t,e,n){return t._gsap[e]=n},hx=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},ux=function(t,e,n,i,s){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},dx=function(t,e,n,i,s){var a=t._gsap;a[e]=n,a.renderTransform(s,a)},Zt="transform",xn=Zt+"Origin",fx=function r(t,e){var n=this,i=this.target,s=i.style;if(t in jn&&s){if(this.tfm=this.tfm||{},t!=="transform")t=bn[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=zn(i,a)}):this.tfm[t]=i._gsap.x?i._gsap[t]:zn(i,t);else return bn.transform.split(",").forEach(function(a){return r.call(n,a,e)});if(this.props.indexOf(Zt)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(xn,e,"")),t=Zt}(s||e)&&this.props.push(t,e,s[t])},od=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},px=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,a;for(s=0;s<t.length;s+=3)t[s+1]?e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(Ll,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=Pl(),(!s||!s.isStart)&&!n[Zt]&&(od(n),i.uncache=1)}},ld=function(t,e){var n={target:t,props:[],revert:px,save:fx};return t._gsap||Ve.core.getCache(t),e&&e.split(",").forEach(function(i){return n.save(i)}),n},cd,Ko=function(t,e){var n=si.createElementNS?si.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):si.createElement(t);return n.style?n:si.createElement(t)},wn=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Ll,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,Ir(e)||e,1)||""},bh="O,Moz,ms,Ms,Webkit".split(","),Ir=function(t,e,n){var i=e||Ci,s=i.style,a=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(bh[a]+t in s););return a<0?null:(a===3?"ms":a>=0?bh[a]:"")+t},Zo=function(){ex()&&window.document&&(Sh=window,si=Sh.document,Sr=si.documentElement,Ci=Ko("div")||{style:{}},Ko("div"),Zt=Ir(Zt),xn=Zt+"Origin",Ci.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",cd=!!Ir("perspective"),Pl=Ve.core.reverting,Cl=1)},xo=function r(t){var e=Ko("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,a;if(Sr.appendChild(e),e.appendChild(this),this.style.display="block",t)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(a=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),Sr.removeChild(e),this.style.cssText=s,a},Ah=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},hd=function(t){var e;try{e=t.getBBox()}catch{e=xo.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===xo||(e=xo.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+Ah(t,["x","cx","x1"])||0,y:+Ah(t,["y","cy","y1"])||0,width:0,height:0}:e},ud=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&hd(t))},gs=function(t,e){if(e){var n=t.style;e in jn&&e!==xn&&(e=Zt),n.removeProperty?((e.substr(0,2)==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(e.replace(Ll,"-$1").toLowerCase())):n.removeAttribute(e)}},ai=function(t,e,n,i,s,a){var o=new ke(t._pt,e,n,0,1,a?ad:sd);return t._pt=o,o.b=i,o.e=s,t._props.push(n),o},wh={deg:1,rad:1,turn:1},mx={grid:1,flex:1},di=function r(t,e,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Ci.style,l=nx.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),d=100,u=i==="px",m=i==="%",g,_,p,f;return i===a||!s||wh[i]||wh[a]?s:(a!=="px"&&!u&&(s=r(t,e,n,"px")),f=t.getCTM&&ud(t),(m||a==="%")&&(jn[e]||~e.indexOf("adius"))?(g=f?t.getBBox()[l?"width":"height"]:t[h],re(m?s/g*d:s/100*g)):(o[l?"width":"height"]=d+(u?a:i),_=~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,f&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===si||!_.appendChild)&&(_=si.body),p=_._gsap,p&&m&&p.width&&l&&p.time===je.time&&!p.uncache?re(s/p.width*d):((m||a==="%")&&!mx[wn(_,"display")]&&(o.position=wn(t,"position")),_===t&&(o.position="static"),_.appendChild(Ci),g=Ci[h],_.removeChild(Ci),o.position="absolute",l&&m&&(p=Ii(_),p.time=je.time,p.width=_[h]),re(u?g*s/d:g&&s?d/g*s:0))))},zn=function(t,e,n,i){var s;return Cl||Zo(),e in bn&&e!=="transform"&&(e=bn[e],~e.indexOf(",")&&(e=e.split(",")[0])),jn[e]&&e!=="transform"?(s=xs(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:ga(wn(t,xn))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=_a[e]&&_a[e](t,e,n)||wn(t,e)||wu(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?di(t,e,s,n)+n:s},_x=function(t,e,n,i){if(!n||n==="none"){var s=Ir(e,t,1),a=s&&wn(t,s,1);a&&a!==n?(e=s,n=a):e==="borderColor"&&(n=wn(t,"borderTopColor"))}var o=new ke(this._pt,t.style,e,0,1,nd),l=0,c=0,h,d,u,m,g,_,p,f,M,v,y,S;if(o.b=n,o.e=i,n+="",i+="",i==="auto"&&(t.style[e]=i,i=wn(t,e)||i,t.style[e]=n),h=[n,i],Yu(h),n=h[0],i=h[1],u=n.match(_r)||[],S=i.match(_r)||[],S.length){for(;d=_r.exec(i);)p=d[0],M=i.substring(l,d.index),g?g=(g+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(g=1),p!==(_=u[c++]||"")&&(m=parseFloat(_)||0,y=_.substr((m+"").length),p.charAt(1)==="="&&(p=yr(m,p)+y),f=parseFloat(p),v=p.substr((f+"").length),l=_r.lastIndex-v.length,v||(v=v||Ze.units[e]||y,l===i.length&&(i+=v,o.e+=v)),y!==v&&(m=di(t,e,_,v)||0),o._pt={_next:o._pt,p:M||c===1?M:",",s:m,c:f-m,m:g&&g<4||e==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=e==="display"&&i==="none"?ad:sd;return yu.test(i)&&(o.e=0),this._pt=o,o},Rh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},gx=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Rh[n]||n,e[1]=Rh[i]||i,e.join(" ")},vx=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],jn[o]&&(l=1,o=o==="transformOrigin"?xn:Zt),gs(n,o);l&&(gs(n,Zt),a&&(a.svg&&n.removeAttribute("transform"),xs(n,1),a.uncache=1,od(i)))}},_a={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var a=t._pt=new ke(t._pt,e,n,0,0,vx);return a.u=i,a.pr=-10,a.tween=s,t._props.push(n),1}}},vs=[1,0,0,1,0,0],dd={},fd=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Ch=function(t){var e=wn(t,Zt);return fd(e)?vs:e.substr(7).match(Mu).map(re)},Dl=function(t,e){var n=t._gsap||Ii(t),i=t.style,s=Ch(t),a,o,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?vs:s):(s===vs&&!t.offsetParent&&t!==Sr&&!n.svg&&(l=i.display,i.display="block",a=t.parentNode,(!a||!t.offsetParent)&&(c=1,o=t.nextElementSibling,Sr.appendChild(t)),s=Ch(t),l?i.display=l:gs(t,"display"),c&&(o?a.insertBefore(t,o):a?a.appendChild(t):Sr.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Jo=function(t,e,n,i,s,a){var o=t._gsap,l=s||Dl(t,!0),c=o.xOrigin||0,h=o.yOrigin||0,d=o.xOffset||0,u=o.yOffset||0,m=l[0],g=l[1],_=l[2],p=l[3],f=l[4],M=l[5],v=e.split(" "),y=parseFloat(v[0])||0,S=parseFloat(v[1])||0,w,b,P,x;n?l!==vs&&(b=m*p-g*_)&&(P=y*(p/b)+S*(-_/b)+(_*M-p*f)/b,x=y*(-g/b)+S*(m/b)-(m*M-g*f)/b,y=P,S=x):(w=hd(t),y=w.x+(~v[0].indexOf("%")?y/100*w.width:y),S=w.y+(~(v[1]||v[0]).indexOf("%")?S/100*w.height:S)),i||i!==!1&&o.smooth?(f=y-c,M=S-h,o.xOffset=d+(f*m+M*_)-f,o.yOffset=u+(f*g+M*p)-M):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=S,o.smooth=!!i,o.origin=e,o.originIsAbsolute=!!n,t.style[xn]="0px 0px",a&&(ai(a,o,"xOrigin",c,y),ai(a,o,"yOrigin",h,S),ai(a,o,"xOffset",d,o.xOffset),ai(a,o,"yOffset",u,o.yOffset)),t.setAttribute("data-svg-origin",y+" "+S)},xs=function(t,e){var n=t._gsap||new Ku(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(t),c=wn(t,xn)||"0",h,d,u,m,g,_,p,f,M,v,y,S,w,b,P,x,T,V,$,U,N,O,K,k,X,Q,Z,z,G,ot,it,at;return h=d=u=_=p=f=M=v=y=0,m=g=1,n.svg=!!(t.getCTM&&ud(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Zt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Zt]!=="none"?l[Zt]:"")),i.scale=i.rotate=i.translate="none"),b=Dl(t,n.svg),n.svg&&(n.uncache?(X=t.getBBox(),c=n.xOrigin-X.x+"px "+(n.yOrigin-X.y)+"px",k=""):k=!e&&t.getAttribute("data-svg-origin"),Jo(t,k||c,!!k||n.originIsAbsolute,n.smooth!==!1,b)),S=n.xOrigin||0,w=n.yOrigin||0,b!==vs&&(V=b[0],$=b[1],U=b[2],N=b[3],h=O=b[4],d=K=b[5],b.length===6?(m=Math.sqrt(V*V+$*$),g=Math.sqrt(N*N+U*U),_=V||$?ur($,V)*Ti:0,M=U||N?ur(U,N)*Ti+_:0,M&&(g*=Math.abs(Math.cos(M*Er))),n.svg&&(h-=S-(S*V+w*U),d-=w-(S*$+w*N))):(at=b[6],ot=b[7],Z=b[8],z=b[9],G=b[10],it=b[11],h=b[12],d=b[13],u=b[14],P=ur(at,G),p=P*Ti,P&&(x=Math.cos(-P),T=Math.sin(-P),k=O*x+Z*T,X=K*x+z*T,Q=at*x+G*T,Z=O*-T+Z*x,z=K*-T+z*x,G=at*-T+G*x,it=ot*-T+it*x,O=k,K=X,at=Q),P=ur(-U,G),f=P*Ti,P&&(x=Math.cos(-P),T=Math.sin(-P),k=V*x-Z*T,X=$*x-z*T,Q=U*x-G*T,it=N*T+it*x,V=k,$=X,U=Q),P=ur($,V),_=P*Ti,P&&(x=Math.cos(P),T=Math.sin(P),k=V*x+$*T,X=O*x+K*T,$=$*x-V*T,K=K*x-O*T,V=k,O=X),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,f=180-f),m=re(Math.sqrt(V*V+$*$+U*U)),g=re(Math.sqrt(K*K+at*at)),P=ur(O,K),M=Math.abs(P)>2e-4?P*Ti:0,y=it?1/(it<0?-it:it):0),n.svg&&(k=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!fd(wn(t,Zt)),k&&t.setAttribute("transform",k))),Math.abs(M)>90&&Math.abs(M)<270&&(s?(m*=-1,M+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,M+=M<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=d-((n.yPercent=d&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-d)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=u+a,n.scaleX=re(m),n.scaleY=re(g),n.rotation=re(_)+o,n.rotationX=re(p)+o,n.rotationY=re(f)+o,n.skewX=M+o,n.skewY=v+o,n.transformPerspective=y+a,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(i[xn]=ga(c)),n.xOffset=n.yOffset=0,n.force3D=Ze.force3D,n.renderTransform=n.svg?Mx:cd?pd:xx,n.uncache=0,n},ga=function(t){return(t=t.split(" "))[0]+" "+t[1]},Mo=function(t,e,n){var i=we(e);return re(parseFloat(e)+parseFloat(di(t,"x",n+"px",i)))+i},xx=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,pd(t,e)},Mi="0deg",Yr="0px",yi=") ",pd=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,h=n.rotationY,d=n.rotationX,u=n.skewX,m=n.skewY,g=n.scaleX,_=n.scaleY,p=n.transformPerspective,f=n.force3D,M=n.target,v=n.zOrigin,y="",S=f==="auto"&&t&&t!==1||f===!0;if(v&&(d!==Mi||h!==Mi)){var w=parseFloat(h)*Er,b=Math.sin(w),P=Math.cos(w),x;w=parseFloat(d)*Er,x=Math.cos(w),a=Mo(M,a,b*x*-v),o=Mo(M,o,-Math.sin(w)*-v),l=Mo(M,l,P*x*-v+v)}p!==Yr&&(y+="perspective("+p+yi),(i||s)&&(y+="translate("+i+"%, "+s+"%) "),(S||a!==Yr||o!==Yr||l!==Yr)&&(y+=l!==Yr||S?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+yi),c!==Mi&&(y+="rotate("+c+yi),h!==Mi&&(y+="rotateY("+h+yi),d!==Mi&&(y+="rotateX("+d+yi),(u!==Mi||m!==Mi)&&(y+="skew("+u+", "+m+yi),(g!==1||_!==1)&&(y+="scale("+g+", "+_+yi),M.style[Zt]=y||"translate(0, 0)"},Mx=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,h=n.skewY,d=n.scaleX,u=n.scaleY,m=n.target,g=n.xOrigin,_=n.yOrigin,p=n.xOffset,f=n.yOffset,M=n.forceCSS,v=parseFloat(a),y=parseFloat(o),S,w,b,P,x;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=Er,c*=Er,S=Math.cos(l)*d,w=Math.sin(l)*d,b=Math.sin(l-c)*-u,P=Math.cos(l-c)*u,c&&(h*=Er,x=Math.tan(c-h),x=Math.sqrt(1+x*x),b*=x,P*=x,h&&(x=Math.tan(h),x=Math.sqrt(1+x*x),S*=x,w*=x)),S=re(S),w=re(w),b=re(b),P=re(P)):(S=d,P=u,w=b=0),(v&&!~(a+"").indexOf("px")||y&&!~(o+"").indexOf("px"))&&(v=di(m,"x",a,"px"),y=di(m,"y",o,"px")),(g||_||p||f)&&(v=re(v+g-(g*S+_*b)+p),y=re(y+_-(g*w+_*P)+f)),(i||s)&&(x=m.getBBox(),v=re(v+i/100*x.width),y=re(y+s/100*x.height)),x="matrix("+S+","+w+","+b+","+P+","+v+","+y+")",m.setAttribute("transform",x),M&&(m.style[Zt]=x)},yx=function(t,e,n,i,s){var a=360,o=xe(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Ti:1),c=l-i,h=i+c+"deg",d,u;return o&&(d=s.split("_")[1],d==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),d==="cw"&&c<0?c=(c+a*Th)%a-~~(c/a)*a:d==="ccw"&&c>0&&(c=(c-a*Th)%a-~~(c/a)*a)),t._pt=u=new ke(t._pt,e,n,i,c,rx),u.e=h,u.u="deg",t._props.push(n),u},Ph=function(t,e){for(var n in e)t[n]=e[n];return t},Sx=function(t,e,n){var i=Ph({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,h,d,u,m,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Zt]=e,o=xs(n,1),gs(n,Zt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Zt],a[Zt]=e,o=xs(n,1),a[Zt]=c);for(l in jn)c=i[l],h=o[l],c!==h&&s.indexOf(l)<0&&(m=we(c),g=we(h),d=m!==g?di(n,l,c,g):parseFloat(c),u=parseFloat(h),t._pt=new ke(t._pt,o,l,d,u-d,jo),t._pt.u=g||0,t._props.push(l));Ph(o,i)};ze("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",a=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(o){return t<2?r+o:"border"+o+r});_a[t>1?"border"+r:r]=function(o,l,c,h,d){var u,m;if(arguments.length<4)return u=a.map(function(g){return zn(o,g,c)}),m=u.join(" "),m.split(u[0]).length===5?u[0]:m;u=(h+"").split(" "),m={},a.forEach(function(g,_){return m[g]=u[_]=u[_]||u[(_-1)/2|0]}),o.init(l,m,d)}});var md={name:"css",register:Zo,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var a=this._props,o=t.style,l=n.vars.startAt,c,h,d,u,m,g,_,p,f,M,v,y,S,w,b,P;Cl||Zo(),this.styles=this.styles||ld(t),P=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(h=e[_],!(qe[_]&&Zu(_,e,n,i,t,s)))){if(m=typeof h,g=_a[_],m==="function"&&(h=h.call(n,i,t,s),m=typeof h),m==="string"&&~h.indexOf("random(")&&(h=ps(h)),g)g(this,t,_,h,n)&&(b=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),h+="",ci.lastIndex=0,ci.test(c)||(p=we(c),f=we(h)),f?p!==f&&(c=di(t,_,c,f)+f):p&&(h+=p),this.add(o,"setProperty",c,h,i,s,0,0,_),a.push(_),P.push(_,0,o[_]);else if(m!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,t,s):l[_],xe(c)&&~c.indexOf("random(")&&(c=ps(c)),we(c+"")||(c+=Ze.units[_]||we(zn(t,_))||""),(c+"").charAt(1)==="="&&(c=zn(t,_))):c=zn(t,_),u=parseFloat(c),M=m==="string"&&h.charAt(1)==="="&&h.substr(0,2),M&&(h=h.substr(2)),d=parseFloat(h),_ in bn&&(_==="autoAlpha"&&(u===1&&zn(t,"visibility")==="hidden"&&d&&(u=0),P.push("visibility",0,o.visibility),ai(this,o,"visibility",u?"inherit":"hidden",d?"inherit":"hidden",!d)),_!=="scale"&&_!=="transform"&&(_=bn[_],~_.indexOf(",")&&(_=_.split(",")[0]))),v=_ in jn,v){if(this.styles.save(_),y||(S=t._gsap,S.renderTransform&&!e.parseTransform||xs(t,e.parseTransform),w=e.smoothOrigin!==!1&&S.smooth,y=this._pt=new ke(this._pt,o,Zt,0,1,S.renderTransform,S,0,-1),y.dep=1),_==="scale")this._pt=new ke(this._pt,S,"scaleY",S.scaleY,(M?yr(S.scaleY,M+d):d)-S.scaleY||0,jo),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){P.push(xn,0,o[xn]),h=gx(h),S.svg?Jo(t,h,0,w,0,this):(f=parseFloat(h.split(" ")[2])||0,f!==S.zOrigin&&ai(this,S,"zOrigin",S.zOrigin,f),ai(this,o,_,ga(c),ga(h)));continue}else if(_==="svgOrigin"){Jo(t,h,1,w,0,this);continue}else if(_ in dd){yx(this,S,_,u,M?yr(u,M+h):h);continue}else if(_==="smoothOrigin"){ai(this,S,"smooth",S.smooth,h);continue}else if(_==="force3D"){S[_]=h;continue}else if(_==="transform"){Sx(this,h,t);continue}}else _ in o||(_=Ir(_)||_);if(v||(d||d===0)&&(u||u===0)&&!ix.test(h)&&_ in o)p=(c+"").substr((u+"").length),d||(d=0),f=we(h)||(_ in Ze.units?Ze.units[_]:p),p!==f&&(u=di(t,_,c,f)),this._pt=new ke(this._pt,v?S:o,_,u,(M?yr(u,M+d):d)-u,!v&&(f==="px"||_==="zIndex")&&e.autoRound!==!1?ax:jo),this._pt.u=f||0,p!==f&&f!=="%"&&(this._pt.b=c,this._pt.r=sx);else if(_ in o)_x.call(this,t,_,c,M?M+h:h);else if(_ in t)this.add(t,_,c||t[_],M?M+h:h,i,s);else if(_!=="parseTransform"){Ml(_,h);continue}v||(_ in o?P.push(_,0,o[_]):P.push(_,1,c||t[_])),a.push(_)}}b&&id(this)},render:function(t,e){if(e.tween._time||!Pl())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:zn,aliases:bn,getSetter:function(t,e,n){var i=bn[e];return i&&i.indexOf(",")<0&&(e=i),e in jn&&e!==xn&&(t._gsap.x||zn(t,"x"))?n&&Eh===n?e==="scale"?hx:cx:(Eh=n||{})&&(e==="scale"?ux:dx):t.style&&!gl(t.style[e])?ox:~e.indexOf("-")?lx:wl(t,e)},core:{_removeProperty:gs,_getMatrix:Dl}};Ve.utils.checkPrefix=Ir;Ve.core.getStyleSaver=ld;(function(r,t,e,n){var i=ze(r+","+t+","+e,function(s){jn[s]=1});ze(t,function(s){Ze.units[s]="deg",dd[s]=1}),bn[i[13]]=r+","+t,ze(n,function(s){var a=s.split(":");bn[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ze("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Ze.units[r]="px"});Ve.registerPlugin(md);var ss=Ve.registerPlugin(md)||Ve;ss.core.Tween;const _d={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class ba{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Ex=new hl(-1,1,1,-1,0,1),Ul=new Mn;Ul.setAttribute("position",new cn([-1,3,0,-1,-1,0,3,-1,0],3));Ul.setAttribute("uv",new cn([0,2,0,0,2,0],2));class Tx{constructor(t){this._mesh=new ve(Ul,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Ex)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Kr extends ba{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Ne?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=al.clone(t.uniforms),this.material=new Ne({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Tx(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Lh extends ba{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const i=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class bx extends ba{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class Ax{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new pt);this._width=n.width,this._height=n.height,e=new qn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ar}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Kr(_d),this.copyPass.material.blending=Gn,this.clock=new Z0}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Lh!==void 0&&(a instanceof Lh?n=!0:a instanceof bx&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new pt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class wx extends ba{constructor(t,e,n,i,s){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s!==void 0?s:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Tt}render(t,e,n){const i=t.autoClear;t.autoClear=!1;let s,a;this.overrideMaterial!==void 0&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(t.getClearColor(this._oldClearColor),s=t.getClearAlpha(),t.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor&&t.setClearColor(this._oldClearColor,s),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=a),t.autoClear=i}}const Rx={name:"VignetteShader",uniforms:{tDiffuse:{value:null},offset:{value:1},darkness:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float offset;
		uniform float darkness;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			// Eskil's vignette

			vec4 texel = texture2D( tDiffuse, vUv );
			vec2 uv = ( vUv - vec2( 0.5 ) ) * vec2( offset );
			gl_FragColor = vec4( mix( texel.rgb, vec3( 1.0 - darkness ), dot( uv, uv ) ), texel.a );

		}`},Cx={name:"HorizontalBlurShader",uniforms:{tDiffuse:{value:null},h:{value:1/512}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform float h;

		varying vec2 vUv;

		void main() {

			vec4 sum = vec4( 0.0 );

			sum += texture2D( tDiffuse, vec2( vUv.x - 4.0 * h, vUv.y ) ) * 0.051;
			sum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * h, vUv.y ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * h, vUv.y ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * h, vUv.y ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
			sum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * h, vUv.y ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * h, vUv.y ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * h, vUv.y ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * h, vUv.y ) ) * 0.051;

			gl_FragColor = sum;

		}`},Px={name:"VerticalBlurShader",uniforms:{tDiffuse:{value:null},v:{value:1/512}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform float v;

		varying vec2 vUv;

		void main() {

			vec4 sum = vec4( 0.0 );

			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 4.0 * v ) ) * 0.051;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 3.0 * v ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 2.0 * v ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 1.0 * v ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 1.0 * v ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 2.0 * v ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 3.0 * v ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 4.0 * v ) ) * 0.051;

			gl_FragColor = sum;

		}`};let Ks=250,Zs=50,Il=window.innerHeight,Nl=window.innerWidth,yo,Yn,Ri,bi,Zr,ia,ra,Dh,Uh,Ih,Nh,Fh,ye,Xe,So,Oh,sa,vr,Eo,Js,as,pr,aa,To,tn,bo,Ht,Jr,dr,Qo=[],ti=[],_n=[],Ai=[],oa,Ao;Lx();Dx();Ux();function Lx(){Ht="../textures/MainTexture/"}function Dx(){bo=[Ht+"skybox/posX.jpg",Ht+"skybox/negX.jpg",Ht+"skybox/posY.jpg",Ht+"skybox/negY.jpg",Ht+"skybox/posZ.jpg",Ht+"skybox/negZ.jpg",Ht+"flares/flare1.jpg",Ht+"flares/flare2.jpg",Ht+"flares/flare3.jpg",Ht+"flares/flare4.jpg",Ht+"flares/flare5.jpg",Ht+"earth/diffuse.jpg",Ht+"earth/bump.jpg",Ht+"earth/specular.jpg",Ht+"earth/clouds.png",Ht+"earth/night.jpg",Ht+"earth/moon.jpg",Ht+"earth/storm.png",Ht+"diffuses/south_america_diffuse.jpg",Ht+"diffuses/europe_diffuse.jpg",Ht+"diffuses/north_america_diffuse.jpg",Ht+"diffuses/africa_diffuse.jpg",Ht+"diffuses/asia_diffuse.jpg",Ht+"diffuses/australia_diffuse.jpg",Ht+"flares/sun.png"],Jr=new PxLoader;for(let e=0,n=bo.length;e<n;e++){let i=Jr.addImage(bo[e]);ti.push(i)}Jr.addEventListener("progress",r),Jr.addEventListener("complete",t);function r(e){let n=200;e.totalCount&&(n=Math.floor(n*e.completedCount/e.totalCount),document.getElementById("beginButton").style.width=n+"px")}function t(e){let n;for(let i=0,s=ti.length;i<s;i++){if(ti[i].crossOrigin=n,i>=0&&i<=5){let a=new he(ti[i]);a.anisotropy=8,a.needsUpdate=!0}if(i>=6&&i<=10){let a=new he(ti[i]);a.anisotropy=8,a.needsUpdate=!0,_n.push(a)}if(i>=11&&i<=17){let a=new he(ti[i]);a.anisotropy=8,a.needsUpdate=!0,Ai.push(a)}if(i>=18&&i<=23){let a=new he(ti[i]);a.anisotropy=8,a.needsUpdate=!0}i===24&&(oa=new he(ti[i]),oa.anisotropy=8,oa.needsUpdate=!0)}document.getElementById("loadingScreen").remove(),ss.to(document.getElementById("loadingScreen"),{duration:.6,onComplete:function(){ss.to([ia.uniforms.h,ra.uniforms.v],{duration:2,value:0/512,delay:.5,ease:"Linear.easeNone"}),ss.to(Zr.uniforms.offset,{duration:2,value:0,delay:.5,ease:"Cubic.easeOut",onComplete:function(){}})}}),Ix()}}function Ux(){let r=document.createElement("div");r.innerText="hello_world",r.id="loadingScreen";let t=document.createElement("img");t.id="imageContainer",t.src="../img/gui/loadingScreen.jpg",r.appendChild(t);let e=document.createElement("div");e.id="beginButton",r.appendChild(e),t.addEventListener("load",function(){document.body.appendChild(r),ss.to(r,{duration:.4,opacity:1,onComplete:function(){Jr.start()}})},!1)}function Ix(){Nx(),Fx(),Ox(),Bx(),zx(),kx(),Vx(),Wx(),Hx(),Gx(),gd()}function Nx(){Ri=new uu({antialias:!0,alpha:!0}),Ri.setSize(Nl,Il),Ri.setClearColor(0,1),Ri.sortObjects=!1,yo=Ri.domElement,yo.id="SpaceHtmlContainer",document.body.appendChild(yo)}function Fx(){let r=40,t=Nl/Il,e=1,n=4e4;as=new $e(r,t,e,n),as.position.set(-2e3,500,-1e3),as.lookAt(0,0,0)}function Ox(){pr=new Q0(as,Ri.domElement),pr.zoomSpeed=.07,pr.distance=900,pr.minDistance=900,pr.maxDistance=1120}function Bx(){Yn=new k0,Yn.background="#000000"}function zx(){{dr=new mu,dr.onStart=function(e,n,i){console.log("Started loading")},dr.onLoad=function(){console.log("Loading complete!"),Yn.background=t},dr.onProgress=function(e,n,i){console.log("Loading file: "+e+`.
Loaded `+n+" of "+i+" files.")},dr.onError=function(e){console.log("There was an error loading "+e)};let t=new X0(dr).load([Ht+"skybox/posX.jpg",Ht+"skybox/negX.jpg",Ht+"skybox/posY.jpg",Ht+"skybox/negY.jpg",Ht+"skybox/posZ.jpg",Ht+"skybox/negZ.jpg"])}}function kx(){{Dh=new H0({map:Ai[0],bumpMap:Ai[1],specularMap:Ai[2],shininess:40,bumpScale:2,specular:"#141310"});let r=new ii(Ks,Zs);ye=new ve(r,Dh),ye.rotation.y=Or.degToRad(180),ye.rotation.z=Or.degToRad(23),ye.rotation.xinit=ye.rotation.x,ye.rotation.xspeed=0,ye.rotation.yinit=ye.rotation.y,ye.rotation.yspeed=.01,ye.rotation.zinit=ye.rotation.z,ye.rotation.zspeed=0,Qo.push(ye)}{Uh=new ao({map:Ai[3],transparent:!0,depthWrite:!1});let r=new ii(Ks+.3,Zs);Xe=new ve(r,Uh),Xe.rotation.y=Or.degToRad(180),Xe.rotation.xinit=Xe.rotation.x,Xe.rotation.xspeed=.01,Xe.rotation.yinit=Xe.rotation.y,Xe.rotation.yspeed=-.01,Xe.rotation.zinit=Xe.rotation.z,Xe.rotation.zspeed=0,Qo.push(Xe),ye.add(Xe)}{Ih=new ao({map:Ai[4],color:15841852,opacity:.8,side:Re,transparent:!0,depthWrite:!1,blending:os,blendDst:wo,blendSrc:wo});let r=new ii(Ks,Zs);r.applyMatrix4(new ne().makeScale(-1,1,1)),So=new ve(r,Ih),So.rotation.y=Or.degToRad(180),ye.add(So)}Oh=new Ke.Atmosphere(Ks,Zs),ye.add(Oh);{Nh=new ao({map:Ai[5]});let r=new ii(45,2);sa=new ve(r,Nh),sa.position.set(1e3,500,-5e3),sa.rotation.y=Or.degToRad(90)}Fh=new fu({map:oa,transparent:!0,depthWrite:!1}),vr=new V0(Fh),vr.position.set(1e4,0,0),vr.scale.x=vr.scale.y=200}function Vx(){Eo=new se,Js=new se,Js.add(ye),Js.add(sa),Eo.add(vr),Yn.add(Eo),Yn.add(Js)}function Hx(){{let r=new K0(467292,1.2);r.color.setRGB(.02,.02,.07),Yn.add(r)}aa=new q0("#e8f7ff",1.2),aa.position.copy(vr.position),Yn.add(aa),To=new j0(0,0),To.position.set(1,0,0).normalize(),Yn.add(To)}function Gx(){tn=new us(new Ye),tn.addElement(new Ye(_n[0],400,0)),tn.addElement(new Ye(_n[4],900,0)),tn.addElement(new Ye(_n[2],70,.1)),tn.addElement(new Ye(_n[1],80,.2)),tn.addElement(new Ye(_n[3],220,.3,new Tt("#0033ff"))),tn.addElement(new Ye(_n[1],100,.4,new Tt("#004422"))),tn.addElement(new Ye(_n[1],310,.5,new Tt("#6600cc"))),tn.addElement(new Ye(_n[3],490,.6,new Tt("#003300"))),tn.addElement(new Ye(_n[2],150,.6,new Tt("#0033ff"))),tn.addElement(new Ye(_n[3],700,.9,new Tt("#ffffff"))),aa.add(tn)}function Wx(){var r,t;t={minFilter:Fe,magFilter:Fe,format:sn,stencilBufer:!0},r=new qn(Nl,Il,t),bi=new Ax(Ri,r);let e=new wx(Yn,as);bi.addPass(e),Zr=new Kr(Rx),Zr.uniforms.darkness.value=100,Zr.uniforms.offset.value=100,bi.addPass(Zr),ia=new Kr(Cx),ia.uniforms.h.value=2/512,bi.addPass(ia),ra=new Kr(Px),ra.uniforms.v.value=2/512,bi.addPass(ra);let n=new Kr(_d);n.renderToScreen=!0,bi.addPass(n)}function Xx(r){r*=.001;const t=r-Ao*(Ao!=null);Ao=r,Yx(r),pr.update(),bi.render(t)}function gd(){window.requestAnimationFrame(r=>{Xx(r),requestAnimationFrame(gd)})}function Yx(r){Qo.forEach(t=>{t.rotation.x=t.rotation.xinit+r*t.rotation.xspeed,t.rotation.y=t.rotation.yinit+r*t.rotation.yspeed,t.rotation.z=t.rotation.zinit+r*t.rotation.zspeed})}
