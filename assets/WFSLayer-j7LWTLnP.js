import{z as i,A as r,D as x,fS as $,ff as P,a5 as C,M as T,s as N,dw as m,al as U,eL as E,ap as _,d4 as J,fU as k,cc as W,fV as Y,fW as D,bz as X,c5 as L,ca as Q,bA as V,c7 as Z,c8 as z,c9 as A,f as j,fX as O,fY as G,dv as R,ek as M,I as B,fZ as H,bb as y,cm as K,f_ as ee,J as te,f$ as ie,g0 as re,g1 as se,dY as oe,co as S,gW as ae,g3 as ne,a7 as le,g4 as pe,g5 as de,g6 as ue,cn as ye,g9 as ce,bD as me}from"./index-fVgxHRq9.js";import{l as fe,o as he}from"./clientSideDefaults-2mlzqtld.js";import{v as ge,W as we,q as ve,V as Fe,S as be}from"./wfsUtils-qZ0HwXEF.js";import"./QueryEngineCapabilities-PzVpW5yD.js";import"./geojson-b8VQdf2B.js";import"./date-be_IQzZd.js";import"./OptimizedFeature-5RGb7-P9.js";import"./OptimizedGeometry-CbNXANBG.js";import"./xmlUtils-Q_9cB30b.js";let d=class extends ${constructor(){super(...arguments),this._connection=null,this.capabilities=fe(!1,!1),this.type="wfs",this.refresh=P(async e=>{await this.load();const{extent:t}=await this._connection.invoke("refresh",e);return t&&(this.sourceJSON.extent=t),{dataChanged:!0,updates:{extent:this.sourceJSON.extent}}})}load(e){const t=e!=null?e.signal:null;return this.addResolvingPromise(this._startWorker({signal:t})),Promise.resolve(this)}destroy(){var e;(e=this._connection)==null||e.close(),this._connection=null}async openPorts(){return await this.load(),this._connection.openPorts()}async queryFeatures(e,t={}){await this.load(t);const o=await this._connection.invoke("queryFeatures",e?e.toJSON():null,t);return C.fromJSON(o)}async queryFeaturesJSON(e,t={}){return await this.load(t),this._connection.invoke("queryFeatures",e?e.toJSON():null,t)}async queryFeatureCount(e,t={}){return await this.load(t),this._connection.invoke("queryFeatureCount",e?e.toJSON():null,t)}async queryObjectIds(e,t={}){return await this.load(t),this._connection.invoke("queryObjectIds",e?e.toJSON():null,t)}async queryExtent(e,t={}){await this.load(t);const o=await this._connection.invoke("queryExtent",e?e.toJSON():null,t);return{count:o.count,extent:T.fromJSON(o.extent)}}async querySnapping(e,t={}){return await this.load(t),this._connection.invoke("querySnapping",e,t)}async _createLoadOptions(e){var F,b;const{url:t,customParameters:o,name:n,namespaceUri:l,fields:a,geometryType:u,swapXY:f}=this.layer,c=this.layer.originOf("spatialReference")==="defaults"?void 0:this.layer.spatialReference;if(!t)throw new N("wfs-layer:missing-url","WFSLayer must be created with a url");this.wfsCapabilities||(this.wfsCapabilities=await ge(t,{customParameters:o,...e}));const h=["fields","geometryType","name","namespaceUri","swapXY"].some(w=>this.layer[w]==null),p=h?await we(this.wfsCapabilities,n,l,{spatialReference:c,customParameters:o,signal:e==null?void 0:e.signal}):{...ve(a??[]),geometryType:u,name:n,namespaceUri:l,spatialReference:c,swapXY:f},g=Fe(this.wfsCapabilities.readFeatureTypes(),p.name,p.namespaceUri),q=m.toJSON(p.geometryType);return{customParameters:o,featureType:g,fields:((F=p.fields)==null?void 0:F.map(w=>w.toJSON()))??[],geometryField:p.geometryField,geometryType:q,getFeatureUrl:this.wfsCapabilities.operations.GetFeature.url,getFeatureOutputFormat:this.wfsCapabilities.operations.GetFeature.outputFormat,objectIdField:p.objectIdField,spatialReference:(b=p.spatialReference)==null?void 0:b.toJSON(),swapXY:!!p.swapXY}}async _startWorker(e){const[t,o]=await U([this._createLoadOptions(e),E("WFSSourceWorker",{...e,strategy:_("feature-layers-workers")?"dedicated":"local",registryTarget:this})]),n=t.error||o.error||null,l=o.value||null;if(n)throw l&&l.close(),n;const a=t.value;this._connection=o.value;const u=(await this._connection.invoke("load",a,e)).extent;this.sourceJSON={dateFieldsTimeReference:{timeZoneIANA:J},extent:u,fields:a.fields,geometryType:a.geometryType,objectIdField:a.objectIdField,geometryField:a.geometryField,drawingInfo:he(a.geometryType),name:a.featureType.title,wfsInfo:{name:a.featureType.name,featureUrl:a.getFeatureUrl,maxFeatures:3e3,swapXY:a.swapXY,supportedSpatialReferences:a.featureType.supportedSpatialReferences,version:"2.0.0",wfsNamespace:a.featureType.namespaceUri}}}};i([r()],d.prototype,"capabilities",void 0),i([r({constructOnly:!0})],d.prototype,"layer",void 0),i([r()],d.prototype,"sourceJSON",void 0),i([r()],d.prototype,"type",void 0),i([r()],d.prototype,"wfsCapabilities",void 0),d=i([x("esri.layers.graphics.sources.WFSSource")],d);var v;const I=ce();let s=v=class extends k(W(Y(D(X(L(Q(V(Z(z(A(me))))))))))){static fromWFSLayerInfo(e){const{customParameters:t,fields:o,geometryField:n,geometryType:l,name:a,namespaceUri:u,objectIdField:f,spatialReference:c,swapXY:h,url:p,wfsCapabilities:g}=e;return new v({customParameters:t,fields:o,geometryField:n,geometryType:l,name:a,namespaceUri:u,objectIdField:f,spatialReference:c,swapXY:h,url:p,wfsCapabilities:g})}constructor(e){super(e),this.copyright=null,this.customParameters=null,this.dateFieldsTimeZone=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.featureUrl=void 0,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="WFS",this.maxFeatures=3e3,this.mode=0,this.name=null,this.namespaceUri=null,this.outFields=null,this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new d({layer:this}),this.spatialReference=j.WGS84,this.spatialReferences=[4326],this.swapXY=void 0,this.title="WFS",this.type="wfs",this.url=null,this.version=void 0}destroy(){var e;(e=this.source)==null||e.destroy()}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WFS"]},e).then(()=>this.source.load(e)).then(()=>{this.read(this.source.sourceJSON,{origin:"service",url:this.parsedUrl}),this.revert(["objectIdField","fields","timeInfo","spatialReference","name","namespaceUri"],"service"),O(this.renderer,this.fieldsIndex),G(this.timeInfo,this.fieldsIndex)})),Promise.resolve(this)}get capabilities(){var e;return(e=this.source)==null?void 0:e.capabilities}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")||0)+1}get defaultPopupTemplate(){return this.createPopupTemplate()}writeFields(e,t,o){const n=e.filter(l=>l.name!==be);this.geometryField&&n.unshift(new R({name:this.geometryField,alias:this.geometryField,type:"geometry"})),M(o,n.map(l=>l.toJSON()),t)}get parsedUrl(){return B(this.url)}set renderer(e){O(e,this.fieldsIndex),this._set("renderer",e)}get wfsCapabilities(){var e;return(e=this.source)==null?void 0:e.wfsCapabilities}set wfsCapabilities(e){this.source&&(this.source.wfsCapabilities=e)}createPopupTemplate(e){return H(this,e)}createQuery(){const e=new y;e.returnGeometry=!0,e.outFields=["*"],e.where=this.definitionExpression||"1=1";const{timeOffset:t,timeExtent:o}=this;return e.timeExtent=t!=null&&o!=null?o.offset(-t.value,t.unit):o||null,e}getFieldDomain(e,t){var o;return(o=this.getField(e))==null?void 0:o.domain}getField(e){var t;return(t=this.fieldsIndex)==null?void 0:t.get(e)}queryFeatures(e,t){return this.load().then(()=>this.source.queryFeatures(y.from(e)||this.createQuery(),t)).then(o=>{if(o!=null&&o.features)for(const n of o.features)n.layer=n.sourceLayer=this;return o})}queryObjectIds(e,t){return this.load().then(()=>this.source.queryObjectIds(y.from(e)||this.createQuery(),t))}queryFeatureCount(e,t){return this.load().then(()=>this.source.queryFeatureCount(y.from(e)||this.createQuery(),t))}queryExtent(e,t){return this.load().then(()=>this.source.queryExtent(y.from(e)||this.createQuery(),t))}async hasDataChanged(){try{const{dataChanged:e,updates:t}=await this.source.refresh(this.customParameters);return t!=null&&this.read(t,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),e}catch{}return!1}};i([r({readOnly:!0})],s.prototype,"capabilities",null),i([r({type:String})],s.prototype,"copyright",void 0),i([r({readOnly:!0})],s.prototype,"createQueryVersion",null),i([r({json:{name:"wfsInfo.customParameters",write:{overridePolicy:e=>({enabled:!!(e&&Object.keys(e).length>0),ignoreOrigin:!0})}}})],s.prototype,"customParameters",void 0),i([r(K("dateFieldsTimeReference"))],s.prototype,"dateFieldsTimeZone",void 0),i([r({readOnly:!0})],s.prototype,"defaultPopupTemplate",null),i([r({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],s.prototype,"definitionExpression",void 0),i([r({type:String})],s.prototype,"displayField",void 0),i([r(ee)],s.prototype,"elevationInfo",void 0),i([r({type:String,readOnly:!0,json:{name:"wfsInfo.featureUrl",write:{ignoreOrigin:!0,isRequired:!0}}})],s.prototype,"featureUrl",void 0),i([r({type:[R],json:{name:"layerDefinition.fields",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"fields"}}}})],s.prototype,"fields",void 0),i([te("fields")],s.prototype,"writeFields",null),i([r(I.fieldsIndex)],s.prototype,"fieldsIndex",void 0),i([r({type:T,json:{name:"extent"}})],s.prototype,"fullExtent",void 0),i([r()],s.prototype,"geometryField",void 0),i([r({type:String,json:{read:{source:"layerDefinition.geometryType",reader:m.read},write:{target:"layerDefinition.geometryType",writer:m.write,ignoreOrigin:!0},origins:{service:{read:m.read}}}})],s.prototype,"geometryType",void 0),i([r({type:String})],s.prototype,"id",void 0),i([r(ie)],s.prototype,"labelsVisible",void 0),i([r({type:[re],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:se},write:!0}})],s.prototype,"labelingInfo",void 0),i([r(oe)],s.prototype,"legendEnabled",void 0),i([r({type:["show","hide"]})],s.prototype,"listMode",void 0),i([r({type:String})],s.prototype,"objectIdField",void 0),i([r({type:["WFS"]})],s.prototype,"operationalLayerType",void 0),i([r({type:S,json:{name:"wfsInfo.maxFeatures",write:{ignoreOrigin:!0,isRequired:!0}}})],s.prototype,"maxFeatures",void 0),i([r({type:[0],readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0,isRequired:!0}}}}})],s.prototype,"mode",void 0),i([r({type:String,json:{name:"wfsInfo.name",write:{ignoreOrigin:!0,isRequired:!0}}})],s.prototype,"name",void 0),i([r({type:String,json:{name:"wfsInfo.wfsNamespace",write:{ignoreOrigin:!0,isRequired:!0}}})],s.prototype,"namespaceUri",void 0),i([r(ae)],s.prototype,"opacity",void 0),i([r(I.outFields)],s.prototype,"outFields",void 0),i([r({readOnly:!0})],s.prototype,"parsedUrl",null),i([r(ne)],s.prototype,"popupEnabled",void 0),i([r({type:le,json:{name:"popupInfo",write:!0}})],s.prototype,"popupTemplate",void 0),i([r({types:pe,json:{origins:{service:{name:"drawingInfo.renderer"},"web-scene":{types:de,name:"layerDefinition.drawingInfo.renderer",write:!0}},name:"layerDefinition.drawingInfo.renderer",write:{ignoreOrigin:!0}}})],s.prototype,"renderer",null),i([r(ue)],s.prototype,"screenSizePerspectiveEnabled",void 0),i([r({readOnly:!0})],s.prototype,"source",void 0),i([r({type:j,json:{name:"layerDefinition.spatialReference",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"extent.spatialReference"}}}})],s.prototype,"spatialReference",void 0),i([r({readOnly:!0,type:[S],json:{name:"wfsInfo.supportedSpatialReferences",write:{ignoreOrigin:!0,isRequired:!0}}})],s.prototype,"spatialReferences",void 0),i([r({type:Boolean,value:!1,json:{name:"wfsInfo.swapXY",write:{ignoreOrigin:!0,isRequired:!0}}})],s.prototype,"swapXY",void 0),i([r({json:{write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"name"}}}})],s.prototype,"title",void 0),i([r({json:{read:!1},readOnly:!0})],s.prototype,"type",void 0),i([r(ye)],s.prototype,"url",void 0),i([r({type:String,readOnly:!0,json:{name:"wfsInfo.version",write:{ignoreOrigin:!0,isRequired:!0}}})],s.prototype,"version",void 0),i([r()],s.prototype,"wfsCapabilities",null),s=v=i([x("esri.layers.WFSLayer")],s);const Pe=s;export{Pe as default};
