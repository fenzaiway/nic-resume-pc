(window.webpackJsonp=window.webpackJsonp||[]).push([[2,3],{1073:function(t,e,n){var content=n(1081);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(59).default)("e14ec08c",content,!0,{sourceMap:!1})},1074:function(t,e,n){var content=n(1083);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(59).default)("2d0dce34",content,!0,{sourceMap:!1})},1075:function(t,e,n){var content=n(1091);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(59).default)("766d3dba",content,!0,{sourceMap:!1})},1076:function(t,e,n){var content=n(1093);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(59).default)("98e5fc4e",content,!0,{sourceMap:!1})},1077:function(t,e,n){"use strict";n.r(e);var o=function(element,t,e){element.addEventListener?element.addEventListener(t,e,!1):element.attachEvent?element.attachEvent("on"+t,e):element["on"+t]=e};e.default={mounted:function(){this.initNav(),this.windowScroll()},data:function(){return{selectNav:null,currentIndex:0,currentWidth:0,currentLeft:0}},methods:{initNav:function(){var t=this;this.setCurrentNav(this.currentIndex),document.querySelectorAll(".menu li").forEach(function(e,n){o(e,"mouseover",function(n){t.setItemLeftWidth(e)}),o(e,"mouseleave",function(e){t.setCurrentNav(t.currentIndex)}),o(e,"click",function(e){t.currentIndex=n,t.showAppNav=!1,t.scrollTo()})})},setCurrentNav:function(t){this.setItemLeftWidth(document.querySelectorAll(".menu li")[t])},setItemLeftWidth:function(t){this.currentLeft=t.offsetLeft,this.currentWidth=t.offsetWidth},scrollTo:function(){this.ScrollTop(document.querySelectorAll(".nav-item")[this.currentIndex].offsetTop,500)},ScrollTop:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,time=arguments.length>1?arguments[1]:void 0;if(!time)return document.querySelector("body,html").scrollTop=e,e;var n=time/20,o=document.querySelector("body,html").scrollTop,l=(e-o)/n,r=setInterval(function(){n>0?(n--,t.ScrollTop(o+=l)):clearInterval(r)},20)},windowScroll:function(){var t=this,e=[];document.querySelectorAll(".nav-item").forEach(function(t){e.push(t.offsetTop)}),o(window,"scroll",function(n){var o=document.querySelector("body,html").scrollTop,l=e.filter(function(t){return t<o+130});t.currentIndex=l.length>0?l.length-1:0,t.setCurrentNav(t.currentIndex)})}}}},1078:function(t,e,n){t.exports=n.p+"img/50d7a1d.jpeg"},1079:function(t,e,n){t.exports=n.p+"img/6b45c2e.jpeg"},1080:function(t,e,n){"use strict";var o=n(1073);n.n(o).a},1081:function(t,e,n){(t.exports=n(58)(!1)).push([t.i,'.logo{display:flex;justify-content:center}.logo .logo-inner{width:160px;height:160px;line-height:160px;border-radius:50%;box-shadow:0 0 15px #111;margin-bottom:10px;transition:all 1s}.logo .logo-inner:hover{box-shadow:0}.logo .logo-inner:hover:after{content:"";position:absolute;top:0;left:0;-webkit-animation:ripple 1.3s ease-out 75ms;animation:ripple 1.3s ease-out 75ms}.logo .logo-inner:hover:after,.logo img{width:100%;height:100%;border-radius:50%}',""])},1082:function(t,e,n){"use strict";var o=n(1074);n.n(o).a},1083:function(t,e,n){(t.exports=n(58)(!1)).push([t.i,'.timeline-box{width:1280px;padding:20px;border-radius:10px;background:rgba(0,0,0,.3);margin:0 auto;display:flex;flex-direction:column;justify-content:center}.timeline-box .timeline-item{position:relative;width:90%;margin:0 auto}.timeline-box .timeline-item:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;width:2px;margin:0 auto;background:#000}.timeline-box li{position:relative}.timeline-box li:hover .timeline-dots{border-color:#1bacf0;box-shadow:0 0 10px #1bacf0}.timeline-box li:hover .timeline-dots i{color:#1bacf0}.timeline-box li:nth-of-type(odd) .timeline-content{text-align:right}.timeline-box li:nth-of-type(odd) .timeline-content:before{right:-20px;border-left-color:#393c3e}.timeline-box li:nth-of-type(2n) .timeline-content{float:right;text-align:left}.timeline-box li:nth-of-type(2n) .timeline-content:before{left:-20px;border-right-color:#393c3e}.timeline-box li:last-of-type{min-height:50px;margin-bottom:0}.timeline-box li .timeline-dots{position:absolute;top:0;left:50%;width:50px;height:50px;line-height:48px;margin-left:-25px;border:2px solid #393c3e;border-radius:50%;text-align:center;background:#fff;transition:all .3s}.timeline-box li .timeline-dots i{font-size:30px}.timeline-box li .timeline-content{position:relative;width:45%;padding:12px;border-radius:10px;color:#fff;background:#393c3e}.timeline-box li .timeline-content:before{content:"";position:absolute;top:15px;width:0;height:0;border:10px solid transparent}.timeline-box li .timeline-content .title{margin-bottom:10px;font-size:24px;color:#fff}.timeline-box li .timeline-content .post{margin-bottom:10px;font-size:14px;color:#1bacf0}.timeline-box li .timeline-content .desc{line-height:20px;font-size:14px}.timeline-box li .timeline-content .time{height:25px;line-height:25px;margin-top:10px;border-top:1px dashed #fff;font-size:14px}.timeline-box li .timeline-content .time em{font-size:15px}',""])},1084:function(t,e,n){t.exports=n.p+"img/0d6ac2c.jpg"},1085:function(t,e,n){t.exports=n.p+"img/b8d0157.jpg"},1086:function(t,e,n){t.exports=n.p+"img/6bd0ee3.jpg"},1087:function(t,e,n){t.exports=n.p+"img/2775b26.jpg"},1088:function(t,e,n){t.exports=n.p+"img/3f1e0cc.jpg"},1089:function(t,e,n){t.exports=n.p+"img/0920d34.jpg"},1090:function(t,e,n){"use strict";var o=n(1075);n.n(o).a},1091:function(t,e,n){(t.exports=n(58)(!1)).push([t.i,'.container .container-full{width:100%;min-width:320px;height:100vh;display:flex;justify-content:center;align-items:center;text-align:center}.container .container-full .bg{position:fixed;width:100%;height:100%;background-repeat:no-repeat;top:0;z-index:0;opacity:.6}.container .main-detail{position:relative;z-index:1;width:600px;height:400px;border-radius:10px;transition:box-shadow .6s;display:flex;flex-direction:column;align-items:center;justify-content:center}.container .main-detail .circleLight{position:absolute;top:0;left:0;z-index:-1;width:100%;height:100%;background:radial-gradient(circle at 80px,at 40px,#fff,transparent);background:radial-gradient(circle at 80px 40px,#fff,transparent);opacity:0;transition:all .5s}.container .main-detail:hover{box-shadow:0 0 30px #111}.container .main-detail:hover .circleLight{opacity:1}.headline{padding-top:80px;padding-bottom:80px;text-align:center;color:#333}.headline span{font-size:36px;font-family:hyllh}.headline span:nth-of-type(2){padding:0 5px;font-size:30px;text-transform:uppercase;text-shadow:1px 2px 2px #999}.headline span:nth-of-type(2):after,.headline span:nth-of-type(2):before{content:" - "}.headline hr{width:200px;height:5px;margin:10px auto;border:none;background:#333}.title{font-family:SketchFineSerif,Quicksand,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:block;font-weight:300;font-size:70px;color:#35495e;letter-spacing:1px}.ant-back-top-inner{position:fixed;right:0;bottom:10vh;z-index:99;width:50px;height:50px;line-height:50px;border-radius:25px 0 0 25px;text-align:center;color:#fff;background:#393c3e}.ant-back-top-inner i{font-size:20px}.subtitle{font-weight:300;font-size:24px;color:#333;word-spacing:5px;padding-bottom:15px;margin-top:10px}.links{padding-top:15px}.nav-bar{z-index:99;height:50px;padding:0 15px;background:#3f4245;position:relative}.nav-bar .app-nav{display:none}.nav-bar .navmove{display:inline-block;position:absolute;z-index:1;top:10px;left:0;height:30px;border-radius:15px;background:#2b2e31;box-shadow:inset 1px 1px 2px #161819;transition:all .3s ease}.nav-bar .menu{list-style:none}.nav-bar .menu li{float:left;position:relative;z-index:2;height:50px;line-height:50px;text-align:center;color:#fff;cursor:pointer}.nav-bar .menu li span{padding:0 15px}.about-me,.contact-way,.project-exp,.work-exp,.work-skill{width:100%;min-width:320px;min-height:100vh}.about-me-detail{width:1280px;margin:0 auto;display:flex}.about-me-detail .flex-item{min-width:25%}.about-me-detail .flex-item .icon{display:flex;align-items:center;justify-content:center;width:100px;height:100px;line-height:100px;margin:0 auto;border-radius:50%;text-align:center;background:rgba(51,51,51,.6);transition:all .3s}.about-me-detail .flex-item .icon i{font-size:60px;color:#fff}.about-me-detail .flex-item .icon:hover{box-shadow:0 0 20px #888}.about-me-detail .flex-item .info{margin-top:20px}.about-me-detail .flex-item .info p{width:40%;height:30px;line-height:30px;margin:0 auto;font-weight:700;font-size:16px}.about-me-detail .flex-item .info p:nth-of-type(2){position:relative;text-align:right}.about-me-detail .flex-item .info p:nth-of-type(2):before{content:"";position:absolute;top:0;left:0;width:100%;height:2px;background:#333;transform:rotate(-20deg)}.about-me-card{width:640px;margin:80px auto 0;background:rgba(109,104,104,.1);border:0;color:#403f3e;font-size:16px;font-weight:700;display:flex;justify-content:center}.about-me-card:hover{box-shadow:0 0 20px #111}.project-exp-container{width:1280px;margin:0 auto}.project-exp-container .ant-card-body{height:200px}.project-exp-container .ant-card-bordered{border:0 solid #393c3e}.project-exp-container .ant-card-head{color:#fff;border-bottom:0 solid #393c3e}.project-exp-container .ant-card{background:rgba(57,60,62,.3);color:#fff}.project-exp-container .ant-card:hover{box-shadow:0 0 10px #393c3e}.work-skill-container{display:flex;flex-wrap:wrap;justify-content:center}.work-skill-container .flex-item{width:18%;height:300px;margin:0 auto 10vh;perspective:800px;transform-style:preserve-3d}.work-skill-container .flex-item>div{position:absolute;top:0;width:100%;height:100%;border:5px solid #1bacf0;border-radius:15px;background:rgba(57,60,62,.8);transition:1s;-webkit-backface-visibility:hidden;backface-visibility:hidden}.work-skill-container .flex-item:hover .front{transform:rotateY(-180deg)}.work-skill-container .flex-item:hover .back{transform:rotateY(0)}.work-skill-container .flex-item .front{display:flex;flex-wrap:wrap;flex-direction:column;justify-content:center;align-items:center}.work-skill-container .flex-item .front i{font-size:80px;color:#fff}.work-skill-container .flex-item .front i.icon-refresh{margin-top:20px;font-size:24px;-webkit-animation:icon-rotate 1s linear infinite;animation:icon-rotate 1s linear infinite}.work-skill-container .flex-item .front p{width:100%;height:60px;line-height:60px;font-size:24px;font-family:hyllh;text-transform:uppercase;text-align:center;color:#fff;letter-spacing:2px}.work-skill-container .flex-item .back{padding:10px;transform:rotateY(180deg)}.work-skill-container .flex-item .back li{list-style-type:circle;list-style-position:inside;line-height:25px;font-size:14px;color:#fff}.contact-me-container .contact-box{position:relative;width:440px;height:400px;padding:50px;margin:0 auto 10vh}.contact-me-container .contact-box:after,.contact-me-container .contact-box:before{content:"";position:absolute;width:150px;height:80px;color:#393c3e}.contact-me-container .contact-box:before{top:0;right:0;border-top:6px solid;border-right:6px solid}.contact-me-container .contact-box:after{bottom:0;left:0;border-bottom:5px solid;border-left:6px solid}.contact-me-container .contact-box .dream{flex:1;height:30px;line-height:30px;font-size:24px;text-align:center}.contact-me-container .contact-box .dream:first-of-type{color:#88b232}.contact-me-container .contact-box .dream:nth-of-type(2){color:#e7c200}.contact-me-container .contact-box .dream:nth-of-type(3){color:#ae4550}.contact-me-container .contact-box .dream:nth-of-type(4){color:#1bacf0}.contact-me-container .contact-box .passages{margin:30px 0;text-align:center}.contact-me-container .contact-box .passages p{height:30px;line-height:30px;font-size:16px}.contact-me-container .contact-box .flex{display:flex;justify-content:center}.contact-me-container .contact-box .list{display:flex;justify-content:center;align-items:center}.contact-me-container .contact-box .list li{position:relative;width:50px;height:50px;line-height:50px;margin:0 4px;border-radius:50%;text-align:center;background:#4a555d;box-shadow:inset 0 0 3px #282a2d;transition:all .3s}.contact-me-container .contact-box .list li a{position:absolute;top:0;left:0;z-index:2;width:50px;height:50px}.contact-me-container .contact-box .list li i{font-size:24px;color:#fff}.contact-me-container .contact-box .list li .tips{display:none;position:absolute;top:-60px;left:-15px;right:0;min-width:80px;border-radius:5px;text-transform:capitalize;color:#fff;background:#282a2d}.contact-me-container .contact-box .list li .tips:before{content:"";position:absolute;right:0;bottom:-8px;left:0;width:0;height:0;margin:0 auto;border-top:8px solid #282a2d;border-right:8px solid transparent;border-left:8px solid transparent}.contact-me-container .contact-box .list li:hover{background:#282a2d}',""])},1092:function(t,e,n){"use strict";var o=n(1076);n.n(o).a},1093:function(t,e,n){(t.exports=n(58)(!1)).push([t.i,"@media (max-width:768px){.menu{position:absolute;top:50px;left:0;z-index:-1;width:100%;background:rgba(57,60,62,.8)}.menu li{width:100%;height:50px;border-bottom:1px dashed #fff}.container .main-detail{width:96%}.nav-bar .navmove{display:none}.nav-bar .app-nav{font-size:30px;color:#fff;position:relative;top:10px;right:-5px;display:block}.about-me-detail{flex-wrap:wrap;width:100%}.about-me-detail .flex-item{width:50%;margin-bottom:10px}.about-me-card,.timeline-box{width:96%}.timeline-box .timeline-item{margin-bottom:20px}.timeline-box .timeline-item:before{right:auto}.timeline-box li{position:relative}.timeline-box li .timeline-dots{left:0}.timeline-box li .timeline-content{width:96%;margin-left:40px}.timeline-box li:nth-of-type(2n) .timeline-content{float:left}.timeline-box li:nth-of-type(odd) .timeline-content:before{left:-20px;border-right-color:#393c3e;border-left-color:transparent}.timeline-box li:nth-of-type(odd) .timeline-content{text-align:left}.project-exp-container{width:100%}.project-exp-container .ant-row{display:flex;flex-direction:column;align-items:center}.project-exp-container .ant-col-6{width:90%}.work-skill .work-skill-container .flex-item{width:48%;margin:0 1% 10px}.contact-me-container .contact-box{width:100%;margin:0;padding:0}.contact-me-container .contact-box:after,.contact-me-container .contact-box:before{display:none}}",""])},1095:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{logo:n(1079)}}},l=(n(1080),n(76)),r=Object(l.a)(o,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("div",{staticClass:"logo-inner",style:"background:url("+this.logo+") no-repeat 70%;background-size:cover;"})])},[],!1,null,null,null).exports,c={data:function(){return{}}},d=(n(1082),Object(l.a)(c,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ul",{staticClass:"timeline-box"},[n("li",{staticClass:"timeline-item"},[n("div",{staticClass:"timeline-dots"},[n("i",{staticClass:"iconfont icon-foot"})]),t._v(" "),n("div",{staticClass:"timeline-content"},[n("p",{staticClass:"title"},[t._v("深圳市邻家养车信息有限公司")]),t._v(" "),n("p",{staticClass:"post"},[t._v("<前端开发工程师>")]),t._v(" "),n("p",{staticClass:"desc"},[t._v("负责公司SASS管理系统、邻加养车小程序、公司官网前端开发。技术栈：Vue全家桶、wepy")]),t._v(" "),n("p",{staticClass:"time"},[t._v("2018年"),n("em",[t._v("7月")]),t._v("~2019年"),n("em",[t._v("6月")])])])]),t._v(" "),n("li",{staticClass:"timeline-item"},[n("div",{staticClass:"timeline-dots"},[n("i",{staticClass:"iconfont icon-foot"})]),t._v(" "),n("div",{staticClass:"timeline-content"},[n("p",{staticClass:"title"},[t._v("深圳市法义网络科技有限公司")]),t._v(" "),n("p",{staticClass:"post"},[t._v("<法义网络 / 前端开发工程师>")]),t._v(" "),n("p",{staticClass:"desc"},[t._v("负责公司内部运营系统开发维护，法义用户端、律师的PC网页前端开发。技术栈：Vue全家桶、doT模板引擎、node")]),t._v(" "),n("p",{staticClass:"time"},[t._v("2017年"),n("em",[t._v("8月")]),t._v("~2018年"),n("em",[t._v("7月")])])])]),t._v(" "),n("li",{staticClass:"timeline-item"},[n("div",{staticClass:"timeline-dots"},[n("i",{staticClass:"iconfont icon-foot"})]),t._v(" "),n("div",{staticClass:"timeline-content"},[n("p",{staticClass:"title"},[t._v("彩讯科技股份有限公司")]),t._v(" "),n("p",{staticClass:"post"},[t._v("<前端开发工程师>")]),t._v(" "),n("p",{staticClass:"desc"},[t._v("负责企业邮箱维护,问卷调查、办公空间项目前端开发。技术栈： Jquery、JSP、Seajs、Backbone、Vuejs全家桶")]),t._v(" "),n("p",{staticClass:"time"},[t._v("2015年"),n("em",[t._v("7月")]),t._v("~2017年"),n("em",[t._v("8月")])])])]),t._v(" "),n("li",{staticClass:"timeline-item"},[n("div",{staticClass:"timeline-dots"},[n("i",{staticClass:"iconfont icon-foot"})]),t._v(" "),n("div",{staticClass:"timeline-content"},[n("p",{staticClass:"title"},[t._v("深圳市路通网络科技有限公司")]),t._v(" "),n("p",{staticClass:"post"},[t._v("<新业务部 / Java工程师>")]),t._v(" "),n("p",{staticClass:"desc"},[t._v("负责公司TV商城前后端开发，行业广告应用平台开发。项目技术栈： Java、JSP、Jquery、Bootstrap")]),t._v(" "),n("p",{staticClass:"time"},[t._v("2013年"),n("em",[t._v("3月")]),t._v("~2015年"),n("em",[t._v("7月")])])])])])])}],!1,null,null,null).exports),v=n(1096),f=n(1077),m=v.a.createFromIconfontCN({scriptUrl:"//at.alicdn.com/t/font_1232920_w36amvz0cgs.js"}),h={mixins:[f.default],components:{Logo:r,Timeline:d,IconFont:m},mounted:function(){},data:function(){return{navTop:0,showAppNav:!1,bgImg:[n(1084),n(1085),n(1086),n(1087),n(1088),n(1089)],expList:[{title:"武汉电信开机广告系统",desc:"\n            <ul>\n              <li>1. 使用easyui+jquery+bootstrap实现后台系统拖拽生成epg页面</li>\n              <li>2. 后台Java解析模板页面读取保存页面数据</li>\n              <li>3. 日历组件广告排期</li>\n              <li>4. 系统权限管理</li>\n            </ul>\n          "},{title:"江苏电信IPTV电视商城",desc:"\n            <ul>\n              <li>1. 商城后端业务逻辑开发（JAVA+Mysql）</li>\n              <li>2. 商城前端TV页面开发(JS+JSP)</li>\n            </ul>\n          "},{title:"个人博客",desc:"\n            <ul>\n              <li>1. thinkjs开发后端接口（thinkjs+mysql）</li>\n              <li>2.前端页面数据渲染（ Nuxt+iview）</li>\n              <li>3.公众号发送文本数据交互</li>\n              <li>4.博客小程序（小程序组件）</li>\n            </ul>\n          "},{title:"移动办公空间",desc:"\n            <ul>\n              <li>1. vue全家桶（vuex+vue-router）</li>\n              <li>2.通用API模块开发</li>\n              <li>3.基于webuploader开发支持vue上传插件</li>\n              <li>4.基于zTree开发支持vue调用树插件</li>\n              <li>5.编写table插件、弹框插件、消息插件、通知插件、分页插件</li>\n            </ul>\n          "},{title:"移动问卷调查系统",desc:"\n            <ul>\n              <li>1. 基于Seajs+Backbone</li>\n              <li>2. 提供单选题、多选题、问答题题目创建、背景切换功能</li>\n              <li>3. 对接邮箱系统发送问卷功能</li>\n              <li>4. 问卷答题提交收集功能</li>\n            </ul>\n          "},{title:"法义用户端、律师端框架搭建",desc:"\n            <ul>\n              <li>1. 基于Vue全家桶，公司内部聊天插件（vue+vuex+vue-router+axios）</li>\n              <li>2. 提供用户对接律师、律师接案与客户对话功能</li>\n              <li>3. 基于webpack、Shell、Jenkins编写自动化部署功能</li>\n            </ul>\n          "},{title:"邻加SASS管理功能",desc:"\n            <ul>\n              <li>1. 基于Vue全家桶（vue+vuex+vue-router+axios）</li>\n              <li>2. 提供权限管理、客户信息管理、订单管理、库存管理、报表管理、设备管理、买单等功能</li>\n            </ul>\n          "},{title:"邻加养车小程序",desc:"\n            <ul>\n              <li>1. 基于wepy+Vant-Weapp</li>\n              <li>2. 提供客户充值、下单、存钥匙、取钥匙、订单查询、余额账单查询等功能</li>\n            </ul>\n          "}]}},methods:{showAppNavHandler:function(){this.showAppNav=!this.showAppNav}}},x=(n(1090),n(1092),Object(l.a)(h,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("div",{staticClass:"container-full"},[o("div",{staticClass:"bg",style:"background:url("+t.bgImg[1]+")"}),t._v(" "),o("div",{staticClass:"circleLight",staticStyle:{background:"radial-gradient(circle at 0px 0px, rgb(254, 255, 251), transparent)"}}),t._v(" "),o("div",{staticClass:"main-detail"},[o("logo"),t._v(" "),o("h1",{staticClass:"title"},[t._v("\n          hello, i'm Nicholas\n        ")]),t._v(" "),o("h2",{staticClass:"subtitle"},[t._v("\n          前端开发工程师\n        ")])],1)]),t._v(" "),o("a-affix",{attrs:{offsetTop:this.navTop}},[o("nav",{staticClass:"nav-bar clear"},[o("div",{staticClass:"navmove",style:"left: "+t.currentLeft+"px; width: "+t.currentWidth+"px;"}),t._v(" "),o("transition",{attrs:{name:"custom-classes-transition","enter-active-class":"animated fadeInDown","leave-active-class":"animated slideOutUp",duration:500}},[o("ul",{directives:[{name:"show",rawName:"v-show",value:t.showAppNav,expression:"showAppNav"}],staticClass:"menu f-r"},[o("li",{class:{active:0==t.currentIndex}},[o("span",[t._v("关于我")])]),t._v(" "),o("li",{class:{active:1==t.currentIndex}},[o("span",[t._v("工作经历")])]),t._v(" "),o("li",{class:{active:2==t.currentIndex}},[o("span",[t._v("项目经验")])]),t._v(" "),o("li",{class:{active:3==t.currentIndex}},[o("span",[t._v("工作技能")])]),t._v(" "),o("li",{class:{active:4==t.currentIndex}},[o("span",[t._v("联系方式")])])])]),t._v(" "),o("a-icon",{staticClass:"f-r app-nav",attrs:{type:"bars"},on:{click:t.showAppNavHandler}})],1)]),t._v(" "),o("div",{staticClass:"nav-item about-me"},[t._m(0),t._v(" "),t._m(1),t._v(" "),o("a-card",{staticClass:"about-me-card"},[o("p",[t._v("分配的任务，高效、高质量完成，避免项目延期")]),t._v(" "),o("p",[t._v("关注前端发展，拥抱开源")]),t._v(" "),o("p",[t._v("掌握前端线上调试技巧，解决疑难杂症")]),t._v(" "),o("p",[t._v("爱好看书、爬山、跑步、骑行、篮球、徒步")]),t._v(" "),o("p",[t._v("喜欢分享，创造快乐")]),t._v(" "),o("p",[t._v("性格慢热安静，沉着冷静，喜欢独立思考")])])],1),t._v(" "),o("div",{staticClass:"nav-item work-exp"},[t._m(2),t._v(" "),o("div",[o("Timeline")],1)]),t._v(" "),o("div",{staticClass:"nav-item project-exp"},[t._m(3),t._v(" "),o("div",{staticClass:"project-exp-container"},[o("a-list",{attrs:{grid:{gutter:16,column:4},dataSource:t.expList},scopedSlots:t._u([{key:"renderItem",fn:function(e,n){return o("a-list-item",{},[o("a-card",{attrs:{title:e.title}},[o("div",{domProps:{innerHTML:t._s(e.desc)}})])],1)}}])})],1)]),t._v(" "),o("div",{staticClass:"nav-item work-skill"},[t._m(4),t._v(" "),o("div",{staticClass:"work-skill-container"},[o("div",{staticClass:"flex-item  fadeIn animated",attrs:{"data-wow-duration":"1s","data-wow-delay":"0.4s"}},[o("div",{staticClass:"front"},[o("icon-font",{attrs:{type:"icon-vuejs"}}),t._v(" "),o("p",[t._v("VUE")])],1),t._v(" "),t._m(5)]),t._v(" "),t._m(6),t._v(" "),o("div",{staticClass:"flex-item  fadeIn animated",attrs:{"data-wow-duration":"1s","data-wow-delay":"0.4s"}},[o("div",{staticClass:"front"},[o("icon-font",{attrs:{type:"icon-jquery"}}),t._v(" "),o("p",[t._v("jquery")])],1),t._v(" "),t._m(7)]),t._v(" "),o("div",{staticClass:"flex-item  fadeIn animated",attrs:{"data-wow-duration":"1s","data-wow-delay":"0.4s"}},[o("div",{staticClass:"front"},[o("icon-font",{attrs:{type:"icon-linux"}}),t._v(" "),o("p",[t._v("linux")])],1),t._v(" "),t._m(8)]),t._v(" "),o("div",{staticClass:"flex-item  fadeIn animated",attrs:{"data-wow-duration":"1s","data-wow-delay":"0.4s"}},[o("div",{staticClass:"front"},[o("icon-font",{attrs:{type:"icon-xiaochengxu"}}),t._v(" "),o("p",[t._v("小程序")])],1),t._v(" "),t._m(9)])])]),t._v(" "),o("div",{staticClass:"nav-item contact-way"},[t._m(10),t._v(" "),o("div",{staticClass:"contact-me-container"},[o("div",{staticClass:"contact-box  fadeIn animated",staticStyle:{visibility:"visible","animation-duration":"1s","animation-name":"fadeIn"},attrs:{"data-wow-duration":"1s"}},[t._m(11),t._v(" "),t._m(12),t._v(" "),o("div",{staticClass:"cont-row"},[o("ul",{staticClass:"list"},[o("li",[o("a-tooltip",{attrs:{placement:"top"}},[o("template",{slot:"title"},[o("span",[t._v("https://github.com/fenzaiway")])]),t._v(" "),o("i",{staticClass:"iconfont icon-github"}),t._v(" "),o("span",{staticClass:"tips",staticStyle:{display:"none"}},[t._v("Github")]),t._v(" "),o("a",{attrs:{href:"https://github.com/fenzaiway",target:"_blank"}})],2)],1),t._v(" "),o("li",[o("a-tooltip",{attrs:{placement:"top"}},[o("template",{slot:"title"},[o("span",[t._v("fenzaiway@qq.com")])]),t._v(" "),o("i",{staticClass:"iconfont icon-email"}),t._v(" "),o("span",{staticClass:"tips",staticStyle:{display:"none"}},[t._v("Email")]),t._v(" "),o("a",{attrs:{href:"mailto:fenzaiway@qq.com",target:"_blank"}})],2)],1),t._v(" "),o("li",[o("a-tooltip",{attrs:{placement:"top"}},[o("template",{slot:"title"},[o("span",[t._v("376231436")])]),t._v(" "),o("i",{staticClass:"iconfont icon-qq"}),t._v(" "),o("span",{staticClass:"tips",staticStyle:{display:"none"}},[t._v("QQ")]),t._v(" "),o("a",{attrs:{href:"http://wpa.qq.com/msgrd?v=3&uin=376231426&site=qq&menu=yes",target:"_blank"}})],2)],1),t._v(" "),o("li",[o("a-tooltip",{attrs:{placement:"top"}},[o("template",{slot:"title"},[o("img",{staticStyle:{width:"100px",height:"100px"},attrs:{src:n(1078),alt:""}})]),t._v(" "),o("i",{staticClass:"iconfont icon-wechat"}),t._v(" "),o("span",{staticClass:"tips",staticStyle:{display:"none"}},[t._v("Wechat")]),t._v(" "),o("a",{attrs:{href:"javascript:void(0);",target:"_blank"}})],2)],1)])])])])]),t._v(" "),o("a-back-top",[o("div",{staticClass:"ant-back-top-inner"},[o("a-icon",{attrs:{type:"up"}})],1)])],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"headline  fadeIn animated",staticStyle:{visibility:"visible","animation-duration":"1s","animation-name":"fadeIn"},attrs:{"data-wow-duration":"1s"}},[e("span",[this._v("关于我")]),this._v(" "),e("hr"),this._v(" "),e("span",[this._v("About Me")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about-me-detail flex-wrap"},[n("div",{staticClass:"flex-item  fadeIn animated",staticStyle:{visibility:"visible","animation-duration":"1s","animation-delay":"0s","animation-name":"fadeIn"},attrs:{"data-wow-duration":"1s","data-wow-delay":"0s"}},[n("div",{staticClass:"icon"},[n("i",{staticClass:"iconfont icon-age"})]),t._v(" "),n("div",{staticClass:"info"},[n("p",[t._v("年龄")]),t._v(" "),n("p",[t._v("29")])])]),t._v(" "),n("div",{staticClass:"flex-item  fadeIn animated",staticStyle:{visibility:"visible","animation-duration":"1s","animation-delay":"0.1s","animation-name":"fadeIn"},attrs:{"data-wow-duration":"1s","data-wow-delay":"0.1s"}},[n("div",{staticClass:"icon"},[n("i",{staticClass:"iconfont icon-edu"})]),t._v(" "),n("div",{staticClass:"info"},[n("p",[t._v("学历")]),t._v(" "),n("p",[t._v("本科")])])]),t._v(" "),n("div",{staticClass:"flex-item  fadeIn animated",staticStyle:{visibility:"visible","animation-duration":"1s","animation-delay":"0.2s","animation-name":"fadeIn"},attrs:{"data-wow-duration":"1s","data-wow-delay":"0.2s"}},[n("div",{staticClass:"icon"},[n("i",{staticClass:"iconfont icon-site"})]),t._v(" "),n("div",{staticClass:"info"},[n("p",[t._v("坐标")]),t._v(" "),n("p",[t._v("深圳")])])]),t._v(" "),n("div",{staticClass:"flex-item  fadeIn animated",staticStyle:{visibility:"visible","animation-duration":"1s","animation-delay":"0.3s","animation-name":"fadeIn"},attrs:{"data-wow-duration":"1s","data-wow-delay":"0.3s"}},[n("div",{staticClass:"icon"},[n("i",{staticClass:"iconfont icon-status"})]),t._v(" "),n("div",{staticClass:"info"},[n("p",[t._v("状态")]),t._v(" "),n("p",[t._v("离职")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"headline  fadeIn animated",staticStyle:{visibility:"visible","animation-duration":"1s","animation-name":"fadeIn"},attrs:{"data-wow-duration":"1s"}},[e("span",[this._v("工作经历")]),this._v(" "),e("hr"),this._v(" "),e("span",[this._v("Work Experience")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"headline  fadeIn animated",staticStyle:{visibility:"visible","animation-duration":"1s","animation-name":"fadeIn"},attrs:{"data-wow-duration":"1s"}},[e("span",[this._v("项目经验")]),this._v(" "),e("hr"),this._v(" "),e("span",[this._v("Project Experience")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"headline  fadeIn animated",staticStyle:{visibility:"visible","animation-duration":"1s","animation-name":"fadeIn"},attrs:{"data-wow-duration":"1s"}},[e("span",[this._v("技能")]),this._v(" "),e("hr"),this._v(" "),e("span",[this._v("Work Skills")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"back"},[e("ul",[e("li",[this._v("熟练掌握VUE基础语法与接口")]),this._v(" "),e("li",[this._v("熟悉VUE周边相关库与插件使用")]),this._v(" "),e("li",[this._v("掌握VUE插件开发、自定义指令、组件交互")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex-item  fadeIn animated",attrs:{"data-wow-duration":"1s","data-wow-delay":"0.4s"}},[n("div",{staticClass:"front"},[n("i",{staticClass:"iconfont icon-js"}),t._v(" "),n("p",[t._v("JS")])]),t._v(" "),n("div",{staticClass:"back"},[n("ul",[n("li",[t._v("熟悉JS相关基础")]),t._v(" "),n("li",[t._v("掌握JS原型链")]),t._v(" "),n("li",[t._v("掌握JS核心功能")]),t._v(" "),n("li",[t._v("掌握调试技巧")]),t._v(" "),n("li",[t._v("手写原生代码")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"back"},[e("ul",[e("li",[this._v("熟悉基本API")]),this._v(" "),e("li",[this._v("可编写插件")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"back"},[e("ul",[e("li",[this._v("了解简单的linux脚本")]),this._v(" "),e("li",[this._v("linux上部署项目经验")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"back"},[e("ul",[e("li",[this._v("了解小程序相关接口组件")]),this._v(" "),e("li",[this._v("掌握wepy开发小程序技巧")]),this._v(" "),e("li",[this._v("了解小程序上线流程")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"headline  fadeIn animated",staticStyle:{visibility:"visible","animation-duration":"1s","animation-name":"fadeIn"},attrs:{"data-wow-duration":"1s"}},[e("span",[this._v("联系方式")]),this._v(" "),e("hr"),this._v(" "),e("span",[this._v("Contact")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"cont-row flex"},[e("em",{staticClass:"dream"},[this._v("灵感")]),this._v(" "),e("em",{staticClass:"dream"},[this._v("代码")]),this._v(" "),e("em",{staticClass:"dream"},[this._v("梦想")]),this._v(" "),e("em",{staticClass:"dream"},[this._v("未来")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cont-row passages"},[n("p",[t._v("学习是一个充实愉悦的过程")]),t._v(" "),n("p",[t._v("注重效率，偏爱敏捷开发")]),t._v(" "),n("p",[t._v("喜欢尝试，期待新鲜事物")]),t._v(" "),n("p",[t._v("前端即兴趣，兴趣即未来")]),t._v(" "),n("p",[t._v("行路有良友，便是捷径")])])}],!1,null,null,null));e.default=x.exports}}]);