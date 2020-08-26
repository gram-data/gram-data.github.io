(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{QeBL:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),l=a("9Dj+"),o=a("vrFN"),i=a("lPbZ"),s=a("Mrqj");t.default=function(){return r.a.createElement(l.a,null,r.a.createElement(o.a,{title:"Home"}),r.a.createElement(i.b.h1,null,"Gram - Graphs as Paths"),r.a.createElement("p",null,"Gram is a path-based graph representation. "),r.a.createElement("p",null,"Goals:"),r.a.createElement(i.b.ol,null,r.a.createElement(i.b.li,null,"Be able to say something about paths"),r.a.createElement(i.b.li,null,"Be able to process graphs as a stream"),r.a.createElement(i.b.li,null,"Be friendly for humans to write and machines to read")),r.a.createElement("p",null,"Principles:"),r.a.createElement(i.b.ul,null,r.a.createElement(i.b.li,null,"Be explicit about implicit relationships")),r.a.createElement(i.b.h2,null,"1. See the Forest Paths"),r.a.createElement("p",null,"Nodes and edges are powerful for structuring information. Full graphs have interesting features."),r.a.createElement("p",null,"Graph theory was invented to ",r.a.createElement(s.e,{href:"https://en.wikipedia.org/wiki/Seven_Bridges_of_Königsberg"},"find a path")," yet dwells on the pieces of the puzzle rather than the resulting picture."),r.a.createElement("p",null,"Until graphs became databases, Paths didn't really need to be concrete. Thinking about graphs as an information architecture . Graph theory provides language and thinking to discuss features of a graph."),r.a.createElement(i.b.h3,null,"Path Information - Route 66"),r.a.createElement("p",null,"Head west from St.Louis in the USA and you may be traveling along historic Route 66. Nodes and Edges could be the towns and roads along the way. Where does information about Route 66 itself go?"),r.a.createElement("p",null,"This is the canonical use case of a Path as information structure."),r.a.createElement(i.b.h3,null,"Decorated Graphs - D3 DG"),r.a.createElement("p",null,"D3.js has a lovely force-based network layout. Like many other libraries, the algorithm annotates the graph with position data. Wouldn't it be nice to save position and styling without compromising the domain data in the graph?"),r.a.createElement("p",null,"Paths could achieve that by following an architectural pattern called an Entity-component-system (ECS), a gift from the world of game development. Just wrap each Node (the entity) in a labeled Path (the system) to provide system-specific information (the component)."),r.a.createElement(i.b.h3,null,"Shared Content"),r.a.createElement("p",null,"A delivery truck driver steers a truck which physically contains packages that are owned (though not yet possed) by other people."),r.a.createElement("p",null,'A graph model can happily express all the relationships, smoothly answering questions like, "where\'s my stuff?" but requires external knowledge to "get all the stuff" inside the truck without also getting the driver by accident.'),r.a.createElement("p",null,"A document model can provide explicit containers for getting stuff in the truck, but optimizes for either truck-oriented or owner oriented queries."),r.a.createElement("p",null,"A path model can do both explicitly in the data, without needing a schema or a written guidebook. "),r.a.createElement(i.b.h2,null,"2. From nodes and edges, to paths"),r.a.createElement("p",null,"Gram structures data as property graph paths. In practice, that means you can write a graph using Cypher paths like this:"),r.a.createElement(i.b.pre,null,"\n    (a)-[e1]->(b)\n    (b)<-[e2]-(c)\n    "),r.a.createElement("p",null,"The content values of a graph are attached to either nodes or edges:"),r.a.createElement(i.b.pre,null,'\n    (a:Person {name:"Wile E. Coyote"})\n    (b:Company {name:"Acme, Inc."})\n    (a)-[e1:CUSTOMER_OF]->(b)\n    '),r.a.createElement("p",null,"In Cypher a path is a name bound to a path expression:"),r.a.createElement(i.b.pre,null,"\n    p = (a)-[e1]->(b)<-[e2]-(c)\n    "),r.a.createElement("p",null,"Gram adopts the square brackets used by relationships to also delimit a path. This provides room for labels and records to be attached to a path:"),r.a.createElement(i.b.pre,null,"\n    [p:TROUBLESOME {accidents:12000} (a)-[e1]->(b)]\n    // or just...\n    [p:TROUBLESOME {accidents:12000} e1]\n    "),r.a.createElement(i.b.h2,null,"3. Write in detail, read in volume"),r.a.createElement("p",null,"Nodes and edges are wonderful."))}},vrFN:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("qhky"),o=a("Wbzz");function i(e){var t=e.description,a=e.lang,n=e.meta,i=e.title,s=Object(o.useStaticQuery)("63159454").site,c=t||s.siteMetadata.description;return r.a.createElement(l.a,{htmlAttributes:{lang:a},title:i,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:i},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:c}].concat(n)})}i.defaultProps={lang:"en",meta:[],description:""},t.a=i}}]);
//# sourceMappingURL=component---src-pages-index-tsx-e95945c8031064bbbd9c.js.map