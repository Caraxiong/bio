webpackJsonp([0],[,,,,,function(e,n,t){"use strict";t(8),e.exports={data:function(){return{imgs:[],rImgs:[],originalrImgs:[],isRandom:!0,isShow:!1,isTake:!1,isCompare:!1,number:"",rmImg:""}},mounted:function(){this.$nextTick(function(){this.getImgs()})},methods:{getImgs:function(){this.imgs=t(10).list2},randomImgs:function(e,n){for(var t=e.length,s=[],o=262,i=262,r=document.documentElement.scrollTop||document.body.scrollTop,l=(window.innerWidth-o)/2,a=r>0?(window.innerHeight-i)/2+r:(window.innerHeight-i)/2,m=0;m<n&&t>0;m++){var u=Math.floor(Math.random()*t),g=document.querySelectorAll(".img-b")[u],c=g.getBoundingClientRect().left-l,d=r>0?g.getBoundingClientRect().top-a+r:g.getBoundingClientRect().top-a;g.style.zIndex=1002,g.style.transform="translate("+-c+"px,"+-d+"px)";var f=!0;if(s.length>0)for(var p=0;p<s.length;p++)if(s[p].url==e[u].url){f=!1,m-=1;break}f&&s.push({index:u,url:e[u].url}),console.log(s)}var v=document.createElement("div");return v.setAttribute("id","myDiv"),v.style.width=o+"px",v.style.height=i+"px",v.style.position="absolute",v.style.left=l+"px",v.style.top=a+"px",v.style.background="#fff",v.style.zIndex=1001,document.body.appendChild(v),s},randomTake:function(e){var n=this,t=e.length,s=Math.floor(Math.random()*t),o=e[s].index;return n.animate(s,e,document.querySelectorAll(".img-b"),0,0),n.rmImg=e.splice(s,1),n.originalrImgs=e.concat({index:o,val:e[s],left:0,top:0}),e},animate:function(e,n,t,s,o){var i=n[e].index,r=t[i];r.style.zIndex=1,r.style.transform="translate(0px,0px)",r.style.transition="all "+o+"s ease",r.style.opacity=s},zoomIn:function(e,n){var t=e[0].index,s=n[t];s.style.transform="scale(2)",s.style.transition="all .8s ease"},zoomOut:function(e,n){var t=e[0].index,s=n[t];s.style.transform="scale(1)",s.style.transition="all 0s ease"},generate:function(){var e=this;e.isShow=!1,e.isTake=!1,e.isCompare=!1,e.rmImg&&e.zoomOut(e.rmImg,document.querySelectorAll(".img-b")),e.number&&e.number<e.imgs.length&&e.number>0?(e.isRandom=!1,e.isShow=!0,e.isTake=!0,e.rImgs=e.randomImgs(e.imgs,e.number)):alert("请输入正确数值")},extract:function(e){var n=this;n.isTake=!1,n.isCompare=!0,n.randomTake(n.rImgs)},contrast:function(){var e=this,n=e.originalrImgs.length,t=e.rImgs.length,s=[];e.isShow=!1,e.isCompare=!1,e.isRandom=!0,document.body.removeChild(document.getElementById("myDiv")),e.originalrImgs.forEach(function(e,n){s.push(e)});for(var o=function(n){for(var o=t-1;o>=0;o--)e.originalrImgs[n]==e.rImgs[o]&&(e.originalrImgs.splice(n,1),e.rImgs.splice(o,1));!function(){e.animate(n,s,document.querySelectorAll(".img-b"),1,.8)}(n)},i=n-1;i>=0;i--)o(i);e.zoomIn(e.rmImg,document.querySelectorAll(".img-b"))}}}},function(e,n,t){"use strict";t(9),e.exports={data:function(){return{list:[],level:1,mouseX:0,mouseY:0,rollTimeout:-1,rollInterval:-1}},mounted:function(){this.$nextTick(function(){this.getList()})},methods:{getList:function(){var e=this;this.list=t(11),e.isSupportsTransforms()&&(document.body.style.transition="transfrom 0.8s ease",document.body.style.OTransition="-o-transform 0.8s ease",document.body.style.msTransition="-ms-transform 0.8s ease",document.body.style.MozTransition="-moz-transform 0.8s ease",document.body.style.WebkitTransition="-webkit-transform 0.8s ease"),document.addEventListener("keyup",function(n){1!==e.level&&27===n.keyCode&&e.zoomOut()}),document.addEventListener("mousemove",function(n){1!==e.level&&(e.mouseX=n.clientX,e.mouseY=n.clientY)})},isSupportsTransforms:function(){return"WebkitTransform"in document.body.style||"MozTransform"in document.body.style||"msTransform"in document.body.style||"OTransform"in document.body.style||"transform"in document.body.style},getScrollOffset:function(){return{x:void 0!==window.scrollX?window.scrollX:window.pageXOffset,y:void 0!==window.scrollY?window.scrollY:window.pageYOffset}},magnify:function(e,n,t,s,o){var i=e+"px "+n+"px",r="translate("+-t+"px,"+-s+"px) scale("+o+")";document.body.style.transformOrigin=i,document.body.style.transform=r,this.level=o},zoomOut:function(){var e=this,n=e.getScrollOffset();clearTimeout(e.rollTimeout),clearInterval(e.rollInterval),e.magnify(n.x,n.y,0,0,1),e.level=1},zoomInOrOut:function(e){var n=this,t=20,s=e.target,o={};if(1==n.level){if(o.x=s.getBoundingClientRect().left-t,o.y=s.getBoundingClientRect().top-t,o.w=s.getBoundingClientRect().width+2*t,o.h=s.getBoundingClientRect().height+2*t,o.scale=Math.max(Math.min(window.innerWidth/o.w,window.innerHeight/o.h),1),o.scale>1){o.x*=o.scale,o.y*=o.scale;var i=n.getScrollOffset();n.magnify(i.x,i.y,o.x,o.y,o.scale),n.rollTimeout=setTimeout(function(){n.rollInterval=setInterval(n.roll,1e3/60)},800)}}else n.zoomOut()},roll:function(){var e=this,n=.12,t=window.innerWidth*n,s=window.innerHeight*n,o=e.getScrollOffset();e.mouseY<s?window.scroll(o.x,o.y-(1-e.mouseY/s)*(14/e.level)):e.mouseY>window.innerHeight-s&&window.scroll(o.x,o.y+(1-(window.innerHeight-e.mouseY)/s)*(14/e.level)),e.mouseX<t?window.scroll(o.x-(1-e.mouseX/t)*(14/e.level),o.y):e.mouseX>window.innerWidth-t&&window.scroll(o.x+(1-(window.innerWidth-e.mouseX)/t)*(14/e.level),o.y)}}}},,function(e,n){},function(e,n){},function(e,n){e.exports={list1:[{url:"imgs/game/0.png",des:"0"},{url:"imgs/game/1.png",des:"1"},{url:"imgs/game/2.png",des:"2"},{url:"imgs/game/3.png",des:"3"},{url:"imgs/game/4.png",des:"4"},{url:"imgs/game/5.png",des:"5"},{url:"imgs/game/6.png",des:"6"},{url:"imgs/game/7.png",des:"7"},{url:"imgs/game/8.png",des:"8"},{url:"imgs/game/9.png",des:"9"}],list2:[{url:"imgs/game/a1.png",des:"飞机"},{url:"imgs/game/a2.png",des:"鱼"},{url:"imgs/game/a3.png",des:"青蛙"},{url:"imgs/game/a4.png",des:"马"},{url:"imgs/game/a5.png",des:"裙子"},{url:"imgs/game/a6.png",des:"老虎"},{url:"imgs/game/a7.png",des:"兔子"},{url:"imgs/game/a8.png",des:"猪"},{url:"imgs/game/a9.png",des:"闹钟"},{url:"imgs/game/a10.png",des:"啤酒"},{url:"imgs/game/a11.png",des:"蛋糕"},{url:"imgs/game/a12.png",des:"蜡烛"},{url:"imgs/game/a13.png",des:"鸡"},{url:"imgs/game/a14.png",des:"熊猫"},{url:"imgs/game/a15.png",des:"羊"},{url:"imgs/game/a16.png",des:"酒杯"}]}},function(e,n){e.exports=[{section:"几场梅雨，几卷荷风，江南已是烟水迷离。小院里湿润的青苔在雨中纯净生长。这个季节，许多人都在打听关于莲荷的消息，以及茉莉在黄昏浮动的神秘幽香。不知多少人会记得有个女子，曾经走过人间四月天，又与莲开的夏季有过相濡以沫的约定。"},{section:"时光微凉，那一场远去的往事被春水浸泡，秋风吹拂，早已洗去铅华，清绝明净。以为历经人生匆匆聚散，尝过尘世种种烟火，应该承担岁月带给我们的沧桑。可流年分明安然无恙，而山石草木是这样毫发无伤。只是曾经许过地老天荒的城，在细雨中越发地清瘦单薄。 "},{section:"青梅煎好的茶水，还是当年的味道；而我们等候的人，不会再来。后来才知道，那一袭素色白衣的女子已化身为燕，去寻觅水乡旧巢。她走过的地方，有一树一树的花开，她呢喃的梁间，还留着余温犹存的梦。有人说，她是个冰洁的女子，所以无论人世如何变迁，她都有着美丽的容颜。有人说，她是个理智的女子，不管面临怎样的诱惑，最后都可以全身而退。"},{section:"她叫林徽因，出生于杭州，是许多人梦中期待的白莲。她在雨雾之都伦敦，发生过一场空前绝后的康桥之恋。她爱过三个男子，爱得清醒，也爱得平静。徐志摩为她徜徉在康桥，深情地等待一场旧梦可以归来。梁思成与她携手走过千山万水，为完成使命而相约白头。金岳霖为她终身不娶，痴心不改地守候一世。可她懂得人生飘忽不定，要学会随遇而安。"},{section:"所以，当爱情接踵而至时，她会做短暂的停留，又义无反顾地离开。看着她决绝的背影，又无比的优雅，那时候，仿佛连一声珍重都是多余。她让每一次转身都成隔世，又让每一次相逢都成永远。她总是那样洁净，任凭世事万象丛生，她的内心始终山明水秀、一清二白。"},{section:"终于明白，有些路，只能一个人走。那些邀约好同行的人，一起相伴雨季，走过年华，但有一天终究会在某个渡口离散。红尘陌上，独自行走，绿萝拂过衣襟，青云打湿诺言。山和水可以两两相忘，日与月可以毫无瓜葛。那时候，只一个人的浮世清欢，一个人的细水长流。"},{section:"真正的平静，不是避开车马喧嚣，而是在心中修篱种菊。尽管如流往事，每一天都涛声依旧，只要我们消除执念，便可寂静安然。愿每个人在纷呈世相中不会迷失荒径，可以端坐磐石上，醉倒落花前。"},{section:"如果可以，请让我预支一段如莲的时光，哪怕将来某一天加倍偿还。这个雨季会在何时停歇，无从知晓。但我知道，你若安好，便是晴天。"}]},,function(e,n,t){var s=t(1)(t(5),t(17),null,null);e.exports=s.exports},function(e,n,t){var s=t(1)(t(6),t(15),null,null);e.exports=s.exports},function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"intro-box"},e._l(e.list,function(n){return t("section",{on:{click:function(n){e.zoomInOrOut(n)}}},[e._v(e._s(n.section))])}))},staticRenderFns:[]}},,function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("div",{staticClass:"btn-b"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.number,expression:"number"}],attrs:{type:"text",placeholder:"请输入数值"},domProps:{value:e.number},on:{input:function(n){n.target.composing||(e.number=n.target.value)}}}),e._v(" "),t("button",{directives:[{name:"show",rawName:"v-show",value:e.isRandom,expression:"isRandom"}],staticClass:"btn",on:{click:e.generate}},[e._v("随机生成")]),e._v(" "),t("button",{directives:[{name:"show",rawName:"v-show",value:e.isTake,expression:"isTake"}],staticClass:"btn",on:{click:e.extract}},[e._v("随机抽取")]),e._v(" "),t("button",{directives:[{name:"show",rawName:"v-show",value:e.isCompare,expression:"isCompare"}],staticClass:"btn",on:{click:e.contrast}},[e._v("对比")])]),e._v(" "),e._l(e.imgs,function(e){return t("div",{staticClass:"img-b"},[t("img",{attrs:{src:e.url,title:e.des}})])}),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:e.isShow,expression:"isShow"}],staticClass:"overlay"})],2)},staticRenderFns:[]}}]);