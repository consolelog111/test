import{a as i}from"/build/_shared/chunk-46TQ4TVO.js";import{m as t}from"/build/_shared/chunk-EOZRNUDL.js";import"/build/_shared/chunk-2CAKVS4P.js";import"/build/_shared/chunk-U4254SWG.js";import"/build/_shared/chunk-LF2RRCOB.js";import"/build/_shared/chunk-LWOBU4ZG.js";import"/build/_shared/chunk-KUOAIDDK.js";import"/build/_shared/chunk-KYDOHSFW.js";import"/build/_shared/chunk-YTOSUJX3.js";import"/build/_shared/chunk-JBFIX7QL.js";import{a as m}from"/build/_shared/chunk-QFJ5IYWW.js";import{a as c}from"/build/_shared/chunk-CQXTAVIO.js";import{c as l}from"/build/_shared/chunk-Q3IECNXJ.js";var n=l(c());var o={meta:{title:"Controller | React Spring","og:title":"Controller | React Spring","twitter:title":"Controller | React Spring",description:"An advanced API guide to the Controller class in React Spring.","og:description":"An advanced API guide to the Controller class in React Spring.","twitter:description":"An advanced API guide to the Controller class in React Spring.","og:url":"https://www.react-spring.dev/docs/advanced/controller","twitter:url":"https://www.react-spring.dev/docs/advanced/controller"},sidebar_position:3};function r(a={}){let s=Object.assign({h1:"h1",a:"a",p:"p",code:"code",h2:"h2",pre:"pre",div:"div",span:"span",h3:"h3"},m(),a.components),{wrapper:e}=s,p=n.default.createElement(n.default.Fragment,null,n.default.createElement(s.h1,{id:"controller"},n.default.createElement(s.a,{href:"#controller"},"Controller")),`
`,n.default.createElement(s.p,null,"Manages ",n.default.createElement(s.a,{href:"/docs/advanced/spring-value"},n.default.createElement(s.code,null,"SpringValue"),"s")," for our spring hooks."),`
`,n.default.createElement(s.h2,{id:"usage"},n.default.createElement(s.a,{href:"#usage"},"Usage")),`
`,n.default.createElement(s.p,null,"Basic usage, the Controller class you initialise can be used as an ",n.default.createElement(s.a,{href:"/docs/concepts/imperative-api"},n.default.createElement(s.code,null,"imperative api")),`
to control your `,n.default.createElement(s.code,null,"SpringValues"),". Meanwhile you pass ",n.default.createElement(s.code,null,"Controller.springs")," to your ",n.default.createElement(s.code,null,"animated")," component."),`
`,n.default.createElement(s.pre,null,n.default.createElement(s.code,{className:"language-tsx"},n.default.createElement(s.div,{"data-line":"1",className:"highlight-line","data-highlighted":"true"},n.default.createElement(s.span,{className:"token keyword module"},"import")," ",n.default.createElement(s.span,{className:"token imports"},n.default.createElement(s.span,{className:"token punctuation"},"{")," ",n.default.createElement(s.span,{className:"token maybe-class-name"},"Component"),n.default.createElement(s.span,{className:"token punctuation"},",")," createRef ",n.default.createElement(s.span,{className:"token punctuation"},"}"))," ",n.default.createElement(s.span,{className:"token keyword module"},"from")," ",n.default.createElement(s.span,{className:"token string"},"'react'"),`
`),n.default.createElement(s.div,{"data-line":"2",className:"highlight-line","data-highlighted":"true"},n.default.createElement(s.span,{className:"token keyword module"},"import")," ",n.default.createElement(s.span,{className:"token imports"},n.default.createElement(s.span,{className:"token punctuation"},"{")," ",n.default.createElement(s.span,{className:"token maybe-class-name"},"Controller"),n.default.createElement(s.span,{className:"token punctuation"},",")," animated ",n.default.createElement(s.span,{className:"token punctuation"},"}"))," ",n.default.createElement(s.span,{className:"token keyword module"},"from")," ",n.default.createElement(s.span,{className:"token string"},"'@react-spring/web'"),`
`),n.default.createElement(s.div,{"data-line":"3",className:"highlight-line","data-highlighted":"true"},`
`),n.default.createElement(s.div,{"data-line":"4",className:"highlight-line","data-highlighted":"true"},n.default.createElement(s.span,{className:"token keyword"},"class")," ",n.default.createElement(s.span,{className:"token class-name"},n.default.createElement(s.span,{className:"token maybe-class-name"},"AnimatedComponent"))," ",n.default.createElement(s.span,{className:"token keyword"},"extends")," ",n.default.createElement(s.span,{className:"token class-name"},n.default.createElement(s.span,{className:"token maybe-class-name"},"Component"))," ",n.default.createElement(s.span,{className:"token punctuation"},"{"),`
`),n.default.createElement(s.div,{"data-line":"5",className:"highlight-line","data-highlighted":"true"},"  isShowing ",n.default.createElement(s.span,{className:"token operator"},"=")," ",n.default.createElement(s.span,{className:"token function"},"createRef"),n.default.createElement(s.span,{className:"token punctuation"},"("),n.default.createElement(s.span,{className:"token boolean"},"false"),n.default.createElement(s.span,{className:"token punctuation"},")"),`
`),n.default.createElement(s.div,{"data-line":"6",className:"highlight-line","data-highlighted":"true"},"  animations ",n.default.createElement(s.span,{className:"token operator"},"=")," ",n.default.createElement(s.span,{className:"token keyword"},"new")," ",n.default.createElement(s.span,{className:"token class-name"},n.default.createElement(s.span,{className:"token maybe-class-name"},"Controller")),n.default.createElement(s.span,{className:"token punctuation"},"("),n.default.createElement(s.span,{className:"token punctuation"},"{")," opacity",n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token number"},"0")," ",n.default.createElement(s.span,{className:"token punctuation"},"}"),n.default.createElement(s.span,{className:"token punctuation"},")"),`
`),n.default.createElement(s.div,{"data-line":"7",className:"highlight-line","data-highlighted":"true"},`
`),n.default.createElement(s.div,{"data-line":"8",className:"highlight-line","data-highlighted":"true"},"  ",n.default.createElement(s.span,{className:"token function-variable function"},"toggle")," ",n.default.createElement(s.span,{className:"token operator"},"=")," ",n.default.createElement(s.span,{className:"token punctuation"},"("),n.default.createElement(s.span,{className:"token punctuation"},")")," ",n.default.createElement(s.span,{className:"token arrow operator"},"=>")," ",n.default.createElement(s.span,{className:"token punctuation"},"{"),`
`),n.default.createElement(s.div,{"data-line":"9",className:"highlight-line","data-highlighted":"true"},"    ",n.default.createElement(s.span,{className:"token keyword"},"this"),n.default.createElement(s.span,{className:"token punctuation"},"."),n.default.createElement(s.span,{className:"token property-access"},"animations"),n.default.createElement(s.span,{className:"token punctuation"},"."),n.default.createElement(s.span,{className:"token method function property-access"},"start"),n.default.createElement(s.span,{className:"token punctuation"},"("),n.default.createElement(s.span,{className:"token punctuation"},"{")," opacity",n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token keyword"},"this"),n.default.createElement(s.span,{className:"token punctuation"},"."),n.default.createElement(s.span,{className:"token property-access"},"isShowing")," ",n.default.createElement(s.span,{className:"token operator"},"?")," ",n.default.createElement(s.span,{className:"token number"},"1")," ",n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token number"},"0")," ",n.default.createElement(s.span,{className:"token punctuation"},"}"),n.default.createElement(s.span,{className:"token punctuation"},")"),`
`),n.default.createElement(s.div,{"data-line":"10",className:"highlight-line","data-highlighted":"true"},`
`),n.default.createElement(s.div,{"data-line":"11",className:"highlight-line","data-highlighted":"true"},"    ",n.default.createElement(s.span,{className:"token keyword"},"this"),n.default.createElement(s.span,{className:"token punctuation"},"."),n.default.createElement(s.span,{className:"token property-access"},"isShowing")," ",n.default.createElement(s.span,{className:"token operator"},"=")," ",n.default.createElement(s.span,{className:"token operator"},"!"),n.default.createElement(s.span,{className:"token keyword"},"this"),n.default.createElement(s.span,{className:"token punctuation"},"."),n.default.createElement(s.span,{className:"token property-access"},"isShowing"),`
`),n.default.createElement(s.div,{"data-line":"12",className:"highlight-line","data-highlighted":"true"},"  ",n.default.createElement(s.span,{className:"token punctuation"},"}"),`
`),n.default.createElement(s.div,{"data-line":"13",className:"highlight-line","data-highlighted":"true"},`
`),n.default.createElement(s.div,{"data-line":"14",className:"highlight-line","data-highlighted":"true"},"  ",n.default.createElement(s.span,{className:"token function"},"render"),n.default.createElement(s.span,{className:"token punctuation"},"("),n.default.createElement(s.span,{className:"token punctuation"},")")," ",n.default.createElement(s.span,{className:"token punctuation"},"{"),`
`),n.default.createElement(s.div,{"data-line":"15",className:"highlight-line","data-highlighted":"true"},"    ",n.default.createElement(s.span,{className:"token keyword control-flow"},"return")," ",n.default.createElement(s.span,{className:"token punctuation"},"("),`
`),n.default.createElement(s.div,{"data-line":"16",className:"highlight-line","data-highlighted":"true"},"      ",n.default.createElement(s.span,{className:"token tag"},n.default.createElement(s.span,{className:"token tag"},n.default.createElement(s.span,{className:"token punctuation"},"<")),n.default.createElement(s.span,{className:"token punctuation"},">")),n.default.createElement(s.span,{className:"token plain-text"}),`
`),n.default.createElement(s.div,{"data-line":"17",className:"highlight-line","data-highlighted":"true"},n.default.createElement(s.span,{className:"token plain-text"},"        "),n.default.createElement(s.span,{className:"token tag"},n.default.createElement(s.span,{className:"token tag"},n.default.createElement(s.span,{className:"token punctuation"},"<"),"button")," ",n.default.createElement(s.span,{className:"token attr-name"},"onClick"),n.default.createElement(s.span,{className:"token script language-javascript"},n.default.createElement(s.span,{className:"token script-punctuation punctuation"},"="),n.default.createElement(s.span,{className:"token punctuation"},"{"),n.default.createElement(s.span,{className:"token keyword"},"this"),n.default.createElement(s.span,{className:"token punctuation"},"."),n.default.createElement(s.span,{className:"token property-access"},"toggle"),n.default.createElement(s.span,{className:"token punctuation"},"}")),n.default.createElement(s.span,{className:"token punctuation"},">")),n.default.createElement(s.span,{className:"token plain-text"},"click"),n.default.createElement(s.span,{className:"token tag"},n.default.createElement(s.span,{className:"token tag"},n.default.createElement(s.span,{className:"token punctuation"},"</"),"button"),n.default.createElement(s.span,{className:"token punctuation"},">")),n.default.createElement(s.span,{className:"token plain-text"}),`
`),n.default.createElement(s.div,{"data-line":"18",className:"highlight-line","data-highlighted":"true"},n.default.createElement(s.span,{className:"token plain-text"},"        "),n.default.createElement(s.span,{className:"token tag"},n.default.createElement(s.span,{className:"token tag"},n.default.createElement(s.span,{className:"token punctuation"},"<"),"animated.div")," ",n.default.createElement(s.span,{className:"token attr-name"},"style"),n.default.createElement(s.span,{className:"token script language-javascript"},n.default.createElement(s.span,{className:"token script-punctuation punctuation"},"="),n.default.createElement(s.span,{className:"token punctuation"},"{"),n.default.createElement(s.span,{className:"token keyword"},"this"),n.default.createElement(s.span,{className:"token punctuation"},"."),n.default.createElement(s.span,{className:"token property-access"},"animations"),n.default.createElement(s.span,{className:"token punctuation"},"."),n.default.createElement(s.span,{className:"token property-access"},"springs"),n.default.createElement(s.span,{className:"token punctuation"},"}")),n.default.createElement(s.span,{className:"token punctuation"},">")),n.default.createElement(s.span,{className:"token plain-text"},"I will fade"),n.default.createElement(s.span,{className:"token tag"},n.default.createElement(s.span,{className:"token tag"},n.default.createElement(s.span,{className:"token punctuation"},"</"),"animated.div"),n.default.createElement(s.span,{className:"token punctuation"},">")),n.default.createElement(s.span,{className:"token plain-text"}),`
`),n.default.createElement(s.div,{"data-line":"19",className:"highlight-line","data-highlighted":"true"},n.default.createElement(s.span,{className:"token plain-text"},"      "),n.default.createElement(s.span,{className:"token tag"},n.default.createElement(s.span,{className:"token tag"},n.default.createElement(s.span,{className:"token punctuation"},"</")),n.default.createElement(s.span,{className:"token punctuation"},">")),`
`),n.default.createElement(s.div,{"data-line":"20",className:"highlight-line","data-highlighted":"true"},"    ",n.default.createElement(s.span,{className:"token punctuation"},")"),`
`),n.default.createElement(s.div,{"data-line":"21",className:"highlight-line","data-highlighted":"true"},"  ",n.default.createElement(s.span,{className:"token punctuation"},"}"),`
`),n.default.createElement(s.div,{"data-line":"22",className:"highlight-line","data-highlighted":"true"},n.default.createElement(s.span,{className:"token punctuation"},"}"),`
`))),`
`,n.default.createElement(s.h3,{id:"constructor-arguments"},n.default.createElement(s.a,{href:"#constructor-arguments"},"Constructor Arguments")),`
`,n.default.createElement(s.p,null,"Below is the arguments that can passed to the constructor of the ",n.default.createElement(s.code,null,"Controller")," class."),`
`,n.default.createElement(s.pre,null,n.default.createElement(s.code,{className:"language-ts"},n.default.createElement(s.div,{"data-line":"1",className:"highlight-line","data-highlighted":"true"},n.default.createElement(s.span,{className:"token keyword"},"const")," ",n.default.createElement(s.span,{className:"token maybe-class-name"},"ControllerProps")," ",n.default.createElement(s.span,{className:"token operator"},"=")," ",n.default.createElement(s.span,{className:"token punctuation"},"{"),`
`),n.default.createElement(s.div,{"data-line":"2",className:"highlight-line","data-highlighted":"true"},"  ref",n.default.createElement(s.span,{className:"token punctuation"},","),`
`),n.default.createElement(s.div,{"data-line":"3",className:"highlight-line","data-highlighted":"true"},"  ",n.default.createElement(s.span,{className:"token keyword module"},"from"),n.default.createElement(s.span,{className:"token punctuation"},","),`
`),n.default.createElement(s.div,{"data-line":"4",className:"highlight-line","data-highlighted":"true"},"  loop",n.default.createElement(s.span,{className:"token punctuation"},","),`
`),n.default.createElement(s.div,{"data-line":"5",className:"highlight-line","data-highlighted":"true"},"  onStart",n.default.createElement(s.span,{className:"token punctuation"},","),`
`),n.default.createElement(s.div,{"data-line":"6",className:"highlight-line","data-highlighted":"true"},"  onRest",n.default.createElement(s.span,{className:"token punctuation"},","),`
`),n.default.createElement(s.div,{"data-line":"7",className:"highlight-line","data-highlighted":"true"},"  onChange",n.default.createElement(s.span,{className:"token punctuation"},","),`
`),n.default.createElement(s.div,{"data-line":"8",className:"highlight-line","data-highlighted":"true"},"  onPause",n.default.createElement(s.span,{className:"token punctuation"},","),`
`),n.default.createElement(s.div,{"data-line":"9",className:"highlight-line","data-highlighted":"true"},"  onResume",n.default.createElement(s.span,{className:"token punctuation"},","),`
`),n.default.createElement(s.div,{"data-line":"10",className:"highlight-line","data-highlighted":"true"},"  onProps",n.default.createElement(s.span,{className:"token punctuation"},","),`
`),n.default.createElement(s.div,{"data-line":"11",className:"highlight-line","data-highlighted":"true"},"  onResolve",n.default.createElement(s.span,{className:"token punctuation"},","),`
`),n.default.createElement(s.div,{"data-line":"12",className:"highlight-line","data-highlighted":"true"},n.default.createElement(s.span,{className:"token punctuation"},"}"),`
`))),`
`,n.default.createElement(s.h2,{id:"properties"},n.default.createElement(s.a,{href:"#properties"},"Properties")),`
`,`
`,n.default.createElement(i,{data:t}),`
`,n.default.createElement(s.h2,{id:"methods"},n.default.createElement(s.a,{href:"#methods"},"Methods")),`
`,n.default.createElement(s.h3,{id:"get"},n.default.createElement(s.a,{href:"#get"},"Get")),`
`,n.default.createElement(s.p,null,"Gets the current values of our springs."),`
`,n.default.createElement(s.pre,null,n.default.createElement(s.code,{className:"language-ts"},n.default.createElement(s.div,{"data-line":"1",className:"highlight-line","data-highlighted":"true"},n.default.createElement(s.span,{className:"token function"},"get"),n.default.createElement(s.span,{className:"token punctuation"},"("),n.default.createElement(s.span,{className:"token punctuation"},")"),n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token maybe-class-name"},"State")," ",n.default.createElement(s.span,{className:"token operator"},"&")," ",n.default.createElement(s.span,{className:"token maybe-class-name"},"UnknownProps"),n.default.createElement(s.span,{className:"token punctuation"},";"),`
`))),`
`,n.default.createElement(s.h3,{id:"set"},n.default.createElement(s.a,{href:"#set"},"Set")),`
`,n.default.createElement(s.p,null,"Set the current values without animating."),`
`,n.default.createElement(s.pre,null,n.default.createElement(s.code,{className:"language-ts"},n.default.createElement(s.div,{"data-line":"1",className:"highlight-line","data-highlighted":"true"},n.default.createElement(s.span,{className:"token function"},"set"),n.default.createElement(s.span,{className:"token punctuation"},"("),"values",n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token maybe-class-name"},"Partial"),n.default.createElement(s.span,{className:"token operator"},"<"),n.default.createElement(s.span,{className:"token maybe-class-name"},"State"),n.default.createElement(s.span,{className:"token operator"},">"),n.default.createElement(s.span,{className:"token punctuation"},")"),n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token keyword"},"void"),n.default.createElement(s.span,{className:"token punctuation"},";"),`
`))),`
`,n.default.createElement(s.h3,{id:"update"},n.default.createElement(s.a,{href:"#update"},"Update")),`
`,n.default.createElement(s.p,null,"Push an update onto the queue of each value."),`
`,n.default.createElement(s.pre,null,n.default.createElement(s.code,{className:"language-ts"},n.default.createElement(s.div,{"data-line":"1",className:"highlight-line","data-highlighted":"true"},n.default.createElement(s.span,{className:"token function"},"update"),n.default.createElement(s.span,{className:"token punctuation"},"("),"props",n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token maybe-class-name"},"ControllerUpdate"),n.default.createElement(s.span,{className:"token operator"},"<"),n.default.createElement(s.span,{className:"token maybe-class-name"},"State"),n.default.createElement(s.span,{className:"token operator"},">")," ",n.default.createElement(s.span,{className:"token operator"},"|")," ",n.default.createElement(s.span,{className:"token maybe-class-name"},"Falsy"),n.default.createElement(s.span,{className:"token punctuation"},")"),n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token keyword"},"this"),n.default.createElement(s.span,{className:"token punctuation"},";"),`
`))),`
`,n.default.createElement(s.h3,{id:"start"},n.default.createElement(s.a,{href:"#start"},"Start")),`
`,n.default.createElement(s.p,null,`Start the queued animations for every spring, and resolve the returned promise once all queued
animations have finished or been cancelled. When you pass a queue (instead of nothing), that
queue is used instead of the queued animations added with the `,n.default.createElement(s.code,null,"update")," method, which are left alone."),`
`,n.default.createElement(s.pre,null,n.default.createElement(s.code,{className:"language-ts"},n.default.createElement(s.div,{"data-line":"1",className:"highlight-line","data-highlighted":"true"},n.default.createElement(s.span,{className:"token function"},"start"),n.default.createElement(s.span,{className:"token punctuation"},"("),"props",n.default.createElement(s.span,{className:"token operator"},"?"),n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token maybe-class-name"},"OneOrMore"),n.default.createElement(s.span,{className:"token operator"},"<"),n.default.createElement(s.span,{className:"token maybe-class-name"},"ControllerUpdate"),n.default.createElement(s.span,{className:"token operator"},"<"),n.default.createElement(s.span,{className:"token maybe-class-name"},"State"),n.default.createElement(s.span,{className:"token operator"},">>")," ",n.default.createElement(s.span,{className:"token operator"},"|")," ",n.default.createElement(s.span,{className:"token keyword null nil"},"null"),n.default.createElement(s.span,{className:"token punctuation"},")"),n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token maybe-class-name"},"AsyncResult"),n.default.createElement(s.span,{className:"token operator"},"<"),n.default.createElement(s.span,{className:"token keyword"},"this"),n.default.createElement(s.span,{className:"token operator"},">"),n.default.createElement(s.span,{className:"token punctuation"},";"),`
`))),`
`,n.default.createElement(s.h3,{id:"stop"},n.default.createElement(s.a,{href:"#stop"},"Stop")),`
`,n.default.createElement(s.p,null,`Stop all queued animations for every spring at the same time, or alternatively provide a selection
of keys that should be stopped.`),`
`,n.default.createElement(s.pre,null,n.default.createElement(s.code,{className:"language-ts"},n.default.createElement(s.div,{"data-line":"1",className:"highlight-line","data-highlighted":"true"},n.default.createElement(s.span,{className:"token function"},"stop"),n.default.createElement(s.span,{className:"token punctuation"},"("),n.default.createElement(s.span,{className:"token punctuation"},")"),n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token keyword"},"this"),n.default.createElement(s.span,{className:"token punctuation"},";"),`
`),n.default.createElement(s.div,{"data-line":"2",className:"highlight-line","data-highlighted":"true"},n.default.createElement(s.span,{className:"token function"},"stop"),n.default.createElement(s.span,{className:"token punctuation"},"("),"keys",n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token maybe-class-name"},"OneOrMore"),n.default.createElement(s.span,{className:"token operator"},"<"),n.default.createElement(s.span,{className:"token builtin"},"string"),n.default.createElement(s.span,{className:"token operator"},">"),n.default.createElement(s.span,{className:"token punctuation"},")"),n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token keyword"},"this"),n.default.createElement(s.span,{className:"token punctuation"},";"),`
`),n.default.createElement(s.div,{"data-line":"3",className:"highlight-line","data-highlighted":"true"},n.default.createElement(s.span,{className:"token function"},"stop"),n.default.createElement(s.span,{className:"token punctuation"},"("),"cancel",n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token builtin"},"boolean"),n.default.createElement(s.span,{className:"token punctuation"},")"),n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token keyword"},"this"),n.default.createElement(s.span,{className:"token punctuation"},";"),`
`),n.default.createElement(s.div,{"data-line":"4",className:"highlight-line","data-highlighted":"true"},n.default.createElement(s.span,{className:"token function"},"stop"),n.default.createElement(s.span,{className:"token punctuation"},"("),"cancel",n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token builtin"},"boolean"),n.default.createElement(s.span,{className:"token punctuation"},",")," keys",n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token maybe-class-name"},"OneOrMore"),n.default.createElement(s.span,{className:"token operator"},"<"),n.default.createElement(s.span,{className:"token builtin"},"string"),n.default.createElement(s.span,{className:"token operator"},">"),n.default.createElement(s.span,{className:"token punctuation"},")"),n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token keyword"},"this"),n.default.createElement(s.span,{className:"token punctuation"},";"),`
`),n.default.createElement(s.div,{"data-line":"5",className:"highlight-line","data-highlighted":"true"},n.default.createElement(s.span,{className:"token function"},"stop"),n.default.createElement(s.span,{className:"token punctuation"},"("),"keys",n.default.createElement(s.span,{className:"token operator"},"?"),n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token maybe-class-name"},"OneOrMore"),n.default.createElement(s.span,{className:"token operator"},"<"),n.default.createElement(s.span,{className:"token builtin"},"string"),n.default.createElement(s.span,{className:"token operator"},">"),n.default.createElement(s.span,{className:"token punctuation"},")"),n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token keyword"},"this"),n.default.createElement(s.span,{className:"token punctuation"},";"),`
`),n.default.createElement(s.div,{"data-line":"6",className:"highlight-line","data-highlighted":"true"},n.default.createElement(s.span,{className:"token function"},"stop"),n.default.createElement(s.span,{className:"token punctuation"},"("),"cancel",n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token builtin"},"boolean"),n.default.createElement(s.span,{className:"token punctuation"},",")," keys",n.default.createElement(s.span,{className:"token operator"},"?"),n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token maybe-class-name"},"OneOrMore"),n.default.createElement(s.span,{className:"token operator"},"<"),n.default.createElement(s.span,{className:"token builtin"},"string"),n.default.createElement(s.span,{className:"token operator"},">"),n.default.createElement(s.span,{className:"token punctuation"},")"),n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token keyword"},"this"),n.default.createElement(s.span,{className:"token punctuation"},";"),`
`))),`
`,n.default.createElement(s.h3,{id:"pause"},n.default.createElement(s.a,{href:"#pause"},"Pause")),`
`,n.default.createElement(s.p,null,"Freeze the active animation in time."),`
`,n.default.createElement(s.pre,null,n.default.createElement(s.code,{className:"language-ts"},n.default.createElement(s.div,{"data-line":"1",className:"highlight-line","data-highlighted":"true"},n.default.createElement(s.span,{className:"token function"},"pause"),n.default.createElement(s.span,{className:"token punctuation"},"("),"keys",n.default.createElement(s.span,{className:"token operator"},"?"),n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token maybe-class-name"},"OneOrMore"),n.default.createElement(s.span,{className:"token operator"},"<"),n.default.createElement(s.span,{className:"token builtin"},"string"),n.default.createElement(s.span,{className:"token operator"},">"),n.default.createElement(s.span,{className:"token punctuation"},")"),n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token keyword"},"this"),n.default.createElement(s.span,{className:"token punctuation"},";"),`
`))),`
`,n.default.createElement(s.h3,{id:"resume"},n.default.createElement(s.a,{href:"#resume"},"Resume")),`
`,n.default.createElement(s.p,null,"Resume the animation if paused."),`
`,n.default.createElement(s.pre,null,n.default.createElement(s.code,{className:"language-ts"},n.default.createElement(s.div,{"data-line":"1",className:"highlight-line","data-highlighted":"true"},n.default.createElement(s.span,{className:"token function"},"resume"),n.default.createElement(s.span,{className:"token punctuation"},"("),"keys",n.default.createElement(s.span,{className:"token operator"},"?"),n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token maybe-class-name"},"OneOrMore"),n.default.createElement(s.span,{className:"token operator"},"<"),n.default.createElement(s.span,{className:"token builtin"},"string"),n.default.createElement(s.span,{className:"token operator"},">"),n.default.createElement(s.span,{className:"token punctuation"},")"),n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token keyword"},"this"),n.default.createElement(s.span,{className:"token punctuation"},";"),`
`))),`
`,n.default.createElement(s.h3,{id:"each"},n.default.createElement(s.a,{href:"#each"},"Each")),`
`,n.default.createElement(s.p,null,"Call a function once per spring value."),`
`,n.default.createElement(s.pre,null,n.default.createElement(s.code,{className:"language-ts"},n.default.createElement(s.div,{"data-line":"1",className:"highlight-line","data-highlighted":"true"},n.default.createElement(s.span,{className:"token function"},"each"),n.default.createElement(s.span,{className:"token punctuation"},"("),n.default.createElement(s.span,{className:"token function-variable function"},"iterator"),n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token punctuation"},"("),"spring",n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token maybe-class-name"},"SpringValue"),n.default.createElement(s.span,{className:"token punctuation"},",")," key",n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token builtin"},"string"),n.default.createElement(s.span,{className:"token punctuation"},")")," ",n.default.createElement(s.span,{className:"token arrow operator"},"=>")," ",n.default.createElement(s.span,{className:"token keyword"},"void"),n.default.createElement(s.span,{className:"token punctuation"},")"),n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token keyword"},"void"),`
`))));return e?n.default.createElement(e,{...a},p):p}var _=r;var g=typeof o<"u"&&o.headers,u=typeof o<"u"&&o.meta,d=typeof o<"u"&&o.handle;export{_ as default,d as handle,u as meta};