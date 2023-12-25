import{a as m}from"/build/_shared/chunk-7QSVQE2F.js";import{a as i}from"/build/_shared/chunk-46TQ4TVO.js";import"/build/_shared/chunk-TXRHUVLQ.js";import"/build/_shared/chunk-EOZRNUDL.js";import"/build/_shared/chunk-LO53UBCC.js";import"/build/_shared/chunk-2CAKVS4P.js";import"/build/_shared/chunk-U4254SWG.js";import"/build/_shared/chunk-M63GRH3S.js";import"/build/_shared/chunk-5J7FL2HD.js";import"/build/_shared/chunk-RP4TNHQF.js";import"/build/_shared/chunk-PFVXHB5S.js";import"/build/_shared/chunk-LF2RRCOB.js";import"/build/_shared/chunk-LWOBU4ZG.js";import"/build/_shared/chunk-KUOAIDDK.js";import"/build/_shared/chunk-KYDOHSFW.js";import"/build/_shared/chunk-YTOSUJX3.js";import"/build/_shared/chunk-3FN6QERY.js";import"/build/_shared/chunk-JBFIX7QL.js";import{a as t}from"/build/_shared/chunk-QFJ5IYWW.js";import{a as c}from"/build/_shared/chunk-CQXTAVIO.js";import{c as l}from"/build/_shared/chunk-Q3IECNXJ.js";var n=l(c());var a={meta:{title:"useTrail | React Spring","og:title":"useTrail | React Spring","twitter:title":"useTrail | React Spring",description:"API documentation for the useTrail hook in React Spring.","og:description":"API documentation for the useTrail hook in React Spring.","twitter:description":"API documentation for the useTrail hook in React Spring.","og:url":"https://www.react-spring.dev/docs/components/use-trail","twitter:url":"https://www.react-spring.dev/docs/components/use-trail"},sidebar_position:6};function u(o={}){let s=Object.assign({h1:"h1",a:"a",p:"p",code:"code",h2:"h2",h3:"h3",pre:"pre",div:"div",span:"span",ul:"ul",li:"li"},t(),o.components),{wrapper:p}=s,e=n.default.createElement(n.default.Fragment,null,n.default.createElement(s.h1,{id:"usetrail"},n.default.createElement(s.a,{href:"#usetrail"},"useTrail")),`
`,n.default.createElement(s.p,null,n.default.createElement(s.code,null,"useTrail")," has an identical API signature to ",n.default.createElement(s.a,{href:"/docs/components/use-springs"},n.default.createElement(s.code,null,"useSprings")),` the
difference is the hook automatically orchestrates the springs to stagger one after the other.`),`
`,n.default.createElement(s.h2,{id:"usage"},n.default.createElement(s.a,{href:"#usage"},"Usage")),`
`,n.default.createElement(s.h3,{id:"with-a-function--deps"},n.default.createElement(s.a,{href:"#with-a-function--deps"},"With a function & deps")),`
`,n.default.createElement(s.pre,{lines:"1,4-11,15-17"},n.default.createElement(s.code,{className:"language-jsx",lines:"1,4-11,15-17"},n.default.createElement(s.div,{"data-line":"1",className:"highlight-line","data-highlighted":"true"},n.default.createElement(s.span,{className:"token keyword module"},"import")," ",n.default.createElement(s.span,{className:"token imports"},n.default.createElement(s.span,{className:"token punctuation"},"{")," useTrail",n.default.createElement(s.span,{className:"token punctuation"},",")," animated ",n.default.createElement(s.span,{className:"token punctuation"},"}"))," ",n.default.createElement(s.span,{className:"token keyword module"},"from")," ",n.default.createElement(s.span,{className:"token string"},"'@react-spring/web'"),`
`),n.default.createElement(s.div,{"data-line":"2",className:"highlight-line","data-highlighted":"false"},`
`),n.default.createElement(s.div,{"data-line":"3",className:"highlight-line","data-highlighted":"false"},n.default.createElement(s.span,{className:"token keyword module"},"export")," ",n.default.createElement(s.span,{className:"token keyword module"},"default")," ",n.default.createElement(s.span,{className:"token keyword"},"function")," ",n.default.createElement(s.span,{className:"token function"},n.default.createElement(s.span,{className:"token maybe-class-name"},"MyComponent")),n.default.createElement(s.span,{className:"token punctuation"},"("),n.default.createElement(s.span,{className:"token punctuation"},")")," ",n.default.createElement(s.span,{className:"token punctuation"},"{"),`
`),n.default.createElement(s.div,{"data-line":"4",className:"highlight-line","data-highlighted":"true"},"  ",n.default.createElement(s.span,{className:"token keyword"},"const")," ",n.default.createElement(s.span,{className:"token punctuation"},"["),"trails",n.default.createElement(s.span,{className:"token punctuation"},",")," api",n.default.createElement(s.span,{className:"token punctuation"},"]")," ",n.default.createElement(s.span,{className:"token operator"},"=")," ",n.default.createElement(s.span,{className:"token function"},"useTrail"),n.default.createElement(s.span,{className:"token punctuation"},"("),`
`),n.default.createElement(s.div,{"data-line":"5",className:"highlight-line","data-highlighted":"true"},"    ",n.default.createElement(s.span,{className:"token number"},"2"),n.default.createElement(s.span,{className:"token punctuation"},","),`
`),n.default.createElement(s.div,{"data-line":"6",className:"highlight-line","data-highlighted":"true"},"    ",n.default.createElement(s.span,{className:"token punctuation"},"("),n.default.createElement(s.span,{className:"token punctuation"},")")," ",n.default.createElement(s.span,{className:"token arrow operator"},"=>")," ",n.default.createElement(s.span,{className:"token punctuation"},"("),n.default.createElement(s.span,{className:"token punctuation"},"{"),`
`),n.default.createElement(s.div,{"data-line":"7",className:"highlight-line","data-highlighted":"true"},"      ",n.default.createElement(s.span,{className:"token keyword module"},"from"),n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token punctuation"},"{")," ",n.default.createElement(s.span,{className:"token literal-property property"},"opacity"),n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token number"},"0")," ",n.default.createElement(s.span,{className:"token punctuation"},"}"),n.default.createElement(s.span,{className:"token punctuation"},","),`
`),n.default.createElement(s.div,{"data-line":"8",className:"highlight-line","data-highlighted":"true"},"      ",n.default.createElement(s.span,{className:"token literal-property property"},"to"),n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token punctuation"},"{")," ",n.default.createElement(s.span,{className:"token literal-property property"},"opacity"),n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token number"},"1")," ",n.default.createElement(s.span,{className:"token punctuation"},"}"),n.default.createElement(s.span,{className:"token punctuation"},","),`
`),n.default.createElement(s.div,{"data-line":"9",className:"highlight-line","data-highlighted":"true"},"    ",n.default.createElement(s.span,{className:"token punctuation"},"}"),n.default.createElement(s.span,{className:"token punctuation"},")"),n.default.createElement(s.span,{className:"token punctuation"},","),`
`),n.default.createElement(s.div,{"data-line":"10",className:"highlight-line","data-highlighted":"true"},"    ",n.default.createElement(s.span,{className:"token punctuation"},"["),n.default.createElement(s.span,{className:"token punctuation"},"]"),`
`),n.default.createElement(s.div,{"data-line":"11",className:"highlight-line","data-highlighted":"true"},"  ",n.default.createElement(s.span,{className:"token punctuation"},")"),`
`),n.default.createElement(s.div,{"data-line":"12",className:"highlight-line","data-highlighted":"false"},`
`),n.default.createElement(s.div,{"data-line":"13",className:"highlight-line","data-highlighted":"false"},"  ",n.default.createElement(s.span,{className:"token keyword control-flow"},"return")," ",n.default.createElement(s.span,{className:"token punctuation"},"("),`
`),n.default.createElement(s.div,{"data-line":"14",className:"highlight-line","data-highlighted":"false"},"    ",n.default.createElement(s.span,{className:"token tag"},n.default.createElement(s.span,{className:"token tag"},n.default.createElement(s.span,{className:"token punctuation"},"<"),"div"),n.default.createElement(s.span,{className:"token punctuation"},">")),n.default.createElement(s.span,{className:"token plain-text"}),`
`),n.default.createElement(s.div,{"data-line":"15",className:"highlight-line","data-highlighted":"true"},n.default.createElement(s.span,{className:"token plain-text"},"      "),n.default.createElement(s.span,{className:"token punctuation"},"{"),"trails",n.default.createElement(s.span,{className:"token punctuation"},"."),n.default.createElement(s.span,{className:"token method function property-access"},"map"),n.default.createElement(s.span,{className:"token punctuation"},"("),n.default.createElement(s.span,{className:"token parameter"},"props")," ",n.default.createElement(s.span,{className:"token arrow operator"},"=>")," ",n.default.createElement(s.span,{className:"token punctuation"},"("),`
`),n.default.createElement(s.div,{"data-line":"16",className:"highlight-line","data-highlighted":"true"},"        ",n.default.createElement(s.span,{className:"token tag"},n.default.createElement(s.span,{className:"token tag"},n.default.createElement(s.span,{className:"token punctuation"},"<"),"animated.div")," ",n.default.createElement(s.span,{className:"token attr-name"},"style"),n.default.createElement(s.span,{className:"token script language-javascript"},n.default.createElement(s.span,{className:"token script-punctuation punctuation"},"="),n.default.createElement(s.span,{className:"token punctuation"},"{"),"props",n.default.createElement(s.span,{className:"token punctuation"},"}")),n.default.createElement(s.span,{className:"token punctuation"},">")),n.default.createElement(s.span,{className:"token plain-text"},"Hello World"),n.default.createElement(s.span,{className:"token tag"},n.default.createElement(s.span,{className:"token tag"},n.default.createElement(s.span,{className:"token punctuation"},"</"),"animated.div"),n.default.createElement(s.span,{className:"token punctuation"},">")),`
`),n.default.createElement(s.div,{"data-line":"17",className:"highlight-line","data-highlighted":"true"},"      ",n.default.createElement(s.span,{className:"token punctuation"},")"),n.default.createElement(s.span,{className:"token punctuation"},")"),n.default.createElement(s.span,{className:"token punctuation"},"}"),n.default.createElement(s.span,{className:"token plain-text"}),`
`),n.default.createElement(s.div,{"data-line":"18",className:"highlight-line","data-highlighted":"false"},n.default.createElement(s.span,{className:"token plain-text"},"    "),n.default.createElement(s.span,{className:"token tag"},n.default.createElement(s.span,{className:"token tag"},n.default.createElement(s.span,{className:"token punctuation"},"</"),"div"),n.default.createElement(s.span,{className:"token punctuation"},">")),`
`),n.default.createElement(s.div,{"data-line":"19",className:"highlight-line","data-highlighted":"false"},"  ",n.default.createElement(s.span,{className:"token punctuation"},")"),`
`),n.default.createElement(s.div,{"data-line":"20",className:"highlight-line","data-highlighted":"false"},n.default.createElement(s.span,{className:"token punctuation"},"}"),`
`))),`
`,n.default.createElement(s.h3,{id:"with-a-config-object"},n.default.createElement(s.a,{href:"#with-a-config-object"},"With a config object")),`
`,n.default.createElement(s.pre,{lines:"1,4-7,11-13"},n.default.createElement(s.code,{className:"language-jsx",lines:"1,4-7,11-13"},n.default.createElement(s.div,{"data-line":"1",className:"highlight-line","data-highlighted":"true"},n.default.createElement(s.span,{className:"token keyword module"},"import")," ",n.default.createElement(s.span,{className:"token imports"},n.default.createElement(s.span,{className:"token punctuation"},"{")," useTrail",n.default.createElement(s.span,{className:"token punctuation"},",")," animated ",n.default.createElement(s.span,{className:"token punctuation"},"}"))," ",n.default.createElement(s.span,{className:"token keyword module"},"from")," ",n.default.createElement(s.span,{className:"token string"},"'@react-spring/web'"),`
`),n.default.createElement(s.div,{"data-line":"2",className:"highlight-line","data-highlighted":"false"},`
`),n.default.createElement(s.div,{"data-line":"3",className:"highlight-line","data-highlighted":"false"},n.default.createElement(s.span,{className:"token keyword module"},"export")," ",n.default.createElement(s.span,{className:"token keyword module"},"default")," ",n.default.createElement(s.span,{className:"token keyword"},"function")," ",n.default.createElement(s.span,{className:"token function"},n.default.createElement(s.span,{className:"token maybe-class-name"},"MyComponent")),n.default.createElement(s.span,{className:"token punctuation"},"("),n.default.createElement(s.span,{className:"token punctuation"},")")," ",n.default.createElement(s.span,{className:"token punctuation"},"{"),`
`),n.default.createElement(s.div,{"data-line":"4",className:"highlight-line","data-highlighted":"true"},"  ",n.default.createElement(s.span,{className:"token keyword"},"const")," trails ",n.default.createElement(s.span,{className:"token operator"},"=")," ",n.default.createElement(s.span,{className:"token function"},"useTrail"),n.default.createElement(s.span,{className:"token punctuation"},"("),n.default.createElement(s.span,{className:"token number"},"2"),n.default.createElement(s.span,{className:"token punctuation"},",")," ",n.default.createElement(s.span,{className:"token punctuation"},"{"),`
`),n.default.createElement(s.div,{"data-line":"5",className:"highlight-line","data-highlighted":"true"},"    ",n.default.createElement(s.span,{className:"token keyword module"},"from"),n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token punctuation"},"{")," ",n.default.createElement(s.span,{className:"token literal-property property"},"opacity"),n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token number"},"0")," ",n.default.createElement(s.span,{className:"token punctuation"},"}"),n.default.createElement(s.span,{className:"token punctuation"},","),`
`),n.default.createElement(s.div,{"data-line":"6",className:"highlight-line","data-highlighted":"true"},"    ",n.default.createElement(s.span,{className:"token literal-property property"},"to"),n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token punctuation"},"{")," ",n.default.createElement(s.span,{className:"token literal-property property"},"opacity"),n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token number"},"1")," ",n.default.createElement(s.span,{className:"token punctuation"},"}"),n.default.createElement(s.span,{className:"token punctuation"},","),`
`),n.default.createElement(s.div,{"data-line":"7",className:"highlight-line","data-highlighted":"true"},"  ",n.default.createElement(s.span,{className:"token punctuation"},"}"),n.default.createElement(s.span,{className:"token punctuation"},")"),`
`),n.default.createElement(s.div,{"data-line":"8",className:"highlight-line","data-highlighted":"false"},`
`),n.default.createElement(s.div,{"data-line":"9",className:"highlight-line","data-highlighted":"false"},"  ",n.default.createElement(s.span,{className:"token keyword control-flow"},"return")," ",n.default.createElement(s.span,{className:"token punctuation"},"("),`
`),n.default.createElement(s.div,{"data-line":"10",className:"highlight-line","data-highlighted":"false"},"    ",n.default.createElement(s.span,{className:"token tag"},n.default.createElement(s.span,{className:"token tag"},n.default.createElement(s.span,{className:"token punctuation"},"<"),"div"),n.default.createElement(s.span,{className:"token punctuation"},">")),n.default.createElement(s.span,{className:"token plain-text"}),`
`),n.default.createElement(s.div,{"data-line":"11",className:"highlight-line","data-highlighted":"true"},n.default.createElement(s.span,{className:"token plain-text"},"      "),n.default.createElement(s.span,{className:"token punctuation"},"{"),"trails",n.default.createElement(s.span,{className:"token punctuation"},"."),n.default.createElement(s.span,{className:"token method function property-access"},"map"),n.default.createElement(s.span,{className:"token punctuation"},"("),n.default.createElement(s.span,{className:"token parameter"},"props")," ",n.default.createElement(s.span,{className:"token arrow operator"},"=>")," ",n.default.createElement(s.span,{className:"token punctuation"},"("),`
`),n.default.createElement(s.div,{"data-line":"12",className:"highlight-line","data-highlighted":"true"},"        ",n.default.createElement(s.span,{className:"token tag"},n.default.createElement(s.span,{className:"token tag"},n.default.createElement(s.span,{className:"token punctuation"},"<"),"animated.div")," ",n.default.createElement(s.span,{className:"token attr-name"},"style"),n.default.createElement(s.span,{className:"token script language-javascript"},n.default.createElement(s.span,{className:"token script-punctuation punctuation"},"="),n.default.createElement(s.span,{className:"token punctuation"},"{"),"props",n.default.createElement(s.span,{className:"token punctuation"},"}")),n.default.createElement(s.span,{className:"token punctuation"},">")),n.default.createElement(s.span,{className:"token plain-text"},"Hello World"),n.default.createElement(s.span,{className:"token tag"},n.default.createElement(s.span,{className:"token tag"},n.default.createElement(s.span,{className:"token punctuation"},"</"),"animated.div"),n.default.createElement(s.span,{className:"token punctuation"},">")),`
`),n.default.createElement(s.div,{"data-line":"13",className:"highlight-line","data-highlighted":"true"},"      ",n.default.createElement(s.span,{className:"token punctuation"},")"),n.default.createElement(s.span,{className:"token punctuation"},")"),n.default.createElement(s.span,{className:"token punctuation"},"}"),n.default.createElement(s.span,{className:"token plain-text"}),`
`),n.default.createElement(s.div,{"data-line":"14",className:"highlight-line","data-highlighted":"false"},n.default.createElement(s.span,{className:"token plain-text"},"    "),n.default.createElement(s.span,{className:"token tag"},n.default.createElement(s.span,{className:"token tag"},n.default.createElement(s.span,{className:"token punctuation"},"</"),"div"),n.default.createElement(s.span,{className:"token punctuation"},">")),`
`),n.default.createElement(s.div,{"data-line":"15",className:"highlight-line","data-highlighted":"false"},"  ",n.default.createElement(s.span,{className:"token punctuation"},")"),`
`),n.default.createElement(s.div,{"data-line":"16",className:"highlight-line","data-highlighted":"false"},n.default.createElement(s.span,{className:"token punctuation"},"}"),`
`))),`
`,n.default.createElement(s.h2,{id:"reference"},n.default.createElement(s.a,{href:"#reference"},"Reference")),`
`,`
`,n.default.createElement(i,null),`
`,n.default.createElement(s.h2,{id:"typescript"},n.default.createElement(s.a,{href:"#typescript"},"Typescript")),`
`,n.default.createElement(s.pre,null,n.default.createElement(s.code,{className:"language-tsx"},n.default.createElement(s.div,{"data-line":"1",className:"highlight-line","data-highlighted":"true"},n.default.createElement(s.span,{className:"token keyword"},"function")," ",n.default.createElement(s.span,{className:"token function"},"useTrail"),n.default.createElement(s.span,{className:"token punctuation"},"("),"count",n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token builtin"},"number"),n.default.createElement(s.span,{className:"token punctuation"},",")," configuration",n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token maybe-class-name"},"ConfigObject"),n.default.createElement(s.span,{className:"token punctuation"},")"),n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token maybe-class-name"},"SpringValues"),n.default.createElement(s.span,{className:"token punctuation"},"["),n.default.createElement(s.span,{className:"token punctuation"},"]"),`
`),n.default.createElement(s.div,{"data-line":"2",className:"highlight-line","data-highlighted":"true"},`
`),n.default.createElement(s.div,{"data-line":"3",className:"highlight-line","data-highlighted":"true"},n.default.createElement(s.span,{className:"token keyword"},"function")," ",n.default.createElement(s.span,{className:"token function"},"useTrail"),n.default.createElement(s.span,{className:"token punctuation"},"("),`
`),n.default.createElement(s.div,{"data-line":"4",className:"highlight-line","data-highlighted":"true"},"  count",n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token builtin"},"number"),n.default.createElement(s.span,{className:"token punctuation"},","),`
`),n.default.createElement(s.div,{"data-line":"5",className:"highlight-line","data-highlighted":"true"},"  ",n.default.createElement(s.span,{className:"token function-variable function"},"configurationFn"),n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token punctuation"},"("),"springIndex",n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token builtin"},"number"),n.default.createElement(s.span,{className:"token punctuation"},")")," ",n.default.createElement(s.span,{className:"token arrow operator"},"=>")," ",n.default.createElement(s.span,{className:"token maybe-class-name"},"ConfigObject"),n.default.createElement(s.span,{className:"token punctuation"},","),`
`),n.default.createElement(s.div,{"data-line":"6",className:"highlight-line","data-highlighted":"true"},"  deps",n.default.createElement(s.span,{className:"token operator"},"?"),n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token builtin"},"any"),n.default.createElement(s.span,{className:"token punctuation"},"["),n.default.createElement(s.span,{className:"token punctuation"},"]"),`
`),n.default.createElement(s.div,{"data-line":"7",className:"highlight-line","data-highlighted":"true"},n.default.createElement(s.span,{className:"token punctuation"},")"),n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token punctuation"},"["),"springs",n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token maybe-class-name"},"SpringValues"),n.default.createElement(s.span,{className:"token punctuation"},"["),n.default.createElement(s.span,{className:"token punctuation"},"]"),n.default.createElement(s.span,{className:"token punctuation"},",")," api",n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token maybe-class-name"},"SpringRef"),n.default.createElement(s.span,{className:"token punctuation"},"]"),`
`))),`
`,n.default.createElement(s.p,null,"Where ",n.default.createElement(s.code,null,"ConfigObject")," is described ",n.default.createElement(s.a,{href:"#reference"},"above")),`
`,n.default.createElement(s.h3,{id:"ts-glossary"},n.default.createElement(s.a,{href:"#ts-glossary"},"TS Glossary")),`
`,n.default.createElement(s.ul,null,`
`,n.default.createElement(s.li,null,n.default.createElement(s.a,{href:"/docs/typescript#springvalues"},n.default.createElement(s.code,null,"SpringValues"))),`
`),`
`,n.default.createElement(s.h2,{id:"examples"},n.default.createElement(s.a,{href:"#examples"},"Examples")),`
`,`
`,n.default.createElement(m,{sandboxTitles:["Basic Trail","Goo Blobs","Smile Grid","Wordle"]}),`
`,n.default.createElement(s.p,null,"Can't find what you're looking for? Check out all our ",n.default.createElement(s.a,{href:"/examples"},"examples!")));return p?n.default.createElement(p,{...o},e):e}var d=u;var k=typeof a<"u"&&a.headers,h=typeof a<"u"&&a.meta,r=typeof a<"u"&&a.handle;export{d as default,r as handle,h as meta};
