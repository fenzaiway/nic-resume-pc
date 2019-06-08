<template>
  <div class="container">
    <!-- 首屏 -->
    <div class="container-full">
      <div class="bg" :style="`background:url(${bgImg[1]})`"></div>
      <div class="circleLight" style="background: radial-gradient(circle at 0px 0px, rgb(254, 255, 251), transparent);"></div>
      <div class="main-detail">
        <logo />
        <h1 class="title">
          hello, i'm Nicholas
        </h1>
        <h2 class="subtitle">
          前端开发工程师
        </h2>
      </div>
    </div>
    <!-- 导航 -->
    <a-affix :offsetTop="this.navTop">
      <nav class="nav-bar">
          <div class="navmove" style="left: 970px; width: 78px;"></div>
          <ul class="menu f-r">
            <li class="active"><span>关于我</span></li>
            <li class=""><span>工作经历</span></li>
            <li class=""><span>项目经验</span></li>
            <li class=""><span>工作技能</span></li>
            <li class=""><span>联系方式</span></li>
          </ul>
      </nav>
    </a-affix>
    <!-- 关于我 -->
    <div class="about-me">
      <div class="headline  fadeIn animated" data-wow-duration="1s" style="visibility: visible; animation-duration: 1s; animation-name: fadeIn;">
				<span>关于我</span>
				<hr>
				<span>About Me</span>
			</div>
      <div class="about-me-detail flex-wrap">
				<div class="flex-item  fadeIn animated" data-wow-duration="1s" data-wow-delay="0s" style="visibility: visible; animation-duration: 1s; animation-delay: 0s; animation-name: fadeIn;">
					<div class="icon">
						<i class="iconfont icon-age"></i>
					</div>
					<div class="info">
						<p>年龄</p>
						<p>29</p>
					</div>
				</div>
				<div class="flex-item  fadeIn animated" data-wow-duration="1s" data-wow-delay="0.1s" style="visibility: visible; animation-duration: 1s; animation-delay: 0.1s; animation-name: fadeIn;">
					<div class="icon">
						<i class="iconfont icon-edu"></i>
					</div>
					<div class="info">
						<p>学历</p>
						<p>本科</p>
					</div>
				</div>
				<div class="flex-item  fadeIn animated" data-wow-duration="1s" data-wow-delay="0.2s" style="visibility: visible; animation-duration: 1s; animation-delay: 0.2s; animation-name: fadeIn;">
					<div class="icon">
						<i class="iconfont icon-site"></i>
					</div>
					<div class="info">
						<p>坐标</p>
						<p>深圳</p>
					</div>
				</div>
				<div class="flex-item  fadeIn animated" data-wow-duration="1s" data-wow-delay="0.3s" style="visibility: visible; animation-duration: 1s; animation-delay: 0.3s; animation-name: fadeIn;">
					<div class="icon">
						<i class="iconfont icon-status"></i>
					</div>
					<div class="info">
						<p>状态</p>
						<p>离职</p>
					</div>
				</div>
			</div>
      <a-card class="about-me-card">
        <p>分配的任务，高效、高质量完成，避免项目延期</p>
        <p>关注前端发展，拥抱开源</p>
        <p>掌握前端线上调试技巧，解决疑难杂症</p>
        <p>爱好看书、爬山、跑步、骑行、篮球、徒步</p>
        <p>喜欢分享，创造快乐</p>
        <p>性格慢热安静，沉着冷静，喜欢独立思考</p>
      </a-card>
    </div>
    <!-- 工作经历 -->
    <div class="work-exp">
      <div class="headline  fadeIn animated" data-wow-duration="1s" style="visibility: visible; animation-duration: 1s; animation-name: fadeIn;">
				<span>工作经历</span>
				<hr>
				<span>Work Experience</span>
			</div>
      <div>
        <Timeline></Timeline>
      </div>
    </div>
    <!-- 项目经验 -->
    <div class="project-exp">
      <div class="headline  fadeIn animated" data-wow-duration="1s" style="visibility: visible; animation-duration: 1s; animation-name: fadeIn;">
				<span>项目经验</span>
				<hr>
				<span>Project Experience</span>
			</div>
      <div class="project-exp-container">
        <a-list
          :grid="{ gutter: 16, column: 4 }"
          :dataSource="expList"
        >
          <a-list-item slot="renderItem" slot-scope="item, index">
            <a-card :title="item.title">
              <div v-html="item.desc"></div>
            </a-card>
          </a-list-item>
        </a-list>
      </div>
    </div>
    <!-- 技能 -->
    <div class="work-skill">
      <div class="headline  fadeIn animated" data-wow-duration="1s" style="visibility: visible; animation-duration: 1s; animation-name: fadeIn;">
				<span>技能</span>
				<hr>
				<span>Work Skills</span>
			</div>
      <div class="work-skill-container">
        <div class="flex-item  fadeIn animated" data-wow-duration="1s" data-wow-delay="0.4s" >
					<div class="front">
						<icon-font type="icon-vuejs" />
						<p>VUE</p>
					</div>
					<div class="back">
						<ul>
							<li>熟练掌握VUE基础语法与接口</li>
							<li>熟悉VUE周边相关库与插件使用</li>
							<li>掌握VUE插件开发、自定义指令、组件交互</li>
						</ul>
					</div>
				</div>
        <div class="flex-item  fadeIn animated" data-wow-duration="1s" data-wow-delay="0.4s" >
					<div class="front">
						<i class="iconfont icon-js"></i>
						<p>JS</p>
					</div>
					<div class="back">
						<ul>
							<li>熟悉JS相关基础</li>
							<li>掌握JS原型链</li>
							<li>掌握JS核心功能</li>
							<li>掌握调试技巧</li>
							<li>手写原生代码</li>
						</ul>
					</div>
				</div>
        <div class="flex-item  fadeIn animated" data-wow-duration="1s" data-wow-delay="0.4s" >
					<div class="front">
						<icon-font type="icon-jquery" />
						<p>jquery</p>
					</div>
					<div class="back">
						<ul>
							<li>熟悉基本API</li>
							<li>可编写插件</li>
						</ul>
					</div>
				</div>
        <div class="flex-item  fadeIn animated" data-wow-duration="1s" data-wow-delay="0.4s" >
					<div class="front">
						<icon-font type="icon-linux" />
						<p>linux</p>
					</div>
					<div class="back">
						<ul>
							<li>了解简单的linux脚本</li>
							<li>linux上部署项目经验</li>
						</ul>
					</div>
				</div>
        <div class="flex-item  fadeIn animated" data-wow-duration="1s" data-wow-delay="0.4s" >
					<div class="front">
						<icon-font type="icon-xiaochengxu" />
						<p>小程序</p>
					</div>
					<div class="back">
						<ul>
							<li>了解小程序相关接口组件</li>
							<li>掌握wepy开发小程序技巧</li>
							<li>了解小程序上线流程</li>
						</ul>
					</div>
				</div>
      </div>
    </div>
    <!-- 联系方式 -->
    <div class="contact-way">
      <div class="headline  fadeIn animated" data-wow-duration="1s" style="visibility: visible; animation-duration: 1s; animation-name: fadeIn;">
				<span>联系方式</span>
				<hr>
				<span>Contact</span>
			</div>
      <div class="contact-me-container">
        <div class="contact-box  fadeIn animated" data-wow-duration="1s" style="visibility: visible; animation-duration: 1s; animation-name: fadeIn;">
          <div class="cont-row flex">
            <em class="dream">灵感</em>
            <em class="dream">代码</em>
            <em class="dream">梦想</em>
            <em class="dream">未来</em>
          </div>
          <div class="cont-row passages">
            <p>学习是一个充实愉悦的过程</p>
            <p>注重效率，偏爱敏捷开发</p>
            <p>喜欢尝试，期待新鲜事物</p>
            <p>前端即兴趣，兴趣即未来</p>
            <p>行路有良友，便是捷径</p>
          </div>
          <div class="cont-row">
            <ul class="list">
              <li>
                <a-tooltip placement="top" >
                  <template slot="title">
                    <span>https://github.com/fenzaiway</span>
                  </template>
                  <i class="iconfont icon-github"></i>
                  <span class="tips" style="display: none;">Github</span>
                  <a href="https://github.com/fenzaiway" target="_blank"></a>
                </a-tooltip>
              </li>
              <li>
                <a-tooltip placement="top" >
                  <template slot="title">
                    <span>fenzaiway@qq.com</span>
                  </template>
                  <i class="iconfont icon-email"></i>
                  <span class="tips" style="display: none;">Email</span>
                  <a href="mailto:fenzaiway@qq.com" target="_blank"></a>
                </a-tooltip>
              </li>
              <li>
                <a-tooltip placement="top" >
                  <template slot="title">
                    <span>376231436</span>
                  </template>
                  <i class="iconfont icon-qq"></i>
                  <span class="tips" style="display: none;">QQ</span>
                  <a href="http://wpa.qq.com/msgrd?v=3&amp;uin=376231426&amp;site=qq&amp;menu=yes" target="_blank"></a>
                </a-tooltip>
              </li>
              <li>
                <a-tooltip placement="top" >
                  <template slot="title">
                    <img style="width:100px;height:100px;" src="~/assets/Wechat.jpeg" alt="">
                  </template>
                  <i class="iconfont icon-wechat"></i>
                  <span class="tips" style="display: none;">Wechat</span>
                  <a href="javascript:void(0);" target="_blank"></a>
                </a-tooltip>
              </li>
              
            </ul>
          </div>
        </div>
      </div>
    </div>
    <a-back-top>
      <div class="ant-back-top-inner">
        <a-icon type="up" />
      </div>
    </a-back-top>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Timeline from '~/components/Timeline'
import { Icon } from 'ant-design-vue';
const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1232920_w36amvz0cgs.js',
})
export default {
  components: {
    Logo,
    Timeline,
    IconFont
  },
  mounted(){
    
  },
  data(){
    return {
      navTop: 0,
      bgImg: [
        require('static/bg/1.jpg'),
        require('static/bg/2.jpg'),
        require('static/bg/3.jpg'),
        require('static/bg/4.jpg'),
        require('static/bg/5.jpg'),
        require('static/bg/6.jpg')
      ],
      expList: [
        {
          title: '武汉电信开机广告系统',
          desc: `
            <ul>
              <li>1. 使用easyui+jquery+bootstrap实现后台系统拖拽生成epg页面</li>
              <li>2. 后台Java解析模板页面读取保存页面数据</li>
              <li>3. 日历组件广告排期</li>
              <li>4. 系统权限管理</li>
            </ul>
          `
        },
        {
          title: '江苏电信IPTV电视商城',
          desc: `
            <ul>
              <li>1. 商城后端业务逻辑开发（JAVA+Mysql）</li>
              <li>2. 商城前端TV页面开发(JS+JSP)</li>
            </ul>
          `
        },
        {
          title: '个人博客',
          desc: `
            <ul>
              <li>1. thinkjs开发后端接口（thinkjs+mysql）</li>
              <li>2.前端页面数据渲染（ Nuxt+iview）</li>
              <li>3.公众号发送文本数据交互</li>
              <li>4.博客小程序（小程序组件）</li>
            </ul>
          `
        },
        {
          title: '移动办公空间',
          desc: `
            <ul>
              <li>1. vue全家桶（vuex+vue-router）</li>
              <li>2.通用API模块开发</li>
              <li>3.基于webuploader开发支持vue上传插件</li>
              <li>4.基于zTree开发支持vue调用树插件</li>
              <li>5.编写table插件、弹框插件、消息插件、通知插件、分页插件</li>
            </ul>
          `
        },
        {
          title: '移动问卷调查系统',
          desc: `
            <ul>
              <li>1. 基于Seajs+Backbone</li>
              <li>2. 提供单选题、多选题、问答题题目创建、背景切换功能</li>
              <li>3. 对接邮箱系统发送问卷功能</li>
              <li>4. 问卷答题提交收集功能</li>
            </ul>
          `
        },
        {
          title: '法义用户端、律师端框架搭建',
          desc: `
            <ul>
              <li>1. 基于Vue全家桶，公司内部聊天插件（vue+vuex+vue-router+axios）</li>
              <li>2. 提供用户对接律师、律师接案与客户对话功能</li>
              <li>3. 基于webpack、Shell、Jenkins编写自动化部署功能</li>
            </ul>
          `
        },
        {
          title: '邻加SASS管理功能',
          desc: `
            <ul>
              <li>1. 基于Vue全家桶（vue+vuex+vue-router+axios）</li>
              <li>2. 提供权限管理、客户信息管理、订单管理、库存管理、报表管理、设备管理、买单等功能</li>
            </ul>
          `
        },
        {
          title: '邻加养车小程序',
          desc: `
            <ul>
              <li>1. 基于wepy+Vant-Weapp</li>
              <li>2. 提供客户充值、下单、存钥匙、取钥匙、订单查询、余额账单查询等功能</li>
            </ul>
          `
        }
      ]
    }
  }
}
</script>

<style lang="less">
.container {
  .container-full{
    width: 100%;
    min-width: 320px;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    .bg{
      position: fixed;
      width: 100%;
      height: 100%;
      background-repeat: no-repeat;
      top: 0px;
      z-index: 0;
      opacity: 0.6;
    }
  }
  .main-detail{
    position: relative;
    z-index: 1;
    width: 600px;
    height: 400px;
    border-radius: 10px;
    transition: box-shadow .6s;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .circleLight {
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        width: 100%;
        height: 100%;
        background: radial-gradient(circle at 80px 40px, #ffffff, rgba(0, 0, 0, 0));
        opacity: 0;
        transition: all .5s;
    }
    &:hover {
        box-shadow: 0 0 30px rgba(17, 17, 17, 1);
        .circleLight {
            opacity: 1;
        }
    }
  }
}
.headline {
    padding-top: 80px;
    padding-bottom: 80px;
    text-align: center;
    color: #333;
    span {
        font-size: 36px;
        font-family: hyllh;
        &:nth-of-type(2) {
            padding: 0 5px;
            font-size: 30px;
            text-transform: uppercase;
            text-shadow: 1px 2px 2px #999;
            &:before, &:after {
                content:' - ';
            }
        }
    }
    hr {
        width: 200px;
        height: 5px;
        margin: 10px auto;
        border: none;
        background: #333;
    }
}

.title {
  font-family: SketchFineSerif, 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 70px;
  color: #35495e;
  letter-spacing: 1px;
}

.ant-back-top-inner {
  position: fixed;
  right: 0;
  bottom: 10vh;
  z-index: 99;
  width: 50px;
  height: 50px;
  line-height: 50px;
  border-radius: 25px 0 0 25px;
  text-align: center;
  color: #fff;
  background: #393C3E;
  i {
      font-size: 20px;
  }
}
.subtitle {
  font-weight: 300;
  font-size: 24px;
  color: #333;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.nav-bar{
    z-index: 99;
    height: 50px;
    padding: 0 15px;
    background: #3f4245;
    position: relative;
  .navmove {
      display: inline-block;
      position: absolute;
      z-index: 1;
      top: 10px;
      left: 0;
      height: 30px;
      border-radius: 15px;
      background: #2B2E31;
      box-shadow: 1px 1px 2px #161819 inset;
      transition: all .3s ease;
  }
  .menu {
      list-style: none;
      li{
        float: left;
        position: relative;
        z-index: 2;
        height: 50px;
        line-height: 50px;
        text-align: center;
        color: #fff;
        cursor: pointer;
        span {
            padding: 0 15px;
        }
      }
  }
}

.about-me, .work-exp, .project-exp, .work-skill, .contact-way{
  width: 100%;
  min-width: 320px;
  min-height: 100vh;
}

.about-me-detail{
  width: 1280px;
  margin: 0 auto;
  display: flex;
  .flex-item{
    min-width: 25%;
    .icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100px;
        height: 100px;
        line-height: 100px;
        margin: 0 auto;
        border-radius: 50%;
        text-align: center;
        background: rgba(#333, .6);
        transition: all .3s;
        i {
            font-size: 60px;
            color: #fff;
        }
        &:hover {
            box-shadow: 0 0 20px #888;
        }
    }
    .info {
        margin-top: 20px;
        p {
            width: 40%;
            height: 30px;
            line-height: 30px;
            margin: 0 auto;
            font-weight: bold;
            font-size: 16px;
            &:nth-of-type(2) {
                position: relative;
                text-align: right;
                &:before {
                    content:'';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 2px;
                    background: #333;
                    transform: rotate(-20deg);
                }
            }
        }
    }
  }
}
.about-me-card{
    width: 640px;
    margin: 0 auto;
    margin-top: 80px;
    background: rgba(109, 104, 104, 0.1);
    border: 0;
    color: #403f3e;
    font-size: 16px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    &:hover {
        box-shadow: 0 0 20px rgba(17, 17, 17, 1);
    }
}

.project-exp-container{
  width: 1280px;
  margin: 0 auto;
  .ant-card-body{
    height: 200px;
  }
  .ant-card-bordered{
    border: 0px solid #393C3E;
  }
  .ant-card-head{
    color: #fff;
    border-bottom: 0px solid #393C3E;
  }
  .ant-card{
    background: rgba(57,60,62, 0.3);
    color: #fff;
    &:hover {
        box-shadow: 0 0 10px rgba(57,60,62, 1);
    }
  }
}

.work-skill-container{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  .flex-item {
      width: 18%;
      height: 300px;
      margin: 0 auto 10vh;
      perspective: 800px;
      transform-style: preserve-3d;
      & > div {
          position: absolute;
          top: 0;
          width: 100%;
          height: 100%;
          border: 5px solid #1BACF0;
          border-radius: 15px;
          background: rgba(#393C3E, .8);
          transition: 1s;
          backface-visibility: hidden;
      }
      &:hover {
          .front {
              transform: rotateY(-180deg);
          }
          .back {
              transform: rotateY(0);
          }
      }
      .front {
          display: flex;
          flex-wrap: wrap;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          i {
              font-size: 80px;
              color: #fff;
              &.icon-refresh {
                  margin-top: 20px;
                  font-size: 24px;
                  animation: icon-rotate 1s infinite linear;
              }
          }
          p {
              width: 100%;
              height: 60px;
              line-height: 60px;
              font-size: 24px;
              font-family: hyllh;
              text-transform: uppercase;
              text-align: center;
              color: #fff;
              letter-spacing: 2px;
          }
      }
      .back {
          padding: 10px;
          transform: rotateY(180deg);
          li {
              list-style-type: circle;
              list-style-position: inside;
              line-height: 25px;
              font-size: 14px;
              color: #fff;
          }
      }
  }
}
.contact-me-container{
    .contact-box {
        position: relative;
        width: 440px;
        height: 400px;
        padding: 50px;
        margin: 0 auto 10vh;
        &:before, &:after {
            content:'';
            position: absolute;
            width: 150px;
            height: 80px;
            color: #393C3E;
            ;
        }
        &:before {
            top: 0;
            right: 0;
            border-top: 6px solid;
            border-right: 6px solid;
        }
        &:after {
            bottom: 0;
            left: 0;
            border-bottom: 5px solid;
            border-left: 6px solid;
        }
        .dream {
            flex: 1;
            height: 30px;
            line-height: 30px;
            font-size: 24px;
            text-align: center;
            &:nth-of-type(1) {
                color: #88B232;
            }
            &:nth-of-type(2) {
                color: #E7C200;
            }
            &:nth-of-type(3) {
                color: #AE4550;
            }
            &:nth-of-type(4) {
                color: #1BACF0;
            }
        }
        .passages {
            margin: 30px 0;
            text-align: center;
            p {
                height: 30px;
                line-height: 30px;
                font-size: 16px;
            }
        }
        .flex{
          display: flex;
          justify-content: center;
        }
        .list {
          display: flex;
          justify-content: center;
          align-items: center;
            li {
                position: relative;
                width: 50px;
                height: 50px;
                line-height: 50px;
                margin: 0 4px;
                border-radius: 50%;
                text-align: center;
                background: #4a555d;
                box-shadow: 0 0 3px #282A2D inset;
                transition: all .3s;
                a {
                    position: absolute;
                    top: 0;
                    left: 0;
                    z-index: 2;
                    width: 50px;
                    height: 50px;
                }
                i {
                    font-size: 24px;
                    color: #fff;
                }
                .tips {
                    display: none;
                    position: absolute;
                    top: -60px;
                    left: -15px;
                    right: 0;
                    min-width: 80px;
                    border-radius: 5px;
                    text-transform: capitalize;
                    color: #fff;
                    background: #282A2D;
                    &:before {
                        content:'';
                        position: absolute;
                        right: 0;
                        bottom: -8px;
                        left: 0;
                        width: 0;
                        height: 0;
                        margin: 0 auto;
                        border-top: 8px solid #282A2D;
                        border-right: 8px solid transparent;
                        border-left: 8px solid transparent;
                    }
                }
                &:hover {
                    background: #282A2D;
                }
            }
        }
    }
  }
</style>
