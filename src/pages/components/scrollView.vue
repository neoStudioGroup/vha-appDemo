<style lang="stylus">
.components_PG-scrollView
  background-color #f5f5f5 !important
  .UI-list
    .ui-l-item
      padding rpx(34)
      font-size rpx(28)
      border-top-line(1px solid #ddd)
      background-color #fff
      &:nth-child(2n)
        background-color #f5f5f5
</style>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<template>
  <vha-page class="components_PG-scrollView">
    <vha-scrollview class="UI-list" :on-refresh="onRefresh" :on-infinite="onInfinite">
      <div class="ui-l-item" v-for="(item, index) in items" :key="index" @click="onItemClick(index)">
        {{ item }} - item data test.
      </div>
      
      <div v-if="infiniteCount >= 2" slot="infinite">没有更多数据</div>
    </vha-scrollview>
  </vha-page>
</template>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<script type="text/ecmascript-6">
export default {
  name: 'componentsPGscrollView',
  data() {
    //动态数据
    return {
      top: 0,
      bottom: 0,
      items: [],
      infiniteCount: 0
    }
  },
  components: {
    //组件 - 引入或定义
  },
  methods: {
    //方法 - 进入页面创建
    onRefresh(done) {
      setTimeout(() => {
        let start = this.top - 1
        for (let i = start; i > start - 10; i--) {
          this.items.splice(0, 0, i)
        }
        this.top = this.top - 10;

        done()
      }, 1500)
    },
    onInfinite(done) {
      setTimeout(() => {
        if (this.infiniteCount < 2) {
          let start = this.bottom + 1
          for (let i = start; i < start + 10; i++) {
            this.items.push(i)
          }
          this.bottom = this.bottom + 10;

          this.infiniteCount++
        }

        done()
      }, 1500)
    },
    onItemClick(index) {
      console.log(index)
    }
  },
  watch: {
    //观察 - 数据或方法变动
  },
  mounted() {
    //挂载实例后 - this.$el存在
    for (let i = 1; i <= 20; i++) {
      this.items.push(i)
    }
    this.top = 1
    this.bottom = 20
  },
  beforeDestroy() {
    //销毁前 - 实例仍然完全可用
  }
}
</script>