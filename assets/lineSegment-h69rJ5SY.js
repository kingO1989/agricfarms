import{di as e,bQ as c,dj as g,dk as s,cW as m,dl as p,dm as b,aX as l,dn as h}from"./index-fVgxHRq9.js";import{s as j,c as k}from"./sphere-N5A7XRsD.js";function a(r){return r?{origin:e(r.origin),vector:e(r.vector)}:{origin:c(),vector:c()}}function Q(r,o,n=a()){return g(n.origin,r),s(n.vector,o,r),n}function W(r,o,n){return w(r,o,0,1,n)}function w(r,o,n,u,i){const{vector:t,origin:v}=r,d=s(k.get(),o,v),f=m(t,d)/p(t);return b(i,t,l(f,n,u)),h(i,i,r.origin)}new j(()=>a());export{Q as b,W as l,a as v};
