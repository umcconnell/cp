import{A as $,B as ve,C as P,D as Z,L as we,N as Ce,a as de,c as g,d as X,e as y,f as B,fa as R,i as p,j as Y,ja as Se,k as j,l as G,n as me,o as v,q as W,s as ge,t as be,u as J,x as xe,y as T,z as ye}from"./chunk-HZYIRNLZ.js";var F=class{constructor(e,t,n){this.state=e,this.pos=t,this.explicit=n,this.abortListeners=[]}tokenBefore(e){let t=R(this.state).resolveInner(this.pos,-1);for(;t&&e.indexOf(t.name)<0;)t=t.parent;return t?{from:t.from,to:this.pos,text:this.state.sliceDoc(t.from,this.pos),type:t.type}:null}matchBefore(e){let t=this.state.doc.lineAt(this.pos),n=Math.max(t.from,this.pos-250),o=t.text.slice(n-t.from,this.pos-t.from),s=o.search(ke(e,!1));return s<0?null:{from:n+s,to:this.pos,text:o.slice(s)}}get aborted(){return this.abortListeners==null}addEventListener(e,t){e=="abort"&&this.abortListeners&&this.abortListeners.push(t)}};function Ie(i){let e=Object.keys(i).join(""),t=/\w/.test(e);return t&&(e=e.replace(/\w/g,"")),`[${t?"\\w":""}${e.replace(/[^\w\s]/g,"\\$&")}]`}function Ke(i){let e=Object.create(null),t=Object.create(null);for(let{label:o}of i){e[o[0]]=!0;for(let s=1;s<o.length;s++)t[o[s]]=!0}let n=Ie(e)+Ie(t)+"*$";return[new RegExp("^"+n),new RegExp(n)]}function ze(i){let e=i.map(o=>typeof o=="string"?{label:o}:o),[t,n]=e.every(o=>/^\w+$/.test(o.label))?[/\w*$/,/\w+$/]:Ke(e);return o=>{let s=o.matchBefore(n);return s||o.explicit?{from:s?s.from:o.pos,options:e,validFor:t}:null}}function kt(i,e){return t=>{for(let n=R(t.state).resolveInner(t.pos,-1);n;n=n.parent)if(i.indexOf(n.name)>-1)return null;return e(t)}}var N=class{constructor(e,t,n){this.completion=e,this.source=t,this.match=n}};function I(i){return i.selection.main.head}function ke(i,e){var t;let{source:n}=i,o=e&&n[0]!="^",s=n[n.length-1]!="$";return!o&&!s?i:new RegExp(`${o?"^":""}(?:${n})${s?"$":""}`,(t=i.flags)!==null&&t!==void 0?t:i.ignoreCase?"i":"")}var Qe=me.define();function Xe(i,e,t,n){return Object.assign(Object.assign({},i.changeByRange(o=>{if(o==i.selection.main)return{changes:{from:t,to:n,insert:e},range:p.cursor(t+e.length)};let s=n-t;return!o.empty||s&&i.sliceDoc(o.from-s,o.from)!=i.sliceDoc(t,n)?{range:o}:{changes:{from:o.from-s,to:o.from,insert:e},range:p.cursor(o.from-s+e.length)}})),{userEvent:"input.complete"})}function Be(i,e){let t=e.completion.apply||e.completion.label,n=e.source;typeof t=="string"?i.dispatch(Object.assign(Object.assign({},Xe(i.state,t,n.from,n.to)),{annotations:Qe.of(e.completion)})):t(i,e.completion,n.from,n.to)}var Ae=new WeakMap;function Ye(i){if(!Array.isArray(i))return i;let e=Ae.get(i);return e||Ae.set(i,e=ze(i)),e}var ee=class{constructor(e){this.pattern=e,this.chars=[],this.folded=[],this.any=[],this.precise=[],this.byWord=[];for(let t=0;t<e.length;){let n=g(e,t),o=y(n);this.chars.push(n);let s=e.slice(t,t+o),l=s.toUpperCase();this.folded.push(g(l==s?s.toLowerCase():l,0)),t+=o}this.astral=e.length!=this.chars.length}match(e){if(this.pattern.length==0)return[0];if(e.length<this.pattern.length)return null;let{chars:t,folded:n,any:o,precise:s,byWord:l}=this;if(t.length==1){let h=g(e,0);return h==t[0]?[0,0,y(h)]:h==n[0]?[-200,0,y(h)]:null}let r=e.indexOf(this.pattern);if(r==0)return[0,0,this.pattern.length];let a=t.length,c=0;if(r<0){for(let h=0,z=Math.min(e.length,200);h<z&&c<a;){let E=g(e,h);(E==t[c]||E==n[c])&&(o[c++]=h),h+=y(E)}if(c<a)return null}let f=0,u=0,S=!1,m=0,w=-1,q=-1,qe=/[a-z]/.test(e),K=!0;for(let h=0,z=Math.min(e.length,200),E=0;h<z&&u<a;){let d=g(e,h);r<0&&(f<a&&d==t[f]&&(s[f++]=h),m<a&&(d==t[m]||d==n[m]?(m==0&&(w=h),q=h+1,m++):m=0));let k,Q=d<255?d>=48&&d<=57||d>=97&&d<=122?2:d>=65&&d<=90?1:0:(k=X(d))!=k.toLowerCase()?1:k!=k.toUpperCase()?2:0;(!h||Q==1&&qe||E==0&&Q!=0)&&(t[u]==d||n[u]==d&&(S=!0)?l[u++]=h:l.length&&(K=!1)),E=Q,h+=y(d)}return u==a&&l[0]==0&&K?this.result(-100+(S?-200:0),l,e):m==a&&w==0?[-200-e.length,0,q]:r>-1?[-700-e.length,r,r+this.pattern.length]:m==a?[-900-e.length,w,q]:u==a?this.result(-100+(S?-200:0)+-700+(K?0:-1100),l,e):t.length==2?null:this.result((o[0]?-700:0)+-200+-1100,o,e)}result(e,t,n){let o=[e-n.length],s=1;for(let l of t){let r=l+(this.astral?y(g(n,l)):1);s>1&&o[s-1]==l?o[s-1]=r:(o[s++]=l,o[s++]=r)}return o}},x=Y.define({combine(i){return ge(i,{activateOnTyping:!0,selectOnOpen:!0,override:null,closeOnBlur:!0,maxRenderedOptions:100,defaultKeymap:!0,tooltipClass:()=>"",optionClass:()=>"",aboveCursor:!1,icons:!0,addToOptions:[],compareCompletions:(e,t)=>e.label.localeCompare(t.label),interactionDelay:75},{defaultKeymap:(e,t)=>e&&t,closeOnBlur:(e,t)=>e&&t,icons:(e,t)=>e&&t,tooltipClass:(e,t)=>n=>Ee(e(n),t(n)),optionClass:(e,t)=>n=>Ee(e(n),t(n)),addToOptions:(e,t)=>e.concat(t)})}});function Ee(i,e){return i?e?i+" "+e:i:e}function Ge(i){let e=i.addToOptions.slice();return i.icons&&e.push({render(t){let n=document.createElement("div");return n.classList.add("cm-completionIcon"),t.type&&n.classList.add(...t.type.split(/\s+/g).map(o=>"cm-completionIcon-"+o)),n.setAttribute("aria-hidden","true"),n},position:20}),e.push({render(t,n,o){let s=document.createElement("span");s.className="cm-completionLabel";let{label:l}=t,r=0;for(let a=1;a<o.length;){let c=o[a++],f=o[a++];c>r&&s.appendChild(document.createTextNode(l.slice(r,c)));let u=s.appendChild(document.createElement("span"));u.appendChild(document.createTextNode(l.slice(c,f))),u.className="cm-completionMatchedText",r=f}return r<l.length&&s.appendChild(document.createTextNode(l.slice(r))),s},position:50},{render(t){if(!t.detail)return null;let n=document.createElement("span");return n.className="cm-completionDetail",n.textContent=t.detail,n},position:80}),e.sort((t,n)=>t.position-n.position).map(t=>t.render)}function Pe(i,e,t){if(i<=t)return{from:0,to:i};if(e<0&&(e=0),e<=i>>1){let o=Math.floor(e/t);return{from:o*t,to:(o+1)*t}}let n=Math.floor((i-e)/t);return{from:i-(n+1)*t,to:i-n*t}}var te=class{constructor(e,t){this.view=e,this.stateField=t,this.info=null,this.placeInfo={read:()=>this.measureInfo(),write:r=>this.positionInfo(r),key:this},this.space=null,this.currentClass="";let n=e.state.field(t),{options:o,selected:s}=n.open,l=e.state.facet(x);this.optionContent=Ge(l),this.optionClass=l.optionClass,this.tooltipClass=l.tooltipClass,this.range=Pe(o.length,s,l.maxRenderedOptions),this.dom=document.createElement("div"),this.dom.className="cm-tooltip-autocomplete",this.updateTooltipClass(e.state),this.dom.addEventListener("mousedown",r=>{for(let a=r.target,c;a&&a!=this.dom;a=a.parentNode)if(a.nodeName=="LI"&&(c=/-(\d+)$/.exec(a.id))&&+c[1]<o.length){Be(e,o[+c[1]]),r.preventDefault();return}}),this.list=this.dom.appendChild(this.createListBox(o,n.id,this.range)),this.list.addEventListener("scroll",()=>{this.info&&this.view.requestMeasure(this.placeInfo)})}mount(){this.updateSel()}update(e){var t,n,o;let s=e.state.field(this.stateField),l=e.startState.field(this.stateField);this.updateTooltipClass(e.state),s!=l&&(this.updateSel(),((t=s.open)===null||t===void 0?void 0:t.disabled)!=((n=l.open)===null||n===void 0?void 0:n.disabled)&&this.dom.classList.toggle("cm-tooltip-autocomplete-disabled",!!(!((o=s.open)===null||o===void 0)&&o.disabled)))}updateTooltipClass(e){let t=this.tooltipClass(e);if(t!=this.currentClass){for(let n of this.currentClass.split(" "))n&&this.dom.classList.remove(n);for(let n of t.split(" "))n&&this.dom.classList.add(n);this.currentClass=t}}positioned(e){this.space=e,this.info&&this.view.requestMeasure(this.placeInfo)}updateSel(){let e=this.view.state.field(this.stateField),t=e.open;if((t.selected>-1&&t.selected<this.range.from||t.selected>=this.range.to)&&(this.range=Pe(t.options.length,t.selected,this.view.state.facet(x).maxRenderedOptions),this.list.remove(),this.list=this.dom.appendChild(this.createListBox(t.options,e.id,this.range)),this.list.addEventListener("scroll",()=>{this.info&&this.view.requestMeasure(this.placeInfo)})),this.updateSelectedOption(t.selected)){this.info&&(this.info.remove(),this.info=null);let{completion:n}=t.options[t.selected],{info:o}=n;if(!o)return;let s=typeof o=="string"?document.createTextNode(o):o(n);if(!s)return;"then"in s?s.then(l=>{l&&this.view.state.field(this.stateField,!1)==e&&this.addInfoPane(l)}).catch(l=>$(this.view.state,l,"completion info")):this.addInfoPane(s)}}addInfoPane(e){let t=this.info=document.createElement("div");t.className="cm-tooltip cm-completionInfo",t.appendChild(e),this.dom.appendChild(t),this.view.requestMeasure(this.placeInfo)}updateSelectedOption(e){let t=null;for(let n=this.list.firstChild,o=this.range.from;n;n=n.nextSibling,o++)o==e?n.hasAttribute("aria-selected")||(n.setAttribute("aria-selected","true"),t=n):n.hasAttribute("aria-selected")&&n.removeAttribute("aria-selected");return t&&Ze(this.list,t),t}measureInfo(){let e=this.dom.querySelector("[aria-selected]");if(!e||!this.info)return null;let t=this.dom.getBoundingClientRect(),n=this.info.getBoundingClientRect(),o=e.getBoundingClientRect(),s=this.space;if(!s){let w=this.dom.ownerDocument.defaultView||window;s={left:0,top:0,right:w.innerWidth,bottom:w.innerHeight}}if(o.top>Math.min(s.bottom,t.bottom)-10||o.bottom<Math.max(s.top,t.top)+10)return null;let l=this.view.textDirection==ye.RTL,r=l,a=!1,c,f="",u="",S=t.left-s.left,m=s.right-t.right;if(r&&S<Math.min(n.width,m)?r=!1:!r&&m<Math.min(n.width,S)&&(r=!0),n.width<=(r?S:m))f=Math.max(s.top,Math.min(o.top,s.bottom-n.height))-t.top+"px",c=Math.min(400,r?S:m)+"px";else{a=!0,c=Math.min(400,(l?t.right:s.right-t.left)-30)+"px";let w=s.bottom-t.bottom;w>=n.height||w>t.top?f=o.bottom-t.top+"px":u=t.bottom-o.top+"px"}return{top:f,bottom:u,maxWidth:c,class:a?l?"left-narrow":"right-narrow":r?"left":"right"}}positionInfo(e){this.info&&(e?(this.info.style.top=e.top,this.info.style.bottom=e.bottom,this.info.style.maxWidth=e.maxWidth,this.info.className="cm-tooltip cm-completionInfo cm-completionInfo-"+e.class):this.info.style.top="-1e6px")}createListBox(e,t,n){let o=document.createElement("ul");o.id=t,o.setAttribute("role","listbox"),o.setAttribute("aria-expanded","true"),o.setAttribute("aria-label",this.view.state.phrase("Completions"));for(let s=n.from;s<n.to;s++){let{completion:l,match:r}=e[s],a=o.appendChild(document.createElement("li"));a.id=t+"-"+s,a.setAttribute("role","option");let c=this.optionClass(l);c&&(a.className=c);for(let f of this.optionContent){let u=f(l,this.view.state,r);u&&a.appendChild(u)}}return n.from&&o.classList.add("cm-completionListIncompleteTop"),n.to<e.length&&o.classList.add("cm-completionListIncompleteBottom"),o}};function Je(i){return e=>new te(e,i)}function Ze(i,e){let t=i.getBoundingClientRect(),n=e.getBoundingClientRect();n.top<t.top?i.scrollTop-=t.top-n.top:n.bottom>t.bottom&&(i.scrollTop+=n.bottom-t.bottom)}function Oe(i){return(i.boost||0)*100+(i.apply?10:0)+(i.info?5:0)+(i.type?1:0)}function _e(i,e){let t=[],n=0;for(let r of i)if(r.hasResult())if(r.result.filter===!1){let a=r.result.getMatch;for(let c of r.result.options){let f=[1e9-n++];if(a)for(let u of a(c))f.push(u);t.push(new N(c,r,f))}}else{let a=new ee(e.sliceDoc(r.from,r.to)),c;for(let f of r.result.options)(c=a.match(f.label))&&(f.boost!=null&&(c[0]+=f.boost),t.push(new N(f,r,c)))}let o=[],s=null,l=e.facet(x).compareCompletions;for(let r of t.sort((a,c)=>c.match[0]-a.match[0]||l(a.completion,c.completion)))!s||s.label!=r.completion.label||s.detail!=r.completion.detail||s.type!=null&&r.completion.type!=null&&s.type!=r.completion.type||s.apply!=r.completion.apply?o.push(r):Oe(r.completion)>Oe(s)&&(o[o.length-1]=r),s=r.completion;return o}var ie=class i{constructor(e,t,n,o,s,l){this.options=e,this.attrs=t,this.tooltip=n,this.timestamp=o,this.selected=s,this.disabled=l}setSelected(e,t){return e==this.selected||e>=this.options.length?this:new i(this.options,Te(t,e),this.tooltip,this.timestamp,e,this.disabled)}static build(e,t,n,o,s){let l=_e(e,t);if(!l.length)return o&&e.some(a=>a.state==1)?new i(o.options,o.attrs,o.tooltip,o.timestamp,o.selected,!0):null;let r=t.facet(x).selectOnOpen?0:-1;if(o&&o.selected!=r&&o.selected!=-1){let a=o.options[o.selected].completion;for(let c=0;c<l.length;c++)if(l[c].completion==a){r=c;break}}return new i(l,Te(n,r),{pos:e.reduce((a,c)=>c.hasResult()?Math.min(a,c.from):a,1e8),create:Je(b),above:s.aboveCursor},o?o.timestamp:Date.now(),r,!1)}map(e){return new i(this.options,this.attrs,Object.assign(Object.assign({},this.tooltip),{pos:e.mapPos(this.tooltip.pos)}),this.timestamp,this.selected,this.disabled)}},ne=class i{constructor(e,t,n){this.active=e,this.id=t,this.open=n}static start(){return new i(it,"cm-ac-"+Math.floor(Math.random()*2e6).toString(36),null)}update(e){let{state:t}=e,n=t.facet(x),s=(n.override||t.languageDataAt("autocomplete",I(t)).map(Ye)).map(r=>(this.active.find(c=>c.source==r)||new C(r,this.active.some(c=>c.state!=0)?1:0)).update(e,n));s.length==this.active.length&&s.every((r,a)=>r==this.active[a])&&(s=this.active);let l=this.open;l&&e.docChanged&&(l=l.map(e.changes)),e.selection||s.some(r=>r.hasResult()&&e.changes.touchesRange(r.from,r.to))||!et(s,this.active)?l=ie.build(s,t,this.id,l,n):l&&l.disabled&&!s.some(r=>r.state==1)&&(l=null),!l&&s.every(r=>r.state!=1)&&s.some(r=>r.hasResult())&&(s=s.map(r=>r.hasResult()?new C(r.source,0):r));for(let r of e.effects)r.is(We)&&(l=l&&l.setSelected(r.value,this.id));return s==this.active&&l==this.open?this:new i(s,this.id,l)}get tooltip(){return this.open?this.open.tooltip:null}get attrs(){return this.open?this.open.attrs:tt}};function et(i,e){if(i==e)return!0;for(let t=0,n=0;;){for(;t<i.length&&!i[t].hasResult;)t++;for(;n<e.length&&!e[n].hasResult;)n++;let o=t==i.length,s=n==e.length;if(o||s)return o==s;if(i[t++].result!=e[n++].result)return!1}}var tt={"aria-autocomplete":"list"};function Te(i,e){let t={"aria-autocomplete":"list","aria-haspopup":"listbox","aria-controls":i};return e>-1&&(t["aria-activedescendant"]=i+"-"+e),t}var it=[];function oe(i){return i.isUserEvent("input.type")?"input":i.isUserEvent("delete.backward")?"delete":null}var C=class i{constructor(e,t,n=-1){this.source=e,this.state=t,this.explicitPos=n}hasResult(){return!1}update(e,t){let n=oe(e),o=this;n?o=o.handleUserEvent(e,n,t):e.docChanged?o=o.handleChange(e):e.selection&&o.state!=0&&(o=new i(o.source,0));for(let s of e.effects)if(s.is(fe))o=new i(o.source,1,s.value?I(e.state):-1);else if(s.is(V))o=new i(o.source,0);else if(s.is(je))for(let l of s.value)l.source==o.source&&(o=l);return o}handleUserEvent(e,t,n){return t=="delete"||!n.activateOnTyping?this.map(e.changes):new i(this.source,1)}handleChange(e){return e.changes.touchesRange(I(e.startState))?new i(this.source,0):this.map(e.changes)}map(e){return e.empty||this.explicitPos<0?this:new i(this.source,this.state,e.mapPos(this.explicitPos))}},se=class i extends C{constructor(e,t,n,o,s){super(e,2,t),this.result=n,this.from=o,this.to=s}hasResult(){return!0}handleUserEvent(e,t,n){var o;let s=e.changes.mapPos(this.from),l=e.changes.mapPos(this.to,1),r=I(e.state);if((this.explicitPos<0?r<=s:r<this.from)||r>l||t=="delete"&&I(e.startState)==this.from)return new C(this.source,t=="input"&&n.activateOnTyping?1:0);let a=this.explicitPos<0?-1:e.changes.mapPos(this.explicitPos),c;return nt(this.result.validFor,e.state,s,l)?new i(this.source,a,this.result,s,l):this.result.update&&(c=this.result.update(this.result,s,l,new F(e.state,r,a>=0)))?new i(this.source,a,c,c.from,(o=c.to)!==null&&o!==void 0?o:I(e.state)):new C(this.source,1,a)}handleChange(e){return e.changes.touchesRange(this.from,this.to)?new C(this.source,0):this.map(e.changes)}map(e){return e.empty?this:new i(this.source,this.explicitPos<0?-1:e.mapPos(this.explicitPos),this.result,e.mapPos(this.from),e.mapPos(this.to,1))}};function nt(i,e,t,n){if(!i)return!1;let o=e.sliceDoc(t,n);return typeof i=="function"?i(o,t,n,e):ke(i,!0).test(o)}var fe=v.define(),V=v.define(),je=v.define({map(i,e){return i.map(t=>t.map(e))}}),We=v.define(),b=j.define({create(){return ne.start()},update(i,e){return i.update(e)},provide:i=>[we.from(i,e=>e.tooltip),P.contentAttributes.from(i,e=>e.attrs)]});function U(i,e="option"){return t=>{let n=t.state.field(b,!1);if(!n||!n.open||n.open.disabled||Date.now()-n.open.timestamp<t.state.facet(x).interactionDelay)return!1;let o=1,s;e=="page"&&(s=Ce(t,n.open.tooltip))&&(o=Math.max(2,Math.floor(s.dom.offsetHeight/s.dom.querySelector("li").offsetHeight)-1));let{length:l}=n.open.options,r=n.open.selected>-1?n.open.selected+o*(i?1:-1):i?0:l-1;return r<0?r=e=="page"?0:l-1:r>=l&&(r=e=="page"?l-1:0),t.dispatch({effects:We.of(r)}),!0}}var ot=i=>{let e=i.state.field(b,!1);return i.state.readOnly||!e||!e.open||e.open.selected<0||Date.now()-e.open.timestamp<i.state.facet(x).interactionDelay?!1:(e.open.disabled||Be(i,e.open.options[e.open.selected]),!0)},st=i=>i.state.field(b,!1)?(i.dispatch({effects:fe.of(!0)}),!0):!1,lt=i=>{let e=i.state.field(b,!1);return!e||!e.active.some(t=>t.state!=0)?!1:(i.dispatch({effects:V.of(null)}),!0)},le=class{constructor(e,t){this.active=e,this.context=t,this.time=Date.now(),this.updates=[],this.done=void 0}},Re=50,rt=50,at=1e3,ct=ve.fromClass(class{constructor(i){this.view=i,this.debounceUpdate=-1,this.running=[],this.debounceAccept=-1,this.composing=0;for(let e of i.state.field(b).active)e.state==1&&this.startQuery(e)}update(i){let e=i.state.field(b);if(!i.selectionSet&&!i.docChanged&&i.startState.field(b)==e)return;let t=i.transactions.some(n=>(n.selection||n.docChanged)&&!oe(n));for(let n=0;n<this.running.length;n++){let o=this.running[n];if(t||o.updates.length+i.transactions.length>rt&&Date.now()-o.time>at){for(let s of o.context.abortListeners)try{s()}catch(l){$(this.view.state,l)}o.context.abortListeners=null,this.running.splice(n--,1)}else o.updates.push(...i.transactions)}if(this.debounceUpdate>-1&&clearTimeout(this.debounceUpdate),this.debounceUpdate=e.active.some(n=>n.state==1&&!this.running.some(o=>o.active.source==n.source))?setTimeout(()=>this.startUpdate(),Re):-1,this.composing!=0)for(let n of i.transactions)oe(n)=="input"?this.composing=2:this.composing==2&&n.selection&&(this.composing=3)}startUpdate(){this.debounceUpdate=-1;let{state:i}=this.view,e=i.field(b);for(let t of e.active)t.state==1&&!this.running.some(n=>n.active.source==t.source)&&this.startQuery(t)}startQuery(i){let{state:e}=this.view,t=I(e),n=new F(e,t,i.explicitPos==t),o=new le(i,n);this.running.push(o),Promise.resolve(i.source(n)).then(s=>{o.context.aborted||(o.done=s||null,this.scheduleAccept())},s=>{this.view.dispatch({effects:V.of(null)}),$(this.view.state,s)})}scheduleAccept(){this.running.every(i=>i.done!==void 0)?this.accept():this.debounceAccept<0&&(this.debounceAccept=setTimeout(()=>this.accept(),Re))}accept(){var i;this.debounceAccept>-1&&clearTimeout(this.debounceAccept),this.debounceAccept=-1;let e=[],t=this.view.state.facet(x);for(let n=0;n<this.running.length;n++){let o=this.running[n];if(o.done===void 0)continue;if(this.running.splice(n--,1),o.done){let l=new se(o.active.source,o.active.explicitPos,o.done,o.done.from,(i=o.done.to)!==null&&i!==void 0?i:I(o.updates.length?o.updates[0].startState:this.view.state));for(let r of o.updates)l=l.update(r,t);if(l.hasResult()){e.push(l);continue}}let s=this.view.state.field(b).active.find(l=>l.source==o.active.source);if(s&&s.state==1)if(o.done==null){let l=new C(o.active.source,0);for(let r of o.updates)l=l.update(r,t);l.state!=1&&e.push(l)}else this.startQuery(s)}e.length&&this.view.dispatch({effects:je.of(e)})}},{eventHandlers:{blur(){let i=this.view.state.field(b,!1);i&&i.tooltip&&this.view.state.facet(x).closeOnBlur&&this.view.dispatch({effects:V.of(null)})},compositionstart(){this.composing=1},compositionend(){this.composing==3&&setTimeout(()=>this.view.dispatch({effects:fe.of(!1)}),20),this.composing=0}}}),$e=P.baseTheme({".cm-tooltip.cm-tooltip-autocomplete":{"& > ul":{fontFamily:"monospace",whiteSpace:"nowrap",overflow:"hidden auto",maxWidth_fallback:"700px",maxWidth:"min(700px, 95vw)",minWidth:"250px",maxHeight:"10em",height:"100%",listStyle:"none",margin:0,padding:0,"& > li":{overflowX:"hidden",textOverflow:"ellipsis",cursor:"pointer",padding:"1px 3px",lineHeight:1.2}}},"&light .cm-tooltip-autocomplete ul li[aria-selected]":{background:"#17c",color:"white"},"&light .cm-tooltip-autocomplete-disabled ul li[aria-selected]":{background:"#777"},"&dark .cm-tooltip-autocomplete ul li[aria-selected]":{background:"#347",color:"white"},"&dark .cm-tooltip-autocomplete-disabled ul li[aria-selected]":{background:"#444"},".cm-completionListIncompleteTop:before, .cm-completionListIncompleteBottom:after":{content:'"\xB7\xB7\xB7"',opacity:.5,display:"block",textAlign:"center"},".cm-tooltip.cm-completionInfo":{position:"absolute",padding:"3px 9px",width:"max-content",maxWidth:"400px",boxSizing:"border-box"},".cm-completionInfo.cm-completionInfo-left":{right:"100%"},".cm-completionInfo.cm-completionInfo-right":{left:"100%"},".cm-completionInfo.cm-completionInfo-left-narrow":{right:"30px"},".cm-completionInfo.cm-completionInfo-right-narrow":{left:"30px"},"&light .cm-snippetField":{backgroundColor:"#00000022"},"&dark .cm-snippetField":{backgroundColor:"#ffffff22"},".cm-snippetFieldPosition":{verticalAlign:"text-top",width:0,height:"1.15em",display:"inline-block",margin:"0 -0.7px -.7em",borderLeft:"1.4px dotted #888"},".cm-completionMatchedText":{textDecoration:"underline"},".cm-completionDetail":{marginLeft:"0.5em",fontStyle:"italic"},".cm-completionIcon":{fontSize:"90%",width:".8em",display:"inline-block",textAlign:"center",paddingRight:".6em",opacity:"0.6",boxSizing:"content-box"},".cm-completionIcon-function, .cm-completionIcon-method":{"&:after":{content:"'\u0192'"}},".cm-completionIcon-class":{"&:after":{content:"'\u25CB'"}},".cm-completionIcon-interface":{"&:after":{content:"'\u25CC'"}},".cm-completionIcon-variable":{"&:after":{content:"'\u{1D465}'"}},".cm-completionIcon-constant":{"&:after":{content:"'\u{1D436}'"}},".cm-completionIcon-type":{"&:after":{content:"'\u{1D461}'"}},".cm-completionIcon-enum":{"&:after":{content:"'\u222A'"}},".cm-completionIcon-property":{"&:after":{content:"'\u25A1'"}},".cm-completionIcon-keyword":{"&:after":{content:"'\u{1F511}\uFE0E'"}},".cm-completionIcon-namespace":{"&:after":{content:"'\u25A2'"}},".cm-completionIcon-text":{"&:after":{content:"'abc'",fontSize:"50%",verticalAlign:"middle"}}}),re=class{constructor(e,t,n,o){this.field=e,this.line=t,this.from=n,this.to=o}},ae=class i{constructor(e,t,n){this.field=e,this.from=t,this.to=n}map(e){let t=e.mapPos(this.from,-1,B.TrackDel),n=e.mapPos(this.to,1,B.TrackDel);return t==null||n==null?null:new i(this.field,t,n)}},ce=class i{constructor(e,t){this.lines=e,this.fieldPositions=t}instantiate(e,t){let n=[],o=[t],s=e.doc.lineAt(t),l=/^\s*/.exec(s.text)[0];for(let a of this.lines){if(n.length){let c=l,f=/^\t*/.exec(a)[0].length;for(let u=0;u<f;u++)c+=e.facet(Se);o.push(t+c.length-f),a=c+a.slice(f)}n.push(a),t+=a.length+1}let r=this.fieldPositions.map(a=>new ae(a.field,o[a.line]+a.from,o[a.line]+a.to));return{text:n,ranges:r}}static parse(e){let t=[],n=[],o=[],s;for(let l of e.split(/\r\n?|\n/)){for(;s=/[#$]\{(?:(\d+)(?::([^}]*))?|([^}]*))\}/.exec(l);){let r=s[1]?+s[1]:null,a=s[2]||s[3]||"",c=-1;for(let f=0;f<t.length;f++)(r!=null?t[f].seq==r:a&&t[f].name==a)&&(c=f);if(c<0){let f=0;for(;f<t.length&&(r==null||t[f].seq!=null&&t[f].seq<r);)f++;t.splice(f,0,{seq:r,name:a}),c=f;for(let u of o)u.field>=c&&u.field++}o.push(new re(c,n.length,s.index,s.index+a.length)),l=l.slice(0,s.index)+a+l.slice(s.index+s[0].length)}for(let r;r=/\\([{}])/.exec(l);){l=l.slice(0,r.index)+r[1]+l.slice(r.index+r[0].length);for(let a of o)a.line==n.length&&a.from>r.index&&(a.from--,a.to--)}n.push(l)}return new i(n,o)}},ft=T.widget({widget:new class extends xe{toDOM(){let i=document.createElement("span");return i.className="cm-snippetFieldPosition",i}ignoreEvent(){return!1}}}),ut=T.mark({class:"cm-snippetField"}),O=class i{constructor(e,t){this.ranges=e,this.active=t,this.deco=T.set(e.map(n=>(n.from==n.to?ft:ut).range(n.from,n.to)))}map(e){let t=[];for(let n of this.ranges){let o=n.map(e);if(!o)return null;t.push(o)}return new i(t,this.active)}selectionInsideField(e){return e.ranges.every(t=>this.ranges.some(n=>n.field==this.active&&n.from<=t.from&&n.to>=t.to))}},L=v.define({map(i,e){return i&&i.map(e)}}),ht=v.define(),M=j.define({create(){return null},update(i,e){for(let t of e.effects){if(t.is(L))return t.value;if(t.is(ht)&&i)return new O(i.ranges,t.value)}return i&&e.docChanged&&(i=i.map(e.changes)),i&&e.selection&&!i.selectionInsideField(e.selection)&&(i=null),i},provide:i=>P.decorations.from(i,e=>e?e.deco:T.none)});function ue(i,e){return p.create(i.filter(t=>t.field==e).map(t=>p.range(t.from,t.to)))}function pt(i){let e=ce.parse(i);return(t,n,o,s)=>{let{text:l,ranges:r}=e.instantiate(t.state,o),a={changes:{from:o,to:s,insert:de.of(l)},scrollIntoView:!0};if(r.length&&(a.selection=ue(r,0)),r.length>1){let c=new O(r,0),f=a.effects=[L.of(c)];t.state.field(M,!1)===void 0&&f.push(v.appendConfig.of([M,xt,yt,$e]))}t.dispatch(t.state.update(a))}}function Ue(i){return({state:e,dispatch:t})=>{let n=e.field(M,!1);if(!n||i<0&&n.active==0)return!1;let o=n.active+i,s=i>0&&!n.ranges.some(l=>l.field==o+i);return t(e.update({selection:ue(n.ranges,o),effects:L.of(s?null:new O(n.ranges,o))})),!0}}var dt=({state:i,dispatch:e})=>i.field(M,!1)?(e(i.update({effects:L.of(null)})),!0):!1,mt=Ue(1),gt=Ue(-1),bt=[{key:"Tab",run:mt,shift:gt},{key:"Escape",run:dt}],Me=Y.define({combine(i){return i.length?i[0]:bt}}),xt=G.highest(Z.compute([Me],i=>i.facet(Me)));function Bt(i,e){return Object.assign(Object.assign({},e),{apply:pt(i)})}var yt=P.domEventHandlers({mousedown(i,e){let t=e.state.field(M,!1),n;if(!t||(n=e.posAtCoords({x:i.clientX,y:i.clientY}))==null)return!1;let o=t.ranges.find(s=>s.from<=n&&s.to>=n);return!o||o.field==t.active?!1:(e.dispatch({selection:ue(t.ranges,o.field),effects:L.of(t.ranges.some(s=>s.field>o.field)?new O(t.ranges,o.field):null)}),!0)}});var D={brackets:["(","[","{","'",'"'],before:")]}:;>",stringPrefixes:[]},A=v.define({map(i,e){let t=e.mapPos(i,-1,B.TrackAfter);return t??void 0}}),he=v.define({map(i,e){return e.mapPos(i)}}),pe=new class extends be{};pe.startSide=1;pe.endSide=-1;var Fe=j.define({create(){return J.empty},update(i,e){if(e.selection){let t=e.state.doc.lineAt(e.selection.main.head).from,n=e.startState.doc.lineAt(e.startState.selection.main.head).from;t!=e.changes.mapPos(n,-1)&&(i=J.empty)}i=i.map(e.changes);for(let t of e.effects)t.is(A)?i=i.update({add:[pe.range(t.value,t.value+1)]}):t.is(he)&&(i=i.update({filter:n=>n!=t.value}));return i}});function jt(){return[wt,Fe]}var _="()[]{}<>";function Ne(i){for(let e=0;e<_.length;e+=2)if(_.charCodeAt(e)==i)return _.charAt(e+1);return X(i<128?i:i+1)}function Ve(i,e){return i.languageDataAt("closeBrackets",e)[0]||D}var vt=typeof navigator=="object"&&/Android\b/.test(navigator.userAgent),wt=P.inputHandler.of((i,e,t,n)=>{if((vt?i.composing:i.compositionStarted)||i.state.readOnly)return!1;let o=i.state.selection.main;if(n.length>2||n.length==2&&y(g(n,0))==1||e!=o.from||t!=o.to)return!1;let s=St(i.state,n);return s?(i.dispatch(s),!0):!1}),Ct=({state:i,dispatch:e})=>{if(i.readOnly)return!1;let n=Ve(i,i.selection.main.head).brackets||D.brackets,o=null,s=i.changeByRange(l=>{if(l.empty){let r=It(i.doc,l.head);for(let a of n)if(a==r&&H(i.doc,l.head)==Ne(g(a,0)))return{changes:{from:l.head-a.length,to:l.head+a.length},range:p.cursor(l.head-a.length)}}return{range:o=l}});return o||e(i.update(s,{scrollIntoView:!0,userEvent:"delete.backward"})),!o},Wt=[{key:"Backspace",run:Ct}];function St(i,e){let t=Ve(i,i.selection.main.head),n=t.brackets||D.brackets;for(let o of n){let s=Ne(g(o,0));if(e==o)return s==o?Pt(i,o,n.indexOf(o+o+o)>-1,t):At(i,o,s,t.before||D.before);if(e==s&&He(i,i.selection.main.from))return Et(i,o,s)}return null}function He(i,e){let t=!1;return i.field(Fe).between(0,i.doc.length,n=>{n==e&&(t=!0)}),t}function H(i,e){let t=i.sliceString(e,e+2);return t.slice(0,y(g(t,0)))}function It(i,e){let t=i.sliceString(e-2,e);return y(g(t,0))==t.length?t:t.slice(1)}function At(i,e,t,n){let o=null,s=i.changeByRange(l=>{if(!l.empty)return{changes:[{insert:e,from:l.from},{insert:t,from:l.to}],effects:A.of(l.to+e.length),range:p.range(l.anchor+e.length,l.head+e.length)};let r=H(i.doc,l.head);return!r||/\s/.test(r)||n.indexOf(r)>-1?{changes:{insert:e+t,from:l.head},effects:A.of(l.head+e.length),range:p.cursor(l.head+e.length)}:{range:o=l}});return o?null:i.update(s,{scrollIntoView:!0,userEvent:"input.type"})}function Et(i,e,t){let n=null,o=i.selection.ranges.map(s=>s.empty&&H(i.doc,s.head)==t?p.cursor(s.head+t.length):n=s);return n?null:i.update({selection:p.create(o,i.selection.mainIndex),scrollIntoView:!0,effects:i.selection.ranges.map(({from:s})=>he.of(s))})}function Pt(i,e,t,n){let o=n.stringPrefixes||D.stringPrefixes,s=null,l=i.changeByRange(r=>{if(!r.empty)return{changes:[{insert:e,from:r.from},{insert:e,from:r.to}],effects:A.of(r.to+e.length),range:p.range(r.anchor+e.length,r.head+e.length)};let a=r.head,c=H(i.doc,a),f;if(c==e){if(De(i,a))return{changes:{insert:e+e,from:a},effects:A.of(a+e.length),range:p.cursor(a+e.length)};if(He(i,a)){let u=t&&i.sliceDoc(a,a+e.length*3)==e+e+e;return{range:p.cursor(a+e.length*(u?3:1)),effects:he.of(a)}}}else{if(t&&i.sliceDoc(a-2*e.length,a)==e+e&&(f=Le(i,a-2*e.length,o))>-1&&De(i,f))return{changes:{insert:e+e+e+e,from:a},effects:A.of(a+e.length),range:p.cursor(a+e.length)};if(i.charCategorizer(a)(c)!=W.Word&&Le(i,a,o)>-1&&!Ot(i,a,e,o))return{changes:{insert:e+e,from:a},effects:A.of(a+e.length),range:p.cursor(a+e.length)}}return{range:s=r}});return s?null:i.update(l,{scrollIntoView:!0,userEvent:"input.type"})}function De(i,e){let t=R(i).resolveInner(e+1);return t.parent&&t.from==e}function Ot(i,e,t,n){let o=R(i).resolveInner(e,-1),s=n.reduce((l,r)=>Math.max(l,r.length),0);for(let l=0;l<5;l++){let r=i.sliceDoc(o.from,Math.min(o.to,o.from+t.length+s)),a=r.indexOf(t);if(!a||a>-1&&n.indexOf(r.slice(0,a))>-1){let f=o.firstChild;for(;f&&f.from==o.from&&f.to-f.from>t.length+a;){if(i.sliceDoc(f.to-t.length,f.to)==t)return!1;f=f.firstChild}return!0}let c=o.to==e&&o.parent;if(!c)break;o=c}return!1}function Le(i,e,t){let n=i.charCategorizer(e);if(n(i.sliceDoc(e-1,e))!=W.Word)return e;for(let o of t){let s=e-o.length;if(i.sliceDoc(s,e)==o&&n(i.sliceDoc(s-1,s))!=W.Word)return s}return-1}function $t(i={}){return[b,x.of(i),ct,Rt,$e]}var Tt=[{key:"Ctrl-Space",run:st},{key:"Escape",run:lt},{key:"ArrowDown",run:U(!0)},{key:"ArrowUp",run:U(!1)},{key:"PageDown",run:U(!0,"page")},{key:"PageUp",run:U(!1,"page")},{key:"Enter",run:ot}],Rt=G.highest(Z.computeN([x],i=>i.facet(x).defaultKeymap?[Tt]:[]));export{ze as a,kt as b,Bt as c,jt as d,Wt as e,$t as f,Tt as g};