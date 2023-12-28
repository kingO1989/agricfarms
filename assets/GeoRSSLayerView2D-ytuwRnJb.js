import{a3 as l,a4 as h,a5 as g,a6 as w,a7 as f,a8 as d,a9 as n,z as u,D as V}from"./index-fVgxHRq9.js";import{m as b,u as S}from"./LayerView-ZngOj54l.js";import{i as _}from"./GraphicContainer-2ugk_y_Z.js";import{r as T}from"./GraphicsView2D-eBK-qoaQ.js";import"./Container-3hREPjV1.js";import"./definitions-t6EJN9lX.js";import"./enums-8pc8f5Ge.js";import"./Texture--Zqu2G7p.js";import"./color-fkODQCEp.js";import"./enums--FbEXJ87.js";import"./VertexElementDescriptor-0hGjloLE.js";import"./number-sTjsTbdA.js";import"./BaseGraphicContainer-pgbkvQD7.js";import"./FeatureContainer-1tG95iHH.js";import"./AttributeStoreView-AA2hnaBe.js";import"./TiledDisplayObject-0foEm4-e.js";import"./WGLContainer-nb9pK_2B.js";import"./FramebufferObject-YojrUa_N.js";import"./ProgramTemplate-gEAz8LDK.js";import"./GeometryUtils-q-uRjIy3.js";import"./alignmentUtils-XT3TYmYW.js";import"./StyleDefinition-ohiNeWtS.js";import"./config-z2KFXUcx.js";import"./earcut-cCK3zwoX.js";import"./featureConversionUtils-6MTAsXLs.js";import"./OptimizedFeature-5RGb7-P9.js";import"./OptimizedFeatureSet-smVI1ez9.js";import"./OptimizedGeometry-CbNXANBG.js";import"./visualVariablesUtils-usph7ynk.js";import"./cimAnalyzer-IjUdWrru.js";import"./fontUtils-flNZiNbu.js";import"./BidiEngine-8z8MVveq.js";import"./labelPoint-3rLs0OQi.js";import"./GeometryUtils-CEMOhUyj.js";import"./Rect-pT1ASav_.js";import"./quantizationUtils-n7I1jEKI.js";import"./floatRGBA-iLUgH9u1.js";import"./ExpandedCIM-H4slnSfZ.js";import"./util-Nr5Du2Ty.js";import"./TileContainer-jCE_KyJs.js";import"./vec3f32-6rWBPTzX.js";import"./normalizeUtilsSync-7RRouG00.js";import"./projectionSupport--YJUaBfm.js";import"./json-v6EOeNTY.js";import"./Matcher-BpR8mfN3.js";import"./tileUtils-pcBJnprf.js";import"./TurboLine-LeY1t2-E.js";import"./ComputedAttributeStorage-sO7ul2G7.js";import"./TimeOnly-R83z88xM.js";let y=class extends b(S){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[]}async hitTest(i,r){if(!this.graphicsViews.length)return null;const o=this.layer;return this.graphicsViews.reverse().flatMap(e=>{const t=this._popupTemplates.get(e),s=e.hitTest(i);for(const p of s)p.layer=o,p.sourceLayer=o,p.popupTemplate=t;return s}).map(e=>({type:"graphic",graphic:e,layer:o,mapPoint:i}))}update(i){if(this.graphicsViews)for(const r of this.graphicsViews)r.processUpdate(i)}attach(){this.addAttachHandles([l(()=>{var i;return(i=this.layer)==null?void 0:i.featureCollections},i=>{this._clear();for(const{popupInfo:r,featureSet:o,layerDefinition:e}of i){const t=g.fromJSON(o),s=new w(t.features),p=e.drawingInfo,c=r?f.fromJSON(r):null,a=d(p.renderer),m=new T({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:s,renderer:a,container:new _(this.view.featuresTilingScheme)});this._graphicsViewMap[t.geometryType]=m,this._popupTemplates.set(m,c),t.geometryType!=="polygon"||this.layer.polygonSymbol?t.geometryType!=="polyline"||this.layer.lineSymbol?t.geometryType!=="point"||this.layer.pointSymbol||(this.layer.pointSymbol=a.symbol):this.layer.lineSymbol=a.symbol:this.layer.polygonSymbol=a.symbol,this.graphicsViews.push(m),this.container.addChild(m.container)}},h),l(()=>{var i;return(i=this.layer)==null?void 0:i.polygonSymbol},i=>{this._graphicsViewMap.polygon.renderer=new n({symbol:i})},h),l(()=>{var i;return(i=this.layer)==null?void 0:i.lineSymbol},i=>{this._graphicsViewMap.polyline.renderer=new n({symbol:i})},h),l(()=>{var i;return(i=this.layer)==null?void 0:i.pointSymbol},i=>{this._graphicsViewMap.point.renderer=new n({symbol:i})},h)])}detach(){this._clear()}moveStart(){}moveEnd(){}viewChange(){for(const i of this.graphicsViews)i.viewChange()}_clear(){this.container.removeAllChildren();for(const i of this.graphicsViews)i.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0}};y=u([V("esri.views.2d.layers.GeoRSSLayerView2D")],y);const Vi=y;export{Vi as default};
