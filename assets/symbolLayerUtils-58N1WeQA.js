import{c2 as d,s,P as v,_ as y,c3 as c,bs as p,c4 as b,bQ as l}from"./index-fVgxHRq9.js";let n=f();function f(){return new d(50)}function g(){n=f()}async function T(r,i){var o,t;if((o=r.resource)!=null&&o.href)return w(r.resource.href).then(e=>[e.width,e.height]);if((t=r.resource)!=null&&t.primitive)return i!=null?[i,i]:[256,256];throw new s("symbol3d:invalid-symbol-layer","symbol layers of type Icon must have either an href or a primitive resource")}function w(r){return v(r,{responseType:"image"}).then(i=>i.data)}async function x(r,i=null){var t;if(!r.isPrimitive){const e=r.resource.href;if(!e)throw new s("symbol:invalid-resource","The symbol does not have a valid resource");const a=n.get(e);if(a!==void 0)return a;const{fetch:h}=await y(()=>import("./objectResourceUtils-grTID4ms.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28])),m=await h(e,{disableTextures:!0}),u=c(m.referenceBoundingBox,l());return n.put(e,u),u}if(!((t=r.resource)!=null&&t.primitive))throw new s("symbol:invalid-resource","The symbol does not have a valid resource");const o=p(b(r.resource.primitive));if(i!=null)for(let e=0;e<o.length;e++)o[e]*=i;return c(o,l())}export{g as clearBoundingBoxCache,T as computeIconLayerResourceSize,x as computeObjectLayerResourceSize};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/objectResourceUtils-grTID4ms.js","assets/index-fVgxHRq9.js","assets/index-xWplxuDE.css","assets/mat3f64-sunSSgMR.js","assets/mat4f64-aoQZ5j3f.js","assets/BufferView-_HugOlH0.js","assets/vec32-5DRmjwQy.js","assets/DefaultMaterial_COLOR_GAMMA-VInlYUmw.js","assets/enums-8pc8f5Ge.js","assets/quat-DPRPkpI4.js","assets/quatf64-5VCgza3C.js","assets/resourceUtils-KJDZrf-A.js","assets/basicInterfaces-IwaMq8O_.js","assets/Indices-U2EsGAZj.js","assets/NestedMap-9UouPomH.js","assets/requestImageUtils-iPEYlJIS.js","assets/triangle-CAcyHHbx.js","assets/sphere-N5A7XRsD.js","assets/ByteSizeUnit-UjtePjs8.js","assets/lineSegment-h69rJ5SY.js","assets/VertexAttribute-BUG0xkjK.js","assets/Texture--Zqu2G7p.js","assets/InterleavedLayout-aJf6uYM1.js","assets/types-GBdbcYRa.js","assets/OrderIndependentTransparency-JGZ_PxZN.js","assets/orientedBoundingBox-m99L5BL8.js","assets/plane-1pFzn2or.js","assets/doublePrecisionUtils-HJiLm-yC.js","assets/FramebufferObject-YojrUa_N.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}