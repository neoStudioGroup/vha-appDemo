<style lang="stylus">
// .components_PG-popup
</style>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<template>
  <vha-page class="components_PG-popup">
    <vha-scrollview>
      
      <div class="_UI-showBox">
        <vha-view type="grid">
          <vha-subview></vha-subview>
          <vha-subview class="_dif _fdc _aic"><vha-button @click="creatPopup('top')">顶部弹出</vha-button></vha-subview>
          <vha-subview></vha-subview>
        </vha-view>
        <div class="_ph-2x"></div>
        <vha-view type="grid">
          <vha-subview class="_dif _fdc _aic"><vha-button @click="creatPopup('left')">左侧弹出</vha-button></vha-subview>
          <vha-subview class="_dif _fdc _aic"><vha-button @click="creatPopup('center')">中心弹出</vha-button></vha-subview>
          <vha-subview class="_dif _fdc _aic"><vha-button @click="creatPopup('right')">右侧弹出</vha-button></vha-subview>
        </vha-view>
        <div class="_ph-2x"></div>
        <vha-view type="grid">
          <vha-subview></vha-subview>
          <vha-subview class="_dif _fdc _aic"><vha-button @click="creatPopup('bottom')">底部弹出</vha-button></vha-subview>
          <vha-subview></vha-subview>
        </vha-view>
        
        <!-- 这里演示将组件自身挂载到popup 去掉注释看到效果 -->
        <!-- <popupTest2>
          popupTest我创建后挂载自身到popup
        </popupTest2> -->
      </div>
      
      <p class="_UI-title">实例 ：</p>
      
      <div class="_UI-showBox">
        <vha-button @click="upgrade()">升级提示</vha-button>
        <div class="_ph-2x"></div>
        <vha-button @click="modal()">模态框</vha-button>
        <div class="_ph-2x"></div>
        <vha-button @click="dragEl()">可以拖动任意位置的元素</vha-button>
      </div>
      
      <p class="_UI-title"></p>
      
    </vha-scrollview>
  </vha-page>
</template>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<script type="text/ecmascript-6">
import popupTest from "./popup/popupTest"
import popupTest2 from "./popup/popupTest2"
import upgrade from "./popup/upgrade"
import modal from "./popup/modal"
import dragEl from "./popup/dragEl"
export default {
  name: 'componentsPGpopup',
  data() {
    //动态数据
    return {
    }
  },
  components: {
    //组件 - 引入或定义
    popupTest2,
    dragEl
  },
  methods: {
    //方法 - 进入页面创建
    creatPopup: function (_pos) {
      let _vhaPopup = this.$vhaPopup(popupTest)
      _vhaPopup.content.pos = _pos
      _vhaPopup.content.animate = _pos
      _vhaPopup.show()
    },
    upgrade: function () {
      let _vhaPopup = this.$vhaPopup(upgrade)
      _vhaPopup.content.animate = 'none'
      _vhaPopup.option.autoDestroy = false
    },
    modal: function () {
      let _vhaPopup = this.$vhaPopup(modal)
      _vhaPopup.content.pos = 'none'
      _vhaPopup.content.animate = 'bottom'
      _vhaPopup.show()
    },
    dragEl: function () {
      let _vhaPopup = this.$vhaPopup(dragEl)
      _vhaPopup.content.pos = 'none'
      _vhaPopup.mask.style = {
        backgroundColor: 'rgba(0,0,0,0.5)'
      }
      _vhaPopup.show()
    }
  },
  watch: {
    //观察 - 数据或方法变动
  },
  created() {
    //实例创建完成后
  },
  mounted() {
    //挂载实例后 - this.$el存在
  },
  beforeDestroy() {
    //销毁前 - 实例仍然完全可用
  }
}
</script>