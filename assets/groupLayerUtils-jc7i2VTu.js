import{I as l,b as p}from"./utils-RTexA_EI.js";import{a as s}from"./jsonContext-VOnM_z9i.js";import{i as y,g as f,b as v}from"./index-fVgxHRq9.js";import{u as i}from"./saveUtils-3W-wjGHH.js";import"./originUtils-1w5HeAJR.js";import"./multiOriginJSONSupportUtils-R5XHSAtL.js";import"./saveAPIKeyUtils-FKmOm4AP.js";import"./resourceUtils-0deFedx4.js";const n="Group Layer",d="group-layer-save",I="group-layer-save-as",o=f.GROUP_LAYER_MAP;function c(e){return{isValid:e.type==="group",errorMessage:"Layer.type should be 'group'"}}function g(e){return{isValid:v(e,o),errorMessage:`Layer.portalItem.typeKeywords should have '${o}'`}}function u(e){const r=e.layerJSON;return Promise.resolve(r&&Object.keys(r).length?r:null)}async function P(e,r){r.title||(r.title=e.title),y(r,o)}async function $(e,r){return l({layer:e,itemType:n,validateLayer:c,validateItem:g,createJSONContext:t=>s(t,e),createItemData:u,errorNamePrefix:d,saveResources:async(t,a)=>(e.sourceIsPortalItem||await t.removeAllResources().catch(()=>{}),i(e.resourceReferences,a))},r)}async function w(e,r,t){return p({layer:e,itemType:n,validateLayer:c,createJSONContext:a=>s(a,e),createItemData:u,errorNamePrefix:I,newItem:r,setItemProperties:P,saveResources:(a,m)=>i(e.resourceReferences,m)},t)}export{$ as save,w as saveAs};
