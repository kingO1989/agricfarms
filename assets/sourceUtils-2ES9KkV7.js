import{da as f,db as h,d9 as m,dc as p,dd as g,de as y,aK as a,_ as w}from"./index-NW4km9vE.js";import{n as _}from"./date-be_IQzZd.js";class I{constructor(){this.code=null,this.description=null}}class b{constructor(r){this.error=new I,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=r}}function c(n){return new b(n)}class q{constructor(r){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=r}}function A(n){return new q(n)}const u=new Set;function F(n,r,e,d=!1){u.clear();for(const i in e){const t=n.get(i);if(!t)continue;const o=P(t,e[i]);if(u.add(t.name),t&&(d||t.editable)){const l=f(t,o);if(l)return c(h(l,t,o));r[t.name]=o}}for(const i of(n==null?void 0:n.requiredFields)??[])if(!u.has(i.name))return c(`missing required field "${i.name}"`);return null}function P(n,r){let e=r;return m(n)&&typeof r=="string"?e=parseFloat(r):p(n)&&r!=null&&typeof r!="string"?e=String(r):g(n)&&typeof r=="string"&&(e=_(r)),y(e)}let s;function G(n,r){if(!n||!a(r))return n;if("rings"in n||"paths"in n){if(s==null)throw new TypeError("geometry engine not loaded");return s.simplify(r,n)}return n}async function j(){return s==null&&(s=await w(()=>import("./geometryEngineJSON-sIDWIJrr.js").then(n=>n.g),__vite__mapDeps([0,1,2,3,4]),import.meta.url)),s}async function S(n,r){!a(n)||r!=="esriGeometryPolygon"&&r!=="esriGeometryPolyline"||await j()}export{S as I,A as d,c as f,F as p,G as w};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./geometryEngineJSON-sIDWIJrr.js","./geometryEngineBase-p_LpxeMc.js","./index-NW4km9vE.js","./index-xWplxuDE.css","./json-v6EOeNTY.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}