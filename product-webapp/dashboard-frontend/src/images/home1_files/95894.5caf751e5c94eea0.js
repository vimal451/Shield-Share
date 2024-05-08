"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[95894],{95894:function(t,e,r){r.r(e),r.d(e,{AssetFormats:function(){return p},getTranslationKeys:function(){return v}});var n=r(52322),i=r(42541),a=r(91290),s=r(52850),o=r(42228),u=r(10242),m=r(59581),c=r(57700),l=r(76825),f=r(88286),d=r(11456),h=r(2784),v=t=>{var{assetTypeLabel:e}=t;return{formats:"formats",formatsWithAssetType:["formats_with_asset_type",{ASSET_TYPE:e}],pixels:"pixels",dpi:"dpi",[u.yF]:"common:resolutions_4k",[u.HD]:"common:resolutions_hd",[u.SD]:"common:resolutions_sd",[u.qY]:"common:resolutions_web",[u.Zh]:"common:resolutions_web",[u.T0]:"common:resolutions_web"}},x=t=>{var{size:e}=t,{classes:r}=(0,o.e)({layout:"column"});return(0,n.jsx)("li",{children:(0,n.jsx)(i.Z,{variant:"body2",className:r.listItem,children:e||(0,n.jsx)(a.Z,{variant:"text",width:c.G})})})},p=t=>{var{asset:e,templateFormats:r,assetTypeLabel:u}=t,p=(0,l.Tp)(e),g=(0,l.PD)(e),{ready:y,labels:b}=(0,d.D)({namespace:s.sm6,translationKeys:v({assetTypeLabel:u})}),{classes:S}=(0,o.s)({layout:"column"}),D=(0,f.Ch)(),{formattedSizes:F}=r.formattedSizes.length>=1?r:D({asset:e,labels:b,limit:g&&1}),w=[m.k4,m.pX,m.bz].includes(p)?b.formatsWithAssetType:b.formats,[z,_]=(0,h.useState)(()=>!!r.formattedSizes.length);return(0,h.useEffect)(()=>{z||_(!0)},[z]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.Z,{className:S.labelTitle,children:y?w:(0,n.jsx)(a.Z,{variant:"text",width:c.pP})}),(0,n.jsx)("ul",{className:S.list,children:F.map(t=>(0,n.jsx)(x,{size:z?t:void 0},t))})]})};p.defaultProps={templateFormats:{formattedSizes:[]},assetTypeLabel:""}},88286:function(t,e,r){r.d(e,{Ch:function(){return K},It:function(){return C},RO:function(){return E},Rc:function(){return F},Ux:function(){return x},kn:function(){return P},oE:function(){return p}});var n=r(57460),i=r(6692),a=r(24151),s=r(59581),o=r(95663),u=r(394),m=r(23534),c=r(79041),l=r(76825),f=r(21763),d=r(2784),h=function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return null===(t=e.toString().match(/[0-9.,]+/))||void 0===t?void 0:t[0]},v={[o.xn]:{suffix:"px",widthKey:"width",heightKey:"height"},[o.tS]:{suffix:"in",widthKey:"widthIn",heightKey:"heightIn"},[o.IC]:{suffix:"cm",widthKey:"widthCm",heightKey:"heightCm"}},x=t=>{var{fullLocale:e}=(0,m.PE)();return new Intl.NumberFormat(e,t).format},p=t=>{var{unit:e,maximumFractionDigits:r}=t,[n,i]=(0,d.useState)(""),{fullLocale:a}=(0,m.PE)(),s=(0,d.useMemo)(()=>{try{return new Intl.NumberFormat(a,{style:"unit",unit:e,maximumFractionDigits:r})}catch(t){return i(t),{format:t=>t}}},[a,r,e]);return(0,d.useMemo)(()=>({format:s.format,error:n}),[s.format,n])},g=t=>{var{humanReadableSize:e,size:r,name:n}=t;return e||"".concat(r.toFixed(1)," ").concat(n)},y=t=>{var{formatter:e,humanReadableSize:r,size:n,name:i}=t,{error:a,format:s}=e;return a?g({humanReadableSize:r,size:n,name:i}):s(n)},b=t=>{var{bytes:e,gbFormatter:r,mbFormatter:n,kbFormatter:i,humanReadableSize:a}=t,s=e/1e3,o=s/1e3,u=o/1e3;return u>=1?y({formatter:r,humanReadableSize:a,size:u,name:"GB"}):o>=1?y({formatter:n,humanReadableSize:a,size:o,name:"MB"}):y({formatter:i,humanReadableSize:a,size:s,name:"KB"})},S=(t,e,r)=>{var{suffix:n,widthKey:i,heightKey:a}=v[t]||{},s=r[t],[o,u]=[e[i],e[a]].map(t=>t&&Number(h(t))),m=!Number.isNaN(o)&&o>0,c=!Number.isNaN(u)&&u>0;return m||c?{formattedWidth:m?y({formatter:s,size:o,name:n}):"",formattedHeight:c?y({formatter:s,size:u,name:n}):""}:{}},D=t=>{var{assetSize:e,kbFormatter:r,mbFormatter:n,gbFormatter:i}=t,{sizeInBytes:a,humanReadableSize:s,fileSize:o}=e;return a||o||s?b({bytes:a||1e3*o,gbFormatter:i,mbFormatter:n,kbFormatter:r,humanReadableSize:s}):""},F=t=>{var{assetSize:e}=t;return D({assetSize:e,kbFormatter:p({unit:u.KB,maximumFractionDigits:0}),mbFormatter:p({unit:u.MB,maximumFractionDigits:1}),gbFormatter:p({unit:u.GB,maximumFractionDigits:1})})},w=t=>{var{formattedWidth:e,formattedHeight:r}=t;return"".concat(h(e)," \xd7 ").concat(r)},z=t=>{var{assetSize:e,displayUnits:r,inchFormatter:n,centimeterFormatter:i,labels:a={}}=t,{formattedWidth:s,formattedHeight:u}=S(r,e,{[o.tS]:n,[o.IC]:i,[o.xn]:{format:t=>a.pixels?"".concat(t," ").concat(a.pixels):"".concat(t," ").concat(v[o.xn].suffix)}});return s||u?w({formattedWidth:s,formattedHeight:u}):""},_=t=>z(t)||z((0,i._)((0,n._)({},t),{displayUnits:o.xn})),N=t=>{var{displayUnits:e,assetSize:r,inchFormatter:n,centimeterFormatter:i,labels:a}=t;return e===o.xn?_({assetSize:r,displayUnits:o.tS,inchFormatter:n,centimeterFormatter:i,labels:a}):_({assetSize:r,displayUnits:e,inchFormatter:n,centimeterFormatter:i,labels:a})},C=t=>{var{isImageAsset:e,assetSize:r,labels:n}=t,i=(0,f.n)(),a=p({unit:u.P,maximumFractionDigits:0}),s=p({unit:u.X,maximumFractionDigits:0}),m=_({assetSize:r,displayUnits:o.xn,inchFormatter:a,centimeterFormatter:s,labels:n}),c={[o.xn]:m};return e&&(c.formattedDimensions=N({assetSize:r,labels:n,displayUnits:i,inchFormatter:a,centimeterFormatter:s})),c},P=()=>{var t=(0,f.n)(),e=p({unit:u.KB,maximumFractionDigits:0}),r=p({unit:u.MB,maximumFractionDigits:1}),n=p({unit:u.GB,maximumFractionDigits:1}),i=p({unit:u.P,maximumFractionDigits:0}),a=p({unit:u.X,maximumFractionDigits:0});return(0,d.useCallback)(s=>{var{assetSize:o}=s,u=D({assetSize:o,kbFormatter:e,mbFormatter:r,gbFormatter:n}),m=_({assetSize:o,displayUnits:t,inchFormatter:i,centimeterFormatter:a});return u?{resolutionDetails:m,size:u}:{resolutionDetails:m}},[a,t,i,n,r,e])},B=t=>{var{assetSize:e,centimeterFormatter:r,displayUnits:n,inchFormatter:i,isImageAsset:a,labels:u,isVideoAsset:m,isDesignAsset:c}=t,{format:l,dpi:f,name:d,resolution:h}=e,v=(null==l?void 0:l.toUpperCase())||"";if(d===s.gf)return v;var x=_({assetSize:e,PIXELS:o.xn,inchFormatter:i,centimeterFormatter:r,labels:u});return[...new Set((a||c)&&f?[x,N({assetSize:e,labels:u,displayUnits:n,inchFormatter:i,centimeterFormatter:r}),"".concat(u.dpi," ").concat(f),v]:m?[u[null==h?void 0:h.toLowerCase()]||"",x,v]:[x,v])].filter(t=>!!t).join(" • ")},E=t=>{var{sizes:e=[]}=t;return e.filter(t=>t.format!==a.LX)},I=t=>{var{limit:e=0,sortedSizes:r}=t;return e>0?null==r?void 0:r.slice(0,e):r},K=()=>{var t=(0,f.n)(),e=p({unit:u.P,maximumFractionDigits:1}),r=p({unit:u.X,maximumFractionDigits:1});return(0,d.useCallback)(n=>{var{asset:i,labels:a,limit:s=0}=n,o=(0,l.aT)(i),u=(0,l.Am)(i),m=(0,l.ML)(i),f=o||m?E({sizes:Object.values(i.sizes||{})}):i.sizes,d=I({limit:s,sortedSizes:o||m?(0,c.hQ)(Object.values(f)):(0,c.Z)({sizes:f})});return{formattedSizes:null==d?void 0:d.map(n=>B({assetSize:n,centimeterFormatter:r,displayUnits:t,inchFormatter:e,isImageAsset:o,isDesignAsset:m,labels:a,isVideoAsset:u}))}},[t,r,e])}},21763:function(t,e,r){r.d(e,{b:function(){return v},n:function(){return x}});var n=r(57460),i=r(32212),a=r(55279),s=r(95663),o=r(82971),u=r(46109),m=r(26481),c=r(10969),l=r(75615),f=r(3255),d=r(53076),h={[a.BRANDS.SSTK]:o.mh,[a.BRANDS.ENTERPRISE]:o.mC},v=function(){var{queryParams:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=(0,d.B)(),{brand:r}=(0,m.D)(),a=(0,n._)({site_name:h[r]},t);return(0,f.ZP)(e&&(0,i.nI)({queryParams:a}).formattedUrl,t=>c.uS.get(t).then(t=>(0,l.O)(t.data)),{dedupingInterval:u.yR})},x=()=>{var{data:t}=v();return(null==t?void 0:t.displayUnits)||s.xn}}}]);
//# sourceMappingURL=95894.5caf751e5c94eea0.js.map