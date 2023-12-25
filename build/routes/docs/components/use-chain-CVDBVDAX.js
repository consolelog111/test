import{a as m}from"/build/_shared/chunk-7QSVQE2F.js";import"/build/_shared/chunk-TXRHUVLQ.js";import"/build/_shared/chunk-LO53UBCC.js";import"/build/_shared/chunk-M63GRH3S.js";import"/build/_shared/chunk-5J7FL2HD.js";import"/build/_shared/chunk-RP4TNHQF.js";import"/build/_shared/chunk-PFVXHB5S.js";import"/build/_shared/chunk-KUOAIDDK.js";import"/build/_shared/chunk-YTOSUJX3.js";import"/build/_shared/chunk-3FN6QERY.js";import"/build/_shared/chunk-JBFIX7QL.js";import{a as t}from"/build/_shared/chunk-QFJ5IYWW.js";import{a as l}from"/build/_shared/chunk-CQXTAVIO.js";import{c as i}from"/build/_shared/chunk-Q3IECNXJ.js";var n=i(l());var o={meta:{title:"useChain | React Spring","og:title":"useChain | React Spring","twitter:title":"useChain | React Spring",description:"API documentation for the useChain hook in React Spring.","og:description":"API documentation for the useChain hook in React Spring.","twitter:description":"API documentation for the useChain hook in React Spring.","og:url":"https://www.react-spring.dev/docs/components/use-chain","twitter:url":"https://www.react-spring.dev/docs/components/use-chain"},sidebar_position:5};function c(a={}){let s=Object.assign({h1:"h1",a:"a",p:"p",code:"code",em:"em",h2:"h2",pre:"pre",div:"div",span:"span"},t(),a.components),{wrapper:e}=s,p=n.default.createElement(n.default.Fragment,null,n.default.createElement(s.h1,{id:"usechain"},n.default.createElement(s.a,{href:"#usechain"},"useChain")),`
`,n.default.createElement(s.p,null,n.default.createElement(s.code,null,"useChain"),` is used to orchestrate animation hooks in sequence with one another.
This is best used when you specifically want to orchestrate different types of
animation hook e.g. `,n.default.createElement(s.a,{href:"/docs/components/use-spring"},n.default.createElement(s.code,null,"useSpring"))," & ",n.default.createElement(s.a,{href:"/docs/components/use-transition"},n.default.createElement(s.code,null,"useTransition")),`
in sequence as opposed to multiple `,n.default.createElement(s.code,null,"useSpring")," hooks where you ",n.default.createElement(s.em,null,"could"),` either use
`,n.default.createElement(s.a,{href:"/docs/components/use-springs"},n.default.createElement(s.code,null,"useSprings"))," or create an ",n.default.createElement(s.a,{href:"/docs/advanced/async-animations"},"async animation"),"."),`
`,n.default.createElement(s.h2,{id:"usage"},n.default.createElement(s.a,{href:"#usage"},"Usage")),`
`,n.default.createElement(s.p,null,"This will first run the ",n.default.createElement(s.code,null,"useSpring")," hook and then the ",n.default.createElement(s.code,null,"useTransition")," hook when the component has mounted and the ",n.default.createElement(s.code,null,"useSpring")," has come to rest."),`
`,n.default.createElement(s.pre,{lines:"1-2,6,8,13,15,21"},n.default.createElement(s.code,{className:"language-jsx",lines:"1-2,6,8,13,15,21"},n.default.createElement(s.div,{"data-line":"1",className:"highlight-line","data-highlighted":"true"},n.default.createElement(s.span,{className:"token keyword module"},"import")," ",n.default.createElement(s.span,{className:"token imports"},n.default.createElement(s.span,{className:"token punctuation"},"{"),`
  useTransition`,n.default.createElement(s.span,{className:"token punctuation"},","),`
  useSpring`,n.default.createElement(s.span,{className:"token punctuation"},","),`
  useChain`,n.default.createElement(s.span,{className:"token punctuation"},","),`
  animated`,n.default.createElement(s.span,{className:"token punctuation"},","),`
  useSpringRef`,n.default.createElement(s.span,{className:"token punctuation"},","),`
`,n.default.createElement(s.span,{className:"token punctuation"},"}"))," ",n.default.createElement(s.span,{className:"token keyword module"},"from")," ",n.default.createElement(s.span,{className:"token string"},"'@react-spring/web'"),`
`),n.default.createElement(s.div,{"data-line":"2",className:"highlight-line","data-highlighted":"true"},`
`),n.default.createElement(s.div,{"data-line":"3",className:"highlight-line","data-highlighted":"false"},n.default.createElement(s.span,{className:"token keyword"},"const")," data ",n.default.createElement(s.span,{className:"token operator"},"=")," ",n.default.createElement(s.span,{className:"token punctuation"},"["),n.default.createElement(s.span,{className:"token string"},"'hi'"),n.default.createElement(s.span,{className:"token punctuation"},",")," ",n.default.createElement(s.span,{className:"token string"},"'there!'"),n.default.createElement(s.span,{className:"token punctuation"},"]"),`
`),n.default.createElement(s.div,{"data-line":"4",className:"highlight-line","data-highlighted":"false"},`
`),n.default.createElement(s.div,{"data-line":"5",className:"highlight-line","data-highlighted":"false"},n.default.createElement(s.span,{className:"token keyword"},"function")," ",n.default.createElement(s.span,{className:"token function"},n.default.createElement(s.span,{className:"token maybe-class-name"},"MyComponent")),n.default.createElement(s.span,{className:"token punctuation"},"("),n.default.createElement(s.span,{className:"token punctuation"},")")," ",n.default.createElement(s.span,{className:"token punctuation"},"{"),`
`),n.default.createElement(s.div,{"data-line":"6",className:"highlight-line","data-highlighted":"true"},"  ",n.default.createElement(s.span,{className:"token keyword"},"const")," springRef ",n.default.createElement(s.span,{className:"token operator"},"=")," ",n.default.createElement(s.span,{className:"token function"},"useSpringRef"),n.default.createElement(s.span,{className:"token punctuation"},"("),n.default.createElement(s.span,{className:"token punctuation"},")"),`
`),n.default.createElement(s.div,{"data-line":"7",className:"highlight-line","data-highlighted":"false"},"  ",n.default.createElement(s.span,{className:"token keyword"},"const")," springs ",n.default.createElement(s.span,{className:"token operator"},"=")," ",n.default.createElement(s.span,{className:"token function"},"useSpring"),n.default.createElement(s.span,{className:"token punctuation"},"("),n.default.createElement(s.span,{className:"token punctuation"},"{"),`
`),n.default.createElement(s.div,{"data-line":"8",className:"highlight-line","data-highlighted":"true"},"    ",n.default.createElement(s.span,{className:"token literal-property property"},"ref"),n.default.createElement(s.span,{className:"token operator"},":")," springRef",n.default.createElement(s.span,{className:"token punctuation"},","),`
`),n.default.createElement(s.div,{"data-line":"9",className:"highlight-line","data-highlighted":"false"},"    ",n.default.createElement(s.span,{className:"token keyword module"},"from"),n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token punctuation"},"{")," ",n.default.createElement(s.span,{className:"token literal-property property"},"size"),n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token string"},"'20%'")," ",n.default.createElement(s.span,{className:"token punctuation"},"}"),n.default.createElement(s.span,{className:"token punctuation"},","),`
`),n.default.createElement(s.div,{"data-line":"10",className:"highlight-line","data-highlighted":"false"},"    ",n.default.createElement(s.span,{className:"token literal-property property"},"to"),n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token punctuation"},"{")," ",n.default.createElement(s.span,{className:"token literal-property property"},"size"),n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token string"},"'50%'")," ",n.default.createElement(s.span,{className:"token punctuation"},"}"),n.default.createElement(s.span,{className:"token punctuation"},","),`
`),n.default.createElement(s.div,{"data-line":"11",className:"highlight-line","data-highlighted":"false"},"  ",n.default.createElement(s.span,{className:"token punctuation"},"}"),n.default.createElement(s.span,{className:"token punctuation"},")"),`
`),n.default.createElement(s.div,{"data-line":"12",className:"highlight-line","data-highlighted":"false"},`
`),n.default.createElement(s.div,{"data-line":"13",className:"highlight-line","data-highlighted":"true"},"  ",n.default.createElement(s.span,{className:"token keyword"},"const")," transRef ",n.default.createElement(s.span,{className:"token operator"},"=")," ",n.default.createElement(s.span,{className:"token function"},"useSpringRef"),n.default.createElement(s.span,{className:"token punctuation"},"("),n.default.createElement(s.span,{className:"token punctuation"},")"),`
`),n.default.createElement(s.div,{"data-line":"14",className:"highlight-line","data-highlighted":"false"},"  ",n.default.createElement(s.span,{className:"token keyword"},"const")," transitions ",n.default.createElement(s.span,{className:"token operator"},"=")," ",n.default.createElement(s.span,{className:"token function"},"useTransition"),n.default.createElement(s.span,{className:"token punctuation"},"("),"data",n.default.createElement(s.span,{className:"token punctuation"},",")," ",n.default.createElement(s.span,{className:"token punctuation"},"{"),`
`),n.default.createElement(s.div,{"data-line":"15",className:"highlight-line","data-highlighted":"true"},"    ",n.default.createElement(s.span,{className:"token literal-property property"},"ref"),n.default.createElement(s.span,{className:"token operator"},":")," transRef",n.default.createElement(s.span,{className:"token punctuation"},","),`
`),n.default.createElement(s.div,{"data-line":"16",className:"highlight-line","data-highlighted":"false"},"    ",n.default.createElement(s.span,{className:"token keyword module"},"from"),n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token punctuation"},"{")," ",n.default.createElement(s.span,{className:"token literal-property property"},"scale"),n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token number"},"0")," ",n.default.createElement(s.span,{className:"token punctuation"},"}"),n.default.createElement(s.span,{className:"token punctuation"},","),`
`),n.default.createElement(s.div,{"data-line":"17",className:"highlight-line","data-highlighted":"false"},"    ",n.default.createElement(s.span,{className:"token literal-property property"},"enter"),n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token punctuation"},"{")," ",n.default.createElement(s.span,{className:"token literal-property property"},"scale"),n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token number"},"1")," ",n.default.createElement(s.span,{className:"token punctuation"},"}"),n.default.createElement(s.span,{className:"token punctuation"},","),`
`),n.default.createElement(s.div,{"data-line":"18",className:"highlight-line","data-highlighted":"false"},"    ",n.default.createElement(s.span,{className:"token literal-property property"},"leave"),n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token punctuation"},"{")," ",n.default.createElement(s.span,{className:"token literal-property property"},"scale"),n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token number"},"0")," ",n.default.createElement(s.span,{className:"token punctuation"},"}"),n.default.createElement(s.span,{className:"token punctuation"},","),`
`),n.default.createElement(s.div,{"data-line":"19",className:"highlight-line","data-highlighted":"false"},"  ",n.default.createElement(s.span,{className:"token punctuation"},"}"),n.default.createElement(s.span,{className:"token punctuation"},")"),`
`),n.default.createElement(s.div,{"data-line":"20",className:"highlight-line","data-highlighted":"false"},`
`),n.default.createElement(s.div,{"data-line":"21",className:"highlight-line","data-highlighted":"true"},"  ",n.default.createElement(s.span,{className:"token function"},"useChain"),n.default.createElement(s.span,{className:"token punctuation"},"("),n.default.createElement(s.span,{className:"token punctuation"},"["),"springRef",n.default.createElement(s.span,{className:"token punctuation"},",")," transRef",n.default.createElement(s.span,{className:"token punctuation"},"]"),n.default.createElement(s.span,{className:"token punctuation"},")"),`
`),n.default.createElement(s.div,{"data-line":"22",className:"highlight-line","data-highlighted":"false"},`
`),n.default.createElement(s.div,{"data-line":"23",className:"highlight-line","data-highlighted":"false"},"  ",n.default.createElement(s.span,{className:"token keyword control-flow"},"return")," ",n.default.createElement(s.span,{className:"token punctuation"},"("),`
`),n.default.createElement(s.div,{"data-line":"24",className:"highlight-line","data-highlighted":"false"},"    ",n.default.createElement(s.span,{className:"token tag"},n.default.createElement(s.span,{className:"token tag"},n.default.createElement(s.span,{className:"token punctuation"},"<"),"animated.div"),`
      `,n.default.createElement(s.span,{className:"token attr-name"},"style"),n.default.createElement(s.span,{className:"token script language-javascript"},n.default.createElement(s.span,{className:"token script-punctuation punctuation"},"="),n.default.createElement(s.span,{className:"token punctuation"},"{"),n.default.createElement(s.span,{className:"token punctuation"},"{"),`
        `,n.default.createElement(s.span,{className:"token literal-property property"},"height"),n.default.createElement(s.span,{className:"token operator"},":")," springs",n.default.createElement(s.span,{className:"token punctuation"},"."),n.default.createElement(s.span,{className:"token property-access"},"size"),n.default.createElement(s.span,{className:"token punctuation"},","),`
        `,n.default.createElement(s.span,{className:"token literal-property property"},"width"),n.default.createElement(s.span,{className:"token operator"},":")," springs",n.default.createElement(s.span,{className:"token punctuation"},"."),n.default.createElement(s.span,{className:"token property-access"},"size"),n.default.createElement(s.span,{className:"token punctuation"},","),`
        `,n.default.createElement(s.span,{className:"token literal-property property"},"background"),n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token string"},"'blue'"),n.default.createElement(s.span,{className:"token punctuation"},","),`
      `,n.default.createElement(s.span,{className:"token punctuation"},"}"),n.default.createElement(s.span,{className:"token punctuation"},"}")),n.default.createElement(s.span,{className:"token punctuation"},">")),n.default.createElement(s.span,{className:"token plain-text"}),`
`),n.default.createElement(s.div,{"data-line":"25",className:"highlight-line","data-highlighted":"false"},n.default.createElement(s.span,{className:"token plain-text"},"      "),n.default.createElement(s.span,{className:"token punctuation"},"{"),n.default.createElement(s.span,{className:"token function"},"transitions"),n.default.createElement(s.span,{className:"token punctuation"},"("),n.default.createElement(s.span,{className:"token punctuation"},"("),n.default.createElement(s.span,{className:"token parameter"},"style",n.default.createElement(s.span,{className:"token punctuation"},",")," item"),n.default.createElement(s.span,{className:"token punctuation"},")")," ",n.default.createElement(s.span,{className:"token arrow operator"},"=>")," ",n.default.createElement(s.span,{className:"token punctuation"},"("),`
`),n.default.createElement(s.div,{"data-line":"26",className:"highlight-line","data-highlighted":"false"},"        ",n.default.createElement(s.span,{className:"token tag"},n.default.createElement(s.span,{className:"token tag"},n.default.createElement(s.span,{className:"token punctuation"},"<"),"animated.div"),`
          `,n.default.createElement(s.span,{className:"token attr-name"},"style"),n.default.createElement(s.span,{className:"token script language-javascript"},n.default.createElement(s.span,{className:"token script-punctuation punctuation"},"="),n.default.createElement(s.span,{className:"token punctuation"},"{"),n.default.createElement(s.span,{className:"token punctuation"},"{"),`
            `,n.default.createElement(s.span,{className:"token literal-property property"},"width"),n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token string"},"'120px'"),n.default.createElement(s.span,{className:"token punctuation"},","),`
            `,n.default.createElement(s.span,{className:"token literal-property property"},"height"),n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token string"},"'120px'"),n.default.createElement(s.span,{className:"token punctuation"},","),`
            `,n.default.createElement(s.span,{className:"token literal-property property"},"background"),n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token string"},"'green'"),n.default.createElement(s.span,{className:"token punctuation"},","),`
            `,n.default.createElement(s.span,{className:"token spread operator"},"..."),"style",n.default.createElement(s.span,{className:"token punctuation"},","),`
          `,n.default.createElement(s.span,{className:"token punctuation"},"}"),n.default.createElement(s.span,{className:"token punctuation"},"}")),n.default.createElement(s.span,{className:"token punctuation"},">")),n.default.createElement(s.span,{className:"token plain-text"}),`
`),n.default.createElement(s.div,{"data-line":"27",className:"highlight-line","data-highlighted":"false"},n.default.createElement(s.span,{className:"token plain-text"},"          "),n.default.createElement(s.span,{className:"token punctuation"},"{"),"item",n.default.createElement(s.span,{className:"token punctuation"},"}"),n.default.createElement(s.span,{className:"token plain-text"}),`
`),n.default.createElement(s.div,{"data-line":"28",className:"highlight-line","data-highlighted":"false"},n.default.createElement(s.span,{className:"token plain-text"},"        "),n.default.createElement(s.span,{className:"token tag"},n.default.createElement(s.span,{className:"token tag"},n.default.createElement(s.span,{className:"token punctuation"},"</"),"animated.div"),n.default.createElement(s.span,{className:"token punctuation"},">")),`
`),n.default.createElement(s.div,{"data-line":"29",className:"highlight-line","data-highlighted":"false"},"      ",n.default.createElement(s.span,{className:"token punctuation"},")"),n.default.createElement(s.span,{className:"token punctuation"},")"),n.default.createElement(s.span,{className:"token punctuation"},"}"),n.default.createElement(s.span,{className:"token plain-text"}),`
`),n.default.createElement(s.div,{"data-line":"30",className:"highlight-line","data-highlighted":"false"},n.default.createElement(s.span,{className:"token plain-text"},"    "),n.default.createElement(s.span,{className:"token tag"},n.default.createElement(s.span,{className:"token tag"},n.default.createElement(s.span,{className:"token punctuation"},"</"),"animated.div"),n.default.createElement(s.span,{className:"token punctuation"},">")),`
`),n.default.createElement(s.div,{"data-line":"31",className:"highlight-line","data-highlighted":"false"},"  ",n.default.createElement(s.span,{className:"token punctuation"},")"),`
`),n.default.createElement(s.div,{"data-line":"32",className:"highlight-line","data-highlighted":"false"},n.default.createElement(s.span,{className:"token punctuation"},"}"),`
`))),`
`,n.default.createElement(s.h2,{id:"timesteps-explained"},n.default.createElement(s.a,{href:"#timesteps-explained"},"Timesteps Explained")),`
`,n.default.createElement(s.p,null,"Using the previous as an example we can see that the transition is ran ",n.default.createElement(s.em,null,"after")," the ",n.default.createElement(s.code,null,"useSpring"),`
hook has come to rest. This is the default behaviour of the `,n.default.createElement(s.code,null,"useChain")," hook."),`
`,n.default.createElement(s.p,null,`However, they may be some instances where you want to define how long before the next spring
is triggered. That's where timesteps come in.`),`
`,n.default.createElement(s.p,null,"Take this usage of ",n.default.createElement(s.code,null,"useChain"),":"),`
`,n.default.createElement(s.pre,null,n.default.createElement(s.code,{className:"language-jsx"},n.default.createElement(s.div,{"data-line":"1",className:"highlight-line","data-highlighted":"true"},n.default.createElement(s.span,{className:"token function"},"useChain"),n.default.createElement(s.span,{className:"token punctuation"},"("),n.default.createElement(s.span,{className:"token punctuation"},"["),"springRef",n.default.createElement(s.span,{className:"token punctuation"},",")," transRef",n.default.createElement(s.span,{className:"token punctuation"},"]"),n.default.createElement(s.span,{className:"token punctuation"},",")," ",n.default.createElement(s.span,{className:"token punctuation"},"["),n.default.createElement(s.span,{className:"token number"},"0"),n.default.createElement(s.span,{className:"token punctuation"},",")," ",n.default.createElement(s.span,{className:"token number"},"1"),n.default.createElement(s.span,{className:"token punctuation"},"]"),n.default.createElement(s.span,{className:"token punctuation"},",")," ",n.default.createElement(s.span,{className:"token number"},"1000"),n.default.createElement(s.span,{className:"token punctuation"},")"),`
`))),`
`,n.default.createElement(s.p,null,`We've added two additional arguments to the hooks, the first is a number array of timesteps
(numbers must be in the range 0-1) that should model to the index of your `,n.default.createElement(s.code,null,"SpringRef"),`s and
the second is a the timeframe (defaulting to 1000ms).`),`
`,n.default.createElement(s.p,null,`The way to think about the timesteps & timeframe is that the timestep of the hooks,
multiplied by the timeframe is the delay you apply to your animations:`),`
`,n.default.createElement(s.pre,null,n.default.createElement(s.code,{className:"language-jsx"},n.default.createElement(s.div,{"data-line":"1",className:"highlight-line","data-highlighted":"true"},n.default.createElement(s.span,{className:"token keyword"},"const")," refs ",n.default.createElement(s.span,{className:"token operator"},"=")," ",n.default.createElement(s.span,{className:"token punctuation"},"["),"springRef",n.default.createElement(s.span,{className:"token punctuation"},",")," transRef",n.default.createElement(s.span,{className:"token punctuation"},"]"),`
`),n.default.createElement(s.div,{"data-line":"2",className:"highlight-line","data-highlighted":"true"},n.default.createElement(s.span,{className:"token keyword"},"const")," timesteps ",n.default.createElement(s.span,{className:"token operator"},"=")," ",n.default.createElement(s.span,{className:"token punctuation"},"["),n.default.createElement(s.span,{className:"token number"},"0"),n.default.createElement(s.span,{className:"token punctuation"},",")," ",n.default.createElement(s.span,{className:"token number"},"1"),n.default.createElement(s.span,{className:"token punctuation"},"]"),`
`),n.default.createElement(s.div,{"data-line":"3",className:"highlight-line","data-highlighted":"true"},n.default.createElement(s.span,{className:"token keyword"},"const")," timeframe ",n.default.createElement(s.span,{className:"token operator"},"=")," ",n.default.createElement(s.span,{className:"token number"},"1000"),`
`),n.default.createElement(s.div,{"data-line":"4",className:"highlight-line","data-highlighted":"true"},`
`),n.default.createElement(s.div,{"data-line":"5",className:"highlight-line","data-highlighted":"true"},"refs",n.default.createElement(s.span,{className:"token punctuation"},"."),n.default.createElement(s.span,{className:"token method function property-access"},"forEach"),n.default.createElement(s.span,{className:"token punctuation"},"("),n.default.createElement(s.span,{className:"token punctuation"},"("),n.default.createElement(s.span,{className:"token parameter"},"ref",n.default.createElement(s.span,{className:"token punctuation"},",")," index"),n.default.createElement(s.span,{className:"token punctuation"},")")," ",n.default.createElement(s.span,{className:"token arrow operator"},"=>")," ",n.default.createElement(s.span,{className:"token punctuation"},"{"),`
`),n.default.createElement(s.div,{"data-line":"6",className:"highlight-line","data-highlighted":"true"},"  ",n.default.createElement(s.span,{className:"token comment"},"/**"),`
`),n.default.createElement(s.div,{"data-line":"7",className:"highlight-line","data-highlighted":"true"},n.default.createElement(s.span,{className:"token comment"},"   * for the first ref this would be 0 because 0 * 1000 = 0"),`
`),n.default.createElement(s.div,{"data-line":"8",className:"highlight-line","data-highlighted":"true"},n.default.createElement(s.span,{className:"token comment"},"   * for the second ref this would be 1000 because 1 * 1000 = 1000"),`
`),n.default.createElement(s.div,{"data-line":"9",className:"highlight-line","data-highlighted":"true"},n.default.createElement(s.span,{className:"token comment"},"   */"),`
`),n.default.createElement(s.div,{"data-line":"10",className:"highlight-line","data-highlighted":"true"},"  ",n.default.createElement(s.span,{className:"token keyword"},"const")," time ",n.default.createElement(s.span,{className:"token operator"},"=")," timesteps",n.default.createElement(s.span,{className:"token punctuation"},"["),"index",n.default.createElement(s.span,{className:"token punctuation"},"]")," ",n.default.createElement(s.span,{className:"token operator"},"*"),` timeframe
`),n.default.createElement(s.div,{"data-line":"11",className:"highlight-line","data-highlighted":"true"},`
`),n.default.createElement(s.div,{"data-line":"12",className:"highlight-line","data-highlighted":"true"},"  ",n.default.createElement(s.span,{className:"token comment"},"// the delay is then applied to the animation."),`
`),n.default.createElement(s.div,{"data-line":"13",className:"highlight-line","data-highlighted":"true"},"  ref",n.default.createElement(s.span,{className:"token punctuation"},"."),n.default.createElement(s.span,{className:"token property-access"},"delay")," ",n.default.createElement(s.span,{className:"token operator"},"="),` time
`),n.default.createElement(s.div,{"data-line":"14",className:"highlight-line","data-highlighted":"true"},n.default.createElement(s.span,{className:"token punctuation"},"}"),n.default.createElement(s.span,{className:"token punctuation"},")"),`
`))),`
`,n.default.createElement(s.p,null,"So therefore ",n.default.createElement(s.em,null,"if")," you wanted your transition to come in after 400ms you could do this:"),`
`,n.default.createElement(s.pre,null,n.default.createElement(s.code,{className:"language-tsx"},n.default.createElement(s.div,{"data-line":"1",className:"highlight-line","data-highlighted":"true"},n.default.createElement(s.span,{className:"token function"},"useChain"),n.default.createElement(s.span,{className:"token punctuation"},"("),n.default.createElement(s.span,{className:"token punctuation"},"["),"springRef",n.default.createElement(s.span,{className:"token punctuation"},",")," transRef",n.default.createElement(s.span,{className:"token punctuation"},"]"),n.default.createElement(s.span,{className:"token punctuation"},",")," ",n.default.createElement(s.span,{className:"token punctuation"},"["),n.default.createElement(s.span,{className:"token number"},"0"),n.default.createElement(s.span,{className:"token punctuation"},",")," ",n.default.createElement(s.span,{className:"token number"},"0.4"),n.default.createElement(s.span,{className:"token punctuation"},"]"),n.default.createElement(s.span,{className:"token punctuation"},")"),`
`))),`
`,n.default.createElement(s.p,null,"Note, we omitted the ",n.default.createElement(s.code,null,"timeframe")," argument here because it has a default of ",n.default.createElement(s.code,null,"1000"),"."),`
`,n.default.createElement(s.h2,{id:"reference"},n.default.createElement(s.a,{href:"#reference"},"Reference")),`
`,n.default.createElement(s.p,null,"This hook does not have a configuration object or take additional props."),`
`,n.default.createElement(s.h2,{id:"typescript"},n.default.createElement(s.a,{href:"#typescript"},"Typescript")),`
`,n.default.createElement(s.pre,null,n.default.createElement(s.code,{className:"language-tsx"},n.default.createElement(s.div,{"data-line":"1",className:"highlight-line","data-highlighted":"true"},n.default.createElement(s.span,{className:"token keyword"},"function")," ",n.default.createElement(s.span,{className:"token function"},"useChain"),n.default.createElement(s.span,{className:"token punctuation"},"("),"refs",n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token maybe-class-name"},"ReadonlyArray"),n.default.createElement(s.span,{className:"token operator"},"<"),n.default.createElement(s.span,{className:"token maybe-class-name"},"SpringRef"),n.default.createElement(s.span,{className:"token operator"},">"),n.default.createElement(s.span,{className:"token punctuation"},")"),n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token keyword"},"void"),`
`),n.default.createElement(s.div,{"data-line":"2",className:"highlight-line","data-highlighted":"true"},`
`),n.default.createElement(s.div,{"data-line":"3",className:"highlight-line","data-highlighted":"true"},n.default.createElement(s.span,{className:"token keyword"},"function")," ",n.default.createElement(s.span,{className:"token function"},"useChain"),n.default.createElement(s.span,{className:"token punctuation"},"("),"refs",n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token maybe-class-name"},"ReadonlyArray"),n.default.createElement(s.span,{className:"token operator"},"<"),n.default.createElement(s.span,{className:"token maybe-class-name"},"SpringRef"),n.default.createElement(s.span,{className:"token operator"},">"),n.default.createElement(s.span,{className:"token punctuation"},",")," timeSteps",n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token builtin"},"number"),n.default.createElement(s.span,{className:"token punctuation"},"["),n.default.createElement(s.span,{className:"token punctuation"},"]"),n.default.createElement(s.span,{className:"token punctuation"},")"),n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token keyword"},"void"),`
`),n.default.createElement(s.div,{"data-line":"4",className:"highlight-line","data-highlighted":"true"},`
`),n.default.createElement(s.div,{"data-line":"5",className:"highlight-line","data-highlighted":"true"},n.default.createElement(s.span,{className:"token keyword"},"function")," ",n.default.createElement(s.span,{className:"token function"},"useChain"),n.default.createElement(s.span,{className:"token punctuation"},"("),`
`),n.default.createElement(s.div,{"data-line":"6",className:"highlight-line","data-highlighted":"true"},"  refs",n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token maybe-class-name"},"ReadonlyArray"),n.default.createElement(s.span,{className:"token operator"},"<"),n.default.createElement(s.span,{className:"token maybe-class-name"},"SpringRef"),n.default.createElement(s.span,{className:"token operator"},">"),n.default.createElement(s.span,{className:"token punctuation"},","),`
`),n.default.createElement(s.div,{"data-line":"7",className:"highlight-line","data-highlighted":"true"},"  timeSteps",n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token builtin"},"number"),n.default.createElement(s.span,{className:"token punctuation"},"["),n.default.createElement(s.span,{className:"token punctuation"},"]"),n.default.createElement(s.span,{className:"token punctuation"},","),`
`),n.default.createElement(s.div,{"data-line":"8",className:"highlight-line","data-highlighted":"true"},"  timeFrame",n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token builtin"},"number"),`
`),n.default.createElement(s.div,{"data-line":"9",className:"highlight-line","data-highlighted":"true"},n.default.createElement(s.span,{className:"token punctuation"},")"),n.default.createElement(s.span,{className:"token operator"},":")," ",n.default.createElement(s.span,{className:"token keyword"},"void"),`
`))),`
`,n.default.createElement(s.h2,{id:"examples"},n.default.createElement(s.a,{href:"#examples"},"Examples")),`
`,`
`,n.default.createElement(m,{sandboxTitles:["Chaining Transition and a Spring","Smile Grid"]}),`
`,n.default.createElement(s.p,null,"Can't find what you're looking for? Check out all our ",n.default.createElement(s.a,{href:"/examples"},"examples!")));return e?n.default.createElement(e,{...a},p):p}var h=c;var N=typeof o<"u"&&o.headers,r=typeof o<"u"&&o.meta,d=typeof o<"u"&&o.handle;export{h as default,d as handle,r as meta};