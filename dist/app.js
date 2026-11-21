(()=>{var Jc="170",Ji={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ji={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Rd=0,ru=1,Cd=2;var Af=1,jc=2,$n=3,Un=0,Gt=1,vt=2,bi=0,Ps=1,Ns=2,ou=3,au=4,Pd=5,zi=100,Id=101,Ld=102,Dd=103,Nd=104,Ud=200,Od=201,Bd=202,Fd=203,Ll=204,Dl=205,kd=206,Hd=207,zd=208,Vd=209,Gd=210,Wd=211,Xd=212,Yd=213,qd=214,Nl=0,Ul=1,Ol=2,Us=3,Bl=4,Fl=5,kl=6,Hl=7,Rf=0,Kd=1,Zd=2,Nn=0,$d=1,Jd=2,jd=3,Qd=4,ep=5,tp=6,np=7,lu="attached",ip="detached",Cf=300,Os=301,Bs=302,zl=303,Vl=304,Ra=306,On=1e3,Jn=1001,Pr=1002,Bt=1003,Qc=1004;var Ts=1005;var Zt=1006,br=1007;var Dn=1008;var ei=1009,Pf=1010,If=1011,Ir=1012,eh=1013,Gi=1014,An=1015,Yr=1016,th=1017,nh=1018,Fs=1020,Lf=35902,Df=1021,Nf=1022,fn=1023,Uf=1024,Of=1025,Is=1026,ks=1027,qr=1028,ih=1029,Bf=1030,sh=1031;var rh=1033,ko=33776,Ho=33777,zo=33778,Vo=33779,Gl=35840,Wl=35841,Xl=35842,Yl=35843,ql=36196,Kl=37492,Zl=37496,$l=37808,Jl=37809,jl=37810,Ql=37811,ec=37812,tc=37813,nc=37814,ic=37815,sc=37816,rc=37817,oc=37818,ac=37819,lc=37820,cc=37821,Go=36492,hc=36494,uc=36495,Ff=36283,fc=36284,dc=36285,pc=36286,sp=2200,rp=2201,op=2202,Hs=2300,zs=2301,$a=2302,ws=2400,As=2401,Wo=2402,oh=2500,ap=2501,kf=0,Ca=1,Kr=2,lp=3200,cp=3201;var ah=0,hp=1,vi="",dt="srgb",Wt="srgb-linear",Pa="linear",ct="srgb";var os=7680;var cu=519,up=512,fp=513,dp=514,Hf=515,pp=516,mp=517,gp=518,_p=519,mc=35044;var hu="300 es",jn=2e3,Xo=2001,Bn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}},zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],uu=1234567,Er=Math.PI/180,Vs=180/Math.PI;function dn(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(zt[s&255]+zt[s>>8&255]+zt[s>>16&255]+zt[s>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[t&63|128]+zt[t>>8&255]+"-"+zt[t>>16&255]+zt[t>>24&255]+zt[n&255]+zt[n>>8&255]+zt[n>>16&255]+zt[n>>24&255]).toLowerCase()}function Pt(s,e,t){return Math.max(e,Math.min(t,s))}function lh(s,e){return(s%e+e)%e}function yp(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function xp(s,e,t){return s!==e?(t-s)/(e-s):0}function Tr(s,e,t){return(1-t)*s+t*e}function vp(s,e,t,n){return Tr(s,e,1-Math.exp(-t*n))}function Mp(s,e=1){return e-Math.abs(lh(s,e*2)-e)}function Sp(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function bp(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Ep(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Tp(s,e){return s+Math.random()*(e-s)}function wp(s){return s*(.5-Math.random())}function Ap(s){s!==void 0&&(uu=s);let e=uu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Rp(s){return s*Er}function Cp(s){return s*Vs}function Pp(s){return(s&s-1)===0&&s!==0}function Ip(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Lp(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Dp(s,e,t,n,i){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),m=o((n-e)/2);switch(i){case"XYX":s.set(a*h,l*u,l*f,a*c);break;case"YZY":s.set(l*f,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*f,a*h,a*c);break;case"XZX":s.set(a*h,l*m,l*d,a*c);break;case"YXY":s.set(l*d,a*h,l*m,a*c);break;case"ZYZ":s.set(l*m,l*d,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function wn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function lt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Qi={DEG2RAD:Er,RAD2DEG:Vs,generateUUID:dn,clamp:Pt,euclideanModulo:lh,mapLinear:yp,inverseLerp:xp,lerp:Tr,damp:vp,pingpong:Mp,smoothstep:Sp,smootherstep:bp,randInt:Ep,randFloat:Tp,randFloatSpread:wp,seededRandom:Ap,degToRad:Rp,radToDeg:Cp,isPowerOfTwo:Pp,ceilPowerOfTwo:Ip,floorPowerOfTwo:Lp,setQuaternionFromProperEuler:Dp,normalize:lt,denormalize:wn},ce=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ke=class s{constructor(e,t,n,i,r,o,a,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],m=n[8],x=i[0],g=i[3],p=i[6],b=i[1],S=i[4],y=i[7],B=i[2],P=i[5],I=i[8];return r[0]=o*x+a*b+l*B,r[3]=o*g+a*S+l*P,r[6]=o*p+a*y+l*I,r[1]=c*x+h*b+u*B,r[4]=c*g+h*S+u*P,r[7]=c*p+h*y+u*I,r[2]=f*x+d*b+m*B,r[5]=f*g+d*S+m*P,r[8]=f*p+d*y+m*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,m=t*u+n*f+i*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return e[0]=u*x,e[1]=(i*c-h*n)*x,e[2]=(a*n-i*o)*x,e[3]=f*x,e[4]=(h*t-i*l)*x,e[5]=(i*r-a*t)*x,e[6]=d*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ja.makeScale(e,t)),this}rotate(e){return this.premultiply(Ja.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ja.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ja=new Ke;function zf(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Lr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Np(){let s=Lr("canvas");return s.style.display="block",s}var fu={};function Mr(s){s in fu||(fu[s]=!0,console.warn(s))}function Up(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Op(s){let e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Bp(s){let e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var tt={enabled:!0,workingColorSpace:Wt,spaces:{},convert:function(s,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===ct&&(s.r=Qn(s.r),s.g=Qn(s.g),s.b=Qn(s.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===ct&&(s.r=Ls(s.r),s.g=Ls(s.g),s.b=Ls(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===vi?Pa:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,t){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Qn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ls(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var du=[.64,.33,.3,.6,.15,.06],pu=[.2126,.7152,.0722],mu=[.3127,.329],gu=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_u=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);tt.define({[Wt]:{primaries:du,whitePoint:mu,transfer:Pa,toXYZ:gu,fromXYZ:_u,luminanceCoefficients:pu,workingColorSpaceConfig:{unpackColorSpace:dt},outputColorSpaceConfig:{drawingBufferColorSpace:dt}},[dt]:{primaries:du,whitePoint:mu,transfer:ct,toXYZ:gu,fromXYZ:_u,luminanceCoefficients:pu,outputColorSpaceConfig:{drawingBufferColorSpace:dt}}});var as,gc=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{as===void 0&&(as=Lr("canvas")),as.width=e.width,as.height=e.height;let n=as.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=as}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Lr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Qn(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Qn(t[n]/255)*255):t[n]=Qn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Fp=0,Yo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Fp++}),this.uuid=dn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(ja(i[o].image)):r.push(ja(i[o]))}else r=ja(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function ja(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?gc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var kp=0,Ft=class s extends Bn{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=Jn,i=Jn,r=Zt,o=Dn,a=fn,l=ei,c=s.DEFAULT_ANISOTROPY,h=vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kp++}),this.uuid=dn(),this.name="",this.source=new Yo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Cf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case On:e.x=e.x-Math.floor(e.x);break;case Jn:e.x=e.x<0?0:1;break;case Pr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case On:e.y=e.y-Math.floor(e.y);break;case Jn:e.y=e.y<0?0:1;break;case Pr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ft.DEFAULT_IMAGE=null;Ft.DEFAULT_MAPPING=Cf;Ft.DEFAULT_ANISOTROPY=1;var st=class s{constructor(e=0,t=0,n=0,i=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],m=l[9],x=l[2],g=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(c+1)/2,y=(d+1)/2,B=(p+1)/2,P=(h+f)/4,I=(u+x)/4,w=(m+g)/4;return S>y&&S>B?S<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(S),i=P/n,r=I/n):y>B?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=P/i,r=w/i):B<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(B),n=I/r,i=w/r),this.set(n,i,r,t),this}let b=Math.sqrt((g-m)*(g-m)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(b)<.001&&(b=1),this.x=(g-m)/b,this.y=(u-x)/b,this.z=(f-h)/b,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},_c=class extends Bn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new st(0,0,e,t),this.scissorTest=!1,this.viewport=new st(0,0,e,t);let i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Ft(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Yo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ti=class extends _c{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},qo=class extends Ft{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var yc=class extends Ft{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var kt=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],f=r[o+0],d=r[o+1],m=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=m,e[t+3]=x;return}if(u!==x||l!==f||c!==d||h!==m){let g=1-a,p=l*f+c*d+h*m+u*x,b=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){let B=Math.sqrt(S),P=Math.atan2(B,p*b);g=Math.sin(g*P)/B,a=Math.sin(a*P)/B}let y=a*b;if(l=l*g+f*y,c=c*g+d*y,h=h*g+m*y,u=u*g+x*y,g===1-a){let B=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=B,c*=B,h*=B,u*=B}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],f=r[o+1],d=r[o+2],m=r[o+3];return e[t]=a*m+h*u+l*d-c*f,e[t+1]=l*m+h*f+c*u-a*d,e[t+2]=c*m+h*d+a*f-l*u,e[t+3]=h*m-a*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),f=l(n/2),d=l(i/2),m=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u-f*d*m;break;case"YXZ":this._x=f*h*u+c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u+f*d*m;break;case"ZXY":this._x=f*h*u-c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u-f*d*m;break;case"ZYX":this._x=f*h*u-c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u+f*d*m;break;case"YZX":this._x=f*h*u+c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u-f*d*m;break;case"XZY":this._x=f*h*u-c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u+f*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-i)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-i)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Pt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(yu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(yu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-r*i),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Qa.copy(this).projectOnVector(e),this.sub(Qa)}reflect(e){return this.sub(Qa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Qa=new L,yu=new kt,$t=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Sn):Sn.fromBufferAttribute(r,o),Sn.applyMatrix4(e.matrixWorld),this.expandByPoint(Sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ro.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ro.copy(n.boundingBox)),ro.applyMatrix4(e.matrixWorld),this.union(ro)}let i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Sn),Sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(hr),oo.subVectors(this.max,hr),ls.subVectors(e.a,hr),cs.subVectors(e.b,hr),hs.subVectors(e.c,hr),pi.subVectors(cs,ls),mi.subVectors(hs,cs),Ni.subVectors(ls,hs);let t=[0,-pi.z,pi.y,0,-mi.z,mi.y,0,-Ni.z,Ni.y,pi.z,0,-pi.x,mi.z,0,-mi.x,Ni.z,0,-Ni.x,-pi.y,pi.x,0,-mi.y,mi.x,0,-Ni.y,Ni.x,0];return!el(t,ls,cs,hs,oo)||(t=[1,0,0,0,1,0,0,0,1],!el(t,ls,cs,hs,oo))?!1:(ao.crossVectors(pi,mi),t=[ao.x,ao.y,ao.z],el(t,ls,cs,hs,oo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Wn=[new L,new L,new L,new L,new L,new L,new L,new L],Sn=new L,ro=new $t,ls=new L,cs=new L,hs=new L,pi=new L,mi=new L,Ni=new L,hr=new L,oo=new L,ao=new L,Ui=new L;function el(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Ui.fromArray(s,r);let a=i.x*Math.abs(Ui.x)+i.y*Math.abs(Ui.y)+i.z*Math.abs(Ui.z),l=e.dot(Ui),c=t.dot(Ui),h=n.dot(Ui);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Hp=new $t,ur=new L,tl=new L,on=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Hp.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ur.subVectors(e,this.center);let t=ur.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ur,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(tl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ur.copy(e.center).add(tl)),this.expandByPoint(ur.copy(e.center).sub(tl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Xn=new L,nl=new L,lo=new L,gi=new L,il=new L,co=new L,sl=new L,Ei=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Xn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Xn.copy(this.origin).addScaledVector(this.direction,t),Xn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){nl.copy(e).add(t).multiplyScalar(.5),lo.copy(t).sub(e).normalize(),gi.copy(this.origin).sub(nl);let r=e.distanceTo(t)*.5,o=-this.direction.dot(lo),a=gi.dot(this.direction),l=-gi.dot(lo),c=gi.lengthSq(),h=Math.abs(1-o*o),u,f,d,m;if(h>0)if(u=o*l-a,f=o*a-l,m=r*h,u>=0)if(f>=-m)if(f<=m){let x=1/h;u*=x,f*=x,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-m?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=m?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(nl).addScaledVector(lo,f),d}intersectSphere(e,t){Xn.subVectors(e.center,this.origin);let n=Xn.dot(this.direction),i=Xn.dot(Xn)-n*n,r=e.radius*e.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Xn)!==null}intersectTriangle(e,t,n,i,r){il.subVectors(t,e),co.subVectors(n,e),sl.crossVectors(il,co);let o=this.direction.dot(sl),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;gi.subVectors(this.origin,e);let l=a*this.direction.dot(co.crossVectors(gi,co));if(l<0)return null;let c=a*this.direction.dot(il.cross(gi));if(c<0||l+c>o)return null;let h=-a*gi.dot(sl);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},We=class s{constructor(e,t,n,i,r,o,a,l,c,h,u,f,d,m,x,g){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,h,u,f,d,m,x,g)}set(e,t,n,i,r,o,a,l,c,h,u,f,d,m,x,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/us.setFromMatrixColumn(e,0).length(),r=1/us.setFromMatrixColumn(e,1).length(),o=1/us.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=o*h,d=o*u,m=a*h,x=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+m*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=m+d*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*h,d=l*u,m=c*h,x=c*u;t[0]=f+x*a,t[4]=m*a-d,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-m,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*h,d=l*u,m=c*h,x=c*u;t[0]=f-x*a,t[4]=-o*u,t[8]=m+d*a,t[1]=d+m*a,t[5]=o*h,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*h,d=o*u,m=a*h,x=a*u;t[0]=l*h,t[4]=m*c-d,t[8]=f*c+x,t[1]=l*u,t[5]=x*c+f,t[9]=d*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,d=o*c,m=a*l,x=a*c;t[0]=l*h,t[4]=x-f*u,t[8]=m*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=d*u+m,t[10]=f-x*u}else if(e.order==="XZY"){let f=o*l,d=o*c,m=a*l,x=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+x,t[5]=o*h,t[9]=d*u-m,t[2]=m*u-d,t[6]=a*h,t[10]=x*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zp,e,Vp)}lookAt(e,t,n){let i=this.elements;return sn.subVectors(e,t),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),_i.crossVectors(n,sn),_i.lengthSq()===0&&(Math.abs(n.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),_i.crossVectors(n,sn)),_i.normalize(),ho.crossVectors(sn,_i),i[0]=_i.x,i[4]=ho.x,i[8]=sn.x,i[1]=_i.y,i[5]=ho.y,i[9]=sn.y,i[2]=_i.z,i[6]=ho.z,i[10]=sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],m=n[2],x=n[6],g=n[10],p=n[14],b=n[3],S=n[7],y=n[11],B=n[15],P=i[0],I=i[4],w=i[8],v=i[12],M=i[1],T=i[5],N=i[9],G=i[13],X=i[2],U=i[6],H=i[10],ne=i[14],J=i[3],pe=i[7],_e=i[11],ve=i[15];return r[0]=o*P+a*M+l*X+c*J,r[4]=o*I+a*T+l*U+c*pe,r[8]=o*w+a*N+l*H+c*_e,r[12]=o*v+a*G+l*ne+c*ve,r[1]=h*P+u*M+f*X+d*J,r[5]=h*I+u*T+f*U+d*pe,r[9]=h*w+u*N+f*H+d*_e,r[13]=h*v+u*G+f*ne+d*ve,r[2]=m*P+x*M+g*X+p*J,r[6]=m*I+x*T+g*U+p*pe,r[10]=m*w+x*N+g*H+p*_e,r[14]=m*v+x*G+g*ne+p*ve,r[3]=b*P+S*M+y*X+B*J,r[7]=b*I+S*T+y*U+B*pe,r[11]=b*w+S*N+y*H+B*_e,r[15]=b*v+S*G+y*ne+B*ve,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],m=e[3],x=e[7],g=e[11],p=e[15];return m*(+r*l*u-i*c*u-r*a*f+n*c*f+i*a*d-n*l*d)+x*(+t*l*d-t*c*f+r*o*f-i*o*d+i*c*h-r*l*h)+g*(+t*c*u-t*a*d-r*o*u+n*o*d+r*a*h-n*c*h)+p*(-i*a*h-t*l*u+t*a*f+i*o*u-n*o*f+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],m=e[12],x=e[13],g=e[14],p=e[15],b=u*g*c-x*f*c+x*l*d-a*g*d-u*l*p+a*f*p,S=m*f*c-h*g*c-m*l*d+o*g*d+h*l*p-o*f*p,y=h*x*c-m*u*c+m*a*d-o*x*d-h*a*p+o*u*p,B=m*u*l-h*x*l-m*a*f+o*x*f+h*a*g-o*u*g,P=t*b+n*S+i*y+r*B;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/P;return e[0]=b*I,e[1]=(x*f*r-u*g*r-x*i*d+n*g*d+u*i*p-n*f*p)*I,e[2]=(a*g*r-x*l*r+x*i*c-n*g*c-a*i*p+n*l*p)*I,e[3]=(u*l*r-a*f*r-u*i*c+n*f*c+a*i*d-n*l*d)*I,e[4]=S*I,e[5]=(h*g*r-m*f*r+m*i*d-t*g*d-h*i*p+t*f*p)*I,e[6]=(m*l*r-o*g*r-m*i*c+t*g*c+o*i*p-t*l*p)*I,e[7]=(o*f*r-h*l*r+h*i*c-t*f*c-o*i*d+t*l*d)*I,e[8]=y*I,e[9]=(m*u*r-h*x*r-m*n*d+t*x*d+h*n*p-t*u*p)*I,e[10]=(o*x*r-m*a*r+m*n*c-t*x*c-o*n*p+t*a*p)*I,e[11]=(h*a*r-o*u*r-h*n*c+t*u*c+o*n*d-t*a*d)*I,e[12]=B*I,e[13]=(h*x*i-m*u*i+m*n*f-t*x*f-h*n*g+t*u*g)*I,e[14]=(m*a*i-o*x*i-m*n*l+t*x*l+o*n*g-t*a*g)*I,e[15]=(o*u*i-h*a*i+h*n*l-t*u*l-o*n*f+t*a*f)*I,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,m=r*u,x=o*h,g=o*u,p=a*u,b=l*c,S=l*h,y=l*u,B=n.x,P=n.y,I=n.z;return i[0]=(1-(x+p))*B,i[1]=(d+y)*B,i[2]=(m-S)*B,i[3]=0,i[4]=(d-y)*P,i[5]=(1-(f+p))*P,i[6]=(g+b)*P,i[7]=0,i[8]=(m+S)*I,i[9]=(g-b)*I,i[10]=(1-(f+x))*I,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=us.set(i[0],i[1],i[2]).length(),o=us.set(i[4],i[5],i[6]).length(),a=us.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],bn.copy(this);let c=1/r,h=1/o,u=1/a;return bn.elements[0]*=c,bn.elements[1]*=c,bn.elements[2]*=c,bn.elements[4]*=h,bn.elements[5]*=h,bn.elements[6]*=h,bn.elements[8]*=u,bn.elements[9]*=u,bn.elements[10]*=u,t.setFromRotationMatrix(bn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=jn){let l=this.elements,c=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i),d,m;if(a===jn)d=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===Xo)d=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=jn){let l=this.elements,c=1/(t-e),h=1/(n-i),u=1/(o-r),f=(t+e)*c,d=(n+i)*h,m,x;if(a===jn)m=(o+r)*u,x=-2*u;else if(a===Xo)m=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=x,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},us=new L,bn=new We,zp=new L(0,0,0),Vp=new L(1,1,1),_i=new L,ho=new L,sn=new L,xu=new We,vu=new kt,Fn=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(Pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Pt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Pt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Pt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Pt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return xu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return vu.setFromEuler(this),this.setFromQuaternion(vu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Fn.DEFAULT_ORDER="XYZ";var Ko=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Gp=0,Mu=new L,fs=new kt,Yn=new We,uo=new L,fr=new L,Wp=new L,Xp=new kt,Su=new L(1,0,0),bu=new L(0,1,0),Eu=new L(0,0,1),Tu={type:"added"},Yp={type:"removed"},ds={type:"childadded",child:null},rl={type:"childremoved",child:null},gt=class s extends Bn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gp++}),this.uuid=dn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new L,t=new Fn,n=new kt,i=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new We},normalMatrix:{value:new Ke}}),this.matrix=new We,this.matrixWorld=new We,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ko,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return fs.setFromAxisAngle(e,t),this.quaternion.multiply(fs),this}rotateOnWorldAxis(e,t){return fs.setFromAxisAngle(e,t),this.quaternion.premultiply(fs),this}rotateX(e){return this.rotateOnAxis(Su,e)}rotateY(e){return this.rotateOnAxis(bu,e)}rotateZ(e){return this.rotateOnAxis(Eu,e)}translateOnAxis(e,t){return Mu.copy(e).applyQuaternion(this.quaternion),this.position.add(Mu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Su,e)}translateY(e){return this.translateOnAxis(bu,e)}translateZ(e){return this.translateOnAxis(Eu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?uo.copy(e):uo.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),fr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yn.lookAt(fr,uo,this.up):Yn.lookAt(uo,fr,this.up),this.quaternion.setFromRotationMatrix(Yn),i&&(Yn.extractRotation(i.matrixWorld),fs.setFromRotationMatrix(Yn),this.quaternion.premultiply(fs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Tu),ds.child=e,this.dispatchEvent(ds),ds.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Yp),rl.child=e,this.dispatchEvent(rl),rl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Tu),ds.child=e,this.dispatchEvent(ds),ds.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,e,Wp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,Xp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};gt.DEFAULT_UP=new L(0,1,0);gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var En=new L,qn=new L,ol=new L,Kn=new L,ps=new L,ms=new L,wu=new L,al=new L,ll=new L,cl=new L,hl=new st,ul=new st,fl=new st,Mi=class s{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),En.subVectors(e,t),i.cross(En);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){En.subVectors(i,t),qn.subVectors(n,t),ol.subVectors(e,t);let o=En.dot(En),a=En.dot(qn),l=En.dot(ol),c=qn.dot(qn),h=qn.dot(ol),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,m=(o*h-a*l)*f;return r.set(1-d-m,m,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Kn)===null?!1:Kn.x>=0&&Kn.y>=0&&Kn.x+Kn.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,Kn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Kn.x),l.addScaledVector(o,Kn.y),l.addScaledVector(a,Kn.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return hl.setScalar(0),ul.setScalar(0),fl.setScalar(0),hl.fromBufferAttribute(e,t),ul.fromBufferAttribute(e,n),fl.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(hl,r.x),o.addScaledVector(ul,r.y),o.addScaledVector(fl,r.z),o}static isFrontFacing(e,t,n,i){return En.subVectors(n,t),qn.subVectors(e,t),En.cross(qn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return En.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),En.cross(qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,o,a;ps.subVectors(i,n),ms.subVectors(r,n),al.subVectors(e,n);let l=ps.dot(al),c=ms.dot(al);if(l<=0&&c<=0)return t.copy(n);ll.subVectors(e,i);let h=ps.dot(ll),u=ms.dot(ll);if(h>=0&&u<=h)return t.copy(i);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(ps,o);cl.subVectors(e,r);let d=ps.dot(cl),m=ms.dot(cl);if(m>=0&&d<=m)return t.copy(r);let x=d*c-l*m;if(x<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(n).addScaledVector(ms,a);let g=h*m-d*u;if(g<=0&&u-h>=0&&d-m>=0)return wu.subVectors(r,i),a=(u-h)/(u-h+(d-m)),t.copy(i).addScaledVector(wu,a);let p=1/(g+x+f);return o=x*p,a=f*p,t.copy(n).addScaledVector(ps,o).addScaledVector(ms,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Vf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yi={h:0,s:0,l:0},fo={h:0,s:0,l:0};function dl(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var ke=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=dt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=tt.workingColorSpace){return this.r=e,this.g=t,this.b=n,tt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=tt.workingColorSpace){if(e=lh(e,1),t=Pt(t,0,1),n=Pt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=dl(o,r,e+1/3),this.g=dl(o,r,e),this.b=dl(o,r,e-1/3)}return tt.toWorkingColorSpace(this,i),this}setStyle(e,t=dt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=dt){let n=Vf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qn(e.r),this.g=Qn(e.g),this.b=Qn(e.b),this}copyLinearToSRGB(e){return this.r=Ls(e.r),this.g=Ls(e.g),this.b=Ls(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=dt){return tt.fromWorkingColorSpace(Vt.copy(this),e),Math.round(Pt(Vt.r*255,0,255))*65536+Math.round(Pt(Vt.g*255,0,255))*256+Math.round(Pt(Vt.b*255,0,255))}getHexString(e=dt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.fromWorkingColorSpace(Vt.copy(this),t);let n=Vt.r,i=Vt.g,r=Vt.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=tt.workingColorSpace){return tt.fromWorkingColorSpace(Vt.copy(this),t),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=dt){tt.fromWorkingColorSpace(Vt.copy(this),e);let t=Vt.r,n=Vt.g,i=Vt.b;return e!==dt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(yi),this.setHSL(yi.h+e,yi.s+t,yi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(yi),e.getHSL(fo);let n=Tr(yi.h,fo.h,t),i=Tr(yi.s,fo.s,t),r=Tr(yi.l,fo.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Vt=new ke;ke.NAMES=Vf;var qp=0,qt=class extends Bn{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qp++}),this.uuid=dn(),this.name="",this.blending=Ps,this.side=Un,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ll,this.blendDst=Dl,this.blendEquation=zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=Us,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=os,this.stencilZFail=os,this.stencilZPass=os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ps&&(n.blending=this.blending),this.side!==Un&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ll&&(n.blendSrc=this.blendSrc),this.blendDst!==Dl&&(n.blendDst=this.blendDst),this.blendEquation!==zi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Us&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==cu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==os&&(n.stencilFail=this.stencilFail),this.stencilZFail!==os&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==os&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},St=class extends qt{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.combine=Rf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Ct=new L,po=new ce,At=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=mc,this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)po.fromBufferAttribute(this,t),po.applyMatrix3(e),this.setXY(t,po.x,po.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=wn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=lt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=wn(t,this.array)),t}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=wn(t,this.array)),t}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=wn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=wn(t,this.array)),t}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),i=lt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),i=lt(i,this.array),r=lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==mc&&(e.usage=this.usage),e}};var Zo=class extends At{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var $o=class extends At{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Je=class extends At{constructor(e,t,n){super(new Float32Array(e),t,n)}},Kp=0,un=new We,pl=new gt,gs=new L,rn=new $t,dr=new $t,Ot=new L,Mt=class s extends Bn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kp++}),this.uuid=dn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zf(e)?$o:Zo)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ke().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return un.makeRotationFromQuaternion(e),this.applyMatrix4(un),this}rotateX(e){return un.makeRotationX(e),this.applyMatrix4(un),this}rotateY(e){return un.makeRotationY(e),this.applyMatrix4(un),this}rotateZ(e){return un.makeRotationZ(e),this.applyMatrix4(un),this}translate(e,t,n){return un.makeTranslation(e,t,n),this.applyMatrix4(un),this}scale(e,t,n){return un.makeScale(e,t,n),this.applyMatrix4(un),this}lookAt(e){return pl.lookAt(e),pl.updateMatrix(),this.applyMatrix4(pl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gs).negate(),this.translate(gs.x,gs.y,gs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Je(n,3))}else{for(let n=0,i=t.count;n<i;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $t);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];rn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new on);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if(rn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];dr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ot.addVectors(rn.min,dr.min),rn.expandByPoint(Ot),Ot.addVectors(rn.max,dr.max),rn.expandByPoint(Ot)):(rn.expandByPoint(dr.min),rn.expandByPoint(dr.max))}rn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Ot.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Ot));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ot.fromBufferAttribute(a,c),l&&(gs.fromBufferAttribute(e,c),Ot.add(gs)),i=Math.max(i,n.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new At(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let w=0;w<n.count;w++)a[w]=new L,l[w]=new L;let c=new L,h=new L,u=new L,f=new ce,d=new ce,m=new ce,x=new L,g=new L;function p(w,v,M){c.fromBufferAttribute(n,w),h.fromBufferAttribute(n,v),u.fromBufferAttribute(n,M),f.fromBufferAttribute(r,w),d.fromBufferAttribute(r,v),m.fromBufferAttribute(r,M),h.sub(c),u.sub(c),d.sub(f),m.sub(f);let T=1/(d.x*m.y-m.x*d.y);isFinite(T)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(u,-d.y).multiplyScalar(T),g.copy(u).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(T),a[w].add(x),a[v].add(x),a[M].add(x),l[w].add(g),l[v].add(g),l[M].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let w=0,v=b.length;w<v;++w){let M=b[w],T=M.start,N=M.count;for(let G=T,X=T+N;G<X;G+=3)p(e.getX(G+0),e.getX(G+1),e.getX(G+2))}let S=new L,y=new L,B=new L,P=new L;function I(w){B.fromBufferAttribute(i,w),P.copy(B);let v=a[w];S.copy(v),S.sub(B.multiplyScalar(B.dot(v))).normalize(),y.crossVectors(P,v);let T=y.dot(l[w])<0?-1:1;o.setXYZW(w,S.x,S.y,S.z,T)}for(let w=0,v=b.length;w<v;++w){let M=b[w],T=M.start,N=M.count;for(let G=T,X=T+N;G<X;G+=3)I(e.getX(G+0)),I(e.getX(G+1)),I(e.getX(G+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new At(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new L,r=new L,o=new L,a=new L,l=new L,c=new L,h=new L,u=new L;if(e)for(let f=0,d=e.count;f<d;f+=3){let m=e.getX(f+0),x=e.getX(f+1),g=e.getX(f+2);i.fromBufferAttribute(t,m),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,g),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ot.fromBufferAttribute(e,t),Ot.normalize(),e.setXYZ(t,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,m=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*h;for(let p=0;p<h;p++)f[m++]=c[d++]}return new At(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Au=new We,Oi=new Ei,mo=new on,Ru=new L,go=new L,_o=new L,yo=new L,ml=new L,xo=new L,Cu=new L,vo=new L,xe=class extends gt{constructor(e=new Mt,t=new St){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(r&&a){xo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(ml.fromBufferAttribute(u,e),o?xo.addScaledVector(ml,h):xo.addScaledVector(ml.sub(t),h))}t.add(xo)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),mo.copy(n.boundingSphere),mo.applyMatrix4(r),Oi.copy(e.ray).recast(e.near),!(mo.containsPoint(Oi.origin)===!1&&(Oi.intersectSphere(mo,Ru)===null||Oi.origin.distanceToSquared(Ru)>(e.far-e.near)**2))&&(Au.copy(r).invert(),Oi.copy(e.ray).applyMatrix4(Au),!(n.boundingBox!==null&&Oi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Oi)))}_computeIntersections(e,t,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=f.length;m<x;m++){let g=f[m],p=o[g.materialIndex],b=Math.max(g.start,d.start),S=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let y=b,B=S;y<B;y+=3){let P=a.getX(y),I=a.getX(y+1),w=a.getX(y+2);i=Mo(this,p,e,n,c,h,u,P,I,w),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let m=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let g=m,p=x;g<p;g+=3){let b=a.getX(g),S=a.getX(g+1),y=a.getX(g+2);i=Mo(this,o,e,n,c,h,u,b,S,y),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,x=f.length;m<x;m++){let g=f[m],p=o[g.materialIndex],b=Math.max(g.start,d.start),S=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let y=b,B=S;y<B;y+=3){let P=y,I=y+1,w=y+2;i=Mo(this,p,e,n,c,h,u,P,I,w),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let m=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let g=m,p=x;g<p;g+=3){let b=g,S=g+1,y=g+2;i=Mo(this,o,e,n,c,h,u,b,S,y),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}};function Zp(s,e,t,n,i,r,o,a){let l;if(e.side===Gt?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===Un,a),l===null)return null;vo.copy(a),vo.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(vo);return c<t.near||c>t.far?null:{distance:c,point:vo.clone(),object:s}}function Mo(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,go),s.getVertexPosition(l,_o),s.getVertexPosition(c,yo);let h=Zp(s,e,t,n,go,_o,yo,Cu);if(h){let u=new L;Mi.getBarycoord(Cu,go,_o,yo,u),i&&(h.uv=Mi.getInterpolatedAttribute(i,a,l,c,u,new ce)),r&&(h.uv1=Mi.getInterpolatedAttribute(r,a,l,c,u,new ce)),o&&(h.normal=Mi.getInterpolatedAttribute(o,a,l,c,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new L,materialIndex:0};Mi.getNormal(go,_o,yo,f.normal),h.face=f,h.barycoord=u}return h}var Rt=class s extends Mt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;m("z","y","x",-1,-1,n,t,e,o,r,0),m("z","y","x",1,-1,n,t,-e,o,r,1),m("x","z","y",1,1,e,n,t,i,o,2),m("x","z","y",1,-1,e,n,-t,i,o,3),m("x","y","z",1,-1,e,t,n,i,r,4),m("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Je(c,3)),this.setAttribute("normal",new Je(h,3)),this.setAttribute("uv",new Je(u,2));function m(x,g,p,b,S,y,B,P,I,w,v){let M=y/I,T=B/w,N=y/2,G=B/2,X=P/2,U=I+1,H=w+1,ne=0,J=0,pe=new L;for(let _e=0;_e<H;_e++){let ve=_e*T-G;for(let Le=0;Le<U;Le++){let He=Le*M-N;pe[x]=He*b,pe[g]=ve*S,pe[p]=X,c.push(pe.x,pe.y,pe.z),pe[x]=0,pe[g]=0,pe[p]=P>0?1:-1,h.push(pe.x,pe.y,pe.z),u.push(Le/I),u.push(1-_e/w),ne+=1}}for(let _e=0;_e<w;_e++)for(let ve=0;ve<I;ve++){let Le=f+ve+U*_e,He=f+ve+U*(_e+1),re=f+(ve+1)+U*(_e+1),ie=f+(ve+1)+U*_e;l.push(Le,He,ie),l.push(He,re,ie),J+=6}a.addGroup(d,J,v),d+=J,f+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Gs(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Yt(s){let e={};for(let t=0;t<s.length;t++){let n=Gs(s[t]);for(let i in n)e[i]=n[i]}return e}function $p(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Gf(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}var ch={clone:Gs,merge:Yt},Jp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,pn=class extends qt{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jp,this.fragmentShader=jp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gs(e.uniforms),this.uniformsGroups=$p(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Jo=class extends gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new We,this.projectionMatrix=new We,this.projectionMatrixInverse=new We,this.coordinateSystem=jn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},xi=new L,Pu=new ce,Iu=new ce,Lt=class extends Jo{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Vs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Er*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vs*2*Math.atan(Math.tan(Er*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(xi.x,xi.y).multiplyScalar(-e/xi.z),xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xi.x,xi.y).multiplyScalar(-e/xi.z)}getViewSize(e,t){return this.getViewBounds(e,Pu,Iu),t.subVectors(Iu,Pu)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Er*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},_s=-90,ys=1,xc=class extends gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Lt(_s,ys,e,t);i.layers=this.layers,this.add(i);let r=new Lt(_s,ys,e,t);r.layers=this.layers,this.add(r);let o=new Lt(_s,ys,e,t);o.layers=this.layers,this.add(o);let a=new Lt(_s,ys,e,t);a.layers=this.layers,this.add(a);let l=new Lt(_s,ys,e,t);l.layers=this.layers,this.add(l);let c=new Lt(_s,ys,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===jn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Xo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},jo=class extends Ft{constructor(e,t,n,i,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Os,super(e,t,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},vc=class extends ti{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new jo(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Zt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Rt(5,5,5),r=new pn({name:"CubemapFromEquirect",uniforms:Gs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Gt,blending:bi});r.uniforms.tEquirect.value=t;let o=new xe(i,r),a=t.minFilter;return t.minFilter===Dn&&(t.minFilter=Zt),new xc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}},gl=new L,Qp=new L,e0=new Ke,Tn=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=gl.subVectors(n,t).cross(Qp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(gl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||e0.getNormalMatrix(e),i=this.coplanarPoint(gl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Bi=new on,So=new L,Dr=class{constructor(e=new Tn,t=new Tn,n=new Tn,i=new Tn,r=new Tn,o=new Tn){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=jn){let n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],f=i[7],d=i[8],m=i[9],x=i[10],g=i[11],p=i[12],b=i[13],S=i[14],y=i[15];if(n[0].setComponents(l-r,f-c,g-d,y-p).normalize(),n[1].setComponents(l+r,f+c,g+d,y+p).normalize(),n[2].setComponents(l+o,f+h,g+m,y+b).normalize(),n[3].setComponents(l-o,f-h,g-m,y-b).normalize(),n[4].setComponents(l-a,f-u,g-x,y-S).normalize(),t===jn)n[5].setComponents(l+a,f+u,g+x,y+S).normalize();else if(t===Xo)n[5].setComponents(a,u,x,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Bi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Bi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Bi)}intersectsSprite(e){return Bi.center.set(0,0,0),Bi.radius=.7071067811865476,Bi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Bi)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(So.x=i.normal.x>0?e.max.x:e.min.x,So.y=i.normal.y>0?e.max.y:e.min.y,So.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(So)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Wf(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function t0(s){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,h);else{u.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<u.length;d++){let m=u[f],x=u[d];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,m=u.length;d<m;d++){let x=u[d];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var Ti=class s extends Mt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=e/a,f=t/l,d=[],m=[],x=[],g=[];for(let p=0;p<h;p++){let b=p*f-o;for(let S=0;S<c;S++){let y=S*u-r;m.push(y,-b,0),x.push(0,0,1),g.push(S/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<a;b++){let S=b+c*p,y=b+c*(p+1),B=b+1+c*(p+1),P=b+1+c*p;d.push(S,y,P),d.push(y,B,P)}this.setIndex(d),this.setAttribute("position",new Je(m,3)),this.setAttribute("normal",new Je(x,3)),this.setAttribute("uv",new Je(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},n0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,i0=`#ifdef USE_ALPHAHASH
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
#endif`,s0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,r0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,o0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,a0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,l0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,c0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,h0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,u0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,f0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,d0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,p0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,m0=`#ifdef USE_IRIDESCENCE
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
#endif`,g0=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,_0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,y0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,x0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,v0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,M0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,S0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,b0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,E0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,T0=`#define PI 3.141592653589793
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
} // validated`,w0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,A0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,R0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,C0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,P0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,I0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,L0="gl_FragColor = linearToOutputTexel( gl_FragColor );",D0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,N0=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,U0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,O0=`#ifdef USE_ENVMAP
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
#endif`,B0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,F0=`#ifdef USE_ENVMAP
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
#endif`,k0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,H0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,z0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,V0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,G0=`#ifdef USE_GRADIENTMAP
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
}`,W0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,X0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Y0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,q0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,K0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,Z0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,J0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,j0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Q0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,em=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,tm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,nm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,im=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,om=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,am=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,lm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,um=`#if defined( USE_POINTS_UV )
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
#endif`,fm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,mm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_m=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ym=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,vm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Mm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Em=`#ifdef USE_NORMALMAP
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
#endif`,Tm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Am=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Pm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,Im=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Lm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Dm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Nm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Um=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Om=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Bm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Fm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,km=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Hm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,zm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Gm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Wm=`#ifdef USE_SKINNING
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
#endif`,Xm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ym=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Km=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zm=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,$m=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Jm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,tg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ng=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ig=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,og=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ag=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,lg=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
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
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,cg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,hg=`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ug=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dg=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,pg=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mg=`#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,gg=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,_g=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,yg=`#define LAMBERT
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,xg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,vg=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Mg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Sg=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,bg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Eg=`#define PHONG
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Tg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,wg=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ag=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Rg=`#define TOON
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Cg=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,Pg=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,Ig=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Lg=`uniform vec3 color;
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
}`,Dg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,Ng=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,$e={alphahash_fragment:n0,alphahash_pars_fragment:i0,alphamap_fragment:s0,alphamap_pars_fragment:r0,alphatest_fragment:o0,alphatest_pars_fragment:a0,aomap_fragment:l0,aomap_pars_fragment:c0,batching_pars_vertex:h0,batching_vertex:u0,begin_vertex:f0,beginnormal_vertex:d0,bsdfs:p0,iridescence_fragment:m0,bumpmap_pars_fragment:g0,clipping_planes_fragment:_0,clipping_planes_pars_fragment:y0,clipping_planes_pars_vertex:x0,clipping_planes_vertex:v0,color_fragment:M0,color_pars_fragment:S0,color_pars_vertex:b0,color_vertex:E0,common:T0,cube_uv_reflection_fragment:w0,defaultnormal_vertex:A0,displacementmap_pars_vertex:R0,displacementmap_vertex:C0,emissivemap_fragment:P0,emissivemap_pars_fragment:I0,colorspace_fragment:L0,colorspace_pars_fragment:D0,envmap_fragment:N0,envmap_common_pars_fragment:U0,envmap_pars_fragment:O0,envmap_pars_vertex:B0,envmap_physical_pars_fragment:K0,envmap_vertex:F0,fog_vertex:k0,fog_pars_vertex:H0,fog_fragment:z0,fog_pars_fragment:V0,gradientmap_pars_fragment:G0,lightmap_pars_fragment:W0,lights_lambert_fragment:X0,lights_lambert_pars_fragment:Y0,lights_pars_begin:q0,lights_toon_fragment:Z0,lights_toon_pars_fragment:$0,lights_phong_fragment:J0,lights_phong_pars_fragment:j0,lights_physical_fragment:Q0,lights_physical_pars_fragment:em,lights_fragment_begin:tm,lights_fragment_maps:nm,lights_fragment_end:im,logdepthbuf_fragment:sm,logdepthbuf_pars_fragment:rm,logdepthbuf_pars_vertex:om,logdepthbuf_vertex:am,map_fragment:lm,map_pars_fragment:cm,map_particle_fragment:hm,map_particle_pars_fragment:um,metalnessmap_fragment:fm,metalnessmap_pars_fragment:dm,morphinstance_vertex:pm,morphcolor_vertex:mm,morphnormal_vertex:gm,morphtarget_pars_vertex:_m,morphtarget_vertex:ym,normal_fragment_begin:xm,normal_fragment_maps:vm,normal_pars_fragment:Mm,normal_pars_vertex:Sm,normal_vertex:bm,normalmap_pars_fragment:Em,clearcoat_normal_fragment_begin:Tm,clearcoat_normal_fragment_maps:wm,clearcoat_pars_fragment:Am,iridescence_pars_fragment:Rm,opaque_fragment:Cm,packing:Pm,premultiplied_alpha_fragment:Im,project_vertex:Lm,dithering_fragment:Dm,dithering_pars_fragment:Nm,roughnessmap_fragment:Um,roughnessmap_pars_fragment:Om,shadowmap_pars_fragment:Bm,shadowmap_pars_vertex:Fm,shadowmap_vertex:km,shadowmask_pars_fragment:Hm,skinbase_vertex:zm,skinning_pars_vertex:Vm,skinning_vertex:Gm,skinnormal_vertex:Wm,specularmap_fragment:Xm,specularmap_pars_fragment:Ym,tonemapping_fragment:qm,tonemapping_pars_fragment:Km,transmission_fragment:Zm,transmission_pars_fragment:$m,uv_pars_fragment:Jm,uv_pars_vertex:jm,uv_vertex:Qm,worldpos_vertex:eg,background_vert:tg,background_frag:ng,backgroundCube_vert:ig,backgroundCube_frag:sg,cube_vert:rg,cube_frag:og,depth_vert:ag,depth_frag:lg,distanceRGBA_vert:cg,distanceRGBA_frag:hg,equirect_vert:ug,equirect_frag:fg,linedashed_vert:dg,linedashed_frag:pg,meshbasic_vert:mg,meshbasic_frag:gg,meshlambert_vert:_g,meshlambert_frag:yg,meshmatcap_vert:xg,meshmatcap_frag:vg,meshnormal_vert:Mg,meshnormal_frag:Sg,meshphong_vert:bg,meshphong_frag:Eg,meshphysical_vert:Tg,meshphysical_frag:wg,meshtoon_vert:Ag,meshtoon_frag:Rg,points_vert:Cg,points_frag:Pg,shadow_vert:Ig,shadow_frag:Lg,sprite_vert:Dg,sprite_frag:Ng},Me={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},Ln={basic:{uniforms:Yt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:Yt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new ke(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:Yt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:Yt([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:Yt([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new ke(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:Yt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:Yt([Me.points,Me.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:Yt([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:Yt([Me.common,Me.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:Yt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:Yt([Me.sprite,Me.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:Yt([Me.common,Me.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:Yt([Me.lights,Me.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};Ln.physical={uniforms:Yt([Ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};var bo={r:0,b:0,g:0},Fi=new Fn,Ug=new We;function Og(s,e,t,n,i,r,o){let a=new ke(0),l=r===!0?0:1,c,h,u=null,f=0,d=null;function m(b){let S=b.isScene===!0?b.background:null;return S&&S.isTexture&&(S=(b.backgroundBlurriness>0?t:e).get(S)),S}function x(b){let S=!1,y=m(b);y===null?p(a,l):y&&y.isColor&&(p(y,1),S=!0);let B=s.xr.getEnvironmentBlendMode();B==="additive"?n.buffers.color.setClear(0,0,0,1,o):B==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(b,S){let y=m(S);y&&(y.isCubeTexture||y.mapping===Ra)?(h===void 0&&(h=new xe(new Rt(1,1,1),new pn({name:"BackgroundCubeMaterial",uniforms:Gs(Ln.backgroundCube.uniforms),vertexShader:Ln.backgroundCube.vertexShader,fragmentShader:Ln.backgroundCube.fragmentShader,side:Gt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(B,P,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Fi.copy(S.backgroundRotation),Fi.x*=-1,Fi.y*=-1,Fi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Fi.y*=-1,Fi.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Ug.makeRotationFromEuler(Fi)),h.material.toneMapped=tt.getTransfer(y.colorSpace)!==ct,(u!==y||f!==y.version||d!==s.toneMapping)&&(h.material.needsUpdate=!0,u=y,f=y.version,d=s.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new xe(new Ti(2,2),new pn({name:"BackgroundMaterial",uniforms:Gs(Ln.background.uniforms),vertexShader:Ln.background.vertexShader,fragmentShader:Ln.background.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=tt.getTransfer(y.colorSpace)!==ct,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,u=y,f=y.version,d=s.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,S){b.getRGB(bo,Gf(s)),n.buffers.color.setClear(bo.r,bo.g,bo.b,S,o)}return{getClearColor:function(){return a},setClearColor:function(b,S=1){a.set(b),l=S,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(a,l)},render:x,addToRenderList:g}}function Bg(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null),r=i,o=!1;function a(M,T,N,G,X){let U=!1,H=u(G,N,T);r!==H&&(r=H,c(r.object)),U=d(M,G,N,X),U&&m(M,G,N,X),X!==null&&e.update(X,s.ELEMENT_ARRAY_BUFFER),(U||o)&&(o=!1,y(M,T,N,G),X!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return s.createVertexArray()}function c(M){return s.bindVertexArray(M)}function h(M){return s.deleteVertexArray(M)}function u(M,T,N){let G=N.wireframe===!0,X=n[M.id];X===void 0&&(X={},n[M.id]=X);let U=X[T.id];U===void 0&&(U={},X[T.id]=U);let H=U[G];return H===void 0&&(H=f(l()),U[G]=H),H}function f(M){let T=[],N=[],G=[];for(let X=0;X<t;X++)T[X]=0,N[X]=0,G[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:N,attributeDivisors:G,object:M,attributes:{},index:null}}function d(M,T,N,G){let X=r.attributes,U=T.attributes,H=0,ne=N.getAttributes();for(let J in ne)if(ne[J].location>=0){let _e=X[J],ve=U[J];if(ve===void 0&&(J==="instanceMatrix"&&M.instanceMatrix&&(ve=M.instanceMatrix),J==="instanceColor"&&M.instanceColor&&(ve=M.instanceColor)),_e===void 0||_e.attribute!==ve||ve&&_e.data!==ve.data)return!0;H++}return r.attributesNum!==H||r.index!==G}function m(M,T,N,G){let X={},U=T.attributes,H=0,ne=N.getAttributes();for(let J in ne)if(ne[J].location>=0){let _e=U[J];_e===void 0&&(J==="instanceMatrix"&&M.instanceMatrix&&(_e=M.instanceMatrix),J==="instanceColor"&&M.instanceColor&&(_e=M.instanceColor));let ve={};ve.attribute=_e,_e&&_e.data&&(ve.data=_e.data),X[J]=ve,H++}r.attributes=X,r.attributesNum=H,r.index=G}function x(){let M=r.newAttributes;for(let T=0,N=M.length;T<N;T++)M[T]=0}function g(M){p(M,0)}function p(M,T){let N=r.newAttributes,G=r.enabledAttributes,X=r.attributeDivisors;N[M]=1,G[M]===0&&(s.enableVertexAttribArray(M),G[M]=1),X[M]!==T&&(s.vertexAttribDivisor(M,T),X[M]=T)}function b(){let M=r.newAttributes,T=r.enabledAttributes;for(let N=0,G=T.length;N<G;N++)T[N]!==M[N]&&(s.disableVertexAttribArray(N),T[N]=0)}function S(M,T,N,G,X,U,H){H===!0?s.vertexAttribIPointer(M,T,N,X,U):s.vertexAttribPointer(M,T,N,G,X,U)}function y(M,T,N,G){x();let X=G.attributes,U=N.getAttributes(),H=T.defaultAttributeValues;for(let ne in U){let J=U[ne];if(J.location>=0){let pe=X[ne];if(pe===void 0&&(ne==="instanceMatrix"&&M.instanceMatrix&&(pe=M.instanceMatrix),ne==="instanceColor"&&M.instanceColor&&(pe=M.instanceColor)),pe!==void 0){let _e=pe.normalized,ve=pe.itemSize,Le=e.get(pe);if(Le===void 0)continue;let He=Le.buffer,re=Le.type,ie=Le.bytesPerElement,_=re===s.INT||re===s.UNSIGNED_INT||pe.gpuType===eh;if(pe.isInterleavedBufferAttribute){let O=pe.data,W=O.stride,q=pe.offset;if(O.isInstancedInterleavedBuffer){for(let he=0;he<J.locationSize;he++)p(J.location+he,O.meshPerAttribute);M.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let he=0;he<J.locationSize;he++)g(J.location+he);s.bindBuffer(s.ARRAY_BUFFER,He);for(let he=0;he<J.locationSize;he++)S(J.location+he,ve/J.locationSize,re,_e,W*ie,(q+ve/J.locationSize*he)*ie,_)}else{if(pe.isInstancedBufferAttribute){for(let O=0;O<J.locationSize;O++)p(J.location+O,pe.meshPerAttribute);M.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let O=0;O<J.locationSize;O++)g(J.location+O);s.bindBuffer(s.ARRAY_BUFFER,He);for(let O=0;O<J.locationSize;O++)S(J.location+O,ve/J.locationSize,re,_e,ve*ie,ve/J.locationSize*O*ie,_)}}else if(H!==void 0){let _e=H[ne];if(_e!==void 0)switch(_e.length){case 2:s.vertexAttrib2fv(J.location,_e);break;case 3:s.vertexAttrib3fv(J.location,_e);break;case 4:s.vertexAttrib4fv(J.location,_e);break;default:s.vertexAttrib1fv(J.location,_e)}}}}b()}function B(){w();for(let M in n){let T=n[M];for(let N in T){let G=T[N];for(let X in G)h(G[X].object),delete G[X];delete T[N]}delete n[M]}}function P(M){if(n[M.id]===void 0)return;let T=n[M.id];for(let N in T){let G=T[N];for(let X in G)h(G[X].object),delete G[X];delete T[N]}delete n[M.id]}function I(M){for(let T in n){let N=n[T];if(N[M.id]===void 0)continue;let G=N[M.id];for(let X in G)h(G[X].object),delete G[X];delete N[M.id]}}function w(){v(),o=!0,r!==i&&(r=i,c(r.object))}function v(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:w,resetDefaultState:v,dispose:B,releaseStatesOfGeometry:P,releaseStatesOfProgram:I,initAttributes:x,enableAttribute:g,disableUnusedAttributes:b}}function Fg(s,e,t){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let m=0;m<u;m++)d+=h[m];t.update(d,n,1)}function l(c,h,u,f){if(u===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<c.length;m++)o(c[m],h[m],f[m]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let m=0;for(let x=0;x<u;x++)m+=h[x]*f[x];t.update(m,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function kg(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let I=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(I){return!(I!==fn&&n.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){let w=I===Yr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==ei&&n.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==An&&!w)}function l(I){if(I==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),b=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),S=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),B=m>0,P=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:b,maxVaryings:S,maxFragmentUniforms:y,vertexTextures:B,maxSamples:P}}function Hg(s){let e=this,t=null,n=0,i=!1,r=!1,o=new Tn,a=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){let m=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,p=s.get(u);if(!i||m===null||m.length===0||r&&!g)r?h(null):c();else{let b=r?0:n,S=b*4,y=p.clippingState||null;l.value=y,y=h(m,f,S,d);for(let B=0;B!==S;++B)y[B]=t[B];p.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,m){let x=u!==null?u.length:0,g=null;if(x!==0){if(g=l.value,m!==!0||g===null){let p=d+x*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(g===null||g.length<p)&&(g=new Float32Array(p));for(let S=0,y=d;S!==x;++S,y+=4)o.copy(u[S]).applyMatrix4(b,a),o.normal.toArray(g,y),g[y+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function zg(s){let e=new WeakMap;function t(o,a){return a===zl?o.mapping=Os:a===Vl&&(o.mapping=Bs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===zl||a===Vl)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new vc(l.height);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Ws=class extends Jo{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Rs=4,Lu=[.125,.215,.35,.446,.526,.582],Vi=20,_l=new Ws,Du=new ke,yl=null,xl=0,vl=0,Ml=!1,Hi=(1+Math.sqrt(5))/2,xs=1/Hi,Nu=[new L(-Hi,xs,0),new L(Hi,xs,0),new L(-xs,0,Hi),new L(xs,0,Hi),new L(0,Hi,-xs),new L(0,Hi,xs),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],Qo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){yl=this._renderer.getRenderTarget(),xl=this._renderer.getActiveCubeFace(),vl=this._renderer.getActiveMipmapLevel(),Ml=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ou(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(yl,xl,vl),this._renderer.xr.enabled=Ml,e.scissorTest=!1,Eo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Os||e.mapping===Bs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yl=this._renderer.getRenderTarget(),xl=this._renderer.getActiveCubeFace(),vl=this._renderer.getActiveMipmapLevel(),Ml=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Zt,minFilter:Zt,generateMipmaps:!1,type:Yr,format:fn,colorSpace:Wt,depthBuffer:!1},i=Uu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Uu(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Vg(r)),this._blurMaterial=Gg(r,e,t)}return i}_compileMaterial(e){let t=new xe(this._lodPlanes[0],e);this._renderer.compile(t,_l)}_sceneToCubeUV(e,t,n,i){let a=new Lt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Du),h.toneMapping=Nn,h.autoClear=!1;let d=new St({name:"PMREM.Background",side:Gt,depthWrite:!1,depthTest:!1}),m=new xe(new Rt,d),x=!1,g=e.background;g?g.isColor&&(d.color.copy(g),e.background=null,x=!0):(d.color.copy(Du),x=!0);for(let p=0;p<6;p++){let b=p%3;b===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):b===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let S=this._cubeSize;Eo(i,b*S,p>2?S:0,S,S),h.setRenderTarget(i),x&&h.render(m,a),h.render(e,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=g}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Os||e.mapping===Bs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ou());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new xe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Eo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,_l)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Nu[(i-r-1)%Nu.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new xe(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Vi-1),x=r/m,g=isFinite(r)?1+Math.floor(h*x):Vi;g>Vi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Vi}`);let p=[],b=0;for(let I=0;I<Vi;++I){let w=I/x,v=Math.exp(-w*w/2);p.push(v),I===0?b+=v:I<g&&(b+=2*v)}for(let I=0;I<p.length;I++)p[I]=p[I]/b;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:S}=this;f.dTheta.value=m,f.mipInt.value=S-n;let y=this._sizeLods[i],B=3*y*(i>S-Rs?i-S+Rs:0),P=4*(this._cubeSize-y);Eo(t,B,P,3*y,2*y),l.setRenderTarget(t),l.render(u,_l)}};function Vg(s){let e=[],t=[],n=[],i=s,r=s-Rs+1+Lu.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);t.push(a);let l=1/a;o>s-Rs?l=Lu[o-s+Rs-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,m=6,x=3,g=2,p=1,b=new Float32Array(x*m*d),S=new Float32Array(g*m*d),y=new Float32Array(p*m*d);for(let P=0;P<d;P++){let I=P%3*2/3-1,w=P>2?0:-1,v=[I,w,0,I+2/3,w,0,I+2/3,w+1,0,I,w,0,I+2/3,w+1,0,I,w+1,0];b.set(v,x*m*P),S.set(f,g*m*P);let M=[P,P,P,P,P,P];y.set(M,p*m*P)}let B=new Mt;B.setAttribute("position",new At(b,x)),B.setAttribute("uv",new At(S,g)),B.setAttribute("faceIndex",new At(y,p)),e.push(B),i>Rs&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Uu(s,e,t){let n=new ti(s,e,t);return n.texture.mapping=Ra,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Eo(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Gg(s,e,t){let n=new Float32Array(Vi),i=new L(0,1,0);return new pn({name:"SphericalGaussianBlur",defines:{n:Vi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:hh(),fragmentShader:`

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
		`,blending:bi,depthTest:!1,depthWrite:!1})}function Ou(){return new pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hh(),fragmentShader:`

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
		`,blending:bi,depthTest:!1,depthWrite:!1})}function Bu(){return new pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function hh(){return`

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
	`}function Wg(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===zl||l===Vl,h=l===Os||l===Bs;if(c||h){let u=e.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Qo(s)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let d=a.image;return c&&d&&d.height>0||h&&d&&i(d)?(t===null&&(t=new Qo(s)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Xg(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&Mr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Yg(s,e,t,n){let i={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let m in f.attributes)e.remove(f.attributes[m]);for(let m in f.morphAttributes){let x=f.morphAttributes[m];for(let g=0,p=x.length;g<p;g++)e.remove(x[g])}f.removeEventListener("dispose",o),delete i[f.id];let d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(u){let f=u.attributes;for(let m in f)e.update(f[m],s.ARRAY_BUFFER);let d=u.morphAttributes;for(let m in d){let x=d[m];for(let g=0,p=x.length;g<p;g++)e.update(x[g],s.ARRAY_BUFFER)}}function c(u){let f=[],d=u.index,m=u.attributes.position,x=0;if(d!==null){let b=d.array;x=d.version;for(let S=0,y=b.length;S<y;S+=3){let B=b[S+0],P=b[S+1],I=b[S+2];f.push(B,P,P,I,I,B)}}else if(m!==void 0){let b=m.array;x=m.version;for(let S=0,y=b.length/3-1;S<y;S+=3){let B=S+0,P=S+1,I=S+2;f.push(B,P,P,I,I,B)}}else return;let g=new(zf(f)?$o:Zo)(f,1);g.version=x;let p=r.get(u);p&&e.remove(p),r.set(u,g)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function qg(s,e,t){let n;function i(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){s.drawElements(n,d,r,f*o),t.update(d,n,1)}function c(f,d,m){m!==0&&(s.drawElementsInstanced(n,d,r,f*o,m),t.update(d,n,m))}function h(f,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,m);let g=0;for(let p=0;p<m;p++)g+=d[p];t.update(g,n,1)}function u(f,d,m,x){if(m===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],x[p]);else{g.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,x,0,m);let p=0;for(let b=0;b<m;b++)p+=d[b]*x[b];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Kg(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Zg(s,e,t){let n=new WeakMap,i=new st;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let v=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",v)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],S=0;d===!0&&(S=1),m===!0&&(S=2),x===!0&&(S=3);let y=a.attributes.position.count*S,B=1;y>e.maxTextureSize&&(B=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let P=new Float32Array(y*B*4*u),I=new qo(P,y,B,u);I.type=An,I.needsUpdate=!0;let w=S*4;for(let M=0;M<u;M++){let T=g[M],N=p[M],G=b[M],X=y*B*4*M;for(let U=0;U<T.count;U++){let H=U*w;d===!0&&(i.fromBufferAttribute(T,U),P[X+H+0]=i.x,P[X+H+1]=i.y,P[X+H+2]=i.z,P[X+H+3]=0),m===!0&&(i.fromBufferAttribute(N,U),P[X+H+4]=i.x,P[X+H+5]=i.y,P[X+H+6]=i.z,P[X+H+7]=0),x===!0&&(i.fromBufferAttribute(G,U),P[X+H+8]=i.x,P[X+H+9]=i.y,P[X+H+10]=i.z,P[X+H+11]=G.itemSize===4?i.w:1)}}f={count:u,texture:I,size:new ce(y,B)},n.set(a,f),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let m=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(s,"morphTargetBaseInfluence",m),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function $g(s,e,t,n){let i=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var ea=class extends Ft{constructor(e,t,n,i,r,o,a,l,c,h=Is){if(h!==Is&&h!==ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Is&&(n=Gi),n===void 0&&h===ks&&(n=Fs),super(null,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Bt,this.minFilter=l!==void 0?l:Bt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Xf=new Ft,Fu=new ea(1,1),Yf=new qo,qf=new yc,Kf=new jo,ku=[],Hu=[],zu=new Float32Array(16),Vu=new Float32Array(9),Gu=new Float32Array(4);function tr(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=ku[i];if(r===void 0&&(r=new Float32Array(i),ku[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Dt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Nt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Ia(s,e){let t=Hu[e];t===void 0&&(t=new Int32Array(e),Hu[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Jg(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function jg(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;s.uniform2fv(this.addr,e),Nt(t,e)}}function Qg(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dt(t,e))return;s.uniform3fv(this.addr,e),Nt(t,e)}}function e_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;s.uniform4fv(this.addr,e),Nt(t,e)}}function t_(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Nt(t,e)}else{if(Dt(t,n))return;Gu.set(n),s.uniformMatrix2fv(this.addr,!1,Gu),Nt(t,n)}}function n_(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Nt(t,e)}else{if(Dt(t,n))return;Vu.set(n),s.uniformMatrix3fv(this.addr,!1,Vu),Nt(t,n)}}function i_(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Nt(t,e)}else{if(Dt(t,n))return;zu.set(n),s.uniformMatrix4fv(this.addr,!1,zu),Nt(t,n)}}function s_(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function r_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;s.uniform2iv(this.addr,e),Nt(t,e)}}function o_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;s.uniform3iv(this.addr,e),Nt(t,e)}}function a_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;s.uniform4iv(this.addr,e),Nt(t,e)}}function l_(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function c_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;s.uniform2uiv(this.addr,e),Nt(t,e)}}function h_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;s.uniform3uiv(this.addr,e),Nt(t,e)}}function u_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;s.uniform4uiv(this.addr,e),Nt(t,e)}}function f_(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Fu.compareFunction=Hf,r=Fu):r=Xf,t.setTexture2D(e||r,i)}function d_(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||qf,i)}function p_(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Kf,i)}function m_(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Yf,i)}function g_(s){switch(s){case 5126:return Jg;case 35664:return jg;case 35665:return Qg;case 35666:return e_;case 35674:return t_;case 35675:return n_;case 35676:return i_;case 5124:case 35670:return s_;case 35667:case 35671:return r_;case 35668:case 35672:return o_;case 35669:case 35673:return a_;case 5125:return l_;case 36294:return c_;case 36295:return h_;case 36296:return u_;case 35678:case 36198:case 36298:case 36306:case 35682:return f_;case 35679:case 36299:case 36307:return d_;case 35680:case 36300:case 36308:case 36293:return p_;case 36289:case 36303:case 36311:case 36292:return m_}}function __(s,e){s.uniform1fv(this.addr,e)}function y_(s,e){let t=tr(e,this.size,2);s.uniform2fv(this.addr,t)}function x_(s,e){let t=tr(e,this.size,3);s.uniform3fv(this.addr,t)}function v_(s,e){let t=tr(e,this.size,4);s.uniform4fv(this.addr,t)}function M_(s,e){let t=tr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function S_(s,e){let t=tr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function b_(s,e){let t=tr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function E_(s,e){s.uniform1iv(this.addr,e)}function T_(s,e){s.uniform2iv(this.addr,e)}function w_(s,e){s.uniform3iv(this.addr,e)}function A_(s,e){s.uniform4iv(this.addr,e)}function R_(s,e){s.uniform1uiv(this.addr,e)}function C_(s,e){s.uniform2uiv(this.addr,e)}function P_(s,e){s.uniform3uiv(this.addr,e)}function I_(s,e){s.uniform4uiv(this.addr,e)}function L_(s,e,t){let n=this.cache,i=e.length,r=Ia(t,i);Dt(n,r)||(s.uniform1iv(this.addr,r),Nt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Xf,r[o])}function D_(s,e,t){let n=this.cache,i=e.length,r=Ia(t,i);Dt(n,r)||(s.uniform1iv(this.addr,r),Nt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||qf,r[o])}function N_(s,e,t){let n=this.cache,i=e.length,r=Ia(t,i);Dt(n,r)||(s.uniform1iv(this.addr,r),Nt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Kf,r[o])}function U_(s,e,t){let n=this.cache,i=e.length,r=Ia(t,i);Dt(n,r)||(s.uniform1iv(this.addr,r),Nt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Yf,r[o])}function O_(s){switch(s){case 5126:return __;case 35664:return y_;case 35665:return x_;case 35666:return v_;case 35674:return M_;case 35675:return S_;case 35676:return b_;case 5124:case 35670:return E_;case 35667:case 35671:return T_;case 35668:case 35672:return w_;case 35669:case 35673:return A_;case 5125:return R_;case 36294:return C_;case 36295:return P_;case 36296:return I_;case 35678:case 36198:case 36298:case 36306:case 35682:return L_;case 35679:case 36299:case 36307:return D_;case 35680:case 36300:case 36308:case 36293:return N_;case 36289:case 36303:case 36311:case 36292:return U_}}var Mc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=g_(t.type)}},Sc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=O_(t.type)}},bc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(e,t[a.id],n)}}},Sl=/(\w+)(\])?(\[|\.)?/g;function Wu(s,e){s.seq.push(e),s.map[e.id]=e}function B_(s,e,t){let n=s.name,i=n.length;for(Sl.lastIndex=0;;){let r=Sl.exec(n),o=Sl.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Wu(t,c===void 0?new Mc(a,s,e):new Sc(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new bc(a),Wu(t,u)),t=u}}}var Ds=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);B_(r,o,this)}}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let o=e[i];o.id in t&&n.push(o)}return n}};function Xu(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var F_=37297,k_=0;function H_(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Yu=new Ke;function z_(s){tt._getMatrix(Yu,tt.workingColorSpace,s);let e=`mat3( ${Yu.elements.map(t=>t.toFixed(4))} )`;switch(tt.getTransfer(s)){case Pa:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function qu(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+H_(s.getShaderSource(e),o)}else return i}function V_(s,e){let t=z_(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function G_(s,e){let t;switch(e){case $d:t="Linear";break;case Jd:t="Reinhard";break;case jd:t="Cineon";break;case Qd:t="ACESFilmic";break;case tp:t="AgX";break;case np:t="Neutral";break;case ep:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var To=new L;function W_(){tt.getLuminanceCoefficients(To);let s=To.x.toFixed(4),e=To.y.toFixed(4),t=To.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function X_(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Sr).join(`
`)}function Y_(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function q_(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Sr(s){return s!==""}function Ku(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zu(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var K_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ec(s){return s.replace(K_,$_)}var Z_=new Map;function $_(s,e){let t=$e[e];if(t===void 0){let n=Z_.get(e);if(n!==void 0)t=$e[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ec(t)}var J_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $u(s){return s.replace(J_,j_)}function j_(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Ju(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Q_(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Af?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===jc?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===$n&&(e="SHADOWMAP_TYPE_VSM"),e}function ey(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Os:case Bs:e="ENVMAP_TYPE_CUBE";break;case Ra:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ty(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Bs:e="ENVMAP_MODE_REFRACTION";break}return e}function ny(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Rf:e="ENVMAP_BLENDING_MULTIPLY";break;case Kd:e="ENVMAP_BLENDING_MIX";break;case Zd:e="ENVMAP_BLENDING_ADD";break}return e}function iy(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function sy(s,e,t,n){let i=s.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Q_(t),c=ey(t),h=ty(t),u=ny(t),f=iy(t),d=X_(t),m=Y_(r),x=i.createProgram(),g,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Sr).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Sr).join(`
`),p.length>0&&(p+=`
`)):(g=[Ju(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sr).join(`
`),p=[Ju(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Nn?"#define TONE_MAPPING":"",t.toneMapping!==Nn?$e.tonemapping_pars_fragment:"",t.toneMapping!==Nn?G_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,V_("linearToOutputTexel",t.outputColorSpace),W_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Sr).join(`
`)),o=Ec(o),o=Ku(o,t),o=Zu(o,t),a=Ec(a),a=Ku(a,t),a=Zu(a,t),o=$u(o),a=$u(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===hu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===hu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let S=b+g+o,y=b+p+a,B=Xu(i,i.VERTEX_SHADER,S),P=Xu(i,i.FRAGMENT_SHADER,y);i.attachShader(x,B),i.attachShader(x,P),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function I(T){if(s.debug.checkShaderErrors){let N=i.getProgramInfoLog(x).trim(),G=i.getShaderInfoLog(B).trim(),X=i.getShaderInfoLog(P).trim(),U=!0,H=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(U=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,B,P);else{let ne=qu(i,B,"vertex"),J=qu(i,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+N+`
`+ne+`
`+J)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(G===""||X==="")&&(H=!1);H&&(T.diagnostics={runnable:U,programLog:N,vertexShader:{log:G,prefix:g},fragmentShader:{log:X,prefix:p}})}i.deleteShader(B),i.deleteShader(P),w=new Ds(i,x),v=q_(i,x)}let w;this.getUniforms=function(){return w===void 0&&I(this),w};let v;this.getAttributes=function(){return v===void 0&&I(this),v};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(x,F_)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=k_++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=B,this.fragmentShader=P,this}var ry=0,Tc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new wc(e),t.set(e,n)),n}},wc=class{constructor(e){this.id=ry++,this.code=e,this.usedTimes=0}};function oy(s,e,t,n,i,r,o){let a=new Ko,l=new Tc,c=new Set,h=[],u=i.logarithmicDepthBuffer,f=i.vertexTextures,d=i.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(v){return c.add(v),v===0?"uv":`uv${v}`}function g(v,M,T,N,G){let X=N.fog,U=G.geometry,H=v.isMeshStandardMaterial?N.environment:null,ne=(v.isMeshStandardMaterial?t:e).get(v.envMap||H),J=ne&&ne.mapping===Ra?ne.image.height:null,pe=m[v.type];v.precision!==null&&(d=i.getMaxPrecision(v.precision),d!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));let _e=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,ve=_e!==void 0?_e.length:0,Le=0;U.morphAttributes.position!==void 0&&(Le=1),U.morphAttributes.normal!==void 0&&(Le=2),U.morphAttributes.color!==void 0&&(Le=3);let He,re,ie,_;if(pe){let at=Ln[pe];He=at.vertexShader,re=at.fragmentShader}else He=v.vertexShader,re=v.fragmentShader,l.update(v),ie=l.getVertexShaderID(v),_=l.getFragmentShaderID(v);let O=s.getRenderTarget(),W=s.state.buffers.depth.getReversed(),q=G.isInstancedMesh===!0,he=G.isBatchedMesh===!0,V=!!v.map,z=!!v.matcap,D=!!ne,R=!!v.aoMap,ae=!!v.lightMap,$=!!v.bumpMap,de=!!v.normalMap,ue=!!v.displacementMap,we=!!v.emissiveMap,F=!!v.metalnessMap,A=!!v.roughnessMap,E=v.anisotropy>0,k=v.clearcoat>0,j=v.dispersion>0,oe=v.iridescence>0,le=v.sheen>0,De=v.transmission>0,Se=E&&!!v.anisotropyMap,Re=k&&!!v.clearcoatMap,et=k&&!!v.clearcoatNormalMap,ge=k&&!!v.clearcoatRoughnessMap,Ce=oe&&!!v.iridescenceMap,ze=oe&&!!v.iridescenceThicknessMap,Ve=le&&!!v.sheenColorMap,Pe=le&&!!v.sheenRoughnessMap,nt=!!v.specularMap,Ze=!!v.specularColorMap,pt=!!v.specularIntensityMap,Y=De&&!!v.transmissionMap,be=De&&!!v.thicknessMap,se=!!v.gradientMap,fe=!!v.alphaMap,Ae=v.alphaTest>0,Ee=!!v.alphaHash,Ye=!!v.extensions,Et=Nn;v.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Et=s.toneMapping);let Ht={shaderID:pe,shaderType:v.type,shaderName:v.name,vertexShader:He,fragmentShader:re,defines:v.defines,customVertexShaderID:ie,customFragmentShaderID:_,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:he,batchingColor:he&&G._colorsTexture!==null,instancing:q,instancingColor:q&&G.instanceColor!==null,instancingMorph:q&&G.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:O===null?s.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:Wt,alphaToCoverage:!!v.alphaToCoverage,map:V,matcap:z,envMap:D,envMapMode:D&&ne.mapping,envMapCubeUVHeight:J,aoMap:R,lightMap:ae,bumpMap:$,normalMap:de,displacementMap:f&&ue,emissiveMap:we,normalMapObjectSpace:de&&v.normalMapType===hp,normalMapTangentSpace:de&&v.normalMapType===ah,metalnessMap:F,roughnessMap:A,anisotropy:E,anisotropyMap:Se,clearcoat:k,clearcoatMap:Re,clearcoatNormalMap:et,clearcoatRoughnessMap:ge,dispersion:j,iridescence:oe,iridescenceMap:Ce,iridescenceThicknessMap:ze,sheen:le,sheenColorMap:Ve,sheenRoughnessMap:Pe,specularMap:nt,specularColorMap:Ze,specularIntensityMap:pt,transmission:De,transmissionMap:Y,thicknessMap:be,gradientMap:se,opaque:v.transparent===!1&&v.blending===Ps&&v.alphaToCoverage===!1,alphaMap:fe,alphaTest:Ae,alphaHash:Ee,combine:v.combine,mapUv:V&&x(v.map.channel),aoMapUv:R&&x(v.aoMap.channel),lightMapUv:ae&&x(v.lightMap.channel),bumpMapUv:$&&x(v.bumpMap.channel),normalMapUv:de&&x(v.normalMap.channel),displacementMapUv:ue&&x(v.displacementMap.channel),emissiveMapUv:we&&x(v.emissiveMap.channel),metalnessMapUv:F&&x(v.metalnessMap.channel),roughnessMapUv:A&&x(v.roughnessMap.channel),anisotropyMapUv:Se&&x(v.anisotropyMap.channel),clearcoatMapUv:Re&&x(v.clearcoatMap.channel),clearcoatNormalMapUv:et&&x(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&x(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&x(v.iridescenceMap.channel),iridescenceThicknessMapUv:ze&&x(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ve&&x(v.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&x(v.sheenRoughnessMap.channel),specularMapUv:nt&&x(v.specularMap.channel),specularColorMapUv:Ze&&x(v.specularColorMap.channel),specularIntensityMapUv:pt&&x(v.specularIntensityMap.channel),transmissionMapUv:Y&&x(v.transmissionMap.channel),thicknessMapUv:be&&x(v.thicknessMap.channel),alphaMapUv:fe&&x(v.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(de||E),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!U.attributes.uv&&(V||fe),fog:!!X,useFog:v.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:W,skinning:G.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:Le,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&T.length>0,shadowMapType:s.shadowMap.type,toneMapping:Et,decodeVideoTexture:V&&v.map.isVideoTexture===!0&&tt.getTransfer(v.map.colorSpace)===ct,decodeVideoTextureEmissive:we&&v.emissiveMap.isVideoTexture===!0&&tt.getTransfer(v.emissiveMap.colorSpace)===ct,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===vt,flipSided:v.side===Gt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Ye&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ye&&v.extensions.multiDraw===!0||he)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ht.vertexUv1s=c.has(1),Ht.vertexUv2s=c.has(2),Ht.vertexUv3s=c.has(3),c.clear(),Ht}function p(v){let M=[];if(v.shaderID?M.push(v.shaderID):(M.push(v.customVertexShaderID),M.push(v.customFragmentShaderID)),v.defines!==void 0)for(let T in v.defines)M.push(T),M.push(v.defines[T]);return v.isRawShaderMaterial===!1&&(b(M,v),S(M,v),M.push(s.outputColorSpace)),M.push(v.customProgramCacheKey),M.join()}function b(v,M){v.push(M.precision),v.push(M.outputColorSpace),v.push(M.envMapMode),v.push(M.envMapCubeUVHeight),v.push(M.mapUv),v.push(M.alphaMapUv),v.push(M.lightMapUv),v.push(M.aoMapUv),v.push(M.bumpMapUv),v.push(M.normalMapUv),v.push(M.displacementMapUv),v.push(M.emissiveMapUv),v.push(M.metalnessMapUv),v.push(M.roughnessMapUv),v.push(M.anisotropyMapUv),v.push(M.clearcoatMapUv),v.push(M.clearcoatNormalMapUv),v.push(M.clearcoatRoughnessMapUv),v.push(M.iridescenceMapUv),v.push(M.iridescenceThicknessMapUv),v.push(M.sheenColorMapUv),v.push(M.sheenRoughnessMapUv),v.push(M.specularMapUv),v.push(M.specularColorMapUv),v.push(M.specularIntensityMapUv),v.push(M.transmissionMapUv),v.push(M.thicknessMapUv),v.push(M.combine),v.push(M.fogExp2),v.push(M.sizeAttenuation),v.push(M.morphTargetsCount),v.push(M.morphAttributeCount),v.push(M.numDirLights),v.push(M.numPointLights),v.push(M.numSpotLights),v.push(M.numSpotLightMaps),v.push(M.numHemiLights),v.push(M.numRectAreaLights),v.push(M.numDirLightShadows),v.push(M.numPointLightShadows),v.push(M.numSpotLightShadows),v.push(M.numSpotLightShadowsWithMaps),v.push(M.numLightProbes),v.push(M.shadowMapType),v.push(M.toneMapping),v.push(M.numClippingPlanes),v.push(M.numClipIntersection),v.push(M.depthPacking)}function S(v,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),v.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),v.push(a.mask)}function y(v){let M=m[v.type],T;if(M){let N=Ln[M];T=ch.clone(N.uniforms)}else T=v.uniforms;return T}function B(v,M){let T;for(let N=0,G=h.length;N<G;N++){let X=h[N];if(X.cacheKey===M){T=X,++T.usedTimes;break}}return T===void 0&&(T=new sy(s,M,v,r),h.push(T)),T}function P(v){if(--v.usedTimes===0){let M=h.indexOf(v);h[M]=h[h.length-1],h.pop(),v.destroy()}}function I(v){l.remove(v)}function w(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:y,acquireProgram:B,releaseProgram:P,releaseShaderCache:I,programs:h,dispose:w}}function ay(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function ly(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function ju(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Qu(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(u,f,d,m,x,g){let p=s[e];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:m,renderOrder:u.renderOrder,z:x,group:g},s[e]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=x,p.group=g),e++,p}function a(u,f,d,m,x,g){let p=o(u,f,d,m,x,g);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function l(u,f,d,m,x,g){let p=o(u,f,d,m,x,g);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function c(u,f){t.length>1&&t.sort(u||ly),n.length>1&&n.sort(f||ju),i.length>1&&i.sort(f||ju)}function h(){for(let u=e,f=s.length;u<f;u++){let d=s[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function cy(){let s=new WeakMap;function e(n,i){let r=s.get(n),o;return r===void 0?(o=new Qu,s.set(n,[o])):i>=r.length?(o=new Qu,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function hy(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new ke};break;case"SpotLight":t={position:new L,direction:new L,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new L,halfWidth:new L,halfHeight:new L};break}return s[e.id]=t,t}}}function uy(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var fy=0;function dy(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function py(s){let e=new hy,t=uy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);let i=new L,r=new We,o=new We;function a(c){let h=0,u=0,f=0;for(let v=0;v<9;v++)n.probe[v].set(0,0,0);let d=0,m=0,x=0,g=0,p=0,b=0,S=0,y=0,B=0,P=0,I=0;c.sort(dy);for(let v=0,M=c.length;v<M;v++){let T=c[v],N=T.color,G=T.intensity,X=T.distance,U=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)h+=N.r*G,u+=N.g*G,f+=N.b*G;else if(T.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(T.sh.coefficients[H],G);I++}else if(T.isDirectionalLight){let H=e.get(T);if(H.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let ne=T.shadow,J=t.get(T);J.shadowIntensity=ne.intensity,J.shadowBias=ne.bias,J.shadowNormalBias=ne.normalBias,J.shadowRadius=ne.radius,J.shadowMapSize=ne.mapSize,n.directionalShadow[d]=J,n.directionalShadowMap[d]=U,n.directionalShadowMatrix[d]=T.shadow.matrix,b++}n.directional[d]=H,d++}else if(T.isSpotLight){let H=e.get(T);H.position.setFromMatrixPosition(T.matrixWorld),H.color.copy(N).multiplyScalar(G),H.distance=X,H.coneCos=Math.cos(T.angle),H.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),H.decay=T.decay,n.spot[x]=H;let ne=T.shadow;if(T.map&&(n.spotLightMap[B]=T.map,B++,ne.updateMatrices(T),T.castShadow&&P++),n.spotLightMatrix[x]=ne.matrix,T.castShadow){let J=t.get(T);J.shadowIntensity=ne.intensity,J.shadowBias=ne.bias,J.shadowNormalBias=ne.normalBias,J.shadowRadius=ne.radius,J.shadowMapSize=ne.mapSize,n.spotShadow[x]=J,n.spotShadowMap[x]=U,y++}x++}else if(T.isRectAreaLight){let H=e.get(T);H.color.copy(N).multiplyScalar(G),H.halfWidth.set(T.width*.5,0,0),H.halfHeight.set(0,T.height*.5,0),n.rectArea[g]=H,g++}else if(T.isPointLight){let H=e.get(T);if(H.color.copy(T.color).multiplyScalar(T.intensity),H.distance=T.distance,H.decay=T.decay,T.castShadow){let ne=T.shadow,J=t.get(T);J.shadowIntensity=ne.intensity,J.shadowBias=ne.bias,J.shadowNormalBias=ne.normalBias,J.shadowRadius=ne.radius,J.shadowMapSize=ne.mapSize,J.shadowCameraNear=ne.camera.near,J.shadowCameraFar=ne.camera.far,n.pointShadow[m]=J,n.pointShadowMap[m]=U,n.pointShadowMatrix[m]=T.shadow.matrix,S++}n.point[m]=H,m++}else if(T.isHemisphereLight){let H=e.get(T);H.skyColor.copy(T.color).multiplyScalar(G),H.groundColor.copy(T.groundColor).multiplyScalar(G),n.hemi[p]=H,p++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Me.LTC_FLOAT_1,n.rectAreaLTC2=Me.LTC_FLOAT_2):(n.rectAreaLTC1=Me.LTC_HALF_1,n.rectAreaLTC2=Me.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let w=n.hash;(w.directionalLength!==d||w.pointLength!==m||w.spotLength!==x||w.rectAreaLength!==g||w.hemiLength!==p||w.numDirectionalShadows!==b||w.numPointShadows!==S||w.numSpotShadows!==y||w.numSpotMaps!==B||w.numLightProbes!==I)&&(n.directional.length=d,n.spot.length=x,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=y+B-P,n.spotLightMap.length=B,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=I,w.directionalLength=d,w.pointLength=m,w.spotLength=x,w.rectAreaLength=g,w.hemiLength=p,w.numDirectionalShadows=b,w.numPointShadows=S,w.numSpotShadows=y,w.numSpotMaps=B,w.numLightProbes=I,n.version=fy++)}function l(c,h){let u=0,f=0,d=0,m=0,x=0,g=h.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){let S=c[p];if(S.isDirectionalLight){let y=n.directional[u];y.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(g),u++}else if(S.isSpotLight){let y=n.spot[d];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(g),d++}else if(S.isRectAreaLight){let y=n.rectArea[m];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(g),o.identity(),r.copy(S.matrixWorld),r.premultiply(g),o.extractRotation(r),y.halfWidth.set(S.width*.5,0,0),y.halfHeight.set(0,S.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),m++}else if(S.isPointLight){let y=n.point[f];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(g),f++}else if(S.isHemisphereLight){let y=n.hemi[x];y.direction.setFromMatrixPosition(S.matrixWorld),y.direction.transformDirection(g),x++}}}return{setup:a,setupView:l,state:n}}function ef(s){let e=new py(s),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function my(s){let e=new WeakMap;function t(i,r=0){let o=e.get(i),a;return o===void 0?(a=new ef(s),e.set(i,[a])):r>=o.length?(a=new ef(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var Ac=class extends qt{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=lp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Rc=class extends qt{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},gy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_y=`uniform sampler2D shadow_pass;
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
}`;function yy(s,e,t){let n=new Dr,i=new ce,r=new ce,o=new st,a=new Ac({depthPacking:cp}),l=new Rc,c={},h=t.maxTextureSize,u={[Un]:Gt,[Gt]:Un,[vt]:vt},f=new pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:gy,fragmentShader:_y}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let m=new Mt;m.setAttribute("position",new At(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new xe(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Af;let p=this.type;this.render=function(P,I,w){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||P.length===0)return;let v=s.getRenderTarget(),M=s.getActiveCubeFace(),T=s.getActiveMipmapLevel(),N=s.state;N.setBlending(bi),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let G=p!==$n&&this.type===$n,X=p===$n&&this.type!==$n;for(let U=0,H=P.length;U<H;U++){let ne=P[U],J=ne.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;i.copy(J.mapSize);let pe=J.getFrameExtents();if(i.multiply(pe),r.copy(J.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/pe.x),i.x=r.x*pe.x,J.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/pe.y),i.y=r.y*pe.y,J.mapSize.y=r.y)),J.map===null||G===!0||X===!0){let ve=this.type!==$n?{minFilter:Bt,magFilter:Bt}:{};J.map!==null&&J.map.dispose(),J.map=new ti(i.x,i.y,ve),J.map.texture.name=ne.name+".shadowMap",J.camera.updateProjectionMatrix()}s.setRenderTarget(J.map),s.clear();let _e=J.getViewportCount();for(let ve=0;ve<_e;ve++){let Le=J.getViewport(ve);o.set(r.x*Le.x,r.y*Le.y,r.x*Le.z,r.y*Le.w),N.viewport(o),J.updateMatrices(ne,ve),n=J.getFrustum(),y(I,w,J.camera,ne,this.type)}J.isPointLightShadow!==!0&&this.type===$n&&b(J,w),J.needsUpdate=!1}p=this.type,g.needsUpdate=!1,s.setRenderTarget(v,M,T)};function b(P,I){let w=e.update(x);f.defines.VSM_SAMPLES!==P.blurSamples&&(f.defines.VSM_SAMPLES=P.blurSamples,d.defines.VSM_SAMPLES=P.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new ti(i.x,i.y)),f.uniforms.shadow_pass.value=P.map.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,s.setRenderTarget(P.mapPass),s.clear(),s.renderBufferDirect(I,null,w,f,x,null),d.uniforms.shadow_pass.value=P.mapPass.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,s.setRenderTarget(P.map),s.clear(),s.renderBufferDirect(I,null,w,d,x,null)}function S(P,I,w,v){let M=null,T=w.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(T!==void 0)M=T;else if(M=w.isPointLight===!0?l:a,s.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){let N=M.uuid,G=I.uuid,X=c[N];X===void 0&&(X={},c[N]=X);let U=X[G];U===void 0&&(U=M.clone(),X[G]=U,I.addEventListener("dispose",B)),M=U}if(M.visible=I.visible,M.wireframe=I.wireframe,v===$n?M.side=I.shadowSide!==null?I.shadowSide:I.side:M.side=I.shadowSide!==null?I.shadowSide:u[I.side],M.alphaMap=I.alphaMap,M.alphaTest=I.alphaTest,M.map=I.map,M.clipShadows=I.clipShadows,M.clippingPlanes=I.clippingPlanes,M.clipIntersection=I.clipIntersection,M.displacementMap=I.displacementMap,M.displacementScale=I.displacementScale,M.displacementBias=I.displacementBias,M.wireframeLinewidth=I.wireframeLinewidth,M.linewidth=I.linewidth,w.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let N=s.properties.get(M);N.light=w}return M}function y(P,I,w,v,M){if(P.visible===!1)return;if(P.layers.test(I.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&M===$n)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,P.matrixWorld);let G=e.update(P),X=P.material;if(Array.isArray(X)){let U=G.groups;for(let H=0,ne=U.length;H<ne;H++){let J=U[H],pe=X[J.materialIndex];if(pe&&pe.visible){let _e=S(P,pe,v,M);P.onBeforeShadow(s,P,I,w,G,_e,J),s.renderBufferDirect(w,null,G,_e,P,J),P.onAfterShadow(s,P,I,w,G,_e,J)}}}else if(X.visible){let U=S(P,X,v,M);P.onBeforeShadow(s,P,I,w,G,U,null),s.renderBufferDirect(w,null,G,U,P,null),P.onAfterShadow(s,P,I,w,G,U,null)}}let N=P.children;for(let G=0,X=N.length;G<X;G++)y(N[G],I,w,v,M)}function B(P){P.target.removeEventListener("dispose",B);for(let w in c){let v=c[w],M=P.target.uuid;M in v&&(v[M].dispose(),delete v[M])}}}var xy={[Nl]:Ul,[Ol]:kl,[Bl]:Hl,[Us]:Fl,[Ul]:Nl,[kl]:Ol,[Hl]:Bl,[Fl]:Us};function vy(s,e){function t(){let Y=!1,be=new st,se=null,fe=new st(0,0,0,0);return{setMask:function(Ae){se!==Ae&&!Y&&(s.colorMask(Ae,Ae,Ae,Ae),se=Ae)},setLocked:function(Ae){Y=Ae},setClear:function(Ae,Ee,Ye,Et,Ht){Ht===!0&&(Ae*=Et,Ee*=Et,Ye*=Et),be.set(Ae,Ee,Ye,Et),fe.equals(be)===!1&&(s.clearColor(Ae,Ee,Ye,Et),fe.copy(be))},reset:function(){Y=!1,se=null,fe.set(-1,0,0,0)}}}function n(){let Y=!1,be=!1,se=null,fe=null,Ae=null;return{setReversed:function(Ee){if(be!==Ee){let Ye=e.get("EXT_clip_control");be?Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.ZERO_TO_ONE_EXT):Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.NEGATIVE_ONE_TO_ONE_EXT);let Et=Ae;Ae=null,this.setClear(Et)}be=Ee},getReversed:function(){return be},setTest:function(Ee){Ee?O(s.DEPTH_TEST):W(s.DEPTH_TEST)},setMask:function(Ee){se!==Ee&&!Y&&(s.depthMask(Ee),se=Ee)},setFunc:function(Ee){if(be&&(Ee=xy[Ee]),fe!==Ee){switch(Ee){case Nl:s.depthFunc(s.NEVER);break;case Ul:s.depthFunc(s.ALWAYS);break;case Ol:s.depthFunc(s.LESS);break;case Us:s.depthFunc(s.LEQUAL);break;case Bl:s.depthFunc(s.EQUAL);break;case Fl:s.depthFunc(s.GEQUAL);break;case kl:s.depthFunc(s.GREATER);break;case Hl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}fe=Ee}},setLocked:function(Ee){Y=Ee},setClear:function(Ee){Ae!==Ee&&(be&&(Ee=1-Ee),s.clearDepth(Ee),Ae=Ee)},reset:function(){Y=!1,se=null,fe=null,Ae=null,be=!1}}}function i(){let Y=!1,be=null,se=null,fe=null,Ae=null,Ee=null,Ye=null,Et=null,Ht=null;return{setTest:function(at){Y||(at?O(s.STENCIL_TEST):W(s.STENCIL_TEST))},setMask:function(at){be!==at&&!Y&&(s.stencilMask(at),be=at)},setFunc:function(at,vn,Vn){(se!==at||fe!==vn||Ae!==Vn)&&(s.stencilFunc(at,vn,Vn),se=at,fe=vn,Ae=Vn)},setOp:function(at,vn,Vn){(Ee!==at||Ye!==vn||Et!==Vn)&&(s.stencilOp(at,vn,Vn),Ee=at,Ye=vn,Et=Vn)},setLocked:function(at){Y=at},setClear:function(at){Ht!==at&&(s.clearStencil(at),Ht=at)},reset:function(){Y=!1,be=null,se=null,fe=null,Ae=null,Ee=null,Ye=null,Et=null,Ht=null}}}let r=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap,h={},u={},f=new WeakMap,d=[],m=null,x=!1,g=null,p=null,b=null,S=null,y=null,B=null,P=null,I=new ke(0,0,0),w=0,v=!1,M=null,T=null,N=null,G=null,X=null,U=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,ne=0,J=s.getParameter(s.VERSION);J.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(J)[1]),H=ne>=1):J.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),H=ne>=2);let pe=null,_e={},ve=s.getParameter(s.SCISSOR_BOX),Le=s.getParameter(s.VIEWPORT),He=new st().fromArray(ve),re=new st().fromArray(Le);function ie(Y,be,se,fe){let Ae=new Uint8Array(4),Ee=s.createTexture();s.bindTexture(Y,Ee),s.texParameteri(Y,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(Y,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ye=0;Ye<se;Ye++)Y===s.TEXTURE_3D||Y===s.TEXTURE_2D_ARRAY?s.texImage3D(be,0,s.RGBA,1,1,fe,0,s.RGBA,s.UNSIGNED_BYTE,Ae):s.texImage2D(be+Ye,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ae);return Ee}let _={};_[s.TEXTURE_2D]=ie(s.TEXTURE_2D,s.TEXTURE_2D,1),_[s.TEXTURE_CUBE_MAP]=ie(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),_[s.TEXTURE_2D_ARRAY]=ie(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),_[s.TEXTURE_3D]=ie(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),O(s.DEPTH_TEST),o.setFunc(Us),$(!1),de(ru),O(s.CULL_FACE),R(bi);function O(Y){h[Y]!==!0&&(s.enable(Y),h[Y]=!0)}function W(Y){h[Y]!==!1&&(s.disable(Y),h[Y]=!1)}function q(Y,be){return u[Y]!==be?(s.bindFramebuffer(Y,be),u[Y]=be,Y===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=be),Y===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=be),!0):!1}function he(Y,be){let se=d,fe=!1;if(Y){se=f.get(be),se===void 0&&(se=[],f.set(be,se));let Ae=Y.textures;if(se.length!==Ae.length||se[0]!==s.COLOR_ATTACHMENT0){for(let Ee=0,Ye=Ae.length;Ee<Ye;Ee++)se[Ee]=s.COLOR_ATTACHMENT0+Ee;se.length=Ae.length,fe=!0}}else se[0]!==s.BACK&&(se[0]=s.BACK,fe=!0);fe&&s.drawBuffers(se)}function V(Y){return m!==Y?(s.useProgram(Y),m=Y,!0):!1}let z={[zi]:s.FUNC_ADD,[Id]:s.FUNC_SUBTRACT,[Ld]:s.FUNC_REVERSE_SUBTRACT};z[Dd]=s.MIN,z[Nd]=s.MAX;let D={[Ud]:s.ZERO,[Od]:s.ONE,[Bd]:s.SRC_COLOR,[Ll]:s.SRC_ALPHA,[Gd]:s.SRC_ALPHA_SATURATE,[zd]:s.DST_COLOR,[kd]:s.DST_ALPHA,[Fd]:s.ONE_MINUS_SRC_COLOR,[Dl]:s.ONE_MINUS_SRC_ALPHA,[Vd]:s.ONE_MINUS_DST_COLOR,[Hd]:s.ONE_MINUS_DST_ALPHA,[Wd]:s.CONSTANT_COLOR,[Xd]:s.ONE_MINUS_CONSTANT_COLOR,[Yd]:s.CONSTANT_ALPHA,[qd]:s.ONE_MINUS_CONSTANT_ALPHA};function R(Y,be,se,fe,Ae,Ee,Ye,Et,Ht,at){if(Y===bi){x===!0&&(W(s.BLEND),x=!1);return}if(x===!1&&(O(s.BLEND),x=!0),Y!==Pd){if(Y!==g||at!==v){if((p!==zi||y!==zi)&&(s.blendEquation(s.FUNC_ADD),p=zi,y=zi),at)switch(Y){case Ps:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ns:s.blendFunc(s.ONE,s.ONE);break;case ou:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case au:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}else switch(Y){case Ps:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ns:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case ou:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case au:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}b=null,S=null,B=null,P=null,I.set(0,0,0),w=0,g=Y,v=at}return}Ae=Ae||be,Ee=Ee||se,Ye=Ye||fe,(be!==p||Ae!==y)&&(s.blendEquationSeparate(z[be],z[Ae]),p=be,y=Ae),(se!==b||fe!==S||Ee!==B||Ye!==P)&&(s.blendFuncSeparate(D[se],D[fe],D[Ee],D[Ye]),b=se,S=fe,B=Ee,P=Ye),(Et.equals(I)===!1||Ht!==w)&&(s.blendColor(Et.r,Et.g,Et.b,Ht),I.copy(Et),w=Ht),g=Y,v=!1}function ae(Y,be){Y.side===vt?W(s.CULL_FACE):O(s.CULL_FACE);let se=Y.side===Gt;be&&(se=!se),$(se),Y.blending===Ps&&Y.transparent===!1?R(bi):R(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),o.setFunc(Y.depthFunc),o.setTest(Y.depthTest),o.setMask(Y.depthWrite),r.setMask(Y.colorWrite);let fe=Y.stencilWrite;a.setTest(fe),fe&&(a.setMask(Y.stencilWriteMask),a.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),a.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),we(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?O(s.SAMPLE_ALPHA_TO_COVERAGE):W(s.SAMPLE_ALPHA_TO_COVERAGE)}function $(Y){M!==Y&&(Y?s.frontFace(s.CW):s.frontFace(s.CCW),M=Y)}function de(Y){Y!==Rd?(O(s.CULL_FACE),Y!==T&&(Y===ru?s.cullFace(s.BACK):Y===Cd?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):W(s.CULL_FACE),T=Y}function ue(Y){Y!==N&&(H&&s.lineWidth(Y),N=Y)}function we(Y,be,se){Y?(O(s.POLYGON_OFFSET_FILL),(G!==be||X!==se)&&(s.polygonOffset(be,se),G=be,X=se)):W(s.POLYGON_OFFSET_FILL)}function F(Y){Y?O(s.SCISSOR_TEST):W(s.SCISSOR_TEST)}function A(Y){Y===void 0&&(Y=s.TEXTURE0+U-1),pe!==Y&&(s.activeTexture(Y),pe=Y)}function E(Y,be,se){se===void 0&&(pe===null?se=s.TEXTURE0+U-1:se=pe);let fe=_e[se];fe===void 0&&(fe={type:void 0,texture:void 0},_e[se]=fe),(fe.type!==Y||fe.texture!==be)&&(pe!==se&&(s.activeTexture(se),pe=se),s.bindTexture(Y,be||_[Y]),fe.type=Y,fe.texture=be)}function k(){let Y=_e[pe];Y!==void 0&&Y.type!==void 0&&(s.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function j(){try{s.compressedTexImage2D.apply(s,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function oe(){try{s.compressedTexImage3D.apply(s,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function le(){try{s.texSubImage2D.apply(s,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function De(){try{s.texSubImage3D.apply(s,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Se(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Re(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function et(){try{s.texStorage2D.apply(s,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ge(){try{s.texStorage3D.apply(s,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ce(){try{s.texImage2D.apply(s,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ze(){try{s.texImage3D.apply(s,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ve(Y){He.equals(Y)===!1&&(s.scissor(Y.x,Y.y,Y.z,Y.w),He.copy(Y))}function Pe(Y){re.equals(Y)===!1&&(s.viewport(Y.x,Y.y,Y.z,Y.w),re.copy(Y))}function nt(Y,be){let se=c.get(be);se===void 0&&(se=new WeakMap,c.set(be,se));let fe=se.get(Y);fe===void 0&&(fe=s.getUniformBlockIndex(be,Y.name),se.set(Y,fe))}function Ze(Y,be){let fe=c.get(be).get(Y);l.get(be)!==fe&&(s.uniformBlockBinding(be,fe,Y.__bindingPointIndex),l.set(be,fe))}function pt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},pe=null,_e={},u={},f=new WeakMap,d=[],m=null,x=!1,g=null,p=null,b=null,S=null,y=null,B=null,P=null,I=new ke(0,0,0),w=0,v=!1,M=null,T=null,N=null,G=null,X=null,He.set(0,0,s.canvas.width,s.canvas.height),re.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:O,disable:W,bindFramebuffer:q,drawBuffers:he,useProgram:V,setBlending:R,setMaterial:ae,setFlipSided:$,setCullFace:de,setLineWidth:ue,setPolygonOffset:we,setScissorTest:F,activeTexture:A,bindTexture:E,unbindTexture:k,compressedTexImage2D:j,compressedTexImage3D:oe,texImage2D:Ce,texImage3D:ze,updateUBOMapping:nt,uniformBlockBinding:Ze,texStorage2D:et,texStorage3D:ge,texSubImage2D:le,texSubImage3D:De,compressedTexSubImage2D:Se,compressedTexSubImage3D:Re,scissor:Ve,viewport:Pe,reset:pt}}function tf(s,e,t,n){let i=My(n);switch(t){case Df:return s*e;case Uf:return s*e;case Of:return s*e*2;case qr:return s*e/i.components*i.byteLength;case ih:return s*e/i.components*i.byteLength;case Bf:return s*e*2/i.components*i.byteLength;case sh:return s*e*2/i.components*i.byteLength;case Nf:return s*e*3/i.components*i.byteLength;case fn:return s*e*4/i.components*i.byteLength;case rh:return s*e*4/i.components*i.byteLength;case ko:case Ho:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case zo:case Vo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Wl:case Yl:return Math.max(s,16)*Math.max(e,8)/4;case Gl:case Xl:return Math.max(s,8)*Math.max(e,8)/2;case ql:case Kl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Zl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case $l:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Jl:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case jl:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Ql:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case ec:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case tc:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case nc:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case ic:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case sc:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case rc:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case oc:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case ac:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case lc:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case cc:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Go:case hc:case uc:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Ff:case fc:return Math.ceil(s/4)*Math.ceil(e/4)*8;case dc:case pc:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function My(s){switch(s){case ei:case Pf:return{byteLength:1,components:1};case Ir:case If:case Yr:return{byteLength:2,components:1};case th:case nh:return{byteLength:2,components:4};case Gi:case eh:case An:return{byteLength:4,components:1};case Lf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function Sy(s,e,t,n,i,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ce,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(A,E){return d?new OffscreenCanvas(A,E):Lr("canvas")}function x(A,E,k){let j=1,oe=F(A);if((oe.width>k||oe.height>k)&&(j=k/Math.max(oe.width,oe.height)),j<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let le=Math.floor(j*oe.width),De=Math.floor(j*oe.height);u===void 0&&(u=m(le,De));let Se=E?m(le,De):u;return Se.width=le,Se.height=De,Se.getContext("2d").drawImage(A,0,0,le,De),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+le+"x"+De+")."),Se}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),A;return A}function g(A){return A.generateMipmaps}function p(A){s.generateMipmap(A)}function b(A){return A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?s.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function S(A,E,k,j,oe=!1){if(A!==null){if(s[A]!==void 0)return s[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let le=E;if(E===s.RED&&(k===s.FLOAT&&(le=s.R32F),k===s.HALF_FLOAT&&(le=s.R16F),k===s.UNSIGNED_BYTE&&(le=s.R8)),E===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&(le=s.R8UI),k===s.UNSIGNED_SHORT&&(le=s.R16UI),k===s.UNSIGNED_INT&&(le=s.R32UI),k===s.BYTE&&(le=s.R8I),k===s.SHORT&&(le=s.R16I),k===s.INT&&(le=s.R32I)),E===s.RG&&(k===s.FLOAT&&(le=s.RG32F),k===s.HALF_FLOAT&&(le=s.RG16F),k===s.UNSIGNED_BYTE&&(le=s.RG8)),E===s.RG_INTEGER&&(k===s.UNSIGNED_BYTE&&(le=s.RG8UI),k===s.UNSIGNED_SHORT&&(le=s.RG16UI),k===s.UNSIGNED_INT&&(le=s.RG32UI),k===s.BYTE&&(le=s.RG8I),k===s.SHORT&&(le=s.RG16I),k===s.INT&&(le=s.RG32I)),E===s.RGB_INTEGER&&(k===s.UNSIGNED_BYTE&&(le=s.RGB8UI),k===s.UNSIGNED_SHORT&&(le=s.RGB16UI),k===s.UNSIGNED_INT&&(le=s.RGB32UI),k===s.BYTE&&(le=s.RGB8I),k===s.SHORT&&(le=s.RGB16I),k===s.INT&&(le=s.RGB32I)),E===s.RGBA_INTEGER&&(k===s.UNSIGNED_BYTE&&(le=s.RGBA8UI),k===s.UNSIGNED_SHORT&&(le=s.RGBA16UI),k===s.UNSIGNED_INT&&(le=s.RGBA32UI),k===s.BYTE&&(le=s.RGBA8I),k===s.SHORT&&(le=s.RGBA16I),k===s.INT&&(le=s.RGBA32I)),E===s.RGB&&k===s.UNSIGNED_INT_5_9_9_9_REV&&(le=s.RGB9_E5),E===s.RGBA){let De=oe?Pa:tt.getTransfer(j);k===s.FLOAT&&(le=s.RGBA32F),k===s.HALF_FLOAT&&(le=s.RGBA16F),k===s.UNSIGNED_BYTE&&(le=De===ct?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT_4_4_4_4&&(le=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&(le=s.RGB5_A1)}return(le===s.R16F||le===s.R32F||le===s.RG16F||le===s.RG32F||le===s.RGBA16F||le===s.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function y(A,E){let k;return A?E===null||E===Gi||E===Fs?k=s.DEPTH24_STENCIL8:E===An?k=s.DEPTH32F_STENCIL8:E===Ir&&(k=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Gi||E===Fs?k=s.DEPTH_COMPONENT24:E===An?k=s.DEPTH_COMPONENT32F:E===Ir&&(k=s.DEPTH_COMPONENT16),k}function B(A,E){return g(A)===!0||A.isFramebufferTexture&&A.minFilter!==Bt&&A.minFilter!==Zt?Math.log2(Math.max(E.width,E.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?E.mipmaps.length:1}function P(A){let E=A.target;E.removeEventListener("dispose",P),w(E),E.isVideoTexture&&h.delete(E)}function I(A){let E=A.target;E.removeEventListener("dispose",I),M(E)}function w(A){let E=n.get(A);if(E.__webglInit===void 0)return;let k=A.source,j=f.get(k);if(j){let oe=j[E.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&v(A),Object.keys(j).length===0&&f.delete(k)}n.remove(A)}function v(A){let E=n.get(A);s.deleteTexture(E.__webglTexture);let k=A.source,j=f.get(k);delete j[E.__cacheKey],o.memory.textures--}function M(A){let E=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(E.__webglFramebuffer[j]))for(let oe=0;oe<E.__webglFramebuffer[j].length;oe++)s.deleteFramebuffer(E.__webglFramebuffer[j][oe]);else s.deleteFramebuffer(E.__webglFramebuffer[j]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[j])}else{if(Array.isArray(E.__webglFramebuffer))for(let j=0;j<E.__webglFramebuffer.length;j++)s.deleteFramebuffer(E.__webglFramebuffer[j]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let j=0;j<E.__webglColorRenderbuffer.length;j++)E.__webglColorRenderbuffer[j]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[j]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let k=A.textures;for(let j=0,oe=k.length;j<oe;j++){let le=n.get(k[j]);le.__webglTexture&&(s.deleteTexture(le.__webglTexture),o.memory.textures--),n.remove(k[j])}n.remove(A)}let T=0;function N(){T=0}function G(){let A=T;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),T+=1,A}function X(A){let E=[];return E.push(A.wrapS),E.push(A.wrapT),E.push(A.wrapR||0),E.push(A.magFilter),E.push(A.minFilter),E.push(A.anisotropy),E.push(A.internalFormat),E.push(A.format),E.push(A.type),E.push(A.generateMipmaps),E.push(A.premultiplyAlpha),E.push(A.flipY),E.push(A.unpackAlignment),E.push(A.colorSpace),E.join()}function U(A,E){let k=n.get(A);if(A.isVideoTexture&&ue(A),A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){let j=A.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{re(k,A,E);return}}t.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+E)}function H(A,E){let k=n.get(A);if(A.version>0&&k.__version!==A.version){re(k,A,E);return}t.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+E)}function ne(A,E){let k=n.get(A);if(A.version>0&&k.__version!==A.version){re(k,A,E);return}t.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+E)}function J(A,E){let k=n.get(A);if(A.version>0&&k.__version!==A.version){ie(k,A,E);return}t.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+E)}let pe={[On]:s.REPEAT,[Jn]:s.CLAMP_TO_EDGE,[Pr]:s.MIRRORED_REPEAT},_e={[Bt]:s.NEAREST,[Qc]:s.NEAREST_MIPMAP_NEAREST,[Ts]:s.NEAREST_MIPMAP_LINEAR,[Zt]:s.LINEAR,[br]:s.LINEAR_MIPMAP_NEAREST,[Dn]:s.LINEAR_MIPMAP_LINEAR},ve={[up]:s.NEVER,[_p]:s.ALWAYS,[fp]:s.LESS,[Hf]:s.LEQUAL,[dp]:s.EQUAL,[gp]:s.GEQUAL,[pp]:s.GREATER,[mp]:s.NOTEQUAL};function Le(A,E){if(E.type===An&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Zt||E.magFilter===br||E.magFilter===Ts||E.magFilter===Dn||E.minFilter===Zt||E.minFilter===br||E.minFilter===Ts||E.minFilter===Dn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(A,s.TEXTURE_WRAP_S,pe[E.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,pe[E.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,pe[E.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,_e[E.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,_e[E.minFilter]),E.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,ve[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Bt||E.minFilter!==Ts&&E.minFilter!==Dn||E.type===An&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let k=e.get("EXT_texture_filter_anisotropic");s.texParameterf(A,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function He(A,E){let k=!1;A.__webglInit===void 0&&(A.__webglInit=!0,E.addEventListener("dispose",P));let j=E.source,oe=f.get(j);oe===void 0&&(oe={},f.set(j,oe));let le=X(E);if(le!==A.__cacheKey){oe[le]===void 0&&(oe[le]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,k=!0),oe[le].usedTimes++;let De=oe[A.__cacheKey];De!==void 0&&(oe[A.__cacheKey].usedTimes--,De.usedTimes===0&&v(E)),A.__cacheKey=le,A.__webglTexture=oe[le].texture}return k}function re(A,E,k){let j=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(j=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(j=s.TEXTURE_3D);let oe=He(A,E),le=E.source;t.bindTexture(j,A.__webglTexture,s.TEXTURE0+k);let De=n.get(le);if(le.version!==De.__version||oe===!0){t.activeTexture(s.TEXTURE0+k);let Se=tt.getPrimaries(tt.workingColorSpace),Re=E.colorSpace===vi?null:tt.getPrimaries(E.colorSpace),et=E.colorSpace===vi||Se===Re?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let ge=x(E.image,!1,i.maxTextureSize);ge=we(E,ge);let Ce=r.convert(E.format,E.colorSpace),ze=r.convert(E.type),Ve=S(E.internalFormat,Ce,ze,E.colorSpace,E.isVideoTexture);Le(j,E);let Pe,nt=E.mipmaps,Ze=E.isVideoTexture!==!0,pt=De.__version===void 0||oe===!0,Y=le.dataReady,be=B(E,ge);if(E.isDepthTexture)Ve=y(E.format===ks,E.type),pt&&(Ze?t.texStorage2D(s.TEXTURE_2D,1,Ve,ge.width,ge.height):t.texImage2D(s.TEXTURE_2D,0,Ve,ge.width,ge.height,0,Ce,ze,null));else if(E.isDataTexture)if(nt.length>0){Ze&&pt&&t.texStorage2D(s.TEXTURE_2D,be,Ve,nt[0].width,nt[0].height);for(let se=0,fe=nt.length;se<fe;se++)Pe=nt[se],Ze?Y&&t.texSubImage2D(s.TEXTURE_2D,se,0,0,Pe.width,Pe.height,Ce,ze,Pe.data):t.texImage2D(s.TEXTURE_2D,se,Ve,Pe.width,Pe.height,0,Ce,ze,Pe.data);E.generateMipmaps=!1}else Ze?(pt&&t.texStorage2D(s.TEXTURE_2D,be,Ve,ge.width,ge.height),Y&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ge.width,ge.height,Ce,ze,ge.data)):t.texImage2D(s.TEXTURE_2D,0,Ve,ge.width,ge.height,0,Ce,ze,ge.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ze&&pt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,be,Ve,nt[0].width,nt[0].height,ge.depth);for(let se=0,fe=nt.length;se<fe;se++)if(Pe=nt[se],E.format!==fn)if(Ce!==null)if(Ze){if(Y)if(E.layerUpdates.size>0){let Ae=tf(Pe.width,Pe.height,E.format,E.type);for(let Ee of E.layerUpdates){let Ye=Pe.data.subarray(Ee*Ae/Pe.data.BYTES_PER_ELEMENT,(Ee+1)*Ae/Pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,Ee,Pe.width,Pe.height,1,Ce,Ye)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,0,Pe.width,Pe.height,ge.depth,Ce,Pe.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,se,Ve,Pe.width,Pe.height,ge.depth,0,Pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ze?Y&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,0,Pe.width,Pe.height,ge.depth,Ce,ze,Pe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,se,Ve,Pe.width,Pe.height,ge.depth,0,Ce,ze,Pe.data)}else{Ze&&pt&&t.texStorage2D(s.TEXTURE_2D,be,Ve,nt[0].width,nt[0].height);for(let se=0,fe=nt.length;se<fe;se++)Pe=nt[se],E.format!==fn?Ce!==null?Ze?Y&&t.compressedTexSubImage2D(s.TEXTURE_2D,se,0,0,Pe.width,Pe.height,Ce,Pe.data):t.compressedTexImage2D(s.TEXTURE_2D,se,Ve,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?Y&&t.texSubImage2D(s.TEXTURE_2D,se,0,0,Pe.width,Pe.height,Ce,ze,Pe.data):t.texImage2D(s.TEXTURE_2D,se,Ve,Pe.width,Pe.height,0,Ce,ze,Pe.data)}else if(E.isDataArrayTexture)if(Ze){if(pt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,be,Ve,ge.width,ge.height,ge.depth),Y)if(E.layerUpdates.size>0){let se=tf(ge.width,ge.height,E.format,E.type);for(let fe of E.layerUpdates){let Ae=ge.data.subarray(fe*se/ge.data.BYTES_PER_ELEMENT,(fe+1)*se/ge.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,fe,ge.width,ge.height,1,Ce,ze,Ae)}E.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,Ce,ze,ge.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ve,ge.width,ge.height,ge.depth,0,Ce,ze,ge.data);else if(E.isData3DTexture)Ze?(pt&&t.texStorage3D(s.TEXTURE_3D,be,Ve,ge.width,ge.height,ge.depth),Y&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,Ce,ze,ge.data)):t.texImage3D(s.TEXTURE_3D,0,Ve,ge.width,ge.height,ge.depth,0,Ce,ze,ge.data);else if(E.isFramebufferTexture){if(pt)if(Ze)t.texStorage2D(s.TEXTURE_2D,be,Ve,ge.width,ge.height);else{let se=ge.width,fe=ge.height;for(let Ae=0;Ae<be;Ae++)t.texImage2D(s.TEXTURE_2D,Ae,Ve,se,fe,0,Ce,ze,null),se>>=1,fe>>=1}}else if(nt.length>0){if(Ze&&pt){let se=F(nt[0]);t.texStorage2D(s.TEXTURE_2D,be,Ve,se.width,se.height)}for(let se=0,fe=nt.length;se<fe;se++)Pe=nt[se],Ze?Y&&t.texSubImage2D(s.TEXTURE_2D,se,0,0,Ce,ze,Pe):t.texImage2D(s.TEXTURE_2D,se,Ve,Ce,ze,Pe);E.generateMipmaps=!1}else if(Ze){if(pt){let se=F(ge);t.texStorage2D(s.TEXTURE_2D,be,Ve,se.width,se.height)}Y&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ce,ze,ge)}else t.texImage2D(s.TEXTURE_2D,0,Ve,Ce,ze,ge);g(E)&&p(j),De.__version=le.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function ie(A,E,k){if(E.image.length!==6)return;let j=He(A,E),oe=E.source;t.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+k);let le=n.get(oe);if(oe.version!==le.__version||j===!0){t.activeTexture(s.TEXTURE0+k);let De=tt.getPrimaries(tt.workingColorSpace),Se=E.colorSpace===vi?null:tt.getPrimaries(E.colorSpace),Re=E.colorSpace===vi||De===Se?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);let et=E.isCompressedTexture||E.image[0].isCompressedTexture,ge=E.image[0]&&E.image[0].isDataTexture,Ce=[];for(let fe=0;fe<6;fe++)!et&&!ge?Ce[fe]=x(E.image[fe],!0,i.maxCubemapSize):Ce[fe]=ge?E.image[fe].image:E.image[fe],Ce[fe]=we(E,Ce[fe]);let ze=Ce[0],Ve=r.convert(E.format,E.colorSpace),Pe=r.convert(E.type),nt=S(E.internalFormat,Ve,Pe,E.colorSpace),Ze=E.isVideoTexture!==!0,pt=le.__version===void 0||j===!0,Y=oe.dataReady,be=B(E,ze);Le(s.TEXTURE_CUBE_MAP,E);let se;if(et){Ze&&pt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,be,nt,ze.width,ze.height);for(let fe=0;fe<6;fe++){se=Ce[fe].mipmaps;for(let Ae=0;Ae<se.length;Ae++){let Ee=se[Ae];E.format!==fn?Ve!==null?Ze?Y&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ae,0,0,Ee.width,Ee.height,Ve,Ee.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ae,nt,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ze?Y&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ae,0,0,Ee.width,Ee.height,Ve,Pe,Ee.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ae,nt,Ee.width,Ee.height,0,Ve,Pe,Ee.data)}}}else{if(se=E.mipmaps,Ze&&pt){se.length>0&&be++;let fe=F(Ce[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,be,nt,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(ge){Ze?Y&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Ce[fe].width,Ce[fe].height,Ve,Pe,Ce[fe].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,nt,Ce[fe].width,Ce[fe].height,0,Ve,Pe,Ce[fe].data);for(let Ae=0;Ae<se.length;Ae++){let Ye=se[Ae].image[fe].image;Ze?Y&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ae+1,0,0,Ye.width,Ye.height,Ve,Pe,Ye.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ae+1,nt,Ye.width,Ye.height,0,Ve,Pe,Ye.data)}}else{Ze?Y&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Ve,Pe,Ce[fe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,nt,Ve,Pe,Ce[fe]);for(let Ae=0;Ae<se.length;Ae++){let Ee=se[Ae];Ze?Y&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ae+1,0,0,Ve,Pe,Ee.image[fe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ae+1,nt,Ve,Pe,Ee.image[fe])}}}g(E)&&p(s.TEXTURE_CUBE_MAP),le.__version=oe.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function _(A,E,k,j,oe,le){let De=r.convert(k.format,k.colorSpace),Se=r.convert(k.type),Re=S(k.internalFormat,De,Se,k.colorSpace),et=n.get(E),ge=n.get(k);if(ge.__renderTarget=E,!et.__hasExternalTextures){let Ce=Math.max(1,E.width>>le),ze=Math.max(1,E.height>>le);oe===s.TEXTURE_3D||oe===s.TEXTURE_2D_ARRAY?t.texImage3D(oe,le,Re,Ce,ze,E.depth,0,De,Se,null):t.texImage2D(oe,le,Re,Ce,ze,0,De,Se,null)}t.bindFramebuffer(s.FRAMEBUFFER,A),de(E)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,j,oe,ge.__webglTexture,0,$(E)):(oe===s.TEXTURE_2D||oe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,j,oe,ge.__webglTexture,le),t.bindFramebuffer(s.FRAMEBUFFER,null)}function O(A,E,k){if(s.bindRenderbuffer(s.RENDERBUFFER,A),E.depthBuffer){let j=E.depthTexture,oe=j&&j.isDepthTexture?j.type:null,le=y(E.stencilBuffer,oe),De=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Se=$(E);de(E)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Se,le,E.width,E.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,Se,le,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,le,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,De,s.RENDERBUFFER,A)}else{let j=E.textures;for(let oe=0;oe<j.length;oe++){let le=j[oe],De=r.convert(le.format,le.colorSpace),Se=r.convert(le.type),Re=S(le.internalFormat,De,Se,le.colorSpace),et=$(E);k&&de(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,et,Re,E.width,E.height):de(E)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,et,Re,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Re,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function W(A,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,A),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let j=n.get(E.depthTexture);j.__renderTarget=E,(!j.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),U(E.depthTexture,0);let oe=j.__webglTexture,le=$(E);if(E.depthTexture.format===Is)de(E)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,oe,0,le):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,oe,0);else if(E.depthTexture.format===ks)de(E)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,oe,0,le):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,oe,0);else throw new Error("Unknown depthTexture format")}function q(A){let E=n.get(A),k=A.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==A.depthTexture){let j=A.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),j){let oe=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,j.removeEventListener("dispose",oe)};j.addEventListener("dispose",oe),E.__depthDisposeCallback=oe}E.__boundDepthTexture=j}if(A.depthTexture&&!E.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");W(E.__webglFramebuffer,A)}else if(k){E.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[j]),E.__webglDepthbuffer[j]===void 0)E.__webglDepthbuffer[j]=s.createRenderbuffer(),O(E.__webglDepthbuffer[j],A,!1);else{let oe=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,le=E.__webglDepthbuffer[j];s.bindRenderbuffer(s.RENDERBUFFER,le),s.framebufferRenderbuffer(s.FRAMEBUFFER,oe,s.RENDERBUFFER,le)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),O(E.__webglDepthbuffer,A,!1);else{let j=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,oe=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,oe),s.framebufferRenderbuffer(s.FRAMEBUFFER,j,s.RENDERBUFFER,oe)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function he(A,E,k){let j=n.get(A);E!==void 0&&_(j.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&q(A)}function V(A){let E=A.texture,k=n.get(A),j=n.get(E);A.addEventListener("dispose",I);let oe=A.textures,le=A.isWebGLCubeRenderTarget===!0,De=oe.length>1;if(De||(j.__webglTexture===void 0&&(j.__webglTexture=s.createTexture()),j.__version=E.version,o.memory.textures++),le){k.__webglFramebuffer=[];for(let Se=0;Se<6;Se++)if(E.mipmaps&&E.mipmaps.length>0){k.__webglFramebuffer[Se]=[];for(let Re=0;Re<E.mipmaps.length;Re++)k.__webglFramebuffer[Se][Re]=s.createFramebuffer()}else k.__webglFramebuffer[Se]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){k.__webglFramebuffer=[];for(let Se=0;Se<E.mipmaps.length;Se++)k.__webglFramebuffer[Se]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(De)for(let Se=0,Re=oe.length;Se<Re;Se++){let et=n.get(oe[Se]);et.__webglTexture===void 0&&(et.__webglTexture=s.createTexture(),o.memory.textures++)}if(A.samples>0&&de(A)===!1){k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let Se=0;Se<oe.length;Se++){let Re=oe[Se];k.__webglColorRenderbuffer[Se]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[Se]);let et=r.convert(Re.format,Re.colorSpace),ge=r.convert(Re.type),Ce=S(Re.internalFormat,et,ge,Re.colorSpace,A.isXRRenderTarget===!0),ze=$(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,ze,Ce,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Se,s.RENDERBUFFER,k.__webglColorRenderbuffer[Se])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),O(k.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(le){t.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture),Le(s.TEXTURE_CUBE_MAP,E);for(let Se=0;Se<6;Se++)if(E.mipmaps&&E.mipmaps.length>0)for(let Re=0;Re<E.mipmaps.length;Re++)_(k.__webglFramebuffer[Se][Re],A,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Re);else _(k.__webglFramebuffer[Se],A,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0);g(E)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(De){for(let Se=0,Re=oe.length;Se<Re;Se++){let et=oe[Se],ge=n.get(et);t.bindTexture(s.TEXTURE_2D,ge.__webglTexture),Le(s.TEXTURE_2D,et),_(k.__webglFramebuffer,A,et,s.COLOR_ATTACHMENT0+Se,s.TEXTURE_2D,0),g(et)&&p(s.TEXTURE_2D)}t.unbindTexture()}else{let Se=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Se=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Se,j.__webglTexture),Le(Se,E),E.mipmaps&&E.mipmaps.length>0)for(let Re=0;Re<E.mipmaps.length;Re++)_(k.__webglFramebuffer[Re],A,E,s.COLOR_ATTACHMENT0,Se,Re);else _(k.__webglFramebuffer,A,E,s.COLOR_ATTACHMENT0,Se,0);g(E)&&p(Se),t.unbindTexture()}A.depthBuffer&&q(A)}function z(A){let E=A.textures;for(let k=0,j=E.length;k<j;k++){let oe=E[k];if(g(oe)){let le=b(A),De=n.get(oe).__webglTexture;t.bindTexture(le,De),p(le),t.unbindTexture()}}}let D=[],R=[];function ae(A){if(A.samples>0){if(de(A)===!1){let E=A.textures,k=A.width,j=A.height,oe=s.COLOR_BUFFER_BIT,le=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,De=n.get(A),Se=E.length>1;if(Se)for(let Re=0;Re<E.length;Re++)t.bindFramebuffer(s.FRAMEBUFFER,De.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,De.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let Re=0;Re<E.length;Re++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(oe|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(oe|=s.STENCIL_BUFFER_BIT)),Se){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,De.__webglColorRenderbuffer[Re]);let et=n.get(E[Re]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,et,0)}s.blitFramebuffer(0,0,k,j,0,0,k,j,oe,s.NEAREST),l===!0&&(D.length=0,R.length=0,D.push(s.COLOR_ATTACHMENT0+Re),A.depthBuffer&&A.resolveDepthBuffer===!1&&(D.push(le),R.push(le),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,R)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,D))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Se)for(let Re=0;Re<E.length;Re++){t.bindFramebuffer(s.FRAMEBUFFER,De.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.RENDERBUFFER,De.__webglColorRenderbuffer[Re]);let et=n.get(E[Re]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,De.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.TEXTURE_2D,et,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let E=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function $(A){return Math.min(i.maxSamples,A.samples)}function de(A){let E=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ue(A){let E=o.render.frame;h.get(A)!==E&&(h.set(A,E),A.update())}function we(A,E){let k=A.colorSpace,j=A.format,oe=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||k!==Wt&&k!==vi&&(tt.getTransfer(k)===ct?(j!==fn||oe!==ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),E}function F(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=N,this.setTexture2D=U,this.setTexture2DArray=H,this.setTexture3D=ne,this.setTextureCube=J,this.rebindTextures=he,this.setupRenderTarget=V,this.updateRenderTargetMipmap=z,this.updateMultisampleRenderTarget=ae,this.setupDepthRenderbuffer=q,this.setupFrameBufferTexture=_,this.useMultisampledRTT=de}function by(s,e){function t(n,i=vi){let r,o=tt.getTransfer(i);if(n===ei)return s.UNSIGNED_BYTE;if(n===th)return s.UNSIGNED_SHORT_4_4_4_4;if(n===nh)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Lf)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Pf)return s.BYTE;if(n===If)return s.SHORT;if(n===Ir)return s.UNSIGNED_SHORT;if(n===eh)return s.INT;if(n===Gi)return s.UNSIGNED_INT;if(n===An)return s.FLOAT;if(n===Yr)return s.HALF_FLOAT;if(n===Df)return s.ALPHA;if(n===Nf)return s.RGB;if(n===fn)return s.RGBA;if(n===Uf)return s.LUMINANCE;if(n===Of)return s.LUMINANCE_ALPHA;if(n===Is)return s.DEPTH_COMPONENT;if(n===ks)return s.DEPTH_STENCIL;if(n===qr)return s.RED;if(n===ih)return s.RED_INTEGER;if(n===Bf)return s.RG;if(n===sh)return s.RG_INTEGER;if(n===rh)return s.RGBA_INTEGER;if(n===ko||n===Ho||n===zo||n===Vo)if(o===ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ko)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===zo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Vo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ko)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ho)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===zo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Vo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Gl||n===Wl||n===Xl||n===Yl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Gl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Wl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Xl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Yl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ql||n===Kl||n===Zl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ql||n===Kl)return o===ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Zl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===$l||n===Jl||n===jl||n===Ql||n===ec||n===tc||n===nc||n===ic||n===sc||n===rc||n===oc||n===ac||n===lc||n===cc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===$l)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Jl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===jl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ql)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ec)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===tc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===nc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ic)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===sc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===rc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===oc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ac)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===lc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===cc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Go||n===hc||n===uc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Go)return o===ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===hc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===uc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ff||n===fc||n===dc||n===pc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Go)return r.COMPRESSED_RED_RGTC1_EXT;if(n===fc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===dc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===pc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Fs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var Cc=class extends Lt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Ie=class extends gt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ey={type:"move"},wr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ie,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ie,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ie,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,n),p=this._getHandJoint(c,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,m=.005;c.inputState.pinching&&f>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ey)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ie;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Ty=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Pc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let i=new Ft,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new pn({vertexShader:Ty,fragmentShader:wy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new xe(new Ti(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ic=class extends Bn{constructor(e,t){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,m=null,x=new Pc,g=t.getContextAttributes(),p=null,b=null,S=[],y=[],B=new ce,P=null,I=new Lt;I.viewport=new st;let w=new Lt;w.viewport=new st;let v=[I,w],M=new Cc,T=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let ie=S[re];return ie===void 0&&(ie=new wr,S[re]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(re){let ie=S[re];return ie===void 0&&(ie=new wr,S[re]=ie),ie.getGripSpace()},this.getHand=function(re){let ie=S[re];return ie===void 0&&(ie=new wr,S[re]=ie),ie.getHandSpace()};function G(re){let ie=y.indexOf(re.inputSource);if(ie===-1)return;let _=S[ie];_!==void 0&&(_.update(re.inputSource,re.frame,c||o),_.dispatchEvent({type:re.type,data:re.inputSource}))}function X(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",X),i.removeEventListener("inputsourceschange",U);for(let re=0;re<S.length;re++){let ie=y[re];ie!==null&&(y[re]=null,S[re].disconnect(ie))}T=null,N=null,x.reset(),e.setRenderTarget(p),d=null,f=null,u=null,i=null,b=null,He.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(B.width,B.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){r=re,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){a=re,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(re){c=re},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(re){if(i=re,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",X),i.addEventListener("inputsourceschange",U),g.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(B),i.renderState.layers===void 0){let ie={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,ie),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),b=new ti(d.framebufferWidth,d.framebufferHeight,{format:fn,type:ei,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let ie=null,_=null,O=null;g.depth&&(O=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=g.stencil?ks:Is,_=g.stencil?Fs:Gi);let W={colorFormat:t.RGBA8,depthFormat:O,scaleFactor:r};u=new XRWebGLBinding(i,t),f=u.createProjectionLayer(W),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),b=new ti(f.textureWidth,f.textureHeight,{format:fn,type:ei,depthTexture:new ea(f.textureWidth,f.textureHeight,_,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),He.setContext(i),He.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function U(re){for(let ie=0;ie<re.removed.length;ie++){let _=re.removed[ie],O=y.indexOf(_);O>=0&&(y[O]=null,S[O].disconnect(_))}for(let ie=0;ie<re.added.length;ie++){let _=re.added[ie],O=y.indexOf(_);if(O===-1){for(let q=0;q<S.length;q++)if(q>=y.length){y.push(_),O=q;break}else if(y[q]===null){y[q]=_,O=q;break}if(O===-1)break}let W=S[O];W&&W.connect(_)}}let H=new L,ne=new L;function J(re,ie,_){H.setFromMatrixPosition(ie.matrixWorld),ne.setFromMatrixPosition(_.matrixWorld);let O=H.distanceTo(ne),W=ie.projectionMatrix.elements,q=_.projectionMatrix.elements,he=W[14]/(W[10]-1),V=W[14]/(W[10]+1),z=(W[9]+1)/W[5],D=(W[9]-1)/W[5],R=(W[8]-1)/W[0],ae=(q[8]+1)/q[0],$=he*R,de=he*ae,ue=O/(-R+ae),we=ue*-R;if(ie.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(we),re.translateZ(ue),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),W[10]===-1)re.projectionMatrix.copy(ie.projectionMatrix),re.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{let F=he+ue,A=V+ue,E=$-we,k=de+(O-we),j=z*V/A*F,oe=D*V/A*F;re.projectionMatrix.makePerspective(E,k,j,oe,F,A),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function pe(re,ie){ie===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(ie.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(i===null)return;let ie=re.near,_=re.far;x.texture!==null&&(x.depthNear>0&&(ie=x.depthNear),x.depthFar>0&&(_=x.depthFar)),M.near=w.near=I.near=ie,M.far=w.far=I.far=_,(T!==M.near||N!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),T=M.near,N=M.far),I.layers.mask=re.layers.mask|2,w.layers.mask=re.layers.mask|4,M.layers.mask=I.layers.mask|w.layers.mask;let O=re.parent,W=M.cameras;pe(M,O);for(let q=0;q<W.length;q++)pe(W[q],O);W.length===2?J(M,I,w):M.projectionMatrix.copy(I.projectionMatrix),_e(re,M,O)};function _e(re,ie,_){_===null?re.matrix.copy(ie.matrixWorld):(re.matrix.copy(_.matrixWorld),re.matrix.invert(),re.matrix.multiply(ie.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(ie.projectionMatrix),re.projectionMatrixInverse.copy(ie.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=Vs*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(re){l=re,f!==null&&(f.fixedFoveation=re),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=re)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let ve=null;function Le(re,ie){if(h=ie.getViewerPose(c||o),m=ie,h!==null){let _=h.views;d!==null&&(e.setRenderTargetFramebuffer(b,d.framebuffer),e.setRenderTarget(b));let O=!1;_.length!==M.cameras.length&&(M.cameras.length=0,O=!0);for(let q=0;q<_.length;q++){let he=_[q],V=null;if(d!==null)V=d.getViewport(he);else{let D=u.getViewSubImage(f,he);V=D.viewport,q===0&&(e.setRenderTargetTextures(b,D.colorTexture,f.ignoreDepthValues?void 0:D.depthStencilTexture),e.setRenderTarget(b))}let z=v[q];z===void 0&&(z=new Lt,z.layers.enable(q),z.viewport=new st,v[q]=z),z.matrix.fromArray(he.transform.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale),z.projectionMatrix.fromArray(he.projectionMatrix),z.projectionMatrixInverse.copy(z.projectionMatrix).invert(),z.viewport.set(V.x,V.y,V.width,V.height),q===0&&(M.matrix.copy(z.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),O===!0&&M.cameras.push(z)}let W=i.enabledFeatures;if(W&&W.includes("depth-sensing")){let q=u.getDepthInformation(_[0]);q&&q.isValid&&q.texture&&x.init(e,q,i.renderState)}}for(let _=0;_<S.length;_++){let O=y[_],W=S[_];O!==null&&W!==void 0&&W.update(O,ie,c||o)}ve&&ve(re,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),m=null}let He=new Wf;He.setAnimationLoop(Le),this.setAnimationLoop=function(re){ve=re},this.dispose=function(){}}},ki=new Fn,Ay=new We;function Ry(s,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Gf(s)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,b,S,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),f(g,p),p.isMeshPhysicalMaterial&&d(g,p,y)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,b,S):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Gt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Gt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let b=e.get(p),S=b.envMap,y=b.envMapRotation;S&&(g.envMap.value=S,ki.copy(y),ki.x*=-1,ki.y*=-1,ki.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ki.y*=-1,ki.z*=-1),g.envMapRotation.value.setFromMatrix4(Ay.makeRotationFromEuler(ki)),g.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,b,S){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*b,g.scale.value=S*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,b){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Gt&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){let b=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Cy(s,e,t,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,S){let y=S.program;n.uniformBlockBinding(b,y)}function c(b,S){let y=i[b.id];y===void 0&&(m(b),y=h(b),i[b.id]=y,b.addEventListener("dispose",g));let B=S.program;n.updateUBOMapping(b,B);let P=e.render.frame;r[b.id]!==P&&(f(b),r[b.id]=P)}function h(b){let S=u();b.__bindingPointIndex=S;let y=s.createBuffer(),B=b.__size,P=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,B,P),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,S,y),y}function u(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){let S=i[b.id],y=b.uniforms,B=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let P=0,I=y.length;P<I;P++){let w=Array.isArray(y[P])?y[P]:[y[P]];for(let v=0,M=w.length;v<M;v++){let T=w[v];if(d(T,P,v,B)===!0){let N=T.__offset,G=Array.isArray(T.value)?T.value:[T.value],X=0;for(let U=0;U<G.length;U++){let H=G[U],ne=x(H);typeof H=="number"||typeof H=="boolean"?(T.__data[0]=H,s.bufferSubData(s.UNIFORM_BUFFER,N+X,T.__data)):H.isMatrix3?(T.__data[0]=H.elements[0],T.__data[1]=H.elements[1],T.__data[2]=H.elements[2],T.__data[3]=0,T.__data[4]=H.elements[3],T.__data[5]=H.elements[4],T.__data[6]=H.elements[5],T.__data[7]=0,T.__data[8]=H.elements[6],T.__data[9]=H.elements[7],T.__data[10]=H.elements[8],T.__data[11]=0):(H.toArray(T.__data,X),X+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,N,T.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(b,S,y,B){let P=b.value,I=S+"_"+y;if(B[I]===void 0)return typeof P=="number"||typeof P=="boolean"?B[I]=P:B[I]=P.clone(),!0;{let w=B[I];if(typeof P=="number"||typeof P=="boolean"){if(w!==P)return B[I]=P,!0}else if(w.equals(P)===!1)return w.copy(P),!0}return!1}function m(b){let S=b.uniforms,y=0,B=16;for(let I=0,w=S.length;I<w;I++){let v=Array.isArray(S[I])?S[I]:[S[I]];for(let M=0,T=v.length;M<T;M++){let N=v[M],G=Array.isArray(N.value)?N.value:[N.value];for(let X=0,U=G.length;X<U;X++){let H=G[X],ne=x(H),J=y%B,pe=J%ne.boundary,_e=J+pe;y+=pe,_e!==0&&B-_e<ne.storage&&(y+=B-_e),N.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=y,y+=ne.storage}}}let P=y%B;return P>0&&(y+=B-P),b.__size=y,b.__cache={},this}function x(b){let S={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(S.boundary=4,S.storage=4):b.isVector2?(S.boundary=8,S.storage=8):b.isVector3||b.isColor?(S.boundary=16,S.storage=12):b.isVector4?(S.boundary=16,S.storage=16):b.isMatrix3?(S.boundary=48,S.storage=48):b.isMatrix4?(S.boundary=64,S.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),S}function g(b){let S=b.target;S.removeEventListener("dispose",g);let y=o.indexOf(S.__bindingPointIndex);o.splice(y,1),s.deleteBuffer(i[S.id]),delete i[S.id],delete r[S.id]}function p(){for(let b in i)s.deleteBuffer(i[b]);o=[],i={},r={}}return{bind:l,update:c,dispose:p}}var ta=class{constructor(e={}){let{canvas:t=Np(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let m=new Uint32Array(4),x=new Int32Array(4),g=null,p=null,b=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=dt,this.toneMapping=Nn,this.toneMappingExposure=1;let y=this,B=!1,P=0,I=0,w=null,v=-1,M=null,T=new st,N=new st,G=null,X=new ke(0),U=0,H=t.width,ne=t.height,J=1,pe=null,_e=null,ve=new st(0,0,H,ne),Le=new st(0,0,H,ne),He=!1,re=new Dr,ie=!1,_=!1,O=new We,W=new We,q=new L,he=new st,V={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},z=!1;function D(){return w===null?J:1}let R=n;function ae(C,K){return t.getContext(C,K)}try{let C={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Jc}`),t.addEventListener("webglcontextlost",fe,!1),t.addEventListener("webglcontextrestored",Ae,!1),t.addEventListener("webglcontextcreationerror",Ee,!1),R===null){let K="webgl2";if(R=ae(K,C),R===null)throw ae(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let $,de,ue,we,F,A,E,k,j,oe,le,De,Se,Re,et,ge,Ce,ze,Ve,Pe,nt,Ze,pt,Y;function be(){$=new Xg(R),$.init(),Ze=new by(R,$),de=new kg(R,$,e,Ze),ue=new vy(R,$),de.reverseDepthBuffer&&f&&ue.buffers.depth.setReversed(!0),we=new Kg(R),F=new ay,A=new Sy(R,$,ue,F,de,Ze,we),E=new zg(y),k=new Wg(y),j=new t0(R),pt=new Bg(R,j),oe=new Yg(R,j,we,pt),le=new $g(R,oe,j,we),Ve=new Zg(R,de,A),ge=new Hg(F),De=new oy(y,E,k,$,de,pt,ge),Se=new Ry(y,F),Re=new cy,et=new my($),ze=new Og(y,E,k,ue,le,d,l),Ce=new yy(y,le,de),Y=new Cy(R,we,de,ue),Pe=new Fg(R,$,we),nt=new qg(R,$,we),we.programs=De.programs,y.capabilities=de,y.extensions=$,y.properties=F,y.renderLists=Re,y.shadowMap=Ce,y.state=ue,y.info=we}be();let se=new Ic(y,R);this.xr=se,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){let C=$.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=$.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(C){C!==void 0&&(J=C,this.setSize(H,ne,!1))},this.getSize=function(C){return C.set(H,ne)},this.setSize=function(C,K,ee=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=C,ne=K,t.width=Math.floor(C*J),t.height=Math.floor(K*J),ee===!0&&(t.style.width=C+"px",t.style.height=K+"px"),this.setViewport(0,0,C,K)},this.getDrawingBufferSize=function(C){return C.set(H*J,ne*J).floor()},this.setDrawingBufferSize=function(C,K,ee){H=C,ne=K,J=ee,t.width=Math.floor(C*ee),t.height=Math.floor(K*ee),this.setViewport(0,0,C,K)},this.getCurrentViewport=function(C){return C.copy(T)},this.getViewport=function(C){return C.copy(ve)},this.setViewport=function(C,K,ee,te){C.isVector4?ve.set(C.x,C.y,C.z,C.w):ve.set(C,K,ee,te),ue.viewport(T.copy(ve).multiplyScalar(J).round())},this.getScissor=function(C){return C.copy(Le)},this.setScissor=function(C,K,ee,te){C.isVector4?Le.set(C.x,C.y,C.z,C.w):Le.set(C,K,ee,te),ue.scissor(N.copy(Le).multiplyScalar(J).round())},this.getScissorTest=function(){return He},this.setScissorTest=function(C){ue.setScissorTest(He=C)},this.setOpaqueSort=function(C){pe=C},this.setTransparentSort=function(C){_e=C},this.getClearColor=function(C){return C.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor.apply(ze,arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha.apply(ze,arguments)},this.clear=function(C=!0,K=!0,ee=!0){let te=0;if(C){let Z=!1;if(w!==null){let ye=w.texture.format;Z=ye===rh||ye===sh||ye===ih}if(Z){let ye=w.texture.type,Te=ye===ei||ye===Gi||ye===Ir||ye===Fs||ye===th||ye===nh,Ue=ze.getClearColor(),Oe=ze.getClearAlpha(),Ge=Ue.r,qe=Ue.g,Be=Ue.b;Te?(m[0]=Ge,m[1]=qe,m[2]=Be,m[3]=Oe,R.clearBufferuiv(R.COLOR,0,m)):(x[0]=Ge,x[1]=qe,x[2]=Be,x[3]=Oe,R.clearBufferiv(R.COLOR,0,x))}else te|=R.COLOR_BUFFER_BIT}K&&(te|=R.DEPTH_BUFFER_BIT),ee&&(te|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",fe,!1),t.removeEventListener("webglcontextrestored",Ae,!1),t.removeEventListener("webglcontextcreationerror",Ee,!1),Re.dispose(),et.dispose(),F.dispose(),E.dispose(),k.dispose(),le.dispose(),pt.dispose(),Y.dispose(),De.dispose(),se.dispose(),se.removeEventListener("sessionstart",Jh),se.removeEventListener("sessionend",jh),Di.stop()};function fe(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),B=!0}function Ae(){console.log("THREE.WebGLRenderer: Context Restored."),B=!1;let C=we.autoReset,K=Ce.enabled,ee=Ce.autoUpdate,te=Ce.needsUpdate,Z=Ce.type;be(),we.autoReset=C,Ce.enabled=K,Ce.autoUpdate=ee,Ce.needsUpdate=te,Ce.type=Z}function Ee(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Ye(C){let K=C.target;K.removeEventListener("dispose",Ye),Et(K)}function Et(C){Ht(C),F.remove(C)}function Ht(C){let K=F.get(C).programs;K!==void 0&&(K.forEach(function(ee){De.releaseProgram(ee)}),C.isShaderMaterial&&De.releaseShaderCache(C))}this.renderBufferDirect=function(C,K,ee,te,Z,ye){K===null&&(K=V);let Te=Z.isMesh&&Z.matrixWorld.determinant()<0,Ue=Td(C,K,ee,te,Z);ue.setMaterial(te,Te);let Oe=ee.index,Ge=1;if(te.wireframe===!0){if(Oe=oe.getWireframeAttribute(ee),Oe===void 0)return;Ge=2}let qe=ee.drawRange,Be=ee.attributes.position,it=qe.start*Ge,mt=(qe.start+qe.count)*Ge;ye!==null&&(it=Math.max(it,ye.start*Ge),mt=Math.min(mt,(ye.start+ye.count)*Ge)),Oe!==null?(it=Math.max(it,0),mt=Math.min(mt,Oe.count)):Be!=null&&(it=Math.max(it,0),mt=Math.min(mt,Be.count));let yt=mt-it;if(yt<0||yt===1/0)return;pt.setup(Z,te,Ue,ee,Oe);let Kt,rt=Pe;if(Oe!==null&&(Kt=j.get(Oe),rt=nt,rt.setIndex(Kt)),Z.isMesh)te.wireframe===!0?(ue.setLineWidth(te.wireframeLinewidth*D()),rt.setMode(R.LINES)):rt.setMode(R.TRIANGLES);else if(Z.isLine){let Fe=te.linewidth;Fe===void 0&&(Fe=1),ue.setLineWidth(Fe*D()),Z.isLineSegments?rt.setMode(R.LINES):Z.isLineLoop?rt.setMode(R.LINE_LOOP):rt.setMode(R.LINE_STRIP)}else Z.isPoints?rt.setMode(R.POINTS):Z.isSprite&&rt.setMode(R.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)rt.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if($.get("WEBGL_multi_draw"))rt.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{let Fe=Z._multiDrawStarts,Gn=Z._multiDrawCounts,ot=Z._multiDrawCount,Mn=Oe?j.get(Oe).bytesPerElement:1,rs=F.get(te).currentProgram.getUniforms();for(let nn=0;nn<ot;nn++)rs.setValue(R,"_gl_DrawID",nn),rt.render(Fe[nn]/Mn,Gn[nn])}else if(Z.isInstancedMesh)rt.renderInstances(it,yt,Z.count);else if(ee.isInstancedBufferGeometry){let Fe=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,Gn=Math.min(ee.instanceCount,Fe);rt.renderInstances(it,yt,Gn)}else rt.render(it,yt)};function at(C,K,ee){C.transparent===!0&&C.side===vt&&C.forceSinglePass===!1?(C.side=Gt,C.needsUpdate=!0,so(C,K,ee),C.side=Un,C.needsUpdate=!0,so(C,K,ee),C.side=vt):so(C,K,ee)}this.compile=function(C,K,ee=null){ee===null&&(ee=C),p=et.get(ee),p.init(K),S.push(p),ee.traverseVisible(function(Z){Z.isLight&&Z.layers.test(K.layers)&&(p.pushLight(Z),Z.castShadow&&p.pushShadow(Z))}),C!==ee&&C.traverseVisible(function(Z){Z.isLight&&Z.layers.test(K.layers)&&(p.pushLight(Z),Z.castShadow&&p.pushShadow(Z))}),p.setupLights();let te=new Set;return C.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;let ye=Z.material;if(ye)if(Array.isArray(ye))for(let Te=0;Te<ye.length;Te++){let Ue=ye[Te];at(Ue,ee,Z),te.add(Ue)}else at(ye,ee,Z),te.add(ye)}),S.pop(),p=null,te},this.compileAsync=function(C,K,ee=null){let te=this.compile(C,K,ee);return new Promise(Z=>{function ye(){if(te.forEach(function(Te){F.get(Te).currentProgram.isReady()&&te.delete(Te)}),te.size===0){Z(C);return}setTimeout(ye,10)}$.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let vn=null;function Vn(C){vn&&vn(C)}function Jh(){Di.stop()}function jh(){Di.start()}let Di=new Wf;Di.setAnimationLoop(Vn),typeof self<"u"&&Di.setContext(self),this.setAnimationLoop=function(C){vn=C,se.setAnimationLoop(C),C===null?Di.stop():Di.start()},se.addEventListener("sessionstart",Jh),se.addEventListener("sessionend",jh),this.render=function(C,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(K),K=se.getCamera()),C.isScene===!0&&C.onBeforeRender(y,C,K,w),p=et.get(C,S.length),p.init(K),S.push(p),W.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),re.setFromProjectionMatrix(W),_=this.localClippingEnabled,ie=ge.init(this.clippingPlanes,_),g=Re.get(C,b.length),g.init(),b.push(g),se.enabled===!0&&se.isPresenting===!0){let ye=y.xr.getDepthSensingMesh();ye!==null&&Za(ye,K,-1/0,y.sortObjects)}Za(C,K,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(pe,_e),z=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,z&&ze.addToRenderList(g,C),this.info.render.frame++,ie===!0&&ge.beginShadows();let ee=p.state.shadowsArray;Ce.render(ee,C,K),ie===!0&&ge.endShadows(),this.info.autoReset===!0&&this.info.reset();let te=g.opaque,Z=g.transmissive;if(p.setupLights(),K.isArrayCamera){let ye=K.cameras;if(Z.length>0)for(let Te=0,Ue=ye.length;Te<Ue;Te++){let Oe=ye[Te];eu(te,Z,C,Oe)}z&&ze.render(C);for(let Te=0,Ue=ye.length;Te<Ue;Te++){let Oe=ye[Te];Qh(g,C,Oe,Oe.viewport)}}else Z.length>0&&eu(te,Z,C,K),z&&ze.render(C),Qh(g,C,K);w!==null&&(A.updateMultisampleRenderTarget(w),A.updateRenderTargetMipmap(w)),C.isScene===!0&&C.onAfterRender(y,C,K),pt.resetDefaultState(),v=-1,M=null,S.pop(),S.length>0?(p=S[S.length-1],ie===!0&&ge.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?g=b[b.length-1]:g=null};function Za(C,K,ee,te){if(C.visible===!1)return;if(C.layers.test(K.layers)){if(C.isGroup)ee=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(K);else if(C.isLight)p.pushLight(C),C.castShadow&&p.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||re.intersectsSprite(C)){te&&he.setFromMatrixPosition(C.matrixWorld).applyMatrix4(W);let Te=le.update(C),Ue=C.material;Ue.visible&&g.push(C,Te,Ue,ee,he.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||re.intersectsObject(C))){let Te=le.update(C),Ue=C.material;if(te&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),he.copy(C.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),he.copy(Te.boundingSphere.center)),he.applyMatrix4(C.matrixWorld).applyMatrix4(W)),Array.isArray(Ue)){let Oe=Te.groups;for(let Ge=0,qe=Oe.length;Ge<qe;Ge++){let Be=Oe[Ge],it=Ue[Be.materialIndex];it&&it.visible&&g.push(C,Te,it,ee,he.z,Be)}}else Ue.visible&&g.push(C,Te,Ue,ee,he.z,null)}}let ye=C.children;for(let Te=0,Ue=ye.length;Te<Ue;Te++)Za(ye[Te],K,ee,te)}function Qh(C,K,ee,te){let Z=C.opaque,ye=C.transmissive,Te=C.transparent;p.setupLightsView(ee),ie===!0&&ge.setGlobalState(y.clippingPlanes,ee),te&&ue.viewport(T.copy(te)),Z.length>0&&io(Z,K,ee),ye.length>0&&io(ye,K,ee),Te.length>0&&io(Te,K,ee),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function eu(C,K,ee,te){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[te.id]===void 0&&(p.state.transmissionRenderTarget[te.id]=new ti(1,1,{generateMipmaps:!0,type:$.has("EXT_color_buffer_half_float")||$.has("EXT_color_buffer_float")?Yr:ei,minFilter:Dn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace}));let ye=p.state.transmissionRenderTarget[te.id],Te=te.viewport||T;ye.setSize(Te.z,Te.w);let Ue=y.getRenderTarget();y.setRenderTarget(ye),y.getClearColor(X),U=y.getClearAlpha(),U<1&&y.setClearColor(16777215,.5),y.clear(),z&&ze.render(ee);let Oe=y.toneMapping;y.toneMapping=Nn;let Ge=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),p.setupLightsView(te),ie===!0&&ge.setGlobalState(y.clippingPlanes,te),io(C,ee,te),A.updateMultisampleRenderTarget(ye),A.updateRenderTargetMipmap(ye),$.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let Be=0,it=K.length;Be<it;Be++){let mt=K[Be],yt=mt.object,Kt=mt.geometry,rt=mt.material,Fe=mt.group;if(rt.side===vt&&yt.layers.test(te.layers)){let Gn=rt.side;rt.side=Gt,rt.needsUpdate=!0,tu(yt,ee,te,Kt,rt,Fe),rt.side=Gn,rt.needsUpdate=!0,qe=!0}}qe===!0&&(A.updateMultisampleRenderTarget(ye),A.updateRenderTargetMipmap(ye))}y.setRenderTarget(Ue),y.setClearColor(X,U),Ge!==void 0&&(te.viewport=Ge),y.toneMapping=Oe}function io(C,K,ee){let te=K.isScene===!0?K.overrideMaterial:null;for(let Z=0,ye=C.length;Z<ye;Z++){let Te=C[Z],Ue=Te.object,Oe=Te.geometry,Ge=te===null?Te.material:te,qe=Te.group;Ue.layers.test(ee.layers)&&tu(Ue,K,ee,Oe,Ge,qe)}}function tu(C,K,ee,te,Z,ye){C.onBeforeRender(y,K,ee,te,Z,ye),C.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Z.onBeforeRender(y,K,ee,te,C,ye),Z.transparent===!0&&Z.side===vt&&Z.forceSinglePass===!1?(Z.side=Gt,Z.needsUpdate=!0,y.renderBufferDirect(ee,K,te,Z,C,ye),Z.side=Un,Z.needsUpdate=!0,y.renderBufferDirect(ee,K,te,Z,C,ye),Z.side=vt):y.renderBufferDirect(ee,K,te,Z,C,ye),C.onAfterRender(y,K,ee,te,Z,ye)}function so(C,K,ee){K.isScene!==!0&&(K=V);let te=F.get(C),Z=p.state.lights,ye=p.state.shadowsArray,Te=Z.state.version,Ue=De.getParameters(C,Z.state,ye,K,ee),Oe=De.getProgramCacheKey(Ue),Ge=te.programs;te.environment=C.isMeshStandardMaterial?K.environment:null,te.fog=K.fog,te.envMap=(C.isMeshStandardMaterial?k:E).get(C.envMap||te.environment),te.envMapRotation=te.environment!==null&&C.envMap===null?K.environmentRotation:C.envMapRotation,Ge===void 0&&(C.addEventListener("dispose",Ye),Ge=new Map,te.programs=Ge);let qe=Ge.get(Oe);if(qe!==void 0){if(te.currentProgram===qe&&te.lightsStateVersion===Te)return iu(C,Ue),qe}else Ue.uniforms=De.getUniforms(C),C.onBeforeCompile(Ue,y),qe=De.acquireProgram(Ue,Oe),Ge.set(Oe,qe),te.uniforms=Ue.uniforms;let Be=te.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Be.clippingPlanes=ge.uniform),iu(C,Ue),te.needsLights=Ad(C),te.lightsStateVersion=Te,te.needsLights&&(Be.ambientLightColor.value=Z.state.ambient,Be.lightProbe.value=Z.state.probe,Be.directionalLights.value=Z.state.directional,Be.directionalLightShadows.value=Z.state.directionalShadow,Be.spotLights.value=Z.state.spot,Be.spotLightShadows.value=Z.state.spotShadow,Be.rectAreaLights.value=Z.state.rectArea,Be.ltc_1.value=Z.state.rectAreaLTC1,Be.ltc_2.value=Z.state.rectAreaLTC2,Be.pointLights.value=Z.state.point,Be.pointLightShadows.value=Z.state.pointShadow,Be.hemisphereLights.value=Z.state.hemi,Be.directionalShadowMap.value=Z.state.directionalShadowMap,Be.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Be.spotShadowMap.value=Z.state.spotShadowMap,Be.spotLightMatrix.value=Z.state.spotLightMatrix,Be.spotLightMap.value=Z.state.spotLightMap,Be.pointShadowMap.value=Z.state.pointShadowMap,Be.pointShadowMatrix.value=Z.state.pointShadowMatrix),te.currentProgram=qe,te.uniformsList=null,qe}function nu(C){if(C.uniformsList===null){let K=C.currentProgram.getUniforms();C.uniformsList=Ds.seqWithValue(K.seq,C.uniforms)}return C.uniformsList}function iu(C,K){let ee=F.get(C);ee.outputColorSpace=K.outputColorSpace,ee.batching=K.batching,ee.batchingColor=K.batchingColor,ee.instancing=K.instancing,ee.instancingColor=K.instancingColor,ee.instancingMorph=K.instancingMorph,ee.skinning=K.skinning,ee.morphTargets=K.morphTargets,ee.morphNormals=K.morphNormals,ee.morphColors=K.morphColors,ee.morphTargetsCount=K.morphTargetsCount,ee.numClippingPlanes=K.numClippingPlanes,ee.numIntersection=K.numClipIntersection,ee.vertexAlphas=K.vertexAlphas,ee.vertexTangents=K.vertexTangents,ee.toneMapping=K.toneMapping}function Td(C,K,ee,te,Z){K.isScene!==!0&&(K=V),A.resetTextureUnits();let ye=K.fog,Te=te.isMeshStandardMaterial?K.environment:null,Ue=w===null?y.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Wt,Oe=(te.isMeshStandardMaterial?k:E).get(te.envMap||Te),Ge=te.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,qe=!!ee.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),Be=!!ee.morphAttributes.position,it=!!ee.morphAttributes.normal,mt=!!ee.morphAttributes.color,yt=Nn;te.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(yt=y.toneMapping);let Kt=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,rt=Kt!==void 0?Kt.length:0,Fe=F.get(te),Gn=p.state.lights;if(ie===!0&&(_===!0||C!==M)){let hn=C===M&&te.id===v;ge.setState(te,C,hn)}let ot=!1;te.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==Gn.state.version||Fe.outputColorSpace!==Ue||Z.isBatchedMesh&&Fe.batching===!1||!Z.isBatchedMesh&&Fe.batching===!0||Z.isBatchedMesh&&Fe.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Fe.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Fe.instancing===!1||!Z.isInstancedMesh&&Fe.instancing===!0||Z.isSkinnedMesh&&Fe.skinning===!1||!Z.isSkinnedMesh&&Fe.skinning===!0||Z.isInstancedMesh&&Fe.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Fe.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Fe.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Fe.instancingMorph===!1&&Z.morphTexture!==null||Fe.envMap!==Oe||te.fog===!0&&Fe.fog!==ye||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==ge.numPlanes||Fe.numIntersection!==ge.numIntersection)||Fe.vertexAlphas!==Ge||Fe.vertexTangents!==qe||Fe.morphTargets!==Be||Fe.morphNormals!==it||Fe.morphColors!==mt||Fe.toneMapping!==yt||Fe.morphTargetsCount!==rt)&&(ot=!0):(ot=!0,Fe.__version=te.version);let Mn=Fe.currentProgram;ot===!0&&(Mn=so(te,K,Z));let rs=!1,nn=!1,lr=!1,xt=Mn.getUniforms(),In=Fe.uniforms;if(ue.useProgram(Mn.program)&&(rs=!0,nn=!0,lr=!0),te.id!==v&&(v=te.id,nn=!0),rs||M!==C){ue.buffers.depth.getReversed()?(O.copy(C.projectionMatrix),Op(O),Bp(O),xt.setValue(R,"projectionMatrix",O)):xt.setValue(R,"projectionMatrix",C.projectionMatrix),xt.setValue(R,"viewMatrix",C.matrixWorldInverse);let fi=xt.map.cameraPosition;fi!==void 0&&fi.setValue(R,q.setFromMatrixPosition(C.matrixWorld)),de.logarithmicDepthBuffer&&xt.setValue(R,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&xt.setValue(R,"isOrthographic",C.isOrthographicCamera===!0),M!==C&&(M=C,nn=!0,lr=!0)}if(Z.isSkinnedMesh){xt.setOptional(R,Z,"bindMatrix"),xt.setOptional(R,Z,"bindMatrixInverse");let hn=Z.skeleton;hn&&(hn.boneTexture===null&&hn.computeBoneTexture(),xt.setValue(R,"boneTexture",hn.boneTexture,A))}Z.isBatchedMesh&&(xt.setOptional(R,Z,"batchingTexture"),xt.setValue(R,"batchingTexture",Z._matricesTexture,A),xt.setOptional(R,Z,"batchingIdTexture"),xt.setValue(R,"batchingIdTexture",Z._indirectTexture,A),xt.setOptional(R,Z,"batchingColorTexture"),Z._colorsTexture!==null&&xt.setValue(R,"batchingColorTexture",Z._colorsTexture,A));let cr=ee.morphAttributes;if((cr.position!==void 0||cr.normal!==void 0||cr.color!==void 0)&&Ve.update(Z,ee,Mn),(nn||Fe.receiveShadow!==Z.receiveShadow)&&(Fe.receiveShadow=Z.receiveShadow,xt.setValue(R,"receiveShadow",Z.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(In.envMap.value=Oe,In.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),te.isMeshStandardMaterial&&te.envMap===null&&K.environment!==null&&(In.envMapIntensity.value=K.environmentIntensity),nn&&(xt.setValue(R,"toneMappingExposure",y.toneMappingExposure),Fe.needsLights&&wd(In,lr),ye&&te.fog===!0&&Se.refreshFogUniforms(In,ye),Se.refreshMaterialUniforms(In,te,J,ne,p.state.transmissionRenderTarget[C.id]),Ds.upload(R,nu(Fe),In,A)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(Ds.upload(R,nu(Fe),In,A),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&xt.setValue(R,"center",Z.center),xt.setValue(R,"modelViewMatrix",Z.modelViewMatrix),xt.setValue(R,"normalMatrix",Z.normalMatrix),xt.setValue(R,"modelMatrix",Z.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){let hn=te.uniformsGroups;for(let fi=0,di=hn.length;fi<di;fi++){let su=hn[fi];Y.update(su,Mn),Y.bind(su,Mn)}}return Mn}function wd(C,K){C.ambientLightColor.needsUpdate=K,C.lightProbe.needsUpdate=K,C.directionalLights.needsUpdate=K,C.directionalLightShadows.needsUpdate=K,C.pointLights.needsUpdate=K,C.pointLightShadows.needsUpdate=K,C.spotLights.needsUpdate=K,C.spotLightShadows.needsUpdate=K,C.rectAreaLights.needsUpdate=K,C.hemisphereLights.needsUpdate=K}function Ad(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(C,K,ee){F.get(C.texture).__webglTexture=K,F.get(C.depthTexture).__webglTexture=ee;let te=F.get(C);te.__hasExternalTextures=!0,te.__autoAllocateDepthBuffer=ee===void 0,te.__autoAllocateDepthBuffer||$.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),te.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,K){let ee=F.get(C);ee.__webglFramebuffer=K,ee.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(C,K=0,ee=0){w=C,P=K,I=ee;let te=!0,Z=null,ye=!1,Te=!1;if(C){let Oe=F.get(C);if(Oe.__useDefaultFramebuffer!==void 0)ue.bindFramebuffer(R.FRAMEBUFFER,null),te=!1;else if(Oe.__webglFramebuffer===void 0)A.setupRenderTarget(C);else if(Oe.__hasExternalTextures)A.rebindTextures(C,F.get(C.texture).__webglTexture,F.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let Be=C.depthTexture;if(Oe.__boundDepthTexture!==Be){if(Be!==null&&F.has(Be)&&(C.width!==Be.image.width||C.height!==Be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(C)}}let Ge=C.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Te=!0);let qe=F.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(qe[K])?Z=qe[K][ee]:Z=qe[K],ye=!0):C.samples>0&&A.useMultisampledRTT(C)===!1?Z=F.get(C).__webglMultisampledFramebuffer:Array.isArray(qe)?Z=qe[ee]:Z=qe,T.copy(C.viewport),N.copy(C.scissor),G=C.scissorTest}else T.copy(ve).multiplyScalar(J).floor(),N.copy(Le).multiplyScalar(J).floor(),G=He;if(ue.bindFramebuffer(R.FRAMEBUFFER,Z)&&te&&ue.drawBuffers(C,Z),ue.viewport(T),ue.scissor(N),ue.setScissorTest(G),ye){let Oe=F.get(C.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+K,Oe.__webglTexture,ee)}else if(Te){let Oe=F.get(C.texture),Ge=K||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,Oe.__webglTexture,ee||0,Ge)}v=-1},this.readRenderTargetPixels=function(C,K,ee,te,Z,ye,Te){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=F.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Te!==void 0&&(Ue=Ue[Te]),Ue){ue.bindFramebuffer(R.FRAMEBUFFER,Ue);try{let Oe=C.texture,Ge=Oe.format,qe=Oe.type;if(!de.textureFormatReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!de.textureTypeReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=C.width-te&&ee>=0&&ee<=C.height-Z&&R.readPixels(K,ee,te,Z,Ze.convert(Ge),Ze.convert(qe),ye)}finally{let Oe=w!==null?F.get(w).__webglFramebuffer:null;ue.bindFramebuffer(R.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(C,K,ee,te,Z,ye,Te){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=F.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Te!==void 0&&(Ue=Ue[Te]),Ue){let Oe=C.texture,Ge=Oe.format,qe=Oe.type;if(!de.textureFormatReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!de.textureTypeReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(K>=0&&K<=C.width-te&&ee>=0&&ee<=C.height-Z){ue.bindFramebuffer(R.FRAMEBUFFER,Ue);let Be=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Be),R.bufferData(R.PIXEL_PACK_BUFFER,ye.byteLength,R.STREAM_READ),R.readPixels(K,ee,te,Z,Ze.convert(Ge),Ze.convert(qe),0);let it=w!==null?F.get(w).__webglFramebuffer:null;ue.bindFramebuffer(R.FRAMEBUFFER,it);let mt=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await Up(R,mt,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Be),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,ye),R.deleteBuffer(Be),R.deleteSync(mt),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,K=null,ee=0){C.isTexture!==!0&&(Mr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),K=arguments[0]||null,C=arguments[1]);let te=Math.pow(2,-ee),Z=Math.floor(C.image.width*te),ye=Math.floor(C.image.height*te),Te=K!==null?K.x:0,Ue=K!==null?K.y:0;A.setTexture2D(C,0),R.copyTexSubImage2D(R.TEXTURE_2D,ee,0,0,Te,Ue,Z,ye),ue.unbindTexture()},this.copyTextureToTexture=function(C,K,ee=null,te=null,Z=0){C.isTexture!==!0&&(Mr("WebGLRenderer: copyTextureToTexture function signature has changed."),te=arguments[0]||null,C=arguments[1],K=arguments[2],Z=arguments[3]||0,ee=null);let ye,Te,Ue,Oe,Ge,qe,Be,it,mt,yt=C.isCompressedTexture?C.mipmaps[Z]:C.image;ee!==null?(ye=ee.max.x-ee.min.x,Te=ee.max.y-ee.min.y,Ue=ee.isBox3?ee.max.z-ee.min.z:1,Oe=ee.min.x,Ge=ee.min.y,qe=ee.isBox3?ee.min.z:0):(ye=yt.width,Te=yt.height,Ue=yt.depth||1,Oe=0,Ge=0,qe=0),te!==null?(Be=te.x,it=te.y,mt=te.z):(Be=0,it=0,mt=0);let Kt=Ze.convert(K.format),rt=Ze.convert(K.type),Fe;K.isData3DTexture?(A.setTexture3D(K,0),Fe=R.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(A.setTexture2DArray(K,0),Fe=R.TEXTURE_2D_ARRAY):(A.setTexture2D(K,0),Fe=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,K.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,K.unpackAlignment);let Gn=R.getParameter(R.UNPACK_ROW_LENGTH),ot=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Mn=R.getParameter(R.UNPACK_SKIP_PIXELS),rs=R.getParameter(R.UNPACK_SKIP_ROWS),nn=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,yt.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,yt.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Oe),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ge),R.pixelStorei(R.UNPACK_SKIP_IMAGES,qe);let lr=C.isDataArrayTexture||C.isData3DTexture,xt=K.isDataArrayTexture||K.isData3DTexture;if(C.isRenderTargetTexture||C.isDepthTexture){let In=F.get(C),cr=F.get(K),hn=F.get(In.__renderTarget),fi=F.get(cr.__renderTarget);ue.bindFramebuffer(R.READ_FRAMEBUFFER,hn.__webglFramebuffer),ue.bindFramebuffer(R.DRAW_FRAMEBUFFER,fi.__webglFramebuffer);for(let di=0;di<Ue;di++)lr&&R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,F.get(C).__webglTexture,Z,qe+di),C.isDepthTexture?(xt&&R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,F.get(K).__webglTexture,Z,mt+di),R.blitFramebuffer(Oe,Ge,ye,Te,Be,it,ye,Te,R.DEPTH_BUFFER_BIT,R.NEAREST)):xt?R.copyTexSubImage3D(Fe,Z,Be,it,mt+di,Oe,Ge,ye,Te):R.copyTexSubImage2D(Fe,Z,Be,it,mt+di,Oe,Ge,ye,Te);ue.bindFramebuffer(R.READ_FRAMEBUFFER,null),ue.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else xt?C.isDataTexture||C.isData3DTexture?R.texSubImage3D(Fe,Z,Be,it,mt,ye,Te,Ue,Kt,rt,yt.data):K.isCompressedArrayTexture?R.compressedTexSubImage3D(Fe,Z,Be,it,mt,ye,Te,Ue,Kt,yt.data):R.texSubImage3D(Fe,Z,Be,it,mt,ye,Te,Ue,Kt,rt,yt):C.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,Z,Be,it,ye,Te,Kt,rt,yt.data):C.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,Z,Be,it,yt.width,yt.height,Kt,yt.data):R.texSubImage2D(R.TEXTURE_2D,Z,Be,it,ye,Te,Kt,rt,yt);R.pixelStorei(R.UNPACK_ROW_LENGTH,Gn),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ot),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Mn),R.pixelStorei(R.UNPACK_SKIP_ROWS,rs),R.pixelStorei(R.UNPACK_SKIP_IMAGES,nn),Z===0&&K.generateMipmaps&&R.generateMipmap(Fe),ue.unbindTexture()},this.copyTextureToTexture3D=function(C,K,ee=null,te=null,Z=0){return C.isTexture!==!0&&(Mr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ee=arguments[0]||null,te=arguments[1]||null,C=arguments[2],K=arguments[3],Z=arguments[4]||0),Mr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,K,ee,te,Z)},this.initRenderTarget=function(C){F.get(C).__webglFramebuffer===void 0&&A.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?A.setTextureCube(C,0):C.isData3DTexture?A.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?A.setTexture2DArray(C,0):A.setTexture2D(C,0),ue.unbindTexture()},this.resetState=function(){P=0,I=0,w=null,ue.reset(),pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=tt._getUnpackColorSpace()}};var na=class extends gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fn,this.environmentIntensity=1,this.environmentRotation=new Fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Xs=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=mc,this.updateRanges=[],this.version=0,this.uuid=dn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=dn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=dn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Xt=new L,Wi=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=wn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=lt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=wn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=wn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=wn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=wn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),i=lt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),i=lt(i,this.array),r=lt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new At(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ys=class extends qt{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new ke(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},vs,pr=new L,Ms=new L,Ss=new L,bs=new ce,mr=new ce,Zf=new We,wo=new L,gr=new L,Ao=new L,nf=new ce,bl=new ce,sf=new ce,Nr=class extends gt{constructor(e=new Ys){if(super(),this.isSprite=!0,this.type="Sprite",vs===void 0){vs=new Mt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Xs(t,5);vs.setIndex([0,1,2,0,2,3]),vs.setAttribute("position",new Wi(n,3,0,!1)),vs.setAttribute("uv",new Wi(n,2,3,!1))}this.geometry=vs,this.material=e,this.center=new ce(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ms.setFromMatrixScale(this.matrixWorld),Zf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ss.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ms.multiplyScalar(-Ss.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let o=this.center;Ro(wo.set(-.5,-.5,0),Ss,o,Ms,i,r),Ro(gr.set(.5,-.5,0),Ss,o,Ms,i,r),Ro(Ao.set(.5,.5,0),Ss,o,Ms,i,r),nf.set(0,0),bl.set(1,0),sf.set(1,1);let a=e.ray.intersectTriangle(wo,gr,Ao,!1,pr);if(a===null&&(Ro(gr.set(-.5,.5,0),Ss,o,Ms,i,r),bl.set(0,1),a=e.ray.intersectTriangle(wo,Ao,gr,!1,pr),a===null))return;let l=e.ray.origin.distanceTo(pr);l<e.near||l>e.far||t.push({distance:l,point:pr.clone(),uv:Mi.getInterpolation(pr,wo,gr,Ao,nf,bl,sf,new ce),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Ro(s,e,t,n,i,r){bs.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(mr.x=r*bs.x-i*bs.y,mr.y=i*bs.x+r*bs.y):mr.copy(bs),s.copy(e),s.x+=mr.x,s.y+=mr.y,s.applyMatrix4(Zf)}var rf=new L,of=new st,af=new st,Py=new L,lf=new We,Co=new L,El=new on,cf=new We,Tl=new Ei,ia=class extends xe{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=lu,this.bindMatrix=new We,this.bindMatrixInverse=new We,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new $t),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Co),this.boundingBox.expandByPoint(Co)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new on),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Co),this.boundingSphere.expandByPoint(Co)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),El.copy(this.boundingSphere),El.applyMatrix4(i),e.ray.intersectsSphere(El)!==!1&&(cf.copy(i).invert(),Tl.copy(e.ray).applyMatrix4(cf),!(this.boundingBox!==null&&Tl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Tl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new st,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===lu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===ip?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;of.fromBufferAttribute(i.attributes.skinIndex,e),af.fromBufferAttribute(i.attributes.skinWeight,e),rf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=af.getComponent(r);if(o!==0){let a=of.getComponent(r);lf.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Py.copy(rf).applyMatrix4(lf),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},Ur=class extends gt{constructor(){super(),this.isBone=!0,this.type="Bone"}},qs=class extends Ft{constructor(e=null,t=1,n=1,i,r,o,a,l,c=Bt,h=Bt,u,f){super(null,o,a,l,c,h,i,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},hf=new We,Iy=new We,sa=class s{constructor(e=[],t=[]){this.uuid=dn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new We)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new We;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:Iy;hf.multiplyMatrices(a,t[r]),hf.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new qs(t,e,e,fn,An);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Ur),this.bones.push(o),this.boneInverses.push(new We().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let o=t[i];e.bones.push(o.uuid);let a=n[i];e.boneInverses.push(a.toArray())}return e}},Xi=class extends At{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Es=new We,uf=new We,Po=[],ff=new $t,Ly=new We,_r=new xe,yr=new on,Ks=class extends xe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Xi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Ly)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new $t),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Es),ff.copy(e.boundingBox).applyMatrix4(Es),this.boundingBox.union(ff)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new on),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Es),yr.copy(e.boundingSphere).applyMatrix4(Es),this.boundingSphere.union(yr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(_r.geometry=this.geometry,_r.material=this.material,_r.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),yr.copy(this.boundingSphere),yr.applyMatrix4(n),e.ray.intersectsSphere(yr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Es),uf.multiplyMatrices(n,Es),_r.matrixWorld=uf,_r.raycast(e,Po);for(let o=0,a=Po.length;o<a;o++){let l=Po[o];l.instanceId=r,l.object=this,t.push(l)}Po.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Xi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new qs(new Float32Array(i*this.count),i,this.count,qr,An));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Or=class extends qt{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ra=new L,oa=new L,df=new We,xr=new Ei,Io=new on,wl=new L,pf=new L,Zs=class extends gt{constructor(e=new Mt,t=new Or){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)ra.fromBufferAttribute(t,i-1),oa.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=ra.distanceTo(oa);e.setAttribute("lineDistance",new Je(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Io.copy(n.boundingSphere),Io.applyMatrix4(i),Io.radius+=r,e.ray.intersectsSphere(Io)===!1)return;df.copy(i).invert(),xr.copy(e.ray).applyMatrix4(df);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let x=d,g=m-1;x<g;x+=c){let p=h.getX(x),b=h.getX(x+1),S=Lo(this,e,xr,l,p,b);S&&t.push(S)}if(this.isLineLoop){let x=h.getX(m-1),g=h.getX(d),p=Lo(this,e,xr,l,x,g);p&&t.push(p)}}else{let d=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let x=d,g=m-1;x<g;x+=c){let p=Lo(this,e,xr,l,x,x+1);p&&t.push(p)}if(this.isLineLoop){let x=Lo(this,e,xr,l,m-1,d);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Lo(s,e,t,n,i,r){let o=s.geometry.attributes.position;if(ra.fromBufferAttribute(o,i),oa.fromBufferAttribute(o,r),t.distanceSqToSegment(ra,oa,wl,pf)>n)return;wl.applyMatrix4(s.matrixWorld);let l=e.ray.origin.distanceTo(wl);if(!(l<e.near||l>e.far))return{distance:l,point:pf.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}var mf=new L,gf=new L,aa=class extends Zs{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)mf.fromBufferAttribute(t,i),gf.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+mf.distanceTo(gf);e.setAttribute("lineDistance",new Je(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},la=class extends Zs{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Yi=class extends qt{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},_f=new We,Lc=new Ei,Do=new on,No=new L,$s=class extends gt{constructor(e=new Mt,t=new Yi){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Do.copy(n.boundingSphere),Do.applyMatrix4(i),Do.radius+=r,e.ray.intersectsSphere(Do)===!1)return;_f.copy(i).invert(),Lc.copy(e.ray).applyMatrix4(_f);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let m=f,x=d;m<x;m++){let g=c.getX(m);No.fromBufferAttribute(u,g),yf(No,g,l,i,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let m=f,x=d;m<x;m++)No.fromBufferAttribute(u,m),yf(No,m,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function yf(s,e,t,n,i,r,o){let a=Lc.distanceSqToPoint(s);if(a<t){let l=new L;Lc.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var ni=class extends Ft{constructor(e,t,n,i,r,o,a,l,c){super(e,t,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},mn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),i=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);let h=n[i],f=n[i+1]-h,d=(o-h)/f;return(i+d)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),l=t||(o.isVector2?new ce:new L);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new L,i=[],r=[],o=[],a=new L,l=new We;for(let d=0;d<=e;d++){let m=d/e;i[d]=this.getTangentAt(m,new L)}r[0]=new L,o[0]=new L;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(Pt(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,m))}o[d].crossVectors(i[d],r[d])}if(t===!0){let d=Math.acos(Pt(r[0].dot(r[e]),-1,1));d/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(i[m],d*m)),o[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Br=class extends mn{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ce){let n=t,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Dc=class extends Br{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function uh(){let s=0,e=0,t=0,n=0;function i(r,o,a,l){s=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,i(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return s+e*r+t*o+n*a}}}var Uo=new L,Al=new uh,Rl=new uh,Cl=new uh,Jt=class extends mn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new L){let n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(Uo.subVectors(i[0],i[1]).add(i[0]),c=Uo);let u=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(Uo.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Uo),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),m<1e-4&&(m=x),g<1e-4&&(g=x),Al.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,m,x,g),Rl.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,m,x,g),Cl.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,m,x,g)}else this.curveType==="catmullrom"&&(Al.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Rl.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Cl.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(Al.calc(l),Rl.calc(l),Cl.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new L().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function xf(s,e,t,n,i){let r=(n-e)*.5,o=(i-t)*.5,a=s*s,l=s*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*s+t}function Dy(s,e){let t=1-s;return t*t*e}function Ny(s,e){return 2*(1-s)*s*e}function Uy(s,e){return s*s*e}function Ar(s,e,t,n){return Dy(s,e)+Ny(s,t)+Uy(s,n)}function Oy(s,e){let t=1-s;return t*t*t*e}function By(s,e){let t=1-s;return 3*t*t*s*e}function Fy(s,e){return 3*(1-s)*s*s*e}function ky(s,e){return s*s*s*e}function Rr(s,e,t,n,i){return Oy(s,e)+By(s,t)+Fy(s,n)+ky(s,i)}var ca=class extends mn{constructor(e=new ce,t=new ce,n=new ce,i=new ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ce){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Rr(e,i.x,r.x,o.x,a.x),Rr(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Nc=class extends mn{constructor(e=new L,t=new L,n=new L,i=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new L){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Rr(e,i.x,r.x,o.x,a.x),Rr(e,i.y,r.y,o.y,a.y),Rr(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ha=class extends mn{constructor(e=new ce,t=new ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ce){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ce){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Uc=class extends mn{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ua=class extends mn{constructor(e=new ce,t=new ce,n=new ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ce){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Ar(e,i.x,r.x,o.x),Ar(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},fa=class extends mn{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Ar(e,i.x,r.x,o.x),Ar(e,i.y,r.y,o.y),Ar(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},da=class extends mn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ce){let n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(xf(a,l.x,c.x,h.x,u.x),xf(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new ce().fromArray(i))}return this}},pa=Object.freeze({__proto__:null,ArcCurve:Dc,CatmullRomCurve3:Jt,CubicBezierCurve:ca,CubicBezierCurve3:Nc,EllipseCurve:Br,LineCurve:ha,LineCurve3:Uc,QuadraticBezierCurve:ua,QuadraticBezierCurve3:fa,SplineCurve:da}),Oc=class extends mn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new pa[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new pa[i.type]().fromJSON(i))}return this}},Fr=class extends Oc{constructor(e){super(),this.type="Path",this.currentPoint=new ce,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ha(this.currentPoint.clone(),new ce(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let r=new ua(this.currentPoint.clone(),new ce(e,t),new ce(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){let a=new ca(this.currentPoint.clone(),new ce(e,t),new ce(n,i),new ce(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new da(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,r,o,a,l),this}absellipse(e,t,n,i,r,o,a,l){let c=new Br(e,t,n,i,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},qi=class s extends Mt{constructor(e=[new ce(0,-.5),new ce(.5,0),new ce(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=Pt(i,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/t,u=new L,f=new ce,d=new L,m=new L,x=new L,g=0,p=0;for(let b=0;b<=e.length-1;b++)switch(b){case 0:g=e[b+1].x-e[b].x,p=e[b+1].y-e[b].y,d.x=p*1,d.y=-g,d.z=p*0,x.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:g=e[b+1].x-e[b].x,p=e[b+1].y-e[b].y,d.x=p*1,d.y=-g,d.z=p*0,m.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),l.push(d.x,d.y,d.z),x.copy(m)}for(let b=0;b<=t;b++){let S=n+b*h*i,y=Math.sin(S),B=Math.cos(S);for(let P=0;P<=e.length-1;P++){u.x=e[P].x*y,u.y=e[P].y,u.z=e[P].x*B,o.push(u.x,u.y,u.z),f.x=b/t,f.y=P/(e.length-1),a.push(f.x,f.y);let I=l[3*P+0]*y,w=l[3*P+1],v=l[3*P+0]*B;c.push(I,w,v)}}for(let b=0;b<t;b++)for(let S=0;S<e.length-1;S++){let y=S+b*e.length,B=y,P=y+e.length,I=y+e.length+1,w=y+1;r.push(B,P,w),r.push(I,w,P)}this.setIndex(r),this.setAttribute("position",new Je(o,3)),this.setAttribute("uv",new Je(a,2)),this.setAttribute("normal",new Je(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.points,e.segments,e.phiStart,e.phiLength)}},ma=class s extends qi{constructor(e=1,t=1,n=4,i=8){let r=new Fr;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new s(e.radius,e.length,e.capSegments,e.radialSegments)}},ga=class s extends Mt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new L,h=new ce;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){let d=n+u/t*i;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Je(o,3)),this.setAttribute("normal",new Je(a,3)),this.setAttribute("uv",new Je(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},_t=class s extends Mt{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],f=[],d=[],m=0,x=[],g=n/2,p=0;b(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new Je(u,3)),this.setAttribute("normal",new Je(f,3)),this.setAttribute("uv",new Je(d,2));function b(){let y=new L,B=new L,P=0,I=(t-e)/n;for(let w=0;w<=r;w++){let v=[],M=w/r,T=M*(t-e)+e;for(let N=0;N<=i;N++){let G=N/i,X=G*l+a,U=Math.sin(X),H=Math.cos(X);B.x=T*U,B.y=-M*n+g,B.z=T*H,u.push(B.x,B.y,B.z),y.set(U,I,H).normalize(),f.push(y.x,y.y,y.z),d.push(G,1-M),v.push(m++)}x.push(v)}for(let w=0;w<i;w++)for(let v=0;v<r;v++){let M=x[v][w],T=x[v+1][w],N=x[v+1][w+1],G=x[v][w+1];(e>0||v!==0)&&(h.push(M,T,G),P+=3),(t>0||v!==r-1)&&(h.push(T,N,G),P+=3)}c.addGroup(p,P,0),p+=P}function S(y){let B=m,P=new ce,I=new L,w=0,v=y===!0?e:t,M=y===!0?1:-1;for(let N=1;N<=i;N++)u.push(0,g*M,0),f.push(0,M,0),d.push(.5,.5),m++;let T=m;for(let N=0;N<=i;N++){let X=N/i*l+a,U=Math.cos(X),H=Math.sin(X);I.x=v*H,I.y=g*M,I.z=v*U,u.push(I.x,I.y,I.z),f.push(0,M,0),P.x=U*.5+.5,P.y=H*.5*M+.5,d.push(P.x,P.y),m++}for(let N=0;N<i;N++){let G=B+N,X=T+N;y===!0?h.push(X,X+1,G):h.push(X+1,X,G),w+=3}c.addGroup(p,w,y===!0?1:2),p+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Rn=class s extends _t{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},_a=class s extends Mt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let r=[],o=[];a(i),c(n),h(),this.setAttribute("position",new Je(r,3)),this.setAttribute("normal",new Je(r.slice(),3)),this.setAttribute("uv",new Je(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(b){let S=new L,y=new L,B=new L;for(let P=0;P<t.length;P+=3)d(t[P+0],S),d(t[P+1],y),d(t[P+2],B),l(S,y,B,b)}function l(b,S,y,B){let P=B+1,I=[];for(let w=0;w<=P;w++){I[w]=[];let v=b.clone().lerp(y,w/P),M=S.clone().lerp(y,w/P),T=P-w;for(let N=0;N<=T;N++)N===0&&w===P?I[w][N]=v:I[w][N]=v.clone().lerp(M,N/T)}for(let w=0;w<P;w++)for(let v=0;v<2*(P-w)-1;v++){let M=Math.floor(v/2);v%2===0?(f(I[w][M+1]),f(I[w+1][M]),f(I[w][M])):(f(I[w][M+1]),f(I[w+1][M+1]),f(I[w+1][M]))}}function c(b){let S=new L;for(let y=0;y<r.length;y+=3)S.x=r[y+0],S.y=r[y+1],S.z=r[y+2],S.normalize().multiplyScalar(b),r[y+0]=S.x,r[y+1]=S.y,r[y+2]=S.z}function h(){let b=new L;for(let S=0;S<r.length;S+=3){b.x=r[S+0],b.y=r[S+1],b.z=r[S+2];let y=g(b)/2/Math.PI+.5,B=p(b)/Math.PI+.5;o.push(y,1-B)}m(),u()}function u(){for(let b=0;b<o.length;b+=6){let S=o[b+0],y=o[b+2],B=o[b+4],P=Math.max(S,y,B),I=Math.min(S,y,B);P>.9&&I<.1&&(S<.2&&(o[b+0]+=1),y<.2&&(o[b+2]+=1),B<.2&&(o[b+4]+=1))}}function f(b){r.push(b.x,b.y,b.z)}function d(b,S){let y=b*3;S.x=e[y+0],S.y=e[y+1],S.z=e[y+2]}function m(){let b=new L,S=new L,y=new L,B=new L,P=new ce,I=new ce,w=new ce;for(let v=0,M=0;v<r.length;v+=9,M+=6){b.set(r[v+0],r[v+1],r[v+2]),S.set(r[v+3],r[v+4],r[v+5]),y.set(r[v+6],r[v+7],r[v+8]),P.set(o[M+0],o[M+1]),I.set(o[M+2],o[M+3]),w.set(o[M+4],o[M+5]),B.copy(b).add(S).add(y).divideScalar(3);let T=g(B);x(P,M+0,b,T),x(I,M+2,S,T),x(w,M+4,y,T)}}function x(b,S,y,B){B<0&&b.x===1&&(o[S]=b.x-1),y.x===0&&y.z===0&&(o[S]=B/2/Math.PI+.5)}function g(b){return Math.atan2(b.z,-b.x)}function p(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.vertices,e.indices,e.radius,e.details)}},wi=class s extends _a{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}};var kr=class extends Fr{constructor(e){super(e),this.uuid=dn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new Fr().fromJSON(i))}return this}},Hy={triangulate:function(s,e,t=2){let n=e&&e.length,i=n?e[0]*t:s.length,r=$f(s,0,i,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,f,d;if(n&&(r=Xy(s,e,r,t)),s.length>80*t){a=c=s[0],l=h=s[1];for(let m=t;m<i;m+=t)u=s[m],f=s[m+1],u<a&&(a=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);d=Math.max(c-a,h-l),d=d!==0?32767/d:0}return Hr(r,o,t,a,l,d,0),o}};function $f(s,e,t,n,i){let r,o;if(i===nx(s,e,t,n)>0)for(r=e;r<t;r+=n)o=vf(r,s[r],s[r+1],o);else for(r=t-n;r>=e;r-=n)o=vf(r,s[r],s[r+1],o);return o&&La(o,o.next)&&(Vr(o),o=o.next),o}function Ki(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(La(t,t.next)||bt(t.prev,t,t.next)===0)){if(Vr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Hr(s,e,t,n,i,r,o){if(!s)return;!o&&r&&$y(s,n,i,r);let a=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?Vy(s,n,i,r):zy(s)){e.push(l.i/t|0),e.push(s.i/t|0),e.push(c.i/t|0),Vr(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=Gy(Ki(s),e,t),Hr(s,e,t,n,i,r,2)):o===2&&Wy(s,e,t,n,i,r):Hr(Ki(s),e,t,n,i,r,1);break}}}function zy(s){let e=s.prev,t=s,n=s.next;if(bt(e,t,n)>=0)return!1;let i=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=i<r?i<o?i:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,f=i>r?i>o?i:o:r>o?r:o,d=a>l?a>c?a:c:l>c?l:c,m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=f&&m.y>=u&&m.y<=d&&Cs(i,a,r,l,o,c,m.x,m.y)&&bt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Vy(s,e,t,n){let i=s.prev,r=s,o=s.next;if(bt(i,r,o)>=0)return!1;let a=i.x,l=r.x,c=o.x,h=i.y,u=r.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,m=h<u?h<f?h:f:u<f?u:f,x=a>l?a>c?a:c:l>c?l:c,g=h>u?h>f?h:f:u>f?u:f,p=Bc(d,m,e,t,n),b=Bc(x,g,e,t,n),S=s.prevZ,y=s.nextZ;for(;S&&S.z>=p&&y&&y.z<=b;){if(S.x>=d&&S.x<=x&&S.y>=m&&S.y<=g&&S!==i&&S!==o&&Cs(a,h,l,u,c,f,S.x,S.y)&&bt(S.prev,S,S.next)>=0||(S=S.prevZ,y.x>=d&&y.x<=x&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Cs(a,h,l,u,c,f,y.x,y.y)&&bt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;S&&S.z>=p;){if(S.x>=d&&S.x<=x&&S.y>=m&&S.y<=g&&S!==i&&S!==o&&Cs(a,h,l,u,c,f,S.x,S.y)&&bt(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;y&&y.z<=b;){if(y.x>=d&&y.x<=x&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Cs(a,h,l,u,c,f,y.x,y.y)&&bt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Gy(s,e,t){let n=s;do{let i=n.prev,r=n.next.next;!La(i,r)&&Jf(i,n,n.next,r)&&zr(i,r)&&zr(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Vr(n),Vr(n.next),n=s=r),n=n.next}while(n!==s);return Ki(n)}function Wy(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Qy(o,a)){let l=jf(o,a);o=Ki(o,o.next),l=Ki(l,l.next),Hr(o,e,t,n,i,r,0),Hr(l,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function Xy(s,e,t,n){let i=[],r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*n,l=r<o-1?e[r+1]*n:s.length,c=$f(s,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(jy(c));for(i.sort(Yy),r=0;r<i.length;r++)t=qy(i[r],t);return t}function Yy(s,e){return s.x-e.x}function qy(s,e){let t=Ky(s,e);if(!t)return e;let n=jf(t,s);return Ki(n,n.next),Ki(t,t.next)}function Ky(s,e){let t=e,n=-1/0,i,r=s.x,o=s.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>n&&(n=f,i=t.x<t.next.x?t:t.next,f===r))return i}t=t.next}while(t!==e);if(!i)return null;let a=i,l=i.x,c=i.y,h=1/0,u;t=i;do r>=t.x&&t.x>=l&&r!==t.x&&Cs(o<c?r:n,o,l,c,o<c?n:r,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(r-t.x),zr(t,s)&&(u<h||u===h&&(t.x>i.x||t.x===i.x&&Zy(i,t)))&&(i=t,h=u)),t=t.next;while(t!==a);return i}function Zy(s,e){return bt(s.prev,s,e.prev)<0&&bt(e.next,s,s.next)<0}function $y(s,e,t,n){let i=s;do i.z===0&&(i.z=Bc(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Jy(i)}function Jy(s){let e,t,n,i,r,o,a,l,c=1;do{for(t=s,s=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,c*=2}while(o>1);return s}function Bc(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function jy(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Cs(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function Qy(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!ex(s,e)&&(zr(s,e)&&zr(e,s)&&tx(s,e)&&(bt(s.prev,s,e.prev)||bt(s,e.prev,e))||La(s,e)&&bt(s.prev,s,s.next)>0&&bt(e.prev,e,e.next)>0)}function bt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function La(s,e){return s.x===e.x&&s.y===e.y}function Jf(s,e,t,n){let i=Bo(bt(s,e,t)),r=Bo(bt(s,e,n)),o=Bo(bt(t,n,s)),a=Bo(bt(t,n,e));return!!(i!==r&&o!==a||i===0&&Oo(s,t,e)||r===0&&Oo(s,n,e)||o===0&&Oo(t,s,n)||a===0&&Oo(t,e,n))}function Oo(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Bo(s){return s>0?1:s<0?-1:0}function ex(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Jf(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function zr(s,e){return bt(s.prev,s,s.next)<0?bt(s,e,s.next)>=0&&bt(s,s.prev,e)>=0:bt(s,e,s.prev)<0||bt(s,s.next,e)<0}function tx(s,e){let t=s,n=!1,i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function jf(s,e){let t=new Fc(s.i,s.x,s.y),n=new Fc(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function vf(s,e,t,n){let i=new Fc(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Vr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Fc(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function nx(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var Cr=class s{static area(e){let t=e.length,n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return s.area(e)<0}static triangulateShape(e,t){let n=[],i=[],r=[];Mf(e),Sf(n,e);let o=e.length;t.forEach(Mf);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,Sf(n,t[l]);let a=Hy.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Mf(s){let e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Sf(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}var ya=class s extends Mt{constructor(e=new kr([new ce(.5,.5),new ce(-.5,.5),new ce(-.5,-.5),new ce(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new Je(i,3)),this.setAttribute("uv",new Je(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:d-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,b=t.UVGenerator!==void 0?t.UVGenerator:ix,S,y=!1,B,P,I,w;p&&(S=p.getSpacedPoints(h),y=!0,f=!1,B=p.computeFrenetFrames(h,!1),P=new L,I=new L,w=new L),f||(g=0,d=0,m=0,x=0);let v=a.extractPoints(c),M=v.shape,T=v.holes;if(!Cr.isClockWise(M)){M=M.reverse();for(let z=0,D=T.length;z<D;z++){let R=T[z];Cr.isClockWise(R)&&(T[z]=R.reverse())}}let G=Cr.triangulateShape(M,T),X=M;for(let z=0,D=T.length;z<D;z++){let R=T[z];M=M.concat(R)}function U(z,D,R){return D||console.error("THREE.ExtrudeGeometry: vec does not exist"),z.clone().addScaledVector(D,R)}let H=M.length,ne=G.length;function J(z,D,R){let ae,$,de,ue=z.x-D.x,we=z.y-D.y,F=R.x-z.x,A=R.y-z.y,E=ue*ue+we*we,k=ue*A-we*F;if(Math.abs(k)>Number.EPSILON){let j=Math.sqrt(E),oe=Math.sqrt(F*F+A*A),le=D.x-we/j,De=D.y+ue/j,Se=R.x-A/oe,Re=R.y+F/oe,et=((Se-le)*A-(Re-De)*F)/(ue*A-we*F);ae=le+ue*et-z.x,$=De+we*et-z.y;let ge=ae*ae+$*$;if(ge<=2)return new ce(ae,$);de=Math.sqrt(ge/2)}else{let j=!1;ue>Number.EPSILON?F>Number.EPSILON&&(j=!0):ue<-Number.EPSILON?F<-Number.EPSILON&&(j=!0):Math.sign(we)===Math.sign(A)&&(j=!0),j?(ae=-we,$=ue,de=Math.sqrt(E)):(ae=ue,$=we,de=Math.sqrt(E/2))}return new ce(ae/de,$/de)}let pe=[];for(let z=0,D=X.length,R=D-1,ae=z+1;z<D;z++,R++,ae++)R===D&&(R=0),ae===D&&(ae=0),pe[z]=J(X[z],X[R],X[ae]);let _e=[],ve,Le=pe.concat();for(let z=0,D=T.length;z<D;z++){let R=T[z];ve=[];for(let ae=0,$=R.length,de=$-1,ue=ae+1;ae<$;ae++,de++,ue++)de===$&&(de=0),ue===$&&(ue=0),ve[ae]=J(R[ae],R[de],R[ue]);_e.push(ve),Le=Le.concat(ve)}for(let z=0;z<g;z++){let D=z/g,R=d*Math.cos(D*Math.PI/2),ae=m*Math.sin(D*Math.PI/2)+x;for(let $=0,de=X.length;$<de;$++){let ue=U(X[$],pe[$],ae);O(ue.x,ue.y,-R)}for(let $=0,de=T.length;$<de;$++){let ue=T[$];ve=_e[$];for(let we=0,F=ue.length;we<F;we++){let A=U(ue[we],ve[we],ae);O(A.x,A.y,-R)}}}let He=m+x;for(let z=0;z<H;z++){let D=f?U(M[z],Le[z],He):M[z];y?(I.copy(B.normals[0]).multiplyScalar(D.x),P.copy(B.binormals[0]).multiplyScalar(D.y),w.copy(S[0]).add(I).add(P),O(w.x,w.y,w.z)):O(D.x,D.y,0)}for(let z=1;z<=h;z++)for(let D=0;D<H;D++){let R=f?U(M[D],Le[D],He):M[D];y?(I.copy(B.normals[z]).multiplyScalar(R.x),P.copy(B.binormals[z]).multiplyScalar(R.y),w.copy(S[z]).add(I).add(P),O(w.x,w.y,w.z)):O(R.x,R.y,u/h*z)}for(let z=g-1;z>=0;z--){let D=z/g,R=d*Math.cos(D*Math.PI/2),ae=m*Math.sin(D*Math.PI/2)+x;for(let $=0,de=X.length;$<de;$++){let ue=U(X[$],pe[$],ae);O(ue.x,ue.y,u+R)}for(let $=0,de=T.length;$<de;$++){let ue=T[$];ve=_e[$];for(let we=0,F=ue.length;we<F;we++){let A=U(ue[we],ve[we],ae);y?O(A.x,A.y+S[h-1].y,S[h-1].x+R):O(A.x,A.y,u+R)}}}re(),ie();function re(){let z=i.length/3;if(f){let D=0,R=H*D;for(let ae=0;ae<ne;ae++){let $=G[ae];W($[2]+R,$[1]+R,$[0]+R)}D=h+g*2,R=H*D;for(let ae=0;ae<ne;ae++){let $=G[ae];W($[0]+R,$[1]+R,$[2]+R)}}else{for(let D=0;D<ne;D++){let R=G[D];W(R[2],R[1],R[0])}for(let D=0;D<ne;D++){let R=G[D];W(R[0]+H*h,R[1]+H*h,R[2]+H*h)}}n.addGroup(z,i.length/3-z,0)}function ie(){let z=i.length/3,D=0;_(X,D),D+=X.length;for(let R=0,ae=T.length;R<ae;R++){let $=T[R];_($,D),D+=$.length}n.addGroup(z,i.length/3-z,1)}function _(z,D){let R=z.length;for(;--R>=0;){let ae=R,$=R-1;$<0&&($=z.length-1);for(let de=0,ue=h+g*2;de<ue;de++){let we=H*de,F=H*(de+1),A=D+ae+we,E=D+$+we,k=D+$+F,j=D+ae+F;q(A,E,k,j)}}}function O(z,D,R){l.push(z),l.push(D),l.push(R)}function W(z,D,R){he(z),he(D),he(R);let ae=i.length/3,$=b.generateTopUV(n,i,ae-3,ae-2,ae-1);V($[0]),V($[1]),V($[2])}function q(z,D,R,ae){he(z),he(D),he(ae),he(D),he(R),he(ae);let $=i.length/3,de=b.generateSideWallUV(n,i,$-6,$-3,$-2,$-1);V(de[0]),V(de[1]),V(de[3]),V(de[1]),V(de[2]),V(de[3])}function he(z){i.push(l[z*3+0]),i.push(l[z*3+1]),i.push(l[z*3+2])}function V(z){r.push(z.x),r.push(z.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return sx(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new pa[i.type]().fromJSON(i)),new s(n,e.options)}},ix={generateTopUV:function(s,e,t,n,i){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[i*3],h=e[i*3+1];return[new ce(r,o),new ce(a,l),new ce(c,h)]},generateSideWallUV:function(s,e,t,n,i,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],f=e[i*3],d=e[i*3+1],m=e[i*3+2],x=e[r*3],g=e[r*3+1],p=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new ce(o,1-l),new ce(c,1-u),new ce(f,1-m),new ce(x,1-p)]:[new ce(a,1-l),new ce(h,1-u),new ce(d,1-m),new ce(g,1-p)]}};function sx(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var xa=class s extends _a{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}};var It=class s extends Mt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new L,f=new L,d=[],m=[],x=[],g=[];for(let p=0;p<=n;p++){let b=[],S=p/n,y=0;p===0&&o===0?y=.5/t:p===n&&l===Math.PI&&(y=-.5/t);for(let B=0;B<=t;B++){let P=B/t;u.x=-e*Math.cos(i+P*r)*Math.sin(o+S*a),u.y=e*Math.cos(o+S*a),u.z=e*Math.sin(i+P*r)*Math.sin(o+S*a),m.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),g.push(P+y,1-S),b.push(c++)}h.push(b)}for(let p=0;p<n;p++)for(let b=0;b<t;b++){let S=h[p][b+1],y=h[p][b],B=h[p+1][b],P=h[p+1][b+1];(p!==0||o>0)&&d.push(S,y,P),(p!==n-1||l<Math.PI)&&d.push(y,B,P)}this.setIndex(d),this.setAttribute("position",new Je(m,3)),this.setAttribute("normal",new Je(x,3)),this.setAttribute("uv",new Je(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Zi=class s extends Mt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],l=[],c=[],h=new L,u=new L,f=new L;for(let d=0;d<=n;d++)for(let m=0;m<=i;m++){let x=m/i*r,g=d/n*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(x),u.y=(e+t*Math.cos(g))*Math.sin(x),u.z=t*Math.sin(g),a.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(m/i),c.push(d/n)}for(let d=1;d<=n;d++)for(let m=1;m<=i;m++){let x=(i+1)*d+m-1,g=(i+1)*(d-1)+m-1,p=(i+1)*(d-1)+m,b=(i+1)*d+m;o.push(x,g,b),o.push(g,p,b)}this.setIndex(o),this.setAttribute("position",new Je(a,3)),this.setAttribute("normal",new Je(l,3)),this.setAttribute("uv",new Je(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var kn=class s extends Mt{constructor(e=new fa(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new L,l=new L,c=new ce,h=new L,u=[],f=[],d=[],m=[];x(),this.setIndex(m),this.setAttribute("position",new Je(u,3)),this.setAttribute("normal",new Je(f,3)),this.setAttribute("uv",new Je(d,2));function x(){for(let S=0;S<t;S++)g(S);g(r===!1?t:0),b(),p()}function g(S){h=e.getPointAt(S/t,h);let y=o.normals[S],B=o.binormals[S];for(let P=0;P<=i;P++){let I=P/i*Math.PI*2,w=Math.sin(I),v=-Math.cos(I);l.x=v*y.x+w*B.x,l.y=v*y.y+w*B.y,l.z=v*y.z+w*B.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function p(){for(let S=1;S<=t;S++)for(let y=1;y<=i;y++){let B=(i+1)*(S-1)+(y-1),P=(i+1)*S+(y-1),I=(i+1)*S+y,w=(i+1)*(S-1)+y;m.push(B,P,w),m.push(P,I,w)}}function b(){for(let S=0;S<=t;S++)for(let y=0;y<=i;y++)c.x=S/t,c.y=y/i,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new s(new pa[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var Js=class extends qt{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ah,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},an=class extends Js{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ce(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Pt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ke(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ke(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ke(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var va=class extends qt{static get type(){return"MeshToonMaterial"}constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.color=new ke(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ah,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};function Fo(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function rx(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function ox(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function bf(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function Qf(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}var Ai=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},kc=class extends Ai{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ws,endingEnd:ws}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case As:r=e,a=2*t-n;break;case Wo:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case As:o=e,l=2*n-t;break;case Wo:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(n-t)/(i-t),x=m*m,g=x*m,p=-f*g+2*f*x-f*m,b=(1+f)*g+(-1.5-2*f)*x+(-.5+f)*m+1,S=(-1-d)*g+(1.5+d)*x+.5*m,y=d*g-d*x;for(let B=0;B!==a;++B)r[B]=p*o[h+B]+b*o[c+B]+S*o[l+B]+y*o[u+B];return r}},Ma=class extends Ai{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},Hc=class extends Ai{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},gn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Fo(t,this.TimeBufferType),this.values=Fo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Fo(e.times,Array),values:Fo(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Hc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ma(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new kc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Hs:t=this.InterpolantFactoryMethodDiscrete;break;case zs:t=this.InterpolantFactoryMethodLinear;break;case $a:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Hs;case this.InterpolantFactoryMethodLinear:return zs;case this.InterpolantFactoryMethodSmooth:return $a}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&rx(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===$a,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{let u=a*n,f=u-n,d=u+n;for(let m=0;m!==n;++m){let x=t[u+m];if(x!==t[f+m]||x!==t[d+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};gn.prototype.TimeBufferType=Float32Array;gn.prototype.ValueBufferType=Float32Array;gn.prototype.DefaultInterpolation=zs;var Ri=class extends gn{constructor(e,t,n){super(e,t,n)}};Ri.prototype.ValueTypeName="bool";Ri.prototype.ValueBufferType=Array;Ri.prototype.DefaultInterpolation=Hs;Ri.prototype.InterpolantFactoryMethodLinear=void 0;Ri.prototype.InterpolantFactoryMethodSmooth=void 0;var Sa=class extends gn{};Sa.prototype.ValueTypeName="color";var ii=class extends gn{};ii.prototype.ValueTypeName="number";var zc=class extends Ai{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t),c=e*a;for(let h=c+a;c!==h;c+=4)kt.slerpFlat(r,0,o,c-a,o,c,l);return r}},si=class extends gn{InterpolantFactoryMethodLinear(e){return new zc(this.times,this.values,this.getValueSize(),e)}};si.prototype.ValueTypeName="quaternion";si.prototype.InterpolantFactoryMethodSmooth=void 0;var Ci=class extends gn{constructor(e,t,n){super(e,t,n)}};Ci.prototype.ValueTypeName="string";Ci.prototype.ValueBufferType=Array;Ci.prototype.DefaultInterpolation=Hs;Ci.prototype.InterpolantFactoryMethodLinear=void 0;Ci.prototype.InterpolantFactoryMethodSmooth=void 0;var ri=class extends gn{};ri.prototype.ValueTypeName="vector";var js=class{constructor(e="",t=-1,n=[],i=oh){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=dn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(lx(n[o]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(gn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let h=ox(l);l=bf(l,1,h),c=bf(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new ii(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],h=c.name.match(r);if(h&&h.length>1){let u=h[1],f=i[u];f||(i[u]=f=[]),f.push(c)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,f,d,m,x){if(d.length!==0){let g=[],p=[];Qf(d,g,p,m),g.length!==0&&x.push(new u(f,g,p))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let u=0;u<c.length;u++){let f=c[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let d={},m;for(m=0;m<f.length;m++)if(f[m].morphTargets)for(let x=0;x<f[m].morphTargets.length;x++)d[f[m].morphTargets[x]]=-1;for(let x in d){let g=[],p=[];for(let b=0;b!==f[m].morphTargets.length;++b){let S=f[m];g.push(S.time),p.push(S.morphTarget===x?1:0)}i.push(new ii(".morphTargetInfluence["+x+"]",g,p))}l=d.length*o}else{let d=".bones["+t[u].name+"]";n(ri,d+".position",f,"pos",i),n(si,d+".quaternion",f,"rot",i),n(ri,d+".scale",f,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function ax(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ii;case"vector":case"vector2":case"vector3":case"vector4":return ri;case"color":return Sa;case"quaternion":return si;case"bool":case"boolean":return Ri;case"string":return Ci}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function lx(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=ax(s.type);if(s.times===void 0){let t=[],n=[];Qf(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}var Si={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},Vc=class{constructor(e,t,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],m=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null}}},cx=new Vc,oi=class{constructor(e){this.manager=e!==void 0?e:cx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};oi.DEFAULT_MATERIAL_NAME="__DEFAULT";var Zn={},Gc=class extends Error{constructor(e,t){super(e),this.response=t}},Gr=class extends oi{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Si.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Zn[e]!==void 0){Zn[e].push({onLoad:t,onProgress:n,onError:i});return}Zn[e]=[],Zn[e].push({onLoad:t,onProgress:n,onError:i});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=Zn[e],u=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,m=d!==0,x=0,g=new ReadableStream({start(p){b();function b(){u.read().then(({done:S,value:y})=>{if(S)p.close();else{x+=y.byteLength;let B=new ProgressEvent("progress",{lengthComputable:m,loaded:x,total:d});for(let P=0,I=h.length;P<I;P++){let w=h[P];w.onProgress&&w.onProgress(B)}p.enqueue(y),b()}},S=>{p.error(S)})}}});return new Response(g)}else throw new Gc(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(m=>d.decode(m))}}}).then(c=>{Si.add(e,c);let h=Zn[e];delete Zn[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onLoad&&d.onLoad(c)}}).catch(c=>{let h=Zn[e];if(h===void 0)throw this.manager.itemError(e),c;delete Zn[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Wc=class extends oi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Si.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=Lr("img");function l(){h(),Si.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var ba=class extends oi{constructor(e){super(e)}load(e,t,n,i){let r=new Ft,o=new Wc(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},Qs=class extends gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Ea=class extends Qs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ke(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Pl=new We,Ef=new L,Tf=new L,Wr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.map=null,this.mapPass=null,this.matrix=new We,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Dr,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new st(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Ef.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ef),Tf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Tf),t.updateMatrixWorld(),Pl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Pl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Xc=class extends Wr{constructor(){super(new Lt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Vs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Ta=class extends Qs{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Xc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},wf=new We,vr=new L,Il=new L,Yc=class extends Wr{constructor(){super(new Lt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ce(4,2),this._viewportCount=6,this._viewports=[new st(2,1,1,1),new st(0,1,1,1),new st(3,1,1,1),new st(1,1,1,1),new st(3,0,1,1),new st(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),vr.setFromMatrixPosition(e.matrixWorld),n.position.copy(vr),Il.copy(n.position),Il.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Il),n.updateMatrixWorld(),i.makeTranslation(-vr.x,-vr.y,-vr.z),wf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wf)}},Cn=class extends Qs{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Yc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},qc=class extends Wr{constructor(){super(new Ws(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},$i=class extends Qs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.shadow=new qc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Pi=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var wa=class extends oi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Si.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Si.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Si.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Si.add(e,l),r.manager.itemStart(e)}};var Kc=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,o;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,r=e*i+i,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=t}else{o+=t;let a=t/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,o=i;r!==o;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){kt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){let o=this._workIndex*r;kt.multiplyQuaternionsFlat(e,o,e,t,e,n),kt.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,r){let o=1-i;for(let a=0;a!==r;++a){let l=t+a;e[l]=e[l]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,r){for(let o=0;o!==r;++o){let a=t+o;e[a]=e[a]+e[n+o]*i}}},fh="\\[\\]\\.:\\/",hx=new RegExp("["+fh+"]","g"),dh="[^"+fh+"]",ux="[^"+fh.replace("\\.","")+"]",fx=/((?:WC+[\/:])*)/.source.replace("WC",dh),dx=/(WCOD+)?/.source.replace("WCOD",ux),px=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",dh),mx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",dh),gx=new RegExp("^"+fx+dx+px+mx+"$"),_x=["material","materials","bones","map"],Zc=class{constructor(e,t,n){let i=n||ft.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ft=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(hx,"")}static parseTrackName(e){let t=gx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);_x.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[i];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ft.Composite=Zc;ft.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ft.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ft.prototype.GetterByBindingType=[ft.prototype._getValue_direct,ft.prototype._getValue_array,ft.prototype._getValue_arrayElement,ft.prototype._getValue_toArray];ft.prototype.SetterByBindingTypeAndVersioning=[[ft.prototype._setValue_direct,ft.prototype._setValue_direct_setNeedsUpdate,ft.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_array,ft.prototype._setValue_array_setNeedsUpdate,ft.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_arrayElement,ft.prototype._setValue_arrayElement_setNeedsUpdate,ft.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_fromArray,ft.prototype._setValue_fromArray_setNeedsUpdate,ft.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var $c=class{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let r=t.tracks,o=r.length,a=new Array(o),l={endingStart:ws,endingEnd:ws};for(let c=0;c!==o;++c){let h=r[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=rp,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){let i=this._clip.duration,r=e._clip.duration,o=r/i,a=i/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,r=i.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);let l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);let o=this._updateTime(t),a=this._updateWeight(e);if(a>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case ap:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulateAdditive(a);break;case oh:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,r=this._loopCount,o=n===op;if(e===0)return r===-1?i:o&&(r&1)===1?t-i:i;if(n===sp){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){let a=Math.floor(i/t);i-=t*a,r+=Math.abs(a);let l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;n?(i.endingStart=As,i.endingEnd=As):(e?i.endingStart=this.zeroSlopeAtStart?As:ws:i.endingStart=Wo,t?i.endingEnd=this.zeroSlopeAtEnd?As:ws:i.endingEnd=Wo)}_scheduleFading(e,t,n){let i=this._mixer,r=i.time,o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=t,a[1]=r+e,l[1]=n,this}},yx=new Float32Array(1),er=class extends Bn{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName,h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==r;++u){let f=i[u],d=f.name,m=h[d];if(m!==void 0)++m.referenceCount,o[u]=m;else{if(m=o[u],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,l,d));continue}let x=t&&t._propertyBindings[u].binding.parsedPath;m=new Kc(ft.create(n,d,x),f.ValueTypeName,f.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,l,d),o[u]=m}a[u].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let i=this._actions,r=this._actionsByClip,o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{let a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;let u=a.actionByRoot,f=(e._localRoot||this._root).uuid;delete u[f],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let i=this._bindingsByRootAndName,r=this._bindings,o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new Ma(new Float32Array(2),new Float32Array(2),1,yx),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let i=t||this._root,r=i.uuid,o=typeof e=="string"?js.findByName(i,e):e,a=o!==null?o.uuid:e,l=this._actionsByClip[a],c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=oh),l!==void 0){let u=l.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;let h=new $c(this,o,t,n);return this._bindAction(h,c),this._addInactiveAction(h,a,r),h}existingAction(e,t){let n=t||this._root,i=n.uuid,r=typeof e=="string"?js.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,o);let a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){let o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){let c=o[a];this._deactivateAction(c);let h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(let o in r){let a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var Xr=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Pt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Aa=class extends Bn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jc);var Da=class{constructor(e,t={}){this.enabled=!0;let n=t.defaultThickness!==void 0?t.defaultThickness:.003,i=new ke().fromArray(t.defaultColor!==void 0?t.defaultColor:[0,0,0]),r=t.defaultAlpha!==void 0?t.defaultAlpha:1,o=t.defaultKeepAlive!==void 0?t.defaultKeepAlive:!1,a={},l=60,c={},h={},u={outlineThickness:{value:n},outlineColor:{value:i},outlineAlpha:{value:r}},f=["#include <common>","#include <uv_pars_vertex>","#include <displacementmap_pars_vertex>","#include <fog_pars_vertex>","#include <morphtarget_pars_vertex>","#include <skinning_pars_vertex>","#include <logdepthbuf_pars_vertex>","#include <clipping_planes_pars_vertex>","uniform float outlineThickness;","vec4 calculateOutline( vec4 pos, vec3 normal, vec4 skinned ) {","	float thickness = outlineThickness;","	const float ratio = 1.0;","	vec4 pos2 = projectionMatrix * modelViewMatrix * vec4( skinned.xyz + normal, 1.0 );","	vec4 norm = normalize( pos - pos2 );","	return pos + norm * thickness * pos.w * ratio;","}","void main() {","	#include <uv_vertex>","	#include <beginnormal_vertex>","	#include <morphnormal_vertex>","	#include <skinbase_vertex>","	#include <skinnormal_vertex>","	#include <begin_vertex>","	#include <morphtarget_vertex>","	#include <skinning_vertex>","	#include <displacementmap_vertex>","	#include <project_vertex>","	vec3 outlineNormal = - objectNormal;","	gl_Position = calculateOutline( gl_Position, outlineNormal, vec4( transformed, 1.0 ) );","	#include <logdepthbuf_vertex>","	#include <clipping_planes_vertex>","	#include <fog_vertex>","}"].join(`
`),d=["#include <common>","#include <fog_pars_fragment>","#include <logdepthbuf_pars_fragment>","#include <clipping_planes_pars_fragment>","uniform vec3 outlineColor;","uniform float outlineAlpha;","void main() {","	#include <clipping_planes_fragment>","	#include <logdepthbuf_fragment>","	gl_FragColor = vec4( outlineColor, outlineAlpha );","	#include <tonemapping_fragment>","	#include <colorspace_fragment>","	#include <fog_fragment>","	#include <premultiplied_alpha_fragment>","}"].join(`
`);function m(){return new pn({type:"OutlineEffect",uniforms:ch.merge([Me.fog,Me.displacementmap,u]),vertexShader:f,fragmentShader:d,side:Gt})}function x(w){let v=a[w.uuid];return v===void 0&&(v={material:m(),used:!0,keepAlive:o,count:0},a[w.uuid]=v),v.used=!0,v.material}function g(w){let v=x(w);return c[v.uuid]=w,P(v,w),v}function p(w){let v=w.geometry,M=v!==void 0&&v.attributes.normal!==void 0;return w.isMesh===!0&&w.material!==void 0&&M===!0}function b(w){if(p(w)!==!1){if(Array.isArray(w.material))for(let v=0,M=w.material.length;v<M;v++)w.material[v]=g(w.material[v]);else w.material=g(w.material);h[w.uuid]=w.onBeforeRender,w.onBeforeRender=y}}function S(w){if(p(w)!==!1){if(Array.isArray(w.material))for(let v=0,M=w.material.length;v<M;v++)w.material[v]=c[w.material[v].uuid];else w.material=c[w.material.uuid];w.onBeforeRender=h[w.uuid]}}function y(w,v,M,T,N){let G=c[N.uuid];G!==void 0&&B(N,G)}function B(w,v){let M=v.userData.outlineParameters;w.uniforms.outlineAlpha.value=v.opacity,M!==void 0&&(M.thickness!==void 0&&(w.uniforms.outlineThickness.value=M.thickness),M.color!==void 0&&w.uniforms.outlineColor.value.fromArray(M.color),M.alpha!==void 0&&(w.uniforms.outlineAlpha.value=M.alpha)),v.displacementMap&&(w.uniforms.displacementMap.value=v.displacementMap,w.uniforms.displacementScale.value=v.displacementScale,w.uniforms.displacementBias.value=v.displacementBias)}function P(w,v){if(w.name==="invisible")return;let M=v.userData.outlineParameters;w.fog=v.fog,w.toneMapped=v.toneMapped,w.premultipliedAlpha=v.premultipliedAlpha,w.displacementMap=v.displacementMap,M!==void 0?(v.visible===!1?w.visible=!1:w.visible=M.visible!==void 0?M.visible:!0,w.transparent=M.alpha!==void 0&&M.alpha<1?!0:v.transparent,M.keepAlive!==void 0&&(a[v.uuid].keepAlive=M.keepAlive)):(w.transparent=v.transparent,w.visible=v.visible),(v.wireframe===!0||v.depthTest===!1)&&(w.visible=!1),v.clippingPlanes&&(w.clipping=!0,w.clippingPlanes=v.clippingPlanes,w.clipIntersection=v.clipIntersection,w.clipShadows=v.clipShadows),w.version=v.version}function I(){let w;w=Object.keys(c);for(let v=0,M=w.length;v<M;v++)c[w[v]]=void 0;w=Object.keys(h);for(let v=0,M=w.length;v<M;v++)h[w[v]]=void 0;w=Object.keys(a);for(let v=0,M=w.length;v<M;v++){let T=w[v];a[T].used===!1?(a[T].count++,a[T].keepAlive===!1&&a[T].count>l&&delete a[T]):(a[T].used=!1,a[T].count=0)}}this.render=function(w,v){if(this.enabled===!1){e.render(w,v);return}let M=e.autoClear;e.autoClear=this.autoClear,e.render(w,v),e.autoClear=M,this.renderOutline(w,v)},this.renderOutline=function(w,v){let M=e.autoClear,T=w.matrixWorldAutoUpdate,N=w.background,G=e.shadowMap.enabled;w.matrixWorldAutoUpdate=!1,w.background=null,e.autoClear=!1,e.shadowMap.enabled=!1,w.traverse(b),e.render(w,v),w.traverse(S),I(),w.matrixWorldAutoUpdate=T,w.background=N,e.autoClear=M,e.shadowMap.enabled=G},this.autoClear=e.autoClear,this.domElement=e.domElement,this.shadowMap=e.shadowMap,this.clear=function(w,v,M){e.clear(w,v,M)},this.getPixelRatio=function(){return e.getPixelRatio()},this.setPixelRatio=function(w){e.setPixelRatio(w)},this.getSize=function(w){return e.getSize(w)},this.setSize=function(w,v,M){e.setSize(w,v,M)},this.setViewport=function(w,v,M,T){e.setViewport(w,v,M,T)},this.setScissor=function(w,v,M,T){e.setScissor(w,v,M,T)},this.setScissorTest=function(w){e.setScissorTest(w)},this.setRenderTarget=function(w){e.setRenderTarget(w)}}};var Zr=Object.freeze({bands:Object.freeze([68,122,184,246]),ink:2564894,thickness:.0032,maxDpr:2,camera:Object.freeze({fov:26,azimuth:38,elevation:27.5}),lighting:Object.freeze({key:2.55,hemisphere:1.55,fill:.72})});function xx(s=Zr.bands){if(s.length!==4||!s.every(t=>Number.isInteger(t)&&t>=0&&t<=255))throw new Error("stroked-toon requires four byte-valued shade steps");let e=new qs(new Uint8Array(s),4,1,qr);return e.minFilter=e.magFilter=Bt,e.generateMipmaps=!1,e.needsUpdate=!0,e}function Hn(s,e=!0,t=.0032){return s.userData.outlineParameters={visible:e,thickness:t},s}function ed(s,{bands:e=Zr.bands,ink:t=Zr.ink,thickness:n=Zr.thickness,maxDpr:i=Zr.maxDpr,dpr:r=globalThis.devicePixelRatio||1}={}){let o=xx(e);s.setPixelRatio(Math.min(Math.max(r,1),i)),s.outputColorSpace=dt,s.toneMapping=Nn,s.shadowMap.enabled=!0,s.shadowMap.type=jc,s.setClearColor(0,0);let a=new ke(t),l=new Da(s,{defaultThickness:n,defaultColor:a.toArray(),defaultAlpha:1,defaultKeepAlive:!0}),c=new Set;function h(f,{outline:d=!0,stroke:m=n,...x}={}){let g=new va({color:f,gradientMap:o,...x});return Hn(g,d,m),c.add(g),g}function u(f,d={}){let m=new St({color:f,...d});return Hn(m,!1),c.add(m),m}return{preset:"stroked-toon",effect:l,ramp:o,toon:h,flat:u,render(f,d){l.render(f,d)},dispose(){for(let f of c)f.dispose();c.clear(),o.dispose()}}}var td={type:"change"},mh={type:"start"},id={type:"end"},Na=new Ei,nd=new Tn,vx=Math.cos(70*Qi.DEG2RAD),Ut=new L,jt=2*Math.PI,ht={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ph=1e-6,Ua=class extends Aa{constructor(e,t=null){super(e,t),this.state=ht.NONE,this.enabled=!0,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ji.ROTATE,MIDDLE:Ji.DOLLY,RIGHT:Ji.PAN},this.touches={ONE:ji.ROTATE,TWO:ji.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new L,this._lastQuaternion=new kt,this._lastTargetPosition=new L,this._quat=new kt().setFromUnitVectors(e.up,new L(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Xr,this._sphericalDelta=new Xr,this._scale=1,this._panOffset=new L,this._rotateStart=new ce,this._rotateEnd=new ce,this._rotateDelta=new ce,this._panStart=new ce,this._panEnd=new ce,this._panDelta=new ce,this._dollyStart=new ce,this._dollyEnd=new ce,this._dollyDelta=new ce,this._dollyDirection=new L,this._mouse=new ce,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Sx.bind(this),this._onPointerDown=Mx.bind(this),this._onPointerUp=bx.bind(this),this._onContextMenu=Px.bind(this),this._onMouseWheel=wx.bind(this),this._onKeyDown=Ax.bind(this),this._onTouchStart=Rx.bind(this),this._onTouchMove=Cx.bind(this),this._onMouseDown=Ex.bind(this),this._onMouseMove=Tx.bind(this),this._interceptControlDown=Ix.bind(this),this._interceptControlUp=Lx.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(td),this.update(),this.state=ht.NONE}update(e=null){let t=this.object.position;Ut.copy(t).sub(this.target),Ut.applyQuaternion(this._quat),this._spherical.setFromVector3(Ut),this.autoRotate&&this.state===ht.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=jt:n>Math.PI&&(n-=jt),i<-Math.PI?i+=jt:i>Math.PI&&(i-=jt),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Ut.setFromSpherical(this._spherical),Ut.applyQuaternion(this._quatInverse),t.copy(this.target).add(Ut),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Ut.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new L(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new L(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Ut.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Na.origin.copy(this.object.position),Na.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Na.direction))<vx?this.object.lookAt(this.target):(nd.setFromNormalAndCoplanarPoint(this.object.up,this.target),Na.intersectPlane(nd,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>ph||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ph||this._lastTargetPosition.distanceToSquared(this.target)>ph?(this.dispatchEvent(td),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?jt/60*this.autoRotateSpeed*e:jt/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Ut.setFromMatrixColumn(t,0),Ut.multiplyScalar(-e),this._panOffset.add(Ut)}_panUp(e,t){this.screenSpacePanning===!0?Ut.setFromMatrixColumn(t,1):(Ut.setFromMatrixColumn(t,0),Ut.crossVectors(this.object.up,Ut)),Ut.multiplyScalar(e),this._panOffset.add(Ut)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let i=this.object.position;Ut.copy(i).sub(this.target);let r=Ut.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),i=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=i/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(jt*this._rotateDelta.x/t.clientHeight),this._rotateUp(jt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(jt*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-jt*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(jt*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-jt*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(jt*this._rotateDelta.x/t.clientHeight),this._rotateUp(jt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ce,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function Mx(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function Sx(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function bx(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(id),this.state=ht.NONE;break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Ex(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ji.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=ht.DOLLY;break;case Ji.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=ht.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=ht.ROTATE}break;case Ji.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=ht.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=ht.PAN}break;default:this.state=ht.NONE}this.state!==ht.NONE&&this.dispatchEvent(mh)}function Tx(s){switch(this.state){case ht.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case ht.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case ht.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function wx(s){this.enabled===!1||this.enableZoom===!1||this.state!==ht.NONE||(s.preventDefault(),this.dispatchEvent(mh),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(id))}function Ax(s){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(s)}function Rx(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case ji.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=ht.TOUCH_ROTATE;break;case ji.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=ht.TOUCH_PAN;break;default:this.state=ht.NONE}break;case 2:switch(this.touches.TWO){case ji.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=ht.TOUCH_DOLLY_PAN;break;case ji.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=ht.TOUCH_DOLLY_ROTATE;break;default:this.state=ht.NONE}break;default:this.state=ht.NONE}this.state!==ht.NONE&&this.dispatchEvent(mh)}function Cx(s){switch(this._trackPointer(s),this.state){case ht.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case ht.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case ht.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case ht.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=ht.NONE}}function Px(s){this.enabled!==!1&&s.preventDefault()}function Ix(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Lx(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function sd(s,e,{target:t,minDistance:n=1,maxDistance:i=100,minPolarAngle:r=.08,maxPolarAngle:o=Math.PI-.08,clickSlop:a=5,onSelect:l=()=>{},onChange:c=()=>{}}={}){let h=new Ua(s,e);t&&h.target.copy(t),h.enablePan=!1,h.autoRotate=!1,h.enableDamping=!1,Object.assign(h,{minDistance:n,maxDistance:i,minPolarAngle:r,maxPolarAngle:o}),h.update();let u=s.position.clone(),f=h.target.clone(),d=s.zoom,m=new Map,x=!1;function g(w){if(m.set(w.pointerId,{x:w.clientX,y:w.clientY,moved:!1}),m.size>1){x=!0;for(let v of m.values())v.moved=!0}}function p(w){let v=m.get(w.pointerId);v&&Math.hypot(w.clientX-v.x,w.clientY-v.y)>a&&(v.moved=!0)}function b(w){let v=m.get(w.pointerId);m.delete(w.pointerId),v&&Math.hypot(w.clientX-v.x,w.clientY-v.y)>a&&(v.moved=!0),v&&!v.moved&&!x&&(w.button===0||w.pointerType==="touch")&&l(w),m.size||(x=!1)}function S(w){m.delete(w.pointerId),m.size||(x=!1)}function y(){m.clear(),x=!1,s.position.copy(u),s.zoom=d,h.target.copy(f),s.updateProjectionMatrix(),h.update(),c()}function B(w){if(w.target!==e)return;if(w.key.toLowerCase()==="r"){w.preventDefault(),y();return}let v={ArrowLeft:[-.12,0],ArrowRight:[.12,0],ArrowUp:[0,-.12],ArrowDown:[0,.12]}[w.key];if(!v)return;w.preventDefault();let M=s.position.clone().sub(h.target),T=M.length(),N=Math.atan2(M.x,M.z)+v[0],G=Math.max(r,Math.min(o,Math.acos(M.y/T)+v[1]));M.set(T*Math.sin(G)*Math.sin(N),T*Math.cos(G),T*Math.sin(G)*Math.cos(N)),s.position.copy(h.target).add(M),h.update(),c()}let P=e.getAttribute("tabindex");P===null&&(e.tabIndex=0);let I=[["pointerdown",g],["pointermove",p],["pointerup",b],["pointercancel",S],["keydown",B]];for(let[w,v]of I)e.addEventListener(w,v,!0);return h.addEventListener("change",c),{controls:h,reset:y,heroPosition:u,heroTarget:f,dispose(){for(let[w,v]of I)e.removeEventListener(w,v,!0);h.removeEventListener("change",c),h.dispose(),m.clear(),P===null&&e.removeAttribute("tabindex")}}}var $r=new L;function _n(s,e,t,n,i,r){let o=2*Math.PI*i/4,a=Math.max(r-2*i,0),l=Math.PI/4;$r.copy(e),$r[n]=0,$r.normalize();let c=.5*o/(o+a),h=1-$r.angleTo(s)/l;return Math.sign($r[t])===1?h*c:a/(o+a)+c+c*(1-h)}var Oa=class extends Rt{constructor(e=1,t=1,n=1,i=2,r=.1){if(i=i*2+1,r=Math.min(e/2,t/2,n/2,r),super(1,1,1,i,i,i),i===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new L,l=new L,c=new L(e,t,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,d=h.length/6,m=new L,x=.5/i;for(let g=0,p=0;g<h.length;g+=3,p+=2)switch(a.fromArray(h,g),l.copy(a),l.x-=Math.sign(l.x)*x,l.y-=Math.sign(l.y)*x,l.z-=Math.sign(l.z)*x,l.normalize(),h[g+0]=c.x*Math.sign(a.x)+l.x*r,h[g+1]=c.y*Math.sign(a.y)+l.y*r,h[g+2]=c.z*Math.sign(a.z)+l.z*r,u[g+0]=l.x,u[g+1]=l.y,u[g+2]=l.z,Math.floor(g/d)){case 0:m.set(1,0,0),f[p+0]=_n(m,l,"z","y",r,n),f[p+1]=1-_n(m,l,"y","z",r,t);break;case 1:m.set(-1,0,0),f[p+0]=1-_n(m,l,"z","y",r,n),f[p+1]=1-_n(m,l,"y","z",r,t);break;case 2:m.set(0,1,0),f[p+0]=1-_n(m,l,"x","z",r,e),f[p+1]=_n(m,l,"z","x",r,n);break;case 3:m.set(0,-1,0),f[p+0]=1-_n(m,l,"x","z",r,e),f[p+1]=1-_n(m,l,"z","x",r,n);break;case 4:m.set(0,0,1),f[p+0]=1-_n(m,l,"x","y",r,e),f[p+1]=1-_n(m,l,"y","x",r,t);break;case 5:m.set(0,0,-1),f[p+0]=_n(m,l,"x","y",r,e),f[p+1]=1-_n(m,l,"y","x",r,t);break}}};function Ba(s,e,t,n=.02,i=2){return new Oa(s,e,t,i,Math.min(n,s*.45,e*.45,t*.45))}var li={hipY:.86,hipX:.1,thigh:.42,shin:.4,shoulderY:.415,shoulderX:.182,upperArm:.3,foreArm:.27,headY:.584};function wt(s,e,t,n,i,r,o={}){let a=new xe(e,t);return a.position.set(n,i,r),o.rotation&&a.rotation.set(...o.rotation),o.scale&&a.scale.set(...o.scale),a.castShadow=o.castShadow??!0,a.receiveShadow=!0,s.add(a),a}function Fa(s,e,t,n,i,r,o,a={}){return wt(s,new ma(e,Math.max(.01,t),6,14),n,i,r,o,a)}function Tt(s,e,t,n,i,r,o=[1,1,1],a={}){return wt(s,new It(e,20,14),t,n,i,r,{...a,scale:o})}function Ne(s,e,t,n,i,r,o,a,l,c={}){let h=Ba(e,t,n,Math.min(i,Math.min(e,t,n)*.48),2);return wt(s,h,r,o,a,l,c)}function nr(s,e,t,n,i,r=0,o=0){let a=e.map(([h,u])=>new ce(h,u)),l=new qi(a,22);l.scale(1,1,t);let c=new xe(l,n);return c.position.set(r,i,o),c.castShadow=!0,c.receiveShadow=!0,s.add(c),c}var Dx=[[.135,-.02],[.165,.09],[.19,.22],[.198,.33],[.196,.4],[.168,.47],[.09,.53],[.062,.56]],Nx=[[.105,-.24],[.15,-.17],[.176,-.07],[.18,.04],[.168,.12]],Ux=(s,e)=>s.map(([t,n])=>[t*e,n]);function es(s,e={}){let t=s.cloth??s.suits??{},n=e.skin??s.skinTones?.[2]??s.skin,i=e.hair??s.hair?.[0]??s.hairColor??t.charcoal,r=e.top??t.navy??t.coral,o=e.bottom??t.charcoal??t.navy??r,a=e.shoe??s.leather??s.eye??o,l=n.clone();l.color=n.color.clone().multiplyScalar(.84);let c=r.clone();c.color=r.color.clone().multiplyScalar(.78);let h=s.leather??o,u=s.steelDark??s.ink??o,f=s.chrome??s.bone??s.paper??r,d=s.bone??s.paper??r,m=s.eye??s.ink??s.steelDark??o,x=s.mouth??m,g=s.glass??m,p=s.roseDeep??t.rose??r,b=s.rustLight??s.rust??r,S=new Ie,y={},B=e.sleeve??"short",P=e.topStyle==="puffer",I=e.topStyle==="jacket"||e.topStyle==="hoodie"||P,w=P?1.12:I?1.05:1,v=e.loose===!0,M=new Ie;M.position.y=li.hipY,S.add(M),y.pelvis=M,nr(M,Nx,.86,o,0),wt(M,new _t(.171,.178,.045,18),h,0,.03,0,{scale:[1,1,.88]});let T=new Ie;if(T.position.y=.02,M.add(T),y.torso=T,nr(T,Ux(Dx,w),.72,r,0),I&&(Ne(T,.014,.35,.016,.005,u,0,.25,.15),Ne(T,.028,.022,.01,.005,f,0,.41,.152,{castShadow:!1}),wt(T,new _t(.202*w,.198*w,.05,18),c,0,.02,0,{scale:[1,1,.74]}),Ne(T,.1,.045,.012,.006,b,-.105,.3,.146)),I&&!e.hood&&wt(T,new _t(.078*w,.088*w,.044,16,1,!0,Math.PI/2+.36,Math.PI*2-.72),r,0,.538,.004,{scale:[1,1,.94]}),P)for(let U=0;U<3;U++)wt(T,new _t(.196*w,.198*w,.075,18),r,0,.12+U*.13,0,{scale:[1,1,.735]});if(e.topStyle==="hoodie"){Ne(T,.22,.13,.02,.02,r,0,.16,.145);for(let U of[-1,1])wt(T,new _t(.007,.007,.16,5),d,U*.045,.4,.15,{castShadow:!1}),Tt(T,.014,d,U*.045,.32,.15,[1,1,1],{castShadow:!1})}if(e.topStyle==="scrubs"){for(let U of[-1,1])Ne(T,.022,.18,.012,.005,t.tealDeep,U*.035,.455,.142,{rotation:[.01,0,-U*.3]});wt(T,new _t(.072,.08,.03,14),t.tealDeep,0,.54,.004),wt(T,new _t(.184,.204,.085,18),r,0,.012,0,{scale:[1,1,.8]}),wt(T,new _t(.204,.206,.016,18),t.tealDeep,0,-.03,0,{scale:[1,1,.8]}),Ne(T,.095,.05,.012,.006,t.tealDeep,.09,.31,.145);for(let U of[-1,1])Ne(T,.07,.08,.014,.006,t.tealDeep,U*.115,.105,.142);for(let U of[-1,1])wt(T,new _t(.005,.005,.09,5),d,U*.022,.085,.15,{rotation:[.1,0,U*.25],castShadow:!1})}if(e.apron){let U=new Ie;U.position.set(0,.2,.155),T.add(U),Ne(U,.28,.38,.018,.01,e.apron,0,.22,0),Ne(U,.36,.52,.018,.012,e.apron,0,-.22,0),Ne(U,.2,.13,.022,.01,e.apron,0,-.16,.012);for(let H of[-1,1])Ne(U,.06,.3,.016,.006,e.apron,H*.15,.36,-.01,{rotation:[0,0,H*.22]});Ne(U,.07,.06,.03,.012,d,0,-.02,.012);for(let H of[-1,1])Ne(U,.034,.19,.014,.006,d,H*.035,-.12,.012,{rotation:[.12,0,H*.18]});e.towel&&Ne(U,.1,.22,.02,.006,e.towel,.17,.03,.016,{rotation:[0,0,.08]})}Fa(T,.05,.08,n,0,.545,-.004),Tt(T,.078,n,0,.512,0,[1.18,.42,.92]);let N=new Ie;N.position.y=li.headY,T.add(N),y.head=N,N.scale.setScalar(.97),Tt(N,.1,n,0,.118,-.004,[.98,1.16,.98]),Tt(N,.079,n,0,.054,.012,[.78,.8,.86]),Tt(N,.029,n,0,.029,.079,[1.15,.62,.68]);for(let U of[-1,1])Tt(N,.03,l,U*.064,.09,.078,[.55,.34,.18],{castShadow:!1}),Tt(N,.028,n,U*.098,.101,.018,[.36,1,.72]),Tt(N,.014,l,U*.102,.102,.03,[.28,.9,.5],{castShadow:!1});for(let U of[-1,1])Ne(N,.036,.01,.008,.003,l,U*.038,.123,.1,{castShadow:!1}),Tt(N,.0145,m,U*.037,.11,.101,[1,.84,.42],{castShadow:!1}),Tt(N,.0045,d,U*.033,.114,.105,[1,1,.6],{castShadow:!1}),Ne(N,.034,.007,.01,.003,i,U*.037,.131,.097,{rotation:[0,0,U*.09],castShadow:!1}),Ne(N,.031,.005,.009,.002,l,U*.037,.12,.101,{rotation:[0,0,-U*.08],castShadow:!1}),Ne(N,.033,.005,.008,.002,l,U*.04,.098,.101,{rotation:[0,0,-U*.06],castShadow:!1});Ne(N,.022,.058,.02,.007,n,0,.099,.103,{rotation:[-.04,0,0]}),Tt(N,.018,n,0,.084,.113,[1,.8,.9]);for(let U of[-1,1])Tt(N,.005,l,U*.009,.081,.117,[1,.7,.7],{castShadow:!1});if(Ne(N,.036,.007,.01,.003,l,0,.06,.099),Ne(N,.033,.008,.011,.004,x,0,.052,.101,{castShadow:!1}),Ne(N,.033,.003,.012,.001,m,0,.056,.104,{castShadow:!1}),Ne(N,.01,.014,.008,.003,l,0,.073,.103,{castShadow:!1}),e.glasses){for(let U of[-1,1])Ne(N,.07,.045,.012,.008,u,U*.042,.111,.107,{castShadow:!1}),Ne(N,.054,.03,.006,.004,s.glass??m,U*.042,.111,.114,{castShadow:!1});Ne(N,.028,.006,.006,.002,u,0,.116,.111,{castShadow:!1})}let G=e.hairStyle??"short",X=e.hatType??null;if(G!=="bald"&&G!=="buzz"){let U=new xe(new It(.108,20,14,0,Math.PI*2,0,G==="bun"?1.18:1.22),i);U.position.set(0,G==="bun"?.136:.132,-.006),U.scale.set(1.03,1.04,1.02),U.castShadow=!0,N.add(U),Tt(N,.098,i,0,.098,-.045,[1,1.05,.75]);for(let H of[-1,1])Ne(N,.02,.06,.034,.008,i,H*.094,.108,.028,{rotation:[.05,0,-H*.05]});if(G==="long"?(Ne(N,.052,.024,.024,.008,i,-.032,.166,.08,{rotation:[.22,.02,-.16]}),Ne(N,.045,.022,.024,.008,i,.031,.168,.079,{rotation:[.22,.02,.2]})):G!=="bun"&&Ne(N,.098,.026,.026,.009,i,-.006,.167,.079,{rotation:[.24,.04,.16]}),(G==="long"||G==="bun")&&(Tt(N,.075,i,0,.07,-.075,[1,1.25,.7]),G==="long"))for(let H of[-1,1])Fa(N,.018,.13,i,H*.09,.055,-.045,{rotation:[.1,0,H*.04]});if(G==="bun"){Tt(N,.062,i,0,.204,-.072,[1,.94,.92]),Ne(N,.16,.014,.02,.006,i,0,.18,.084,{rotation:[-.16,0,0]});for(let H of[-1,1])Fa(N,.01,.05,i,H*.092,.128,.048,{rotation:[.1,0,H*.08]})}}if(G==="buzz"){let U=new xe(new It(.105,20,14,0,Math.PI*2,0,1.08),i);U.position.set(0,.13,-.004),U.scale.set(1.01,1.02,1.01),U.castShadow=!0,N.add(U)}if(X&&G!=="bald"&&Tt(N,.09,i,0,.095,-.055,[.95,.9,.55]),X==="beanie"){let U=e.hatMat??t.rust,H=new xe(new It(.118,20,14,0,Math.PI*2,0,1.55),U);H.position.set(0,.134,-.018),H.scale.set(1.01,1.05,1.04),H.castShadow=!0,N.add(H),wt(N,new Zi(.112,.016,6,20),U,0,.156,-.004,{rotation:[Math.PI/2,0,0],scale:[1,1,.98]}),Tt(N,.024,U,0,.252,-.024)}if(X==="cap"){let U=e.hatMat??t.navy;wt(N,new _t(.108,.12,.075,18),U,0,.198,0),Ne(N,.176,.016,.098,.022,U,0,.164,.122,{rotation:[-.12,0,0],scale:[1,1,1.02]}),Ne(N,.2,.022,.045,.006,e.hatBand??u,0,.17,.04),Tt(N,.012,U,0,.238,0)}if(X==="bandana"){let U=e.hatMat??p,H=new xe(new It(.114,18,12,0,Math.PI*2,0,1.38),U);H.position.set(0,.132,0),H.scale.set(1.03,1,1.03),N.add(H),wt(N,new _t(.118,.118,.032,18),U,0,.152,0),Ne(N,.07,.05,.03,.01,U,0,.148,-.125,{rotation:[.2,0,0]}),Ne(N,.03,.1,.02,.006,U,.06,.095,-.11,{rotation:[0,0,-.5]})}if(X==="helmet"){let U=e.hatMat??t.tealDeep,H=new xe(new It(.132,20,14,0,Math.PI*2,0,1.42),U);H.position.set(0,.125,-.004),H.scale.set(1,.98,1.04),H.castShadow=!0,N.add(H),Ne(N,.205,.032,.06,.012,s.glass??m,0,.16,.15,{rotation:[-.1,0,0],castShadow:!1}),Ne(N,.245,.022,.024,.008,u,0,.15,.118),Ne(N,.15,.018,.06,.012,U,0,.184,.118,{rotation:[-.2,0,0]});for(let ne of[-1,1])Ne(N,.022,.062,.062,.01,U,ne*.106,.098,.004),Ne(N,.012,.1,.012,.004,u,ne*.078,.055,.02,{rotation:[0,0,ne*.18]});for(let ne of[-1,1])Ne(N,.026,.058,.06,.011,U,ne*.08,.046,.058);Ne(N,.138,.026,.036,.012,U,0,.012,.082)}if(e.hoodDown){Ne(T,.235,.095,.11,.035,e.hoodMat??r,0,.468,-.135,{rotation:[.22,0,0]});for(let U of[-1,1])Tt(T,.055,e.hoodMat??r,U*.095,.505,-.105,[1.25,.85,.95])}if(e.hood){let U=new xe(new It(.155,24,18,Math.PI*.74,Math.PI*1.34,0,Math.PI*.72),e.hoodMat??r);U.position.set(0,.098,-.038),U.scale.set(1.06,1.1,1.06),U.castShadow=!0,N.add(U),wt(T,new _t(.148,.172,.14,16),e.hoodMat??r,0,.548,-.03,{scale:[1,1,.9]})}if(e.scarf&&(wt(T,new Zi(.106,.026,6,18),e.scarf,0,.548,0,{rotation:[Math.PI/2,0,0],scale:[1.02,1,1.08]}),Ne(T,.06,.055,.055,.018,e.scarf,.07,.512,.105,{rotation:[.1,.2,.1]}),Ne(T,.06,.21,.026,.01,e.scarf,.058,.41,.135,{rotation:[.06,0,.05]}),Ne(T,.055,.1,.026,.01,e.scarf,.07,.29,.14,{rotation:[.1,0,.08]})),e.lanyard){for(let U of[-1,1])Ne(T,.014,.3,.012,.004,e.lanyard,U*.055,.36,.145,{rotation:[0,0,U*.12],castShadow:!1});Ne(T,.085,.11,.014,.006,d,0,.19,.15,{castShadow:!1}),Ne(T,.06,.035,.016,.004,p,0,.21,.155,{castShadow:!1})}if(e.backpack){let U=new Ie;U.position.set(0,.3,-.19),T.add(U),Ne(U,.33,.42,.2,.035,e.backpack,0,0,0),Ne(U,.27,.12,.06,.02,e.backpack,0,-.14,.08),Ne(U,.1,.03,.02,.006,u,0,-.02,.105);for(let H of[-1,1])Ne(T,.045,.32,.022,.008,e.backpack,H*.12,.33,-.005,{rotation:[.1,0,H*.06]})}for(let U of[-1,1]){let H=new Ie;H.position.set(U*li.shoulderX,li.shoulderY,0),T.add(H),nr(H,P?[[.012,.044],[.04,.034],[.064,.01],[.072,-.03],[.068,-.12],[.058,-.26],[.052,-.3]]:[[.01,.04],[.034,.03],[.052,.01],[.058,-.03],[.054,-.12],[.046,-.26],[.042,-.3]],1,B==="none"?n:r,0),P&&(wt(H,new Zi(.059,.018,4,10),r,0,-.09,0,{rotation:[Math.PI/2,0,0]}),wt(H,new Zi(.057,.018,4,10),r,0,-.19,0,{rotation:[Math.PI/2,0,0]}));let J=new Ie;J.position.y=-li.upperArm,H.add(J),Tt(J,P?.055:.046,B==="long"?r:n,0,0,0,[1,.9,1]),nr(J,P?[[.03,-.27],[.036,-.23],[.048,-.1],[.054,-.02],[.052,0]]:[[.028,-.27],[.033,-.23],[.042,-.1],[.047,-.02],[.045,0]],1,B==="long"?r:n,0),B==="long"?wt(J,new _t(.056,.056,.04,12),c,0,-.247,0):wt(H,new _t(.058,.059,.022,12),c,0,-.292,0);let pe=new Ie;pe.position.y=-li.foreArm+.01,J.add(pe);let _e=e.glove??n;Ne(pe,.07,.078,.054,.02,_e,0,-.04,.002),Ne(pe,.062,.048,.046,.016,_e,0,-.088,.01);for(let ve=-1;ve<=1;ve+=2)Ne(pe,.004,.036,.006,.001,e.glove?u:l,ve*.013,-.092,.032,{castShadow:!1});Fa(pe,.014,.03,_e,U*.036,-.052,.02,{rotation:[.5,0,-U*.5]}),y[U<0?"shoulderL":"shoulderR"]=H,y[U<0?"elbowL":"elbowR"]=J,y[U<0?"wristL":"wristR"]=pe}for(let U of[-1,1]){let H=new Ie;H.position.set(U*li.hipX,-.04,0),M.add(H),Tt(H,.068,o,0,0,0,[.95,.76,.95]),nr(H,v?[[.066,-.42],[.074,-.38],[.09,-.24],[.104,-.08],[.1,.03]]:[[.06,-.42],[.067,-.38],[.082,-.24],[.094,-.08],[.09,.03]],1,o,0);let ne=new Ie;ne.position.y=-li.thigh,H.add(ne),Tt(ne,.062,o,0,0,0,[.95,.82,.95]),nr(ne,v?[[.044,-.4],[.052,-.36],[.078,-.18],[.073,-.08],[.068,0]]:[[.04,-.4],[.046,-.36],[.068,-.18],[.064,-.08],[.06,0]],1,o,0),wt(ne,new _t(v?.082:.073,v?.082:.073,.04,10),o,0,-.36,0);let J=new Ie;J.position.y=-li.shin,ne.add(J),Ne(J,.105,.07,.215,.03,a,0,.017,.045),Ne(J,.098,.04,.055,.016,a,0,.006,.158),Ne(J,.108,.018,.225,.006,m,0,-.018,.045),y[U<0?"hipL":"hipR"]=H,y[U<0?"kneeL":"kneeR"]=ne,y[U<0?"ankleL":"ankleR"]=J}return e.scale&&S.scale.set(e.scale[0],e.scale[1],e.scale[2]),{group:S,joints:y,opts:e}}function ln(s,e={}){let t=s.joints,n=(i,r)=>{i&&i.rotation.set(r?.[0]??0,r?.[1]??0,r?.[2]??0)};n(t.torso,e.torso),n(t.head,e.head),n(t.shoulderL,e.shoulderL),n(t.shoulderR,e.shoulderR),n(t.elbowL,e.elbowL),n(t.elbowR,e.elbowR),n(t.wristL,e.wristL),n(t.wristR,e.wristR),n(t.hipL,e.hipL),n(t.hipR,e.hipR),n(t.kneeL,e.kneeL),n(t.kneeR,e.kneeR),n(t.ankleL,e.ankleL),n(t.ankleR,e.ankleR),e.pelvis&&n(t.pelvis,e.pelvis)}var me=Object.freeze({SLAB_W:30,SLAB_D:31.5,SLAB_Z_CENTER:-6.5,SLAB_H:1,ROAD_Y:0,WALK_Y:.08,YARD_Y:.12,SHOP_Y:.14});function Q(s,e,t,n,i,r,o,a,{r:l=0,rot:c=null,cast:h=!0,recv:u=!0}={}){let f=l>0?Ba(e,t,n,l,2):new Rt(e,t,n),d=new xe(f,i);return d.position.set(r,o,a),c&&d.rotation.set(c[0],c[1],c[2]),d.castShadow=h,d.receiveShadow=u,s.add(d),d}function Xe(s,e,t,n,i,r,o,a,l,{rot:c=null,cast:h=!0,recv:u=!0}={}){let f=new xe(new _t(e,t,n,i),r);return f.position.set(o,a,l),c&&f.rotation.set(c[0],c[1],c[2]),f.castShadow=h,f.receiveShadow=u,s.add(f),f}function en(s,e,t,n,i,r,o,a,l){let c=new Rt(e,t,n),h=[r,r,r,r,i,r],u=new xe(c,h);return u.position.set(o,a,l),u.castShadow=!0,u.receiveShadow=!0,s.add(u),u}function ka(s,e,t,n,i,r,o=!1){let a=n-t,l=(t+n)*.5;Q(s,a,.56,.24,e.stoneBase,l,r+.28,i),Q(s,a+.04,.06,.28,e.benchWhite,l,r+.59,i);let c=r+.72,h=r+1.68;Q(s,a,.05,.05,e.wroughtIron,l,c,i),Q(s,a,.08,.06,e.goldFinial,l,c+.12,i),Q(s,a,.05,.05,e.wroughtIron,l,h,i),Q(s,a,.08,.06,e.goldFinial,l,h-.12,i);let u=Math.max(4,Math.floor(a/.24));for(let d=1;d<u;d++){let m=t+a*d/u;Q(s,.032,1.12,.032,e.wroughtIron,m,r+1.18,i);let x=new xe(new Rn(.042,.16,4),e.goldFinial);x.position.set(m,h+.11,i),x.castShadow=!0,s.add(x)}let f=new xe(new xa(.18,0),e.goldFinial);f.scale.set(1,1,.28),f.position.set(l,r+1.2,i),s.add(f),o&&en(s,Math.min(1.1,a*.62),.68,.03,e.poster,e.signBack,l,r+1.18,i+.06)}function Ha(s,e,t,n,i,r=1.98){Q(s,.44,.58,.44,e.stoneBase,t,i+.29,n),Q(s,.38,r-.58,.38,e.pillarBeige,t,i+.58+(r-.58)*.5,n),Q(s,.41,.07,.41,e.pillarBand,t,i+.96,n),Q(s,.41,.07,.41,e.pillarBand,t,i+1.48,n),Q(s,.48,.1,.48,e.pillarBand,t,i+r+.05,n),Q(s,.18,.2,.18,e.benchWhite,t,i+r+.2,n,{r:.02}),Q(s,.24,.05,.24,e.wroughtIron,t,i+r+.32,n)}var rd=new Ti(1,1);function yn(s,e,t,n,i,r,o=0){let a=new Ie;a.position.set(t,n,i),a.rotation.set(Math.sin(o*3.1)*.35,o*1.9%Math.PI,Math.cos(o*2.3)*.25);let l=new xe(rd,e);l.scale.set(r,r,1),l.castShadow=!0,l.receiveShadow=!0,a.add(l);let c=new xe(rd,e);c.scale.set(r,r,1),c.rotation.y=Math.PI*.5,c.rotation.x=.22,c.castShadow=!0,c.receiveShadow=!0,a.add(c),s.add(a)}function od(s,e,t,n,i,r=1){let o=new Ie;o.position.set(t,n,i),o.scale.setScalar(r);let a=[new ce(0,0),new ce(.32,0),new ce(.36,.1),new ce(.44,.32),new ce(.48,.5),new ce(.52,.56),new ce(.44,.56),new ce(.4,.48)],l=new xe(new qi(a,16),e.ceramicPot);l.castShadow=!0,l.receiveShadow=!0,o.add(l),Xe(o,.4,.4,.04,14,e.slabEarth,0,.5,0,{cast:!1});let c=new Jt([new L(0,.48,0),new L(-.12,.85,.05),new L(.08,1.25,-.04),new L(-.04,1.62,.02)]),h=new xe(new kn(c,12,.075,8,!1),e.bonsaiBark);h.castShadow=!0,o.add(h);let u=new Ie;return o.add(u),[[-.34,1.04,.08,.68,e.animeLeafCard],[.34,1.24,-.06,.72,e.animeLeafCard],[-.22,1.48,-.12,.66,e.bonsaiLeafLight],[.04,1.72,.02,.82,e.bonsaiLeafLight],[.18,1.48,.14,.58,e.animeLeafCard]].forEach(([d,m,x,g,p],b)=>yn(u,p,d,m,x,g,b+t)),s.add(o),u}function Ox(s,e,t,n,i,{scale:r=1,rotY:o=0,blossom:a=!1}={}){let l=new Ie;l.position.set(t,n,i),l.rotation.y=o,l.scale.setScalar(r);let c=new wi(.68,1);c.scale(1.25,.34,1.15);let h=new xe(c,e.grassLight);h.position.set(0,.08,0),h.receiveShadow=!0,h.castShadow=!1,l.add(h),Xe(l,.38,.46,.08,10,e.slabEarth,0,.18,0,{cast:!1});let u=[[-.52,.12,.24,.24,.16,.2,e.stoneBase],[.48,.11,-.22,.28,.15,.22,e.pillarBand],[.14,.1,.52,.2,.13,.18,e.stoneBase],[-.32,.1,-.44,.22,.14,.19,e.pillarBand]];for(let[S,y,B,P,I,w,v]of u){let M=new wi(1,0);M.scale(P,I,w);let T=new xe(M,v);T.position.set(S,y,B),T.rotation.set(S*2,B*3,y*2),T.castShadow=!0,T.receiveShadow=!0,l.add(T)}for(let S=0;S<4;S++){let y=S/4*Math.PI*2+.35,B=new Jt([new L(0,.36,0),new L(Math.cos(y)*.22,.22,Math.sin(y)*.22),new L(Math.cos(y)*.44,.09,Math.sin(y)*.44)]),P=new xe(new kn(B,6,.055,6,!1),e.bonsaiBark);P.castShadow=!0,l.add(P)}let f=new Jt([new L(0,.2,0),new L(-.22,.72,.08),new L(.16,1.24,-.06),new L(-.08,1.76,.04),new L(.06,2.08,0)]),d=new xe(new kn(f,14,.11,8,!1),e.bonsaiBark);d.castShadow=!0,l.add(d);let m=new Jt([new L(-.16,.85,.06),new L(-.56,1.02,.18),new L(-.82,1.12,.22)]),x=new Jt([new L(.14,1.22,-.05),new L(.58,1.38,-.14),new L(.84,1.48,-.18)]);for(let S of[m,x]){let y=new xe(new kn(S,8,.055,6,!1),e.bonsaiBark);y.castShadow=!0,l.add(y)}let g=new Ie;l.add(g);let p=a?e.animeBlossomCard:e.bonsaiLeafLight;return[[-.78,1.22,.22,.88,e.animeLeafCard],[-.5,1.36,.12,.74,p],[.78,1.56,-.16,.92,e.animeLeafCard],[.48,1.68,-.06,.76,p],[-.24,1.88,-.14,.82,e.animeLeafCard],[.08,2.18,.04,1.05,p],[.24,1.94,.22,.72,e.animeLeafCard]].forEach(([S,y,B,P,I],w)=>yn(g,I,S,y,B,P,w+t*1.3+i)),s.add(l),g}function yh(s,e,t,n,i){let r=new Ti(s,e,10,2),o=r.attributes.position;for(let a=0;a<o.count;a++){let l=o.getX(a)+s*.5,c=o.getY(a),h=l/s,u=Math.abs(c)/(e*.5);o.setX(a,l);let f=Math.sin(h*Math.PI)*t-h*h*n,d=-u*i*(.35+.65*Math.sin(h*Math.PI));o.setZ(a,f+d)}return r.computeVertexNormals(),r}var ad=yh(2.95,1.38,.62,1.15,.3),Bx=yh(2.05,.98,.85,.42,.2),ld=yh(1.75,.82,.52,.68,.22);function ir(s,e,t,n,i,{height:r=5.8,leanX:o=.7,leanZ:a=.35,rotY:l=0}={}){let c=new Ie;c.position.set(t,n,i),c.rotation.y=l,Xe(c,.2,.33,.44,10,e.palmTrunk,0,.22,0);let h=new Jt([new L(0,.05,0),new L(o*.22,r*.34,a*.22),new L(o*.68,r*.72,a*.68),new L(o,r,a)]),u=new kn(h,18,.19,10,!1),f=u.attributes.position;for(let g=0;g<f.count;g++){let p=f.getY(g),b=1-.42*Math.min(1,p/r),S=h.getPointAt(Math.max(0,Math.min(1,p/r)));f.setX(g,S.x+(f.getX(g)-S.x)*b),f.setZ(g,S.z+(f.getZ(g)-S.z)*b)}u.computeVertexNormals();let d=new xe(u,e.palmTrunk);d.castShadow=!0,d.receiveShadow=!0,c.add(d);let m=new Ie;m.position.set(o,r,a),c.add(m),Xe(m,.18,.13,.36,8,e.bonsaiBark,0,-.04,0);let x=new It(.145,9,8);x.scale(.92,1.15,.92);for(let g=0;g<9;g++){let p=g/9*Math.PI*2+g%2*.18,b=.2+g%2*.08,S=-.18-g%3*.09,y=new xe(x,g%3===0?e.coconutGold:e.coconutGreen);y.position.set(Math.cos(p)*b,S,Math.sin(p)*b),y.castShadow=!0,m.add(y)}for(let g=0;g<6;g++){let p=new Ie;p.rotation.y=g/6*Math.PI*2+.12;let b=new xe(ad,e.animePalmCard);b.rotation.x=-Math.PI*.5+.24,b.position.y=-.04,b.scale.setScalar(1.06),b.castShadow=!0,p.add(b),m.add(p)}for(let g=0;g<6;g++){let p=new Ie;p.rotation.y=g/6*Math.PI*2+.64;let b=new xe(ad,e.animePalmCard);b.rotation.x=-Math.PI*.5-.12,b.position.y=.08,b.scale.setScalar(.98),b.castShadow=!0,p.add(b),m.add(p)}for(let g=0;g<4;g++){let p=new Ie;p.rotation.y=g/4*Math.PI*2+.35;let b=new xe(Bx,e.animePalmCardLight);b.rotation.x=-Math.PI*.5-.52,b.position.y=.16,b.castShadow=!0,p.add(b),m.add(p)}return s.add(c),m}function cd(s,e,t,n,i,{height:r=5.4,lean:o=.08,rotY:a=0}={}){let l=new Ie;l.position.set(t,n,i),l.rotation.y=a;let c=.92,h=r-c;Xe(l,.11,.16,.24,9,e.arecaTrunk,0,.12,0);let u=new Jt([new L(0,0,0),new L(o*.4,h*.5,0),new L(o,h,0)]),f=new kn(u,12,.095,8,!1),d=f.attributes.position;for(let p=0;p<d.count;p++){let b=d.getY(p),S=1-.18*Math.min(1,b/h),y=u.getPointAt(Math.max(0,Math.min(1,b/h)));d.setX(p,y.x+(d.getX(p)-y.x)*S),d.setZ(p,y.z+(d.getZ(p)-y.z)*S)}f.computeVertexNormals();let m=new xe(f,e.arecaTrunk);m.castShadow=!0,m.receiveShadow=!0,l.add(m),Xe(l,.088,.098,c,10,e.arecaCrownshaft,o,h+c*.5,0);let x=new It(.052,7,6);x.scale(.85,1.35,.85);for(let p=0;p<10;p++){let b=p/10*Math.PI*2,S=h-.04-p%3*.065,y=.11+p%2*.045,B=new xe(x,e.arecaNut);B.position.set(o+Math.cos(b)*y,S,Math.sin(b)*y),l.add(B)}let g=new Ie;g.position.set(o,r-.05,0),l.add(g);for(let p=0;p<7;p++){let b=new Ie;b.rotation.y=p/7*Math.PI*2;let S=new xe(ld,e.animePalmCard);S.rotation.x=-Math.PI*.5-.14,S.castShadow=!0,b.add(S),g.add(b)}for(let p=0;p<4;p++){let b=new Ie;b.rotation.y=p/4*Math.PI*2+.45;let S=new xe(ld,e.animePalmCardLight);S.rotation.x=-Math.PI*.5-.58,S.scale.setScalar(.74),S.castShadow=!0,b.add(S),g.add(b)}return s.add(l),g}function gh(s,e,t,n,i,r=1){let o=new Ie;o.position.set(t,n,i),o.scale.setScalar(r);for(let a=0;a<3;a++){let l=a/3*Math.PI*2+.4,c=Math.cos(l)*.22,h=Math.sin(l)*.22,u=1.35+a%2*.35;Xe(o,.08,.12,u,8,e.grassBund,c,u*.5,h);for(let f=0;f<4;f++){let d=l+f/4*Math.PI*2,m=new Ie;m.position.set(c,u,h),m.rotation.y=d;let x=new xe(new Rt(1.15,.045,.36),e.bananaLeaf);x.position.set(.55,.14,0),x.rotation.z=-.32,x.castShadow=!0,m.add(x),o.add(m)}}return s.add(o),o}function _h(s,e,t,n,i,r=1){let o=new Ie;o.position.set(t,n,i),o.scale.setScalar(r),Xe(o,.17,.3,2.25,10,e.bonsaiBark,0,1.12,0),Xe(o,.09,.15,1.25,8,e.bonsaiBark,-.42,2.25,.14,{rot:[.1,0,.58]}),Xe(o,.09,.15,1.2,8,e.bonsaiBark,.38,2.18,-.16,{rot:[.2,0,-.52]}),Xe(o,.08,.12,1.05,8,e.bonsaiBark,.05,2.3,.36,{rot:[.45,0,.1]});let a=new Ie;a.position.set(0,2.75,0),o.add(a);for(let l=0;l<24;l++){let c=Math.acos(1-2*((l+.5)/24)),h=Math.PI*(1+Math.sqrt(5))*l,u=.72+l%3*.34,f=Math.sin(c)*Math.cos(h)*u*1.18,d=Math.cos(c)*u*.76+.35,m=Math.sin(c)*Math.sin(h)*u*1.12,x=d>.68?e.treeCanopyLight:d<.05?e.treeCanopyDark:e.treeCanopyMid,g=1.18+l%4*.22;yn(a,x,f,d,m,g,l+t*.7)}return s.add(o),a}function Qt(s,e,t,n,i,r=1,o=null){let a=new Ie;a.position.set(t,n,i),a.scale.setScalar(r);let l=o?e.animeBlossomCard:e.animeLeafCard;[[0,.42,0,.98],[-.38,.32,.18,.82],[.38,.34,-.15,.84],[.08,.56,.16,.76],[-.14,.38,-.26,.78]].forEach(([h,u,f,d],m)=>yn(a,l,h,u,f,d,m+i)),s.add(a)}function Fx(){let s=[],e=[];for(let i=0;i<9;i++){let r=i/9*Math.PI*2+i%3*.22,o=Math.cos(r),a=Math.sin(r),l=-a,c=o,h=i%3*.055,u=o*h,f=a*h,d=.14+i%4*.025,m=.08+i%3*.025,x=.048,g=.026,p=[u+l*x,0,f+c*x],b=[u-l*x,0,f-c*x],S=[u+o*m*.45+l*g,d*.56,f+a*m*.45+c*g],y=[u+o*m*.45-l*g,d*.56,f+a*m*.45-c*g],B=[u+o*m*1.15,d,f+a*m*1.15],P=(I,w,v)=>{s.push(...I,...w,...v),e.push(0,1,0,0,1,0,0,1,0)};P(p,b,y),P(p,y,S),P(S,y,B)}let n=new Mt;return n.setAttribute("position",new Je(s,3)),n.setAttribute("normal",new Je(e,3)),n}var kx=Fx();function ci(s,e,t,n,i,r,o,a=.36,l=.34,c=[7120968,8370254,6068290,9356380,5277756]){let h=[],u=0;for(let x=i;x<=r;x+=l)for(let g=t;g<=n;g+=a){let p=Math.sin(u*12.7)*(a*.38),b=Math.cos(u*7.3)*(l*.38);h.push({x:g+p,z:x+b,idx:u}),u++}let f=new Ks(kx,e.riceBlade,h.length),d=new gt,m=new ke;for(let x=0;x<h.length;x++){let g=h[x];d.position.set(g.x,o,g.z),d.rotation.set(0,g.idx*1.37%(Math.PI*2),0);let p=.88+g.idx%4*.08;d.scale.set(p*1.15,p*.72,p*1.15),d.updateMatrix(),f.setMatrixAt(x,d.matrix),m.setHex(c[g.idx%c.length]),f.setColorAt(x,m)}return f.instanceMatrix.needsUpdate=!0,f.instanceColor&&(f.instanceColor.needsUpdate=!0),f.receiveShadow=!0,s.add(f),f}function hd(s,e){let t={medallionPivot:null,bonsaiCrowns:[],palmCrowns:[],riceGroups:[],shopRoofGroup:null,clockHands:null},n=me.SLAB_Z_CENTER;Q(s,me.SLAB_W,me.SLAB_H,me.SLAB_D,e.slabEarth,0,-me.SLAB_H*.5,n,{r:.16,cast:!1}),Q(s,me.SLAB_W+.1,.12,me.SLAB_D+.1,e.slabRim,0,-.06,n,{r:.04,cast:!1}),Q(s,me.SLAB_W-.1,.06,me.SLAB_D-.1,e.grassVerge,0,.01,n,{cast:!1}),Q(s,14.2,.05,2.8,e.riceField,-7.4,.02,-20.5,{cast:!1}),Q(s,14.2,.05,2.8,e.riceField,7.4,.02,-20.5,{cast:!1}),Q(s,12.8,.05,3.8,e.riceField,7.9,.02,-16.8,{cast:!1}),Q(s,29.4,.16,.34,e.grassBund,0,.08,-18.95,{r:.04,cast:!1}),Q(s,29.4,.16,.34,e.grassBund,0,.08,-21.95,{r:.04,cast:!1}),Q(s,.42,.18,3.2,e.grassBund,0,.09,-20.5,{r:.04,cast:!1}),Q(s,12.8,.16,.34,e.grassBund,7.9,.08,-14.85,{r:.04,cast:!1}),ci(s,e,-14,-.7,-21.5,-19.3,.04,.42,.4),ci(s,e,.7,14,-21.5,-19.3,.04,.42,.4),ci(s,e,2,14,-18.4,-15.3,.04,.44,.44),Q(s,3.2,.05,17.8,e.riceField,-13.2,.02,-9.3,{cast:!1}),ci(s,e,-14.4,-11.9,-17.8,-.8,.04,.38,.4),Q(s,.72,.04,19.6,e.ditchWater,-11.25,.025,-8.4,{cast:!1});for(let F=0;F<4;F++)Q(s,1.15,.06,.18,e.woodPlank,-11.25,.14,.45+F*.22,{r:.01});Q(s,.1,.1,.95,e.bonsaiBark,-11.75,.08,.78),Q(s,.1,.1,.95,e.bonsaiBark,-10.75,.08,.78),Q(s,29.4,.04,2,e.riceField,0,.015,7.75,{cast:!1}),Q(s,29.4,.14,.34,e.grassBund,0,.07,6.65,{r:.04,cast:!1}),ci(s,e,-14.4,14.4,6.85,8.75,.035,.32,.3),Q(s,me.SLAB_W,.05,3.35,e.asphalt,0,me.ROAD_Y+.045,4.78,{cast:!1});for(let F=-13.8;F<=13.8;F+=2.2)Q(s,1.05,.012,.14,e.roadStripe,F,me.ROAD_Y+.076,4.78,{cast:!1});ci(s,e,-14.4,14.4,6.45,6.8,.12,.28,.22,[4033594,5417028,7258188,4758082]),ci(s,e,-10.85,-10.45,-18.2,.2,.04,.26,.34,[4033594,5417028,7258188]),ci(s,e,11.6,14.3,-6.2,2.8,.04,.36,.36,[4033594,5417028,7258188,8047700]),ci(s,e,-14.3,-11.4,1.2,2.9,.04,.34,.34,[4033594,5417028,7258188]),Q(s,20.6,me.WALK_Y,1.9,e.concrete,-.8,me.WALK_Y*.5,2.15,{cast:!1}),Q(s,20.6,.1,.16,e.concreteDark,-.8,.05,3.12,{cast:!1}),Q(s,11.6,me.SHOP_Y,5.4,e.shopFloor,-5,me.SHOP_Y*.5,-1.5,{cast:!1}),Q(s,11.6,me.SHOP_Y-.004,14.8,e.warehouseEarthFloor,-5,(me.SHOP_Y-.004)*.5,-11.6,{cast:!1}),Q(s,9.6,.012,.14,e.concreteDark,-4.1,me.SHOP_Y+.006,-4.2,{cast:!1}),Q(s,10.6,me.YARD_Y,7.6,e.courtyardTile,6.1,me.YARD_Y*.5,-2.6,{cast:!1});let i=me.SHOP_Y,r=5.4;Q(s,3.9,r,.24,e.shopWallBlue,-7.15,i+r*.5,-18.7),Q(s,3.9,r,.24,e.shopWallBlue,-1.05,i+r*.5,-18.7),Q(s,2.4,2.2,.24,e.shopWallBlue,-4.1,i+4.3,-18.7),Q(s,2.1,.55,.3,e.skylightGlow,-4.1,i+4.45,-18.7,{cast:!1}),Q(s,.24,r,19.28,e.shopWallBlue,-9,i+r*.5,-8.94),Q(s,.24,r,17.48,e.shopWallBlue,.8,i+r*.5,-9.84);for(let F of[-2.4,-5.6,-8.8,-12,-15.2,-17.6])if(Q(s,.3,.62,1.45,e.skylightGlow,-8.98,i+4.42,F,{cast:!1}),Q(s,.34,.08,1.52,e.timberDark,-8.98,i+4.74,F,{cast:!1}),Q(s,.34,.08,1.52,e.timberDark,-8.98,i+4.1,F,{cast:!1}),F<-4&&(Q(s,.3,.62,1.45,e.skylightGlow,.78,i+4.42,F,{cast:!1}),Q(s,.34,.08,1.52,e.timberDark,.78,i+4.74,F,{cast:!1}),Q(s,.34,.08,1.52,e.timberDark,.78,i+4.1,F,{cast:!1})),F<-4){let A=new xe(new Ti(1.35,5.2),e.sunbeam);A.position.set(-7.1,i+2.45,F),A.rotation.y=Math.PI*.5,A.rotation.x=.58,s.add(A)}for(let F of[-4.2,-8.2,-12.2,-16.2])Q(s,.26,r-.04,.28,e.creamWall,-8.74,i+(r-.04)*.5,F),Q(s,.26,r-.04,.28,e.creamWall,.54,i+(r-.04)*.5,F);Q(s,.42,3.6,.42,e.graniteDark,-8.85,i+1.8,-.85),Q(s,.42,3.6,.42,e.graniteDark,-4.6,i+1.8,-.85),Q(s,.42,3.6,.42,e.graniteDark,.8,i+1.8,-.85),en(s,.34,.72,.025,e.poster,e.signBack,-4.6,i+1.75,-.615),en(s,.34,.72,.025,e.poster,e.signBack,.8,i+1.75,-.615);let o=new Ie,a=new Ie;a.position.set(-4.1,i+5.22,-8.8),a.rotation.x=.032,Q(a,10.6,.12,20.6,e.metalRoof,0,0,0);for(let F=-5.1;F<=5.1;F+=.38)Q(a,.08,.06,20.62,e.metalRoof,F,.08,0);for(let F=-9.2;F<=9.2;F+=2.6)Q(a,10.2,.14,.14,e.bonsaiBark,0,-.14,F,{cast:!1});for(let F of[-6,-1.5,3,6.8])Q(a,2.2,.2,1.4,e.skylightGlow,-1.6,-.02,F,{cast:!1}),Q(a,2.2,.2,1.4,e.skylightGlow,1.6,-.02,F,{cast:!1});o.add(a),Q(o,9.2,.58,.12,e.shutterGreen,-4.1,i+3.25,-.92);for(let F=0;F<4;F++)Q(o,9.2,.03,.15,e.wroughtIron,-4.1,i+3.03+F*.15,-.91);s.add(o),t.shopRoofGroup=o;for(let F of[-8.8,-6.5,-4.3,-2.35])Xe(s,.055,.055,3.62,8,e.steelPost,F,me.WALK_Y+1.81,1.38);en(s,13,1.56,.16,e.upperSign,e.signBack,-2.15,4.44,1.42);for(let F of[-8,-5.2,-2.4,.4,2.8])Q(s,.07,.07,1.3,e.steelPost,F,4.1,.72);en(s,9.2,.8,.12,e.lowerSign,e.signBack,-3.95,3.35,-.68),Ha(s,e,-4.2,1.24,me.WALK_Y),Ha(s,e,-2.32,1.24,me.WALK_Y),ka(s,e,-4,-2.52,1.24,me.WALK_Y,!0),ka(s,e,-2.12,-.68,1.24,me.WALK_Y,!1),Ha(s,e,5.9,1.24,me.WALK_Y),Ha(s,e,8.35,1.24,me.WALK_Y),ka(s,e,3.68,5.7,1.24,me.WALK_Y,!0),ka(s,e,6.1,8.15,1.24,me.WALK_Y,!0),en(s,4.38,.56,.28,e.archHeader,e.signBack,1.5,3.12,1.26),en(s,.48,2.78,.48,e.pillarWrap,e.pillarBeige,-.45,me.WALK_Y+1.39,1.26),en(s,.48,2.78,.48,e.pillarWrap,e.pillarBeige,3.45,me.WALK_Y+1.39,1.26);let l=new Ie;l.position.set(1.85,2.86,1.44),en(l,.94,.58,.06,e.medallion,e.medallion,0,-.32,0),s.add(l),t.medallionPivot=l;let c=[e.bottleWhite,e.bottleOrange,e.bottleYellow,e.bottleBlue,e.bottleCapGreen];en(s,1.68,.82,.06,e.hoptriDesk,e.benchWhite,-.95,i+.41,-1.45),Q(s,1.68,.78,.62,e.benchWhite,-.95,i+.39,-1.78,{r:.02}),Q(s,1.76,.06,.7,e.cabGlass,-.95,i+.82,-1.76,{r:.01}),Xe(s,.13,.1,.14,10,e.benchWhite,-1.45,i+.92,-1.66),Xe(s,.025,.03,.18,6,e.bonsaiBark,-1.45,i+1.06,-1.66),Q(s,.28,.14,.22,e.bonsaiLeafLight,-1.45,i+1.18,-1.66,{r:.05}),Q(s,.12,.12,.1,e.counterWood,-.52,i+.91,-1.64,{r:.01}),Q(s,.16,.06,.14,e.benchWhite,-.32,i+.88,-1.64),Q(s,.64,.78,1.85,e.counterWood,-1.42,i+.39,-3,{r:.02}),Q(s,.7,.06,1.92,e.deskGreenTop,-1.42,i+.81,-3,{r:.01});let h=new xe(new Rt(.03,.6,.92),[e.counterWood,e.moventoPoster,e.counterWood,e.counterWood,e.counterWood,e.counterWood]);h.position.set(-1.75,i+.42,-2.75),s.add(h),Q(s,.05,.3,.42,e.leatherChair,-1.52,i+1.04,-2.45),Q(s,.18,.04,.32,e.benchWhite,-1.32,i+.86,-2.95),Q(s,.16,.08,.18,e.benchWhite,-1.35,i+.88,-2.28);for(let[F,A,E]of[[-.52,-2.35,-.3],[-.52,-3.35,-Math.PI*.5]]){let k=new Ie;k.position.set(F,i,A),k.rotation.y=E,Xe(k,.03,.03,.42,8,e.steelInox,0,.21,0),Q(k,.48,.05,.06,e.steelInox,0,.05,0),Q(k,.06,.05,.48,e.steelInox,0,.05,0),Q(k,.48,.1,.48,e.leatherChair,0,.45,0,{r:.04}),Q(k,.46,.68,.1,e.leatherChair,0,.82,-.22,{r:.04,rot:[-.08,0,0]}),s.add(k)}Q(s,.52,5.2,.48,e.creamWall,-1.88,i+2.6,-4.12),Q(s,.5,.32,.05,e.leatherChair,-1.88,i+2.52,-3.86);let u=new Ie;u.position.set(-1.88,i+2.08,-3.86),Xe(u,.165,.165,.04,24,e.timberDark,0,0,0,{rot:[Math.PI*.5,0,0]});let f=document.createElement("canvas");f.width=256,f.height=256;let d=f.getContext("2d");d.fillStyle="#fffdf8",d.beginPath(),d.arc(128,128,124,0,Math.PI*2),d.fill(),d.strokeStyle="#1d2b44",d.lineWidth=6,d.stroke();for(let F=0;F<60;F++){let A=F/60*Math.PI*2-Math.PI*.5,E=F%5===0,k=E?96:108,j=116;d.strokeStyle=E?"#182438":"#7b8494",d.lineWidth=E?4:2,d.beginPath(),d.moveTo(128+Math.cos(A)*k,128+Math.sin(A)*k),d.lineTo(128+Math.cos(A)*j,128+Math.sin(A)*j),d.stroke()}d.fillStyle="#182438",d.font='700 22px "Space Grotesk", sans-serif',d.textAlign="center",d.textBaseline="middle";for(let F=1;F<=12;F++){let A=F/12*Math.PI*2-Math.PI*.5;d.fillText(String(F),128+Math.cos(A)*76,128+Math.sin(A)*76)}let m=new ni(f);m.colorSpace=dt;let x=new St({map:m});x.userData.outlineParameters={visible:!1};let g=new xe(new ga(.152,24),x);g.position.z=.023,u.add(g);let p=(F,A,E,k)=>{let j=new Ie;j.position.z=k;let oe=new Rt(F,A,.006);oe.translate(0,A*.42,0);let le=new xe(oe,E);return j.add(le),u.add(j),j},b=p(.014,.082,e.wroughtIron,.027),S=p(.01,.118,e.wroughtIron,.032),y=p(.005,.128,e.plasticRed,.037),B=new xe(new It(.012,8,8),e.plasticRed);B.position.z=.04,u.add(B),s.add(u),t.clockHands={hourHand:b,minHand:S,secHand:y},Q(s,.36,.24,.03,e.plasticRed,-1.88,i+1.72,-3.86);for(let F=0;F<5;F++)Xe(s,.018,.018,1.05,6,e.bonsaiBark,-2.04+F*.08,i+.55,-3.78,{rot:[.06,0,(F-2)*.04]});Q(s,.38,.96,.38,e.benchWhite,.35,i+.48,-1.75,{r:.03}),Xe(s,.14,.14,.42,12,e.waterBlue,.35,i+1.17,-1.75),Xe(s,.18,.22,.06,12,e.steelInox,.28,i+.03,-1.05),Xe(s,.025,.025,.95,8,e.steelInox,.28,i+.5,-1.05),Xe(s,.22,.22,.08,14,e.steelInox,.28,i+1.05,-1.05,{rot:[Math.PI*.5,.35,0]});let P=[{z:-.95,header:e.cabBayer,frame:e.shutterGreen},{z:-2.08,header:e.cabHoptri,frame:e.benchWhite},{z:-3.2,header:e.cabHb101,frame:e.benchWhite}];for(let F=0;F<P.length;F++){let A=P[F];Q(s,.46,2.05,1.04,A.frame,-8.62,i+1.025,A.z,{r:.02});let E=new xe(new Rt(.04,.3,1),[A.header,A.frame,A.frame,A.frame,A.frame,A.frame]);E.position.set(-8.38,i+1.86,A.z),s.add(E);for(let k=0;k<4;k++){let j=i+.34+k*.36;Q(s,.38,.03,.96,e.cabGlass,-8.56,j,A.z);for(let oe=-.36;oe<=.36;oe+=.18){let le=c[(F+k+Math.round((oe+1)*5))%c.length];Xe(s,.04,.044,.2,7,le,-8.52,j+.11,A.z+oe)}}Q(s,.38,.32,.46,e.cartonBox,-8.62,i+2.21,A.z-.22),Q(s,.36,.26,.42,e.cartonBox,-8.62,i+2.18,A.z+.25)}Q(s,.42,1.55,.56,e.syngentaGreen,-8.1,i+.78,-3.78,{r:.02});for(let F=0;F<3;F++)Xe(s,.06,.06,.24,7,e.bottleWhite,-8.02,i+.32+F*.38,-3.88),Xe(s,.06,.06,.24,7,e.bottleWhite,-8.02,i+.32+F*.38,-3.68);for(let F of[-1,-2,-3,-4.2,-5.2])Q(s,.04,.62,.54,e.counterWood,-8.86,i+2.92,F);let I=[e.basketRed,e.basketPink,e.basketBlue,e.basketWhite,e.basketMint,e.basketRed],w=[-7.55,-6.98,-6.41,-5.84,-5.27],v=[-3.2,-2.62,-2.04,-1.46],M=0;for(let F of v)for(let A of w){let E=I[M%I.length];Q(s,.44,.34,.42,E,A,i+.17,F,{r:.03});for(let k=0;k<3;k++){let j=c[(M+k)%c.length];Q(s,.15,.14,.05,j,A+(k-1)*.1,i+.36,F+(k%2?.05:-.05),{rot:[.22*(k-1),.3*k,.15*(k-1)]})}M++}for(let F=0;F<6;F++)Q(s,.48,.28,.38,e.cartonBox,-6.15,i+.14+F*.285,-.08,{rot:[0,F%2?.04:-.03,0]});Q(s,1.15,.05,.68,e.steelInox,-5.15,i+.72,-.58,{r:.02});for(let[F,A]of[[-.48,-.26],[.48,-.26],[-.48,.26],[.48,.26]])Xe(s,.022,.022,.72,6,e.steelInox,-5.15+F,i+.36,-.58+A);for(let[F,A]of[[-5.38,-.32],[-4.82,-.78],[-4.5,-.38]]){Q(s,.3,.05,.3,e.plasticRed,F,i+.44,A,{r:.02});for(let[E,k]of[[-.11,-.11],[.11,-.11],[-.11,.11],[.11,.11]])Q(s,.04,.44,.04,e.plasticRed,F+E,i+.22,A+k)}let T=(F,A,E,k,j=0)=>{for(let oe=0;oe<E;oe++)Q(s,.8,.16,.5,k,F,i+.08+oe*.162,A,{r:.055,rot:[0,j+(oe%2?.03:-.02),0]})};T(-8.4,-4.45,9,e.bagKraft,.02),T(-8.4,-5.05,10,e.bagKraft,-.02),T(-7.52,-4.55,7,e.bagKraft,.04),T(-7.52,-5.15,8,e.bagKraft,-.03),T(-8.4,-5.85,11,e.bagGreen,.01),T(-8.4,-6.5,12,e.bagGreen,-.02),T(-7.52,-5.95,10,e.bagGreen,.03),T(-7.52,-6.6,10,e.bagGreen,-.02),T(-8.4,-7.4,11,e.bagYara,.02),T(-8.4,-8.05,11,e.bagYara,-.01),T(-7.52,-7.5,8,e.bagYara,.03),T(-7.52,-8.15,7,e.bagYara,-.02),T(-8.4,-9,12,e.bagSilver,.01),T(-8.4,-9.65,12,e.bagSilver,-.02),T(-7.52,-9.1,10,e.bagSilver,.02),T(-7.52,-9.75,10,e.bagSilver,-.01),T(-8.4,-10.75,10,e.bagGreen,.02),T(-8.4,-11.45,9,e.bagYara,-.02),T(-7.52,-10.85,8,e.bagKraft,.03),T(-7.52,-11.55,8,e.bagYara,-.01),T(-8.4,-12.6,12,e.bagKraft,.01),T(-8.4,-13.3,12,e.bagGreen,-.02),T(-7.52,-12.7,10,e.bagYara,.02),T(-7.52,-13.4,10,e.bagSilver,-.01),T(-6.64,-12.7,8,e.bagBlue,.03),T(-6.64,-13.4,8,e.bagOrange,-.02),T(-8.4,-14.6,13,e.bagYara,.02),T(-8.4,-15.3,12,e.bagSilver,-.02),T(-7.52,-14.7,11,e.bagGreen,.03),T(-7.52,-15.4,10,e.bagKraft,-.02),T(-6.64,-14.7,9,e.bagYara,.01),T(-6.64,-15.4,8,e.bagGreen,-.03),T(-8.4,-16.65,11,e.bagGreen,.01),T(-8.4,-17.4,10,e.bagYara,-.02),T(-7.52,-16.75,9,e.bagKraft,.02),T(-7.52,-17.5,9,e.bagSilver,-.01),T(-6.64,-16.75,7,e.bagBlue,.02),T(-6.64,-17.5,7,e.bagOrange,-.02),T(-6.64,-9.15,8,e.bagOrange,.02),T(-6.64,-9.85,8,e.bagBlue,-.02),T(-6.64,-10.85,7,e.bagYara,.01),T(-6.64,-11.55,7,e.bagGreen,-.02);let N=-6.62,G=-7.65;Xe(s,.022,.022,1.18,6,e.dollyRed,N-.18,i+.62,G,{rot:[-.14,0,0]}),Xe(s,.022,.022,1.18,6,e.dollyRed,N+.18,i+.62,G,{rot:[-.14,0,0]}),Q(s,.4,.04,.04,e.dollyRed,N,i+1.18,G-.08),Q(s,.4,.04,.04,e.dollyRed,N,i+.62,G),Q(s,.44,.04,.3,e.dollyRed,N,i+.08,G+.18),Xe(s,.11,.11,.05,10,e.wroughtIron,N-.22,i+.11,G-.04,{rot:[0,0,Math.PI*.5]}),Xe(s,.11,.11,.05,10,e.wroughtIron,N+.22,i+.11,G-.04,{rot:[0,0,Math.PI*.5]}),Q(s,.64,.38,.46,e.cartonBox,-6.55,i+.19,-6.85),Q(s,.64,.36,.46,e.cartonBox,-6.55,i+.56,-6.85);for(let F=0;F<5;F++){let A=-6.76+F%3*.18,E=-6.94+Math.floor(F/3)*.18;Xe(s,.058,.062,.24,8,e.syngentaGreen,A,i+.86,E),Xe(s,.048,.056,.1,8,e.bottleCapRed,A,i+1.03,E)}for(let[F,A]of[[-6.75,-4.15],[-5.75,-4.15]]){Q(s,.82,1.85,.44,e.steelInox,F,i+.925,A);for(let E=0;E<4;E++){let k=i+.3+E*.42;Q(s,.8,.04,.46,e.benchWhite,F,k,A);for(let j=-.3;j<=.3;j+=.15){let oe=c[(E+Math.round((j+1)*7))%c.length];Xe(s,.044,.048,.21,7,oe,F+j,k+.12,A+.04)}}}for(let F of[-6.45,-7.65]){Q(s,.46,2.15,1.08,e.benchWhite,.35,i+1.075,F,{r:.02});for(let A=0;A<4;A++){let E=i+.36+A*.42;Q(s,.38,.03,1,e.cabGlass,.29,E,F);for(let k=-.36;k<=.36;k+=.18){let j=c[(A+Math.round((k+2)*5))%c.length];Xe(s,.044,.046,.22,7,j,.26,E+.12,F+k)}}Q(s,.38,.34,.48,e.cartonBox,.35,i+2.32,F-.22),Q(s,.36,.3,.44,e.cartonBox,.35,i+2.3,F+.24)}T(.05,-9.05,10,e.bagYara,-.02),T(.05,-9.75,11,e.bagSilver,.02),T(.05,-10.55,10,e.bagGreen,-.01),T(.05,-11.35,9,e.bagKraft,.02),T(-.92,-10.85,8,e.bagYara,.03),T(-.92,-11.55,9,e.bagSilver,-.02),T(.05,-12.55,12,e.bagKraft,.01),T(.05,-13.3,12,e.bagGreen,-.02),T(-.92,-12.65,10,e.bagYara,.02),T(-.92,-13.4,9,e.bagKraft,-.01),T(-1.82,-12.65,8,e.bagBlue,.02),T(-1.82,-13.4,8,e.bagOrange,-.02),T(.05,-14.55,13,e.bagYara,-.01),T(.05,-15.3,12,e.bagSilver,.02),T(-.92,-14.65,10,e.bagGreen,.02),T(-.92,-15.4,9,e.bagYara,-.02),T(-1.82,-14.65,8,e.bagKraft,.01),T(-1.82,-15.4,8,e.bagGreen,-.02),T(.05,-16.65,11,e.bagGreen,.01),T(.05,-17.45,10,e.bagKraft,-.02),T(-.92,-16.75,9,e.bagSilver,.02),T(-.92,-17.55,9,e.bagYara,-.01),T(-1.82,-16.75,7,e.bagOrange,.02),T(-1.82,-17.55,7,e.bagBlue,-.01);for(let[F,A,E]of[[-5.85,-18.05,.85],[-2.35,-18.05,.85],[-6.05,-8.25,.72],[-2.15,-8.25,.72],[-6.05,-12.15,.72],[-2.15,-12.15,.72]])Xe(s,.22*E,.17*E,.36*E,10,e.terracotta,F,i+.18*E,A),yn(s,e.animeLeafCard,F,i+.62*E,A,.92*E,F+A),yn(s,e.bonsaiLeafLight,F,i+.92*E,A,.76*E,F*2+A);for(let[F,A]of[[-8.65,-8.2],[-8.65,-12.2],[-8.65,-16.2],[.45,-8.2],[.45,-12.2],[.45,-16.2]])yn(s,e.animeLeafCard,F,i+3.65,A,1.05,F+A),yn(s,e.animeBlossomCard,F,i+3.15,A,.85,F-A);for(let F=0;F<2;F++)for(let A=0;A<4;A++)Q(s,.62,.36,.46,e.cartonBox,-1.05,i+.18+A*.365,-8.55-F*.56);Q(s,.72,.22,.48,e.sackOrange,-1.55,i+.11,-5.85,{r:.08}),Q(s,.68,.22,.46,e.sackOrange,-1.52,i+.32,-5.85,{r:.08,rot:[0,.08,0]}),Q(s,.64,.2,.44,e.sackGreenStripe,-1.55,i+.52,-5.85,{r:.08,rot:[0,-.06,0]});for(let F of[-1.72,-1.32])Q(s,.26,.28,.22,e.scaleGreen,F,i+.14,-5.38,{r:.03}),en(s,.2,.2,.03,e.scaleDial,e.scaleGreen,F,i+.16,-5.26),Xe(s,.15,.12,.04,12,e.steelInox,F,i+.31,-5.38);Q(s,.68,.1,.72,e.woodChairDark,-.45,i+.36,-5.75,{r:.03}),Q(s,.68,.76,.1,e.woodChairDark,-.45,i+.74,-6.12,{r:.03,rot:[-.28,0,0]}),Q(s,.08,.4,.74,e.woodChairDark,-.78,i+.32,-5.78,{r:.02}),Q(s,.08,.4,.74,e.woodChairDark,-.12,i+.32,-5.78,{r:.02});let X=me.YARD_Y,U=7.35;t.bonsaiCrowns.push(od(s,e,U-2.35,X,-1.15,.96)),t.bonsaiCrowns.push(od(s,e,U+.55,X,-1.15,1.02)),Q(s,6.2,3.6,3.5,e.creamWall,U,X+1.8,-3.85,{r:.04}),Q(s,5.6,.24,.72,e.concrete,U,X+.12,-1.85,{r:.02}),Q(s,6.42,.16,.4,e.timberDark,U,X+3.58,-2.02,{r:.02});for(let F=U-2.95;F<=U+2.95;F+=.95)Q(s,.1,.14,.55,e.timberDark,F,X+3.45,-1.9);Q(s,1.76,2.42,.14,e.timberDark,U,X+1.44,-2.1),Q(s,1.6,2.3,.12,e.shutterBlue,U,X+1.4,-2.06);for(let F of[U-2.1,U+2.1])Q(s,1.38,1.48,.12,e.timberDark,F,X+1.85,-2.1,{r:.02}),en(s,1.24,1.34,.06,e.windowGlass,e.timberDark,F,X+1.85,-2.05),en(s,.42,1.36,.05,e.shutterBlue,e.timberDark,F-.88,X+1.85,-2.04),en(s,.42,1.36,.05,e.shutterBlue,e.timberDark,F+.88,X+1.85,-2.04);Qt(s,e,U-3,X,-1.95,.85,e.flowerPink),Qt(s,e,U+2.9,X,-1.95,.92,e.flowerPink),Q(s,1.9,.08,1.05,e.awningStripe,U-2.1,X+2.75,-1.68,{rot:[.36,0,0]}),Q(s,1.9,.08,1.05,e.awningStripe,U+2.1,X+2.75,-1.68,{rot:[.36,0,0]}),Q(s,1.9,.42,.04,e.awningStripe,U-2.1,X+2.36,-1.2),Q(s,1.9,.42,.04,e.awningStripe,U+2.1,X+2.36,-1.2);let H=1.65,ne=6.7,J=2.25,pe=Math.atan2(H,J),_e=Math.hypot(H,J);Q(s,ne,.16,_e,e.terracotta,U,X+3.6+H*.5,-3.85+J*.5,{rot:[pe,0,0]}),Q(s,ne,.16,_e,e.terracotta,U,X+3.6+H*.5,-3.85-J*.5,{rot:[-pe,0,0]}),Q(s,ne+.1,.18,.24,e.terracottaRidge,U,X+3.6+H+.04,-3.85);let ve=new kr;ve.moveTo(-1.75,0),ve.lineTo(1.75,0),ve.lineTo(0,H),ve.closePath();let Le=new ya(ve,{depth:6.16,bevelEnabled:!1});Le.rotateY(Math.PI*.5);let He=new xe(Le,e.creamWall);He.position.set(U-3.08,X+3.6,-3.85),He.castShadow=!0,He.receiveShadow=!0,s.add(He);let re=[[2.65,-6.1,.92,.56,.08],[2.85,-7.1,.86,.54,-.12],[3.15,-8.1,.88,.52,-.22],[3.65,-9.1,.86,.54,-.35],[4.1,-10.1,.84,.56,-.15],[4.15,-11.2,.86,.54,.14],[4.75,-12.1,.88,.54,.36],[5.75,-12.6,.84,.56,.12],[6.85,-12.8,.88,.54,-.05],[7.95,-12.6,.86,.54,-.18],[9,-12,.84,.54,-.42],[9.55,-11,.82,.54,-.15],[9.35,-9.8,.84,.54,.22]];for(let[F,A,E,k,j]of re)Q(s,E,.05,k,e.stoneBase,F,.065,A,{r:.08,rot:[0,j,0],cast:!1});let ie=[[4.7,-7.3,1.05,.4,!1],[7.1,-7.2,1.22,1.8,!0],[9.5,-7.5,1.02,2.9,!1],[1.85,-8.3,.92,.9,!1],[1.85,-11.4,1.05,2.2,!0],[1.95,-14.2,1.12,.5,!1],[4.4,-14.5,1.18,1.3,!1],[7,-14.8,1.32,2.5,!1],[9.6,-14.4,1.1,.7,!0],[10.8,-10.5,1.15,2,!1]];for(let[F,A,E,k,j]of ie)t.bonsaiCrowns.push(Ox(s,e,F,.04,A,{scale:E,rotY:k,blossom:j}));let _=6.9,O=-10.2,W=new _t(1.78,1.85,.06,20);W.scale(1.22,1,.88);let q=new xe(W,e.ditchWater);q.position.set(_,.09,O),q.receiveShadow=!0,s.add(q);for(let F=0;F<18;F++){let A=F/18*Math.PI*2,E=_+Math.cos(A)*(2.15+Math.sin(F*2.3)*.16),k=O+Math.sin(A)*(1.56+Math.cos(F*1.9)*.14),j=new wi(1,0);j.scale(.32+F%3*.1,.18+F%2*.1,.28+(F+1)%3*.08);let oe=new xe(j,F%2===0?e.stoneBase:e.pillarBand);oe.position.set(E,.14+F%2*.04,k),oe.rotation.set(F*.7,F*1.3,F*.4),oe.castShadow=!0,oe.receiveShadow=!0,s.add(oe)}for(let[F,A,E,k]of[[_-.95,O+.45,.24,!0],[_-.65,O+.72,.19,!1],[_+1.05,O-.35,.26,!0],[_+.82,O+.62,.21,!1],[_-1.15,O-.42,.22,!1]])Xe(s,E,E,.025,10,e.bonsaiLeafLight,F,.13,A,{cast:!1}),k&&Xe(s,.08,.04,.09,6,e.flowerPink,F,.17,A,{cast:!1});let he=new wi(.62,1);he.scale(1.15,.78,.95);let V=new xe(he,e.pillarBand);V.position.set(_+.12,.34,O-.08),V.castShadow=!0,V.receiveShadow=!0,s.add(V),yn(s,e.animeLeafCard,_+.12,.94,O-.08,.88,11),yn(s,e.bonsaiLeafLight,_-.16,.78,O+.14,.62,17),Q(s,.46,.08,1.55,e.woodPlank,3.18,.46,-10.3,{r:.03}),Xe(s,.1,.12,.42,8,e.bonsaiBark,3.18,.22,-9.75),Xe(s,.1,.12,.42,8,e.bonsaiBark,3.18,.22,-10.85),Qt(s,e,1.85,.04,-6.7,.78,e.flowerYellow),Qt(s,e,1.9,.04,-9.9,.84,null),Qt(s,e,1.85,.04,-12.8,.8,e.flowerPink),Qt(s,e,5.75,.04,-7.2,.72,null),Qt(s,e,10.6,.04,-8.8,.85,e.flowerPink),Qt(s,e,10.5,.04,-12.6,.82,e.flowerYellow);for(let[F,A]of[[4.6,-14],[9.4,-14],[4.6,-12],[9.4,-12]])Xe(s,.08,.09,2.7,8,e.bonsaiBark,F,1.4,A);Q(s,5.2,.1,.12,e.bonsaiBark,7,2.75,-14),Q(s,5.2,.1,.12,e.bonsaiBark,7,2.75,-12);for(let F=4.8;F<=9.2;F+=.84)Q(s,.08,.08,2.2,e.woodPlank,F,2.82,-13);for(let F of[5,7,9])yn(s,e.animeBlossomCard,F,2.92,-13.8,1.15,F),yn(s,e.animeLeafCard,F+.4,2.9,-12.1,1.05,F+3);let z=new wi(1.05,1);z.scale(1.25,.56,.92);let D=new xe(z,e.tarpaulinBlue);D.position.set(-9.95,me.WALK_Y+.34,.35),D.castShadow=!0,D.receiveShadow=!0,s.add(D);let R=6.1,ae=2.25,$=me.WALK_Y;Q(s,.12,.44,.46,e.benchWhite,R-.58,$+.22,ae,{r:.02}),Q(s,.12,.44,.46,e.benchWhite,R+.58,$+.22,ae,{r:.02}),Q(s,1.56,.08,.48,e.benchWhite,R,$+.44,ae+.02,{r:.02}),Q(s,1.56,.44,.07,e.benchWhite,R,$+.72,ae-.22,{r:.02,rot:[-.14,0,0]});let de=8.4,ue=2.85;Xe(s,.11,.16,7.2,10,e.poleConcrete,de,me.WALK_Y+3.6,ue),Q(s,.1,.1,1.35,e.steelPost,de,6.75,ue),Q(s,.1,.1,1.15,e.steelPost,de,6.25,ue),Q(s,.07,.07,1.2,e.steelPost,de,7.05,ue+.55,{rot:[-.18,0,0]}),Q(s,.22,.1,.36,e.chrome,de,7.12,ue+1.12,{r:.03});let we=-13.2;Xe(s,.11,.16,7.2,10,e.poleConcrete,we,3.6,ue),Q(s,.1,.1,1.35,e.steelPost,we,6.75,ue),Q(s,.1,.1,1.15,e.steelPost,we,6.25,ue);for(let[F,A]of[[6.72,-.45],[6.72,.45],[6.22,0]]){let E=new Jt([new L(we,F,ue+A),new L(-2.4,F-.28,ue+A),new L(de,F,ue+A)]),k=new xe(new kn(E,24,.016,5,!1),e.wireBlack);k.castShadow=!1,s.add(k)}t.palmCrowns.push(ir(s,e,-12.4,.04,-18.8,{height:6.4,leanX:-.8,leanZ:.55,rotY:.3})),t.palmCrowns.push(ir(s,e,-10.3,.04,-19.2,{height:5.7,leanX:.5,leanZ:-.65,rotY:1.9})),t.palmCrowns.push(ir(s,e,10.6,.04,-18.2,{height:6.5,leanX:.75,leanZ:-.5,rotY:2.3})),t.palmCrowns.push(ir(s,e,8.2,.04,-18.9,{height:5.8,leanX:-.55,leanZ:-.45,rotY:.9})),t.palmCrowns.push(ir(s,e,-12.6,.04,-9.2,{height:6.1,leanX:-.7,leanZ:.4,rotY:1.2})),t.palmCrowns.push(ir(s,e,13,.04,-5.8,{height:6.3,leanX:.85,leanZ:.45,rotY:2.6}));for(let F=0;F<7;F++){let A=.2-F*2.75,E=5.1+F%3*.42;t.palmCrowns.push(cd(s,e,12.15,.04,A,{height:E,lean:F%2?.08:-.06,rotY:F*1.1}))}for(let F=0;F<5;F++){let A=0-F*3.35,E=5+(F+1)%3*.38;t.palmCrowns.push(cd(s,e,-11.35,.04,A,{height:E,lean:F%2?-.07:.06,rotY:F*1.5+.4}))}return t.bonsaiCrowns.push(_h(s,e,11,.04,1.15,1.05)),t.bonsaiCrowns.push(_h(s,e,-12.8,.04,1.95,.92)),t.bonsaiCrowns.push(_h(s,e,2.8,.04,-19,.92)),gh(s,e,-10.35,.04,-3.9,1.05),gh(s,e,-10.35,.04,-13.5,1),gh(s,e,12.1,.04,-3.5,1),Qt(s,e,9.45,.04,2.25,.95,e.flowerPink),Qt(s,e,11.8,.04,2.35,.85,e.flowerYellow),Qt(s,e,-11.8,.04,2.45,.85,e.flowerYellow),Qt(s,e,-9.5,.04,6.55,.8,e.flowerPink),Qt(s,e,7.6,.04,6.55,.85,e.flowerYellow),Qt(s,e,11.6,.04,6.6,.9,e.flowerPink),t}var sr=1.55,za=[{pos:[1.15,0,3.15],look:[.3,1.4,.2],label:"M\u1EB7t ti\u1EC1n & C\u1ED5ng v\xF2m \u0110\u1EA1i l\xFD L\xED An"},{pos:[1.05,0,1.15],look:[-.95,1.2,-1.1],label:"B\u01B0\u1EDBc qua c\u1ED5ng v\xF2m Hoptri Super Humic"},{pos:[-.85,0,.25],look:[-1.05,1.1,-1.25],label:"Qu\u1EA7y ti\u1EBFp t\xE2n Hoptri Summit & bonsai mini"},{pos:[-2.15,0,-.85],look:[-4.2,1,-2.2],label:"S\u1EA3nh r\u1ED5 thu\u1ED1c \u0111\u1EE7 m\xE0u & d\xE3y t\u1EE7 BAYER \xB7 HB-101"},{pos:[-2.35,0,-3.55],look:[-4.3,1.2,-4.3],label:"K\u1EC7 s\u1EAFt V l\u1ED7, k\u1EC7 Syngenta & l\u1ED1i v\xE0o kho"},{pos:[-3.05,0,-6.2],look:[-5,1.2,-7.2],label:"Kho ph\xE2n b\xF3n \u2014 bao Kraft, bao xanh & c\xE2n Nh\u01A1n H\xF2a"},{pos:[-4.1,0,-11.5],look:[-4.1,1.2,-16.5],label:"H\xE0nh lang kho s\xE2u \u2014 YaraMila, xe \u0111\u1EA9y \u0111\u1ECF & bao x\xE1m"},{pos:[-4.1,0,-17.4],look:[-4.1,1.3,-21],label:"C\u1EEDa h\u1EADu kho nh\xECn th\u1EB3ng ra \u0111\u1ED3ng l\xFAa mi\u1EC1n T\xE2y"},{pos:[-4.1,0,-12.8],look:[-4,1.3,-4.5],label:"Quay nh\xECn to\xE0n c\u1EA3nh h\xE0nh lang kho thu\u1ED1c d\xE0i 30m"},{pos:[-2.35,0,-3.35],look:[-1.4,1.2,-1.4],label:"Tr\u1EDF ra s\u1EA3nh b\xE1n h\xE0ng & qu\u1EA7y t\xEDnh ti\u1EC1n"}],Hx=[[-1.78,.05,-3.98,-1.38],[-2.15,-1.62,-4.36,-3.88],[.12,.6,-2,-.85],[-6.42,-4.55,-.94,.16],[-7.8,-5.02,-3.44,-1.22],[-8.95,-7.85,-4.08,-.35],[-7.2,-5.3,-4.4,-3.9],[-8.95,-6.22,-18.1,-8.75],[-8.95,-7.05,-8.75,-4.1],[-6.95,-6.2,-8.05,-6.52],[-2.25,.68,-18.1,-12.25],[-1.9,.68,-12.25,-5.05],[-9.25,-8.82,-18.9,.85],[.64,1.02,-18.9,-.95],[-9.25,-5.25,-18.95,-18.52],[-2.95,1.02,-18.95,-18.52],[-4.45,-.22,1,1.48],[3.22,8.6,1,1.48],[-5.65,-3.9,1.75,2.85],[4.05,10.6,-5.85,-1.45],[4.5,5.5,-1.65,-.65],[7.4,8.4,-1.65,-.65],[4.85,8.95,-11.75,-8.65]],zx=[{id:"checkout",type:"checkout",pos:[-.95,-.65],radius:2.35,title:"Qu\u1EA7y t\xEDnh ti\u1EC1n \u0110\u1EA1i l\xFD L\xED An",prompt:"Thanh to\xE1n t\u1EA1i qu\u1EA7y",items:[]},{id:"baskets",type:"shelf",pos:[-4.65,-2.25],radius:2.45,title:"S\u1EA3nh r\u1ED5 thu\u1ED1c BVTV",prompt:"Ch\u1ECDn g\xF3i thu\u1ED1c trong r\u1ED5",items:[{id:"oshin",name:"Thu\u1ED1c tr\u1EEB s\xE2u Oshin 20WP (g\xF3i)",price:45e3},{id:"daoon",name:"Thu\u1ED1c \u0111\u1EB7c tr\u1ECB \u0111\u1EA1o \xF4n l\xFAa (g\xF3i)",price:55e3}]},{id:"cabinets",type:"shelf",pos:[-7.45,-2.05],radius:2.35,title:"T\u1EE7 BAYER \xB7 Hoptri \xB7 HB-101",prompt:"Xem t\u1EE7 thu\u1ED1c BAYER / HB-101",items:[{id:"hb101",name:"D\u01B0\u1EE1ng c\xE2y HB-101 Nh\u1EADt B\u1EA3n (chai)",price:12e4},{id:"movento",name:"Movento 150OD \u0111\u1EB7c tr\u1ECB r\u1EC7p s\xE1p",price:185e3}]},{id:"racks",type:"shelf",pos:[-5.85,-4.55],radius:2.35,title:"K\u1EC7 Syngenta & K\u1EC7 s\u1EAFt V l\u1ED7",prompt:"Ch\u1ECDn thu\u1ED1c tr\xEAn k\u1EC7 s\u1EAFt",items:[{id:"kenbast",name:"Thu\u1ED1c tr\u1EEB c\u1ECF Kenbast 15SL (chai \u0111\u1ECF)",price:95e3},{id:"humic",name:"Hoptri Super Humic 70% (g\xF3i 1kg)",price:16e4}]},{id:"warehouse",type:"shelf",pos:[-4.15,-11.5],radius:7.2,title:"Kho ph\xE2n b\xF3n & thu\u1ED1c BVTV",prompt:"L\u1EA5y bao ph\xE2n b\xF3n trong kho",items:[{id:"yaramila",name:"Ph\xE2n b\xF3n YaraMila Complex (bao 25kg)",price:42e4},{id:"kraft",name:"Ph\xE2n h\u1EEFu c\u01A1 bao Kraft (bao 25kg)",price:28e4}]}],ud=34;function Vx(s,e){let t=es(e,{skin:e.skinTones[0],hair:e.hair[0],top:e.cloth.teal,bottom:e.cloth.navy,sleeve:"short",scale:[.95,.95,.95]}),n=new xe(new Rn(.28,.16,16,1,!0),e.nonLa);return n.position.set(0,.21,.01),n.rotation.x=-.06,n.castShadow=!0,t.joints.head.add(n),t.group.visible=!1,s.add(t.group),t}function Gx(s,e){if(!e)return{torso:[.02,0,0],head:[0,0,0],hipL:[0,0,0],hipR:[0,0,0],kneeL:[.04,0,0],kneeR:[.04,0,0],shoulderL:[0,0,.08],shoulderR:[0,0,-.08],elbowL:[-.15,0,0],elbowR:[-.15,0,0]};let t=Math.sin(s),n=Math.cos(s);return{torso:[.06,-t*.06,0],head:[-.02,t*.04,0],hipL:[-t*.54,0,0],hipR:[t*.54,0,0],kneeL:[Math.max(0,n*.55)+.06,0,0],kneeR:[Math.max(0,-n*.55)+.06,0,0],shoulderL:[t*.44,0,.06],shoulderR:[-t*.44,0,-.06],elbowL:[-.22-Math.max(0,-t)*.25,0,0],elbowR:[-.22-Math.max(0,t)*.25,0,0]}}function fd(s,e,t,n,i,{onLabel:r=()=>{},onZoneChange:o=()=>{}}={}){let a=!1,l=!1,c=!0,h=0,u=null,f=sr,d=.24,m=Vx(n,i),x=null,g=null,p=null;function b(V,z){if(!V)return;x=V;let D=x.getObjectByName("Head");if(D){let R=new xe(new Rn(.28,.16,16,1,!0),i.nonLa);R.position.set(0,.18,.01),R.rotation.x=-.06,R.castShadow=!0,D.add(R)}x.visible=a&&c,n.add(x),z&&(g=new er(x),p=g.clipAction(z),p.play()),m.group.visible=!1}let S=new Jt(za.map(V=>new L(V.pos[0],0,V.pos[2])),!0,"catmullrom",.35),y=new L(.85,me.WALK_Y,2.25),B=.42,P=-.14,I=0,w=new L,v=new L,M=!1,T=new Set,N={forward:!1,back:!1,turnLeft:!1,turnRight:!1},G=!1,X=0,U=0;function H(V,z){if(V<-8.6||V>11.2||z<-19.8||z>4.2)return!0;for(let[D,R,ae,$]of Hx)if(V+d>D&&V-d<R&&z+d>ae&&z-d<$)return!0;return!1}function ne(V,z){let D=!1;return V!==0&&!H(y.x+V,y.z)&&(y.x+=V,D=!0),z!==0&&!H(y.x,y.z+z)&&(y.z+=z,D=!0),y.y=y.z<1.05?me.SHOP_Y:me.WALK_Y,D}function J(){l&&(l=!1)}function pe(V){if(!a)return;let z=V.key.toLowerCase();["w","a","s","d","arrowup","arrowdown","arrowleft","arrowright"].includes(z)&&(V.preventDefault(),T.add(z),J())}function _e(V){T.delete(V.key.toLowerCase())}function ve(V){!a||V.target!==e||(G=!0,X=V.clientX,U=V.clientY,J())}function Le(V){if(!a||!G)return;let z=V.clientX-X,D=V.clientY-U;X=V.clientX,U=V.clientY,B-=z*.0052,P=Math.max(-.58,Math.min(.45,P-D*.0038))}function He(){G=!1}window.addEventListener("keydown",pe),window.addEventListener("keyup",_e),e.addEventListener("pointerdown",ve),window.addEventListener("pointermove",Le),window.addEventListener("pointerup",He);function re(){let V=null,z=1/0;for(let R of zx){let ae=Math.hypot(y.x-R.pos[0],y.z-R.pos[1]);ae<=R.radius&&ae<z&&(V=R,z=ae)}let D=V?V.id:null;return D!==u&&(u=D,o(V)),V}function ie(){a=!0,l=!1,c=!0,y.set(.85,me.WALK_Y,2.25),B=.42,P=-.14,I=0,M=!1,u=null,m.group.visible=!x,x&&(x.visible=!0),t.controls.enabled=!1,s.fov=72,s.updateProjectionMatrix(),r("\u0110\xF3ng vai kh\xE1ch h\xE0ng \xB7 G\xF3c nh\xECn xa"),he(0)}function _(){a&&(a=!1,l=!1,T.clear(),Object.keys(N).forEach(V=>{N[V]=!1}),G=!1,u=null,m.group.visible=!1,x&&(x.visible=!1),s.fov=26,s.updateProjectionMatrix(),t.controls.enabled=!0,t.reset(),r(""),o(null))}function O(V){l=!!V}function W(){return c=!c,m.group.visible=a&&c,M=!1,c}function q(V,z){V in N&&(N[V]=!!z,z&&J())}function he(V){if(!a)return;let z=!1;if(l){h=(h+V)%ud;let $=h/ud,de=S.getPointAt($),ue=S.getPointAt(($+.015)%1);y.x=de.x,y.z=de.z,y.y=y.z<1.05?me.SHOP_Y:me.WALK_Y,B=Math.atan2(-(ue.x-de.x),-(ue.z-de.z)),z=!0,I+=V*7.2;let we=Math.min(za.length-1,Math.floor($*za.length));r(za[we].label)}else{(T.has("arrowleft")||N.turnLeft)&&(B+=2.1*V),(T.has("arrowright")||N.turnRight)&&(B-=2.1*V);let de=2.85,ue=-Math.sin(B),we=-Math.cos(B),F=Math.cos(B),A=-Math.sin(B),E=0,k=0;(T.has("w")||T.has("arrowup")||N.forward)&&(E+=ue,k+=we),(T.has("s")||T.has("arrowdown")||N.back)&&(E-=ue,k-=we),T.has("d")&&(E+=F,k+=A),T.has("a")&&(E-=F,k-=A);let j=Math.hypot(E,k);if(j>1e-4){let le=de*V/j;z=ne(E*le,k*le),z&&(I+=V*7.4)}let oe=re();r(oe?oe.title:c?"Kh\xE1ch h\xE0ng \xB7 G\xF3c nh\xECn xa":"Kh\xE1ch h\xE0ng \xB7 G\xF3c nh\xECn th\u1EE9 1")}x?(x.position.copy(y),x.rotation.y=B+Math.PI,x.visible=c,m.group.visible=!1,g&&p&&(p.timeScale=z?1.25:0,z||(p.time=0),g.update(Math.max(.001,V)))):(m.group.position.copy(y),m.group.rotation.y=B+Math.PI,ln(m,Gx(I,z)),m.group.visible=c);let D=y.x*f,R=y.y*f,ae=y.z*f;if(c){let $=3.25*f,de=(2.45-P*1.1)*f,ue=D+Math.sin(B)*$,we=ae+Math.cos(B)*$,F=Math.max(R+1.4*f,Math.min(R+3.4*f,R+de));y.z<.8&&y.x<.7&&(ue=Math.max(-8.6*f,Math.min(.55*f,ue)),we=Math.max(-18.3*f,we));let A=new L(ue,F,we),E=new L(D-Math.sin(B)*1.4*f,R+1.38*f,ae-Math.cos(B)*1.4*f);if(!M)w.copy(A),v.copy(E),M=!0;else{let k=1-Math.exp(-9*Math.max(.016,V));w.lerp(A,k),v.lerp(E,k)}s.position.copy(w),s.lookAt(v)}else{let $=z?Math.sin(I)*.04:0,de=R+1.5*f+$;s.position.set(D,de,ae);let ue=new L(-Math.sin(B)*Math.cos(P),Math.sin(P),-Math.cos(B)*Math.cos(P));s.lookAt(s.position.clone().add(ue))}l&&re()}return{enter:ie,exit:_,toggle(){return a?_():ie(),a},isActive:()=>a,isAutoWalk:()=>l,isThirdPerson:()=>c,setAutoWalk:O,toggleViewMode:W,setVirtual:q,setPlayerGlb:b,update:he}}var Wx='<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">',Xx="</svg>",Yx={play:'<polygon points="6 3 20 12 6 21 6 3"/>',pause:'<rect x="14" y="4" width="4" height="16" rx="1"/><rect x="6" y="4" width="4" height="16" rx="1"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>',sunset:'<path d="M12 10V2"/><path d="m4.93 10.93 1.41 1.41"/><path d="M2 18h2"/><path d="M20 18h2"/><path d="m19.07 10.93-1.41 1.41"/><path d="M22 22H2"/><path d="m16 6-4 4-4-4"/><path d="M16 18a4 4 0 0 0-8 0"/>',moon:'<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>',home:'<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',layers:'<path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/>',user:'<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',eye:'<path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/>',video:'<path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"/><rect x="2" y="6" width="14" height="12" rx="2"/>',rotateCcw:'<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>',rotateCw:'<path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/>',arrowUp:'<path d="m5 12 7-7 7 7"/><path d="M12 19V5"/>',arrowDown:'<path d="M12 5v14"/><path d="m19 12-7 7-7-7"/>',compass:'<path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"/><circle cx="12" cy="12" r="10"/>',shoppingCart:'<circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>',shoppingBag:'<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>',mapPin:'<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',receipt:'<path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 17.5v-11"/>'};function cn(s){return`${Wx}${Yx[s]||""}${Xx}`}var je='"Space Grotesk", system-ui, -apple-system, sans-serif';function ut(s,e,t,{repeat:n=null}={}){let i=document.createElement("canvas");i.width=s,i.height=e;let r=i.getContext("2d");t(r,s,e);let o=new ni(i);return o.colorSpace=dt,o.anisotropy=8,n&&(o.wrapS=On,o.wrapT=On,o.repeat.set(n[0],n[1])),o.needsUpdate=!0,o}function Jr(s,e,t,n,i,r){s.beginPath(),s.moveTo(e+r,t),s.lineTo(e+n-r,t),s.quadraticCurveTo(e+n,t,e+n,t+r),s.lineTo(e+n,t+i-r),s.quadraticCurveTo(e+n,t+i,e+n-r,t+i),s.lineTo(e+r,t+i),s.quadraticCurveTo(e,t+i,e,t+i-r),s.lineTo(e,t+r),s.quadraticCurveTo(e,t,e+r,t),s.closePath()}function dd(s){let e=(_,O={})=>s.toon(_,{stroke:.0017,...O}),t=(_,O={})=>s.toon(_,{stroke:.0012,...O}),n=(_,O={})=>s.toon(_,{outline:!1,...O});function i(_,O,{w:W=256,h:q=256,repeat:he=[2,2],weatherBottom:V=!1,dappledShadows:z=!1}={}){return ut(W,q,(D,R,ae)=>{D.fillStyle=_,D.fillRect(0,0,R,ae);for(let $=0;$<280;$++){let de=($*79+$%11*19)%R,ue=($*53+$%7*23)%ae,we=8+$%18,F=4+$%10;D.fillStyle=O[$%O.length],D.beginPath(),D.ellipse(de,ue,we,F,$*.7%Math.PI,0,Math.PI*2),D.fill()}if(z){D.fillStyle="rgba(54, 98, 152, 0.22)";for(let $=0;$<28;$++){let de=$*47%R,ue=$*29%(ae*.65);D.beginPath(),D.ellipse(de,ue,14+$%10,6+$%5,$*.9%Math.PI,0,Math.PI*2),D.fill()}}if(V){let $=D.createLinearGradient(0,ae*.72,0,ae);$.addColorStop(0,"rgba(38, 62, 102, 0)"),$.addColorStop(1,"rgba(38, 62, 102, 0.24)"),D.fillStyle=$,D.fillRect(0,ae*.72,R,ae*.28)}},{repeat:he})}function r({withBlossoms:_=!1}={}){return ut(256,256,(O,W,q)=>{O.clearRect(0,0,W,q);let he=(V,z,D,R,ae,$)=>{O.save(),O.translate(V,z),O.rotate(ae),O.fillStyle=$,O.beginPath(),O.moveTo(0,-D*.5),O.quadraticCurveTo(R,0,0,D*.5),O.quadraticCurveTo(-R,0,0,-D*.5),O.closePath(),O.fill(),O.restore()};for(let V=0;V<18;V++){let z=V/18*Math.PI*2,D=46+V%3*20;he(128+Math.cos(z)*D,128+Math.sin(z)*D,58,22,z+.4,"#366e40")}for(let V=0;V<16;V++){let z=V/16*Math.PI*2+.2,D=34+V%3*18;he(128+Math.cos(z)*D,122+Math.sin(z)*D,52,20,z-.3,"#589b48")}for(let V=0;V<12;V++){let z=V/12*Math.PI*2+.5,D=18+V%3*16;he(128+Math.cos(z)*D,114+Math.sin(z)*D,44,17,z+.6,"#96cc5e")}if(_){let V=[[88,96],[164,108],[122,152],[148,76],[96,148]];for(let[z,D]of V)O.fillStyle="#d4582a",O.beginPath(),O.arc(z,D,16,0,Math.PI*2),O.fill(),O.fillStyle="#f28b44",O.beginPath(),O.arc(z-3,D-3,12,0,Math.PI*2),O.fill(),O.fillStyle="#ffd082",O.beginPath(),O.arc(z-5,D-5,5,0,Math.PI*2),O.fill()}})}let o=ut(256,128,(_,O,W)=>{_.clearRect(0,0,O,W),_.strokeStyle="#1b5a52",_.lineWidth=6,_.beginPath(),_.moveTo(8,64),_.quadraticCurveTo(128,44,248,72),_.stroke();for(let q=0;q<15;q++){let he=(q+1)/16,V=12+he*228,z=64-Math.sin(he*Math.PI)*14+he*6,D=(1-Math.abs(he-.45)*1.1)*52;for(let R of[-1,1])_.fillStyle=q%2===0?"#4e8f42":"#74b452",_.beginPath(),_.moveTo(V,z),_.quadraticCurveTo(V+14,z+R*D*.55,V+26,z+R*D),_.quadraticCurveTo(V+6,z+R*D*.45,V-5,z),_.closePath(),_.fill()}}),a=ut(256,256,(_,O,W)=>{let q=_.createLinearGradient(0,0,0,W);q.addColorStop(0,"#ffdf78"),q.addColorStop(.55,"#ffb448"),q.addColorStop(1,"#e87e2c"),_.fillStyle=q,_.fillRect(0,0,O,W),_.fillStyle="rgba(255, 244, 212, 0.36)",_.beginPath(),_.moveTo(0,0),_.lineTo(86,0),_.quadraticCurveTo(64,130,32,W),_.lineTo(0,W),_.closePath(),_.fill(),_.beginPath(),_.moveTo(O,0),_.lineTo(O-86,0),_.quadraticCurveTo(O-64,130,O-32,W),_.lineTo(O,W),_.closePath(),_.fill(),_.strokeStyle="#1b2d4c",_.lineWidth=10,_.strokeRect(5,5,O-10,W-10),_.lineWidth=6,_.beginPath(),_.moveTo(O/2,0),_.lineTo(O/2,W),_.moveTo(0,W*.52),_.lineTo(O,W*.52),_.stroke()}),l=ut(128,256,(_,O,W)=>{_.fillStyle="#265c96",_.fillRect(0,0,O,W),_.strokeStyle="#153864",_.lineWidth=6,_.strokeRect(3,3,O-6,W-6);for(let q=18;q<W-14;q+=16)_.fillStyle="#3c7ec0",_.fillRect(12,q,O-24,6),_.fillStyle="#143258",_.fillRect(12,q+6,O-24,5)}),c=r({withBlossoms:!1}),h=r({withBlossoms:!0}),u=i("#f7eedc",["rgba(255,252,240,0.48)","rgba(232,216,188,0.34)","rgba(202,214,224,0.22)"],{repeat:[2,2],weatherBottom:!0,dappledShadows:!0}),f=i("#88a6ba",["rgba(214,234,248,0.38)","rgba(104,132,154,0.30)","rgba(176,148,118,0.18)"],{repeat:[3,4]}),d=i("#e2d8c8",["rgba(250,244,232,0.38)","rgba(200,188,168,0.28)","rgba(174,166,150,0.18)"],{repeat:[4,2]}),m=i("#785842",["rgba(138,104,78,0.38)","rgba(82,58,42,0.35)","rgba(106,126,76,0.22)"],{repeat:[1,3]}),x=i("#b58d63",["rgba(154,112,72,0.42)","rgba(208,176,134,0.32)","rgba(122,86,56,0.26)"],{repeat:[5,7]}),g=ut(2400,360,(_,O,W)=>{_.fillStyle="#fcfdfc",_.fillRect(0,0,860,W),_.fillStyle="#15843b",_.fillRect(0,0,860,12),_.fillStyle="#eaf6ed",Jr(_,22,28,148,W-56,14),_.fill(),_.fillStyle="#188a42",_.beginPath(),_.arc(96,126,36,0,Math.PI*2),_.fill(),_.fillStyle="#1d70b8",_.beginPath(),_.arc(96,162,18,0,Math.PI*2),_.fill(),_.fillStyle="#126430",_.font=`700 28px ${je}`,_.textAlign="center",_.fillText("hoptri",96,232),_.fillStyle="#1d70b8",_.font=`600 18px ${je}`,_.fillText("SUMMIT",96,258);let q=516;_.textAlign="center",_.fillStyle="#185c32",_.font=`700 27px ${je}`,_.fillText("C\u1EECA H\xC0NG V\u1EACT T\u01AF N\xD4NG NGHI\u1EC6P",q,66),_.fillStyle="rgba(15, 74, 34, 0.16)",_.font=`700 108px ${je}`,_.fillText("L\xCD AN",q+4,174),_.fillStyle="#12853a",_.fillText("L\xCD AN",q,170),_.fillStyle="#1a5388",_.font=`600 23px ${je}`,_.fillText("CHUY\xCAN KINH DOANH PH\xC2N B\xD3N  \u2022  THU\u1ED0C BVTV",q,218),_.fillStyle="#153447",Jr(_,192,240,646,94,10),_.fill(),_.fillStyle="#ffffff",_.font=`700 23px ${je}`,_.fillText("\u0110T: 0901.234.567   \u2022   02723.000.999",q,278),_.fillStyle="#d4e6f0",_.font=`500 19px ${je}`,_.fillText("\u0110C: 191/8 \u1EA4p Long Thu\u1EADn, X. An L\u1EE5c Long, T. T\xE2y Ninh",q,314);let he=_.createLinearGradient(860,0,860,214);he.addColorStop(0,"#f4faf3"),he.addColorStop(1,"#dcefd6"),_.fillStyle=he,_.fillRect(860,0,640,214),_.fillStyle="#68a630",_.beginPath(),_.moveTo(860,172),_.quadraticCurveTo(1180,138,1500,176),_.lineTo(1500,214),_.lineTo(860,214),_.closePath(),_.fill(),_.fillStyle="#20262b",_.fillRect(860,214,640,W-214),_.fillStyle="#edf5ea",Jr(_,892,46,120,156,10),_.fill(),_.strokeStyle="#1c6e38",_.lineWidth=5,_.stroke(),_.fillStyle="#228b42",_.beginPath(),_.arc(952,122,28,0,Math.PI*2),_.fill(),_.fillStyle="#c83228",_.beginPath(),_.arc(1046,78,22,0,Math.PI*2),_.fill(),_.strokeStyle="#ffffff",_.lineWidth=3,_.stroke(),_.textAlign="left",_.fillStyle="#173828",_.font=`700 24px ${je}`,_.fillText("HOPTRI SUPER HUMIC",1086,74),_.font=`700 38px ${je}`,_.fillText("TR\u0102M TRI\u1EC6U N\u0102M",1086,120),_.fillText("D\u01AF\u1EE0NG CH\u1EA4T",1086,162),_.textAlign="center",_.fillStyle="#f5cf52",_.font=`700 33px ${je}`,_.fillText("AXIT HUMIC 70%",1180,274),_.fillStyle="#e6dec2",_.font=`600 24px ${je}`,_.fillText("T\u1EEA M\u1ECE LEONARDITE T\u1EF0 NHI\xCAN",1180,318),_.fillStyle="#f6f7f9",_.fillRect(1500,0,250,W);let V=_.createLinearGradient(1720,0,2400,W);V.addColorStop(0,"#de3728"),V.addColorStop(1,"#b82218"),_.fillStyle=V,_.beginPath(),_.moveTo(1726,0),_.lineTo(2400,0),_.lineTo(2400,W),_.lineTo(1726,W),_.lineTo(1774,W/2),_.closePath(),_.fill(),_.strokeStyle="#ffffff",_.lineWidth=10,_.beginPath(),_.moveTo(1738,0),_.lineTo(1786,W/2),_.lineTo(1738,W),_.stroke(),_.fillStyle="#d93627",_.beginPath(),_.moveTo(1622,62),_.lineTo(1678,180),_.lineTo(1622,286),_.lineTo(1566,180),_.closePath(),_.fill(),_.fillStyle="#1e2328",_.font=`700 34px ${je}`,_.textAlign="center",_.fillText("GARSONI",1622,190);let z=2088;_.fillStyle="#ffeae6",_.font=`600 29px ${je}`,_.fillText("\u0110\u1EA0I L\xDD V\u1EACT T\u01AF N\xD4NG NGHI\u1EC6P",z,78),_.fillStyle="rgba(65, 10, 6, 0.28)",_.font=`700 112px ${je}`,_.fillText("L\xCD AN",z+5,206),_.fillStyle="#ffffff",_.fillText("L\xCD AN",z,201),_.fillStyle="rgba(72, 10, 6, 0.35)",Jr(_,1824,248,528,56,8),_.fill(),_.fillStyle="#ffffff",_.font=`600 18px ${je}`,_.fillText("\u1EA4P LONG THU\u1EACN  \u2022  LONG TR\xCC  \u2022  CH\xC2U TH\xC0NH  \u2022  LONG AN",z,283),_.strokeStyle="#4c555c",_.lineWidth=8,_.strokeRect(4,4,O-8,W-8),_.lineWidth=6,_.beginPath(),_.moveTo(860,0),_.lineTo(860,W),_.moveTo(1500,0),_.lineTo(1500,W),_.stroke()}),p=ut(1600,200,(_,O,W)=>{_.fillStyle="#f8fafb",_.fillRect(0,0,O,W),_.fillStyle="#173a64",_.font=`700 88px ${je}`,_.textAlign="left",_.fillText("bm",40,108),_.font=`700 26px ${je}`,_.fillText("BEHN MEYER",194,72),_.fillStyle="#248a3e",_.fillText("AgriCare",194,108),_.strokeStyle="#3da33a",_.lineWidth=10,_.beginPath(),_.moveTo(410,14),_.quadraticCurveTo(438,78,406,144),_.stroke();let q=1010;_.textAlign="center",_.fillStyle="#252c32",_.font=`600 22px ${je}`,_.fillText("C\u1EECA H\xC0NG V\u1EACT T\u01AF N\xD4NG NGHI\u1EC6P",q,38),_.fillStyle="#c82c22",_.font=`700 72px ${je}`,_.fillText("L\xCD AN",q,108),_.fillStyle="#1a6632",_.font=`600 18px ${je}`,_.fillText("PH\xC2N B\xD3N CAO C\u1EA4P  \u2022  THU\u1ED0C B\u1EA2O V\u1EC6 TH\u1EF0C V\u1EACT",q,136),_.fillStyle="#162f4d",_.fillRect(0,152,O,48),_.fillStyle="#e4edf7",_.font=`600 22px ${je}`,_.fillText("ENTEC     \u2022     Nitrophoska     \u2022     NovaTec     \u2022     Blaukorn     \u2022     Korn-KALI Plus",O/2,184)}),b=ut(1200,180,(_,O,W)=>{let q=_.createLinearGradient(0,0,O,0);q.addColorStop(0,"#d84e1c"),q.addColorStop(.5,"#f0712c"),q.addColorStop(1,"#c74516"),_.fillStyle=q,_.fillRect(0,0,O,W),_.fillStyle="rgba(255, 232, 160, 0.55)",_.fillRect(0,0,O,8),_.fillRect(0,W-8,O,8),_.fillStyle="#ffffff",_.font=`700 56px ${je}`,_.textAlign="left",_.fillText("HOPTRI SUPER HUMIC",48,110),_.fillStyle="rgba(255, 255, 255, 0.35)",_.fillRect(820,34,4,W-68),_.textAlign="center",_.fillStyle="#ffecc2",_.font=`600 26px ${je}`,_.fillText("\u0110\u1EA0I L\xDD",1005,68),_.fillStyle="#ffffff",_.font=`700 48px ${je}`,_.fillText("L\xCD AN",1005,128)}),S=ut(420,240,(_,O,W)=>{_.fillStyle="#c92420",_.fillRect(0,0,O,W),_.strokeStyle="#f5cf58",_.lineWidth=10,Jr(_,14,14,O-28,W-28,12),_.stroke(),_.fillStyle="#ffffff",_.font=`700 36px ${je}`,_.textAlign="center",_.fillText("hoptri summit",O/2,74),_.fillStyle="#fae382",_.font=`700 28px ${je}`,_.fillText("T\u1ED0T \u0110\u1EA4T - KH\u1ECEE C\xC2Y",O/2,136),_.font=`600 26px ${je}`,_.fillText("T\u1EBET V\u1EA0N \u0110I\u1EC0U MAY",O/2,184)}),y=ut(200,800,(_,O,W)=>{_.fillStyle="#dd531e",_.fillRect(0,0,O,400),_.fillStyle="#186b37",_.fillRect(0,400,O,400),_.fillStyle="#fae382",_.font=`700 44px ${je}`,_.textAlign="center",_.fillText("2025",O/2,92),_.fillText("T\u1EBET",O/2,148),_.fillStyle="#ffffff",_.beginPath(),_.arc(O/2,272,54,0,Math.PI*2),_.fill(),_.fillStyle="#c92622",_.font=`700 19px ${je}`,_.fillText("\u0110H C\u1EA6N TH\u01A0",O/2,278),_.fillStyle="#fae382",_.font=`700 34px ${je}`,_.fillText("HUMIC",O/2,502),_.fillText("70%",O/2,552),_.fillStyle="#ffffff",_.font=`600 24px ${je}`,_.fillText("T\u1ED0T \u0110\u1EA4T",O/2,634),_.fillText("KH\u1ECEE C\xC2Y",O/2,674)}),B=ut(256,256,(_,O,W)=>{_.fillStyle="#d4663c",_.fillRect(0,0,O,W);let q=8,he=8,V=W/q,z=O/he,D=["#df7448","#ce5f38","#e58654","#c55532","#d66e44"];for(let R=0;R<q;R++){let ae=R*V;_.fillStyle="rgba(104, 38, 22, 0.22)",_.fillRect(0,ae+V-5,O,5);for(let $=0;$<he;$++){let de=$*z+(R%2?z*.5:0);_.fillStyle=D[(R*3+$*5)%D.length],_.beginPath(),_.arc(de%O,ae+V*.55,z*.45,0,Math.PI,!1),_.fill(),_.strokeStyle="rgba(84, 32, 18, 0.22)",_.lineWidth=2,_.stroke()}}},{repeat:[6,3]}),P=ut(512,256,(_,O,W)=>{_.fillStyle="#5a606c",_.fillRect(0,0,O,W),_.fillStyle="#9c9282",_.fillRect(0,0,O,16),_.fillRect(0,W-16,O,16),_.fillStyle="#f2efe6",_.fillRect(0,20,O,6),_.fillRect(0,W-26,O,6);for(let q=0;q<420;q++){let he=q*97%O,V=24+q*53%(W-48);_.fillStyle=q%2===0?"rgba(230,224,214,0.07)":"rgba(42,46,62,0.10)",_.fillRect(he,V,18+q%14,3)}},{repeat:[6,1]}),I=ut(256,256,(_,O,W)=>{_.fillStyle="#4e7d34",_.fillRect(0,0,O,W);for(let q=0;q<W;q+=24)_.fillStyle=q%48===0?"#5c8f3c":"#436e2c",_.fillRect(0,q,O,14);for(let q=0;q<240;q++){let he=q*59%O,V=q*41%W;_.fillStyle=q%3===0?"rgba(164, 212, 118, 0.28)":"rgba(42, 74, 28, 0.25)",_.fillRect(he,V,10,3)}},{repeat:[6,3]}),w=ut(256,256,(_,O,W)=>{_.fillStyle="#62943c",_.fillRect(0,0,O,W);for(let q=0;q<420;q++){let he=q*73%O,V=q*47%W;_.fillStyle=q%3===0?"#74ab46":q%3===1?"#538232":"#85ba50",_.fillRect(he,V,6,4)}},{repeat:[8,8]}),v=ut(256,256,(_,O,W)=>{_.fillStyle="#dfe4e7",_.fillRect(0,0,O,W),_.strokeStyle="#a4adb4",_.lineWidth=3;let q=64;for(let he=0;he<W;he+=q)for(let V=0;V<O;V+=q)_.strokeRect(V,he,q,q),_.fillStyle="#bcc4ca",_.beginPath(),_.moveTo(V+q/2,he+10),_.lineTo(V+q-10,he+q/2),_.lineTo(V+q/2,he+q-10),_.lineTo(V+10,he+q/2),_.closePath(),_.fill()},{repeat:[7,6]}),M=ut(128,256,(_,O,W)=>{_.fillStyle="#dfd1b6",_.fillRect(0,0,O,W),_.strokeStyle="rgba(95, 82, 64, 0.28)",_.lineWidth=3;for(let q=0;q<W;q+=32){_.beginPath(),_.moveTo(0,q),_.lineTo(O,q),_.stroke();let he=q/32%2===0?0:32;for(let V=he;V<O;V+=64)_.beginPath(),_.moveTo(V,q),_.lineTo(V,q+32),_.stroke()}}),T=ut(256,256,(_,O,W)=>{for(let q=0;q<8;q++)_.fillStyle=q%2===0?"#286ab0":"#f7f9fb",_.fillRect(q*32,0,32,W)},{repeat:[2,1]}),N=ut(512,256,(_,O,W)=>{_.fillStyle="#f2f6f9",_.fillRect(0,0,O,W),_.fillStyle="#24528e",_.fillRect(0,14,O,20),_.fillRect(0,W-32,O,18);for(let q=32;q<O;q+=64)_.beginPath(),_.arc(q,W/2,22,0,Math.PI*2),_.strokeStyle="#24528e",_.lineWidth=6,_.stroke(),_.beginPath(),_.arc(q,W/2,8,0,Math.PI*2),_.fillStyle="#3b73b5",_.fill()}),G=ut(384,240,(_,O,W)=>{_.fillStyle="#eef7ec",_.fillRect(0,0,O,W),_.fillStyle="#1d7a3d",_.fillRect(0,0,O,58),_.fillStyle="#266cb2",_.fillRect(0,182,O,58),_.fillStyle="#ffffff",_.font=`700 28px ${je}`,_.textAlign="center",_.fillText("THU\u1ED0C BVTV",O/2,40),_.fillStyle="#1d6e3a",_.fillRect(54,78,60,84),_.fillStyle="#2d82c4",_.fillRect(162,78,60,84),_.fillStyle="#e08e26",_.fillRect(270,78,60,84)}),X=ut(256,256,(_,O,W)=>{_.fillStyle="#e5e0d4",_.fillRect(0,0,O,W),_.strokeStyle="#c8c1b2",_.lineWidth=3;for(let q=0;q<W;q+=64)for(let he=0;he<O;he+=64)_.strokeRect(he,q,64,64)},{repeat:[6,5]}),U=ut(128,256,(_,O,W)=>{_.fillStyle="#222428",_.fillRect(0,0,O,W),_.strokeStyle="rgba(218, 178, 92, 0.55)",_.lineWidth=2.5;for(let q=0;q<9;q++)_.beginPath(),_.moveTo(q*27%O,q*31%W),_.bezierCurveTo(O*.3,q*41%W,O*.7,(q*53+40)%W,(q*19+80)%O,(q*29+90)%W),_.stroke()}),H=ut(512,256,(_,O,W)=>{_.fillStyle="#f8faf8",_.fillRect(0,0,O,W),_.fillStyle="#4aa6e0",_.beginPath(),_.moveTo(0,200),_.quadraticCurveTo(180,178,320,224),_.lineTo(0,W),_.closePath(),_.fill(),_.fillStyle="#f2c94c",_.beginPath(),_.moveTo(140,220),_.quadraticCurveTo(320,185,O,215),_.lineTo(O,W),_.lineTo(140,W),_.closePath(),_.fill(),_.fillStyle="#189642",_.beginPath(),_.moveTo(210,232),_.quadraticCurveTo(370,192,O,210),_.lineTo(O,W),_.lineTo(210,W),_.closePath(),_.fill(),_.fillStyle="#48a4e0",_.beginPath(),_.arc(146,118,32,0,Math.PI*2),_.fill(),_.fillStyle="#189642",_.beginPath(),_.arc(130,128,18,0,Math.PI*2),_.fill(),_.fillStyle="#f2b824",_.beginPath(),_.arc(146,98,12,0,Math.PI*2),_.fill(),_.fillStyle="#168a3d",_.font=`700 62px ${je}`,_.textAlign="left",_.fillText("hoptri",194,118),_.font=`700 42px ${je}`,_.fillText("summit",196,158)}),ne=(_,O,W,q="")=>ut(256,96,(he,V,z)=>{he.fillStyle=_,he.fillRect(0,0,V,z),he.fillStyle=O,he.font=`700 36px ${je}`,he.textAlign="center",he.fillText(W,V/2,q?48:62),q&&(he.font=`600 20px ${je}`,he.fillText(q,V/2,78))}),J=ne("#1e883e","#ffffff","BAYER","TI\xCAU CHU\u1EA8N"),pe=ne("#f2d03b","#145c2c","hoptri","summit"),_e=ne("#f6efe8","#c82820","HB-101","NH\u1EACT B\u1EA2N"),ve=ut(256,128,(_,O,W)=>{_.fillStyle="#d4b483",_.fillRect(0,0,O,W),_.fillStyle="#2c8442",_.fillRect(O-26,0,26,W),_.fillStyle="#b83226",_.fillRect(22,18,120,26),_.fillStyle="#383028",_.fillRect(22,56,160,12),_.fillRect(22,78,110,10)}),Le=ut(128,128,(_,O,W)=>{_.fillStyle="#34a853",_.fillRect(0,0,O,W),_.fillStyle="#f8faf8",_.beginPath(),_.arc(64,64,48,0,Math.PI*2),_.fill(),_.strokeStyle="#22262a",_.lineWidth=4,_.stroke(),_.strokeStyle="#d62828",_.lineWidth=5,_.beginPath(),_.moveTo(64,64),_.lineTo(64,24),_.stroke()}),He=ut(256,192,(_,O,W)=>{_.fillStyle="#194f7a",_.fillRect(0,0,O,W),_.fillStyle="#2e8c46",_.fillRect(0,118,O,34),_.fillStyle="#ffffff",_.font=`700 32px ${je}`,_.textAlign="center",_.fillText("MOVENTO",O/2,76),_.fillStyle="#f5d04c",_.font=`700 20px ${je}`,_.fillText("\u0110\u1EB6C TR\u1ECA R\u1EC6P S\xC1P",O/2,142)}),re={slabEarth:e(7233360),slabRim:e(9338476),grassVerge:n(16777215,{map:w}),grassBund:e(6064952,{stroke:.0012}),riceField:n(16777215,{map:I}),riceBlade:n(16777215,{side:vt}),ditchWater:n(5545648),woodPlank:e(10187339,{stroke:.0015}),asphalt:n(16777215,{map:P}),roadStripe:n(16239698),concrete:n(16777215,{map:d}),concreteDark:n(11576982),courtyardTile:n(16777215,{map:v}),shopFloor:n(16777215,{map:X}),warehouseEarthFloor:n(16777215,{map:x}),skylightGlow:s.flat(16776168),sunbeam:new St({color:16773304,transparent:!0,opacity:.14,depthWrite:!1,side:vt}),shopWallBlue:e(14083824,{stroke:.001}),creamWall:e(16777215,{map:u,stroke:.0012}),graniteDark:e(16777215,{map:U,stroke:.0011}),hoptriDesk:e(16777215,{map:H,stroke:.0016}),deskGreenTop:e(2652230,{stroke:.0015}),moventoPoster:n(16777215,{map:He}),cabBayer:n(16777215,{map:J}),cabHoptri:n(16777215,{map:pe}),cabHb101:n(16777215,{map:_e}),cabGlass:n(14412016),cartonBox:e(16777215,{map:ve,stroke:.0015}),basketRed:e(14038060,{stroke:.0013}),basketPink:e(15110312,{stroke:.0013}),basketBlue:e(11059932,{stroke:.0013}),basketMint:e(8966056,{stroke:.0013}),basketWhite:e(15396079,{stroke:.0013}),bottleOrange:t(15235620,{stroke:.001}),bottleYellow:t(15450676,{stroke:.001}),bottleBlue:t(2782404,{stroke:.001}),bottleCapRed:t(14166048,{stroke:.001}),bagKraft:e(13149298,{stroke:.0014}),bagGreen:e(2263102,{stroke:.0014}),bagYara:e(15922418,{stroke:.0014}),bagSilver:e(8160396,{stroke:.0014}),bagBlue:e(2781112,{stroke:.0014}),bagOrange:e(14840872,{stroke:.0014}),dollyRed:t(13117986,{stroke:.0014}),syngentaGreen:e(2660932,{stroke:.0014}),sackOrange:e(14445350,{stroke:.0016}),scaleGreen:e(3185740,{stroke:.0014}),scaleDial:n(16777215,{map:Le}),woodChairDark:e(6893602,{stroke:.0015}),steelInox:e(13620956,{stroke:.0015}),leatherChair:e(2500910,{stroke:.0016}),stoneBase:e(7172985),pillarBeige:e(16777215,{map:M,stroke:.0018}),pillarBand:e(7103320,{stroke:.001}),metalRoof:e(16777215,{map:f,stroke:.0011}),roofUnder:n(5397090),terracotta:e(16777215,{map:B,stroke:.0012}),terracottaRidge:e(12078124,{stroke:.0011}),shutterGreen:e(2644546,{stroke:.0018}),steelPost:t(599e4),wroughtIron:t(2435374,{stroke:.0012}),goldFinial:t(14461240,{stroke:.0012}),awningStripe:e(16777215,{map:T,stroke:.0016}),windowGlass:n(16777215,{map:a}),shutterBlue:e(16777215,{map:l,stroke:.0014}),timberDark:e(2964056,{stroke:.0014}),upperSign:e(16777215,{map:g,stroke:.0018}),lowerSign:e(16777215,{map:p,stroke:.0016}),archHeader:e(16777215,{map:b,stroke:.0018}),medallion:e(16777215,{map:S,stroke:.0016}),pillarWrap:e(16777215,{map:y,stroke:.0016}),signBack:e(5265504),poster:n(16777215,{map:G}),benchWhite:e(15921128),tarpaulinBlue:e(2452672),sackWhite:e(15657696),sackGreenStripe:e(2655300),bucketWhite:e(15922422),bucketLidBlue:e(2384555),bottleWhite:t(16054008,{stroke:.0011}),bottleCapGreen:t(2132036,{stroke:.0011}),counterWood:e(10383432),plasticRed:e(13579820),waterBlue:n(7650536),ceramicPot:e(16777215,{map:N,stroke:.0014}),bonsaiBark:e(16777215,{map:m,stroke:.0012}),animeLeafCard:n(16777215,{map:c,alphaTest:.42,side:vt}),animeBlossomCard:n(16777215,{map:h,alphaTest:.42,side:vt}),animePalmCard:n(16777215,{map:o,alphaTest:.42,side:vt}),animePalmCardLight:n(14483370,{map:o,alphaTest:.42,side:vt}),bonsaiLeaf:n(16777215,{map:c,alphaTest:.42,side:vt}),bonsaiLeafLight:n(10216104,{map:c,alphaTest:.42,side:vt}),palmTrunk:e(16777215,{map:ut(128,256,(_,O,W)=>{_.fillStyle="#8b7358",_.fillRect(0,0,O,W);for(let q=0;q<W;q+=16)_.fillStyle=q%32===0?"#735c44":"#9c8366",_.fillRect(0,q,O,6),_.fillStyle="rgba(54, 40, 28, 0.42)",_.fillRect(0,q+6,O,2)},{repeat:[1,3]}),stroke:.0012}),arecaTrunk:e(16777215,{map:ut(128,256,(_,O,W)=>{_.fillStyle="#a9b398",_.fillRect(0,0,O,W);for(let q=0;q<W;q+=20)_.fillStyle="#d4d8c5",_.fillRect(0,q,O,3),_.fillStyle="#89967a",_.fillRect(0,q+3,O,4)},{repeat:[1,4]}),stroke:.001}),arecaCrownshaft:e(5415756,{stroke:.001}),arecaNut:n(8045640),palmFrond:n(16777215,{map:o,alphaTest:.42,side:vt}),coconutGreen:n(5410632),coconutGold:n(13216068),bananaLeaf:n(4890216,{side:vt}),treeCanopyDark:n(10011276,{map:c,alphaTest:.42,side:vt}),treeCanopyMid:n(16777215,{map:c,alphaTest:.42,side:vt}),treeCanopyLight:n(16056274,{map:c,alphaTest:.42,side:vt}),flowerPink:n(15895364),flowerYellow:n(16764784),poleConcrete:e(10134710,{stroke:.0012}),wireBlack:n(1780552),skinTones:[e(15449504),e(14592382),e(13735274)],hair:[e(2301984),e(3879467)],cloth:{navy:e(3034744),blueWork:e(5078192),teal:e(2915440),poloCream:e(15657172),olive:e(6453326),coral:e(13720138),charcoal:e(3685700),brown:e(7229758),rose:e(12342356)},leather:e(5258028),steelDark:e(3817542),chrome:e(14476006),bone:e(16118248),eye:n(2039067),mouth:n(9325636),nonLa:e(14862984)};function ie(_,{tint:O=16774628,stroke:W=.0012,outline:q=!0}={}){return _.traverse(he=>{if(!he.isMesh)return;he.geometry&&!he.geometry.attributes?.normal&&he.geometry.computeVertexNormals();let V=!!he.geometry?.attributes?.color,z=!!he.isSkinnedMesh,D=s.toon(O,{vertexColors:V,outline:z?!1:q,stroke:W});he.material=D,he.castShadow=!0,he.receiveShadow=!0,z&&(he.frustumCulled=!1)}),_}return{mats:re,adaptGlbToToon:ie}}function xh(s,e){if(e===kf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Kr||e===Ca){let t=s.getIndex();if(t===null){let o=[],a=s.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===Kr)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}var Va=class extends oi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new wh(t)}),this.register(function(t){return new Ah(t)}),this.register(function(t){return new Oh(t)}),this.register(function(t){return new Bh(t)}),this.register(function(t){return new Fh(t)}),this.register(function(t){return new Ch(t)}),this.register(function(t){return new Ph(t)}),this.register(function(t){return new Ih(t)}),this.register(function(t){return new Lh(t)}),this.register(function(t){return new Th(t)}),this.register(function(t){return new Dh(t)}),this.register(function(t){return new Rh(t)}),this.register(function(t){return new Uh(t)}),this.register(function(t){return new Nh(t)}),this.register(function(t){return new bh(t)}),this.register(function(t){return new kh(t)}),this.register(function(t){return new Hh(t)})}load(e,t,n,i){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=Pi.extractUrlBase(e);o=Pi.resolveURL(c,this.path)}else o=Pi.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Gr(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===yd){try{o[Qe.KHR_BINARY_GLTF]=new zh(e)}catch(u){i&&i(u);return}r=JSON.parse(o[Qe.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Kh(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case Qe.KHR_MATERIALS_UNLIT:o[u]=new Eh;break;case Qe.KHR_DRACO_MESH_COMPRESSION:o[u]=new Vh(r,this.dracoLoader);break;case Qe.KHR_TEXTURE_TRANSFORM:o[u]=new Gh;break;case Qe.KHR_MESH_QUANTIZATION:o[u]=new Wh;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function qx(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}var Qe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},bh=class{constructor(e){this.parser=e,this.name=Qe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new ke(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Wt);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new $i(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Cn(h),c.distance=u;break;case"spot":c=new Ta(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,hi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}},Eh=class{constructor(){this.name=Qe.KHR_MATERIALS_UNLIT}getMaterialType(){return St}extendParams(e,t,n){let i=[];e.color=new ke(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Wt),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,dt))}return Promise.all(i)}},Th=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},wh=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:an}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ce(a,a)}return Promise.all(r)}},Ah=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:an}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},Rh=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:an}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},Ch=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:an}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new ke(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Wt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,dt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},Ph=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:an}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},Ih=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:an}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new ke().setRGB(a[0],a[1],a[2],Wt),Promise.all(r)}},Lh=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:an}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Dh=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:an}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new ke().setRGB(a[0],a[1],a[2],Wt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,dt)),Promise.all(r)}},Nh=class{constructor(e){this.parser=e,this.name=Qe.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:an}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},Uh=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:an}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},Oh=class{constructor(e){this.parser=e,this.name=Qe.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},Bh=class{constructor(e){this.parser=e,this.name=Qe.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Fh=class{constructor(e){this.parser=e,this.name=Qe.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},kh=class{constructor(e){this.name=Qe.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,f,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(d),h,u,f,i.mode,i.filter),d})})}else return null}},Hh=class{constructor(e){this.name=Qe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let c of i.primitives)if(c.mode!==xn.TRIANGLES&&c.mode!==xn.TRIANGLE_STRIP&&c.mode!==xn.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],f=c[0].count,d=[];for(let m of u){let x=new We,g=new L,p=new kt,b=new L(1,1,1),S=new Ks(m.geometry,m.material,f);for(let y=0;y<f;y++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,y),l.SCALE&&b.fromBufferAttribute(l.SCALE,y),S.setMatrixAt(y,x.compose(g,p,b));for(let y in l)if(y==="_COLOR_0"){let B=l[y];S.instanceColor=new Xi(B.array,B.itemSize,B.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&m.geometry.setAttribute(y,l[y]);gt.prototype.copy.call(S,m),this.parser.assignFinalMaterial(S),d.push(S)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}},yd="glTF",jr=12,pd={JSON:1313821514,BIN:5130562},zh=class{constructor(e){this.name=Qe.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,jr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==yd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-jr,r=new DataView(e,jr),o=0;for(;o<i;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===pd.JSON){let c=new Uint8Array(e,jr+o,a);this.content=n.decode(c)}else if(l===pd.BIN){let c=jr+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Vh=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Qe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let h in o){let u=Yh[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=Yh[h]||h.toLowerCase();if(o[h]!==void 0){let f=n.accessors[e.attributes[h]],d=rr[f.componentType];c[u]=d.name,l[u]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){i.decodeDracoFile(h,function(d){for(let m in d.attributes){let x=d.attributes[m],g=l[m];g!==void 0&&(x.normalized=g)}u(d)},a,c,Wt,f)})})}},Gh=class{constructor(){this.name=Qe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Wh=class{constructor(){this.name=Qe.KHR_MESH_QUANTIZATION}},Ga=class extends Ai{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=i-t,u=(n-t)/h,f=u*u,d=f*u,m=e*c,x=m-c,g=-2*d+3*f,p=d-f,b=1-g,S=p-f+u;for(let y=0;y!==a;y++){let B=o[x+y+a],P=o[x+y+l]*h,I=o[m+y+a],w=o[m+y]*h;r[y]=b*B+S*P+g*I+p*w}return r}},Kx=new kt,Xh=class extends Ga{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return Kx.fromArray(r).normalize().toArray(r),r}},xn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},rr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},md={9728:Bt,9729:Zt,9984:Qc,9985:br,9986:Ts,9987:Dn},gd={33071:Jn,33648:Pr,10497:On},vh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Yh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ii={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Zx={CUBICSPLINE:void 0,LINEAR:zs,STEP:Hs},Mh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function $x(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Js({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Un})),s.DefaultMaterial}function ts(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function hi(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Jx(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(n){let f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;o.push(f)}if(i){let f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;a.push(f)}if(r){let f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],f=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function jx(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Qx(s){let e,t=s.extensions&&s.extensions[Qe.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Sh(t.attributes):e=s.indices+":"+Sh(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Sh(s.targets[n]);return e}function Sh(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function qh(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function e1(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var t1=new We,Kh=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new qx,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new ba(this.options.manager):this.textureLoader=new wa(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Gr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return ts(r,a,i),hi(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,h]of o.children.entries())r(h,a.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Qe.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,o){n.load(Pi.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let o=vh[i.type],a=rr[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new At(c,o,l))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=vh[i.type],c=rr[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0,x,g;if(d&&d!==u){let p=Math.floor(f/d),b="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count,S=t.cache.get(b);S||(x=new c(a,p*d,i.count*d/h),S=new Xs(x,d/h),t.cache.add(b,S)),g=new Wi(S,l,f%d/h,m)}else a===null?x=new c(i.count*l):x=new c(a,f,i.count*l),g=new At(x,l,m);if(i.sparse!==void 0){let p=vh.SCALAR,b=rr[i.sparse.indices.componentType],S=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,B=new b(o[1],S,i.sparse.count*p),P=new c(o[2],y,i.sparse.count*l);a!==null&&(g=new At(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let I=0,w=B.length;I<w;I++){let v=B[I];if(g.setX(v,P[I*l]),l>=2&&g.setY(v,P[I*l+1]),l>=3&&g.setZ(v,P[I*l+2]),l>=4&&g.setW(v,P[I*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let f=(r.samplers||{})[o.sampler]||{};return h.magFilter=md[f.magFilter]||Zt,h.minFilter=md[f.minFilter]||Dn,h.wrapS=gd[f.wrapS]||On,h.wrapT=gd[f.wrapT]||On,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Bt&&h.minFilter!==Zt,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let o=i.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(u){c=!0;let f=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(u){return new Promise(function(f,d){let m=f;t.isImageBitmapLoader===!0&&(m=function(x){let g=new Ft(x);g.needsUpdate=!0,f(g)}),t.load(Pi.resolveURL(u,r.path),m,void 0,d)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),hi(u,o),u.userData.mimeType=o.mimeType||e1(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Qe.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[Qe.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[Qe.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Yi,qt.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Or,qt.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Js}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],o,a={},l=r.extensions||{},c=[];if(l[Qe.KHR_MATERIALS_UNLIT]){let u=i[Qe.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new ke(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let f=u.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],Wt),a.opacity=f[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,dt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=vt);let h=r.alphaMode||Mh.OPAQUE;if(h===Mh.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Mh.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==St&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new ce(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==St&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==St){let u=r.emissiveFactor;a.emissive=new ke().setRGB(u[0],u[1],u[2],Wt)}return r.emissiveTexture!==void 0&&o!==St&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,dt)),Promise.all(c).then(function(){let u=new o(a);return r.name&&(u.name=r.name),hi(u,r),t.associations.set(u,{materials:e}),r.extensions&&ts(i,u,r),u})}createUniqueName(e){let t=ft.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[Qe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return _d(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],h=Qx(c),u=i[h];if(u)o.push(u.promise);else{let f;c.extensions&&c.extensions[Qe.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=_d(new Mt,c,t),i[h]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let h=o[l].material===void 0?$x(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let d=0,m=h.length;d<m;d++){let x=h[d],g=o[d],p,b=c[d];if(g.mode===xn.TRIANGLES||g.mode===xn.TRIANGLE_STRIP||g.mode===xn.TRIANGLE_FAN||g.mode===void 0)p=r.isSkinnedMesh===!0?new ia(x,b):new xe(x,b),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===xn.TRIANGLE_STRIP?p.geometry=xh(p.geometry,Ca):g.mode===xn.TRIANGLE_FAN&&(p.geometry=xh(p.geometry,Kr));else if(g.mode===xn.LINES)p=new aa(x,b);else if(g.mode===xn.LINE_STRIP)p=new Zs(x,b);else if(g.mode===xn.LINE_LOOP)p=new la(x,b);else if(g.mode===xn.POINTS)p=new $s(x,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&jx(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),hi(p,r),g.extensions&&ts(i,p,g),t.assignFinalMaterial(p),u.push(p)}for(let d=0,m=u.length;d<m;d++)t.associations.set(u[d],{meshes:e,primitives:d});if(u.length===1)return r.extensions&&ts(i,u[0],r),u[0];let f=new Ie;r.extensions&&ts(i,f,r),t.associations.set(f,{meshes:e});for(let d=0,m=u.length;d<m;d++)f.add(u[d]);return f})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Lt(Qi.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Ws(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),hi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),o=i,a=[],l=[];for(let c=0,h=o.length;c<h;c++){let u=o[c];if(u){a.push(u);let f=new We;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new sa(a,l)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let u=0,f=i.channels.length;u<f;u++){let d=i.channels[u],m=i.samplers[d.sampler],x=d.target,g=x.node,p=i.parameters!==void 0?i.parameters[m.input]:m.input,b=i.parameters!==void 0?i.parameters[m.output]:m.output;x.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",b)),c.push(m),h.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let f=u[0],d=u[1],m=u[2],x=u[3],g=u[4],p=[];for(let b=0,S=f.length;b<S;b++){let y=f[b],B=d[b],P=m[b],I=x[b],w=g[b];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();let v=n._createAnimationTracks(y,B,P,I,w);if(v)for(let M=0;M<v.length;M++)p.push(v[M])}return new js(r,void 0,p)})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));let l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let h=c[0],u=c[1],f=c[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,t1)});for(let d=0,m=u.length;d<m;d++)h.add(u[d]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new Ur:c.length>1?h=new Ie:c.length===1?h=c[0]:h=new gt,h!==c[0])for(let u=0,f=c.length;u<f;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),hi(h,r),r.extensions&&ts(n,h,r),r.matrix!==void 0){let u=new We;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new Ie;n.name&&(r.name=i.createUniqueName(n.name)),hi(r,n),n.extensions&&ts(t,r,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);let c=h=>{let u=new Map;for(let[f,d]of i.associations)(f instanceof qt||f instanceof Ft)&&u.set(f,d);return h.traverse(f=>{let d=i.associations.get(f);d!=null&&u.set(f,d)}),u};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){let o=[],a=e.name?e.name:e.uuid,l=[];Ii[r.path]===Ii.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(Ii[r.path]){case Ii.weights:c=ii;break;case Ii.rotation:c=si;break;case Ii.position:case Ii.scale:c=ri;break;default:switch(n.itemSize){case 1:c=ii;break;case 2:case 3:default:c=ri;break}break}let h=i.interpolation!==void 0?Zx[i.interpolation]:zs,u=this._getArrayFromAccessor(n);for(let f=0,d=l.length;f<d;f++){let m=new c(l[f]+"."+Ii[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),o.push(m)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=qh(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof si?Xh:Ga;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function n1(s,e,t){let n=e.attributes,i=new $t;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new L(l[0],l[1],l[2]),new L(c[0],c[1],c[2])),a.normalized){let h=qh(rr[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new L,l=new L;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let f=t.json.accessors[u.POSITION],d=f.min,m=f.max;if(d!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(m[2]))),f.normalized){let x=qh(rr[f.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;let o=new on;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function _d(s,e,t){let n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(let o in n){let a=Yh[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){let o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return tt.workingColorSpace!==Wt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${tt.workingColorSpace}" not supported.`),hi(s,e),n1(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Jx(s,e.targets,t):s})}function zn(s,e){return new Promise((t,n)=>{s.load(e,i=>t(i),void 0,i=>n(i))})}function or(s,e){s.updateMatrixWorld(!0);let t=new $t().setFromObject(s);Number.isFinite(t.min.y)&&(s.position.y+=e-t.min.y)}async function xd(s,e){let t=new Va,n=[],i={dogRoot:null,dogBaseY:me.YARD_Y,carriedSackProto:null,chars:null};try{let r=await zn(t,"./public/assets/delivery-moped-1aa2ce.glb"),o=e(r.scene.clone(!0),{tint:14411509,stroke:.0024});o.scale.setScalar(.95),o.position.set(-5.15,me.WALK_Y,2.28),o.rotation.y=.62,or(o,me.WALK_Y),s.add(o);let a=e(r.scene.clone(!0),{tint:16046290,stroke:.0024});a.scale.setScalar(.95),a.position.set(-4.35,me.WALK_Y,2.38),a.rotation.y=.48,or(a,me.WALK_Y),s.add(a),n.push("delivery-moped-1aa2ce (x2)")}catch(r){console.warn("Failed to load delivery-moped-1aa2ce:",r)}try{let r=await zn(t,"./public/assets/hemp-grain-sack-f91edc.glb"),o=[[-9.15,me.WALK_Y,1.32,.2,.72],[-8.62,me.WALK_Y,1.38,-.35,.72],[-8.88,me.WALK_Y+.56,1.35,.15,.68],[-9.35,me.WALK_Y,1.85,.5,.7],[-8.75,me.WALK_Y,1.88,-.1,.7],[-9.08,me.WALK_Y+.52,1.86,.3,.66],[-7.25,me.SHOP_Y,-.45,.4,.68],[-6.72,me.SHOP_Y,-.48,-.25,.68]];for(let[l,c,h,u,f]of o){let d=e(r.scene.clone(!0),{tint:16184298,stroke:.0022});d.scale.setScalar(f),d.position.set(l,c,h),d.rotation.y=u,(c===me.WALK_Y||c===me.SHOP_Y)&&or(d,c),s.add(d)}let a=e(r.scene.clone(!0),{tint:16184298,stroke:.002});a.scale.setScalar(.46),i.carriedSackProto=a,n.push("hemp-grain-sack-f91edc (x8 + carry)")}catch(r){console.warn("Failed to load hemp-grain-sack-f91edc:",r)}try{let r=await zn(t,"./public/assets/reagent-bottle-shelf-8fd723.glb"),o=[[.48,me.SHOP_Y+1.15,-2.55,-Math.PI*.5,1.2],[.48,me.SHOP_Y+1.15,-3.75,-Math.PI*.5,1.2],[-8.35,me.SHOP_Y+2.15,-18.38,0,1.2]];for(let[a,l,c,h,u]of o){let f=e(r.scene.clone(!0),{tint:16777215,stroke:.0018});f.scale.setScalar(u),f.position.set(a,l,c),f.rotation.y=h,s.add(f)}n.push("reagent-bottle-shelf-8fd723 (x3)")}catch(r){console.warn("Failed to load reagent-bottle-shelf-8fd723:",r)}try{let r=await zn(t,"./public/assets/potted-shrub-43bd21.glb"),o=e(r.scene.clone(!0),{tint:16056296,outline:!1});o.scale.setScalar(.92),o.position.set(7.45,me.YARD_Y,.25),or(o,me.YARD_Y),s.add(o);let a=e(r.scene.clone(!0),{tint:16056296,outline:!1});a.scale.setScalar(.85),a.position.set(-10.15,me.WALK_Y,-1.25),or(a,me.WALK_Y),s.add(a),n.push("potted-shrub-43bd21 (x2)")}catch(r){console.warn("Failed to load potted-shrub-43bd21:",r)}try{let r=await zn(t,"./public/assets/farm-dog-723730.glb"),o=new Ie,a=e(r.scene.clone(!0),{tint:16777215,stroke:.0024});a.scale.setScalar(.82),or(a,0),o.add(a),o.position.set(3.9,me.YARD_Y,-.05),s.add(o),i.dogRoot=o,n.push("farm-dog-723730 (x1)")}catch(r){console.warn("Failed to load farm-dog-723730:",r)}try{let[r,o,a,l,c]=await Promise.all([zn(t,"./public/assets/shopkeeper-be5547.glb"),zn(t,"./public/assets/farmer-304a43.glb"),zn(t,"./public/assets/village-mechanic-508a0a.glb"),zn(t,"./public/assets/flower-vendor-bc708b.glb"),zn(t,"./public/assets/village-gardener-9f7af6.glb")]),h=(f,d=.96)=>{let m=e(f.scene,{tint:16774888,outline:!1});return m.scale.setScalar(d),m},u=c.animations?.find(f=>/walk/i.test(f.name))||c.animations?.[0]||null;i.chars={shopkeeper:h(r,.96),farmer:h(o,.95),helper:h(a,.94),villager:h(l,.93),player:h(c,.95),walkClip:u},n.push("shopkeeper-be5547","farmer-304a43","village-mechanic-508a0a","flower-vendor-bc708b","village-gardener-9f7af6")}catch(r){console.warn("Failed to load Polyfork 3D characters:",r)}return{loaded:n,handles:i}}var Pn=18;function i1(s,e){let t=new xe(new Rn(.28,.16,16,1,!0),e.nonLa);t.position.set(0,.21,.01),t.rotation.x=-.08,t.castShadow=!0,s.add(t);let n=new xe(new Rn(.275,.155,16,1,!0),e.nonLa);n.position.set(0,.208,.01),n.rotation.x=-.08,n.scale.set(-1,1,1),s.add(n)}function vd(s){let e=new Ie,t=new xe(new Rt(.16,.24,.12),s.bottleWhite);t.castShadow=!0,e.add(t);let n=new xe(new Rt(.165,.1,.125),s.bottleCapGreen);e.add(n);let i=new xe(new _t(.03,.03,.05,8),s.bottleCapGreen);return i.position.y=.145,e.add(i),e}function s1(s){let e=new Ie,t=new xe(new _t(.012,.012,.14,6),s.bonsaiBark);t.position.y=.05,e.add(t);let n=new xe(new _t(.13,.13,.014,10),s.nonLa);return n.rotation.x=Math.PI*.5,n.position.y=.2,e.add(n),e}function Wa(s,e=!1){let t=Math.sin(s),n=Math.cos(s);return{torso:[.05,-t*.06,0],head:[-.03,t*.04,0],hipL:[-t*.52,0,0],hipR:[t*.52,0,0],kneeL:[Math.max(0,n*.55)+.06,0,0],kneeR:[Math.max(0,-n*.55)+.06,0,0],shoulderL:e?[-.72,0,.18]:[t*.42,0,.06],shoulderR:e?[-.72,0,-.18]:[-t*.42,0,-.06],elbowL:e?[-.85,0,0]:[-.22-Math.max(0,-t)*.25,0,0],elbowR:e?[-.85,0,0]:[-.22-Math.max(0,t)*.25,0,0]}}function Li(s,e){let t=0,n=[];for(let r=0;r<s.length-1;r++){let o=s[r],a=s[r+1],l=Math.hypot(a[0]-o[0],a[1]-o[1]);n.push({a:o,b:a,d:l}),t+=l}let i=Math.max(0,Math.min(1,e))*t;for(let r of n){if(i<=r.d||r===n[n.length-1]){let o=r.d>1e-5?i/r.d:0,a=r.a[0]+(r.b[0]-r.a[0])*o,l=r.a[1]+(r.b[1]-r.a[1])*o,c=Math.atan2(r.b[0]-r.a[0],r.b[1]-r.a[1]);return{x:a,z:l,yaw:c}}i-=r.d}return{x:s[0][0],z:s[0][1],yaw:0}}function Md(s,e,t={}){let n=es(e,{skin:e.skinTones[0],hair:e.hair[0],hairStyle:"ponytail",top:e.cloth.poloCream,bottom:e.cloth.charcoal,sleeve:"short",scale:[.96,.96,.96]});n.group.position.set(-.88,me.SHOP_Y,-2.28),n.group.rotation.y=.08,s.add(n.group);let i=es(e,{skin:e.skinTones[2],hair:e.hair[0],top:e.cloth.blueWork,bottom:e.cloth.navy,sleeve:"long",scale:[.95,.95,.95]});i1(i.joints.head,e);let r=vd(e);r.position.set(0,-.18,.1),i.joints.wristR.add(r),s.add(i.group);let o=[[-3.35,2.38],[1.15,2.38],[1.15,.35],[-.95,.05]],a=[...o].reverse(),l=es(e,{skin:e.skinTones[1],hair:e.hair[1],top:e.cloth.olive,bottom:e.cloth.charcoal,sleeve:"short",scale:[.94,.94,.94]}),c;t.carriedSackProto?(c=t.carriedSackProto.clone(!0),c.position.set(0,.12,.34)):(c=new xe(new Rt(.36,.44,.22),e.sackWhite),c.position.set(0,.24,.32),c.castShadow=!0),l.joints.torso.add(c),s.add(l.group);let h=[[-5.85,1.45],[-5.45,.45],[-4.35,.15]],u=[...h].reverse(),f=es(e,{skin:e.skinTones[0],hair:e.hair[1],hairStyle:"bob",top:e.cloth.coral,bottom:e.cloth.navy,sleeve:"short",scale:[.94,.94,.94]});f.group.position.set(6.05,me.WALK_Y,2.24),f.group.rotation.y=.05,f.joints.pelvis.position.y=.56;let d=s1(e);d.position.set(0,-.14,.05),d.rotation.x=.4,f.joints.wristR.add(d),s.add(f.group);let m=null;function x(p){let b=p?.chars;if(!b)return;n.group.visible=!1,i.group.visible=!1,l.group.visible=!1,f.group.visible=!1;let S=(ne,J)=>{if(!J)return null;let pe=new er(ne),_e=pe.clipAction(J);return _e.play(),{mixer:pe,action:_e}},y=b.shopkeeper;y.position.set(-.88,me.SHOP_Y,-2.28),y.rotation.y=.08,s.add(y);let B=b.farmer,P=B.getObjectByName("Head");if(P){let ne=new xe(new Rn(.28,.16,16,1,!0),e.nonLa);ne.position.set(0,.18,.01),ne.rotation.x=-.06,ne.castShadow=!0,P.add(ne)}let I=vd(e),w=B.getObjectByName("RightHand");w&&(I.position.set(0,.08,.06),w.add(I)),s.add(B);let v=S(B,b.walkClip),M=b.helper,T=p.carriedSackProto?p.carriedSackProto.clone(!0):new xe(new Rt(.36,.44,.22),e.sackWhite),N=M.getObjectByName("Spine2")||M;T.position.set(0,.08,.34),N.add(T),s.add(M);let G=S(M,b.walkClip),X=b.villager;X.position.set(6.05,me.WALK_Y-.31,2.26),X.rotation.y=.04;let U=ne=>X.getObjectByName(ne);U("LeftUpLeg")&&U("LeftUpLeg").rotation.set(-1.46,.08,0),U("RightUpLeg")&&U("RightUpLeg").rotation.set(-1.46,-.08,0),U("LeftLeg")&&U("LeftLeg").rotation.set(1.46,0,0),U("RightLeg")&&U("RightLeg").rotation.set(1.46,0,0),U("LeftArm")&&U("LeftArm").rotation.set(-.25,.18,-1.24),U("RightArm")&&U("RightArm").rotation.set(-.28,-.18,1.24),U("LeftForeArm")&&U("LeftForeArm").rotation.set(0,.72,-.12),U("RightForeArm")&&U("RightForeArm").rotation.set(0,-.72,.12),s.add(X);let H=ne=>y.getObjectByName(ne);H("LeftArm")&&H("LeftArm").rotation.set(-.14,.12,-1.26),H("RightArm")&&H("RightArm").rotation.set(-.14,-.12,1.26),H("LeftForeArm")&&H("LeftForeArm").rotation.set(0,.45,0),H("RightForeArm")&&H("RightForeArm").rotation.set(0,-.45,0),m={keeper:y,keeperHead:H("Head"),keeperSpine:H("Spine1"),keeperRightArm:H("RightArm"),keeperRightForeArm:H("RightForeArm"),farmer:B,farmerAnim:v,farmerHead:P,jug:I,helper:M,helperAnim:G,sack:T,villager:X,villagerHead:U("Head"),villagerSpine:U("Spine1"),villagerRightForeArm:U("RightForeArm")}}function g(p,b={},S=1/60){let y=(p%Pn+Pn)%Pn/Pn,B=Math.PI*2;if(m){let I=!1;if(y<.38){let N=Li(o,y/.38);m.farmer.position.set(N.x,N.z<1.1?me.SHOP_Y:me.WALK_Y,N.z),m.farmer.rotation.y=N.yaw,m.jug.visible=!1,I=!0}else if(y<.56){let N=(y-.38)/.18;m.farmer.position.set(-.95,me.SHOP_Y,.05),m.farmer.rotation.y=Math.PI,m.jug.visible=N>.5}else if(y<.94){let N=Li(a,(y-.56)/.38);m.farmer.position.set(N.x,N.z<1.1?me.SHOP_Y:me.WALK_Y,N.z),m.farmer.rotation.y=N.yaw,m.jug.visible=!0,I=!0}else m.farmer.position.set(-3.35,me.WALK_Y,2.38),m.farmer.rotation.y=-Math.PI*.5,m.jug.visible=!0;m.farmerAnim&&(m.farmerAnim.action.timeScale=I?1.15:0,I||(m.farmerAnim.action.time=0),m.farmerAnim.mixer.update(S));let v=y>=.36&&y<=.58?Math.sin((y-.36)/.22*Math.PI):0;m.keeperSpine&&(m.keeperSpine.rotation.y=Math.sin(p*.9)*.08),m.keeperHead&&(m.keeperHead.rotation.y=Math.sin(p*1.4)*.16),m.keeperRightArm&&m.keeperRightArm.rotation.set(-.14-.55*v,-.12,1.26-.18*v),m.keeperRightForeArm&&m.keeperRightForeArm.rotation.set(0,-.45-.35*v,0);let M=(p+4.5)%Pn/Pn,T=!1;if(M<.42){let N=Li(h,M/.42);m.helper.position.set(N.x,N.z<.6?me.SHOP_Y:me.WALK_Y,N.z),m.helper.rotation.y=N.yaw,m.sack.visible=!0,T=!0}else if(M<.54)m.helper.position.set(-4.35,me.SHOP_Y,.15),m.helper.rotation.y=Math.PI*.75,m.sack.visible=M<.48;else if(M<.92){let N=Li(u,(M-.54)/.38);m.helper.position.set(N.x,N.z<.6?me.SHOP_Y:me.WALK_Y,N.z),m.helper.rotation.y=N.yaw,m.sack.visible=!1,T=!0}else m.helper.position.set(-5.85,me.WALK_Y,1.45),m.helper.rotation.y=-.6,m.sack.visible=M>.96;m.helperAnim&&(m.helperAnim.action.timeScale=T?1.05:0,T||(m.helperAnim.action.time=0),m.helperAnim.mixer.update(S)),m.villagerSpine&&(m.villagerSpine.rotation.y=Math.sin(p*.65)*.07),m.villagerHead&&(m.villagerHead.rotation.y=Math.sin(p*.95)*.24)}else{if(y<.38){let M=y/.38,T=Li(o,M);i.group.position.set(T.x,T.z<1.1?me.SHOP_Y:me.WALK_Y,T.z),i.group.rotation.y=T.yaw,ln(i,Wa(p*6.2,!1)),r.visible=!1}else if(y<.56){let M=(y-.38)/.18;i.group.position.set(-.95,me.SHOP_Y,.05),i.group.rotation.y=Math.PI;let T=Math.sin(M*Math.PI);ln(i,{torso:[.06*T,0,0],head:[0,Math.sin(p*2.5)*.12,0],shoulderR:[-.75*T,0,-.12],elbowR:[-.65*T,0,0],shoulderL:[-.15,0,.08],elbowL:[-.3,0,0]}),r.visible=M>.5}else if(y<.94){let M=(y-.56)/.38,T=Li(a,M);i.group.position.set(T.x,T.z<1.1?me.SHOP_Y:me.WALK_Y,T.z),i.group.rotation.y=T.yaw;let N=Wa(p*6.2,!1);N.shoulderR=[-.28,0,-.12],N.elbowR=[-.45,0,0],ln(i,N),r.visible=!0}else i.group.position.set(-3.35,me.WALK_Y,2.38),i.group.rotation.y=-Math.PI*.5,ln(i,{torso:[.08,0,0],head:[.05,.1,0],shoulderR:[-.35,0,-.1],elbowR:[-.4,0,0]}),r.visible=!0;let w=y>=.36&&y<=.58?Math.sin((y-.36)/.22*Math.PI):0;ln(n,{torso:[.06*w,Math.sin(p*.9)*.08,0],head:[0,Math.sin(p*1.4)*.16,0],shoulderR:[-.72*w-.12,0,-.1],elbowR:[-.55*w-.25,0,0],shoulderL:[-.22,0,.1],elbowL:[-.35,0,0]});let v=(p+4.5)%Pn/Pn;if(v<.42){let M=Li(h,v/.42);l.group.position.set(M.x,M.z<.6?me.SHOP_Y:me.WALK_Y,M.z),l.group.rotation.y=M.yaw,ln(l,Wa(p*5.6,!0)),c.visible=!0}else if(v<.54){l.group.position.set(-4.35,me.SHOP_Y,.15),l.group.rotation.y=Math.PI*.75;let M=Math.sin((v-.42)/.12*Math.PI);ln(l,{torso:[.42*M,0,0],shoulderL:[-.65,0,.15],shoulderR:[-.65,0,-.15],elbowL:[-.5,0,0],elbowR:[-.5,0,0]}),c.visible=v<.48}else if(v<.92){let M=Li(u,(v-.54)/.38);l.group.position.set(M.x,M.z<.6?me.SHOP_Y:me.WALK_Y,M.z),l.group.rotation.y=M.yaw,ln(l,Wa(p*5.8,!1)),c.visible=!1}else{l.group.position.set(-5.85,me.WALK_Y,1.45),l.group.rotation.y=-.6;let M=Math.sin((v-.92)/.08*Math.PI);ln(l,{torso:[.45*M,0,0],shoulderL:[-.7,0,.15],shoulderR:[-.7,0,-.15]}),c.visible=v>.96}ln(f,{torso:[-.08,Math.sin(p*.7)*.06,0],head:[.04,Math.sin(p*.85)*.22,0],hipL:[-1.46,.06,0],hipR:[-1.46,-.06,0],kneeL:[1.48,0,0],kneeR:[1.48,0,0],shoulderL:[-.25,0,.14],elbowL:[-.75,0,0],shoulderR:[-.55,0,-.14],elbowR:[-1.15,0,0],wristR:[Math.sin(p*5.4)*.42,0,.15]})}let P=b.dogRoot||t.dogRoot;if(P){let I=y*B,w=.72,v=.42,M=4.05+Math.cos(I)*w,T=-.05+Math.sin(I)*v,N=-Math.sin(I)*w,G=Math.cos(I)*v;P.position.set(M,me.YARD_Y+Math.abs(Math.sin(p*7.5))*.045,T),P.rotation.y=Math.atan2(N,G),P.rotation.z=Math.sin(p*7.5)*.04}b.medallionPivot&&(b.medallionPivot.rotation.x=Math.sin(p*1.9)*.09+.03,b.medallionPivot.rotation.z=Math.sin(p*1.3+.7)*.04),b.bonsaiCrowns&&b.bonsaiCrowns.forEach((I,w)=>{I.rotation.z=Math.sin(p*1.5+w*1.7)*.025,I.rotation.x=Math.cos(p*1.2+w)*.018}),b.palmCrowns&&b.palmCrowns.forEach((I,w)=>{I.rotation.z=Math.sin(p*1.35+w*1.4)*.045,I.rotation.x=Math.cos(p*1.05+w*.9)*.03})}return{update:g,attachGlbCast:x}}var Xa=["day","sunset","night"],bd={day:"\u2600 Ban ng\xE0y",sunset:"\u{1F307} Ho\xE0ng h\xF4n",night:"\u{1F319} Ban \u0111\xEAm"};function Sd(s,e){let t=document.createElement("canvas");t.width=64,t.height=64;let n=t.getContext("2d"),i=n.createRadialGradient(32,32,2,32,32,30);i.addColorStop(0,s),i.addColorStop(.35,s),i.addColorStop(1,e),n.fillStyle=i,n.fillRect(0,0,64,64);let r=new ni(t);return r.colorSpace=dt,r}function r1(s,e,t){let n=document.createElement("canvas");n.width=256,n.height=256;let i=n.getContext("2d"),r=i.createRadialGradient(128,128,10,128,128,124);r.addColorStop(0,s),r.addColorStop(.24,s),r.addColorStop(.48,e),r.addColorStop(1,t),i.fillStyle=r,i.fillRect(0,0,256,256),i.save(),i.translate(128,128);for(let a=0;a<12;a++){i.rotate(Math.PI/6);let l=i.createLinearGradient(0,0,120,0);l.addColorStop(0,"rgba(255, 252, 232, 0.32)"),l.addColorStop(1,"rgba(255, 240, 190, 0)"),i.fillStyle=l,i.beginPath(),i.moveTo(0,-4),i.lineTo(122,0),i.lineTo(0,4),i.closePath(),i.fill()}i.restore();let o=new ni(n);return o.colorSpace=dt,o}function Ed(s,e,t,n){let{hemi:i,key:r,fill:o,shopLight1:a,shopLight2:l,shopLight3:c}=n,h=Hn(new St({color:16776696,transparent:!0,opacity:.96}),!1),u=Hn(new St({color:10405620,transparent:!0,opacity:.9}),!1),f=new Ie,d=[],m=[[-26,17.5,-36,2.4,!0],[-11,19.5,-40,2.8,!0],[8,18.8,-42,3.1,!0],[26,17.2,-35,2.5,!0],[-32,15,-18,2,!1],[-28,16.5,-4,1.75,!1],[32,15.5,-20,2.1,!1],[29,16,-2,1.85,!1],[-18,24.5,-26,1.7,!1],[2,26,-28,1.9,!1],[20,24,-24,1.65,!1],[-24,18.5,16,1.8,!1],[24,19,18,1.9,!1],[0,22.5,24,2,!1]],x=new It(1,14,12);for(let V=0;V<m.length;V++){let[z,D,R,ae,$]=m[V],de=new Ie;de.position.set(z,D,R),de.scale.setScalar(ae);let ue=$?[[0,.75,0,1.55,!0],[-1.45,.2,.18,1.22,!1],[1.45,.24,-.14,1.25,!1],[-2.35,-.1,.05,.92,!1],[2.35,-.08,-.05,.95,!1],[.62,1.38,-.12,1.18,!0],[-.65,1.18,.14,1.08,!0],[.05,1.85,.02,.92,!0],[0,-.15,.08,1.48,!1]]:[[0,.48,0,1.38,!0],[-1.3,.1,.15,1.05,!1],[1.3,.14,-.1,1.08,!1],[.48,.8,-.12,.92,!0],[-.5,.66,.1,.86,!0],[0,-.08,.05,1.26,!1]];for(let[we,F,A,E,k]of ue){let j=new xe(x,k?h:u);j.position.set(we,F,A),j.scale.set(E*1.28,E*.72,E*.88),de.add(j)}f.add(de),d.push({g:de,baseX:z,baseY:D,speed:.16+V%4*.05})}s.add(f);let g=new Ie,p=Hn(new St({color:16776424}),!1),b=new xe(new It(2.2,20,18),p);g.add(b);let S=new Ys({map:r1("#fffef2","rgba(255, 224, 130, 0.62)","rgba(255, 196, 92, 0)"),transparent:!0,depthWrite:!1,blending:Ns}),y=new Nr(S);y.scale.set(22,22,1),g.add(y),g.position.set(24,26,-34),s.add(g);let B=Sd("#fffbe8","rgba(255,250,220,0)"),P=160,I=new Float32Array(P*3);for(let V=0;V<P;V++){let z=V*2.39996%(Math.PI*2),D=32+V%7*6;I[V*3]=Math.cos(z)*D,I[V*3+1]=16+V%11*2.1,I[V*3+2]=Math.sin(z)*D-8}let w=new Mt;w.setAttribute("position",new At(I,3));let v=new Yi({map:B,color:16775388,size:.78,transparent:!0,opacity:0,depthWrite:!1,blending:Ns}),M=new $s(w,v);s.add(M);let T=new Ie,N=Hn(new St({color:16774866,transparent:!0,opacity:0}),!1),G=new xe(new It(2,20,18),N);T.add(G);let X=new Ys({map:Sd("#dceeff","rgba(130, 190, 255, 0)"),transparent:!0,opacity:0,depthWrite:!1,blending:Ns}),U=new Nr(X);U.scale.set(14,14,1),T.add(U),T.position.set(-18,22,-32),s.add(T);let H=new It(.065,6,6),ne=Hn(new St({color:16771179,transparent:!0,opacity:.55}),!1),J=36,pe=[],_e=new Ie;for(let V=0;V<J;V++){let z=new xe(H,ne),D=V%3,R,ae;D===0?(R=-11.5+V*1.9%23,ae=-15+V*.7%2.5):D===1?(R=-12+V*.6%3.2,ae=-11.5+V*1.3%10.5):(R=-11+V*2.1%22,ae=7+V*.4%1.4);let $=.55+V%5*.28;z.position.set(R,$,ae),_e.add(z),pe.push({m:z,x:R,y:$,z:ae,phase:V*1.37})}e.add(_e);let ve=Hn(new St({color:16773304}),!1),Le=new xe(new It(.14,8,8),ve);Le.position.set(8.4,7.05,3.96),Le.visible=!1,e.add(Le);let He=new Cn(16764792,0,16,1.5);He.position.set(8.4,6.7,3.96),e.add(He);let re=Hn(new St({color:16765562}),!1),ie=new Ie;for(let V of[-4.2,-2.32,5.9,8.35]){let z=new xe(new Rt(.2,.21,.2),re);z.position.set(V,me.WALK_Y+2.18,1.24),ie.add(z)}ie.visible=!1,e.add(ie);let _=new Cn(16773334,0,14,1.4);_.position.set(-.5,4.8,3),e.add(_);let O="day";function W(V,z,D){!V||!V.emissive||(V.emissive.setHex(z),V.emissiveIntensity=D)}function q(V){O=Xa.includes(V)?V:"day",document.body.dataset.time=O,O==="day"?(i.color.setHex(13625599),i.groundColor.setHex(9348704),i.intensity=1.42,r.color.setHex(16773320),r.intensity=2.45,r.position.set(18,26,18),o.color.setHex(10405108),o.intensity=.78,a.intensity=2,l.intensity=1.6,c.intensity=1.6,He.intensity=0,_.intensity=0,Le.visible=!1,ie.visible=!1,g.visible=!0,g.position.set(24,26,-34),p.color.setHex(16776944),S.color.setHex(16771744),y.scale.set(22,22,1),h.color.setHex(16776696),u.color.setHex(10011378),h.opacity=.96,u.opacity=.9,v.opacity=0,N.opacity=0,X.opacity=0,ne.color.setHex(16776160),ne.opacity=.45,W(t.upperSign,0,0),W(t.lowerSign,0,0),W(t.archHeader,0,0),W(t.medallion,0,0),W(t.windowGlass,16762980,.25)):O==="sunset"?(i.color.setHex(15899772),i.groundColor.setHex(2962016),i.intensity=1.05,r.color.setHex(16748098),r.intensity=2.55,r.position.set(-22,13,14),o.color.setHex(5399736),o.intensity=.75,a.intensity=3.2,l.intensity=2.6,c.intensity=2.4,He.intensity=3.8,_.intensity=2,Le.visible=!0,ie.visible=!0,g.visible=!0,g.position.set(-22,13.5,-36),p.color.setHex(16765048),S.color.setHex(16748104),y.scale.set(28,28,1),h.color.setHex(16763294),u.color.setHex(8147068),h.opacity=.92,u.opacity=.86,v.opacity=.42,N.opacity=.5,X.opacity=.35,ne.color.setHex(16771179),ne.opacity=.7,W(t.upperSign,16773332,.22),W(t.lowerSign,16773332,.18),W(t.archHeader,16751432,.24),W(t.medallion,16734776,.22),W(t.windowGlass,16761420,.72)):(i.color.setHex(2647224),i.groundColor.setHex(991042),i.intensity=.92,r.color.setHex(6599935),r.intensity=1.25,r.position.set(-14,24,-14),o.color.setHex(1988264),o.intensity=.65,a.intensity=5.2,l.intensity=4.2,c.intensity=3.8,He.intensity=7.8,_.intensity=3.4,Le.visible=!0,ie.visible=!0,g.visible=!1,h.color.setHex(2381470),u.color.setHex(1058900),h.opacity=.68,u.opacity=.6,v.opacity=.95,N.opacity=.96,X.opacity=.78,ne.color.setHex(16768092),ne.opacity=.96,W(t.upperSign,16774367,.44),W(t.lowerSign,15660287,.36),W(t.archHeader,16747578,.46),W(t.medallion,16731190,.42),W(t.windowGlass,16761928,.96))}function he(V){for(let z=0;z<d.length;z++){let D=d[z];D.g.position.x=D.baseX+Math.sin(V*D.speed+z*1.4)*1.8,D.g.position.y=D.baseY+Math.cos(V*(D.speed*1.4)+z)*.22}if(g.visible){let D=(O==="sunset"?28:22)+Math.sin(V*1.4)*1.1;y.scale.set(D,D,1)}for(let z=0;z<pe.length;z++){let D=pe[z];D.m.position.x=D.x+Math.sin(V*1.1+D.phase)*.35,D.m.position.y=D.y+Math.sin(V*1.9+D.phase*1.3)*.22,D.m.position.z=D.z+Math.cos(V*.9+D.phase)*.35;let R=.65+.35*Math.sin(V*3.8+D.phase);D.m.scale.setScalar(R)}}return q("day"),{apply:q,next(){let V=(Xa.indexOf(O)+1)%Xa.length;return q(Xa[V]),O},getMode:()=>O,update:he}}var Ya=document.getElementById("stage"),Zh=document.getElementById("fallback"),Qr=document.getElementById("tour-hud"),ar=document.getElementById("cart-pill"),ui=document.getElementById("zone-prompt"),eo=document.getElementById("walk-pad"),ns=document.getElementById("btn-auto-walk"),tn=document.getElementById("shop-modal"),qa=document.getElementById("shop-toast"),to=document.getElementById("btn-pause"),Ka=document.getElementById("btn-time"),is=document.getElementById("btn-roof"),no=document.getElementById("btn-tour"),ss=document.getElementById("btn-view"),$h=document.getElementById("btn-reset");function o1(s){Zh&&(Zh.textContent=s,Zh.hidden=!1)}async function a1(){if(document.fonts)try{await Promise.race([Promise.all([document.fonts.load('500 24px "Space Grotesk"'),document.fonts.load('600 28px "Space Grotesk"'),document.fonts.load('700 64px "Space Grotesk"')]),new Promise(s=>setTimeout(s,1800))])}catch{}}async function l1(){await a1();let s;try{s=new ta({canvas:Ya,antialias:!0,alpha:!0,preserveDrawingBuffer:!0})}catch(D){throw o1("WebGL2 is required to view this diorama."),D}let e=ed(s,{bands:[98,158,216,255],ink:4470058,thickness:.0014,maxDpr:2}),t=new na,n=new Ea(16448767,9144432,1.55);t.add(n);let i=new $i(16774626,2.5);i.position.set(16,28,18),i.castShadow=!0,i.shadow.mapSize.set(2048,2048),i.shadow.camera.near=4,i.shadow.camera.far=80;let r=40;i.shadow.camera.left=-r,i.shadow.camera.right=r,i.shadow.camera.top=r,i.shadow.camera.bottom=-r,i.shadow.bias=-4e-4,i.shadow.normalBias=.025,t.add(i);let o=new $i(13492479,.78);o.position.set(-16,12,-12),t.add(o);let a=new Ie;a.scale.setScalar(sr),t.add(a);let l=new Cn(16773332,2.5,18,1.35);l.position.set(-2.2,2.8,-1.6),a.add(l);let c=new Cn(15660799,2.2,20,1.3);c.position.set(-4.1,2.8,-7.2),a.add(c);let h=new Cn(15660799,2.2,22,1.25);h.position.set(-4.1,2.8,-14.5),a.add(h);let u=new Lt(26,16/9,.45,260),f=new L(-1.2*sr,1.8*sr,-5.8*sr);function d(D,R,ae,$=f){let de=Qi.degToRad(D),ue=Qi.degToRad(R),we=ae*Math.cos(ue);u.position.set($.x+we*Math.sin(de),$.y+ae*Math.sin(ue),$.z+we*Math.cos(de)),u.lookAt($)}d(26,25,78);let m=!0,x=sd(u,Ya,{target:f,minDistance:14,maxDistance:150,minPolarAngle:.22,maxPolarAngle:Math.PI*.485,onChange:()=>{m=!0}}),{mats:g,adaptGlbToToon:p}=dd(e),b=hd(a,g),S=Md(a,g,{}),y=Ed(t,a,g,{hemi:n,key:i,fill:o,shopLight1:l,shopLight2:c,shopLight3:h});$h&&($h.innerHTML=cn("rotateCcw")),is&&(is.innerHTML=cn("layers")),ns&&(ns.innerHTML=cn("compass")),eo?.querySelector(".pad-up")?.replaceChildren();let B=(D,R)=>{let ae=eo?.querySelector(D);ae&&(ae.innerHTML=cn(R))};B(".pad-up","arrowUp"),B(".pad-down","arrowDown"),B(".pad-left","rotateCcw"),B(".pad-right","rotateCw");function P(){if(!Ka)return;let D=y.getMode();Ka.innerHTML=cn(D==="day"?"sun":D==="sunset"?"sunset":"moon"),Ka.title=`${bd[D]||"Ban ng\xE0y"} (N)`}P(),Ka?.addEventListener("click",()=>{y.next(),P(),m=!0});let I=[],w=!1;xd(a,p).then(({loaded:D,handles:R})=>{I=D,R.dogRoot&&(b.dogRoot=R.dogRoot),R.chars&&(S.attachGlbCast(R),ie.setPlayerGlb(R.chars.player,R.chars.walkClip)),w=!0,m=!0});function v(){let D=Ya.getBoundingClientRect(),R=Math.max(1,Math.round(D.width||window.innerWidth)),ae=Math.max(1,Math.round(D.height||window.innerHeight));s.setSize(R,ae,!1),u.aspect=R/ae,u.updateProjectionMatrix(),m=!0}window.addEventListener("resize",v),v();let T=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches??!1,N=null,G=2.4,X=performance.now();function U(){if(!to)return;let D=T||N!==null;to.innerHTML=cn(D?"play":"pause"),to.title=D?"Ti\u1EBFp t\u1EE5c (Space)":"T\u1EA1m d\u1EEBng (Space)",to.setAttribute("aria-pressed",String(D))}U(),to?.addEventListener("click",()=>{N=null,T=!T,X=performance.now(),U()});let H=new Map,ne=null,J=null;function pe(D){return`${D.toLocaleString("vi-VN")}\u0111`}function _e(D){qa&&(qa.textContent=D,qa.hidden=!1,clearTimeout(J),J=setTimeout(()=>{qa.hidden=!0},2800))}function ve(){if(!ar)return;let D=0,R=0;for(let{item:ae,qty:$}of H.values())D+=$,R+=ae.price*$;ar.innerHTML=`${cn("shoppingCart")}${D>0?`<span class="cart-badge">${D}</span>`:""}`,ar.title=D>0?`Gi\u1ECF h\xE0ng (${D}) \xB7 ${pe(R)}`:"Gi\u1ECF h\xE0ng (0)"}function Le(){tn&&(tn.hidden=!0)}function He(){if(!tn)return;let D=0,R="";for(let{item:ae,qty:$}of H.values()){let de=ae.price*$;D+=de,R+=`<div class="item-row"><span>${ae.name} \xD7 ${$}</span><span class="item-price">${pe(de)}</span></div>`}R||(R='<p style="font-size:13px;color:#5a5248;margin:8px 0;">Gi\u1ECF h\xE0ng \u0111ang tr\u1ED1ng. H\xE3y \u0111i quanh s\u1EA3nh r\u1ED5 thu\u1ED1c, t\u1EE7 BAYER/HB-101 ho\u1EB7c kho ph\xE2n b\xF3n \u0111\u1EC3 ch\u1ECDn s\u1EA3n ph\u1EA9m nh\xE9!</p>'),tn.innerHTML=`
      <h3><span>\u{1F9FE} H\xF3a \u0111\u01A1n \u0110\u1EA1i l\xFD L\xED An</span><button class="close-x" type="button" aria-label="\u0110\xF3ng">\xD7</button></h3>
      ${R}
      ${D>0?`<div class="item-row" style="border:none;font-weight:700;font-size:15px;"><span>T\u1ED5ng c\u1ED9ng</span><span class="item-price">${pe(D)}</span></div>
      <button class="btn-pay" type="button">Thanh to\xE1n t\u1EA1i qu\u1EA7y (${pe(D)})</button>`:""}
    `,tn.hidden=!1,tn.querySelector(".close-x")?.addEventListener("click",Le),tn.querySelector(".btn-pay")?.addEventListener("click",()=>{H.clear(),ve(),Le(),_e('Ch\u1EE7 ti\u1EC7m L\xED An: "C\u1EA3m \u01A1n b\xE0 con \u0111\xE3 \u1EE7ng h\u1ED9 L\xED An! Ch\xFAc v\u1EE5 m\xF9a b\u1ED9i thu nh\xE9!" \u{1F33E}')})}function re(D){if(!D||!tn)return;if(D.type==="checkout"){He();return}let R=D.items.map(ae=>`
      <div class="item-row">
        <div>
          <div style="font-weight:600">${ae.name}</div>
          <div class="item-price">${pe(ae.price)}</div>
        </div>
        <button class="btn-add" data-item-id="${ae.id}" type="button">+ Th\xEAm v\xE0o gi\u1ECF</button>
      </div>
    `).join("");tn.innerHTML=`
      <h3><span>\u{1F6CD} ${D.title}</span><button class="close-x" type="button" aria-label="\u0110\xF3ng">\xD7</button></h3>
      ${R}
    `,tn.hidden=!1,tn.querySelector(".close-x")?.addEventListener("click",Le),tn.querySelectorAll(".btn-add").forEach(ae=>{ae.addEventListener("click",()=>{let $=D.items.find(ue=>ue.id===ae.dataset.itemId);if(!$)return;let de=H.get($.id);H.set($.id,{item:$,qty:(de?.qty||0)+1}),ve(),_e(`\u0110\xE3 th\xEAm "${$.name}" v\xE0o gi\u1ECF h\xE0ng!`)})})}let ie=fd(u,Ya,x,a,g,{onLabel(D){Qr&&(D?(Qr.innerHTML=cn("mapPin"),Qr.title=D,Qr.hidden=!1):Qr.hidden=!0)},onZoneChange(D){ne=D,ui&&(D&&ie.isActive()?(ui.innerHTML=cn(D.type==="checkout"?"receipt":"shoppingBag"),ui.title=`${D.prompt} (E)`,ui.setAttribute("aria-label",D.prompt),ui.hidden=!1):ui.hidden=!0)}});function _(){if(!ss)return;let D=ie.isThirdPerson();ss.innerHTML=cn(D?"video":"eye"),ss.title=D?"\u0110ang g\xF3c nh\xECn xa (nh\u1EA5n V \u0111\u1ED5i g\xF3c nh\xECn th\u1EE9 1)":"\u0110ang g\xF3c nh\xECn th\u1EE9 1 (nh\u1EA5n V \u0111\u1ED5i g\xF3c nh\xECn xa)",ss.setAttribute("aria-pressed",String(D))}function O(){let D=ie.isActive();no&&(no.innerHTML=cn("user"),no.title=D?"Tho\xE1t ch\u1EBF \u0111\u1ED9 kh\xE1ch h\xE0ng (T)":"\u0110\xF3ng vai kh\xE1ch h\xE0ng (T)",no.setAttribute("aria-pressed",String(D))),ss&&(ss.hidden=!D),eo&&(eo.hidden=!D),ar&&(ar.hidden=!D),D||(ui&&(ui.hidden=!0),Le()),ns&&ns.setAttribute("aria-pressed",String(ie.isAutoWalk())),_()}O(),ve(),no?.addEventListener("click",()=>{ie.toggle(),O(),m=!0}),ss?.addEventListener("click",()=>{ie.isActive()&&(ie.toggleViewMode(),_(),m=!0)}),ar?.addEventListener("click",()=>{ie.isActive()&&He()}),ui?.addEventListener("click",()=>{ne&&re(ne)}),ns?.addEventListener("click",()=>{ie.setAutoWalk(!ie.isAutoWalk()),ns.setAttribute("aria-pressed",String(ie.isAutoWalk()))}),eo?.querySelectorAll("button[data-dir]").forEach(D=>{let R=D.dataset.dir,ae=de=>{de.preventDefault(),ie.setVirtual(R,!0),ns?.setAttribute("aria-pressed","false")},$=()=>ie.setVirtual(R,!1);D.addEventListener("pointerdown",ae),D.addEventListener("pointerup",$),D.addEventListener("pointerleave",$),D.addEventListener("pointercancel",$)}),$h?.addEventListener("click",()=>{ie.isActive()?(ie.exit(),O()):x.reset()});let W=!1;function q(){W=!W,b.shopRoofGroup&&(b.shopRoofGroup.visible=!W),is&&(is.innerHTML=cn(W?"home":"layers"),is.title=W?"\u0110\xF3ng m\xE1i (I)":"M\u1EDF m\xE1i xem kho (I)",is.setAttribute("aria-pressed",String(W))),m=!0}is?.addEventListener("click",q),window.addEventListener("keydown",D=>{D.code==="Space"&&document.activeElement?.tagName!=="BUTTON"?(D.preventDefault(),N=null,T=!T,X=performance.now(),U()):D.key.toLowerCase()==="i"&&document.activeElement?.tagName!=="BUTTON"?(D.preventDefault(),q()):D.key.toLowerCase()==="n"&&document.activeElement?.tagName!=="BUTTON"?(D.preventDefault(),y.next(),P(),m=!0):D.key.toLowerCase()==="t"&&document.activeElement?.tagName!=="BUTTON"?(D.preventDefault(),ie.toggle(),O(),m=!0):D.key.toLowerCase()==="v"&&ie.isActive()&&document.activeElement?.tagName!=="BUTTON"?(D.preventDefault(),ie.toggleViewMode(),_(),m=!0):D.key.toLowerCase()==="e"&&ie.isActive()&&ne?(D.preventDefault(),re(ne)):D.key==="Escape"&&ie.isActive()&&(D.preventDefault(),tn&&!tn.hidden?Le():(ie.exit(),O(),m=!0))});function he(){if(!b.clockHands)return;let D=new Date,R=D.getSeconds()+D.getMilliseconds()/1e3,ae=D.getMinutes()+R/60,$=D.getHours()%12+ae/60;b.clockHands.secHand.rotation.z=-(R/60)*Math.PI*2,b.clockHands.minHand.rotation.z=-(ae/60)*Math.PI*2,b.clockHands.hourHand.rotation.z=-($/12)*Math.PI*2}function V(D,R=0){S.update(D,b,R),y.update(D),he(),e.render(t,u)}function z(D){requestAnimationFrame(z);let R=Math.min(.1,(D-X)/1e3);if(X=D,ie.isActive()&&ie.update(T?0:R),N!==null){(m||ie.isActive())&&(V(N,0),m=!1);return}if(!T||ie.isActive()){let ae=T?0:R;T||(G=(G+R)%Pn),V(G,ae),m=!1}else m&&(V(G,0),m=!1)}V(G),requestAnimationFrame(z),window.__DIORAMA__={preset:"stroked-toon",sourcing:"hybrid",profile:"narrative",loopSeconds:Pn,freeze(D=G){N=D,G=D,U(),V(D),m=!1},unfreeze(){N=null,T=!1,X=performance.now(),U()},setView(D,R,ae,$=f){d(D,R,ae,$),x.controls.target.copy($),x.controls.update(),V(N??G),m=!1},resetView(){x.reset(),V(N??G),m=!1},getState(){return{preset:"stroked-toon",dpr:s.getPixelRatio(),t:N??G,paused:T||N!==null,assetsReady:w,loadedAssets:I,cameraPos:u.position.toArray()}}}}l1();})();
