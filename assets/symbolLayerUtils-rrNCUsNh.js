import{c2 as d,s,P as v,_ as y,c3 as c,bs as p,c4 as b,bQ as l}from"./index-NW4km9vE.js";let n=f();function f(){return new d(50)}function g(){n=f()}async function T(r,i){var o,t;if((o=r.resource)!=null&&o.href)return w(r.resource.href).then(e=>[e.width,e.height]);if((t=r.resource)!=null&&t.primitive)return i!=null?[i,i]:[256,256];throw new s("symbol3d:invalid-symbol-layer","symbol layers of type Icon must have either an href or a primitive resource")}function w(r){return v(r,{responseType:"image"}).then(i=>i.data)}async function x(r,i=null){var t;if(!r.isPrimitive){const e=r.resource.href;if(!e)throw new s("symbol:invalid-resource","The symbol does not have a valid resource");const a=n.get(e);if(a!==void 0)return a;const{fetch:m}=await y(()=>import("./objectResourceUtils-TMNd8-EK.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]),import.meta.url),h=await m(e,{disableTextures:!0}),u=c(h.referenceBoundingBox,l());return n.put(e,u),u}if(!((t=r.resource)!=null&&t.primitive))throw new s("symbol:invalid-resource","The symbol does not have a valid resource");const o=p(b(r.resource.primitive));if(i!=null)for(let e=0;e<o.length;e++)o[e]*=i;return c(o,l())}export{g as clearBoundingBoxCache,T as computeIconLayerResourceSize,x as computeObjectLayerResourceSize};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./objectResourceUtils-TMNd8-EK.js","./index-NW4km9vE.js","./index-xWplxuDE.css","./mat3f64-sunSSgMR.js","./mat4f64-aoQZ5j3f.js","./BufferView-BNykvsE7.js","./vec32-_XiR8tP8.js","./DefaultMaterial_COLOR_GAMMA-vzqNYLG5.js","./enums-8pc8f5Ge.js","./quat-SU4ADPpz.js","./quatf64-5VCgza3C.js","./resourceUtils-hXS7rtlc.js","./basicInterfaces-IwaMq8O_.js","./Indices-dWDL2mSY.js","./NestedMap-9UouPomH.js","./requestImageUtils-B5o4d6ah.js","./triangle-8TdybtnO.js","./sphere-6jeSe77q.js","./ByteSizeUnit-UjtePjs8.js","./lineSegment-yx_31XCM.js","./VertexAttribute-BUG0xkjK.js","./Texture-LDTHXxX7.js","./InterleavedLayout-ff9VwE7L.js","./types-GBdbcYRa.js","./OrderIndependentTransparency-JGZ_PxZN.js","./orientedBoundingBox-okQCssJW.js","./plane-VwUKPozd.js","./doublePrecisionUtils-HJiLm-yC.js","./FramebufferObject-Co6avni6.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}