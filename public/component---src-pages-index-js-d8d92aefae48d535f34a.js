(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{204:function(e,t,n){"use strict";n.r(t);var i=n(269),o=n(0),a=n.n(o),r=n(206),l=n(207),s=n(137),c=n.n(s),m=n(212),p=n(217),d=n(208),f=n(216),u=r.default.section.withConfig({displayName:"pages__HomeWrap",componentId:"oognz-0"})(["position:relative;padding-top:",";padding-bottom:",";"],l.a.rems.f50,l.a.rems.f50),g=r.default.ul.withConfig({displayName:"pages__DribbbleShots",componentId:"oognz-1"})(["list-style:none;margin:0;padding:0;padding-top:",";padding-bottom:",";@media (min-width:","){display:flex;flex-wrap:wrap;align-items:flex-start;margin-left:-15px;margin-right:-15px;}li{margin-bottom:40px;@media (min-width:","){min-width:50%;width:50%;padding-left:15px;padding-right:15px;}> a{display:block;}h2{font-size:",";margin-bottom:10px;}img{max-width:100%;height:auto;}}"],l.a.rems.f50,l.a.rems.f50,l.a.media.mdMin,l.a.media.mdMin,l.a.rems.f18);t.default=function(){var e=i.data;return a.a.createElement(p.a,null,a.a.createElement(m.a,{title:"Home"}),a.a.createElement(c.a,null,a.a.createElement(u,null,a.a.createElement(d.a,null,a.a.createElement(f.a,{heading1:!0},"Dribbble shot's from ",a.a.createElement("a",{href:e.dribleUser.url,target:"_blank",rel:"noopener noreferrer"},"@"+e.dribleUser.username)),a.a.createElement(g,null,e.allDribleProjects.edges.map(function(e){return a.a.createElement("li",{key:e.node.id},a.a.createElement("a",{href:e.node.url,target:"_blank",rel:"noopener noreferrer"},a.a.createElement("h2",null,e.node.title),a.a.createElement("img",{src:e.node.cover,alt:e.node.title})))}))))))}},207:function(e,t,n){"use strict";t.a={colors:{text:"#444444",textDark:"#222222",textLight:"#adb5bd",red:"#e93d3d",orange:"#ff6f00",yellow:"#ffbc00",green:"#37ca37",blue:"#188bf6",teal:"#17cfbc",pink:"#ff3e7f",purple:"#876cff"},fonts:{fontSize:"1rem",fontFamily:'Roboto, system, -apple-system, BlinkMacSystemFont, ".SFNSDisplay-Regular", "Helvetica Neue", Helvetica, Arial, sans-serif',fontWeight:400,lineHeight:1.8},media:{smMin:"576px",mdMin:"768px",lgMin:"992px",xlMin:"1200px",xxlMin:"1400px",xsMax:"575px",smMax:"767px",mdMax:"991px",lgMax:"1199px",xlMax:"1399px"},rems:{f8:"0.5rem",f9:"0.5625rem",f10:"0.625rem",f11:"0.6875rem",f12:"0.75rem",f13:"0.8125rem",f14:"0.875rem",f15:"0.9375rem",f16:"1rem",f18:"1.125rem",f20:"1.25rem",f22:"1.375rem",f24:"1.5rem",f25:"1.563rem",f26:"1.625rem",f28:"1.75rem",f30:"1.875rem",f32:"2rem",f34:"2.125rem",f35:"2.188rem",f36:"2.25rem",f38:"2.375rem",f40:"2.5rem",f45:"2.813rem",f50:"3.125rem",f55:"3.438rem",f60:"3.75rem",f65:"4.063rem",f70:"4.375rem",f75:"4.688rem",f80:"5rem",f90:"5.625rem",f100:"6.25rem",f120:"7.5rem",f125:"7.813rem",f150:"9.375rem",f180:"11.25rem",f200:"12.5rem",f250:"15.63rem",f300:"18.75rem",f350:"21.88rem",f400:"25rem",f450:"28.13rem",f500:"31.25rem"},transitions:{hover1:"all 0.2s ease-in-out 0s",hover2:"color 0.2s ease-in-out 0s, background-color 0.2s ease-in-out 0s, border 0.2s ease-in-out 0s, opacity 0.2s ease-in-out 0s"},maxWidth:"1200px",navHeight:80}},208:function(e,t,n){"use strict";var i=n(206),o=n(207),a=i.default.div.withConfig({displayName:"container__Container",componentId:"ecf1il-0"})(["width:100%;max-width:",";margin-left:auto;margin-right:auto;padding-left:15px;padding-right:15px;"],function(e){return e.maxWidth?e.maxWidth:o.a.maxWidth});t.a=a},210:function(e,t,n){var i;e.exports=(i=n(215))&&i.default||i},211:function(e,t,n){"use strict";var i=n(0),o=n.n(i),a=n(72),r=n.n(a);n.d(t,"a",function(){return r.a});n(210),n(10).default.enqueue,o.a.createContext({})},212:function(e,t,n){"use strict";var i=n(213),o=n(0),a=n.n(o),r=n(218),l=n.n(r);function s(e){var t=e.description,n=e.lang,o=e.meta,r=e.title,s=i.data.site,c=t||s.siteMetadata.description;return a.a.createElement(l.a,{htmlAttributes:{lang:n},title:r,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:r},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:r},{name:"twitter:description",content:c}].concat(o)})}s.defaultProps={lang:"en",meta:[],description:""},t.a=s},213:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Starter Kit",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},214:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Starter Kit",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}},allFile:{edges:[{node:{extension:"png",publicURL:"/gatsby-kit/static/gatsby-icon-4a9773549091c227cd2eb82ccd9c5e3a.png",name:"gatsby-icon",id:"a97bca68-054a-5c4c-b3e3-857f95fb3270"}}]}}}},215:function(e,t,n){"use strict";n.r(t);n(20);var i=n(0),o=n.n(i),a=n(100);t.default=function(e){var t=e.location,n=e.pageResources;return n?o.a.createElement(a.a,Object.assign({location:t,pageResources:n},n.json)):null}},216:function(e,t,n){"use strict";var i=n(206),o=n(209),a=n(207),r=i.default.h1.withConfig({displayName:"heading__Heading",componentId:"sc-1wr1wve-0"})(["color:",";font-weight:500;line-height:",";margin-bottom:",";font-size:",";@media (max-width:","){font-size:",";}"," "," "," "," ",""],a.a.colors.textDark,function(e){return e.lh?e.lh:1.2},function(e){return e.mb?e.mb:"20px"},function(e){return e.size?e.size+"px":"40px"},a.a.media.lgMax,function(e){return e.size?Object(o.a)(e.size-10+"px",e.size+"px"):Object(o.a)("30px","40px")},function(e){return e.heading2&&Object(i.css)(["font-size:",";@media (max-width:","){font-size:",";}"],function(e){return e.size?e.size+"px":"32px"},a.a.media.lgMax,function(e){return e.size?Object(o.a)(e.size-8+"px",e.size+"px"):Object(o.a)("24px","32px")})},function(e){return e.heading3&&Object(i.css)(["font-size:",";@media (max-width:","){font-size:",";}"],function(e){return e.size?e.size+"px":"28px"},a.a.media.lgMax,function(e){return e.size?Object(o.a)(e.size-8+"px",e.size+"px"):Object(o.a)("22px","28px")})},function(e){return e.heading4&&Object(i.css)(["font-size:",";@media (max-width:","){font-size:",";}"],function(e){return e.size?e.size+"px":"24px"},a.a.media.lgMax,function(e){return e.size?Object(o.a)(e.size-6+"px",e.size+"px"):Object(o.a)("18px","24px")})},function(e){return e.heading5&&Object(i.css)(["font-size:",";@media (max-width:","){font-size:",";}"],function(e){return e.size?e.size+"px":"20px"},a.a.media.lgMax,function(e){return e.size?Object(o.a)(e.size-4+"px",e.size+"px"):Object(o.a)("16px","20px")})},function(e){return e.heading6&&Object(i.css)(["font-size:",";@media (max-width:","){font-size:",";}"],function(e){return e.size?e.size+"px":"16px"},a.a.media.lgMax,function(e){return e.size?e.size+"px":"16px"})});t.a=r},217:function(e,t,n){"use strict";var i=n(0),o=n.n(i),a=n(206),r=n(207);function l(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["",""]);return l=function(){return e},e}var s=Object(a.css)(['*,*::before,*::after{box-sizing:border-box;}html{font-family:sans-serif;line-height:1.15;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:rgba(0,0,0,0);}article,aside,figcaption,figure,footer,header,hgroup,main,nav,section{display:block;}body{margin:0;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";font-size:1rem;font-weight:400;line-height:1.5;color:#212529;text-align:left;background-color:#fff;}[tabindex="-1"]:focus{outline:0 !important;}hr{box-sizing:content-box;height:0;overflow:visible;}h1,h2,h3,h4,h5,h6{margin-top:0;margin-bottom:0.5rem;}p{margin-top:0;margin-bottom:1rem;}abbr[title],abbr[data-original-title]{text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;cursor:help;border-bottom:0;-webkit-text-decoration-skip-ink:none;text-decoration-skip-ink:none;}address{margin-bottom:1rem;font-style:normal;line-height:inherit;}ol,ul,dl{margin-top:0;margin-bottom:1rem;}ol ol,ul ul,ol ul,ul ol{margin-bottom:0;}dt{font-weight:700;}dd{margin-bottom:.5rem;margin-left:0;}blockquote{margin:0 0 1rem;}b,strong{font-weight:bolder;}small{font-size:80%;}sub,sup{position:relative;font-size:75%;line-height:0;vertical-align:baseline;}sub{bottom:-.25em;}sup{top:-.5em;}a{color:#007bff;text-decoration:none;background-color:transparent;}a:hover{color:#0056b3;text-decoration:underline;}a:not([href]):not([tabindex]){color:inherit;text-decoration:none;}a:not([href]):not([tabindex]):hover,a:not([href]):not([tabindex]):focus{color:inherit;text-decoration:none;}a:not([href]):not([tabindex]):focus{outline:0;}pre,code,kbd,samp{font-family:SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;font-size:1em;}pre{margin-top:0;margin-bottom:1rem;overflow:auto;}figure{margin:0 0 1rem;}img{vertical-align:middle;border-style:none;}svg{overflow:hidden;vertical-align:middle;}table{border-collapse:collapse;}caption{padding-top:0.75rem;padding-bottom:0.75rem;color:#6c757d;text-align:left;caption-side:bottom;}th{text-align:inherit;}label{display:inline-block;margin-bottom:0.5rem;}button{border-radius:0;}button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color;}input,button,select,optgroup,textarea{margin:0;font-family:inherit;font-size:inherit;line-height:inherit;}button,input{overflow:visible;}button,select{text-transform:none;}select{word-wrap:normal;}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button;}button:not(:disabled),[type="button"]:not(:disabled),[type="reset"]:not(:disabled),[type="submit"]:not(:disabled){cursor:pointer;}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{padding:0;border-style:none;}input[type="radio"],input[type="checkbox"]{box-sizing:border-box;padding:0;}input[type="date"],input[type="time"],input[type="datetime-local"],input[type="month"]{-webkit-appearance:listbox;}textarea{overflow:auto;resize:vertical;}fieldset{min-width:0;padding:0;margin:0;border:0;}legend{display:block;width:100%;max-width:100%;padding:0;margin-bottom:.5rem;font-size:1.5rem;line-height:inherit;color:inherit;white-space:normal;}progress{vertical-align:baseline;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto;}[type="search"]{outline-offset:-2px;-webkit-appearance:none;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none;}::-webkit-file-upload-button{font:inherit;-webkit-appearance:button;}output{display:inline-block;}summary{display:list-item;cursor:pointer;}template{display:none;}[hidden]{display:none !important;}']),c=(Object(a.createGlobalStyle)(l(),s),s),m=n(209);function p(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["",""]);return p=function(){return e},e}var d=Object(a.css)(["body{font-size:",";font-family:",";font-weight:",";line-height:",";color:",";-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}a,button{transition:",";cursor:pointer;&:hover,&:active,&:focus{text-decoration:none;outline:none;}&:active{&:focus{outline:none;}}&[x-apple-data-detectors]{color:inherit !important;text-decoration:none !important;font-size:inherit !important;font-family:inherit !important;font-weight:inherit !important;line-height:inherit !important;}}a{color:",";&:hover,&:active,&:focus{color:",";}}p{margin-bottom:0;+ p{margin-top:",";}}h1,h2,h3,h4,h5,h6{color:",";line-height:1.2;margin-top:0;margin-bottom:",";}h1{font-size:2.5rem;}h2{font-size:2rem;}h3{font-size:1.75rem;}h4{font-size:1.5rem;}h5{font-size:1.25rem;}h6{font-size:1rem;}"],r.a.fonts.fontSize,r.a.fonts.fontFamily,r.a.fonts.fontWeight,r.a.fonts.lineHeight,r.a.colors.text,r.a.transitions.hover2,r.a.colors.blue,Object(m.b)(.2,r.a.colors.blue),r.a.rems.f20,r.a.colors.textDark,r.a.rems.f20),f=(Object(a.createGlobalStyle)(p(),d),d),u=n(214),g=n(211),b=n(208),h=a.default.header.withConfig({displayName:"header__HeaderWrap",componentId:"ia7jvs-0"})(["display:flex;align-items:center;background-color:rebeccapurple;height:","px;position:fixed;margin:auto;top:0;left:0;right:0;z-index:9;","{display:flex;align-items:center;justify-content:space-between;}"],r.a.navHeight,b.a),x=a.default.div.withConfig({displayName:"header__Logo",componentId:"ia7jvs-1"})(["position:relative;a{font-size:",";display:block;color:#fff;font-weight:bold;&:hover,&:focus,&:active{color:#fff;}}img{max-width:60px;height:auto;margin-left:-10px;}"],r.a.rems.f24),y=a.default.nav.withConfig({displayName:"header__NavLinks",componentId:"ia7jvs-2"})(["position:relative;ul{list-style:none;margin:0;padding:0;display:flex;align-items:center;margin-right:-10px;li{a{display:block;padding:5px 10px;color:",";&:hover,&:focus,&:active{color:#fff;}&[aria-current='page']{color:#fff;}}}}"],Object(m.c)("#fff",.6)),w=function(){var e=u.data;return o.a.createElement(h,null,o.a.createElement(b.a,null,o.a.createElement(x,null,o.a.createElement(g.a,{to:"/"},e.site.siteMetadata.title)),o.a.createElement(y,null,o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(g.a,{to:"/"},"Home")),o.a.createElement("li",null,o.a.createElement(g.a,{to:"/blog"},"Blog")),o.a.createElement("li",null,o.a.createElement(g.a,{to:"/about"},"About")),o.a.createElement("li",null,o.a.createElement(g.a,{to:"/contact"},"Contact"))))))},v=a.default.footer.withConfig({displayName:"footer__FooterWrap",componentId:"sc-17wn68h-0"})(["position:relative;background-color:#eee;padding-top:",";padding-bottom:",";text-align:center;"],r.a.rems.f30,r.a.rems.f30),z=function(e){return o.a.createElement(v,null,o.a.createElement(b.a,null,o.a.createElement("p",null,"© ",(new Date).getFullYear())))};function k(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n  ",";\n  ",";\n"]);return k=function(){return e},e}var j=Object(a.createGlobalStyle)(k(),c,f),E=a.default.main.withConfig({displayName:"layout__Main",componentId:"sc-1teebzs-0"})(["position:relative;padding-top:","px;min-height:100vh;"],r.a.navHeight);t.a=function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(j,null),o.a.createElement(w,null),o.a.createElement(E,null,e.children),o.a.createElement(z,null))}},269:function(e){e.exports={data:{allDribleProjects:{edges:[{node:{id:"3159019",height:600,description:'<p>A simple login form UI using material design animation.</p>\n\n<p><a href="http://codepen.io/dongepulango/pen/aBQqyx" rel="nofollow noreferrer">View Here</a></p>',cover:"https://cdn.dribbble.com/users/385428/screenshots/3159019/login-ui.png",shotID:3159019,tags:["codepen","form","login"],title:"Login Form UI - Codepen",url:"https://dribbble.com/shots/3159019-Login-Form-UI-Codepen",width:800,published:"2016-12-15T14:28:27Z"}},{node:{id:"3134664",height:600,description:"<p>I love typography like this. :)</p>",cover:"https://cdn.dribbble.com/users/385428/screenshots/3134664/coastal.png",shotID:3134664,tags:["coastal","logo","typography"],title:"Coastal",url:"https://dribbble.com/shots/3134664-Coastal",width:800,published:"2016-12-03T19:21:39Z"}},{node:{id:"3118420",height:600,description:'<p>I made a Codepen of responsive tabs, which have two options of either collapsing on breakpoint or overflow with drag scrolling using dragscroll.js</p>\n\n<p><a href="http://codepen.io/dongepulango/pen/RograW" rel="nofollow noreferrer">View here</a></p>',cover:"https://cdn.dribbble.com/users/385428/screenshots/3118420/responsive-tabs.png",shotID:3118420,tags:["codepen","dragscroll","frontend","mobile","responsive","tabs","ui"],title:"Simple Responsive Tabs with dragscroll.js",url:"https://dribbble.com/shots/3118420-Simple-Responsive-Tabs-with-dragscroll-js",width:800,published:"2016-11-25T11:51:31Z"}}]},dribleUser:{id:"385428",name:"Don Gepulango",username:"dongepulango",url:"https://dribbble.com/dongepulango"}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-d8d92aefae48d535f34a.js.map