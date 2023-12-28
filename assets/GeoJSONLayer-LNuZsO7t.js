import{z as s,A as r,D as b,fS as x,ff as $,a5 as w,M as I,s as f,b9 as j,eL as J,ap as N,dw as O,a2 as m,fU as R,cc as P,fV as q,fW as T,bz as D,c5 as k,bA as L,ca as Z,c7 as z,c8 as G,c9 as C,f as F,b6 as Q,fX as g,fY as V,I as v,_ as A,fZ as M,bb as c,cm as U,f_ as W,dv as B,dX as X,f$ as Y,g0 as H,g1 as K,dY as ee,g2 as te,g3 as se,a7 as ie,g4 as re,g5 as oe,g6 as ne,g7 as ae,g8 as le,cn as ue,g9 as de,bD as pe}from"./index-fVgxHRq9.js";import{l as he}from"./clientSideDefaults-2mlzqtld.js";import"./QueryEngineCapabilities-PzVpW5yD.js";let p=class extends x{constructor(){super(...arguments),this.type="geojson",this.refresh=$(async e=>{await this.load();const{extent:t,timeExtent:i}=await this._connection.invoke("refresh",e);return this.sourceJSON.extent=t,i&&(this.sourceJSON.timeInfo.timeExtent=[i.start,i.end]),{dataChanged:!0,updates:{extent:this.sourceJSON.extent,timeInfo:this.sourceJSON.timeInfo}}})}load(e){const t=e!=null?e.signal:null;return this.addResolvingPromise(this._startWorker(t)),Promise.resolve(this)}destroy(){var e;(e=this._connection)==null||e.close(),this._connection=null}applyEdits(e){return this.load().then(()=>this._applyEdits(e))}openPorts(){return this.load().then(()=>this._connection.openPorts())}queryFeatures(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t)).then(i=>w.fromJSON(i))}queryFeaturesJSON(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t))}queryFeatureCount(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryFeatureCount",e?e.toJSON():null,t))}queryObjectIds(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryObjectIds",e?e.toJSON():null,t))}queryExtent(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryExtent",e?e.toJSON():null,t)).then(i=>({count:i.count,extent:I.fromJSON(i.extent)}))}querySnapping(e,t={}){return this.load(t).then(()=>this._connection.invoke("querySnapping",e,t))}_applyEdits(e){if(!this._connection)throw new f("geojson-layer-source:edit-failure","Memory source not loaded");const t=this.layer.objectIdField,i=[],a=[],l=[];if(e.addFeatures)for(const n of e.addFeatures)i.push(this._serializeFeature(n));if(e.deleteFeatures)for(const n of e.deleteFeatures)"objectId"in n&&n.objectId!=null?a.push(n.objectId):"attributes"in n&&n.attributes[t]!=null&&a.push(n.attributes[t]);if(e.updateFeatures)for(const n of e.updateFeatures)l.push(this._serializeFeature(n));return this._connection.invoke("applyEdits",{adds:i,updates:l,deletes:a}).then(({extent:n,timeExtent:u,featureEditResults:d})=>(this.sourceJSON.extent=n,u&&(this.sourceJSON.timeInfo.timeExtent=[u.start,u.end]),this._createEditsResult(d)))}_createEditsResult(e){return{addFeatureResults:e.addResults?e.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:e.updateResults?e.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:e.deleteResults?e.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}_createFeatureEditResult(e){const t=e.success===!0?null:e.error||{code:void 0,description:void 0};return{objectId:e.objectId,globalId:e.globalId,error:t?new f("geojson-layer-source:edit-failure",t.description,{code:t.code}):null}}_serializeFeature(e){const{attributes:t}=e,i=this._geometryForSerialization(e);return i?{geometry:i.toJSON(),attributes:t}:{attributes:t}}_geometryForSerialization(e){const{geometry:t}=e;return t==null?null:t.type==="mesh"||t.type==="extent"?j.fromExtent(t.extent):t}async _startWorker(e){this._connection=await J("GeoJSONSourceWorker",{strategy:N("feature-layers-workers")?"dedicated":"local",signal:e,registryTarget:this});const{fields:t,spatialReference:i,hasZ:a,geometryType:l,objectIdField:n,url:u,timeInfo:d,customParameters:E}=this.layer,S=this.layer.originOf("spatialReference")==="defaults",_={url:u,customParameters:E,fields:t&&t.map(y=>y.toJSON()),geometryType:O.toJSON(l),hasZ:a,objectIdField:n,timeInfo:d?d.toJSON():null,spatialReference:S?null:i&&i.toJSON()},h=await this._connection.invoke("load",_,{signal:e});for(const y of h.warnings)m.getLogger(this.layer).warn("#load()",`$${y.message} (title: '${this.layer.title||"no title"}', id: '${this.layer.id??"no id"}')`,{warning:y});h.featureErrors.length&&m.getLogger(this.layer).warn("#load()",`Encountered ${h.featureErrors.length} validation errors while loading features. (title: '${this.layer.title||"no title"}', id: '${this.layer.id??"no id"}')`,{errors:h.featureErrors}),this.sourceJSON=h.layerDefinition,this.capabilities=he(this.sourceJSON.hasZ,!0)}};s([r()],p.prototype,"capabilities",void 0),s([r()],p.prototype,"type",void 0),s([r({constructOnly:!0})],p.prototype,"layer",void 0),s([r()],p.prototype,"sourceJSON",void 0),p=s([b("esri.layers.graphics.sources.GeoJSONSource")],p);const ce=de();let o=class extends R(P(q(T(D(k(L(Z(z(G(C(pe))))))))))){constructor(e){super(e),this.copyright=null,this.dateFieldsTimeZone=null,this.definitionExpression=null,this.displayField=null,this.editingEnabled=!1,this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="GeoJSON",this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new p({layer:this}),this.spatialReference=F.WGS84,this.templates=null,this.title="GeoJSON",this.type="geojson",this.typeIdField=null,this.types=null}destroy(){var e;(e=this.source)==null||e.destroy()}load(e){const t=this.loadFromPortal({supportedTypes:["GeoJson"],supportsData:!1},e).catch(Q).then(()=>this.source.load(e)).then(()=>{this.read(this.source.sourceJSON,{origin:"service",url:this.parsedUrl}),this.revert(["objectIdField","fields","timeInfo"],"service"),g(this.renderer,this.fieldsIndex),V(this.timeInfo,this.fieldsIndex)});return this.addResolvingPromise(t),Promise.resolve(this)}get capabilities(){return this.source?this.source.capabilities:null}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")||0)+1}get defaultPopupTemplate(){return this.createPopupTemplate()}get isTable(){return this.loaded&&this.geometryType==null}get parsedUrl(){return this.url?v(this.url):null}set renderer(e){g(e,this.fieldsIndex),this._set("renderer",e)}set url(e){if(!e)return void this._set("url",e);const t=v(e);this._set("url",t.path),t.query&&(this.customParameters={...this.customParameters,...t.query})}async applyEdits(e,t){const{applyEdits:i}=await A(()=>import("./editingSupport-ZLOmiRNr.js"),__vite__mapDeps([0,1,2]));await this.load();const a=await i(this,this.source,e,t);return this.read({extent:this.source.sourceJSON.extent,timeInfo:this.source.sourceJSON.timeInfo},{origin:"service",ignoreDefaults:!0}),a}on(e,t){return super.on(e,t)}createPopupTemplate(e){return M(this,e)}createQuery(){var l;const e=new c,t=(l=this.capabilities)==null?void 0:l.data;e.returnGeometry=!0,t&&t.supportsZ&&(e.returnZ=!0),e.outFields=["*"],e.where=this.definitionExpression||"1=1";const{timeOffset:i,timeExtent:a}=this;return e.timeExtent=i!=null&&a!=null?a.offset(-i.value,i.unit):a||null,e}getFieldDomain(e,t){let i,a=!1;const l=t==null?void 0:t.feature,n=l==null?void 0:l.attributes,u=this.typeIdField&&(n==null?void 0:n[this.typeIdField]);return u!=null&&this.types&&(a=this.types.some(d=>d.id==u&&(i=d.domains&&d.domains[e],i&&i.type==="inherited"&&(i=this._getLayerDomain(e)),!0))),a||i||(i=this._getLayerDomain(e)),i}getField(e){return this.fieldsIndex.get(e)}queryFeatures(e,t){return this.load().then(()=>this.source.queryFeatures(c.from(e)||this.createQuery(),t)).then(i=>{if(i!=null&&i.features)for(const a of i.features)a.layer=a.sourceLayer=this;return i})}queryObjectIds(e,t){return this.load().then(()=>this.source.queryObjectIds(c.from(e)||this.createQuery(),t))}queryFeatureCount(e,t){return this.load().then(()=>this.source.queryFeatureCount(c.from(e)||this.createQuery(),t))}queryExtent(e,t){return this.load().then(()=>this.source.queryExtent(c.from(e)||this.createQuery(),t))}async hasDataChanged(){try{const{dataChanged:e,updates:t}=await this.source.refresh(this.customParameters);return t!=null&&this.read(t,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),e}catch{}return!1}_getLayerDomain(e){if(!this.fields)return null;let t=null;return this.fields.some(i=>(i.name===e&&(t=i.domain),!!t)),t}};s([r({readOnly:!0,json:{read:!1,write:!1}})],o.prototype,"capabilities",null),s([r({type:String})],o.prototype,"copyright",void 0),s([r({readOnly:!0})],o.prototype,"createQueryVersion",null),s([r(U("dateFieldsTimeReference"))],o.prototype,"dateFieldsTimeZone",void 0),s([r({readOnly:!0})],o.prototype,"defaultPopupTemplate",null),s([r({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],o.prototype,"definitionExpression",void 0),s([r({type:String})],o.prototype,"displayField",void 0),s([r({type:Boolean})],o.prototype,"editingEnabled",void 0),s([r(W)],o.prototype,"elevationInfo",void 0),s([r({type:[B],json:{name:"layerDefinition.fields",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"fields"}}}})],o.prototype,"fields",void 0),s([r(ce.fieldsIndex)],o.prototype,"fieldsIndex",void 0),s([r({type:I,json:{name:"extent"}})],o.prototype,"fullExtent",void 0),s([r({type:["point","polygon","polyline","multipoint"],json:{read:{reader:O.read}}})],o.prototype,"geometryType",void 0),s([r({type:Boolean})],o.prototype,"hasZ",void 0),s([r(X)],o.prototype,"id",void 0),s([r({type:Boolean,readOnly:!0})],o.prototype,"isTable",null),s([r(Y)],o.prototype,"labelsVisible",void 0),s([r({type:[H],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:K},write:!0}})],o.prototype,"labelingInfo",void 0),s([r(ee)],o.prototype,"legendEnabled",void 0),s([r({type:["show","hide"]})],o.prototype,"listMode",void 0),s([r({type:String,json:{name:"layerDefinition.objectIdField",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"objectIdField"}}}})],o.prototype,"objectIdField",void 0),s([r(te)],o.prototype,"opacity",void 0),s([r({type:["GeoJSON"]})],o.prototype,"operationalLayerType",void 0),s([r({readOnly:!0})],o.prototype,"parsedUrl",null),s([r(se)],o.prototype,"popupEnabled",void 0),s([r({type:ie,json:{name:"popupInfo",write:!0}})],o.prototype,"popupTemplate",void 0),s([r({types:re,json:{name:"layerDefinition.drawingInfo.renderer",write:!0,origins:{service:{name:"drawingInfo.renderer"},"web-scene":{types:oe}}}})],o.prototype,"renderer",null),s([r(ne)],o.prototype,"screenSizePerspectiveEnabled",void 0),s([r({readOnly:!0})],o.prototype,"source",void 0),s([r({type:F})],o.prototype,"spatialReference",void 0),s([r({type:[ae]})],o.prototype,"templates",void 0),s([r()],o.prototype,"title",void 0),s([r({json:{read:!1},readOnly:!0})],o.prototype,"type",void 0),s([r({type:String,readOnly:!0})],o.prototype,"typeIdField",void 0),s([r({type:[le]})],o.prototype,"types",void 0),s([r(ue)],o.prototype,"url",null),o=s([b("esri.layers.GeoJSONLayer")],o);const ge=o;export{ge as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/editingSupport-ZLOmiRNr.js","assets/index-fVgxHRq9.js","assets/index-xWplxuDE.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}