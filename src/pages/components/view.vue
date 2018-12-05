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
          background-color #6fb6ff
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
          background-color #6fb6ff
  .p_UI-myshow
    >.vha_UI-view
      background-color #eee
      >.vha_UI-subview
        border rpx(10) solid #eee
        outline rpx(1) solid #c9c9c9
        background-color #6fb6ff
  
  .p_UI-myshowB
    >.vha_UI-view
      background-color #f3f3f3
      >.vha_UI-subview
        padding rpx(10)
  
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
        vha-view是css3盒子模型的抽象组件，并以极简的方式实现了自由网格、自由宫格，你可以使用它展示一切内容。
        <br><br>
        你也可以使用css3盒子组合使用它，下面是vha-view常见用法展示。
        <br><br>
        更详细的用法请查阅css3盒子模型相关资料。
      </div>
      
      <p class="_UI-title">显示方式 display：块状(block) / 内联(inline)</p>
      
      <div class="_UI-showBox p_UI-show">
        <div style="border:1px solid red" :style="{width:vha_rpx(400),height:vha_rpx(160)}">
          <vha-view>我是块状元素就像div</vha-view>
        </div>
        <div class="_ph-2x"></div>
        <div style="border:1px solid red" :style="{width:vha_rpx(400),height:vha_rpx(160)}">
          <vha-view display="inline">我是内联块元素就像span,我也可以撑满视图</vha-view>
        </div>
      </div>
      
      <p class="_UI-title">轴向 axis：横向(horizontal | x) / 纵向(vertical | y)</p>
      
      <div class="_UI-showBox p_UI-show">
        <vha-view>
          <vha-subview>item 1</vha-subview>
          <vha-subview>item 2</vha-subview>
          <vha-subview>item 3</vha-subview>
        </vha-view>
        <div class="_ph-2x"></div>
        <vha-view axis="y">
          <vha-subview>item 1</vha-subview>
          <vha-subview>item 2</vha-subview>
          <vha-subview>item 3</vha-subview>
        </vha-view>
      </div>
      
      <p class="_UI-title">轴线对齐 align-items：顶部(flex-start) / 居中(center) / 底部(flex-end)</p>
      
      <div class="_UI-showBox p_UI-show">
        <vha-view axis="y" align="start">
          <vha-subview>item 1</vha-subview>
          <vha-subview>item 2</vha-subview>
        </vha-view>
        <div class="_ph-2x"></div>
        <vha-view axis="y" align="center">
          <vha-subview>item 1</vha-subview>
          <vha-subview>item 2</vha-subview>
        </vha-view>
        <div class="_ph-2x"></div>
        <vha-view axis="y" align="end">
          <vha-subview>item 1</vha-subview>
          <vha-subview>item 2</vha-subview>
        </vha-view>
      </div>
      
      <p class="_UI-title">轴向分布 justify-content：顶部(flex-start(默认)) / 底部(flex-end) / 紧凑(center) / 平均(space-around) / 贴边(space-between)</p>
      
      <div class="_UI-showBox p_UI-show">
        <vha-view justify="start">
          <vha-subview>item 1</vha-subview>
          <vha-subview>item 2</vha-subview>
          <vha-subview>item 3</vha-subview>
        </vha-view>
        <div class="_ph-2x"></div>
        <vha-view justify="end">
          <vha-subview>item 1</vha-subview>
          <vha-subview>item 2</vha-subview>
          <vha-subview>item 3</vha-subview>
        </vha-view>
        <div class="_ph-2x"></div>
        <vha-view justify="center">
          <vha-subview>item 1</vha-subview>
          <vha-subview>item 2</vha-subview>
          <vha-subview>item 3</vha-subview>
        </vha-view>
        <div class="_ph-2x"></div>
        <vha-view justify="around">
          <vha-subview>item 1</vha-subview>
          <vha-subview>item 2</vha-subview>
          <vha-subview>item 3</vha-subview>
        </vha-view>
        <div class="_ph-2x"></div>
        <vha-view justify="between">
          <vha-subview>item 1</vha-subview>
          <vha-subview>item 2</vha-subview>
          <vha-subview>item 3</vha-subview>
        </vha-view>
      </div>
      
      <p class="_UI-title">多行分布 justify-content：顶部(flex-start(默认)) / 底部(flex-end) / 紧凑(center) / 平均(space-around) / 贴边(space-between)</p>
      
      <div class="_UI-showBox p_UI-show">
        <vha-view wrap wrap-justify="start" :style="{width:vha_rpx(240),height:vha_rpx(440)}">
          <vha-subview>item 1</vha-subview>
          <vha-subview>item 2</vha-subview>
          <vha-subview>item 3</vha-subview>
          <vha-subview>item 4</vha-subview>
          <vha-subview>item 5</vha-subview>
        </vha-view>
        <!-- <div class="_ph-2x"></div>
        <vha-view wrap wrap-justify="end" :style="{width:vha_rpx(240),height:vha_rpx(440)}">
          <vha-subview>item 1</vha-subview>
          <vha-subview>item 2</vha-subview>
          <vha-subview>item 3</vha-subview>
          <vha-subview>item 4</vha-subview>
          <vha-subview>item 5</vha-subview>
        </vha-view>
        <div class="_ph-2x"></div>
        <vha-view wrap wrap-justify="center" :style="{width:vha_rpx(240),height:vha_rpx(440)}">
          <vha-subview>item 1</vha-subview>
          <vha-subview>item 2</vha-subview>
          <vha-subview>item 3</vha-subview>
          <vha-subview>item 4</vha-subview>
          <vha-subview>item 5</vha-subview>
        </vha-view>
        <div class="_ph-2x"></div>
        <vha-view wrap wrap-justify="around" :style="{width:vha_rpx(240),height:vha_rpx(440)}">
          <vha-subview>item 1</vha-subview>
          <vha-subview>item 2</vha-subview>
          <vha-subview>item 3</vha-subview>
          <vha-subview>item 4</vha-subview>
          <vha-subview>item 5</vha-subview>
        </vha-view>
        <div class="_ph-2x"></div>
        <vha-view wrap wrap-justify="between" :style="{width:vha_rpx(240),height:vha_rpx(440)}">
          <vha-subview>item 1</vha-subview>
          <vha-subview>item 2</vha-subview>
          <vha-subview>item 3</vha-subview>
          <vha-subview>item 4</vha-subview>
          <vha-subview>item 5</vha-subview>
        </vha-view> -->
      </div>

      <p class="_UI-title">类型 type：网格(Grid)</p>
      
      <div class="_UI-showBox p_UI-show">
        <vha-view type="grid">
          <vha-subview>item 1</vha-subview>
          <vha-subview>item 2</vha-subview>
          <vha-subview>item 3</vha-subview>
          <vha-subview>item 4</vha-subview>
          <vha-subview>item 5</vha-subview>
        </vha-view>
        <div class="_ph-2x"></div>
        <vha-view type="grid">
          <vha-subview flex="50">item 1 flex="50"</vha-subview>
          <vha-subview>item 2</vha-subview>
          <vha-subview>item 3</vha-subview>
        </vha-view>
        <div class="_ph-2x"></div>
        <vha-view type="grid">
          <vha-subview flex="75">item 1 flex="75"</vha-subview>
          <vha-subview>item 2</vha-subview>
        </vha-view>
        <div class="_ph-2x"></div>
        <vha-view type="grid">
          <vha-subview>item 1</vha-subview>
          <vha-subview flex="75">item 2 flex="75"</vha-subview>
        </vha-view>
        <div class="_ph-2x"></div>
        <vha-view class="p_UI-free _border-line" type="grid" gridLine :style="{height:vha_rpx(160)}">
          <vha-subview flex="30">
            1
          </vha-subview>
          <vha-subview>
            <vha-view axis="y" type="grid" gridLine>
              <vha-subview flex="60">
                2
              </vha-subview>
              <vha-subview>
                <vha-view type="grid" gridLine>
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
        <vha-view class="p_UI-free _border-line" type="grid" :style="{height:vha_rpx(160)}">
          <vha-subview flex="30" class="_border-right-line">
            1
          </vha-subview>
          <vha-subview>
            <vha-view axis="y" type="grid">
              <vha-subview flex="60" class="_border-bottom-line">
                2
              </vha-subview>
              <vha-subview>
                <vha-view type="grid">
                  <vha-subview flex="70" class="_border-right-line">
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
      
      <p class="_UI-title">实例应用 use：子元素居中 / 九宫格 / 三段式</p>
      
      <div class="_UI-showBox p_UI-myshow">
        <vha-view :style="{height:vha_rpx(240)}">
          <vha-subview :style="{margin:'auto'}">居中方式一: margin: auto</vha-subview>
        </vha-view>
        
        <div class="_ph-4x"></div>
      
        <vha-view align="center" justify="center" :style="{height:vha_rpx(240)}">
          <vha-subview>居中方式二: 轴线居中、紧凑</vha-subview>
        </vha-view>
        
        <div class="_ph-4x"></div>
      
        <vha-view class="p_UI-cells" type="grid" gridLine>
          <vha-subview>
            <vha-button class="_df _fdc _aic _jcc _cl-error" type="none" size="full" icon="fa fa-home">
              主页
            </vha-button>
          </vha-subview>
          <vha-subview>
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
        <vha-view class="p_UI-cells _border-top-line" type="grid" gridLine>
          <vha-subview>
            <vha-button class="_df _fdc _aic _jcc _cl-info" type="none" size="full" icon="fa fa-search">
              搜索
            </vha-button>
          </vha-subview>
          <vha-subview>item 5</vha-subview>
          <vha-subview>item 6</vha-subview>
        </vha-view>
        <vha-view class="p_UI-cells _border-top-line" type="grid" gridLine>
          <vha-subview>item 7</vha-subview>
          <vha-subview>item 8</vha-subview>
          <vha-subview>item 9</vha-subview>
        </vha-view>
      
        <div class="_ph-4x"></div>
        
        <vha-view>
          <vha-subview>item 1</vha-subview>
          <vha-subview full="width">item 2</vha-subview>
          <vha-subview>item 3</vha-subview>
        </vha-view>
      </div>
      
      <div class="_UI-showBox p_UI-myshowB">
        <vha-view type="grid" :style="{height:vha_rpx(80)}">
          <vha-subview class="_df _fdc _aic _jcc" flex="20"><span class="_fmla">用户名:</span></vha-subview>
          <vha-subview class="_df _fdc _jcc">
            <vha-input placeholder="请输入" size="full"></vha-input>
          </vha-subview>
        </vha-view>
        <vha-view type="grid" :style="{height:vha_rpx(80)}">
          <vha-subview class="_df _fdc _aic _jcc" flex="20"><span class="_fmla">密码:</span></vha-subview>
          <vha-subview class="_df _fdc _jcc">
            <vha-input type="password" placeholder="请输入" size="full">
              <span slot="leftBox">111</span>
              
            </vha-input>
          </vha-subview>
        </vha-view>
      </div>

      <p class="_UI-title"></p>
      
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