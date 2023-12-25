import{a as m}from"/build/_shared/chunk-7QSVQE2F.js";import{a as l}from"/build/_shared/chunk-46TQ4TVO.js";import"/build/_shared/chunk-TXRHUVLQ.js";import{h as p}from"/build/_shared/chunk-EOZRNUDL.js";import"/build/_shared/chunk-LO53UBCC.js";import"/build/_shared/chunk-2CAKVS4P.js";import"/build/_shared/chunk-U4254SWG.js";import"/build/_shared/chunk-M63GRH3S.js";import"/build/_shared/chunk-5J7FL2HD.js";import"/build/_shared/chunk-RP4TNHQF.js";import"/build/_shared/chunk-PFVXHB5S.js";import"/build/_shared/chunk-LF2RRCOB.js";import"/build/_shared/chunk-LWOBU4ZG.js";import"/build/_shared/chunk-KUOAIDDK.js";import"/build/_shared/chunk-KYDOHSFW.js";import"/build/_shared/chunk-YTOSUJX3.js";import"/build/_shared/chunk-3FN6QERY.js";import"/build/_shared/chunk-JBFIX7QL.js";import{a as i}from"/build/_shared/chunk-QFJ5IYWW.js";import{a as r}from"/build/_shared/chunk-CQXTAVIO.js";import{c}from"/build/_shared/chunk-Q3IECNXJ.js";var n=c(r());var s={meta:{title:"useScroll | React Spring","og:title":"useScroll | React Spring","twitter:title":"useScroll | React Spring",description:"API documentation for the useScroll utility hook in React Spring.","og:description":"API documentation for the useScroll utility hook in React Spring.","twitter:description":"API documentation for the useScroll utility hook in React Spring.","og:url":"https://www.react-spring.dev/docs/utilities/use-scroll","twitter:url":"https://www.react-spring.dev/docs/utilities/use-scroll"},sidebar_position:3,isNew:!0};function d(e={}){let o=Object.assign({h1:"h1",a:"a",p:"p",code:"code",h2:"h2",pre:"pre",div:"div",span:"span"},i(),e.components),{wrapper:a}=o,t=n.default.createElement(n.default.Fragment,null,n.default.createElement(o.h1,{id:"usescroll"},n.default.createElement(o.a,{href:"#usescroll"},"useScroll")),`
`,n.default.createElement(o.p,null,"A small utility abstraction around our signature ",n.default.createElement(o.a,{href:"/docs/components/use-spring"},n.default.createElement(o.code,null,"useSpring")),` hook. It's a great way to
create a scroll-linked animation. With either the raw value of distance or a 0-1 progress value. You can either use the
scroll values of the whole document, or just a specific element.`),`
`,n.default.createElement(o.h2,{id:"usage"},n.default.createElement(o.a,{href:"#usage"},"Usage")),`
`,n.default.createElement(o.p,null,"The example below will start off with an ",n.default.createElement(o.code,null,"opacity")," of ",n.default.createElement(o.code,null,"0"),` but when the user scrolls to the bottom of the page it will have
reached an `,n.default.createElement(o.code,null,"opacity")," of ",n.default.createElement(o.code,null,"1"),"."),`
`,n.default.createElement(o.pre,null,n.default.createElement(o.code,{className:"language-tsx"},n.default.createElement(o.div,{"data-line":"1",className:"highlight-line","data-highlighted":"true"},n.default.createElement(o.span,{className:"token keyword module"},"import")," ",n.default.createElement(o.span,{className:"token imports"},n.default.createElement(o.span,{className:"token punctuation"},"{")," useScroll",n.default.createElement(o.span,{className:"token punctuation"},",")," animated ",n.default.createElement(o.span,{className:"token punctuation"},"}"))," ",n.default.createElement(o.span,{className:"token keyword module"},"from")," ",n.default.createElement(o.span,{className:"token string"},"'@react-spring/web'"),`
`),n.default.createElement(o.div,{"data-line":"2",className:"highlight-line","data-highlighted":"true"},`
`),n.default.createElement(o.div,{"data-line":"3",className:"highlight-line","data-highlighted":"true"},n.default.createElement(o.span,{className:"token keyword"},"function")," ",n.default.createElement(o.span,{className:"token function"},n.default.createElement(o.span,{className:"token maybe-class-name"},"MyComponent")),n.default.createElement(o.span,{className:"token punctuation"},"("),n.default.createElement(o.span,{className:"token punctuation"},")")," ",n.default.createElement(o.span,{className:"token punctuation"},"{"),`
`),n.default.createElement(o.div,{"data-line":"4",className:"highlight-line","data-highlighted":"true"},"  ",n.default.createElement(o.span,{className:"token keyword"},"const")," ",n.default.createElement(o.span,{className:"token punctuation"},"{")," scrollYProgress ",n.default.createElement(o.span,{className:"token punctuation"},"}")," ",n.default.createElement(o.span,{className:"token operator"},"=")," ",n.default.createElement(o.span,{className:"token function"},"useScroll"),n.default.createElement(o.span,{className:"token punctuation"},"("),n.default.createElement(o.span,{className:"token punctuation"},")"),`
`),n.default.createElement(o.div,{"data-line":"5",className:"highlight-line","data-highlighted":"true"},`
`),n.default.createElement(o.div,{"data-line":"6",className:"highlight-line","data-highlighted":"true"},"  ",n.default.createElement(o.span,{className:"token keyword control-flow"},"return")," ",n.default.createElement(o.span,{className:"token punctuation"},"("),`
`),n.default.createElement(o.div,{"data-line":"7",className:"highlight-line","data-highlighted":"true"},"    ",n.default.createElement(o.span,{className:"token tag"},n.default.createElement(o.span,{className:"token tag"},n.default.createElement(o.span,{className:"token punctuation"},"<"),"animated.div")," ",n.default.createElement(o.span,{className:"token attr-name"},"style"),n.default.createElement(o.span,{className:"token script language-javascript"},n.default.createElement(o.span,{className:"token script-punctuation punctuation"},"="),n.default.createElement(o.span,{className:"token punctuation"},"{"),n.default.createElement(o.span,{className:"token punctuation"},"{")," opacity",n.default.createElement(o.span,{className:"token operator"},":")," scrollYProgress ",n.default.createElement(o.span,{className:"token punctuation"},"}"),n.default.createElement(o.span,{className:"token punctuation"},"}")),n.default.createElement(o.span,{className:"token punctuation"},">")),n.default.createElement(o.span,{className:"token plain-text"}),`
`),n.default.createElement(o.div,{"data-line":"8",className:"highlight-line","data-highlighted":"true"},n.default.createElement(o.span,{className:"token plain-text"},"      Hello World"),`
`),n.default.createElement(o.div,{"data-line":"9",className:"highlight-line","data-highlighted":"true"},n.default.createElement(o.span,{className:"token plain-text"},"    "),n.default.createElement(o.span,{className:"token tag"},n.default.createElement(o.span,{className:"token tag"},n.default.createElement(o.span,{className:"token punctuation"},"</"),"animated.div"),n.default.createElement(o.span,{className:"token punctuation"},">")),`
`),n.default.createElement(o.div,{"data-line":"10",className:"highlight-line","data-highlighted":"true"},"  ",n.default.createElement(o.span,{className:"token punctuation"},")"),`
`),n.default.createElement(o.div,{"data-line":"11",className:"highlight-line","data-highlighted":"true"},n.default.createElement(o.span,{className:"token punctuation"},"}"),`
`))),`
`,n.default.createElement(o.h2,{id:"reference"},n.default.createElement(o.a,{href:"#reference"},"Reference")),`
`,`
`,n.default.createElement(l,{data:p}),`
`,n.default.createElement(o.h2,{id:"typescript"},n.default.createElement(o.a,{href:"#typescript"},"Typescript")),`
`,n.default.createElement(o.pre,null,n.default.createElement(o.code,{className:"language-tsx"},n.default.createElement(o.div,{"data-line":"1",className:"highlight-line","data-highlighted":"true"},n.default.createElement(o.span,{className:"token keyword"},"function")," ",n.default.createElement(o.span,{className:"token function"},"useScroll"),n.default.createElement(o.span,{className:"token punctuation"},"("),"configuration",n.default.createElement(o.span,{className:"token operator"},":")," ",n.default.createElement(o.span,{className:"token maybe-class-name"},"ConfigObject"),n.default.createElement(o.span,{className:"token punctuation"},")"),n.default.createElement(o.span,{className:"token operator"},":")," ",n.default.createElement(o.span,{className:"token maybe-class-name"},"SpringValues"),`
`))),`
`,n.default.createElement(o.p,null,"Where ",n.default.createElement(o.code,null,"ConfigObject")," is described ",n.default.createElement(o.a,{href:"#reference"},"above")),`
`,n.default.createElement(o.h2,{id:"examples"},n.default.createElement(o.a,{href:"#examples"},"Examples")),`
`,`
`,n.default.createElement(m,{sandboxTitles:["Scrolling Wave"]}),`
`,n.default.createElement(o.p,null,"Can't find what you're looking for? Check out all our ",n.default.createElement(o.a,{href:"/examples"},"examples!")));return a?n.default.createElement(a,{...e},t):t}var u=d;var v=typeof s<"u"&&s.headers,h=typeof s<"u"&&s.meta,_=typeof s<"u"&&s.handle;export{u as default,_ as handle,h as meta};