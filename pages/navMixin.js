const eventUtils={
    // 添加句柄
    addHandler:function(element,type,handler){
      if(element.addEventListener){
        element.addEventListener(type,handler,false);
      }else if(element.attachEvent){
        element.attachEvent('on'+type,handler);
      }else{
        element['on'+type]=handler;
      }
    },
    // 删除句柄
    removeHandler:function(element,type,handler){
      if(element.removeEventListener){
        element.removeEventListener(type,handler,false);
      }else if(element.detachEvent){
        element.detachEvent('on'+type,handler);
      }else{
        element['on'+type]=null;
      }
    },
   //获取事件对象
   //IE模型中event是一个全局唯一的对象绑定在window对象上
   getEvent:function(event){
      return event?event:window.event;
   },
   //获取类型
   getType:function(event){
    return event.type;
   },
   getElement:function(event){
    return event.target || event.srcElement;
   },
   //阻止默认事件
   preventDefault:function(event){
    if(event.preventDefault){
     event.preventDefault();
    }else{
     event.returnValue=false;
    }
   },
   //阻止冒泡
  stopPropagation:function(event){
  if(event.stopPropagation){
    event.stopPropagation();
  }else{
    event.cancelBubble=true;
   }
  }
 }
export default {
    mounted(){
        this.initNav()
        this.windowScroll()
    },
    data(){
        return {
            selectNav: null,
            currentIndex: 0,
            currentWidth: 0,
            currentLeft:0
        }
    },
    methods: {
        initNav(){
            this.setCurrentNav(this.currentIndex)
            document.querySelectorAll('.menu li').forEach((item, index)=>{
                eventUtils.addHandler(item, 'mouseover', e=>{
                    this.setItemLeftWidth(item)
                })
                eventUtils.addHandler(item, 'mouseleave', e=>{
                    this.setCurrentNav(this.currentIndex)
                })
                eventUtils.addHandler(item, 'click', e=>{
                    this.currentIndex = index
                    // this.showAppNav = false
                    this.checkIsApp(document.querySelector('body,html').offsetWidth)
                    this.scrollTo()
                })
            })
        },
        setCurrentNav(index){
            this.setItemLeftWidth(document.querySelectorAll('.menu li')[index])
        },
        setItemLeftWidth(item){
            this.currentLeft = item.offsetLeft
            this.currentWidth = item.offsetWidth
        },
        scrollTo(){
            // document.querySelector('body,html').scrollTop = document.querySelectorAll('.nav-item')[this.currentIndex].offsetTop
            this.ScrollTop(document.querySelectorAll('.nav-item')[this.currentIndex].offsetTop, 500)
        },
        ScrollTop(number = 0, time){
            if (!time) {
                document.querySelector('body,html').scrollTop = number;
                return number;
            }
            const spacingTime = 20; // 设置循环的间隔时间  值越小消耗性能越高
            let spacingInex = time / spacingTime; // 计算循环的次数
            let nowTop = document.querySelector('body,html').scrollTop; // 获取当前滚动条位置
            let everTop = (number - nowTop) / spacingInex; // 计算每次滑动的距离
            let scrollTimer = setInterval(() => {
                if (spacingInex > 0) {
                    spacingInex--;
                    this.ScrollTop(nowTop += everTop);
                } else {
                    clearInterval(scrollTimer); // 清除计时器
                }
            }, spacingTime);
        },
        windowScroll(){
            let navItemTopArr = []
            document.querySelectorAll('.nav-item').forEach(item=>{
                navItemTopArr.push(item.offsetTop)
            })

            eventUtils.addHandler(window, 'scroll', e=>{
                let scrollTop = document.querySelector('body,html').scrollTop
                let arr = navItemTopArr.filter(top=>top<(scrollTop+130))
                this.currentIndex = arr.length>0 ? arr.length-1 : 0
                this.setCurrentNav(this.currentIndex)
            })
            let windowWidth = document.querySelector('body,html').offsetWidth
            this.checkIsApp(windowWidth)
            eventUtils.addHandler(window, 'resize', e=>{
                windowWidth = document.querySelector('body,html').offsetWidth
                this.checkIsApp(windowWidth)
            })
        },
        checkIsApp(windowWidth){
            if(windowWidth>=768){
                this.showAppNav = true
            }else{
                this.showAppNav = false
            }
        }
    }
}