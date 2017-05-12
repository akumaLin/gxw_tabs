<template>
  <div id="home">
    <router-view></router-view>
    <ul class="toolbar" >
      <li>
        <router-link to="/">
          <p  class="tab_text tab_text_icon"><i class="tab_bot iconfont icon-520"></i></p>

          <p class="tab_text">520</p>
        </router-link>
      </li>
      <li>
        <a href="https://www.gxw520.com/mobile/index.php?r=site">
          <p  class="tab_text tab_text_icon"><i class="tab_bot iconfont icon-shangcheng"></i></p>

          <p class="tab_text">商城</p>
        </a>
      </li>
      <li>
        <a href="https://o.gxw520.com/mobile/index/index">
        <!--  <p  class="tab_text tab_text_icon"><i class="tab_bot iconfont icon-tongcheng"></i></p>-->
          <p class="tab_text tab_text_icon"><img src="../assets/tc.png" alt="" class="tc_img"></p>
          <p class="tab_text">同城</p>
        </a>
      </li>
      <li>
        <a href="https://www.gxw520.com/mobile/index.php?r=user">
          <p  class="tab_text tab_text_icon"><i class="tab_bot iconfont icon-iconfontwode"></i></p>

          <p class="tab_text">我的</p>
        </a>
      </li>
    </ul>
  </div>
</template>
<script type="text/ecmascript-6">

  export default {
    name: '',
    data(){
      return {
      }
    }
  }
</script>
<style scoped>
  @font-face {
    font-family: 'iconfont';  /* project id 297323 */
    src: url('//at.alicdn.com/t/font_3g00avsyif2h85mi.eot');
    src: url('//at.alicdn.com/t/font_3g00avsyif2h85mi.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_3g00avsyif2h85mi.woff') format('woff'),
    url('//at.alicdn.com/t/font_3g00avsyif2h85mi.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_3g00avsyif2h85mi.svg#iconfont') format('svg');
  }

  .iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
  }
  .toolbar {
    overflow: hidden;
    position: fixed;
    bottom: 0;
    transform: translateY(0);
    z-index: 9999;
    width: 100%;
    border-top: 0.3px solid #E6E6E6;
    background: white;
  }

  .toolbar li {
    height: 13.06vw;
    float: left;
    width: 25%;
  }
  .toolbar li a{
   display: block;

    height: 100%;
  }
  .tab_text{
     text-align: center;
     color: #929292;

   }
  .tab_text_icon{
    margin-bottom: -2vw;
  }
  .tab_bot {
   font-size: 6vw;
  }

  .router-link-active .tab_text{
    color:#E22E2E;
  }
  .tc_img{
    display: block;
    height:5.8vw ;
    width: 6vw;
    margin: auto;
    margin-top: 1.8vw;
    margin-bottom: 1vh;
  }
</style>
