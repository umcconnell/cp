import{b as _,c as H}from"./chunk-MACZV4XS.js";import{e as y,f as z,g as F,h as ee,i as te}from"./chunk-HZIBCMDN.js";import{b as x,c as J,d as L}from"./chunk-5GTKOASS.js";import{$ as j,Ba as K,C as D,Z as I,aa as g,ea as E,fa as q,ha as G,i as v,oa as N,ta as U}from"./chunk-KIO73TX4.js";var Qe=54,Ae=1,Ye=55,Me=2,ke=56,Ze=3,V=4,ie=5,ue=6,ce=7,pe=8,Be=9,We=10,Re=11,w=57,De=12,ae=58,Ie=18,je=20,de=21,Ee=22,C=24,fe=25,Ge=27,Ne=30,Ue=33,me=35,Ke=36,Je=0,Le={area:!0,base:!0,br:!0,col:!0,command:!0,embed:!0,frame:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0,menuitem:!0},He={dd:!0,li:!0,optgroup:!0,option:!0,p:!0,rp:!0,rt:!0,tbody:!0,td:!0,tfoot:!0,th:!0,tr:!0},le={dd:{dd:!0,dt:!0},dt:{dd:!0,dt:!0},li:{li:!0},option:{option:!0,optgroup:!0},optgroup:{optgroup:!0},p:{address:!0,article:!0,aside:!0,blockquote:!0,dir:!0,div:!0,dl:!0,fieldset:!0,footer:!0,form:!0,h1:!0,h2:!0,h3:!0,h4:!0,h5:!0,h6:!0,header:!0,hgroup:!0,hr:!0,menu:!0,nav:!0,ol:!0,p:!0,pre:!0,section:!0,table:!0,ul:!0},rp:{rp:!0,rt:!0},rt:{rp:!0,rt:!0},tbody:{tbody:!0,tfoot:!0},td:{td:!0,th:!0},tfoot:{tbody:!0},th:{td:!0,th:!0},thead:{tbody:!0,tfoot:!0},tr:{tr:!0}};function ze(e){return e==45||e==46||e==58||e>=65&&e<=90||e==95||e>=97&&e<=122||e>=161}function ge(e){return e==9||e==10||e==13||e==32}var re=null,ne=null,se=0;function Q(e,t){let l=e.pos+t;if(se==l&&ne==e)return re;let a=e.peek(t);for(;ge(a);)a=e.peek(++t);let r="";for(;ze(a);)r+=String.fromCharCode(a),a=e.peek(++t);return ne=e,se=l,re=r?r.toLowerCase():a==Fe||a==et?void 0:null}var Se=60,he=62,Pe=47,Fe=63,et=33,tt=45;function oe(e,t){this.name=e,this.parent=t,this.hash=t?t.hash:0;for(let l=0;l<e.length;l++)this.hash+=(this.hash<<4)+e.charCodeAt(l)+(e.charCodeAt(l)<<8)}var at=[V,pe,ie,ue,ce],lt=new J({start:null,shift(e,t,l,a){return at.indexOf(t)>-1?new oe(Q(a,1)||"",e):e},reduce(e,t){return t==Ie&&e?e.parent:e},reuse(e,t,l,a){let r=t.type.id;return r==V||r==me?new oe(Q(a,1)||"",e):e},hash(e){return e?e.hash:0},strict:!1}),rt=new x((e,t)=>{if(e.next!=Se){e.next<0&&t.context&&e.acceptToken(w);return}e.advance();let l=e.next==Pe;l&&e.advance();let a=Q(e,0);if(a===void 0)return;if(!a)return e.acceptToken(l?De:V);let r=t.context?t.context.name:null;if(l){if(a==r)return e.acceptToken(Be);if(r&&He[r])return e.acceptToken(w,-2);if(t.dialectEnabled(Je))return e.acceptToken(We);for(let n=t.context;n;n=n.parent)if(n.name==a)return;e.acceptToken(Re)}else{if(a=="script")return e.acceptToken(ie);if(a=="style")return e.acceptToken(ue);if(a=="textarea")return e.acceptToken(ce);if(Le.hasOwnProperty(a))return e.acceptToken(pe);r&&le[r]&&le[r][a]?e.acceptToken(w,-1):e.acceptToken(V)}},{contextual:!0}),nt=new x(e=>{for(let t=0,l=0;;l++){if(e.next<0){l&&e.acceptToken(ae);break}if(e.next==tt)t++;else if(e.next==he&&t>=2){l>3&&e.acceptToken(ae,-2);break}else t=0;e.advance()}});function A(e,t,l){let a=2+e.length;return new x(r=>{for(let n=0,o=0,O=0;;O++){if(r.next<0){O&&r.acceptToken(t);break}if(n==0&&r.next==Se||n==1&&r.next==Pe||n>=2&&n<a&&r.next==e.charCodeAt(n-2))n++,o++;else if((n==2||n==a)&&ge(r.next))o++;else if(n==a&&r.next==he){O>o?r.acceptToken(t,-o):r.acceptToken(l,-(o-2));break}else if((r.next==10||r.next==13)&&O){r.acceptToken(t,1);break}else n=o=0;r.advance()}})}var st=A("script",Qe,Ae),ot=A("style",Ye,Me),Ot=A("textarea",ke,Ze),it=j({"Text RawText":g.content,"StartTag StartCloseTag SelfClosingEndTag EndTag":g.angleBracket,TagName:g.tagName,"MismatchedCloseTag/TagName":[g.tagName,g.invalid],AttributeName:g.attributeName,"AttributeValue UnquotedAttributeValue":g.attributeValue,Is:g.definitionOperator,"EntityReference CharacterReference":g.character,Comment:g.blockComment,ProcessingInst:g.processingInstruction,DoctypeDecl:g.documentMeta}),Te=L.deserialize({version:14,states:",xOVOxOOO!WQ!bO'#CoO!]Q!bO'#CyO!bQ!bO'#C|O!gQ!bO'#DPO!lQ!bO'#DRO!qOXO'#CnO!|OYO'#CnO#XO[O'#CnO$eOxO'#CnOOOW'#Cn'#CnO$lO!rO'#DTO$tQ!bO'#DVO$yQ!bO'#DWOOOW'#Dk'#DkOOOW'#DY'#DYQVOxOOO%OQ#tO,59ZO%WQ#tO,59eO%`Q#tO,59hO%hQ#tO,59kO%sQ#tO,59mOOOX'#D^'#D^O%{OXO'#CwO&WOXO,59YOOOY'#D_'#D_O&`OYO'#CzO&kOYO,59YOOO['#D`'#D`O&sO[O'#C}O'OO[O,59YOOOW'#Da'#DaO'WOxO,59YO'_Q!bO'#DQOOOW,59Y,59YOOO`'#Db'#DbO'dO!rO,59oOOOW,59o,59oO'lQ!bO,59qO'qQ!bO,59rOOOW-E7W-E7WO'vQ#tO'#CqOOQO'#DZ'#DZO(UQ#tO1G.uOOOX1G.u1G.uO(^Q#tO1G/POOOY1G/P1G/PO(fQ#tO1G/SOOO[1G/S1G/SO(nQ#tO1G/VOOOW1G/V1G/VOOOW1G/X1G/XO(yQ#tO1G/XOOOX-E7[-E7[O)RQ!bO'#CxOOOW1G.t1G.tOOOY-E7]-E7]O)WQ!bO'#C{OOO[-E7^-E7^O)]Q!bO'#DOOOOW-E7_-E7_O)bQ!bO,59lOOO`-E7`-E7`OOOW1G/Z1G/ZOOOW1G/]1G/]OOOW1G/^1G/^O)gQ&jO,59]OOQO-E7X-E7XOOOX7+$a7+$aOOOY7+$k7+$kOOO[7+$n7+$nOOOW7+$q7+$qOOOW7+$s7+$sO)rQ!bO,59dO)wQ!bO,59gO)|Q!bO,59jOOOW1G/W1G/WO*RO,UO'#CtO*dO7[O'#CtOOQO1G.w1G.wOOOW1G/O1G/OOOOW1G/R1G/ROOOW1G/U1G/UOOOO'#D['#D[O*uO,UO,59`OOQO,59`,59`OOOO'#D]'#D]O+WO7[O,59`OOOO-E7Y-E7YOOQO1G.z1G.zOOOO-E7Z-E7Z",stateData:"+u~O!^OS~OSSOTPOUQOVROWTOY]OZ[O[^O^^O_^O`^Oa^Ox^O{_O!dZO~OdaO~OdbO~OdcO~OddO~OdeO~O!WfOPkP!ZkP~O!XiOQnP!ZnP~O!YlORqP!ZqP~OSSOTPOUQOVROWTOXqOY]OZ[O[^O^^O_^O`^Oa^Ox^O!dZO~O!ZrO~P#dO![sO!euO~OdvO~OdwO~OfyOj|O~OfyOj!OO~OfyOj!QO~OfyOj!SOv!TO~OfyOj!TO~O!WfOPkX!ZkX~OP!WO!Z!XO~O!XiOQnX!ZnX~OQ!ZO!Z!XO~O!YlORqX!ZqX~OR!]O!Z!XO~O!Z!XO~P#dOd!_O~O![sO!e!aO~Oj!bO~Oj!cO~Og!dOfeXjeXveX~OfyOj!fO~OfyOj!gO~OfyOj!hO~OfyOj!iOv!jO~OfyOj!jO~Od!kO~Od!lO~Od!mO~Oj!nO~Oi!qO!`!oO!b!pO~Oj!rO~Oj!sO~Oj!tO~O_!uO`!uOa!uO!`!wO!a!uO~O_!xO`!xOa!xO!b!wO!c!xO~O_!uO`!uOa!uO!`!{O!a!uO~O_!xO`!xOa!xO!b!{O!c!xO~Ov~vj`!dx{_a_~",goto:"%p!`PPPPPPPPPPPPPPPPPP!a!gP!mPP!yPP!|#P#S#Y#]#`#f#i#l#r#xP!aP!a!aP$O$U$l$r$x%O%U%[%bPPPPPPPP%hX^OX`pXUOX`pezabcde{}!P!R!UR!q!dRhUR!XhXVOX`pRkVR!XkXWOX`pRnWR!XnXXOX`pQrXR!XpXYOX`pQ`ORx`Q{aQ}bQ!PcQ!RdQ!UeZ!e{}!P!R!UQ!v!oR!z!vQ!y!pR!|!yQgUR!VgQjVR!YjQmWR![mQpXR!^pQtZR!`tS_O`ToXp",nodeNames:"\u26A0 StartCloseTag StartCloseTag StartCloseTag StartTag StartTag StartTag StartTag StartTag StartCloseTag StartCloseTag StartCloseTag IncompleteCloseTag Document Text EntityReference CharacterReference InvalidEntity Element OpenTag TagName Attribute AttributeName Is AttributeValue UnquotedAttributeValue EndTag ScriptText CloseTag OpenTag StyleText CloseTag OpenTag TextareaText CloseTag OpenTag CloseTag SelfClosingTag SelfClosingEndTag Comment ProcessingInst MismatchedCloseTag CloseTag DoctypeDecl",maxTerm:67,context:lt,nodeProps:[["closedBy",-10,1,2,3,5,6,7,8,9,10,11,"EndTag",4,"EndTag SelfClosingEndTag",-4,19,29,32,35,"CloseTag"],["group",-9,12,15,16,17,18,39,40,41,42,"Entity",14,"Entity TextContent",-3,27,30,33,"TextContent Entity"],["openedBy",26,"StartTag StartCloseTag",-4,28,31,34,36,"OpenTag",38,"StartTag"]],propSources:[it],skippedNodes:[0],repeatNodeCount:9,tokenData:"#(r!aR!YOX$qXY,QYZ,QZ[$q[]&X]^,Q^p$qpq,Qqr-_rs4ysv-_vw5iwxJ^x}-_}!OKP!O!P-_!P!Q!!O!Q![-_![!]!$c!]!^-_!^!_!(k!_!`#'S!`!a#'z!a!c-_!c!}!$c!}#R-_#R#S!$c#S#T3V#T#o!$c#o#s-_#s$f$q$f%W-_%W%o!$c%o%p-_%p&a!$c&a&b-_&b1p!$c1p4U-_4U4d!$c4d4e-_4e$IS!$c$IS$I`-_$I`$Ib!$c$Ib$Kh-_$Kh%#t!$c%#t&/x-_&/x&Et!$c&Et&FV-_&FV;'S!$c;'S;:j!(e;:j;=`4s<%l?&r-_?&r?Ah!$c?Ah?BY$q?BY?Mn!$c?MnO$q!Z$|c^PiW!a`!cpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr$qrs&}sv$qvw+Pwx(tx!^$q!^!_*V!_!a&X!a#S$q#S#T&X#T;'S$q;'S;=`+z<%lO$q!R&bX^P!a`!cpOr&Xrs&}sv&Xwx(tx!^&X!^!_*V!_;'S&X;'S;=`*y<%lO&Xq'UV^P!cpOv&}wx'kx!^&}!^!_(V!_;'S&};'S;=`(n<%lO&}P'pT^POv'kw!^'k!_;'S'k;'S;=`(P<%lO'kP(SP;=`<%l'kp([S!cpOv(Vx;'S(V;'S;=`(h<%lO(Vp(kP;=`<%l(Vq(qP;=`<%l&}a({W^P!a`Or(trs'ksv(tw!^(t!^!_)e!_;'S(t;'S;=`*P<%lO(t`)jT!a`Or)esv)ew;'S)e;'S;=`)y<%lO)e`)|P;=`<%l)ea*SP;=`<%l(t!Q*^V!a`!cpOr*Vrs(Vsv*Vwx)ex;'S*V;'S;=`*s<%lO*V!Q*vP;=`<%l*V!R*|P;=`<%l&XW+UYiWOX+PZ[+P^p+Pqr+Psw+Px!^+P!a#S+P#T;'S+P;'S;=`+t<%lO+PW+wP;=`<%l+P!Z+}P;=`<%l$q!a,]`^P!a`!cp!^^OX&XXY,QYZ,QZ]&X]^,Q^p&Xpq,Qqr&Xrs&}sv&Xwx(tx!^&X!^!_*V!_;'S&X;'S;=`*y<%lO&X!_-ljfS^PiW!a`!cpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr-_rs&}sv-_vw/^wx(tx!P-_!P!Q$q!Q!^-_!^!_1n!_!a&X!a#S-_#S#T3V#T#s-_#s$f$q$f;'S-_;'S;=`4s<%l?Ah-_?Ah?BY$q?BY?Mn-_?MnO$q[/ecfSiWOX+PZ[+P^p+Pqr/^sw/^x!P/^!P!Q+P!Q!^/^!^!_0p!a#S/^#S#T0p#T#s/^#s$f+P$f;'S/^;'S;=`1h<%l?Ah/^?Ah?BY+P?BY?Mn/^?MnO+PS0uXfSqr0psw0px!P0p!Q!_0p!a#s0p$f;'S0p;'S;=`1b<%l?Ah0p?BY?Mn0pS1eP;=`<%l0p[1kP;=`<%l/^!U1wbfS!a`!cpOq*Vqr1nrs(Vsv1nvw0pwx)ex!P1n!P!Q*V!Q!_1n!_!a*V!a#s1n#s$f*V$f;'S1n;'S;=`3P<%l?Ah1n?Ah?BY*V?BY?Mn1n?MnO*V!U3SP;=`<%l1n!V3bcfS^P!a`!cpOq&Xqr3Vrs&}sv3Vvw0pwx(tx!P3V!P!Q&X!Q!^3V!^!_1n!_!a&X!a#s3V#s$f&X$f;'S3V;'S;=`4m<%l?Ah3V?Ah?BY&X?BY?Mn3V?MnO&X!V4pP;=`<%l3V!_4vP;=`<%l-_!Z5SV!`h^P!cpOv&}wx'kx!^&}!^!_(V!_;'S&};'S;=`(n<%lO&}!_5rjfSiWa!ROX7dXZ8qZ[7d[^8q^p7dqr:crs8qst@Ttw:cwx8qx!P:c!P!Q7d!Q!]:c!]!^/^!^!_=p!_!a8q!a#S:c#S#T=p#T#s:c#s$f7d$f;'S:c;'S;=`?}<%l?Ah:c?Ah?BY7d?BY?Mn:c?MnO7d!Z7ibiWOX7dXZ8qZ[7d[^8q^p7dqr7drs8qst+Ptw7dwx8qx!]7d!]!^9f!^!a8q!a#S7d#S#T8q#T;'S7d;'S;=`:]<%lO7d!R8tVOp8qqs8qt!]8q!]!^9Z!^;'S8q;'S;=`9`<%lO8q!R9`O_!R!R9cP;=`<%l8q!Z9mYiW_!ROX+PZ[+P^p+Pqr+Psw+Px!^+P!a#S+P#T;'S+P;'S;=`+t<%lO+P!Z:`P;=`<%l7d!_:jjfSiWOX7dXZ8qZ[7d[^8q^p7dqr:crs8qst/^tw:cwx8qx!P:c!P!Q7d!Q!]:c!]!^<[!^!_=p!_!a8q!a#S:c#S#T=p#T#s:c#s$f7d$f;'S:c;'S;=`?}<%l?Ah:c?Ah?BY7d?BY?Mn:c?MnO7d!_<ecfSiW_!ROX+PZ[+P^p+Pqr/^sw/^x!P/^!P!Q+P!Q!^/^!^!_0p!a#S/^#S#T0p#T#s/^#s$f+P$f;'S/^;'S;=`1h<%l?Ah/^?Ah?BY+P?BY?Mn/^?MnO+P!V=udfSOp8qqr=prs8qst0ptw=pwx8qx!P=p!P!Q8q!Q!]=p!]!^?T!^!_=p!_!a8q!a#s=p#s$f8q$f;'S=p;'S;=`?w<%l?Ah=p?Ah?BY8q?BY?Mn=p?MnO8q!V?[XfS_!Rqr0psw0px!P0p!Q!_0p!a#s0p$f;'S0p;'S;=`1b<%l?Ah0p?BY?Mn0p!V?zP;=`<%l=p!_@QP;=`<%l:c!_@[ifSiWOXAyXZCTZ[Ay[^CT^pAyqrDrrsCTswDrwxCTx!PDr!P!QAy!Q!]Dr!]!^/^!^!_G|!_!aCT!a#SDr#S#TG|#T#sDr#s$fAy$f;'SDr;'S;=`JW<%l?AhDr?Ah?BYAy?BY?MnDr?MnOAy!ZBOaiWOXAyXZCTZ[Ay[^CT^pAyqrAyrsCTswAywxCTx!]Ay!]!^Cu!^!aCT!a#SAy#S#TCT#T;'SAy;'S;=`Dl<%lOAy!RCWUOpCTq!]CT!]!^Cj!^;'SCT;'S;=`Co<%lOCT!RCoO`!R!RCrP;=`<%lCT!ZC|YiW`!ROX+PZ[+P^p+Pqr+Psw+Px!^+P!a#S+P#T;'S+P;'S;=`+t<%lO+P!ZDoP;=`<%lAy!_DyifSiWOXAyXZCTZ[Ay[^CT^pAyqrDrrsCTswDrwxCTx!PDr!P!QAy!Q!]Dr!]!^Fh!^!_G|!_!aCT!a#SDr#S#TG|#T#sDr#s$fAy$f;'SDr;'S;=`JW<%l?AhDr?Ah?BYAy?BY?MnDr?MnOAy!_FqcfSiW`!ROX+PZ[+P^p+Pqr/^sw/^x!P/^!P!Q+P!Q!^/^!^!_0p!a#S/^#S#T0p#T#s/^#s$f+P$f;'S/^;'S;=`1h<%l?Ah/^?Ah?BY+P?BY?Mn/^?MnO+P!VHRcfSOpCTqrG|rsCTswG|wxCTx!PG|!P!QCT!Q!]G|!]!^I^!^!_G|!_!aCT!a#sG|#s$fCT$f;'SG|;'S;=`JQ<%l?AhG|?Ah?BYCT?BY?MnG|?MnOCT!VIeXfS`!Rqr0psw0px!P0p!Q!_0p!a#s0p$f;'S0p;'S;=`1b<%l?Ah0p?BY?Mn0p!VJTP;=`<%lG|!_JZP;=`<%lDr!ZJgW!bx^P!a`Or(trs'ksv(tw!^(t!^!_)e!_;'S(t;'S;=`*P<%lO(t!aK^lfS^PiW!a`!cpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr-_rs&}sv-_vw/^wx(tx}-_}!OMU!O!P-_!P!Q$q!Q!^-_!^!_1n!_!a&X!a#S-_#S#T3V#T#s-_#s$f$q$f;'S-_;'S;=`4s<%l?Ah-_?Ah?BY$q?BY?Mn-_?MnO$q!aMckfS^PiW!a`!cpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr-_rs&}sv-_vw/^wx(tx!P-_!P!Q$q!Q!^-_!^!_1n!_!`&X!`!a! W!a#S-_#S#T3V#T#s-_#s$f$q$f;'S-_;'S;=`4s<%l?Ah-_?Ah?BY$q?BY?Mn-_?MnO$q!T! cX^P!a`!cp!eQOr&Xrs&}sv&Xwx(tx!^&X!^!_*V!_;'S&X;'S;=`*y<%lO&X!a!!Zd^PiW!a`!cpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr$qrs&}sv$qvw+Pwx(tx!^$q!^!_*V!_!`&X!`!a!#i!a#S$q#S#T&X#T;'S$q;'S;=`+z<%lO$q!X!#vX^P!a`!cpvSjUOr&Xrs&}sv&Xwx(tx!^&X!^!_*V!_;'S&X;'S;=`*y<%lO&X!a!$r!ZfSdQ^PiW!a`!cpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr-_rs&}sv-_vw/^wx(tx}-_}!O!$c!O!P!$c!P!Q$q!Q![!$c![!]!$c!]!^-_!^!_1n!_!a&X!a!c-_!c!}!$c!}#R-_#R#S!$c#S#T3V#T#o!$c#o#s-_#s$f$q$f$}-_$}%O!$c%O%W-_%W%o!$c%o%p-_%p&a!$c&a&b-_&b1p!$c1p4U!$c4U4d!$c4d4e-_4e$IS!$c$IS$I`-_$I`$Ib!$c$Ib$Je-_$Je$Jg!$c$Jg$Kh-_$Kh%#t!$c%#t&/x-_&/x&Et!$c&Et&FV-_&FV;'S!$c;'S;:j!(e;:j;=`4s<%l?&r-_?&r?Ah!$c?Ah?BY$q?BY?Mn!$c?MnO$q!a!(hP;=`<%l!$c!V!(tcfS!a`!cpOq*Vqr!*Prs(Vsv1nvw0pwx)ex!P1n!P!Q*V!Q!_1n!_!a*V!a!b!H^!b#s1n#s$f*V$f;'S1n;'S;=`3P<%l?Ah1n?Ah?BY*V?BY?Mn1n?MnO*V!V!*YhfS!a`!cpOq*Vqr1nrs(Vsv1nvw0pwx)ex}1n}!O!+t!O!P1n!P!Q*V!Q!_1n!_!a*V!a!f1n!f!g!.p!g#W1n#W#X!?^#X#s1n#s$f*V$f;'S1n;'S;=`3P<%l?Ah1n?Ah?BY*V?BY?Mn1n?MnO*V!V!+}dfS!a`!cpOq*Vqr1nrs(Vsv1nvw0pwx)ex}1n}!O!-]!O!P1n!P!Q*V!Q!_1n!_!a*V!a#s1n#s$f*V$f;'S1n;'S;=`3P<%l?Ah1n?Ah?BY*V?BY?Mn1n?MnO*V!V!-hbfS!a`!cp!dPOq*Vqr1nrs(Vsv1nvw0pwx)ex!P1n!P!Q*V!Q!_1n!_!a*V!a#s1n#s$f*V$f;'S1n;'S;=`3P<%l?Ah1n?Ah?BY*V?BY?Mn1n?MnO*V!V!.ydfS!a`!cpOq*Vqr1nrs(Vsv1nvw0pwx)ex!P1n!P!Q*V!Q!_1n!_!a*V!a!q1n!q!r!0X!r#s1n#s$f*V$f;'S1n;'S;=`3P<%l?Ah1n?Ah?BY*V?BY?Mn1n?MnO*V!V!0bdfS!a`!cpOq*Vqr1nrs(Vsv1nvw0pwx)ex!P1n!P!Q*V!Q!_1n!_!a*V!a!e1n!e!f!1p!f#s1n#s$f*V$f;'S1n;'S;=`3P<%l?Ah1n?Ah?BY*V?BY?Mn1n?MnO*V!V!1ydfS!a`!cpOq*Vqr1nrs(Vsv1nvw0pwx)ex!P1n!P!Q*V!Q!_1n!_!a*V!a!v1n!v!w!3X!w#s1n#s$f*V$f;'S1n;'S;=`3P<%l?Ah1n?Ah?BY*V?BY?Mn1n?MnO*V!V!3bdfS!a`!cpOq*Vqr1nrs(Vsv1nvw0pwx)ex!P1n!P!Q*V!Q!_1n!_!a*V!a!{1n!{!|!4p!|#s1n#s$f*V$f;'S1n;'S;=`3P<%l?Ah1n?Ah?BY*V?BY?Mn1n?MnO*V!V!4ydfS!a`!cpOq*Vqr1nrs(Vsv1nvw0pwx)ex!P1n!P!Q*V!Q!_1n!_!a*V!a!r1n!r!s!6X!s#s1n#s$f*V$f;'S1n;'S;=`3P<%l?Ah1n?Ah?BY*V?BY?Mn1n?MnO*V!V!6bdfS!a`!cpOq*Vqr1nrs(Vsv1nvw0pwx)ex!P1n!P!Q*V!Q!_1n!_!a*V!a!g1n!g!h!7p!h#s1n#s$f*V$f;'S1n;'S;=`3P<%l?Ah1n?Ah?BY*V?BY?Mn1n?MnO*V!V!7ycfS!a`!cpOq!9Uqr!7prs!9{sv!7pvw!=swx!;ox!P!7p!P!Q!9U!Q!_!7p!_!`!9U!`!a!<}!a#s!7p#s$f!9U$f;'S!7p;'S;=`!?W<%l?Ah!7p?Ah?BY!9U?BY?Mn!7p?MnO!9U!R!9]Y!a`!cpOr!9Urs!9{sv!9Uvw!:gwx!;ox!`!9U!`!a!<}!a;'S!9U;'S;=`!=m<%lO!9Uq!:QV!cpOv!9{vx!:gx!`!9{!`!a!;U!a;'S!9{;'S;=`!;i<%lO!9{P!:jTO!`!:g!`!a!:y!a;'S!:g;'S;=`!;O<%lO!:gP!;OO{PP!;RP;=`<%l!:gq!;]S!cp{POv(Vx;'S(V;'S;=`(h<%lO(Vq!;lP;=`<%l!9{a!;tX!a`Or!;ors!:gsv!;ovw!:gw!`!;o!`!a!<a!a;'S!;o;'S;=`!<w<%lO!;oa!<hT!a`{POr)esv)ew;'S)e;'S;=`)y<%lO)ea!<zP;=`<%l!;o!R!=WV!a`!cp{POr*Vrs(Vsv*Vwx)ex;'S*V;'S;=`*s<%lO*V!R!=pP;=`<%l!9UT!=xbfSOq!:gqr!=srs!:gsw!=swx!:gx!P!=s!P!Q!:g!Q!_!=s!_!`!:g!`!a!:y!a#s!=s#s$f!:g$f;'S!=s;'S;=`!?Q<%l?Ah!=s?Ah?BY!:g?BY?Mn!=s?MnO!:gT!?TP;=`<%l!=s!V!?ZP;=`<%l!7p!V!?gdfS!a`!cpOq*Vqr1nrs(Vsv1nvw0pwx)ex!P1n!P!Q*V!Q!_1n!_!a*V!a#c1n#c#d!@u#d#s1n#s$f*V$f;'S1n;'S;=`3P<%l?Ah1n?Ah?BY*V?BY?Mn1n?MnO*V!V!AOdfS!a`!cpOq*Vqr1nrs(Vsv1nvw0pwx)ex!P1n!P!Q*V!Q!_1n!_!a*V!a#V1n#V#W!B^#W#s1n#s$f*V$f;'S1n;'S;=`3P<%l?Ah1n?Ah?BY*V?BY?Mn1n?MnO*V!V!BgdfS!a`!cpOq*Vqr1nrs(Vsv1nvw0pwx)ex!P1n!P!Q*V!Q!_1n!_!a*V!a#h1n#h#i!Cu#i#s1n#s$f*V$f;'S1n;'S;=`3P<%l?Ah1n?Ah?BY*V?BY?Mn1n?MnO*V!V!DOdfS!a`!cpOq*Vqr1nrs(Vsv1nvw0pwx)ex!P1n!P!Q*V!Q!_1n!_!a*V!a#m1n#m#n!E^#n#s1n#s$f*V$f;'S1n;'S;=`3P<%l?Ah1n?Ah?BY*V?BY?Mn1n?MnO*V!V!EgdfS!a`!cpOq*Vqr1nrs(Vsv1nvw0pwx)ex!P1n!P!Q*V!Q!_1n!_!a*V!a#d1n#d#e!Fu#e#s1n#s$f*V$f;'S1n;'S;=`3P<%l?Ah1n?Ah?BY*V?BY?Mn1n?MnO*V!V!GOdfS!a`!cpOq*Vqr1nrs(Vsv1nvw0pwx)ex!P1n!P!Q*V!Q!_1n!_!a*V!a#X1n#X#Y!7p#Y#s1n#s$f*V$f;'S1n;'S;=`3P<%l?Ah1n?Ah?BY*V?BY?Mn1n?MnO*V!V!HgcfS!a`!cpOq!Irqr!H^rs!Jisv!H^vw#!vwx!MZx!P!H^!P!Q!Ir!Q!_!H^!_!a!Ir!a!b#%h!b#s!H^#s$f!Ir$f;'S!H^;'S;=`#&|<%l?Ah!H^?Ah?BY!Ir?BY?Mn!H^?MnO!Ir!R!IyY!a`!cpOr!Irrs!Jisv!Irvw!KTwx!MZx!a!Ir!a!b# Z!b;'S!Ir;'S;=`#!p<%lO!Irq!JnV!cpOv!Jivx!KTx!a!Ji!a!b!LU!b;'S!Ji;'S;=`!MT<%lO!JiP!KWTO!a!KT!a!b!Kg!b;'S!KT;'S;=`!LO<%lO!KTP!KjTO!`!KT!`!a!Ky!a;'S!KT;'S;=`!LO<%lO!KTP!LOOxPP!LRP;=`<%l!KTq!LZV!cpOv!Jivx!KTx!`!Ji!`!a!Lp!a;'S!Ji;'S;=`!MT<%lO!Jiq!LwS!cpxPOv(Vx;'S(V;'S;=`(h<%lO(Vq!MWP;=`<%l!Jia!M`X!a`Or!MZrs!KTsv!MZvw!KTw!a!MZ!a!b!M{!b;'S!MZ;'S;=`# T<%lO!MZa!NQX!a`Or!MZrs!KTsv!MZvw!KTw!`!MZ!`!a!Nm!a;'S!MZ;'S;=`# T<%lO!MZa!NtT!a`xPOr)esv)ew;'S)e;'S;=`)y<%lO)ea# WP;=`<%l!MZ!R# bY!a`!cpOr!Irrs!Jisv!Irvw!KTwx!MZx!`!Ir!`!a#!Q!a;'S!Ir;'S;=`#!p<%lO!Ir!R#!ZV!a`!cpxPOr*Vrs(Vsv*Vwx)ex;'S*V;'S;=`*s<%lO*V!R#!sP;=`<%l!IrT#!{bfSOq!KTqr#!vrs!KTsw#!vwx!KTx!P#!v!P!Q!KT!Q!_#!v!_!a!KT!a!b#$T!b#s#!v#s$f!KT$f;'S#!v;'S;=`#%b<%l?Ah#!v?Ah?BY!KT?BY?Mn#!v?MnO!KTT#$YbfSOq!KTqr#!vrs!KTsw#!vwx!KTx!P#!v!P!Q!KT!Q!_#!v!_!`!KT!`!a!Ky!a#s#!v#s$f!KT$f;'S#!v;'S;=`#%b<%l?Ah#!v?Ah?BY!KT?BY?Mn#!v?MnO!KTT#%eP;=`<%l#!v!V#%qcfS!a`!cpOq!Irqr!H^rs!Jisv!H^vw#!vwx!MZx!P!H^!P!Q!Ir!Q!_!H^!_!`!Ir!`!a#!Q!a#s!H^#s$f!Ir$f;'S!H^;'S;=`#&|<%l?Ah!H^?Ah?BY!Ir?BY?Mn!H^?MnO!Ir!V#'PP;=`<%l!H^!V#'_XgS^P!a`!cpOr&Xrs&}sv&Xwx(tx!^&X!^!_*V!_;'S&X;'S;=`*y<%lO&X!X#(VX^P!a`!cpjUOr&Xrs&}sv&Xwx(tx!^&X!^!_*V!_;'S&X;'S;=`*y<%lO&X",tokenizers:[st,ot,Ot,rt,nt,0,1,2,3,4,5],topRules:{Document:[0,13]},dialects:{noMatch:0,selfClosing:485},tokenPrec:487});function xe(e,t){let l=Object.create(null);for(let a of e.getChildren(de)){let r=a.getChild(Ee),n=a.getChild(C)||a.getChild(fe);r&&(l[t.read(r.from,r.to)]=n?n.type.id==C?t.read(n.from+1,n.to-1):t.read(n.from,n.to):"")}return l}function Oe(e,t){let l=e.getChild(je);return l?t.read(l.from,l.to):" "}function X(e,t,l){let a;for(let r of l)if(!r.attrs||r.attrs(a||(a=xe(e.node.parent.firstChild,t))))return{parser:r.parser};return null}function Y(e=[],t=[]){let l=[],a=[],r=[],n=[];for(let O of e)(O.tag=="script"?l:O.tag=="style"?a:O.tag=="textarea"?r:n).push(O);let o=t.length?Object.create(null):null;for(let O of t)(o[O.name]||(o[O.name]=[])).push(O);return I((O,c)=>{let m=O.type.id;if(m==Ge)return X(O,c,l);if(m==Ne)return X(O,c,a);if(m==Ue)return X(O,c,r);if(m==me&&n.length){let i=O.node,u=Oe(i,c),d;for(let p of n)if(p.tag==u&&(!p.attrs||p.attrs(d||(d=xe(i,c))))){let f=i.parent.lastChild;return{parser:p.parser,overlay:[{from:O.to,to:f.type.id==Ke?f.from:i.parent.to}]}}}if(o&&m==de){let i=O.node,u;if(u=i.firstChild){let d=o[c.read(u.from,u.to)];if(d)for(let p of d){if(p.tagName&&p.tagName!=Oe(i.parent,c))continue;let f=i.lastChild;if(f.type.id==C)return{parser:p.parser,overlay:[{from:f.from+1,to:f.to-1}]};if(f.type.id==fe)return{parser:p.parser,overlay:[{from:f.from,to:f.to}]}}}}return null})}var T=["_blank","_self","_top","_parent"],M=["ascii","utf-8","utf-16","latin1","latin1"],k=["get","post","put","delete"],Z=["application/x-www-form-urlencoded","multipart/form-data","text/plain"],S=["true","false"],s={},ut={a:{attrs:{href:null,ping:null,type:null,media:null,target:T,hreflang:null}},abbr:s,address:s,area:{attrs:{alt:null,coords:null,href:null,target:null,ping:null,media:null,hreflang:null,type:null,shape:["default","rect","circle","poly"]}},article:s,aside:s,audio:{attrs:{src:null,mediagroup:null,crossorigin:["anonymous","use-credentials"],preload:["none","metadata","auto"],autoplay:["autoplay"],loop:["loop"],controls:["controls"]}},b:s,base:{attrs:{href:null,target:T}},bdi:s,bdo:s,blockquote:{attrs:{cite:null}},body:s,br:s,button:{attrs:{form:null,formaction:null,name:null,value:null,autofocus:["autofocus"],disabled:["autofocus"],formenctype:Z,formmethod:k,formnovalidate:["novalidate"],formtarget:T,type:["submit","reset","button"]}},canvas:{attrs:{width:null,height:null}},caption:s,center:s,cite:s,code:s,col:{attrs:{span:null}},colgroup:{attrs:{span:null}},command:{attrs:{type:["command","checkbox","radio"],label:null,icon:null,radiogroup:null,command:null,title:null,disabled:["disabled"],checked:["checked"]}},data:{attrs:{value:null}},datagrid:{attrs:{disabled:["disabled"],multiple:["multiple"]}},datalist:{attrs:{data:null}},dd:s,del:{attrs:{cite:null,datetime:null}},details:{attrs:{open:["open"]}},dfn:s,div:s,dl:s,dt:s,em:s,embed:{attrs:{src:null,type:null,width:null,height:null}},eventsource:{attrs:{src:null}},fieldset:{attrs:{disabled:["disabled"],form:null,name:null}},figcaption:s,figure:s,footer:s,form:{attrs:{action:null,name:null,"accept-charset":M,autocomplete:["on","off"],enctype:Z,method:k,novalidate:["novalidate"],target:T}},h1:s,h2:s,h3:s,h4:s,h5:s,h6:s,head:{children:["title","base","link","style","meta","script","noscript","command"]},header:s,hgroup:s,hr:s,html:{attrs:{manifest:null}},i:s,iframe:{attrs:{src:null,srcdoc:null,name:null,width:null,height:null,sandbox:["allow-top-navigation","allow-same-origin","allow-forms","allow-scripts"],seamless:["seamless"]}},img:{attrs:{alt:null,src:null,ismap:null,usemap:null,width:null,height:null,crossorigin:["anonymous","use-credentials"]}},input:{attrs:{alt:null,dirname:null,form:null,formaction:null,height:null,list:null,max:null,maxlength:null,min:null,name:null,pattern:null,placeholder:null,size:null,src:null,step:null,value:null,width:null,accept:["audio/*","video/*","image/*"],autocomplete:["on","off"],autofocus:["autofocus"],checked:["checked"],disabled:["disabled"],formenctype:Z,formmethod:k,formnovalidate:["novalidate"],formtarget:T,multiple:["multiple"],readonly:["readonly"],required:["required"],type:["hidden","text","search","tel","url","email","password","datetime","date","month","week","time","datetime-local","number","range","color","checkbox","radio","file","submit","image","reset","button"]}},ins:{attrs:{cite:null,datetime:null}},kbd:s,keygen:{attrs:{challenge:null,form:null,name:null,autofocus:["autofocus"],disabled:["disabled"],keytype:["RSA"]}},label:{attrs:{for:null,form:null}},legend:s,li:{attrs:{value:null}},link:{attrs:{href:null,type:null,hreflang:null,media:null,sizes:["all","16x16","16x16 32x32","16x16 32x32 64x64"]}},map:{attrs:{name:null}},mark:s,menu:{attrs:{label:null,type:["list","context","toolbar"]}},meta:{attrs:{content:null,charset:M,name:["viewport","application-name","author","description","generator","keywords"],"http-equiv":["content-language","content-type","default-style","refresh"]}},meter:{attrs:{value:null,min:null,low:null,high:null,max:null,optimum:null}},nav:s,noscript:s,object:{attrs:{data:null,type:null,name:null,usemap:null,form:null,width:null,height:null,typemustmatch:["typemustmatch"]}},ol:{attrs:{reversed:["reversed"],start:null,type:["1","a","A","i","I"]},children:["li","script","template","ul","ol"]},optgroup:{attrs:{disabled:["disabled"],label:null}},option:{attrs:{disabled:["disabled"],label:null,selected:["selected"],value:null}},output:{attrs:{for:null,form:null,name:null}},p:s,param:{attrs:{name:null,value:null}},pre:s,progress:{attrs:{value:null,max:null}},q:{attrs:{cite:null}},rp:s,rt:s,ruby:s,samp:s,script:{attrs:{type:["text/javascript"],src:null,async:["async"],defer:["defer"],charset:M}},section:s,select:{attrs:{form:null,name:null,size:null,autofocus:["autofocus"],disabled:["disabled"],multiple:["multiple"]}},slot:{attrs:{name:null}},small:s,source:{attrs:{src:null,type:null,media:null}},span:s,strong:s,style:{attrs:{type:["text/css"],media:null,scoped:null}},sub:s,summary:s,sup:s,table:s,tbody:s,td:{attrs:{colspan:null,rowspan:null,headers:null}},template:s,textarea:{attrs:{dirname:null,form:null,maxlength:null,name:null,placeholder:null,rows:null,cols:null,autofocus:["autofocus"],disabled:["disabled"],readonly:["readonly"],required:["required"],wrap:["soft","hard"]}},tfoot:s,th:{attrs:{colspan:null,rowspan:null,headers:null,scope:["row","col","rowgroup","colgroup"]}},thead:s,time:{attrs:{datetime:null}},title:s,tr:s,track:{attrs:{src:null,label:null,default:null,kind:["subtitles","captions","descriptions","chapters","metadata"],srclang:null}},ul:{children:["li","script","template","ul","ol"]},var:s,video:{attrs:{src:null,poster:null,width:null,height:null,crossorigin:["anonymous","use-credentials"],preload:["auto","metadata","none"],autoplay:["autoplay"],mediagroup:["movie"],muted:["muted"],controls:["controls"]}},wbr:s},$e={accesskey:null,class:null,contenteditable:S,contextmenu:null,dir:["ltr","rtl","auto"],draggable:["true","false","auto"],dropzone:["copy","move","link","string:","file:"],hidden:["hidden"],id:null,inert:["inert"],itemid:null,itemprop:null,itemref:null,itemscope:["itemscope"],itemtype:null,lang:["ar","bn","de","en-GB","en-US","es","fr","hi","id","ja","pa","pt","ru","tr","zh"],spellcheck:S,autocorrect:S,autocapitalize:S,style:null,tabindex:null,title:null,translate:["yes","no"],rel:["stylesheet","alternate","author","bookmark","help","license","next","nofollow","noreferrer","prefetch","prev","search","tag"],role:"alert application article banner button cell checkbox complementary contentinfo dialog document feed figure form grid gridcell heading img list listbox listitem main navigation region row rowgroup search switch tab table tabpanel textbox timer".split(" "),"aria-activedescendant":null,"aria-atomic":S,"aria-autocomplete":["inline","list","both","none"],"aria-busy":S,"aria-checked":["true","false","mixed","undefined"],"aria-controls":null,"aria-describedby":null,"aria-disabled":S,"aria-dropeffect":null,"aria-expanded":["true","false","undefined"],"aria-flowto":null,"aria-grabbed":["true","false","undefined"],"aria-haspopup":S,"aria-hidden":S,"aria-invalid":["true","false","grammar","spelling"],"aria-label":null,"aria-labelledby":null,"aria-level":null,"aria-live":["off","polite","assertive"],"aria-multiline":S,"aria-multiselectable":S,"aria-owns":null,"aria-posinset":null,"aria-pressed":["true","false","mixed","undefined"],"aria-readonly":S,"aria-relevant":null,"aria-required":S,"aria-selected":["true","false","undefined"],"aria-setsize":null,"aria-sort":["ascending","descending","none","other"],"aria-valuemax":null,"aria-valuemin":null,"aria-valuenow":null,"aria-valuetext":null},ve="beforeunload copy cut dragstart dragover dragleave dragenter dragend drag paste focus blur change click load mousedown mouseenter mouseleave mouseup keydown keyup resize scroll unload".split(" ").map(e=>"on"+e);for(let e of ve)$e[e]=null;var h=class{constructor(t,l){this.tags=Object.assign(Object.assign({},ut),t),this.globalAttrs=Object.assign(Object.assign({},$e),l),this.allTags=Object.keys(this.tags),this.globalAttrNames=Object.keys(this.globalAttrs)}};h.default=new h;function P(e,t,l=e.length){if(!t)return"";let a=t.firstChild,r=a&&a.getChild("TagName");return r?e.sliceString(r.from,Math.min(r.to,l)):""}function $(e,t=!1){for(let l=e.parent;l;l=l.parent)if(l.name=="Element")if(t)t=!1;else return l;return null}function qe(e,t,l){let a=l.tags[P(e,$(t,!0))];return a?.children||l.allTags}function B(e,t){let l=[];for(let a=t;a=$(a);){let r=P(e,a);if(r&&a.lastChild.name=="CloseTag")break;r&&l.indexOf(r)<0&&(t.name=="EndTag"||t.from>=a.firstChild.to)&&l.push(r)}return l}var _e=/^[:\-\.\w\u00b7-\uffff]*$/;function Ve(e,t,l,a,r){let n=/\s*>/.test(e.sliceDoc(r,r+5))?"":">";return{from:a,to:r,options:qe(e.doc,l,t).map(o=>({label:o,type:"type"})).concat(B(e.doc,l).map((o,O)=>({label:"/"+o,apply:"/"+o+n,type:"type",boost:99-O}))),validFor:/^\/?[:\-\.\w\u00b7-\uffff]*$/}}function be(e,t,l,a){let r=/\s*>/.test(e.sliceDoc(a,a+5))?"":">";return{from:l,to:a,options:B(e.doc,t).map((n,o)=>({label:n,apply:n+r,type:"type",boost:99-o})),validFor:_e}}function ct(e,t,l,a){let r=[],n=0;for(let o of qe(e.doc,l,t))r.push({label:"<"+o,type:"type"});for(let o of B(e.doc,l))r.push({label:"</"+o+">",type:"type",boost:99-n++});return{from:a,to:a,options:r,validFor:/^<\/?[:\-\.\w\u00b7-\uffff]*$/}}function pt(e,t,l,a,r){let n=$(l),o=n?t.tags[P(e.doc,n)]:null,O=o&&o.attrs?Object.keys(o.attrs):[],c=o&&o.globalAttrs===!1?O:O.length?O.concat(t.globalAttrNames):t.globalAttrNames;return{from:a,to:r,options:c.map(m=>({label:m,type:"property"})),validFor:_e}}function dt(e,t,l,a,r){var n;let o=(n=l.parent)===null||n===void 0?void 0:n.getChild("AttributeName"),O=[],c;if(o){let m=e.sliceDoc(o.from,o.to),i=t.globalAttrs[m];if(!i){let u=$(l),d=u?t.tags[P(e.doc,u)]:null;i=d?.attrs&&d.attrs[m]}if(i){let u=e.sliceDoc(a,r).toLowerCase(),d='"',p='"';/^['"]/.test(u)?(c=u[0]=='"'?/^[^"]*$/:/^[^']*$/,d="",p=e.sliceDoc(r,r+1)==u[0]?"":u[0],u=u.slice(1),a++):c=/^[^\s<>='"]*$/;for(let f of i)O.push({label:f,apply:d+f+p,type:"constant"})}}return{from:a,to:r,options:O,validFor:c}}function ye(e,t){let{state:l,pos:a}=t,r=q(l).resolveInner(a),n=r.resolve(a,-1);for(let o=a,O;r==n&&(O=n.childBefore(o));){let c=O.lastChild;if(!c||!c.type.isError||c.from<c.to)break;r=n=O,o=c.from}return n.name=="TagName"?n.parent&&/CloseTag$/.test(n.parent.name)?be(l,n,n.from,a):Ve(l,e,n,n.from,a):n.name=="StartTag"?Ve(l,e,n,a,a):n.name=="StartCloseTag"||n.name=="IncompleteCloseTag"?be(l,n,a,a):t.explicit&&(n.name=="OpenTag"||n.name=="SelfClosingTag")||n.name=="AttributeName"?pt(l,e,n,n.name=="AttributeName"?n.from:a,a):n.name=="Is"||n.name=="AttributeValue"||n.name=="UnquotedAttributeValue"?dt(l,e,n,n.name=="Is"?a:n.from,a):t.explicit&&(r.name=="Element"||r.name=="Text"||r.name=="Document")?ct(l,e,n,a):null}function qt(e){return ye(h.default,e)}function ft(e){let{extraTags:t,extraGlobalAttributes:l}=e,a=l||t?new h(t,l):h.default;return r=>ye(a,r)}var we=[{tag:"script",attrs:e=>e.type=="text/typescript"||e.lang=="ts",parser:z.parser},{tag:"script",attrs:e=>e.type=="text/babel"||e.type=="text/jsx",parser:F.parser},{tag:"script",attrs:e=>e.type=="text/typescript-jsx",parser:ee.parser},{tag:"script",attrs(e){return!e.type||/^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^module$|^$/i.test(e.type)},parser:y.parser},{tag:"style",attrs(e){return(!e.lang||e.lang=="css")&&(!e.type||/^(text\/)?(x-)?(stylesheet|css)$/i.test(e.type))},parser:_.parser}],Xe=[{name:"style",parser:_.parser.configure({top:"Styles"})}].concat(ve.map(e=>({name:e,parser:y.parser}))),b=E.define({name:"html",parser:Te.configure({props:[N.add({Element(e){let t=/^(\s*)(<\/)?/.exec(e.textAfter);return e.node.to<=e.pos+t[0].length?e.continue():e.lineIndent(e.node.from)+(t[2]?0:e.unit)},"OpenTag CloseTag SelfClosingTag"(e){return e.column(e.node.from)+e.unit},Document(e){if(e.pos+/\s*/.exec(e.textAfter)[0].length<e.node.to)return e.continue();let t=null,l;for(let a=e.node;;){let r=a.lastChild;if(!r||r.name!="Element"||r.to!=a.to)break;t=a=r}return t&&!((l=t.lastChild)&&(l.name=="CloseTag"||l.name=="SelfClosingTag"))?e.lineIndent(t.from)+e.unit:null}}),U.add({Element(e){let t=e.firstChild,l=e.lastChild;return!t||t.name!="OpenTag"?null:{from:t.to,to:l.name=="CloseTag"?l.from:e.to}}}),K.add({"OpenTag CloseTag":e=>e.getChild("TagName")})],wrap:Y(we,Xe)}),languageData:{commentTokens:{block:{open:"<!--",close:"-->"}},indentOnInput:/^\s*<\/\w+\W$/,wordChars:"-._"}});function _t(e={}){let t="",l;e.matchClosingTags===!1&&(t="noMatch"),e.selfClosingTags===!0&&(t=(t?t+" ":"")+"selfClosing"),(e.nestedLanguages&&e.nestedLanguages.length||e.nestedAttributes&&e.nestedAttributes.length)&&(l=Y((e.nestedLanguages||[]).concat(we),(e.nestedAttributes||[]).concat(Xe)));let a=l||t?b.configure({dialect:t,wrap:l}):b;return new G(a,[b.data.of({autocomplete:ft(e)}),e.autoCloseTags!==!1?mt:[],te().support,H().support])}var mt=D.inputHandler.of((e,t,l,a)=>{if(e.composing||e.state.readOnly||t!=l||a!=">"&&a!="/"||!b.isActiveAt(e.state,t,-1))return!1;let{state:r}=e,n=r.changeByRange(o=>{var O,c,m;let{head:i}=o,u=q(r).resolveInner(i,-1),d;if((u.name=="TagName"||u.name=="StartTag")&&(u=u.parent),a==">"&&u.name=="OpenTag"){if(((c=(O=u.parent)===null||O===void 0?void 0:O.lastChild)===null||c===void 0?void 0:c.name)!="CloseTag"&&(d=P(r.doc,u.parent,i))){let p=e.state.doc.sliceString(i,i+1)===">",f=`${p?"":">"}</${d}>`;return{range:v.cursor(i+1),changes:{from:i+(p?1:0),insert:f}}}}else if(a=="/"&&u.name=="OpenTag"){let p=u.parent,f=p?.parent;if(p.from==i-1&&((m=f.lastChild)===null||m===void 0?void 0:m.name)!="CloseTag"&&(d=P(r.doc,f,i))){let W=e.state.doc.sliceString(i,i+1)===">",R=`/${d}${W?"":">"}`,Ce=i+R.length+(W?1:0);return{range:v.cursor(Ce),changes:{from:i,insert:R}}}}return{range:o}});return n.changes.empty?!1:(e.dispatch(n,{userEvent:"input.type",scrollIntoView:!0}),!0)});export{qt as a,ft as b,b as c,_t as d,mt as e};
