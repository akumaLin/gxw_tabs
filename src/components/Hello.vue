<template>
  <div class="hello" style="height: 100vh">
    <div class="tab_wrap">
      <mu-tabs :value="activeTab" @change="handleTabChange" class="tab_home">
        <mu-tab value="tab1" title="520狂欢" @active="one_tab"/>
        <mu-tab value="tab2" title="集爱活动" @active="two_tab"/>
        <mu-tab value="tab3" title="为爱益行" @active="handleActive"/>
        <mu-tab value="tab4" title="我的奖品" @active="four_tab"/>
      </mu-tabs>
    </div>
    <div class="no_div"></div>
    <div v-if="activeTab === 'tab1'" class="tab-item-height">
      <!--520页-->
      <iframe :src="my_data" width="100%" height="100%" id="mainFrame">
        脚本之家使用了框架技术，但是您的浏览器不支持框架，请升级您的浏览器以便正常访问脚本之家。
      </iframe>
    </div>
    <div v-if="activeTab === 'tab2'" class="tab-item-height">
      <!--集爱活动-->
      <iframe width="100%" height="100%" :src="my_data1" id="last_three"></iframe>
    </div>
    <div v-if="activeTab === 'tab3'" class="tab-item-height">
      <!--为爱-->
      <iframe width="100%" height="100%" :src="my_data2" id="for_love_if"></iframe>
    </div>
    <div v-if="activeTab === 'tab4'" class="tab-item-height">
      <!--我的奖品-->
      <iframe width="100%" height="100%" name="fou" :src="my_data3" ref="o_3" id="last"
              sandbox="allow-top-navigation allow-same-origin allow-scripts">
      </iframe>
    </div>
  </div>
</template>

<script>
  import axios from "axios"
  export default {
    name: 'hello',
    data () {
      return {
        my_data: "cn/active_homepage.html",
        my_data1: "cn/lovegift_card.html",
        my_data2: "cn/forlove_participate.html",
        my_data3: "index.html#/",
        activeTab: 'tab1',
        urldata: '',
        id_num:"",
        type:"",
        code:""
      }
    },
    created(){

      let my_href = window.location.href
      let url_index = my_href.lastIndexOf("?")
      if (url_index > -1) {
        let query= my_href.substring(url_index + 1)
        let type_index = query.indexOf("=")
        let type = query.substr(type_index + 1,1)
        this.type = type
        let code_index = query.lastIndexOf("=")
        let code = query.substring(code_index + 1)
        this.code=code
      }
      this.my_data1 = this.my_data1 + "?code=" + this.code
      this.id_num=this.getCookie("GXW_user_id")
      var now_this = this
      axios.get('http://192.168.1.25/gxw_mobile3/Shop/loves/is_user_pass?query={"user_id":'+'"'+this.id_num+'"'+"}").then(function (res) {
        now_this.my_data2 = now_this.my_data2 + "?is_pass=" + res.data.is_pass
      })
      if(this.type==2){
        this.activeTab="tab2"
      }

    },
    methods: {
      getCookie: function (GXW_user_id) {
        if (document.cookie.length > 0) {
          var c_start = document.cookie.indexOf(GXW_user_id + "=")
          if (c_start != -1) {
            c_start = c_start + GXW_user_id.length + 1
            var c_end = document.cookie.indexOf(";", c_start)
            if (c_end == -1) c_end = document.cookie.length
            return unescape(document.cookie.substring(c_start, c_end))
          }
        }
        return null
      },
      getByClass: function (parent, cls) {
        if (parent.getElementsByClassName) {
          return parent.getElementsByClassName(cls);
        } else {
          var res = [];
          var reg = new RegExp(' ' + cls + ' ', 'i')
          var ele = parent.getElementsByTagName('*');
          for (var i = 0; i < ele.length; i++) {
            if (reg.test(' ' + ele[i].className + ' ')) {
              res.push(ele[i]);
            }
          }
          return res;
        }
      },
      /*   haha(){
       console.log(123)
       },*/
      handleTabChange (val) {
        this.activeTab = val
      },
      handleActive () {
        document.getElementById("for_love_if").onload = function () {

        }
      },
      one_tab(){
        var now_this = this
        document.getElementById("mainFrame").onload = function () {
          var my_prize = document.getElementById("mainFrame").contentWindow.document.getElementById("my_prize")
          if (!my_prize) {
            return false
          } else {
            my_prize.onclick = function () {

              now_this.activeTab = "tab4"
            }
          }
        }
      },
      two_tab(){
        var now_this = this
        document.getElementById("last_three").onload = function () {
          var for_love_page = document.getElementById("last_three").contentWindow.document.getElementById("for_love_page")
          if (!for_love_page) {
            return false
          } else {
            for_love_page.onclick = function () {
              now_this.activeTab = "tab3"
            }
          }

          var for_love_page_1 = document.getElementById("last_three").contentWindow.document.getElementById("for_love_page_1")
          if (!for_love_page_1) {
            return false
          } else {
            for_love_page_1.onclick = function () {
              now_this.activeTab = "tab3"
            }
          }

        }
      }
      ,
      four_tab(){
        var now_this = this
        document.getElementById("last").onload = function () {
          var a = document.getElementById("last").contentWindow.document.getElementById("j_card")

          if (!a) {
            return false
          } else {
            a.onclick = function () {

              now_this.activeTab = "tab2"
            }
          }
          var b = this.contentWindow.document.getElementById("sort-more")
          if (b) {

            b.onclick = function () {
              now_this.activeTab = "tab3"
            }
          }

          var c = this.contentWindow.document.getElementById("sort_more2")
          if (c) {
            c.onclick = function () {
              now_this.activeTab = "tab1"
            }
          }

          var d = this.contentWindow.document.getElementsByClassName("now_use")

          if (d.length > 0) {
            for (var i = 0; i < d.length; i++) {
              d[i].onclick = function () {
                now_this.activeTab = "tab1"
              }
            }
          }

          var e = this.contentWindow.document.getElementById("getCoupon")
          if (e) {
            e.onclick = function () {
              now_this.activeTab = "tab1"
            }
          }

        }

      },

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .tab_wrap {
    position: fixed;
    z-index: 9999;
    top: 0;
    transform: translateY(0);
    width: 100vw;
    height: 14.78vw;
    background: #E32C2C !important;
    padding-top: 3vw;
  }

  .no_div {
    height: 14.78vw;;
  }

  .tab_home {
    background: #E32C2C !important;
    height: 7.78vw;
    width: 90vw !important;
    margin: auto;

  }

  .mu-tab-link-highlight {
    background-color: white !important;
  }

  .mu-tab-text {
    font-size: 3.5vw !important;
    white-space: nowrap;
  }

  .tab-item-height {
    height: 91.22vh;
    /* height: 85.22vh;*/
    -webkit-overflow-scrolling: touch;
    overflow: scroll;
  }
</style>
