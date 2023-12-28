import{_ as g,b5 as T,s as F,cp as U,cq as C,I as N,cr as L}from"./index-fVgxHRq9.js";import{l as J}from"./associatedFeatureServiceUtils-3AIkVlGR.js";import{t as _}from"./fetchService-D8nO-zwc.js";import{t as f,a as E}from"./lazyLayerLoader-VnlnrbWG.js";const V={FeatureLayer:!0,SceneLayer:!0};async function j(r){var a;const s=(a=r.properties)==null?void 0:a.customParameters,e=await x(r.url,s),t={...r.properties,url:r.url};if(e.layers.length+e.tables.length===0)return e.layerId!=null&&(t.layerId=e.layerId),e.sourceJSON!=null&&(t.sourceJSON=e.sourceJSON),new e.Constructor(t);const l=new(await g(()=>import("./GroupLayer-Tmxwc7og.js"),__vite__mapDeps([0,1,2,3,4,5]))).default({title:e.parsedUrl.title});return await k(l,e,t),l}function O(r,s){return r?r.find(e=>e.id===s):null}async function k(r,s,e){function t(a,n,u,c){const i={...e,layerId:n,sublayerTitleMode:"service-name"};return a!=null&&(i.url=a),u!=null&&(i.sourceJSON=u),c(i)}const l=s.sublayerConstructorProvider;for(const{id:a,serverUrl:n}of s.layers){const u=O(s.sublayerInfos,a),c=(u&&(l==null?void 0:l(u)))??s.Constructor,i=t(n,a,u,p=>new c(p));r.add(i)}if(s.tables.length){const a=await d("FeatureLayer");s.tables.forEach(({id:n,serverUrl:u})=>{const c=t(u,n,O(s.tableInfos,n),i=>new a(i));r.tables.add(c)})}}async function x(r,s){var p,v,w,S,b,I,h;let e=T(r);if(e==null&&(e=await $(r,s)),e==null)throw new F("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:r});const{serverType:t,sublayer:l}=e;let a;const n={FeatureServer:"FeatureLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer"},u=t==="FeatureServer",c=t==="SceneServer",i={parsedUrl:e,Constructor:null,layerId:u||c?l??void 0:void 0,layers:[],tables:[]};switch(t){case"MapServer":l!=null?a="FeatureLayer":a=await q(r,s)?"TileLayer":"MapImageLayer";break;case"ImageServer":{const o=await f(r,{customParameters:s}),{tileInfo:y,cacheType:m}=o;a=y?((p=y==null?void 0:y.format)==null?void 0:p.toUpperCase())!=="LERC"||m&&m.toLowerCase()!=="elevation"?"ImageryTileLayer":"ElevationLayer":"ImageryLayer";break}case"SceneServer":{const o=await f(e.url.path,{customParameters:s});if(a="SceneLayer",o){const y=o==null?void 0:o.layers;if((o==null?void 0:o.layerType)==="Voxel")a="VoxelLayer";else if(y!=null&&y.length){const m=(v=y[0])==null?void 0:v.layerType;m!=null&&L[m]!=null&&(a=L[m])}}break}case"FeatureServer":if(a="FeatureLayer",l!=null){const o=await f(r,{customParameters:s});i.sourceJSON=o,o.type==="Oriented Imagery Layer"&&(a="OrientedImageryLayer")}break;default:a=n[t]}if(V[a]&&l==null){const o=await M(r,t,s);if(u&&(i.sublayerInfos=o.layerInfos,i.tableInfos=o.tableInfos),o.layers.length+o.tables.length!==1)i.layers=o.layers,i.tables=o.tables,u&&((w=o.layerInfos)!=null&&w.length)&&(i.sublayerConstructorProvider=await z(o.layerInfos));else if(u||c){const y=((S=o.layerInfos)==null?void 0:S[0])??((b=o.tableInfos)==null?void 0:b[0]);i.layerId=((I=o.layers[0])==null?void 0:I.id)??((h=o.tables[0])==null?void 0:h.id),i.sourceJSON=y,u&&(y==null?void 0:y.type)==="Oriented Imagery Layer"&&(a="OrientedImageryLayer")}}return i.Constructor=await d(a),i}async function $(r,s){var u;const e=await f(r,{customParameters:s});let t=null,l=null;const a=e.type;if(a==="Feature Layer"||a==="Table"?(t="FeatureServer",l=e.id??null):a==="indexedVector"?t="VectorTileServer":e.hasOwnProperty("mapName")?t="MapServer":e.hasOwnProperty("bandCount")&&e.hasOwnProperty("pixelSizeX")?t="ImageServer":e.hasOwnProperty("maxRecordCount")&&e.hasOwnProperty("allowGeometryUpdates")?t="FeatureServer":e.hasOwnProperty("streamUrls")?t="StreamServer":P(e)?(t="SceneServer",l=e.id):e.hasOwnProperty("layers")&&P((u=e.layers)==null?void 0:u[0])&&(t="SceneServer"),!t)return null;const n=l!=null?U(r):null;return{title:n!=null&&e.name||C(r),serverType:t,sublayer:l,url:{path:n!=null?n.serviceUrl:N(r).path}}}function P(r){return r!=null&&r.hasOwnProperty("store")&&r.hasOwnProperty("id")&&typeof r.id=="number"}async function M(r,s,e){let t,l,a=!1;switch(s){case"FeatureServer":{const c=await _(r,{customParameters:e});a=!!c.layersJSON,t=c.layersJSON||c.serviceJSON;break}case"SceneServer":{const c=await R(r,e);t=c.serviceInfo,l=c.tableServerUrl;break}default:t=await f(r,{customParameters:e})}const n=t==null?void 0:t.layers,u=t==null?void 0:t.tables;return{layers:(n==null?void 0:n.map(c=>({id:c.id})).reverse())||[],tables:(u==null?void 0:u.map(c=>({serverUrl:l,id:c.id})).reverse())||[],layerInfos:a?n:[],tableInfos:a?u:[]}}async function R(r,s){var l;const e=await f(r,{customParameters:s});if(!((l=e.layers)==null?void 0:l[0]))return{serviceInfo:e};try{const{serverUrl:a}=await J(r),n=await f(a,{customParameters:s}).catch(()=>null);return n&&(e.tables=n.tables),{serviceInfo:e,tableServerUrl:a}}catch{return{serviceInfo:e}}}async function d(r){return(0,E[r])()}async function q(r,s){return(await f(r,{customParameters:s})).tileInfo}async function z(r){const s=[],e=[];if(r.forEach(a=>{const{type:n}=a;n==="Oriented Imagery Layer"?(s.push(n),e.push(d("OrientedImageryLayer"))):(s.push(n),e.push(d("FeatureLayer")))}),!e.length)return;const t=await Promise.all(e),l=new Map;return s.forEach((a,n)=>{l.set(a,t[n])}),a=>l.get(a.type)}export{j as fromUrl};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/GroupLayer-Tmxwc7og.js","assets/index-fVgxHRq9.js","assets/index-xWplxuDE.css","assets/lazyLayerLoader-VnlnrbWG.js","assets/saveUtils-3W-wjGHH.js","assets/resourceUtils-0deFedx4.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}