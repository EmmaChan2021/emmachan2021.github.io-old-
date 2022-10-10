/*! For license information please see ccc49370.fc9b5554.js.LICENSE.txt */
"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[103],{9407:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(7462),a=n(7294),l=n(6010),o=n(3743);const i="tableOfContents_bqdL";function c(e){let{className:t,...n}=e;return a.createElement("div",{className:(0,l.Z)(i,"thin-scrollbar",t)},a.createElement(o.Z,(0,r.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},3743:(e,t,n)=>{n.d(t,{Z:()=>g});var r=n(7462),a=n(7294),l=n(6668);function o(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const r=n.slice(2,e.level);e.parentIndex=Math.max(...r),n[e.level]=t}));const r=[];return t.forEach((e=>{const{parentIndex:n,...a}=e;n>=0?t[n].children.push(a):r.push(a)})),r}function i(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:r}=e;return t.flatMap((e=>{const t=i({toc:e.children,minHeadingLevel:n,maxHeadingLevel:r});return function(e){return e.level>=n&&e.level<=r}(e)?[{...e,children:t}]:t}))}function c(e){const t=e.getBoundingClientRect();return t.top===t.bottom?c(e.parentNode):t}function s(e,t){let{anchorTopOffset:n}=t;const r=e.find((e=>c(e).top>=n));if(r){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(c(r))?r:e[e.indexOf(r)-1]??null}return e[e.length-1]??null}function m(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:t}}=(0,l.L)();return(0,a.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,a.useRef)(void 0),n=m();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:r,linkActiveClassName:a,minHeadingLevel:l,maxHeadingLevel:o}=e;function i(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(r),i=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const r=[];for(let a=t;a<=n;a+=1)r.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(r.join()))}({minHeadingLevel:l,maxHeadingLevel:o}),c=s(i,{anchorTopOffset:n.current}),m=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(a),e.classList.add(a),t.current=e):e.classList.remove(a)}(e,e===m)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,n])}function u(e){let{toc:t,className:n,linkClassName:r,isChild:l}=e;return t.length?a.createElement("ul",{className:l?void 0:n},t.map((e=>a.createElement("li",{key:e.id},a.createElement("a",{href:`#${e.id}`,className:r??void 0,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(u,{isChild:!0,toc:e.children,className:n,linkClassName:r}))))):null}const p=a.memo(u);function g(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:c="table-of-contents__link",linkActiveClassName:s,minHeadingLevel:m,maxHeadingLevel:u,...g}=e;const f=(0,l.L)(),v=m??f.tableOfContents.minHeadingLevel,h=u??f.tableOfContents.maxHeadingLevel,E=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:r}=e;return(0,a.useMemo)((()=>i({toc:o(t),minHeadingLevel:n,maxHeadingLevel:r})),[t,n,r])}({toc:t,minHeadingLevel:v,maxHeadingLevel:h});return d((0,a.useMemo)((()=>{if(c&&s)return{linkClassName:c,linkActiveClassName:s,minHeadingLevel:v,maxHeadingLevel:h}}),[c,s,v,h])),a.createElement(p,(0,r.Z)({toc:E,className:n,linkClassName:c},g))}},1209:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(7294),a=n(5893);function l({id:e,host:t,repo:l,repoId:o,category:i,categoryId:c,mapping:s,term:m,strict:d,reactionsEnabled:u,emitMetadata:p,inputPosition:g,theme:f,lang:v,loading:h}){const[E,b]=(0,r.useState)(!1);return(0,r.useEffect)((()=>{E||(n.e(891).then(n.bind(n,2891)),b(!0))}),[]),E?(0,a.jsx)("giscus-widget",{id:e,host:t,repo:l,repoid:o,category:i,categoryid:c,mapping:s,term:m,strict:d,reactionsenabled:u,emitmetadata:p,inputposition:g,theme:f,lang:v,loading:h}):null}const o=()=>r.createElement("div",{style:{paddingTop:50}},r.createElement(l,{id:"comments",repo:"EmmaChan2021/emmachan2021.github.io",repoId:"R_kgDOIHQZmg",category:"Announcements",categoryId:"DIC_kwDOIHQZms4CR5Q8",mapping:"og:title",strict:"1",term:"Welcome to @giscus/react component!",reactionsEnabled:"1",emitMetadata:"0",inputPosition:"bottom",theme:"preferred_color_scheme",lang:"en",loading:"lazy"}))},6574:(e,t,n)=>{n.r(t),n.d(t,{default:()=>E});var r=n(7294),a=n(6010),l=n(1944),o=n(5281),i=n(9460),c=n(9058),s=n(390),m=n(7462),d=n(5999),u=n(2244);function p(e){const{nextItem:t,prevItem:n}=e;return r.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,d.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n&&r.createElement(u.Z,(0,m.Z)({},n,{subLabel:r.createElement(d.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")})),t&&r.createElement(u.Z,(0,m.Z)({},t,{subLabel:r.createElement(d.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post"),isNext:!0})))}function g(){const{assets:e,metadata:t}=(0,i.C)(),{title:n,description:a,date:o,tags:c,authors:s,frontMatter:m}=t,{keywords:d}=m,u=e.image??m.image;return r.createElement(l.d,{title:n,description:a,keywords:d,image:u},r.createElement("meta",{property:"og:type",content:"article"}),r.createElement("meta",{property:"article:published_time",content:o}),s.some((e=>e.url))&&r.createElement("meta",{property:"article:author",content:s.map((e=>e.url)).filter(Boolean).join(",")}),c.length>0&&r.createElement("meta",{property:"article:tag",content:c.map((e=>e.label)).join(",")}))}var f=n(9407),v=n(1209);function h(e){let{sidebar:t,children:n}=e;const{metadata:a,toc:l}=(0,i.C)(),{nextItem:o,prevItem:m,frontMatter:d}=a,{hide_table_of_contents:u,toc_min_heading_level:g,toc_max_heading_level:h}=d;return r.createElement(c.Z,{sidebar:t,toc:!u&&l.length>0?r.createElement(f.Z,{toc:l,minHeadingLevel:g,maxHeadingLevel:h}):void 0},r.createElement(s.Z,null,n),(o||m)&&r.createElement(p,{nextItem:o,prevItem:m}),r.createElement(v.Z,null))}function E(e){const t=e.content;return r.createElement(i.n,{content:e.content,isBlogPostPage:!0},r.createElement(l.FG,{className:(0,a.Z)(o.k.wrapper.blogPages,o.k.page.blogPostPage)},r.createElement(g,null),r.createElement(h,{sidebar:e.sidebar},r.createElement(t,null))))}},7694:(e,t,n)=>{n.d(t,{Z:()=>g});var r=n(7462),a=n(7294),l=n(5742);var o=n(814);var i=n(9960);var c=n(4673);var s=n(2503);function m(e){return a.createElement(s.Z,e)}var d=n(7390),u=n(1470),p=n(3612);const g={head:function(e){const t=a.Children.map(e.children,(e=>a.isValidElement(e)?function(e){var t;if(null!=(t=e.props)&&t.mdxType&&e.props.originalType){const{mdxType:t,originalType:n,...r}=e.props;return a.createElement(e.props.originalType,r)}return e}(e):e));return a.createElement(l.Z,e,t)},code:function(e){const t=["a","b","big","i","span","em","strong","sup","sub","small"];return a.Children.toArray(e.children).every((e=>{var n;return"string"==typeof e&&!e.includes("\n")||(0,a.isValidElement)(e)&&t.includes(null==(n=e.props)?void 0:n.mdxType)}))?a.createElement("code",e):a.createElement(o.Z,e)},a:function(e){return a.createElement(i.Z,e)},pre:function(e){var t;return a.createElement(o.Z,(0,a.isValidElement)(e.children)&&"code"===(null==(t=e.children.props)?void 0:t.originalType)?e.children.props:{...e})},details:function(e){const t=a.Children.toArray(e.children),n=t.find((e=>{var t;return a.isValidElement(e)&&"summary"===(null==(t=e.props)?void 0:t.mdxType)})),l=a.createElement(a.Fragment,null,t.filter((e=>e!==n)));return a.createElement(c.Z,(0,r.Z)({},e,{summary:n}),l)},ul:d.Z,img:u.Z,h1:e=>a.createElement(m,(0,r.Z)({as:"h1"},e)),h2:e=>a.createElement(m,(0,r.Z)({as:"h2"},e)),h3:e=>a.createElement(m,(0,r.Z)({as:"h3"},e)),h4:e=>a.createElement(m,(0,r.Z)({as:"h4"},e)),h5:e=>a.createElement(m,(0,r.Z)({as:"h5"},e)),h6:e=>a.createElement(m,(0,r.Z)({as:"h6"},e)),admonition:p.Z}},6706:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(7294),a=n(5042);function l(e){return r.createElement(r.Fragment,null,r.createElement(a.Z,e))}},5251:(e,t,n)=>{n(7418);var r=n(7294),a=60103;if(60107,"function"==typeof Symbol&&Symbol.for){var l=Symbol.for;a=l("react.element"),l("react.fragment")}var o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,n){var r,l={},s=null,m=null;for(r in void 0!==n&&(s=""+n),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(m=t.ref),t)i.call(t,r)&&!c.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===l[r]&&(l[r]=t[r]);return{$$typeof:a,type:e,key:s,ref:m,props:l,_owner:o.current}}t.jsx=s},5893:(e,t,n)=>{e.exports=n(5251)}}]);