import{e as l,h as s,t as c}from"/build/_shared/chunk-KUOAIDDK.js";import{a as r}from"/build/_shared/chunk-JBFIX7QL.js";import{c as i}from"/build/_shared/chunk-Q3IECNXJ.js";var e=i(r()),b=[{text:"Holy smokes. I don't think animation can get any easier in React now with React Spring. Wrapping Reach UI (https://reach.tech/ui) in your own brand and feel is going to be so easy.",name:"Ryan Florence",img:"ryan_florence.jpeg",handle:"@ryanflorence",tweetUrl:"https://twitter.com/ryanflorence/status/1033962041298509824",job:"Remix Co-founder"},{text:"Big fan of React Spring!",name:"Ives van Hoorne",img:"ives_van_hoorne.jpeg",handle:"@CompuIves",tweetUrl:"https://twitter.com/CompuIves/status/1033964001246543872",job:"Creator of Codesandbox"},{text:"react-spring is insane. I haven't done a lot of animations but it's the first React library I come across that does it the correct way: not using setState to change styles but bypass React.",name:"Alexander Prinzhorn",img:"alexander_prinzhorn.jpeg",handle:"@Prinzhorn",tweetUrl:"https://twitter.com/Prinzhorn/status/1007560091430801409",job:"Software Engineer"},{text:"It's fantastic :) In my React Rally talk, I explicitly recommend it over React Motion, and all the demos use it (shout-out to @0xca0a). Will share a link to it once the talk vid is up.",name:"Josh W. Comeau",img:"josh_w._comeau.jpeg",handle:"@JoshWComeau",tweetUrl:"https://twitter.com/JoshWComeau/status/1030826919124590597",job:"Creator of CSS for JavaScript Developers"},{text:"If you like react-motion but feel like your transitions aren\u2019t smooth, it\u2019s because it\u2019s exclusively using React rendering. If you like Popmotion but feel like you are limited by what you can do, it\u2019s because it entirely skips React rendering. react-spring does both, try it \u{1F44C}",name:"Pierre Bertet",img:"pierre_bertet.jpeg",handle:"@bpierre",tweetUrl:"https://twitter.com/bpierre/status/1032284123161931778",job:"Software Engineer"},{text:"react-spring by @0xca0a is a lovely animation library for react",name:"//",img:"no_name.jpeg",handle:"@hshoff",tweetUrl:"https://twitter.com/hshoff/status/983054609353707520",job:"Engineer at Airbnb"},{text:"The animation lib React Spring is so awesome! Great API (first-class support for hooks), performant (doesn't trigger a re-render) and cross-platform (web / react-native / universal). Adding animations makes the app much more fun to use.",name:"bruno lemos",img:"bruno_lemos.jpeg",handle:"@brunolemos",tweetUrl:"https://twitter.com/brunolemos/status/1087456685080358918",job:"Software Engineer"},{text:"this would\u2019ve been impossible without the hard work from everyone at @pmndrs, zustand, r3f, react-spring, and obviously @clementroche_\u2018s incredible talent. but it was no easy task to learn all the tricks we now know.. and thinking about all the stuff we still don\u2019t ",name:"arzafran",img:"arzafran.png",handle:"@arzafran",tweetUrl:"https://twitter.com/arzafran/status/1476169639973560334",job:"Partner at Studio Freight"},{text:"So, it turns out you can mix HTML and WebGL. And with react-spring you can animate both.",name:"Varun Vachhar",img:"varun_vachhar.jpeg",handle:"@winkerVSbecks",tweetUrl:"https://twitter.com/winkerVSbecks/status/1419032183952576515",job:"Software Engineer"},{text:"The game being game, I have a lot of animations. I started using what is proposed by tailwind but it is not good enough for 2020. I ended moving to react spring. The learning curve is steeper than what I had expect. But it's a delightful experience afterwards.",name:"Alex Stanislawski",img:"alex_stanislawski.jpeg",handle:"@bobylito",tweetUrl:"https://twitter.com/bobylito/status/1337144280171819018",job:"Software Engineer"}],m=[{href:"/docs/getting-started",label:"Getting Started",description:"Learn about how use react-spring with step by step explanations"},{href:"/docs/guides",label:"Guides & Tutorials",description:"Read up on step-by-step tutorials for common use cases exploring our different hooks",comingSoon:!0},{href:"/examples",label:"Examples",description:"Be inspired by exploring all our examples, why not contribute your own?"}],f=[{label:"Discord",description:"Ask questions, share tips & tricks",href:"https://discord.gg/AXfNsGx64f",isExternal:!0,Icon:l},{label:"Github",description:"Report issues, submit ideas and contribute",isExternal:!0,href:"https://www.github.com/pmndrs/react-spring",Icon:s},{label:"Twitter",description:"Keep up to date with all things Poimandres",isExternal:!0,href:"https://www.twitter.com/pmndrs",Icon:c}],h=[{label:"react-three-fiber",description:"A React renderer for Three.js",href:"https://www.github.com/pmndrs/react-three-fiber",isExternal:!0,Icon:"\u26A1\uFE0F"},{label:"@use-gesture",description:"Bread n butter utility for component-tied mouse/touch gestures in React and Vanilla Javascript.",href:"https://github.com/pmndrs/use-gesture",isExternal:!0,Icon:"\u{1F919}"},{label:"leva",description:"React-first components GUI",href:"https://www.github.com/pmndrs/leva",isExternal:!0,Icon:"\u{1F30B}"},{label:"zustand",description:"Bear necessities for state management in React",href:"https://www.github.com/pmndrs/zustand",isExternal:!0,Icon:"\u{1F43B}"}],g=[["mass","number","1"],["tension","number","170"],["friction","number","26"],[{label:"bounce",content:(0,e.jsx)("p",{children:"When above zero, the spring will bounce instead of overshooting when exceeding its goal value."})},"number",null],[{label:"clamp",content:(0,e.jsx)("p",{children:"When true, stops the spring once it overshoots its boundaries."})},"boolean","false"],[{label:"precision",content:(0,e.jsxs)("p",{children:['How close to the goal the animated value gets before we consider it to be "done", see ',(0,e.jsx)("a",{href:"#precision",children:"precision"})," pifalls for more information."]})},"number","0.01"],[{label:"round",content:(0,e.jsx)("p",{children:"While animating, round to the nearest multiple of this number. The from and to values are never rounded, as well as any value passed to the set method of an animated value."})},"boolean",null],[{label:"frequency",content:(0,e.jsxs)("p",{children:["The natural frequency (in seconds), which dictates the number of bounces per second when no ",(0,e.jsx)("code",{children:"damping"})," exists. When defined,",(0,e.jsx)("code",{children:"tension"})," is derived from this, and ",(0,e.jsx)("code",{children:"friction"})," ","is derived from ",(0,e.jsx)("code",{children:"tension"})," and ",(0,e.jsx)("code",{children:"damping"}),"."]})},"number",null],[{label:"damping",content:(0,e.jsx)("p",{children:"The damping ratio, which dictates how the spring slows down. Only works when frequency is defined."})},"number","1"],["velocity","number","0"],[{label:"restVelocity",content:(0,e.jsx)("p",{children:'The smallest velocity before the animation is considered to be "not moving". When undefined, precision is used instead.'})},"number",null],["decay",{label:"number | boolean",content:(0,e.jsxs)("p",{children:["If ",(0,e.jsx)("code",{children:"true"}),", default value is ",(0,e.jsx)("code",{children:"0.998"}),"."]})},"false"],[{label:"duration",content:(0,e.jsx)("p",{children:"Switches to duration based animation. Value should be indicated in milliseconds."})},"number",null],["easing",{label:"function",content:(0,e.jsx)("code",{children:"(t: number) => number"})},"t => t"],[{label:"progress",content:(0,e.jsx)("p",{children:"Decides how far into the easing function to start from. The duration itself is unaffected."})},"number","0"]],y=[["easeInBack","easeOutBack","easeInOutBack"],["easeInBounce","easeOutBounce","easeOutBounce"],["easeInCirc","easeOutCirc","easeOutCirc"],["easeInCubic","easeOutCubic","easeOutCubic"],["easeInElastic","easeOutElastic","easeOutElastic"],["easeInExpo","easeOutExpo","easeOutExpo"],["easeInQuad","easeOutQuad","easeOutQuad"],["easeInQuart","easeOutQuart","easeOutQuart"],["easeInQuint","easeOutQuint","easeOutQuint"],["easeInSine","easeOutSine","easeOutSine"]],a=[{label:"events",content:(0,e.jsxs)("p",{children:["This is not a prop but rather a collection, see"," ",(0,e.jsx)("a",{href:"/docs/advanced/events",children:"Events"})," for more information."]})},"function",null],u=[{label:"ref",content:(0,e.jsxs)("p",{children:["Used to access the imperative API. Animations never auto-start when"," ",(0,e.jsx)("code",{children:"ref"})," is defined."]})},"SpringRef",null],o=(0,e.jsxs)("p",{children:["The ",(0,e.jsx)("code",{children:"to"})," prop, is very versatile, for more information checkout out ",(0,e.jsx)("a",{href:"/docs/advanced/async-animations",children:"Async Animations"}),"."]}),d=[["from","object",null],[{label:"to",content:o},{label:"object | object[] | function",content:(0,e.jsx)("code",{children:"(next: (props?: object) => Promise<void>, cancel: () => void) => Promise<void>"})},null],["loop",{label:"boolean | object | function",content:(0,e.jsx)("code",{children:"() => boolean"})},null],[{label:"delay",content:(0,e.jsx)("p",{children:"Delay in ms before the animation starts."})},{label:"number | function",content:(0,e.jsx)("code",{children:"(key: string) => number"})},null],[{label:"immediate",content:(0,e.jsx)("p",{children:"Prevents the animation if true."})},{label:"boolean | function",content:(0,e.jsx)("code",{children:"(key: string) => boolean"})},null],[{label:"reset",content:(0,e.jsx)("p",{children:"Resets the spring so it plays from the start again when true."})},"boolean",null],[{label:"reverse",content:(0,e.jsxs)("p",{children:["Reverse the ",(0,e.jsx)("code",{children:"to"})," and ",(0,e.jsx)("code",{children:"from"})," prop so that"," ",(0,e.jsx)("code",{children:"to"})," is the initial starting state."]})},"boolean",null],[{label:"pause",content:(0,e.jsx)("p",{children:"Pause an animation at it's current point."})},"boolean",null],["cancel",{label:"boolean | string | string[] | function",content:(0,e.jsx)("code",{children:"(key: string) => boolean"})},null],u,[{label:"config",content:(0,e.jsxs)("p",{children:["Spring config (mass / tension etc.), see"," ",(0,e.jsx)("a",{href:"/docs/advanced/config",children:"Config"})," for more information."]})},{label:"object | function",content:(0,e.jsx)("code",{children:"(key: string) => SpringConfig"})},{label:"object",content:(0,e.jsx)("code",{children:"{ mass: 1, tension: 170, friction: 26 }"})}],a],w=[["container","React.MutableRefObject<HTMLElement>",null],...d.filter(t=>{var n;return t[0]!=="from"&&typeof t[0]=="object"&&((n=t[0])==null?void 0:n.label)!=="to"})],v=[["container","React.MutableRefObject<HTMLElement | null | undefined>",null],...d.filter(t=>{var n;return t[0]!=="from"&&typeof t[0]=="object"&&((n=t[0])==null?void 0:n.label)!=="to"})],x=[[{label:"to",content:o},{label:"object | object[] | function",content:(0,e.jsx)("code",{children:"(next: (props?: object) => Promise<void>, cancel: () => void) => Promise<void>"})},null],["loop",{label:"boolean | object | function",content:(0,e.jsx)("code",{children:"() => boolean"})},null],[{label:"delay",content:(0,e.jsx)("p",{children:"Delay in ms before the animation starts."})},{label:"number | function",content:(0,e.jsx)("code",{children:"(key: string) => number"})},null],[{label:"immediate",content:(0,e.jsx)("p",{children:"Prevents the animation if true."})},{label:"boolean | function",content:(0,e.jsx)("code",{children:"(key: string) => boolean"})},null],[{label:"reset",content:(0,e.jsx)("p",{children:"Resets the spring so it plays from the start again when true."})},"boolean",null],[{label:"reverse",content:(0,e.jsxs)("p",{children:["Reverse the ",(0,e.jsx)("code",{children:"to"})," and ",(0,e.jsx)("code",{children:"from"})," prop so that"," ",(0,e.jsx)("code",{children:"to"})," is the initial starting state."]})},"boolean",null],[{label:"pause",content:(0,e.jsx)("p",{children:"Pause an animation at it's current point."})},"boolean",null],["cancel",{label:"boolean | string | string[] | function",content:(0,e.jsx)("code",{children:"(key: string) => boolean"})},null],[{label:"config",content:(0,e.jsxs)("p",{children:["Spring config (mass / tension etc.), see"," ",(0,e.jsx)("a",{href:"/docs/advanced/config",children:"Config"})," for more information."]})},{label:"object | function",content:(0,e.jsx)("code",{children:"(key: string) => SpringConfig"})},{label:"object",content:(0,e.jsx)("code",{children:"{ mass: 1, tension: 170, friction: 26 }"})}],a],I=[["from",{label:"object | function",content:(0,e.jsx)("code",{children:"(item: Item, index: number) => object"})},null],["initial",{label:"object | function",content:(0,e.jsx)("code",{children:"(item: Item, index: number) => object"})},null],[{label:"enter",content:o},{label:"object | object[] | function",content:(0,e.jsx)("code",{children:"(item: Item, index: number) => object | object[] | (next: (props?: object) => Promise<void>, cancel: () => void) => Promise<void>"})},null],[{label:"update",content:o},{label:"object | object[] | function",content:(0,e.jsx)("code",{children:"(item: Item, index: number) => object | object[] | (next: (props?: object) => Promise<void>, cancel: () => void) => Promise<void>"})},null],[{label:"leave",content:o},{label:"object | object[] | function",content:(0,e.jsx)("code",{children:"(item: Item, index: number) => object | object[] | (next: (props?: object) => Promise<void>, cancel: () => void) => Promise<void>"})},null],[{label:"keys",content:(0,e.jsx)("p",{children:"Keys are automatically created so this prop is typically not required"})},{label:"Array<string | number> | function | null",content:(0,e.jsx)("code",{children:"(item: Item) =>  string | number"})},null],["sort",{label:"function",content:(0,e.jsx)("code",{children:"(a: Item, b: Item) => number"})},null],["trail","number","0"],["exitBeforeEnter","boolean","false"],[{label:"expires",content:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("p",{children:["When ",(0,e.jsx)("code",{children:"true"})," or ",(0,e.jsx)("code",{children:"<= 0"}),", each item is unmounted immediately after its `leave` animation is finished."]}),(0,e.jsx)("br",{}),(0,e.jsxs)("p",{children:["When ",(0,e.jsx)("code",{children:"false"}),", items are never unmounted."]}),(0,e.jsx)("br",{}),(0,e.jsxs)("p",{children:["When ",(0,e.jsx)("code",{children:"> 0"}),", this prop is used in a"," ",(0,e.jsx)("code",{children:"setTimeout"})," call that forces a rerender if the component that called ",(0,e.jsx)("code",{children:"useTransition"})," doesn't rerender on its own after an item's ",(0,e.jsx)("code",{children:"leave"})," animation is finished."]})]})},{label:"boolean | number | function",content:(0,e.jsx)("code",{children:"(item: Item) => boolean | number"})},"true"],u,[{label:"config",content:(0,e.jsxs)("p",{children:["Spring config (mass / tension etc.), see"," ",(0,e.jsx)("a",{href:"/docs/advanced/config",children:"Config"})," for more information."]})},{label:"object | function",content:(0,e.jsx)("code",{children:"(item: Item, index: number, state: TransitionPhase) => SpringConfig"})},{label:"object",content:(0,e.jsx)("code",{children:"{ mass: 1, tension: 170, friction: 26 }"})}],a],j=[["animation","Animation","Animation"],[{label:"defaultProps",content:(0,e.jsx)("p",{children:"Some props have customizable default values."})},"SpringConfig","{}"],["goal","any",null],[{label:"hasAnimated",content:(0,e.jsx)("p",{children:"When true, this value has been animated at least once."})},"boolean","false"],[{label:"idle",content:(0,e.jsx)("p",{children:"Equals true when not advancing on each frame."})},"boolean",null],[{label:"isAnimating",content:(0,e.jsx)("p",{children:"When true, this value has been animated at least once."})},"boolean","false"],[{label:"isDelayed",content:(0,e.jsx)("p",{children:"When true the value has delay before it can animate."})},"boolean","false"],[{label:"isPaused",content:(0,e.jsx)("p",{children:"When true, all current and future animations are paused."})},"boolean","false"],[{label:"key",content:(0,e.jsx)("p",{children:"The property name used when `to` or `from` is an object. Useful when debugging too."})},"string | undefined","undefined"],[{label:"queue",content:(0,e.jsx)("p",{children:"The queue of pending props"})},"SpringUpdate[]","[]"],["velocity","number | number[]",null]],S=[[{label:"idle",content:(0,e.jsxs)("p",{children:["The animated values. This is what you pass to your"," ",(0,e.jsx)("code",{children:"animted"})," component."]})},"SpringValues","{}"],["item","any",null],[{label:"queue",content:(0,e.jsxs)("p",{children:["The queue of props passed to the ",(0,e.jsx)("code",{children:"update"})," method."]})},"ControllerQueue","[]"],[{label:"ref",content:(0,e.jsxs)("p",{children:["The injected ref. When defined, render-based updates are pushed onto the ",(0,e.jsx)("code",{children:"queue"})," instead of being auto-started."]})},"SpringRef",null],[{label:"springs",content:(0,e.jsxs)("p",{children:["The animated values. This is what you pass to your"," ",(0,e.jsx)("code",{children:"animted"})," component."]})},"SpringValues","{}"]],C=[["extrapolateLeft",{label:"string",content:(0,e.jsx)("code",{children:'"identity" | "clamp" | "extend"'})},"extend"],["extrapolateRight",{label:"string",content:(0,e.jsx)("code",{children:'"identity" | "clamp" | "extend"'})},"extend"],["extrapolate",{label:"string",content:(0,e.jsx)("code",{children:'"identity" | "clamp" | "extend"'})},"extend"],[{label:"range",content:(0,e.jsx)("p",{children:"Array of input ranges"})},"number[]","[0,1]"],[{label:"output",content:(0,e.jsx)("p",{children:"Array of mapped output ranges"})},"number[]",null],[{label:"map",content:(0,e.jsx)("p",{children:"Value filter applied to input value"})},{label:"function",content:(0,e.jsx)("code",{children:"(value: number) => number"})},"null"]],T=[[{label:"pages",content:(0,e.jsx)("p",{children:"Determines the total space of the inner content where each page takes 100% of the visible container."})},"number",null],[{label:"config",content:(0,e.jsxs)("p",{children:["Spring config (mass / tension etc.), see"," ",(0,e.jsx)("a",{href:"/docs/advanced/config",children:"Config"})," for more information."]})},{label:"object | function",content:(0,e.jsx)("code",{children:"(key: string) => SpringConfig"})},{label:"object",content:(0,e.jsx)("code",{children:"{ mass: 1, tension: 280, friction: 60 }"})}],["enabled","boolean","true"],["horizontal","boolean","false"],["innerStyle","CSSProperties",null]],A=[["horizontal","boolean",null],[{label:"factor",content:(0,e.jsx)("p",{children:"Size of a page, (1=100%, 1.5=1 and 1/2, ...)"})},"number","1"],[{label:"offset",content:(0,e.jsx)("p",{children:"Determines where the layer will be at when scrolled to (0=start, 1=1st page, ...)"})},"number","0"],[{label:"speed",content:(0,e.jsx)("p",{children:"Shifts the layer in accordance to its offset, values can be positive or negative"})},"number","0"],[{label:"sticky",content:(0,e.jsx)("p",{children:"Layer will be sticky between these two offsets, all other props are ignored"})},{label:"StickyConfig",content:(0,e.jsx)("code",{children:"{ start?: number; end?: number } | undefined"})},null]],E=[["amount",'"any" | "all" | number | number[]',"any"],["root","React.MutableRefObject",null],["rootMargin","string",null],["once","boolean","false"],["threshold","number | number[]",null]];export{b as a,m as b,f as c,h as d,g as e,y as f,d as g,w as h,v as i,x as j,I as k,j as l,S as m,C as n,T as o,A as p,E as q};