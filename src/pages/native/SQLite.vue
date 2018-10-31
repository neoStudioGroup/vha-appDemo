<style lang="stylus">
.native_PG-sqlite
  box-sizing border-box
  display flex
  flex-direction column
  .p_UI-content
    flex 1
</style>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<template>
  <vha-page class="native_PG-sqlite">

    <vha-scrollview class="p_UI-content">
      <div class="_UI-button" @click="Echotest()">
        Echo测试
      </div>
      
      <div class="_UI-button" @click="Selftest()">
        Self测试
      </div>
      
      <div class="_UI-button" @9click="SQLite()">
        本地数据库
      </div>
    </vha-scrollview>
    
    <UIlog :text="logText"></UIlog>

  </vha-page>
</template>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<script type="text/ecmascript-6">
import UIlog from "../../components/_UI-log"

export default {
  name: 'nativePGsqlite',
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
    Echotest: function () {
      this.$vha.sqlite.echoTest(() => {
        this.logText += "ECHO 测试 OK" + "\n"
      })
    },
    Selftest: function () {
      this.$vha.sqlite.selfTest(() => {
        this.logText += "SELF 测试 OK" + "\n"
      })
    },
    SQLite: function () {
      let db = this.$vha.sqlite.openDatabase({name: 'test.db', location: 'default'})
      let query = "INSERT INTO test_table (data, data_num) VALUES (?,?)"
      
      db.transaction((tr) => {
        tr.executeSql(query, [], (tx, result) => {
          console.log("insertId: " + result.insertId)
          this.logText += "insertId：" + result.insertId + "\n"
        },
        (transaction, error) => {
          this.logText += "出错：" + error + "\n"
        })
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
    //挂载实例后 - this.$el存在
  },
  beforeDestroy() {
    //销毁前 - 实例仍然完全可用
  },
  destroyed() {
    //销毁后
  }
}
</script>