<template>
  <div class="logo">
    <div class="logo-inner">
      <img src="~/assets/nic.jpg" alt="">
    </div>
  </div>
</template>

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
