import{a as l}from"/build/_shared/chunk-7QSVQE2F.js";import{a as i}from"/build/_shared/chunk-46TQ4TVO.js";import"/build/_shared/chunk-TXRHUVLQ.js";import{k as t}from"/build/_shared/chunk-EOZRNUDL.js";import"/build/_shared/chunk-LO53UBCC.js";import"/build/_shared/chunk-2CAKVS4P.js";import"/build/_shared/chunk-U4254SWG.js";import"/build/_shared/chunk-M63GRH3S.js";import"/build/_shared/chunk-5J7FL2HD.js";import"/build/_shared/chunk-RP4TNHQF.js";import"/build/_shared/chunk-PFVXHB5S.js";import"/build/_shared/chunk-LF2RRCOB.js";import"/build/_shared/chunk-LWOBU4ZG.js";import"/build/_shared/chunk-KUOAIDDK.js";import"/build/_shared/chunk-KYDOHSFW.js";import"/build/_shared/chunk-YTOSUJX3.js";import"/build/_shared/chunk-3FN6QERY.js";import"/build/_shared/chunk-JBFIX7QL.js";import{a as m}from"/build/_shared/chunk-QFJ5IYWW.js";import{a as r}from"/build/_shared/chunk-CQXTAVIO.js";import{c}from"/build/_shared/chunk-Q3IECNXJ.js";var n=c(r());var o={meta:{title:"useTransition | React Spring","og:title":"useTransition | React Spring","twitter:title":"useTransition | React Spring",description:"API documentation for the useTransition hook in React Spring.","og:description":"API documentation for the useTransition hook in React Spring.","twitter:description":"API documentation for the useTransition hook in React Spring.","og:url":"https://www.react-spring.dev/docs/components/use-transition","twitter:url":"https://www.react-spring.dev/docs/components/use-transition"},sidebar_position:4};function u(a={}){let s=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",code:"code",h3:"h3",pre:"pre",div:"div",span:"span",ul:"ul",li:"li"},m(),a.components),{wrapper:e}=s,p=n.default.createElement(n.default.Fragment,null,n.default.createElement(s.h1,{id:"usetransition"},n.default.createElement(s.a,{href:"#usetransition"},"useTransition")),`
`,n.default.createElement(s.p,null,`This hook is best suited for animating in & out datasets or items you don't particularly
want to be left in the DOM, e.g. a dialog.`),`
`,n.default.createElement(s.h2,{id:"usage"},n.default.createElement(s.a,{href:"#usage"},"Usage")),`
`,n.default.createElement(s.p,null,n.default.createElement(s.code,null,"useTransition")," depends on an ",n.default.createElement(s.code,null,"array"),` of data. That data can be anything you want, we
use a lot of internals to track each datum including inferring the keys, this is the
first argument. The second is a config object, which is different to
`,n.default.createElement(s.a,{href:"/docs/components/use-spring"},n.default.createElement(s.code,null,"useSpring"))," or ",n.default.createElement(s.a,{href:"/docs/components/use-springs"},n.default.createElement(s.code,null,"useSprings"))," so take note!"),`
`,n.default.createElement(s.h3,{id:"with-a-function--deps"},n.default.createElement(s.a,{href:"#with-a-function--deps"},"With a function & deps")),`
`,n.default.createElement(s.pre,{lines:"1,4-8,10-12"},n.default.createElement(s.code,{className:"language-jsx",lines:"1,4-8,10-12"},n.default.createElement(s.div,{"data-line":"1",className:"highlight-line","data-highlighted":"true"},n.default.createElement(s.span,{className:"token keyword module"},"import")," ",n.default.createElement(s.span,{className:"token imports"},n.default.createElement(s.span,{className:"token punctuation"},"{")," useTransition",n.default.createElement(s.span,{className:"token punctuation"},",")," animated ",n.default.createElement(s.span,{className:"token punctuation"},"}"))," ",n.default.createElement(s.span,{className:"token keyword module"},"from")," ",n.default.createElement(s.span,{className:"token string"},"'@react-spring/web'"),`
`),n.default.createElement(s.div,{"data-line":"2",className:"highlight-line","data-highlighted":"false"},`
`),n.default.createElement(s.div,{"data-line":"3",className:"highlight-line","data-highlighted":"false"},n.default.createElement(s.span,{className:"token keyword"},"function")," ",n.default.createElement(s.span,{className:"token function"},n.default.createElement(s.span,{className:"token maybe-class-name"},"MyComponent")),n.default.createElement(s.span,{className:"token punctuation"},"("),n.default.createElement(s.span,{className:"token parameter"},n.default.createElement(s.span,{className:"token punctuation"},"{")," data ",n.default.createElement(s.span,{className:"token operator"},"=")," ",n.default.createElement(s.span,{className:"token punctuation"},"["),n.default.createElement(s.span,{className:"token number"},"1"),n.default.createElement(s.span,{className:"token punctuation"},",")," ",n.default.createElement(s.span,{className:"token number"},"2"),n.default.createElement(s.span,{className:"token punctuation"},",")," ",n.default.createElement(s.span,{className:"token number"},"3"),n.default.createElement(s.span,{className:"token punctuation"},"]")," ",n.default.createElement(s.span,{className:"token punctuation"},"}")),n.default.createElement(s.span,{className:"token punctuation"},")")," ",n.default.createElement(s.span,{className:"token punctuation"},"{"),`
`),n.default.createElement(s.div,{"data-line":"4",className:"highlight-line","data-highlighted":"true"},"  ",n.default.createElement(s.span,{className:"token keyword"},"const")," ",n.default.createElement(s.span,{className:"token punctuation"},"["),"transitions",n.default.createElement(s.span,{className:"token punctuation"},",")," api",n.default.createElement(s.span,{className:"token punctuation"},"]")," ",n.default.createElement(s.span,{className:"token operator"},"=")," ",n.default.createElement(s.span,{className:"token function"},"useTransition"),n.default.createElement(s.span,{className:"token punctuation"},"("),"data",n.default.createElement(s.span,{className:"token punctuation"},",")," ",n.default.createElement(s.span,{className:"token punctuation"},"("),n.default.createElement(s.span,{className:"token punctuation"},")")," ",n.default.createElement(s.span,{className:"token arrow operator"},"=>")," ",n.default.createElement(s.span,{className:"token punctuation"},"("),n.default.createElement(s.span,{className:"token punctuation"},"{"),`
`),n.default.createElement(s.div,{"data-line":"5",className:"highlight-line","data-highlighted":"true"},"    ",n.default.createElement(s.span,{className:"token keyword module"},"from"),n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token punctuation"},"{")," ",n.default.createElement(s.span,{className:"token literal-property property"},"opacity"),n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token number"},"0")," ",n.default.createElement(s.span,{className:"token punctuation"},"}"),n.default.createElement(s.span,{className:"token punctuation"},","),`
`),n.default.createElement(s.div,{"data-line":"6",className:"highlight-line","data-highlighted":"true"},"    ",n.default.createElement(s.span,{className:"token literal-property property"},"enter"),n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token punctuation"},"{")," ",n.default.createElement(s.span,{className:"token literal-property property"},"opacity"),n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token number"},"1")," ",n.default.createElement(s.span,{className:"token punctuation"},"}"),n.default.createElement(s.span,{className:"token punctuation"},","),`
`),n.default.createElement(s.div,{"data-line":"7",className:"highlight-line","data-highlighted":"true"},"    ",n.default.createElement(s.span,{className:"token literal-property property"},"leave"),n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token punctuation"},"{")," ",n.default.createElement(s.span,{className:"token literal-property property"},"opacity"),n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token number"},"1")," ",n.default.createElement(s.span,{className:"token punctuation"},"}"),n.default.createElement(s.span,{className:"token punctuation"},","),`
`),n.default.createElement(s.div,{"data-line":"8",className:"highlight-line","data-highlighted":"true"},"  ",n.default.createElement(s.span,{className:"token punctuation"},"}"),n.default.createElement(s.span,{className:"token punctuation"},")"),n.default.createElement(s.span,{className:"token punctuation"},")"),`
`),n.default.createElement(s.div,{"data-line":"9",className:"highlight-line","data-highlighted":"false"},`
`),n.default.createElement(s.div,{"data-line":"10",className:"highlight-line","data-highlighted":"true"},"  ",n.default.createElement(s.span,{className:"token keyword control-flow"},"return")," ",n.default.createElement(s.span,{className:"token function"},"transitions"),n.default.createElement(s.span,{className:"token punctuation"},"("),n.default.createElement(s.span,{className:"token punctuation"},"("),n.default.createElement(s.span,{className:"token parameter"},"style",n.default.createElement(s.span,{className:"token punctuation"},",")," item"),n.default.createElement(s.span,{className:"token punctuation"},")")," ",n.default.createElement(s.span,{className:"token arrow operator"},"=>")," ",n.default.createElement(s.span,{className:"token punctuation"},"("),`
`),n.default.createElement(s.div,{"data-line":"11",className:"highlight-line","data-highlighted":"true"},"    ",n.default.createElement(s.span,{className:"token tag"},n.default.createElement(s.span,{className:"token tag"},n.default.createElement(s.span,{className:"token punctuation"},"<"),"animated.div")," ",n.default.createElement(s.span,{className:"token attr-name"},"style"),n.default.createElement(s.span,{className:"token script language-javascript"},n.default.createElement(s.span,{className:"token script-punctuation punctuation"},"="),n.default.createElement(s.span,{className:"token punctuation"},"{"),"style",n.default.createElement(s.span,{className:"token punctuation"},"}")),n.default.createElement(s.span,{className:"token punctuation"},">")),n.default.createElement(s.span,{className:"token punctuation"},"{"),"item",n.default.createElement(s.span,{className:"token punctuation"},"}"),n.default.createElement(s.span,{className:"token tag"},n.default.createElement(s.span,{className:"token tag"},n.default.createElement(s.span,{className:"token punctuation"},"</"),"animated.div"),n.default.createElement(s.span,{className:"token punctuation"},">")),`
`),n.default.createElement(s.div,{"data-line":"12",className:"highlight-line","data-highlighted":"true"},"  ",n.default.createElement(s.span,{className:"token punctuation"},")"),n.default.createElement(s.span,{className:"token punctuation"},")"),`
`),n.default.createElement(s.div,{"data-line":"13",className:"highlight-line","data-highlighted":"false"},n.default.createElement(s.span,{className:"token punctuation"},"}"),`
`))),`
`,n.default.createElement(s.h3,{id:"with-a-config-object"},n.default.createElement(s.a,{href:"#with-a-config-object"},"With a config object")),`
`,n.default.createElement(s.pre,{lines:"1,4-8,10-12"},n.default.createElement(s.code,{className:"language-jsx",lines:"1,4-8,10-12"},n.default.createElement(s.div,{"data-line":"1",className:"highlight-line","data-highlighted":"true"},n.default.createElement(s.span,{className:"token keyword module"},"import")," ",n.default.createElement(s.span,{className:"token imports"},n.default.createElement(s.span,{className:"token punctuation"},"{")," useTransition",n.default.createElement(s.span,{className:"token punctuation"},",")," animated ",n.default.createElement(s.span,{className:"token punctuation"},"}"))," ",n.default.createElement(s.span,{className:"token keyword module"},"from")," ",n.default.createElement(s.span,{className:"token string"},"'@react-spring/web'"),`
`),n.default.createElement(s.div,{"data-line":"2",className:"highlight-line","data-highlighted":"false"},`
`),n.default.createElement(s.div,{"data-line":"3",className:"highlight-line","data-highlighted":"false"},n.default.createElement(s.span,{className:"token keyword"},"function")," ",n.default.createElement(s.span,{className:"token function"},n.default.createElement(s.span,{className:"token maybe-class-name"},"MyComponent")),n.default.createElement(s.span,{className:"token punctuation"},"("),n.default.createElement(s.span,{className:"token parameter"},n.default.createElement(s.span,{className:"token punctuation"},"{")," data ",n.default.createElement(s.span,{className:"token operator"},"=")," ",n.default.createElement(s.span,{className:"token punctuation"},"["),n.default.createElement(s.span,{className:"token number"},"1"),n.default.createElement(s.span,{className:"token punctuation"},",")," ",n.default.createElement(s.span,{className:"token number"},"2"),n.default.createElement(s.span,{className:"token punctuation"},",")," ",n.default.createElement(s.span,{className:"token number"},"3"),n.default.createElement(s.span,{className:"token punctuation"},"]")," ",n.default.createElement(s.span,{className:"token punctuation"},"}")),n.default.createElement(s.span,{className:"token punctuation"},")")," ",n.default.createElement(s.span,{className:"token punctuation"},"{"),`
`),n.default.createElement(s.div,{"data-line":"4",className:"highlight-line","data-highlighted":"true"},"  ",n.default.createElement(s.span,{className:"token keyword"},"const")," transitions ",n.default.createElement(s.span,{className:"token operator"},"=")," ",n.default.createElement(s.span,{className:"token function"},"useTransition"),n.default.createElement(s.span,{className:"token punctuation"},"("),"data",n.default.createElement(s.span,{className:"token punctuation"},",")," ",n.default.createElement(s.span,{className:"token punctuation"},"{"),`
`),n.default.createElement(s.div,{"data-line":"5",className:"highlight-line","data-highlighted":"true"},"    ",n.default.createElement(s.span,{className:"token keyword module"},"from"),n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token punctuation"},"{")," ",n.default.createElement(s.span,{className:"token literal-property property"},"opacity"),n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token number"},"0")," ",n.default.createElement(s.span,{className:"token punctuation"},"}"),n.default.createElement(s.span,{className:"token punctuation"},","),`
`),n.default.createElement(s.div,{"data-line":"6",className:"highlight-line","data-highlighted":"true"},"    ",n.default.createElement(s.span,{className:"token literal-property property"},"enter"),n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token punctuation"},"{")," ",n.default.createElement(s.span,{className:"token literal-property property"},"opacity"),n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token number"},"1")," ",n.default.createElement(s.span,{className:"token punctuation"},"}"),n.default.createElement(s.span,{className:"token punctuation"},","),`
`),n.default.createElement(s.div,{"data-line":"7",className:"highlight-line","data-highlighted":"true"},"    ",n.default.createElement(s.span,{className:"token literal-property property"},"leave"),n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token punctuation"},"{")," ",n.default.createElement(s.span,{className:"token literal-property property"},"opacity"),n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token number"},"1")," ",n.default.createElement(s.span,{className:"token punctuation"},"}"),n.default.createElement(s.span,{className:"token punctuation"},","),`
`),n.default.createElement(s.div,{"data-line":"8",className:"highlight-line","data-highlighted":"true"},"  ",n.default.createElement(s.span,{className:"token punctuation"},"}"),n.default.createElement(s.span,{className:"token punctuation"},")"),`
`),n.default.createElement(s.div,{"data-line":"9",className:"highlight-line","data-highlighted":"false"},`
`),n.default.createElement(s.div,{"data-line":"10",className:"highlight-line","data-highlighted":"true"},"  ",n.default.createElement(s.span,{className:"token keyword control-flow"},"return")," ",n.default.createElement(s.span,{className:"token function"},"transitions"),n.default.createElement(s.span,{className:"token punctuation"},"("),n.default.createElement(s.span,{className:"token punctuation"},"("),n.default.createElement(s.span,{className:"token parameter"},"style",n.default.createElement(s.span,{className:"token punctuation"},",")," item"),n.default.createElement(s.span,{className:"token punctuation"},")")," ",n.default.createElement(s.span,{className:"token arrow operator"},"=>")," ",n.default.createElement(s.span,{className:"token punctuation"},"("),`
`),n.default.createElement(s.div,{"data-line":"11",className:"highlight-line","data-highlighted":"true"},"    ",n.default.createElement(s.span,{className:"token tag"},n.default.createElement(s.span,{className:"token tag"},n.default.createElement(s.span,{className:"token punctuation"},"<"),"animated.div")," ",n.default.createElement(s.span,{className:"token attr-name"},"style"),n.default.createElement(s.span,{className:"token script language-javascript"},n.default.createElement(s.span,{className:"token script-punctuation punctuation"},"="),n.default.createElement(s.span,{className:"token punctuation"},"{"),"style",n.default.createElement(s.span,{className:"token punctuation"},"}")),n.default.createElement(s.span,{className:"token punctuation"},">")),n.default.createElement(s.span,{className:"token punctuation"},"{"),"item",n.default.createElement(s.span,{className:"token punctuation"},"}"),n.default.createElement(s.span,{className:"token tag"},n.default.createElement(s.span,{className:"token tag"},n.default.createElement(s.span,{className:"token punctuation"},"</"),"animated.div"),n.default.createElement(s.span,{className:"token punctuation"},">")),`
`),n.default.createElement(s.div,{"data-line":"12",className:"highlight-line","data-highlighted":"true"},"  ",n.default.createElement(s.span,{className:"token punctuation"},")"),n.default.createElement(s.span,{className:"token punctuation"},")"),`
`),n.default.createElement(s.div,{"data-line":"13",className:"highlight-line","data-highlighted":"false"},n.default.createElement(s.span,{className:"token punctuation"},"}"),`
`))),`
`,n.default.createElement(s.h3,{id:"transition-function"},n.default.createElement(s.a,{href:"#transition-function"},"Transition function")),`
`,n.default.createElement(s.p,null,"The transition function takes a ",n.default.createElement(s.code,null,"render")," function as an argument. This is how we append ",n.default.createElement(s.code,null,"keys"),`.
From the example above you can see we pass a `,n.default.createElement(s.code,null,"style")," argument to the function, this ",n.default.createElement(s.code,null,"style"),` object
relates to the state of the animation, e.g. if the animation is `,n.default.createElement(s.code,null,"ENTERING"),` then the we use the
keys from the `,n.default.createElement(s.code,null,"enter"),` property of of your config object. For a deeper dive into the function
signature see the `,n.default.createElement(s.a,{href:"#typescript"},n.default.createElement(s.code,null,"Typescript"))," section."),`
`,n.default.createElement(s.h2,{id:"reference"},n.default.createElement(s.a,{href:"#reference"},"Reference")),`
`,n.default.createElement(s.p,null,n.default.createElement(s.code,null,"Item"),` is defined a lot below, it's automatically inferred from what you pass as the
content of the array you pass as the first argument to the hook. Therefore, if you
passed `,n.default.createElement(s.code,null,"[1, 2, 3]")," then ",n.default.createElement(s.code,null,"Item")," would be ",n.default.createElement(s.code,null,"number"),"."),`
`,`
`,n.default.createElement(i,{data:t}),`
`,n.default.createElement(s.h2,{id:"typescript"},n.default.createElement(s.a,{href:"#typescript"},"Typescript")),`
`,n.default.createElement(s.pre,null,n.default.createElement(s.code,{className:"language-tsx"},n.default.createElement(s.div,{"data-line":"1",className:"highlight-line","data-highlighted":"true"},n.default.createElement(s.span,{className:"token keyword"},"function")," ",n.default.createElement(s.span,{className:"token generic-function"},n.default.createElement(s.span,{className:"token function"},"useTransition"),n.default.createElement(s.span,{className:"token generic class-name"},n.default.createElement(s.span,{className:"token operator"},"<"),n.default.createElement(s.span,{className:"token maybe-class-name"},"Item")," ",n.default.createElement(s.span,{className:"token keyword"},"extends")," ",n.default.createElement(s.span,{className:"token builtin"},"any"),n.default.createElement(s.span,{className:"token operator"},">"))),n.default.createElement(s.span,{className:"token punctuation"},"("),`
`),n.default.createElement(s.div,{"data-line":"2",className:"highlight-line","data-highlighted":"true"},"  data",n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token maybe-class-name"},"Item"),n.default.createElement(s.span,{className:"token punctuation"},"["),n.default.createElement(s.span,{className:"token punctuation"},"]"),n.default.createElement(s.span,{className:"token punctuation"},","),`
`),n.default.createElement(s.div,{"data-line":"3",className:"highlight-line","data-highlighted":"true"},"  configuration",n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token maybe-class-name"},"ConfigObject"),`
`),n.default.createElement(s.div,{"data-line":"4",className:"highlight-line","data-highlighted":"true"},n.default.createElement(s.span,{className:"token punctuation"},")"),n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token maybe-class-name"},"TransitionFn"),n.default.createElement(s.span,{className:"token operator"},"<"),n.default.createElement(s.span,{className:"token maybe-class-name"},"Item"),n.default.createElement(s.span,{className:"token operator"},">"),`
`),n.default.createElement(s.div,{"data-line":"5",className:"highlight-line","data-highlighted":"true"},`
`),n.default.createElement(s.div,{"data-line":"6",className:"highlight-line","data-highlighted":"true"},n.default.createElement(s.span,{className:"token keyword"},"function")," ",n.default.createElement(s.span,{className:"token generic-function"},n.default.createElement(s.span,{className:"token function"},"useTransition"),n.default.createElement(s.span,{className:"token generic class-name"},n.default.createElement(s.span,{className:"token operator"},"<"),n.default.createElement(s.span,{className:"token maybe-class-name"},"Item")," ",n.default.createElement(s.span,{className:"token keyword"},"extends")," ",n.default.createElement(s.span,{className:"token builtin"},"any"),n.default.createElement(s.span,{className:"token operator"},">"))),n.default.createElement(s.span,{className:"token punctuation"},"("),`
`),n.default.createElement(s.div,{"data-line":"7",className:"highlight-line","data-highlighted":"true"},"  data",n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token maybe-class-name"},"Item"),n.default.createElement(s.span,{className:"token punctuation"},"["),n.default.createElement(s.span,{className:"token punctuation"},"]"),n.default.createElement(s.span,{className:"token punctuation"},","),`
`),n.default.createElement(s.div,{"data-line":"8",className:"highlight-line","data-highlighted":"true"},"  ",n.default.createElement(s.span,{className:"token function-variable function"},"configurationFn"),n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token punctuation"},"("),n.default.createElement(s.span,{className:"token punctuation"},")")," ",n.default.createElement(s.span,{className:"token arrow operator"},"=>")," ",n.default.createElement(s.span,{className:"token maybe-class-name"},"ConfigObject"),`
`),n.default.createElement(s.div,{"data-line":"9",className:"highlight-line","data-highlighted":"true"},"  deps",n.default.createElement(s.span,{className:"token operator"},"?"),n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token builtin"},"any"),n.default.createElement(s.span,{className:"token punctuation"},"["),n.default.createElement(s.span,{className:"token punctuation"},"]"),`
`),n.default.createElement(s.div,{"data-line":"10",className:"highlight-line","data-highlighted":"true"},n.default.createElement(s.span,{className:"token punctuation"},")"),n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token punctuation"},"["),"transition",n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token maybe-class-name"},"TransitionFn"),n.default.createElement(s.span,{className:"token operator"},"<"),n.default.createElement(s.span,{className:"token maybe-class-name"},"Item"),n.default.createElement(s.span,{className:"token operator"},">"),n.default.createElement(s.span,{className:"token punctuation"},",")," api",n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token maybe-class-name"},"SpringRef"),n.default.createElement(s.span,{className:"token punctuation"},"]"),`
`),n.default.createElement(s.div,{"data-line":"11",className:"highlight-line","data-highlighted":"true"},`
`),n.default.createElement(s.div,{"data-line":"12",className:"highlight-line","data-highlighted":"true"},n.default.createElement(s.span,{className:"token keyword"},"type")," ",n.default.createElement(s.span,{className:"token class-name"},n.default.createElement(s.span,{className:"token maybe-class-name"},"TransitionFn"))," ",n.default.createElement(s.span,{className:"token operator"},"=")," ",n.default.createElement(s.span,{className:"token punctuation"},"("),`
`),n.default.createElement(s.div,{"data-line":"13",className:"highlight-line","data-highlighted":"true"},"  style",n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token maybe-class-name"},"SpringValues"),n.default.createElement(s.span,{className:"token punctuation"},","),`
`),n.default.createElement(s.div,{"data-line":"14",className:"highlight-line","data-highlighted":"true"},"  item",n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token maybe-class-name"},"Item"),n.default.createElement(s.span,{className:"token punctuation"},","),`
`),n.default.createElement(s.div,{"data-line":"15",className:"highlight-line","data-highlighted":"true"},"  transitionState",n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token maybe-class-name"},"TransitionState"),n.default.createElement(s.span,{className:"token operator"},"<"),n.default.createElement(s.span,{className:"token maybe-class-name"},"Item"),n.default.createElement(s.span,{className:"token operator"},">"),n.default.createElement(s.span,{className:"token punctuation"},","),`
`),n.default.createElement(s.div,{"data-line":"16",className:"highlight-line","data-highlighted":"true"},"  index",n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token builtin"},"number"),`
`),n.default.createElement(s.div,{"data-line":"17",className:"highlight-line","data-highlighted":"true"},n.default.createElement(s.span,{className:"token punctuation"},")")," ",n.default.createElement(s.span,{className:"token arrow operator"},"=>")," ",n.default.createElement(s.span,{className:"token maybe-class-name"},"ReactNode"),`
`))),`
`,n.default.createElement(s.p,null,"Where ",n.default.createElement(s.code,null,"ConfigObject")," is described ",n.default.createElement(s.a,{href:"#reference"},"above")),`
`,n.default.createElement(s.h3,{id:"ts-glossary"},n.default.createElement(s.a,{href:"#ts-glossary"},"TS Glossary")),`
`,n.default.createElement(s.ul,null,`
`,n.default.createElement(s.li,null,n.default.createElement(s.a,{href:"/docs/typescript#transitionstate"},n.default.createElement(s.code,null,"TransitionState"))),`
`),`
`,n.default.createElement(s.h2,{id:"examples"},n.default.createElement(s.a,{href:"#examples"},"Examples")),`
`,`
`,n.default.createElement(l,{sandboxTitles:["Basic Transition","Chaining Transition and a Spring","Exit Before Enter","Image Fade","List Reordering","Masonry Grid","Multistage Transitions","Notification Hub"]}),`
`,n.default.createElement(s.p,null,"Can't find what you're looking for? Check out all our ",n.default.createElement(s.a,{href:"/examples"},"examples!")));return e?n.default.createElement(e,{...a},p):p}var d=u;var y=typeof o<"u"&&o.headers,_=typeof o<"u"&&o.meta,h=typeof o<"u"&&o.handle;export{d as default,h as handle,_ as meta};
