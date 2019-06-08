<template>
    <div>
        <ul class="timeline-box">
            
            <li class="timeline-item">
                <div class="timeline-dots">
                    <i class="iconfont icon-foot"></i>
                </div>
                <div class="timeline-content">
                    <p class="title">深圳市邻家养车信息有限公司</p>
                    <p class="post">&lt;前端开发工程师&gt;</p>
                    <p class="desc">负责公司SASS管理系统、邻加养车小程序、公司官网前端开发。技术栈：Vue全家桶、wepy</p>
                    <p class="time">2018年<em>7月</em>~2019年<em>6月</em></p>
                </div>
            </li>
            <li class="timeline-item">
                <div class="timeline-dots">
                    <i class="iconfont icon-foot"></i>
                </div>
                <div class="timeline-content">
                    <p class="title">深圳市法义网络科技有限公司</p>
                    <p class="post">&lt;法义网络 / 前端开发工程师&gt;</p>
                    <p class="desc">负责公司内部运营系统开发维护，法义用户端、律师的PC网页前端开发。技术栈：Vue全家桶、doT模板引擎、node</p>
                    <p class="time">2017年<em>8月</em>~2018年<em>7月</em></p>
                </div>
            </li>
            <li class="timeline-item">
                <div class="timeline-dots">
                    <i class="iconfont icon-foot"></i>
                </div>
                <div class="timeline-content">
                    <p class="title">彩讯科技股份有限公司</p>
                    <p class="post">&lt;前端开发工程师&gt;</p>
                    <p class="desc">负责企业邮箱维护,问卷调查、办公空间项目前端开发。技术栈： Jquery、JSP、Seajs、Backbone、Vuejs全家桶</p>
                    <p class="time">2015年<em>7月</em>~2017年<em>8月</em></p>
                </div>
            </li>
            <li class="timeline-item">
                <div class="timeline-dots">
                    <i class="iconfont icon-foot"></i>
                </div>
                <div class="timeline-content">
                    <p class="title">深圳市路通网络科技有限公司</p>
                    <p class="post">&lt;新业务部 / Java工程师&gt;</p>
                    <p class="desc">负责公司TV商城前后端开发，行业广告应用平台开发。项目技术栈： Java、JSP、Jquery、Bootstrap</p>
                    <p class="time">2013年<em>3月</em>~2015年<em>7月</em></p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    }
}
</script>

<style lang="less">
    .timeline-box{
        width: 1280px;
        padding: 20px;
        border-radius: 10px;
        background: rgba(0,0,0,0.3);
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .timeline-item{
            position: relative;
            width: 90%;
            margin: 0 auto 30px;
            margin-bottom: 0px;
            &:before {
                content:'';
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                width: 2px;
                margin: 0 auto;
                background: #000;
            }
        }
        li {
            position: relative;
            &:hover {
                .timeline-dots {
                    border-color: #1BACF0;
                    box-shadow: 0 0 10px #1BACF0;
                    i {
                        color: #1BACF0;
                    }
                }
            }
            &:nth-of-type(odd) {
                .timeline-content {
                    text-align: right;
                    &:before {
                        right: -20px;
                        border-left-color: #393C3E;
                    }
                }
            }
            &:nth-of-type(even) {
                .timeline-content {
                    float: right;
                    text-align: left;
                    &:before {
                        left: -20px;
                        border-right-color: #393C3E;
                    }
                }
            }
            &:last-of-type {
                min-height: 50px;
                margin-bottom: 0;
            }
            .timeline-dots {
                position: absolute;
                top: 0;
                left: 50%;
                width: 50px;
                height: 50px;
                line-height: 48px;
                margin-left: -25px;
                border: 2px solid #393C3E;
                border-radius: 50%;
                text-align: center;
                background: #fff;
                transition: all .3s;
                i {
                    font-size: 30px;
                }
            }
            .timeline-content {
                position: relative;
                width: 45%;
                padding: 12px;
                border-radius: 10px;
                color: #fff;
                background: #393C3E;
                &:before {
                    content:'';
                    position: absolute;
                    top: 15px;
                    width: 0;
                    height: 0;
                    border: 10px solid transparent;
                }
                .title {
                    margin-bottom: 10px;
                    font-size: 24px;
                    color: #fff;
                }
                .post {
                    margin-bottom: 10px;
                    font-size: 14px;
                    color: #1BACF0;
                }
                .desc {
                    line-height: 20px;
                    font-size: 14px;
                }
                .time {
                    height: 25px;
                    line-height: 25px;
                    margin-top: 10px;
                    border-top: 1px dashed #fff;
                    font-size: 14px;
                    em {
                        font-size: 15px;
                    }
                }
            }
        }
    }
</style>
