<template>
  <div class="hello" style="height: 100vh">
    <div class="tab_wrap">
      <mu-tabs :value="activeTab" @change="handleTabChange" class="tab_home">
        <mu-tab value="tab1" title="520狂欢" @active="one_tab"/>
        <mu-tab value="tab2" title="集爱活动" @active="two_tab"  />
        <mu-tab value="tab3"  title="为爱益行"  @active="handleActive"/>
        <mu-tab value="tab4" title="我的奖品" @active="four_tab"/>
      </mu-tabs>
    </div>
    <div v-if="activeTab === 'tab1'" class="tab-item-height" @touchmove.prevent>
      <!--520页-->
      <iframe :src="my_data" width="100%" height="100%" id="mainFrame">
        脚本之家使用了框架技术，但是您的浏览器不支持框架，请升级您的浏览器以便正常访问脚本之家。
      </iframe>
    </div>
    <div v-if="activeTab === 'tab2'" class="tab-item-height" @touchmove.prevent>
      <!--集爱活动-->
      <iframe width="100%" height="100%" :src="my_data1" id="last_three"></iframe>
    </div>
    <div v-if="activeTab === 'tab3'" class="tab-item-height" @touchmove.prevent>
      <!--为爱-->
      <iframe width="100%" height="100%" :src="my_data2" id="for_love_if"></iframe>
    </div>
    <div v-if="activeTab === 'tab4'" class="tab-item-height"  @touchmove.prevent>
      <!--我的奖品-->
      <iframe width="100%" height="100%" name="fou" :src="my_data3" ref="o_3" id="last" sandbox="allow-top-navigation allow-same-origin allow-scripts">
      </iframe>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'hello',
    data () {
      return {
        my_data: "cn/active_homepage.html",
        my_data1: "cn/lovegift_card.html",
        my_data2: "cn/forlove_participate.html",
        my_data3: "http://192.168.1.104:8080/#/",
        activeTab: 'tab1',
        urldata: ''
      }
    },
    created(){
      let my_href = window.location.href
      let url_index = my_href.lastIndexOf("&")
      if (url_index > -1) {
        let user_id = my_href.substring(url_index + 1)
        let id_num_index = user_id.lastIndexOf("=")
        let id_num = user_id.substring(id_num_index + 1)
        console.log(id_num)
        this.my_data = this.my_data + "?user-id=" + id_num
        this.my_data1 = this.my_data1 + "?user-id=" + id_num
        this.my_data2 = this.my_data2 + "?user-id=" + id_num
        this.my_data3 = this.my_data3 + "?isapp=3&user-id=" + id_num
      }
      var nowThis = this
    },
    methods: {
      /*   haha(){
       console.log(123)
       },*/
      handleTabChange (val) {
        this.activeTab = val
      },
      handleActive () {
        document.getElementById("for_love_if").onload = function (){

        }
      },
      one_tab(){
        var now_this = this
        document.getElementById("mainFrame").onload = function (){
         var my_prize= document.getElementById("mainFrame").contentWindow.document.getElementById("my_prize")
             if(!my_prize){
               return false
             }else {
               my_prize.onclick = function () {

                 now_this.activeTab = "tab4"
               }
        }
      }},
      two_tab(){
        var now_this = this
        document.getElementById("last_three").onload = function (){
          var for_love_page= document.getElementById("last_three").contentWindow.document.getElementById("for_love_page")
          if(!for_love_page){
            return false
          }else {
            for_love_page.onclick = function () {
              now_this.activeTab = "tab3"
            }
          }

          var for_love_page_1= document.getElementById("last_three").contentWindow.document.getElementById("for_love_page_1")
          if(!for_love_page_1){
            return false
          }else {
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

           if(!a){
             return false
           }else {
             a.onclick = function () {

               now_this.activeTab = "tab2"
             }
           }
         var b = this.contentWindow.document.getElementById("sort-more")
  if(b){

    b.onclick = function () {
      now_this.activeTab = "tab3"
    }
  }

          var c = this.contentWindow.document.getElementById("sort_more2")
         if(c){
           c.onclick = function () {
             now_this.activeTab = "tab1"
           }
         }

          var d = this.contentWindow.document.getElementById("now_use")
          if(d){
            d.onclick = function () {
              now_this.activeTab = "tab1"
            }
          }

          var e = this.contentWindow.document.getElementById("getCoupon")
         if(e){
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
    height: 14.78vw;
    background: #E32C2C !important;
    padding-top: 3vw;
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
    -webkit-overflow-scrolling: touch;
    overflow: scroll;
  }
</style>
