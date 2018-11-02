<style lang="stylus">
.components_PG-view
  color #000
  .p_UI-show
      >.vha_UI-view
        padding rpx(16)
        background-color #eee
        >.vha_UI-subview
          margin rpx(2)
          width rpx(100)
          height rpx(100)
          border rpx(10) solid #eee
          outline rpx(1) solid #c9c9c9
          background-color #85aaed
  .p_UI-show
    >div
      >.vha_UI-view
        padding rpx(16)
        background-color #eee
        >.vha_UI-subview
          margin rpx(2)
          width rpx(100)
          height rpx(100)
          border rpx(10) solid #eee
          outline rpx(1) solid #c9c9c9
          background-color #85aaed
  .p_UI-myshow
    >.vha_UI-view
      background-color #eee
      >.vha_UI-subview
        border rpx(10) solid #eee
        outline rpx(1) solid #c9c9c9
        background-color #85aaed
  .p_UI-free
    padding 0 !important
    >.vha_UI-subview
      height auto !important
      margin 0 !important
      border none !important
      outline none !important
      background-color #fff !important
  .p_UI-cells
    padding 0 !important
    >.vha_UI-subview
      height rpx(130) !important
      margin 0 !important
      border none !important
      outline none !important
      background-color #fff !important
</style>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<template>
  <vha-page class="components_PG-view">
    <vha-scrollview>
      
      <div class="_UI-showBox">
        vha-view是css3盒子模型的抽象组件，并以极简的方式实现了自由网格、宫格，你可以使用它展示一切内容。
        <br><br>
        你也可以使用css3盒子代替它，下面是vha-view常见用法展示。
        <br><br>
        更详细的用法请查阅css3盒子模型相关资料。
      </div>
      
      <p class="_UI-note">显示方式 display：块状 / 内联</p>
      
      <div class="_UI-showBox p_UI-show">
        <div style="border:1px solid red" :style="{width:vha_rpx(400),height:vha_rpx(160)}">
          <vha-view>我是块状元素就像div</vha-view>
        </div>
        <div class="_framebox-2x"></div>
        <div style="border:1px solid red" :style="{width:vha_rpx(400),height:vha_rpx(160)}">
          <vha-view display="inline-flex">我是内联块元素就像span,我也可以撑满视图</vha-view>
        </div>
      </div>
      
      <p class="_UI-note">排列方向 direction：横向(horizontal) / 纵向(vertical)</p>
      
      <div class="_UI-showBox p_UI-show">
        <vha-view>
          <vha-subview>item 1</vha-subview>
          <vha-subview>item 2</vha-subview>
          <vha-subview>item 3</vha-subview>
        </vha-view>
        <div class="_framebox-2x"></div>
        <vha-view direction="vertical">
          <vha-subview>item 1</vha-subview>
          <vha-subview>item 2</vha-subview>
          <vha-subview>item 3</vha-subview>
        </vha-view>
      </div>
      
      <p class="_UI-note">类型 type：网格(Grid)</p>
      
      <div class="_UI-showBox p_UI-show">
        <vha-view type="grid">
          <vha-subview>item 1</vha-subview>
          <vha-subview>item 2</vha-subview>
          <vha-subview>item 3</vha-subview>
          <vha-subview>item 4</vha-subview>
          <vha-subview>item 5</vha-subview>
        </vha-view>
        <div class="_framebox-2x"></div>
        <vha-view type="grid">
          <vha-subview flex="50">item 1 flex="50"</vha-subview>
          <vha-subview>item 2</vha-subview>
          <vha-subview>item 3</vha-subview>
        </vha-view>
        <div class="_framebox-2x"></div>
        <vha-view type="grid">
          <vha-subview flex="75">item 1 flex="75"</vha-subview>
          <vha-subview>item 2</vha-subview>
        </vha-view>
        <div class="_framebox-2x"></div>
        <vha-view type="grid">
          <vha-subview>item 1</vha-subview>
          <vha-subview flex="75">item 2 flex="75"</vha-subview>
        </vha-view>
        <div class="_framebox-2x"></div>
        <vha-view class="p_UI-free _line-border" type="grid" :showLine="true" :style="{height:vha_rpx(160)}">
          <vha-subview flex="30">
            1
          </vha-subview>
          <vha-subview>
            <vha-view direction="vertical" type="grid" :showLine="true">
              <vha-subview flex="60">
                2
              </vha-subview>
              <vha-subview>
                <vha-view type="grid" :showLine="true">
                  <vha-subview flex="70">
                    3
                  </vha-subview>
                  <vha-subview>
                    4
                  </vha-subview>
                  <vha-subview>
                    5
                  </vha-subview>
                </vha-view>
              </vha-subview>
            </vha-view>
          </vha-subview>
        </vha-view>
        <!-- 你也可以自由的添加线条
        <vha-view class="p_UI-free _line-border" type="grid" :style="{height:vha_rpx(160)}">
          <vha-subview flex="30" class="_line-border-right">
            1
          </vha-subview>
          <vha-subview>
            <vha-view direction="vertical" type="grid">
              <vha-subview flex="60" class="_line-border-bottom">
                2
              </vha-subview>
              <vha-subview>
                <vha-view type="grid">
                  <vha-subview flex="70" class="_line-border-right">
                    3
                  </vha-subview>
                  <vha-subview>
                    4
                  </vha-subview>
                  <vha-subview>
                    5
                  </vha-subview>
                </vha-view>
              </vha-subview>
            </vha-view>
          </vha-subview>
        </vha-view> -->
      </div>
      
      <p class="_UI-note">轴向分布 justify-content：顶部(flex-start(默认)) / 底部(flex-end) / 紧凑(center) / 平均(space-around) / 贴边(space-between)</p>
      
      <div class="_UI-showBox p_UI-show">
        <vha-view class="_jcfs">
          <vha-subview>item 1</vha-subview>
          <vha-subview>item 2</vha-subview>
          <vha-subview>item 3</vha-subview>
        </vha-view>
        <div class="_framebox-2x"></div>
        <vha-view class="_jcfe">
          <vha-subview>item 1</vha-subview>
          <vha-subview>item 2</vha-subview>
          <vha-subview>item 3</vha-subview>
        </vha-view>
        <div class="_framebox-2x"></div>
        <vha-view class="_jcc">
          <vha-subview>item 1</vha-subview>
          <vha-subview>item 2</vha-subview>
          <vha-subview>item 3</vha-subview>
        </vha-view>
        <div class="_framebox-2x"></div>
        <vha-view class="_jssa">
          <vha-subview>item 1</vha-subview>
          <vha-subview>item 2</vha-subview>
          <vha-subview>item 3</vha-subview>
        </vha-view>
        <div class="_framebox-2x"></div>
        <vha-view class="_jcsb">
          <vha-subview>item 1</vha-subview>
          <vha-subview>item 2</vha-subview>
          <vha-subview>item 3</vha-subview>
        </vha-view>
      </div>
      
      <p class="_UI-note">轴线对齐 align-items：顶部(flex-start) / 居中(center) / 底部(flex-end)</p>
      
      <div class="_UI-showBox p_UI-show">
        <vha-view class="_aifs" direction="vertical">
          <vha-subview>item 1</vha-subview>
          <vha-subview>item 2</vha-subview>
          <vha-subview>item 3</vha-subview>
        </vha-view>
        <div class="_framebox-2x"></div>
        <vha-view class="_aic" direction="vertical">
          <vha-subview>item 1</vha-subview>
          <vha-subview>item 2</vha-subview>
          <vha-subview>item 3</vha-subview>
        </vha-view>
        <div class="_framebox-2x"></div>
        <vha-view class="_aife" direction="vertical">
          <vha-subview>item 1</vha-subview>
          <vha-subview>item 2</vha-subview>
          <vha-subview>item 3</vha-subview>
        </vha-view>
      </div>
      
      <p class="_UI-note">多行分布 justify-content：顶部(flex-start(默认)) / 底部(flex-end) / 紧凑(center) / 平均(space-around) / 贴边(space-between)</p>
      
      <div class="_UI-showBox p_UI-show">
        <vha-view :wrap="true" class="_acfs" :style="{width:vha_rpx(240),height:vha_rpx(440)}">
          <vha-subview>item 1</vha-subview>
          <vha-subview>item 2</vha-subview>
          <vha-subview>item 3</vha-subview>
          <vha-subview>item 4</vha-subview>
          <vha-subview>item 5</vha-subview>
        </vha-view>
        <!-- <div class="_framebox-2x"></div>
        <vha-view :wrap="true" class="_acfe" :style="{width:vha_rpx(240),height:vha_rpx(440)}">
          <vha-subview>item 1</vha-subview>
          <vha-subview>item 2</vha-subview>
          <vha-subview>item 3</vha-subview>
          <vha-subview>item 4</vha-subview>
          <vha-subview>item 5</vha-subview>
        </vha-view>
        <div class="_framebox-2x"></div>
        <vha-view :wrap="true" class="_acc" :style="{width:vha_rpx(240),height:vha_rpx(440)}">
          <vha-subview>item 1</vha-subview>
          <vha-subview>item 2</vha-subview>
          <vha-subview>item 3</vha-subview>
          <vha-subview>item 4</vha-subview>
          <vha-subview>item 5</vha-subview>
        </vha-view>
        <div class="_framebox-2x"></div>
        <vha-view :wrap="true" class="_acsa" :style="{width:vha_rpx(240),height:vha_rpx(440)}">
          <vha-subview>item 1</vha-subview>
          <vha-subview>item 2</vha-subview>
          <vha-subview>item 3</vha-subview>
          <vha-subview>item 4</vha-subview>
          <vha-subview>item 5</vha-subview>
        </vha-view>
        <div class="_framebox-2x"></div>
        <vha-view :wrap="true" class="_acsb" :style="{width:vha_rpx(240),height:vha_rpx(440)}">
          <vha-subview>item 1</vha-subview>
          <vha-subview>item 2</vha-subview>
          <vha-subview>item 3</vha-subview>
          <vha-subview>item 4</vha-subview>
          <vha-subview>item 5</vha-subview>
        </vha-view> -->
      </div>
      
      <p class="_UI-note">实例应用 use：子元素居中(margin: auto) / 九宫格 / 三段式</p>
      
      <div class="_UI-showBox p_UI-myshow">
        <vha-view size="none" :style="{height:vha_rpx(240)}">
          <vha-subview class="_fma">子元素居中正确方式</vha-subview>
        </vha-view>

        <div class="_framebox-4x"></div>
        <div>
          <vha-view class="p_UI-cells" type="grid" :showLine="true">
            <vha-subview >
              <vha-button class="_df _fdc _aic _jcc _cl-error" type="none" size="full" icon="fa fa-home">
                主页
              </vha-button>
            </vha-subview>
            <vha-subview >
              <vha-button class="_df _fdc _aic _jcc _cl-warning" type="none" size="full" icon="fa fa-star">
                好评
              </vha-button>
            </vha-subview>
            <vha-subview>
              <vha-button class="_df _fdc _aic _jcc _cl-success" type="none" size="full" icon="fa fa-map-marker">
                附近
              </vha-button>
            </vha-subview>
          </vha-view>
          <vha-view class="p_UI-cells _line-border-top" type="grid" :showLine="true" style="background-color:blue">
            <vha-subview>
              <vha-button class="_df _fdc _aic _jcc _cl-info" type="none" size="full" icon="fa fa-search">
                搜索
              </vha-button>
            </vha-subview>
            <vha-subview>item 5</vha-subview>
            <vha-subview>item 6</vha-subview>
          </vha-view>
          <vha-view class="p_UI-cells _line-border-top" type="grid" :showLine="true" style="background-color:blue">
            <vha-subview>item 7</vha-subview>
            <vha-subview>item 8</vha-subview>
            <vha-subview>item 9</vha-subview>
          </vha-view>
        </div>
        
        <div class="_framebox-4x"></div>
        <vha-view size="none">
          <vha-subview>item 1</vha-subview>
          <vha-subview :style="{width:'100%',flex:'1'}">item 2</vha-subview>
          <vha-subview>item 3</vha-subview>
        </vha-view>
      </div>
      
      <p class="_UI-note"></p>
      
    </vha-scrollview>
  </vha-page>
</template>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<script type="text/ecmascript-6">
export default {
  name: 'componentsPGview',
  data() {
    //动态数据
    return {
    }
  },
  components: {
    //组件 - 引入或定义
  },
  methods: {
    //方法 - 进入页面创建
  },
  watch: {
    //观察 - 数据或方法变动
  },
  mounted() {
    //挂载实例后 - this.$el存在
  },
  beforeDestroy() {
    //销毁前 - 实例仍然完全可用
  }
}
</script>