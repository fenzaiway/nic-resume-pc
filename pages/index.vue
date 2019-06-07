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
    </div>
    <!-- 工作经历 -->
    <div class="work-exp">
      <div class="headline  fadeIn animated" data-wow-duration="1s" style="visibility: visible; animation-duration: 1s; animation-name: fadeIn;">
				<span>工作经历</span>
				<hr>
				<span>Work Experience</span>
			</div>
    </div>
    <!-- 项目经验 -->
    <div class="project-exp">
      <div class="headline  fadeIn animated" data-wow-duration="1s" style="visibility: visible; animation-duration: 1s; animation-name: fadeIn;">
				<span>项目经验</span>
				<hr>
				<span>Project Experience</span>
			</div>
    </div>
    <!-- 技能 -->
    <div class="work-skill">
      <div class="headline  fadeIn animated" data-wow-duration="1s" style="visibility: visible; animation-duration: 1s; animation-name: fadeIn;">
				<span>技能</span>
				<hr>
				<span>Work Skills</span>
			</div>
    </div>
    <!-- 联系方式 -->
    <div class="contact-way">
      <div class="headline  fadeIn animated" data-wow-duration="1s" style="visibility: visible; animation-duration: 1s; animation-name: fadeIn;">
				<span>联系方式</span>
				<hr>
				<span>Contact</span>
			</div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
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
  height: 100vh;
}

</style>
