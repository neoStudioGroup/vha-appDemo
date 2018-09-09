<style lang="stylus">
.i_UI-contacts
  box-sizing border-box
  display flex
  flex-direction column
  .i_UI-content
    flex 1
</style>
--------------------------------------------------------------------------------
<template>
  <div class="i_UI-contacts">

    <vha-scrollview class="i_UI-content">
      
      <div class="_UI-button" @click="getAll()">
        获取通讯录
      </div>
      
      <div class="_UI-hr"></div>
      
      <label class="_UI-input">
        <span class="input-label">姓名：</span>
        <input type="text" v-model="contact.displayName">
      </label>
      
      <label class="_UI-input">
        <span class="input-label">电话：</span>
        <input type="text" v-model="contact.phoneNumbers[0].value">
      </label>
      
      <label class="_UI-input">
        <span class="input-label">邮件：</span>
        <input type="text" v-model="contact.emails[0].value">
      </label>
      
      <div class="_UI-button" @click="save()">
        保存
      </div>
      
    </vha-scrollview>
    
    <UIlog :text="logText"></UIlog>

  </div>
</template>
--------------------------------------------------------------------------------
<script type="text/ecmascript-6">
import UIlog from "../../components/_UI-log"

export default {
  name: 'i_UI-contacts',
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
      contact: {
        "displayName": "",
        "phoneNumbers": [
          {
            "value": "",
            "type": "phone"
          },
        ],
        "emails": [
          {
            "value": "abc@gmail.com",
            "type": "home"
          }
        ],
        "photos": [
          {
            "type": "base64",
            "value": ""
          }
        ]
      }
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
    getAll: function () {
      var options = {}
      options.filter = ""
      options.multiple = true
      this.$vha.contacts.find(options, (allContacts) => {
        let contactTxt = ""
        allContacts.forEach((element, index) => {
          contactTxt += element.displayName + " = "
          
          element.phoneNumbers.forEach((phone, index) => {
            if (index + 1 === element.phoneNumbers.length) {
              contactTxt += this._processphone(phone.value)
            } else {
              contactTxt += this._processphone(phone.value) + ","
            }
          })
          contactTxt +=  "\n"
        })
        this.logText += contactTxt + "\n"
      },(error) => {
        this.logText += "错误 : " + error + "\n"
      })
    },
    _processphone: function (phone) {
      if (phone.indexOf("-") != -1) {
        return phone.replace(/-/g,"")
      }else if (phone.indexOf(" ") != -1) {
        return phone.replace(/ /g,"")
      }else {
        return phone
      }
    },
    save: function () {
      this.$vha.contacts.save(this.contact, (result) => {
        this.logText += "成功 : " + result + "\n"
      }, (err) => {
        this.logText += "错误 : " + err + "\n"
      })
    }
  },
  watch: {
    //观察 - 数据或方法
  },
  created() {
    //实例创建完成后
  },
  mounted() {
    //挂载实例后 - this.el存在
  },
  beforeDestroy() {
    //销毁前 - 实例仍然完全可用
  },
  destroyed() {
    //销毁后
  }
}
</script>