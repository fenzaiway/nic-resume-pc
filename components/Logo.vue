<template>
  <div class="logo">
    <div class="logo-inner" :style="`background:url(${logo}) no-repeat 70%;background-size:cover;`">
      <!-- <img src="~/assets/psb.jpeg" alt=""> -->
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      logo: require('~/assets/nic-1.jpg')
    }
  }
}
</script>

<style lang="less">
.logo {
  display: flex;
  justify-content: center;
  .logo-inner{
    width: 160px;
    height: 160px;
    line-height: 160px;
    border-radius: 50%;
    box-shadow: 0 0 15px rgba(17, 17, 17, 1);
    margin-bottom: 10px;
    transition: all 1s;
    &:hover {
        box-shadow: 0;
        &:after {
            content:'';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            animation: ripple 1.3s ease-out 75ms;
        }
    }
  }
  img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
}


</style>
