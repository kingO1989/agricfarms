import{dV as j,bP as P,iv as d,z as i,A as s,b8 as w,bB as $,D as h,bE as T,ir as N,a6 as v,ag as C,a3 as O,gg as L,af as E,iw as D,eh as H,ix as V,iy as B,c7 as M,c9 as U,bD as k}from"./index-fVgxHRq9.js";import{c as G}from"./Analysis-dynT_d-H.js";import{j as f}from"./persistable-FfUX9Tcm.js";import{r as J}from"./elevationInfoUtils-Ks0qnwAy.js";import"./multiOriginJSONSupportUtils-R5XHSAtL.js";import"./resourceExtension-wwjPetCU.js";function R(t,e){return I(t)===I(e)}function I(t){if(t==null)return null;const e=t.layer!=null?t.layer.id:"";let r=null;return r=t.objectId!=null?t.objectId:t.layer!=null&&"objectIdField"in t.layer&&t.layer.objectIdField!=null&&t.attributes!=null?t.attributes[t.layer.objectIdField]:t.uid,r==null?null:`o-${e}-${r}`}const z={json:{write:{writer:K,target:{"feature.layerId":{type:[Number,String]},"feature.objectId":{type:[Number,String]}}},origins:{"web-scene":{read:Q}}}};function K(t,e){var r;((r=t==null?void 0:t.layer)==null?void 0:r.objectIdField)!=null&&t.attributes!=null&&(e.feature={layerId:t.layer.id,objectId:t.attributes[t.layer.objectIdField]})}function Q(t){if(t.layerId!=null&&t.objectId!=null)return{uid:null,layer:{id:t.layerId,objectIdField:"ObjectId"},attributes:{ObjectId:t.objectId}}}let a=class extends j(P(T)){constructor(e){super(e),this.position=null,this.elevationInfo=null,this.feature=null}equals(e){return d(this.position,e.position)&&d(this.elevationInfo,e.elevationInfo)&&R(this.feature,e.feature)}};i([s({type:w,json:{write:{isRequired:!0}}})],a.prototype,"position",void 0),i([s({type:$}),f()],a.prototype,"elevationInfo",void 0),i([s(z)],a.prototype,"feature",void 0),a=i([h("esri.analysis.LineOfSightAnalysisObserver")],a);const F=a;let u=class extends j(N){constructor(t){super(t),this.position=null,this.elevationInfo=null,this.feature=null}equals(t){return d(this.position,t.position)&&d(this.elevationInfo,t.elevationInfo)&&R(this.feature,t.feature)}};i([s({type:w}),f()],u.prototype,"position",void 0),i([s({type:$}),f()],u.prototype,"elevationInfo",void 0),i([s(z)],u.prototype,"feature",void 0),u=i([h("esri.analysis.LineOfSightAnalysisTarget")],u);const S=u,g=v.ofType(S);let l=class extends G{constructor(e){super(e),this.type="line-of-sight",this.observer=null,this.extent=null}initialize(){this.addHandles(O(()=>this._computeExtent(),e=>{(e==null?void 0:e.pending)==null&&this._set("extent",e!=null?e.extent:null)},L))}get targets(){return this._get("targets")||new g}set targets(e){this._set("targets",E(e,this.targets,g))}get spatialReference(){var e;return((e=this.observer)==null?void 0:e.position)!=null?this.observer.position.spatialReference:null}get requiredPropertiesForEditing(){var e;return[(e=this.observer)==null?void 0:e.position]}async waitComputeExtent(){const e=this._computeExtent();return e!=null?e.pending:Promise.resolve()}_computeExtent(){var m;const e=this.spatialReference;if(((m=this.observer)==null?void 0:m.position)==null||e==null)return null;const r=p=>J(p.position,p.elevationInfo)==="absolute-height",o=this.observer.position,b=D(o.x,o.y,o.z,o.x,o.y,o.z);for(const p of this.targets)if(p.position!=null){const y=H(p.position,e);if(y.pending!=null)return{pending:y.pending,extent:null};if(y.geometry!=null){const{x:A,y:q,z:_}=y.geometry;V(b,[A,q,_])}}const c=B(b,e);return r(this.observer)&&this.targets.every(r)||(c.zmin=void 0,c.zmax=void 0),{pending:null,extent:c}}clear(){this.observer=null,this.targets.removeAll()}};i([s({type:["line-of-sight"]})],l.prototype,"type",void 0),i([s({type:F,json:{read:!0,write:!0}})],l.prototype,"observer",void 0),i([s({cast:C,type:g,nonNullable:!0,json:{read:!0,write:!0}})],l.prototype,"targets",null),i([s({value:null,readOnly:!0})],l.prototype,"extent",void 0),i([s({readOnly:!0})],l.prototype,"spatialReference",null),i([s({readOnly:!0})],l.prototype,"requiredPropertiesForEditing",null),l=i([h("esri.analysis.LineOfSightAnalysis")],l);const x=l,W=v.ofType(S);let n=class extends M(U(k)){constructor(t){super(t),this.type="line-of-sight",this.operationalLayerType="LineOfSightLayer",this.analysis=new x,this.opacity=1}initialize(){this.addHandles(O(()=>this.analysis,(t,e)=>{e!=null&&e.parent===this&&(e.parent=null),t!=null&&(t.parent=this)},L))}async load(){return this.analysis!=null&&this.addResolvingPromise(this.analysis.waitComputeExtent()),this}get observer(){var t;return(t=this.analysis)==null?void 0:t.observer}set observer(t){const{analysis:e}=this;e&&(e.observer=t)}get targets(){return this.analysis!=null?this.analysis.targets:new v}set targets(t){var e;E(t,(e=this.analysis)==null?void 0:e.targets)}get fullExtent(){return this.analysis!=null?this.analysis.extent:null}get spatialReference(){return this.analysis!=null?this.analysis.spatialReference:null}releaseAnalysis(t){this.analysis===t&&(this.analysis=new x)}};i([s({json:{read:!1},readOnly:!0})],n.prototype,"type",void 0),i([s({type:["LineOfSightLayer"]})],n.prototype,"operationalLayerType",void 0),i([s({type:F,json:{read:!0,write:{isRequired:!0,ignoreOrigin:!0}}})],n.prototype,"observer",null),i([s({type:W,json:{read:!0,write:{ignoreOrigin:!0}}})],n.prototype,"targets",null),i([s({nonNullable:!0,json:{read:!1,write:!1}})],n.prototype,"analysis",void 0),i([s({readOnly:!0})],n.prototype,"fullExtent",null),i([s({readOnly:!0})],n.prototype,"spatialReference",null),i([s({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],n.prototype,"opacity",void 0),i([s({type:["show","hide"]})],n.prototype,"listMode",void 0),n=i([h("esri.layers.LineOfSightLayer")],n);const rt=n;export{rt as default};
