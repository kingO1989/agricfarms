import{L as v,O as y,N as p,P as c,b_ as S,s as f}from"./index-fVgxHRq9.js";async function w(s,t,e){var l;const o=v(s),i=t.toJSON();t.validationSet&&(i.validationSet=JSON.stringify(t.validationSet));const n={...i,returnEdits:!0,f:"json"},r=y({...o.query,...n}),a=p(r,{...e,method:"post"}),m=`${o.path}/validateNetworkTopology`,{data:g}=await c(m,a),d=S.fromJSON(g);return d.serviceEdits=((l=d.serviceEdits)==null?void 0:l.map(u=>({layerId:u.id,editedFeatures:u.editedFeatures})))??[],d}async function b(s,t,e){if(!t.gdbVersion)throw new f("submit-validate-network-topology-job:missing-gdb-version","version is missing");const o=v(s),i=t.toJSON();t.validationSet&&(i.validationSet=JSON.stringify(t.validationSet));const n=p(o.query,{query:y({...i,returnEdits:!0,async:!0,f:"json"}),...e,method:"post"}),r=`${o.path}/validateNetworkTopology`,{data:a}=await c(r,n);return a?a.statusUrl:null}export{b as submitValidateNetworkTopologyJob,w as validateNetworkTopology};
