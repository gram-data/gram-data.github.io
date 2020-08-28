(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{HGQA:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),o=n("9Dj+"),l=n("vrFN"),i=(n("vg9a"),n("lPbZ")),c=n("Kfvu");t.default=function(){return r.a.createElement(o.a,null,r.a.createElement(l.a,{title:"Data Evolution"}),r.a.createElement(i.b.h1,null,"Data Evolution"),r.a.createElement("p",null,"Data starts small and simple."),r.a.createElement(i.b.h2,null,"1. Just a record"),r.a.createElement(i.b.pre,null,"// a record with one field\n({name:'Bartosz Milewski'})"),r.a.createElement(i.b.h3,null,"1a. Add some detail"),r.a.createElement("p",null),r.a.createElement(i.b.pre,null,"\n({  name:'Bartosz Milewski',\n    social: {\n      about:   'https://bartoszmilewski.com',\n      twitter: 'https://twitter.com/BartoszMilewski'\n    },\n    books: [\n      {\"Category Theory for Programmers\":\"https://www.blurb.com/b/9621951\"}\n    ]\n}) \n"),r.a.createElement(i.b.h2,null,"2. Two records makes a pair"),r.a.createElement("dl",null,r.a.createElement("dt",null,r.a.createElement(i.b.code,null,"// two records")),r.a.createElement("dd",null,r.a.createElement(i.b.code,null,"({name:'Bartosz Milewski'}) ({title:'Category Theory for Programmers'})"))),r.a.createElement("p",null,'How are these two records related? There\'s no direct relationship but they are part of our collection of names. More specifically they\'re in a sequence of records, which means they are ordered: "Bartosz Milewski" then "Category Theory for Programmers".'),r.a.createElement(i.b.h3,null,"3a. Apply a label"),r.a.createElement("p",null,"There are other clues about how these records are related. Each has a name field, which ",r.a.createElement("i",null,"could")," mean that we've got a pair of cats. They're certainly cool cats."),r.a.createElement("p",null,"Despite what ",r.a.createElement(c.OutboundLink,{href:"https://www.goodreads.com/quotes/24012-once-you-label-me-you-negate-me"},"sad Danes may say"),", Labels are a way to associate things that are similar, affirming their commonality without limiting their individual qualities."),r.a.createElement("dl",null,r.a.createElement("dt",null,r.a.createElement(i.b.code,null,"// two records of names")),r.a.createElement("dd",null,r.a.createElement(i.b.code,null,"(:Person {name:'Bartosz Milewski'}) (:Person {name:'Manuel Lima'})"))),r.a.createElement(i.b.h3,null,"2b. Add some detail"),r.a.createElement("p",null),r.a.createElement(i.b.pre,null,"\n(:Person {  name:'Bartosz Milewski',\n            social: {\n              about:   'https://bartoszmilewski.com',\n              twitter: 'https://twitter.com/BartoszMilewski'\n            },\n            books: [\n              {\"Category Theory for Programmers\":\"https://www.blurb.com/b/9621951\"}\n            ]\n         }\n) \n(:Person {  name:'Manuel Lima',\n            social: {\n              about:   'https://www.mslima.com',\n              twitter: 'https://twitter.com/mslima'\n            },\n            books: [\n              {\"Book of Circles\":\"https://twitter.com/bookofcircles\"}\n            ]\n         }\n)\n"))}},Kfvu:function(e,t,n){"use strict";var a=n("5NKs");t.__esModule=!0,t.OutboundLink=c,t.trackCustomEvent=function(e){var t=e.category,n=e.action,a=e.label,r=e.value,o=e.nonInteraction,l=void 0!==o&&o,i=e.transport,c=e.hitCallback,s=e.callbackTimeout,u=void 0===s?1e3:s;if("undefined"!=typeof window&&window.ga){var m={eventCategory:t,eventAction:n,eventLabel:a,eventValue:r,nonInteraction:l,transport:i};c&&"function"==typeof c&&(m.hitCallback=function(e,t){void 0===t&&(t=1e3);var n=!1,a=function(){n||(n=!0,e())};return setTimeout(a,t),a}(c,u)),window.ga("send","event",m)}};var r=a(n("j8BX")),o=a(n("uDP2")),l=a(n("q1tI")),i=a(n("17x9"));function c(e){var t=e.eventCategory,n=e.eventAction,a=e.eventLabel,i=e.eventValue,c=(0,o.default)(e,["eventCategory","eventAction","eventLabel","eventValue"]);return l.default.createElement("a",(0,r.default)({},c,{onClick:function(r){"function"==typeof e.onClick&&e.onClick(r);var o=!0;return(0!==r.button||r.altKey||r.ctrlKey||r.metaKey||r.shiftKey||r.defaultPrevented)&&(o=!1),e.target&&"_self"!==e.target.toLowerCase()&&(o=!1),window.ga?window.ga("send","event",{eventCategory:t||"Outbound Link",eventAction:n||"click",eventLabel:a||e.href,eventValue:i,transport:o?"beacon":"",hitCallback:function(){o&&(document.location=e.href)}}):o&&(document.location=e.href),!1}}))}c.propTypes={href:i.default.string,target:i.default.string,eventCategory:i.default.string,eventAction:i.default.string,eventLabel:i.default.string,eventValue:i.default.number,onClick:i.default.func}},vg9a:function(e,t,n){},vrFN:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),o=n("qhky"),l=n("Wbzz");function i(e){var t=e.description,n=e.lang,a=e.meta,i=e.title,c=Object(l.useStaticQuery)("63159454").site,s=t||c.siteMetadata.description;return r.a.createElement(o.a,{htmlAttributes:{lang:n},title:i,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:i},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:s}].concat(a)})}i.defaultProps={lang:"en",meta:[],description:""},t.a=i}}]);
//# sourceMappingURL=component---src-pages-evolution-tsx-ca89dd961da2f53902f9.js.map