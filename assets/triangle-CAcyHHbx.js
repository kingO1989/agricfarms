import{cw as j,cA as w,bR as C,di as g,hS as A,bQ as x,hT as N,dk as O,fO as k,cX as q}from"./index-fVgxHRq9.js";import{s as L}from"./sphere-N5A7XRsD.js";import{v as Q}from"./lineSegment-h69rJ5SY.js";var T;(function(i){i[i.Layer=0]="Layer",i[i.Object=1]="Object",i[i.Mesh=2]="Mesh",i[i.Line=3]="Line",i[i.Point=4]="Point",i[i.Material=5]="Material",i[i.Texture=6]="Texture",i[i.COUNT=7]="COUNT"})(T||(T={}));class U{constructor(o,m,u){this.primitiveIndices=o,this._numIndexPerPrimitive=m,this.position=u,this._children=void 0,w(o.length>=1),w(u.size===3||u.size===4);const{data:s,size:l,indices:p}=u;w(p.length%this._numIndexPerPrimitive==0),w(p.length>=o.length*this._numIndexPerPrimitive);const I=o.length;let e=l*p[this._numIndexPerPrimitive*o[0]];f.clear(),f.push(e);const n=C(s[e],s[e+1],s[e+2]),t=g(n);for(let a=0;a<I;++a){const d=this._numIndexPerPrimitive*o[a];for(let c=0;c<this._numIndexPerPrimitive;++c){e=l*p[d+c],f.push(e);let h=s[e];n[0]=Math.min(h,n[0]),t[0]=Math.max(h,t[0]),h=s[e+1],n[1]=Math.min(h,n[1]),t[1]=Math.max(h,t[1]),h=s[e+2],n[2]=Math.min(h,n[2]),t[2]=Math.max(h,t[2])}}this.bbMin=n,this.bbMax=t;const r=A(x(),this.bbMin,this.bbMax,.5);this.radius=.5*Math.max(Math.max(t[0]-n[0],t[1]-n[1]),t[2]-n[2]);let b=this.radius*this.radius;for(let a=0;a<f.length;++a){e=f.at(a);const d=s[e]-r[0],c=s[e+1]-r[1],h=s[e+2]-r[2],M=d*d+c*c+h*h;if(M<=b)continue;const v=Math.sqrt(M),_=.5*(v-this.radius);this.radius=this.radius+_,b=this.radius*this.radius;const P=_/v;r[0]+=d*P,r[1]+=c*P,r[2]+=h*P}this.center=r,f.clear()}getChildren(){if(this._children||N(this.bbMin,this.bbMax)<=1)return this._children;const o=A(x(),this.bbMin,this.bbMax,.5),m=this.primitiveIndices.length,u=new Uint8Array(m),s=new Array(8);for(let t=0;t<8;++t)s[t]=0;const{data:l,size:p,indices:I}=this.position;for(let t=0;t<m;++t){let r=0;const b=this._numIndexPerPrimitive*this.primitiveIndices[t];let a=p*I[b],d=l[a],c=l[a+1],h=l[a+2];for(let M=1;M<this._numIndexPerPrimitive;++M){a=p*I[b+M];const v=l[a],_=l[a+1],P=l[a+2];v<d&&(d=v),_<c&&(c=_),P<h&&(h=P)}d<o[0]&&(r|=1),c<o[1]&&(r|=2),h<o[2]&&(r|=4),u[t]=r,++s[r]}let e=0;for(let t=0;t<8;++t)s[t]>0&&++e;if(e<2)return;const n=new Array(8);for(let t=0;t<8;++t)n[t]=s[t]>0?new Uint32Array(s[t]):void 0;for(let t=0;t<8;++t)s[t]=0;for(let t=0;t<m;++t){const r=u[t];n[r][s[r]++]=this.primitiveIndices[t]}this._children=new Array;for(let t=0;t<8;++t)n[t]!==void 0&&this._children.push(new U(n[t],this._numIndexPerPrimitive,this.position));return this._children}static prune(){f.prune()}}const f=new j({deallocator:null});function R(i){return i?{p0:g(i.p0),p1:g(i.p1),p2:g(i.p2)}:{p0:x(),p1:x(),p2:x()}}function $(i,o,m){return O(y,o,i),O(z,m,i),k(q(y,y,z))/2}new L(Q);new L(()=>R());const y=x(),z=x();export{T as e,U as o,$ as w};
