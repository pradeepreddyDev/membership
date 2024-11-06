import{r as d,_ as m,R as s,b as n,c as b,P as a,d as u}from"./index-TngbXn9o.js";import{C as Q}from"./index.esm-Dy67d_b4.js";var A=d.forwardRef(function(e,l){var r=e.children,t=e.as,p=t===void 0?"div":t,o=e.className,c=m(e,["children","as","className"]);return s.createElement(p,n({className:b("card-header",o)},c,{ref:l}),r)});A.propTypes={as:a.elementType,children:a.node,className:a.string};A.displayName="CCardHeader";var I=d.forwardRef(function(e,l){var r,t=e.children,p=e.align,o=e.className,c=e.size,f=m(e,["children","align","className","size"]);return s.createElement("nav",n({ref:l},f),s.createElement("ul",{className:b("pagination",(r={},r["justify-content-".concat(p)]=p,r["pagination-".concat(c)]=c,r),o)},t))});I.propTypes={align:a.oneOf(["start","center","end"]),children:a.node,className:a.string,size:a.oneOf(["sm","lg"])};I.displayName="CPagination";var B=d.forwardRef(function(e,l){var r=e.children,t=e.as,p=e.className,o=m(e,["children","as","className"]),c=t??(o.active?"span":"a");return s.createElement("li",n({className:b("page-item",{active:o.active,disabled:o.disabled},p)},o.active&&{"aria-current":"page"}),c==="a"?s.createElement(Q,n({className:"page-link",as:c},o,{ref:l}),r):s.createElement(c,{className:"page-link",ref:l},r))});B.propTypes={as:a.elementType,children:a.node,className:a.string};B.displayName="CPaginationItem";var P=d.forwardRef(function(e,l){var r,t=e.children,p=e.className,o=e.color,c=m(e,["children","className","color"]);return s.createElement("thead",n({className:b((r={},r["table-".concat(o)]=o,r),p)||void 0},c,{ref:l}),t)});P.propTypes={children:a.node,className:a.string,color:u};P.displayName="CTableHead";var w=d.forwardRef(function(e,l){var r,t=e.children,p=e.className,o=e.color,c=m(e,["children","className","color"]);return s.createElement("th",n({className:b((r={},r["table-".concat(o)]=o,r),p)||void 0},c,{ref:l}),t)});w.propTypes={children:a.node,className:a.string,color:u};w.displayName="CTableHeaderCell";var O=d.forwardRef(function(e,l){var r,t=e.children,p=e.className,o=e.color,c=m(e,["children","className","color"]);return s.createElement("tbody",n({className:b((r={},r["table-".concat(o)]=o,r),p)||void 0},c,{ref:l}),t)});O.propTypes={children:a.node,className:a.string,color:u};O.displayName="CTableBody";var E=d.forwardRef(function(e,l){var r,t=e.children,p=e.active,o=e.align,c=e.className,f=e.color,v=m(e,["children","active","align","className","color"]),N=v.scope?"th":"td";return s.createElement(N,n({className:b((r={},r["align-".concat(o)]=o,r["table-active"]=p,r["table-".concat(f)]=f,r),c)||void 0},v,{ref:l}),t)});E.propTypes={active:a.bool,align:a.oneOf(["bottom","middle","top"]),children:a.node,className:a.string,color:u};E.displayName="CTableDataCell";var y=d.forwardRef(function(e,l){var r,t=e.children,p=e.active,o=e.align,c=e.className,f=e.color,v=m(e,["children","active","align","className","color"]);return s.createElement("tr",n({className:b((r={},r["align-".concat(o)]=o,r["table-active"]=p,r["table-".concat(f)]=f,r),c)||void 0},v,{ref:l}),t)});y.propTypes={active:a.bool,align:a.oneOf(["bottom","middle","top"]),children:a.node,className:a.string,color:u};y.displayName="CTableRow";var R=d.forwardRef(function(e,l){var r,t=e.children,p=e.className,o=e.color,c=m(e,["children","className","color"]);return s.createElement("tfoot",n({className:b((r={},r["table-".concat(o)]=o,r),p)||void 0},c,{ref:l}),t)});R.propTypes={children:a.node,className:a.string,color:u};R.displayName="CTableFoot";var k=d.forwardRef(function(e,l){var r=e.children,t=m(e,["children"]);return s.createElement("caption",n({},t,{ref:l}),r)});k.propTypes={children:a.node};k.displayName="CTableCaption";var H=function(e){var l=e.children,r=e.responsive,t=m(e,["children","responsive"]);return r?s.createElement("div",n({className:typeof r=="boolean"?"table-responsive":"table-responsive-".concat(r)},t),l):s.createElement(s.Fragment,null,l)};H.propTypes={children:a.node,responsive:a.oneOfType([a.bool,a.oneOf(["sm","md","lg","xl","xxl"])])};H.displayName="CTableResponsiveWrapper";var z=function(e){return e.replace(/[-_.]/g," ").replace(/ +/g," ").replace(/([a-z0-9])([A-Z])/g,"$1 $2").split(" ").map(function(l){return l.charAt(0).toUpperCase()+l.slice(1)}).join(" ")},S=function(e){var l;return typeof e=="object"?(l=e.label)!==null&&l!==void 0?l:z(e.key):z(e)},V=function(e,l){return e?e.map(function(r){return typeof r=="object"?r.key:r}):l&&X(l)},X=function(e){return Object.keys(e[0]||{}).filter(function(l){return l.charAt(0)!=="_"})},D=d.forwardRef(function(e,l){var r,t=e.children,p=e.align,o=e.borderColor,c=e.bordered,f=e.borderless,v=e.caption,N=e.captionTop,L=e.className,x=e.color,g=e.columns,F=e.footer,W=e.hover,C=e.items,$=e.responsive,M=e.small,U=e.striped,Z=e.stripedColumns,q=e.tableFootProps,G=e.tableHeadProps,J=m(e,["children","align","borderColor","bordered","borderless","caption","captionTop","className","color","columns","footer","hover","items","responsive","small","striped","stripedColumns","tableFootProps","tableHeadProps"]),j=d.useMemo(function(){return V(g,C)},[g,C]);return s.createElement(H,{responsive:$},s.createElement("table",n({className:b("table",(r={},r["align-".concat(p)]=p,r["border-".concat(o)]=o,r["caption-top"]=N||v==="top",r["table-bordered"]=c,r["table-borderless"]=f,r["table-".concat(x)]=x,r["table-hover"]=W,r["table-sm"]=M,r["table-striped"]=U,r["table-striped-columns"]=Z,r),L)},J,{ref:l}),(v&&v!=="top"||N)&&s.createElement(k,null,v||N),g&&s.createElement(P,n({},G),s.createElement(y,null,g.map(function(i,h){return s.createElement(w,n({},i._props&&n({},i._props),i._style&&{style:n({},i._style)},{key:h}),S(i))}))),C&&s.createElement(O,null,C.map(function(i,h){return s.createElement(y,n({},i._props&&n({},i._props),{key:h}),j&&j.map(function(T,K){return i[T]!==void 0?s.createElement(E,n({},i._cellProps&&n(n({},i._cellProps.all&&n({},i._cellProps.all)),i._cellProps[T]&&n({},i._cellProps[T])),{key:K}),i[T]):null}))})),t,F&&s.createElement(R,n({},q),s.createElement(y,null,F.map(function(i,h){return s.createElement(E,n({},typeof i=="object"&&i._props&&n({},i._props),{key:h}),typeof i=="object"?i.label:i)})))))});D.propTypes={align:a.oneOf(["bottom","middle","top"]),borderColor:a.string,bordered:a.bool,borderless:a.bool,caption:a.oneOfType([a.string,a.oneOf(["top"])]),captionTop:a.string,children:a.node,className:a.string,color:u,columns:a.array,footer:a.array,hover:a.bool,items:a.array,responsive:a.oneOfType([a.bool,a.oneOf(["sm","md","lg","xl","xxl"])]),small:a.bool,striped:a.bool,stripedColumns:a.bool,tableFootProps:a.shape(n({},R.propTypes)),tableHeadProps:a.shape(n({},P.propTypes))};D.displayName="CTable";export{A as C,D as a,P as b,y as c,w as d,O as e,E as f,I as g,B as h};