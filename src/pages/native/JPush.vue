<style lang="stylus">
.native_PG-jpush
  box-sizing border-box
  display flex
  flex-direction column
  .p_UI-content
    flex 1
</style>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<template>
  <vha-page class="native_PG-jpush">

    <vha-scrollview class="p_UI-content">
      
      <label class="_UI-input">
        <span class="input-label">本地通知内容：</span>
        <input type="text" v-model="LocalNotificationText">
      </label>

      <vha-button block effect="spread" color="error" size="fullWidth" @click="LocalNotification()">
        本地通知
      </vha-button>

      <vha-button block effect="spread" color="error" size="fullWidth" @click="clearLocalNotifications()">
        清除所有的本地通知
      </vha-button>
      
      <div class="_UI-hr"></div>
      
      <vha-button block effect="spread" color="error" size="fullWidth" @click="init()">
        初始化
      </vha-button>
      
      <label class="_UI-input">
        <span class="input-label">registrationId：</span>
        <input type="text" v-model="registrationId">
      </label>
      
      <vha-button block effect="spread" color="error" size="fullWidth" @click="getregistrationId()">
        获取registrationId
      </vha-button>
      
      <div class="_UI-hr"></div>
      
      <label class="_UI-input">
        <span class="input-label">Tags：</span>
        <br>
        <input type="text" v-model="tagText1">
        <input type="text" v-model="tagText2">
        <input type="text" v-model="tagText3">
      </label>
      
      <vha-button block effect="spread" color="error" size="fullWidth" @click="setTags()">
        设置标签
      </vha-button>
      
      <vha-button block effect="spread" color="error" size="fullWidth" @click="getAllTags()">
        获取当前绑定的所有标签
      </vha-button>
      
      <vha-button block effect="spread" color="error" size="fullWidth" @click="cleanTags()">
        清除所有标签
      </vha-button>
      
      <div class="_UI-hr"></div>
      
      <label class="_UI-input">
        <span class="input-label">Alias：</span>
        <input type="text" v-model="aliasText">
      </label>
      
      <vha-button block effect="spread" color="error" size="fullWidth" @click="setAlias()">
        设置别名
      </vha-button>
      
      <vha-button block effect="spread" color="error" size="fullWidth" @click="getAlias()">
        查询别名
      </vha-button>
      
      <vha-button block effect="spread" color="error" size="fullWidth" @click="deleteAlias()">
        删除别名
      </vha-button>
    </vha-scrollview>
    
    <UIlog :text="logText"></UIlog>

  </vha-page>
</template>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<script type="text/ecmascript-6">
import UIlog from "../../components/_UI-log"

export default {
  name: 'nativePGjpush',
  beforeCreate() {
    //实例创建之前
  },
  props: {
    //父组件参数
  },
  data() {
    //动态数据
    return {
      logText: "",
      LocalNotificationText: "111",
      registrationId: "",
      tagText1: "1",
      tagText2: "2",
      tagText3: "3",
      aliasText: "haha",
    }
  },
  components: {
    //组件 - 引入或定义
    UIlog
  },
  computed: {
    //计算 - 缓存结果,变动时执行
  },
  methods: {
    //方法 - 每次进入页面创建
    LocalNotification: function () {
      try {
        if (this.$vha.device.platform != "Android") {
          window.JPush.addLocalNotificationForIOS(5, this.LocalNotificationText, 1, "localNoti1")
        }else{
          window.JPush.addLocalNotification(0, this.LocalNotificationText, "JPush", 1, 10)
        }
      } catch (exception) {
        console.log(exception)
      }
    },
    clearLocalNotifications: function () {
      window.JPush.clearLocalNotifications()
    },
    init: function () {
      try {
        window.JPush.init()
        window.JPush.setDebugMode(true)
        
        if (this.$vha.device.platform != "Android") {
          window.JPush.setApplicationIconBadgeNumber(0)
        }
      } catch (exception) {
        console.log(exception)
      }
      this.logText += "执行初始化" + "\n"
    },
    getregistrationId: function () {
      try {
        window.JPush.getRegistrationID((data) => {
          this.registrationId = data
          this.logText += "获取registrationId : " + this.registrationId + "\n"
        })
      } catch (exception) {
        this.logText += "错误 : " + exception + "\n"
        console.log(exception)
      }
    },
    setTags: function () {
      try {
        window.JPush.setTags({ sequence: 1, tags: [this.tagText1, this.tagText2, this.tagText3] },
          (result) => {
            this.logText += "设置标签 " + result.sequence + " " + result.tags + "\n"
          }, (error) => {
            alert(error.code)
          }
        )
      } catch (exception) {
        console.log(exception)
      }
    },
    getAllTags: function () {
      window.JPush.getAllTags({ sequence: 2},
        (result) => {
          this.logText += "获取当前绑定的所有标签 " + result.tags + "\n"
        }, (error) => {
          alert(error.code)
        }
      )
    },
    cleanTags: function () {
      window.JPush.cleanTags({ sequence: 1},
        (result) => {
          this.logText += "清除所有标签 " + result.tags + "\n"
        }, (error) => {
          alert(error.code)
        }
      )
    },
    setAlias: function () {
      window.JPush.setAlias({ sequence: 1, alias: this.aliasText},
        (result) => {
          this.logText += "设置别名 " + result.sequence + " " + result.alias + "\n"
        }, (error) => {
          alert(error.code)
        }
      )
    },
    getAlias: function () {
      window.JPush.getAlias({ sequence: 2},
        (result) => {
          this.logText += "查询别名 " + JSON.stringify(result) + "\n"
        }, (error) => {
          alert(error.code)
        }
      )
    },
    deleteAlias: function () {
      window.JPush.deleteAlias({ sequence: 3},
        (result) => {
          this.logText += "删除别名 " + JSON.stringify(result) + "\n"
        }, (error) => {
          alert(error.code)
        }
      )
    }
  },
  watch: {
    //观察 - 数据或方法
  },
  created() {
    //实例创建完成后
  },
  mounted() {
    //挂载实例后 - this.$el存在
    document.addEventListener("jpush.receiveRegistrationId", (event) => {
      alert("receiveRegistrationId " + JSON.stringify(event))
      this.registrationId = event.registrationId
    }, false)
    
    document.addEventListener("jpush.receiveNotification", (event) => {
      try {
        let alertContent;
        if (this.$vha.device.platform == "Android") {
          alertContent = event.alert;
        } else {
          alertContent = event.aps.alert;
        }
        this.logText += "接受的通知内容 : " + alertContent + "\n"
      } catch (exception) {
        console.log(exception)
      }
    }, false)
    
    document.addEventListener("jpush.receiveMessage", (event) => {
      try {
        let message;
        if (this.$vha.device.platform == "Android") {
          message = event.message;
        } else {
          message = event.content;
        }
        this.logText += "接受的自定义消息 : " + message + "\n"
      } catch (exception) {
        console.log(exception)
      }
    }, false)
  },
  beforeDestroy() {
    //销毁前 - 实例仍然完全可用
  },
  destroyed() {
    //销毁后
  }
}
</script>