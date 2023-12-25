import{a as l}from"/build/_shared/chunk-7QSVQE2F.js";import{a as m}from"/build/_shared/chunk-46TQ4TVO.js";import"/build/_shared/chunk-TXRHUVLQ.js";import{j as t}from"/build/_shared/chunk-EOZRNUDL.js";import"/build/_shared/chunk-LO53UBCC.js";import"/build/_shared/chunk-2CAKVS4P.js";import"/build/_shared/chunk-U4254SWG.js";import"/build/_shared/chunk-M63GRH3S.js";import"/build/_shared/chunk-5J7FL2HD.js";import"/build/_shared/chunk-RP4TNHQF.js";import"/build/_shared/chunk-PFVXHB5S.js";import"/build/_shared/chunk-LF2RRCOB.js";import"/build/_shared/chunk-LWOBU4ZG.js";import"/build/_shared/chunk-KUOAIDDK.js";import"/build/_shared/chunk-KYDOHSFW.js";import"/build/_shared/chunk-YTOSUJX3.js";import"/build/_shared/chunk-3FN6QERY.js";import"/build/_shared/chunk-JBFIX7QL.js";import{a as i}from"/build/_shared/chunk-QFJ5IYWW.js";import{a as u}from"/build/_shared/chunk-CQXTAVIO.js";import{c}from"/build/_shared/chunk-Q3IECNXJ.js";var n=c(u());var o={meta:{title:"useSpringValue | React Spring","og:title":"useSpringValue | React Spring","twitter:title":"useSpringValue | React Spring",description:"API documentation for the useSpringValue hook in React Spring.","og:description":"API documentation for the useSpringValue hook in React Spring.","twitter:description":"API documentation for the useSpringValue hook in React Spring.","og:url":"https://www.react-spring.dev/docs/components/use-spring-value","twitter:url":"https://www.react-spring.dev/docs/components/use-spring-value"},sidebar_position:3,isNew:!0};function d(a={}){let s=Object.assign({h1:"h1",a:"a",p:"p",em:"em",code:"code",h2:"h2",h3:"h3",pre:"pre",div:"div",span:"span",warning:"warning",strong:"strong"},i(),a.components),{wrapper:e}=s,p=n.default.createElement(n.default.Fragment,null,n.default.createElement(s.h1,{id:"usespringvalue"},n.default.createElement(s.a,{href:"#usespringvalue"},"useSpringValue")),`
`,n.default.createElement(s.p,null,"Love the imperative API but you need ",n.default.createElement(s.em,null,"too many"),` different springs running in parallel? Then this
hook is for you! It's a simple wrapper around a `,n.default.createElement(s.a,{href:"/docs/components/spring-value"},n.default.createElement(s.code,null,"SpringValue")),` and
therefore behaves the same, so you can access it's methods imperatively.`),`
`,n.default.createElement(s.h2,{id:"usage"},n.default.createElement(s.a,{href:"#usage"},"Usage")),`
`,n.default.createElement(s.h3,{id:"value-only"},n.default.createElement(s.a,{href:"#value-only"},"Value only")),`
`,n.default.createElement(s.pre,null,n.default.createElement(s.code,{className:"language-tsx"},n.default.createElement(s.div,{"data-line":"1",className:"highlight-line","data-highlighted":"true"},n.default.createElement(s.span,{className:"token keyword module"},"import")," ",n.default.createElement(s.span,{className:"token imports"},n.default.createElement(s.span,{className:"token punctuation"},"{")," useSpringValue",n.default.createElement(s.span,{className:"token punctuation"},",")," animated ",n.default.createElement(s.span,{className:"token punctuation"},"}"))," ",n.default.createElement(s.span,{className:"token keyword module"},"from")," ",n.default.createElement(s.span,{className:"token string"},"'@react-spring/web'"),`
`),n.default.createElement(s.div,{"data-line":"2",className:"highlight-line","data-highlighted":"true"},`
`),n.default.createElement(s.div,{"data-line":"3",className:"highlight-line","data-highlighted":"true"},n.default.createElement(s.span,{className:"token keyword"},"function")," ",n.default.createElement(s.span,{className:"token function"},n.default.createElement(s.span,{className:"token maybe-class-name"},"MyComponent")),n.default.createElement(s.span,{className:"token punctuation"},"("),n.default.createElement(s.span,{className:"token punctuation"},")")," ",n.default.createElement(s.span,{className:"token punctuation"},"{"),`
`),n.default.createElement(s.div,{"data-line":"4",className:"highlight-line","data-highlighted":"true"},"  ",n.default.createElement(s.span,{className:"token keyword"},"const")," opacity ",n.default.createElement(s.span,{className:"token operator"},"=")," ",n.default.createElement(s.span,{className:"token function"},"useSpringValue"),n.default.createElement(s.span,{className:"token punctuation"},"("),n.default.createElement(s.span,{className:"token number"},"0"),n.default.createElement(s.span,{className:"token punctuation"},")"),`
`),n.default.createElement(s.div,{"data-line":"5",className:"highlight-line","data-highlighted":"true"},`
`),n.default.createElement(s.div,{"data-line":"6",className:"highlight-line","data-highlighted":"true"},"  ",n.default.createElement(s.span,{className:"token keyword control-flow"},"return")," ",n.default.createElement(s.span,{className:"token tag"},n.default.createElement(s.span,{className:"token tag"},n.default.createElement(s.span,{className:"token punctuation"},"<"),"animated.div")," ",n.default.createElement(s.span,{className:"token attr-name"},"style"),n.default.createElement(s.span,{className:"token script language-javascript"},n.default.createElement(s.span,{className:"token script-punctuation punctuation"},"="),n.default.createElement(s.span,{className:"token punctuation"},"{"),n.default.createElement(s.span,{className:"token punctuation"},"{")," opacity ",n.default.createElement(s.span,{className:"token punctuation"},"}"),n.default.createElement(s.span,{className:"token punctuation"},"}")),n.default.createElement(s.span,{className:"token punctuation"},">")),n.default.createElement(s.span,{className:"token plain-text"},"Hello World"),n.default.createElement(s.span,{className:"token tag"},n.default.createElement(s.span,{className:"token tag"},n.default.createElement(s.span,{className:"token punctuation"},"</"),"animated.div"),n.default.createElement(s.span,{className:"token punctuation"},">")),`
`),n.default.createElement(s.div,{"data-line":"7",className:"highlight-line","data-highlighted":"true"},n.default.createElement(s.span,{className:"token punctuation"},"}"),`
`))),`
`,n.default.createElement(s.h3,{id:"with-configuration"},n.default.createElement(s.a,{href:"#with-configuration"},"With configuration")),`
`,n.default.createElement(s.pre,null,n.default.createElement(s.code,{className:"language-tsx"},n.default.createElement(s.div,{"data-line":"1",className:"highlight-line","data-highlighted":"true"},n.default.createElement(s.span,{className:"token keyword module"},"import")," ",n.default.createElement(s.span,{className:"token imports"},n.default.createElement(s.span,{className:"token punctuation"},"{")," useSpringValue",n.default.createElement(s.span,{className:"token punctuation"},",")," animated ",n.default.createElement(s.span,{className:"token punctuation"},"}"))," ",n.default.createElement(s.span,{className:"token keyword module"},"from")," ",n.default.createElement(s.span,{className:"token string"},"'@react-spring/web'"),`
`),n.default.createElement(s.div,{"data-line":"2",className:"highlight-line","data-highlighted":"true"},`
`),n.default.createElement(s.div,{"data-line":"3",className:"highlight-line","data-highlighted":"true"},n.default.createElement(s.span,{className:"token keyword"},"function")," ",n.default.createElement(s.span,{className:"token function"},n.default.createElement(s.span,{className:"token maybe-class-name"},"MyComponent")),n.default.createElement(s.span,{className:"token punctuation"},"("),n.default.createElement(s.span,{className:"token punctuation"},")")," ",n.default.createElement(s.span,{className:"token punctuation"},"{"),`
`),n.default.createElement(s.div,{"data-line":"4",className:"highlight-line","data-highlighted":"true"},"  ",n.default.createElement(s.span,{className:"token keyword"},"const")," opacity ",n.default.createElement(s.span,{className:"token operator"},"=")," ",n.default.createElement(s.span,{className:"token function"},"useSpringValue"),n.default.createElement(s.span,{className:"token punctuation"},"("),n.default.createElement(s.span,{className:"token number"},"0"),n.default.createElement(s.span,{className:"token punctuation"},",")," ",n.default.createElement(s.span,{className:"token punctuation"},"{"),`
`),n.default.createElement(s.div,{"data-line":"5",className:"highlight-line","data-highlighted":"true"},"    config",n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token punctuation"},"{"),`
`),n.default.createElement(s.div,{"data-line":"6",className:"highlight-line","data-highlighted":"true"},"      mass",n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token number"},"2"),n.default.createElement(s.span,{className:"token punctuation"},","),`
`),n.default.createElement(s.div,{"data-line":"7",className:"highlight-line","data-highlighted":"true"},"      friction",n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token number"},"5"),n.default.createElement(s.span,{className:"token punctuation"},","),`
`),n.default.createElement(s.div,{"data-line":"8",className:"highlight-line","data-highlighted":"true"},"      tension",n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token number"},"80"),n.default.createElement(s.span,{className:"token punctuation"},","),`
`),n.default.createElement(s.div,{"data-line":"9",className:"highlight-line","data-highlighted":"true"},"    ",n.default.createElement(s.span,{className:"token punctuation"},"}"),n.default.createElement(s.span,{className:"token punctuation"},","),`
`),n.default.createElement(s.div,{"data-line":"10",className:"highlight-line","data-highlighted":"true"},"  ",n.default.createElement(s.span,{className:"token punctuation"},"}"),n.default.createElement(s.span,{className:"token punctuation"},")"),`
`),n.default.createElement(s.div,{"data-line":"11",className:"highlight-line","data-highlighted":"true"},`
`),n.default.createElement(s.div,{"data-line":"12",className:"highlight-line","data-highlighted":"true"},"  ",n.default.createElement(s.span,{className:"token keyword control-flow"},"return")," ",n.default.createElement(s.span,{className:"token tag"},n.default.createElement(s.span,{className:"token tag"},n.default.createElement(s.span,{className:"token punctuation"},"<"),"animated.div")," ",n.default.createElement(s.span,{className:"token attr-name"},"style"),n.default.createElement(s.span,{className:"token script language-javascript"},n.default.createElement(s.span,{className:"token script-punctuation punctuation"},"="),n.default.createElement(s.span,{className:"token punctuation"},"{"),n.default.createElement(s.span,{className:"token punctuation"},"{")," opacity ",n.default.createElement(s.span,{className:"token punctuation"},"}"),n.default.createElement(s.span,{className:"token punctuation"},"}")),n.default.createElement(s.span,{className:"token punctuation"},">")),n.default.createElement(s.span,{className:"token plain-text"},"Hello World"),n.default.createElement(s.span,{className:"token tag"},n.default.createElement(s.span,{className:"token tag"},n.default.createElement(s.span,{className:"token punctuation"},"</"),"animated.div"),n.default.createElement(s.span,{className:"token punctuation"},">")),`
`),n.default.createElement(s.div,{"data-line":"13",className:"highlight-line","data-highlighted":"true"},n.default.createElement(s.span,{className:"token punctuation"},"}"),`
`))),`
`,n.default.createElement(s.h2,{id:"updating"},n.default.createElement(s.a,{href:"#updating"},"Updating")),`
`,n.default.createElement(s.warning,null,n.default.createElement(s.p,null,"Unlike our other hooks, this one ",n.default.createElement(s.strong,null,"will not"),` react to updates in the component. This is by design.
You `,n.default.createElement(s.strong,null,"must")," use the methods on the returned ",n.default.createElement(s.code,null,"SpringValue")," to update said value.")),`
`,n.default.createElement(s.pre,null,n.default.createElement(s.code,{className:"language-tsx"},n.default.createElement(s.div,{"data-line":"1",className:"highlight-line","data-highlighted":"true"},n.default.createElement(s.span,{className:"token keyword module"},"import")," ",n.default.createElement(s.span,{className:"token imports"},n.default.createElement(s.span,{className:"token punctuation"},"{")," useSpringValue",n.default.createElement(s.span,{className:"token punctuation"},",")," animated ",n.default.createElement(s.span,{className:"token punctuation"},"}"))," ",n.default.createElement(s.span,{className:"token keyword module"},"from")," ",n.default.createElement(s.span,{className:"token string"},"'@react-spring/web'"),`
`),n.default.createElement(s.div,{"data-line":"2",className:"highlight-line","data-highlighted":"true"},`
`),n.default.createElement(s.div,{"data-line":"3",className:"highlight-line","data-highlighted":"true"},n.default.createElement(s.span,{className:"token keyword"},"function")," ",n.default.createElement(s.span,{className:"token function"},n.default.createElement(s.span,{className:"token maybe-class-name"},"MyComponent")),n.default.createElement(s.span,{className:"token punctuation"},"("),n.default.createElement(s.span,{className:"token punctuation"},")")," ",n.default.createElement(s.span,{className:"token punctuation"},"{"),`
`),n.default.createElement(s.div,{"data-line":"4",className:"highlight-line","data-highlighted":"true"},"  ",n.default.createElement(s.span,{className:"token keyword"},"const")," opacity ",n.default.createElement(s.span,{className:"token operator"},"=")," ",n.default.createElement(s.span,{className:"token function"},"useSpringValue"),n.default.createElement(s.span,{className:"token punctuation"},"("),n.default.createElement(s.span,{className:"token number"},"0"),n.default.createElement(s.span,{className:"token punctuation"},",")," ",n.default.createElement(s.span,{className:"token punctuation"},"{"),`
`),n.default.createElement(s.div,{"data-line":"5",className:"highlight-line","data-highlighted":"true"},"    config",n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token punctuation"},"{"),`
`),n.default.createElement(s.div,{"data-line":"6",className:"highlight-line","data-highlighted":"true"},"      mass",n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token number"},"2"),n.default.createElement(s.span,{className:"token punctuation"},","),`
`),n.default.createElement(s.div,{"data-line":"7",className:"highlight-line","data-highlighted":"true"},"      friction",n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token number"},"5"),n.default.createElement(s.span,{className:"token punctuation"},","),`
`),n.default.createElement(s.div,{"data-line":"8",className:"highlight-line","data-highlighted":"true"},"      tension",n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token number"},"80"),n.default.createElement(s.span,{className:"token punctuation"},","),`
`),n.default.createElement(s.div,{"data-line":"9",className:"highlight-line","data-highlighted":"true"},"    ",n.default.createElement(s.span,{className:"token punctuation"},"}"),n.default.createElement(s.span,{className:"token punctuation"},","),`
`),n.default.createElement(s.div,{"data-line":"10",className:"highlight-line","data-highlighted":"true"},"  ",n.default.createElement(s.span,{className:"token punctuation"},"}"),n.default.createElement(s.span,{className:"token punctuation"},")"),`
`),n.default.createElement(s.div,{"data-line":"11",className:"highlight-line","data-highlighted":"true"},`
`),n.default.createElement(s.div,{"data-line":"12",className:"highlight-line","data-highlighted":"true"},"  ",n.default.createElement(s.span,{className:"token keyword"},"const")," ",n.default.createElement(s.span,{className:"token function-variable function"},"handleClick")," ",n.default.createElement(s.span,{className:"token operator"},"=")," ",n.default.createElement(s.span,{className:"token punctuation"},"("),n.default.createElement(s.span,{className:"token punctuation"},")")," ",n.default.createElement(s.span,{className:"token arrow operator"},"=>")," opacity",n.default.createElement(s.span,{className:"token punctuation"},"."),n.default.createElement(s.span,{className:"token method function property-access"},"start"),n.default.createElement(s.span,{className:"token punctuation"},"("),n.default.createElement(s.span,{className:"token number"},"1"),n.default.createElement(s.span,{className:"token punctuation"},")"),`
`),n.default.createElement(s.div,{"data-line":"13",className:"highlight-line","data-highlighted":"true"},`
`),n.default.createElement(s.div,{"data-line":"14",className:"highlight-line","data-highlighted":"true"},"  ",n.default.createElement(s.span,{className:"token keyword control-flow"},"return")," ",n.default.createElement(s.span,{className:"token punctuation"},"("),`
`),n.default.createElement(s.div,{"data-line":"15",className:"highlight-line","data-highlighted":"true"},"    ",n.default.createElement(s.span,{className:"token tag"},n.default.createElement(s.span,{className:"token tag"},n.default.createElement(s.span,{className:"token punctuation"},"<"),"animated.div")," ",n.default.createElement(s.span,{className:"token attr-name"},"onClick"),n.default.createElement(s.span,{className:"token script language-javascript"},n.default.createElement(s.span,{className:"token script-punctuation punctuation"},"="),n.default.createElement(s.span,{className:"token punctuation"},"{"),"handleClick",n.default.createElement(s.span,{className:"token punctuation"},"}"))," ",n.default.createElement(s.span,{className:"token attr-name"},"style"),n.default.createElement(s.span,{className:"token script language-javascript"},n.default.createElement(s.span,{className:"token script-punctuation punctuation"},"="),n.default.createElement(s.span,{className:"token punctuation"},"{"),n.default.createElement(s.span,{className:"token punctuation"},"{")," opacity ",n.default.createElement(s.span,{className:"token punctuation"},"}"),n.default.createElement(s.span,{className:"token punctuation"},"}")),n.default.createElement(s.span,{className:"token punctuation"},">")),n.default.createElement(s.span,{className:"token plain-text"}),`
`),n.default.createElement(s.div,{"data-line":"16",className:"highlight-line","data-highlighted":"true"},n.default.createElement(s.span,{className:"token plain-text"},"      Hello World"),`
`),n.default.createElement(s.div,{"data-line":"17",className:"highlight-line","data-highlighted":"true"},n.default.createElement(s.span,{className:"token plain-text"},"    "),n.default.createElement(s.span,{className:"token tag"},n.default.createElement(s.span,{className:"token tag"},n.default.createElement(s.span,{className:"token punctuation"},"</"),"animated.div"),n.default.createElement(s.span,{className:"token punctuation"},">")),`
`),n.default.createElement(s.div,{"data-line":"18",className:"highlight-line","data-highlighted":"true"},"  ",n.default.createElement(s.span,{className:"token punctuation"},")"),`
`),n.default.createElement(s.div,{"data-line":"19",className:"highlight-line","data-highlighted":"true"},n.default.createElement(s.span,{className:"token punctuation"},"}"),`
`))),`
`,n.default.createElement(s.h2,{id:"reference"},n.default.createElement(s.a,{href:"#reference"},"Reference")),`
`,`
`,n.default.createElement(m,{data:t}),`
`,n.default.createElement(s.h2,{id:"typescript"},n.default.createElement(s.a,{href:"#typescript"},"Typescript")),`
`,n.default.createElement(s.pre,null,n.default.createElement(s.code,{className:"language-tsx"},n.default.createElement(s.div,{"data-line":"1",className:"highlight-line","data-highlighted":"true"},n.default.createElement(s.span,{className:"token keyword"},"function")," ",n.default.createElement(s.span,{className:"token generic-function"},n.default.createElement(s.span,{className:"token function"},"useSpringValue"),n.default.createElement(s.span,{className:"token generic class-name"},n.default.createElement(s.span,{className:"token operator"},"<"),n.default.createElement(s.span,{className:"token constant"},"T"),n.default.createElement(s.span,{className:"token operator"},">"))),n.default.createElement(s.span,{className:"token punctuation"},"("),"value",n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token constant"},"T"),n.default.createElement(s.span,{className:"token punctuation"},")"),n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token maybe-class-name"},"SpringValue"),n.default.createElement(s.span,{className:"token operator"},"<"),n.default.createElement(s.span,{className:"token constant"},"T"),n.default.createElement(s.span,{className:"token operator"},">"),`
`),n.default.createElement(s.div,{"data-line":"2",className:"highlight-line","data-highlighted":"true"},`
`),n.default.createElement(s.div,{"data-line":"3",className:"highlight-line","data-highlighted":"true"},n.default.createElement(s.span,{className:"token keyword"},"function")," ",n.default.createElement(s.span,{className:"token generic-function"},n.default.createElement(s.span,{className:"token function"},"useSpringValue"),n.default.createElement(s.span,{className:"token generic class-name"},n.default.createElement(s.span,{className:"token operator"},"<"),n.default.createElement(s.span,{className:"token constant"},"T"),n.default.createElement(s.span,{className:"token operator"},">"))),n.default.createElement(s.span,{className:"token punctuation"},"("),"value",n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token constant"},"T"),n.default.createElement(s.span,{className:"token punctuation"},",")," config",n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token maybe-class-name"},"ConfigObject"),n.default.createElement(s.span,{className:"token punctuation"},")"),n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token maybe-class-name"},"SpringValue"),n.default.createElement(s.span,{className:"token operator"},"<"),n.default.createElement(s.span,{className:"token constant"},"T"),n.default.createElement(s.span,{className:"token operator"},">"),`
`))),`
`,n.default.createElement(s.p,null,"Where ",n.default.createElement(s.code,null,"ConfigObject")," is described ",n.default.createElement(s.a,{href:"#reference"},"above")),`
`,n.default.createElement(s.h2,{id:"examples"},n.default.createElement(s.a,{href:"#examples"},"Examples")),`
`,`
`,n.default.createElement(l,{sandboxTitles:["MacOS Dock"]}),`
`,n.default.createElement(s.p,null,"Can't find what you're looking for? Check out all our ",n.default.createElement(s.a,{href:"/examples"},"examples!")));return e?n.default.createElement(e,{...a},p):p}var h=d;var f=typeof o<"u"&&o.headers,r=typeof o<"u"&&o.meta,_=typeof o<"u"&&o.handle;export{h as default,_ as handle,r as meta};