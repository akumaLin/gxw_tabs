<template>
  <div id="home">
    <router-view></router-view>
    <ul class="toolbar">
      <li v-for="(item,index) in tab_items">
        <router-link :to="item.link">
          <p  class="tab_text tab_text_icon"><i :class="[,'tab_bot','iconfont',item.icon]"></i></p>

          <p class="tab_text" v-text="item.text"></p>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script type="text/ecmascript-6">

  export default {
    name: '',
    data(){
      return {
          tab_items:[
            {icon:"icon-520",text:"520",link:"/hello"},
            {icon:"icon-shangcheng",text:"商城",link:"/home/mall"},
            {icon:"icon-tongcheng",text:"同城",link:"/home/city"},
            {icon:"icon-iconfontwode",text:"我的",link:"/home/me"}
          ]

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
    position: absolute;
    left:0;
    right: 0;
    margin: auto;
    bottom: 0;
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
  /*.router-link-active  div{
    background: url("../assets/520-pre.png") no-repeat!important;
    background-size: 100% 100%!important;
  }*/
</style>
