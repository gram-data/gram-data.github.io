(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{Ecu8:function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),r=a("Oy/b"),c=a.n(r);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var m=Object(n.memo)((function(e){var t=e.children,a=e.math,r=e.block,m=e.errorColor,i=e.renderError,u=e.settings,d=e.as,E=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t.indexOf(a=r[n])>=0||(l[a]=e[a]);return l}(e,["children","math","block","errorColor","renderError","settings","as"]),s=d||(r?"div":"span"),h=null!=t?t:a,p=Object(n.useState)({innerHtml:""}),b=p[0],g=p[1];return Object(n.useEffect)((function(){try{var e=c.a.renderToString(h,o({displayMode:!!r,errorColor:m,throwOnError:!!i},u));g({innerHtml:e})}catch(e){if(!(e instanceof c.a.ParseError||e instanceof TypeError))throw e;g(i?{errorElement:i(e)}:{innerHtml:e.message})}}),[r,h,m,i,u]),"errorElement"in b?b.errorElement:l.a.createElement(s,Object.assign({},E,{dangerouslySetInnerHTML:{__html:b.innerHtml}}))}));t.a=m},Fs4X:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),r=a("9Dj+"),c=a("vrFN"),o=(a("vg9a"),a("Ecu8")),m=a("lPbZ");t.default=function(){return l.a.createElement(r.a,null,l.a.createElement(c.a,{title:"Graph Path Math"}),l.a.createElement(m.b.h1,null,"Graph Path Math"),l.a.createElement("p",null,"Everything is a Path. Structure builds up by composing empty Paths into non-empty Paths."),l.a.createElement(m.b.h2,null,"Type Definitions"),l.a.createElement("p",null,"(The notation here borrows from Purescript.)"),l.a.createElement(m.b.h3,null,"Paths"),l.a.createElement("p",null,"Paths are either empty or the composition of two paths."),l.a.createElement("dl",null,l.a.createElement("dt",null,l.a.createElement(m.b.code,null,"data Path = empty | path (Path) (Path) ")),l.a.createElement("dd",null,l.a.createElement(m.b.code,null,"empty :: Path")),l.a.createElement("dd",null,l.a.createElement(m.b.code,null,"path :: Path --\x3e Path --\x3e Path"))),l.a.createElement(m.b.h3,null,"Graph elements"),l.a.createElement("p",null,"Graph elements are special cases of a Path."),l.a.createElement("p",null,"A Node is a Path of length 0 containing two empty Paths."),l.a.createElement("dl",null,l.a.createElement("dt",null,l.a.createElement(m.b.code,null,"type Node = Path")),l.a.createElement("dd",null,l.a.createElement(m.b.code,null,"node :: Empty --\x3e Empty --\x3e Node"))),l.a.createElement("p",null,"An Edge is a Path of length 1 containing two Nodes."),l.a.createElement("dl",null,l.a.createElement("dt",null,l.a.createElement(m.b.code,null,"type Edge = Path")),l.a.createElement("dd",null,l.a.createElement(m.b.code,null,"edge :: Node --\x3e Node --\x3e Edge"))),l.a.createElement(m.b.h3,null,"Path sequence"),l.a.createElement("p",null,"A PathSequence is a Path-like lazy composition of Paths represented as a list. The list elements are composed pairwise to produce the final Path representation. The order of pairing is left-to-right."),l.a.createElement("dl",null,l.a.createElement("dt",null,l.a.createElement(m.b.code,null,"type PathSequence = List Path")),l.a.createElement("dd",null,l.a.createElement(m.b.code,null,"foldPath :: PathSequence --\x3e Path"))),l.a.createElement(m.b.h3,null,"Graphs"),l.a.createElement("p",null,"The classic graph ",l.a.createElement(m.b.code,null,"𝔾 = (𝕍, 𝔼)")," is derived from Paths. Both nodes and edges may occur multiple times within a path. The order of appearance within a Path represents a sort of additive history for the graph elements. Record values and labels are merged forward."),l.a.createElement("dl",null,l.a.createElement("dt",null,l.a.createElement(m.b.code,null,"type NodeSet = List Node")),l.a.createElement("dd",null,l.a.createElement(m.b.code,null,"nodes :: Path --\x3e List Node"))),l.a.createElement("dl",null,l.a.createElement("dt",null,l.a.createElement(m.b.code,null,"type EdgeSet = List Edge")),l.a.createElement("dd",null,l.a.createElement(m.b.code,null,"edges :: Path --\x3e List Edge"))),l.a.createElement("dl",null,l.a.createElement("dt",null,l.a.createElement(m.b.code,null,"type Graph = { nodes :: NodeSet, edges :: EdgeSet }"))),l.a.createElement(m.b.h2,null,"Path Notation"),l.a.createElement("p",null,"Gram uses two complementary notations for paths:"),l.a.createElement("ol",null,l.a.createElement("li",null,"Cypher path: alternating nodes and edges"),l.a.createElement("li",null,"Path composition: two paths composed into a new path")),l.a.createElement("p",null,"Both notations use the following relations:"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(m.b.code,null,"<--")," oriented to the left"),l.a.createElement("li",null,l.a.createElement(m.b.code,null,"--\x3e")," oriented to the right"),l.a.createElement("li",null,l.a.createElement(m.b.code,null,"——")," oriented in either direction"),l.a.createElement("li",null,l.a.createElement(o.a,null,"\\large{,}")," pairwise association")),l.a.createElement(m.b.table,null,l.a.createElement("tbody",null,l.a.createElement(m.b.tr,null,l.a.createElement("th",null),l.a.createElement(m.b.th,null,"Empty"),l.a.createElement(m.b.th,null,"Node"),l.a.createElement(m.b.th,null,"Edge"),l.a.createElement(m.b.th,null,"Path")),l.a.createElement(m.b.tr,null,l.a.createElement(m.b.th,null,"Cypher path"),l.a.createElement(m.b.td,null,l.a.createElement(o.a,null," ")),l.a.createElement(m.b.td,null,l.a.createElement(m.b.code,null,"(n)")),l.a.createElement(m.b.td,null,l.a.createElement(m.b.code,null,"(n1)-[e]->(n2)")),l.a.createElement(m.b.td,null,l.a.createElement(m.b.code,null,"p = ()--\x3e(),()<--()"))),l.a.createElement(m.b.tr,null,l.a.createElement(m.b.th,null,"Path composition"),l.a.createElement(m.b.td,null,l.a.createElement(m.b.code,null,"ø = [ ]")),l.a.createElement(m.b.td,null,l.a.createElement(m.b.code,null,"[n ø ø]")),l.a.createElement(m.b.td,null,l.a.createElement(m.b.code,null,"[e --\x3e n1 n2]")),l.a.createElement(m.b.td,null,l.a.createElement(m.b.code,null,"[p , p1 p2]"))))),l.a.createElement("p",null,"Cypher path notation is easier to read. Path composition is harder to read. The notation can be mixed to annotate information about a cypher path. These three notations are equivalent:"),l.a.createElement(m.b.table,null,l.a.createElement("tbody",null,l.a.createElement(m.b.tr,null,l.a.createElement(m.b.th,null,"Cypher path"),l.a.createElement(m.b.td,null,l.a.createElement(m.b.code,null,"p = (n1)-[e1]->(n2)<-[e2]-(n3)"))),l.a.createElement(m.b.tr,null,l.a.createElement(m.b.th,null,"Path composition"),l.a.createElement(m.b.td,null,l.a.createElement(m.b.code,null,"[p [e1 --\x3e n1 [e2 <-- n2 n3] ] ]"))),l.a.createElement(m.b.tr,null,l.a.createElement(m.b.th,null,"Mixed notation"),l.a.createElement(m.b.td,null,l.a.createElement(m.b.code,null,"[p (n1)-[e1]->(n2)<-[e2]-(n3)]"))))))}},vg9a:function(e,t,a){},vrFN:function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),r=a("qhky"),c=a("Wbzz");function o(e){var t=e.description,a=e.lang,n=e.meta,o=e.title,m=Object(c.useStaticQuery)("63159454").site,i=t||m.siteMetadata.description;return l.a.createElement(r.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+m.siteMetadata.title,meta:[{name:"description",content:i},{property:"og:title",content:o},{property:"og:description",content:i},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:m.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:i}].concat(n)})}o.defaultProps={lang:"en",meta:[],description:""},t.a=o}}]);
//# sourceMappingURL=component---src-pages-math-tsx-9b32c9a8875139985846.js.map