function u(n){for(var e={},i=n.split(" "),r=0;r<i.length;++r)e[i[r]]=!0;return e}var s=u("#end #else #break #stop #[[ #]] #{end} #{else} #{break} #{stop}"),a=u("#if #elseif #foreach #set #include #parse #macro #define #evaluate #{if} #{elseif} #{foreach} #{set} #{include} #{parse} #{macro} #{define} #{evaluate}"),c=u("$foreach.count $foreach.hasNext $foreach.first $foreach.last $foreach.topmost $foreach.parent.count $foreach.parent.hasNext $foreach.parent.first $foreach.parent.last $foreach.parent $velocityCount $!bodyContent $bodyContent"),k=/[+\-*&%=<>!?:\/|]/;function o(n,e,i){return e.tokenize=i,i(n,e)}function t(n,e){var i=e.beforeParams;e.beforeParams=!1;var r=n.next();if(r=="'"&&!e.inString&&e.inParams)return e.lastTokenWasBuiltin=!1,o(n,e,p(r));if(r=='"'){if(e.lastTokenWasBuiltin=!1,e.inString)return e.inString=!1,"string";if(e.inParams)return o(n,e,p(r))}else{if(/[\[\]{}\(\),;\.]/.test(r))return r=="("&&i?e.inParams=!0:r==")"&&(e.inParams=!1,e.lastTokenWasBuiltin=!0),null;if(/\d/.test(r))return e.lastTokenWasBuiltin=!1,n.eatWhile(/[\w\.]/),"number";if(r=="#"&&n.eat("*"))return e.lastTokenWasBuiltin=!1,o(n,e,h);if(r=="#"&&n.match(/ *\[ *\[/))return e.lastTokenWasBuiltin=!1,o(n,e,b);if(r=="#"&&n.eat("#"))return e.lastTokenWasBuiltin=!1,n.skipToEnd(),"comment";if(r=="$")return n.eat("!"),n.eatWhile(/[\w\d\$_\.{}-]/),c&&c.propertyIsEnumerable(n.current())?"keyword":(e.lastTokenWasBuiltin=!0,e.beforeParams=!0,"builtin");if(k.test(r))return e.lastTokenWasBuiltin=!1,n.eatWhile(k),"operator";n.eatWhile(/[\w\$_{}@]/);var l=n.current();return s&&s.propertyIsEnumerable(l)?"keyword":a&&a.propertyIsEnumerable(l)||n.current().match(/^#@?[a-z0-9_]+ *$/i)&&n.peek()=="("&&!(a&&a.propertyIsEnumerable(l.toLowerCase()))?(e.beforeParams=!0,e.lastTokenWasBuiltin=!1,"keyword"):e.inString?(e.lastTokenWasBuiltin=!1,"string"):n.pos>l.length&&n.string.charAt(n.pos-l.length-1)=="."&&e.lastTokenWasBuiltin?"builtin":(e.lastTokenWasBuiltin=!1,null)}}function p(n){return function(e,i){for(var r=!1,l,f=!1;(l=e.next())!=null;){if(l==n&&!r){f=!0;break}if(n=='"'&&e.peek()=="$"&&!r){i.inString=!0,f=!0;break}r=!r&&l=="\\"}return f&&(i.tokenize=t),"string"}}function h(n,e){for(var i=!1,r;r=n.next();){if(r=="#"&&i){e.tokenize=t;break}i=r=="*"}return"comment"}function b(n,e){for(var i=0,r;r=n.next();){if(r=="#"&&i==2){e.tokenize=t;break}r=="]"?i++:r!=" "&&(i=0)}return"meta"}var W={name:"velocity",startState:function(){return{tokenize:t,beforeParams:!1,inParams:!1,inString:!1,lastTokenWasBuiltin:!1}},token:function(n,e){return n.eatSpace()?null:e.tokenize(n,e)},languageData:{commentTokens:{line:"##",block:{open:"#*",close:"*#"}}}};export{W as velocity};