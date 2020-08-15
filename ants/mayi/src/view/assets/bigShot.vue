<template>
  <div class>
    <div>
      <van-nav-bar title="关注大咖" left-text="返回" left-arrow @click-left="onReturn()" />
    </div>

    <div>
      <van-tabs :sticky="true" :swipeable="true">
        <van-tab title="推荐">
          <div style="margin:1.5em;font-size:0.5em;opacity:0.5">每周热榜</div>
          <van-row>
            <van-col span="5">
              <img
                :src="require('@/assets/images/cat.jpg')"
                width="50"
                height="50"
                style="margin-left:1em"
              />
            </van-col>
            <van-col span="15">
              <label for>龙行天下虎</label>
              <div style="font-size:.8em; opacity:.5;">基金实战派,...跟..,397758粉丝</div>
              <div style="font-size:.8em; opacity:.5;">最近收到264965个赞，52个评论</div>
            </van-col>
            <van-col span="4">
              <van-button type="info" size="small" plain>+关注</van-button>
            </van-col>
          </van-row>
          <van-row style="margin-top:1.5em">
            <van-col span="5">
              <img
                :src="require('@/assets/images/cat.jpg')"
                width="50"
                height="50"
                style="margin-left:1em"
              />
            </van-col>
            <van-col span="15">
              <label for>小高理财</label>
              <div style="font-size:.8em; opacity:.5;">百万实盘养派,...跟..,397758粉丝</div>
              <div style="font-size:.8em; opacity:.5;">最近收到264965个赞，52个评论</div>
            </van-col>
            <van-col span="4">
              <van-button type="info" size="small" plain>+关注</van-button>
            </van-col>
          </van-row>
          <van-row style="margin-top:1.5em">
            <van-col span="5">
              <img
                :src="require('@/assets/images/cat.jpg')"
                width="50"
                height="50"
                style="margin-left:1em"
              />
            </van-col>
            <van-col span="15">
              <label for>草根爱养鸡</label>
              <div style="font-size:.8em; opacity:.5;">50万实盘派,...跟..,397758粉丝</div>
              <div style="font-size:.8em; opacity:.5;">最近收到264965个赞，52个评论</div>
            </van-col>
            <van-col span="4">
              <van-button type="info" size="small" plain>+关注</van-button>
            </van-col>
          </van-row>
          <van-row style="margin-top:1.5em">
            <van-col span="5">
              <img
                :src="require('@/assets/images/cat.jpg')"
                width="50"
                height="50"
                style="margin-left:1em"
              />
            </van-col>
            <van-col span="15">
              <label for>大头哥哥你好呀</label>
              <div style="font-size:.8em; opacity:.5;">投基技术派,...跟..,397758粉丝</div>
              <div style="font-size:.8em; opacity:.5;">最近收到264965个赞，52个评论</div>
            </van-col>
            <van-col span="4">
              <van-button type="info" size="small" plain>+关注</van-button>
            </van-col>
          </van-row>
          <van-row style="margin-top:1.5em">
            <van-col span="5">
              <img
                :src="require('@/assets/images/cat.jpg')"
                width="50"
                height="50"
                style="margin-left:1em"
              />
            </van-col>
            <van-col span="15">
              <label for>二哈也理财</label>
              <div style="font-size:.8em; opacity:.5;">从行业潜力到市场派,...跟..,397758粉丝</div>
              <div style="font-size:.8em; opacity:.5;">最近收到264965个赞，52个评论</div>
            </van-col>
            <van-col span="4">
              <van-button type="info" size="small" plain>+关注</van-button>
            </van-col>
          </van-row>
          <van-row style="margin-top:1.5em">
            <van-col span="5">
              <img
                :src="require('@/assets/images/cat.jpg')"
                width="50"
                height="50"
                style="margin-left:1em"
              />
            </van-col>
            <van-col span="15">
              <label for>大章鱼</label>
              <div style="font-size:.8em; opacity:.5;">职业投资人，独特,...跟..,397758粉丝</div>
              <div style="font-size:.8em; opacity:.5;">最近收到264965个赞，52个评论</div>
            </van-col>
            <van-col span="4">
              <van-button type="info" size="small" plain>+关注</van-button>
            </van-col>
          </van-row>
          <van-row style="margin-top:1.5em">
            <van-col span="5">
              <img
                :src="require('@/assets/images/cat.jpg')"
                width="50"
                height="50"
                style="margin-left:1em"
              />
            </van-col>
            <van-col span="15">
              <label for>老股民的老研究</label>
              <div style="font-size:.8em; opacity:.5;">专注股民基金派,...跟..,397758粉丝</div>
              <div style="font-size:.8em; opacity:.5;">最近收到264965个赞，52个评论</div>
            </van-col>
            <van-col span="4">
              <van-button type="info" size="small" plain>+关注</van-button>
            </van-col>
          </van-row>
          <van-row style="margin-top:1.5em">
            <van-col span="5">
              <img
                :src="require('@/assets/images/cat.jpg')"
                width="50"
                height="50"
                style="margin-left:1em"
              />
            </van-col>
            <van-col span="15">
              <label for>酷辣辣</label>
              <div style="font-size:.8em; opacity:.5;">专注股民基金派,...758粉丝</div>
              <div style="font-size:.8em; opacity:.5;">最近收到1个赞，0个评论</div>
            </van-col>
            <van-col span="4">
              <van-button type="info" size="small" plain>+关注</van-button>
            </van-col>
          </van-row>
          <van-row style="margin-top:1.5em">
            <van-col span="5">
              <img
                :src="require('@/assets/images/cat.jpg')"
                width="50"
                height="50"
                style="margin-left:1em"
              />
            </van-col>
            <van-col span="15">
              <label for>小猫喵喵</label>
              <div style="font-size:.8em; opacity:.5;">专注股民基金派,....,1074粉丝</div>
              <div style="font-size:.8em; opacity:.5;">最近收到2645个赞，22个评论</div>
            </van-col>
            <van-col span="4">
              <van-button type="info" size="small" plain>+关注</van-button>
            </van-col>
          </van-row>
        </van-tab>
        <van-tab title="基金">
          <van-row style="margin-top:1.1em;">
            <van-col span="5">
              <img
                :src="require('@/assets/images/cat.jpg')"
                width="50"
                height="50"
                style="margin-left:1em"
              />
            </van-col>
            <van-col span="15">
              <label for>龙行天下虎</label>
              <div style="font-size:.8em; opacity:.5;">基金实战派,...跟..,397758粉丝</div>
              <div style="font-size:.8em; opacity:.5;">最近收到264965个赞，52个评论</div>
            </van-col>
            <van-col span="4">
              <van-button type="info" size="small" plain>+关注</van-button>
            </van-col>
          </van-row>
          <van-row style="margin-top:1.5em">
            <van-col span="5">
              <img
                :src="require('@/assets/images/cat.jpg')"
                width="50"
                height="50"
                style="margin-left:1em"
              />
            </van-col>
            <van-col span="15">
              <label for>小高理财</label>
              <div style="font-size:.8em; opacity:.5;">百万实盘养派,...跟..,397758粉丝</div>
              <div style="font-size:.8em; opacity:.5;">最近收到264965个赞，52个评论</div>
            </van-col>
            <van-col span="4">
              <van-button type="info" size="small" plain>+关注</van-button>
            </van-col>
          </van-row>
          <van-row style="margin-top:1.5em">
            <van-col span="5">
              <img
                :src="require('@/assets/images/cat.jpg')"
                width="50"
                height="50"
                style="margin-left:1em"
              />
            </van-col>
            <van-col span="15">
              <label for>草根爱养鸡</label>
              <div style="font-size:.8em; opacity:.5;">50万实盘派,...跟..,397758粉丝</div>
              <div style="font-size:.8em; opacity:.5;">最近收到264965个赞，52个评论</div>
            </van-col>
            <van-col span="4">
              <van-button type="info" size="small" plain>+关注</van-button>
            </van-col>
          </van-row>
          <van-row style="margin-top:1.5em">
            <van-col span="5">
              <img
                :src="require('@/assets/images/cat.jpg')"
                width="50"
                height="50"
                style="margin-left:1em"
              />
            </van-col>
            <van-col span="15">
              <label for>大头哥哥你好呀</label>
              <div style="font-size:.8em; opacity:.5;">投基技术派,...跟..,397758粉丝</div>
              <div style="font-size:.8em; opacity:.5;">最近收到264965个赞，52个评论</div>
            </van-col>
            <van-col span="4">
              <van-button type="info" size="small" plain>+关注</van-button>
            </van-col>
          </van-row>
          <van-row style="margin-top:1.5em">
            <van-col span="5">
              <img
                :src="require('@/assets/images/cat.jpg')"
                width="50"
                height="50"
                style="margin-left:1em"
              />
            </van-col>
            <van-col span="15">
              <label for>二哈也理财</label>
              <div style="font-size:.8em; opacity:.5;">从行业潜力到市场派,...跟..,397758粉丝</div>
              <div style="font-size:.8em; opacity:.5;">最近收到264965个赞，52个评论</div>
            </van-col>
            <van-col span="4">
              <van-button type="info" size="small" plain>+关注</van-button>
            </van-col>
          </van-row>
          <van-row style="margin-top:1.5em">
            <van-col span="5">
              <img
                :src="require('@/assets/images/cat.jpg')"
                width="50"
                height="50"
                style="margin-left:1em"
              />
            </van-col>
            <van-col span="15">
              <label for>大章鱼</label>
              <div style="font-size:.8em; opacity:.5;">职业投资人，独特,...跟..,397758粉丝</div>
              <div style="font-size:.8em; opacity:.5;">最近收到264965个赞，52个评论</div>
            </van-col>
            <van-col span="4">
              <van-button type="info" size="small" plain>+关注</van-button>
            </van-col>
          </van-row>
          <van-row style="margin-top:1.5em">
            <van-col span="5">
              <img
                :src="require('@/assets/images/cat.jpg')"
                width="50"
                height="50"
                style="margin-left:1em"
              />
            </van-col>
            <van-col span="15">
              <label for>老股民的老研究</label>
              <div style="font-size:.8em; opacity:.5;">专注股民基金派,...跟..,397758粉丝</div>
              <div style="font-size:.8em; opacity:.5;">最近收到264965个赞，52个评论</div>
            </van-col>
            <van-col span="4">
              <van-button type="info" size="small" plain>+关注</van-button>
            </van-col>
          </van-row>
          <van-row style="margin-top:1.5em">
            <van-col span="5">
              <img
                :src="require('@/assets/images/cat.jpg')"
                width="50"
                height="50"
                style="margin-left:1em"
              />
            </van-col>
            <van-col span="15">
              <label for>酷辣辣</label>
              <div style="font-size:.8em; opacity:.5;">专注股民基金派,...758粉丝</div>
              <div style="font-size:.8em; opacity:.5;">最近收到1个赞，0个评论</div>
            </van-col>
            <van-col span="4">
              <van-button type="info" size="small" plain>+关注</van-button>
            </van-col>
          </van-row>
          <van-row style="margin-top:1.5em">
            <van-col span="5">
              <img
                :src="require('@/assets/images/cat.jpg')"
                width="50"
                height="50"
                style="margin-left:1em"
              />
            </van-col>
            <van-col span="15">
              <label for>小猫喵喵</label>
              <div style="font-size:.8em; opacity:.5;">专注股民基金派,....,1074粉丝</div>
              <div style="font-size:.8em; opacity:.5;">最近收到2645个赞，22个评论</div>
            </van-col>
            <van-col span="4">
              <van-button type="info" size="small" plain>+关注</van-button>
            </van-col>
          </van-row>
        </van-tab>
        <van-tab title="股票">
          <van-row style="margin-top:1.1em;">
            <van-col span="5">
              <img
                :src="require('@/assets/images/cat.jpg')"
                width="50"
                height="50"
                style="margin-left:1em"
              />
            </van-col>
            <van-col span="15">
              <label for>王智俊</label>
              <div style="font-size:.8em; opacity:.5;">基金实战派,...跟..,397758粉丝</div>
              <div style="font-size:.8em; opacity:.5;">最近收到264965个赞，52个评论</div>
            </van-col>
            <van-col span="4">
              <van-button type="info" size="small" plain>+关注</van-button>
            </van-col>
          </van-row>
          <van-row style="margin-top:1.5em">
            <van-col span="5">
              <img
                :src="require('@/assets/images/cat.jpg')"
                width="50"
                height="50"
                style="margin-left:1em"
              />
            </van-col>
            <van-col span="15">
              <label for>天空子成北京</label>
              <div style="font-size:.8em; opacity:.5;">百万实盘养派,...跟..,397758粉丝</div>
              <div style="font-size:.8em; opacity:.5;">最近收到264965个赞，52个评论</div>
            </van-col>
            <van-col span="4">
              <van-button type="info" size="small" plain>+关注</van-button>
            </van-col>
          </van-row>
          <van-row style="margin-top:1.5em">
            <van-col span="5">
              <img
                :src="require('@/assets/images/cat.jpg')"
                width="50"
                height="50"
                style="margin-left:1em"
              />
            </van-col>
            <van-col span="15">
              <label for>草根爱养鸡</label>
              <div style="font-size:.8em; opacity:.5;">50万实盘派,...跟..,397758粉丝</div>
              <div style="font-size:.8em; opacity:.5;">最近收到264965个赞，52个评论</div>
            </van-col>
            <van-col span="4">
              <van-button type="info" size="small" plain>+关注</van-button>
            </van-col>
          </van-row>
          <van-row style="margin-top:1.5em">
            <van-col span="5">
              <img
                :src="require('@/assets/images/cat.jpg')"
                width="50"
                height="50"
                style="margin-left:1em"
              />
            </van-col>
            <van-col span="15">
              <label for>大头哥哥你好呀</label>
              <div style="font-size:.8em; opacity:.5;">投基技术派,...跟..,397758粉丝</div>
              <div style="font-size:.8em; opacity:.5;">最近收到264965个赞，52个评论</div>
            </van-col>
            <van-col span="4">
              <van-button type="info" size="small" plain>+关注</van-button>
            </van-col>
          </van-row>
          <van-row style="margin-top:1.5em">
            <van-col span="5">
              <img
                :src="require('@/assets/images/cat.jpg')"
                width="50"
                height="50"
                style="margin-left:1em"
              />
            </van-col>
            <van-col span="15">
              <label for>二哈也理财</label>
              <div style="font-size:.8em; opacity:.5;">从行业潜力到市场派,...跟..,397758粉丝</div>
              <div style="font-size:.8em; opacity:.5;">最近收到264965个赞，52个评论</div>
            </van-col>
            <van-col span="4">
              <van-button type="info" size="small" plain>+关注</van-button>
            </van-col>
          </van-row>
          <van-row style="margin-top:1.5em">
            <van-col span="5">
              <img
                :src="require('@/assets/images/cat.jpg')"
                width="50"
                height="50"
                style="margin-left:1em"
              />
            </van-col>
            <van-col span="15">
              <label for>大章鱼</label>
              <div style="font-size:.8em; opacity:.5;">职业投资人，独特,...跟..,397758粉丝</div>
              <div style="font-size:.8em; opacity:.5;">最近收到264965个赞，52个评论</div>
            </van-col>
            <van-col span="4">
              <van-button type="info" size="small" plain>+关注</van-button>
            </van-col>
          </van-row>
          <van-row style="margin-top:1.5em">
            <van-col span="5">
              <img
                :src="require('@/assets/images/cat.jpg')"
                width="50"
                height="50"
                style="margin-left:1em"
              />
            </van-col>
            <van-col span="15">
              <label for>老股民的老研究</label>
              <div style="font-size:.8em; opacity:.5;">专注股民基金派,...跟..,397758粉丝</div>
              <div style="font-size:.8em; opacity:.5;">最近收到264965个赞，52个评论</div>
            </van-col>
            <van-col span="4">
              <van-button type="info" size="small" plain>+关注</van-button>
            </van-col>
          </van-row>
          <van-row style="margin-top:1.5em">
            <van-col span="5">
              <img
                :src="require('@/assets/images/cat.jpg')"
                width="50"
                height="50"
                style="margin-left:1em"
              />
            </van-col>
            <van-col span="15">
              <label for>酷辣辣</label>
              <div style="font-size:.8em; opacity:.5;">专注股民基金派,...758粉丝</div>
              <div style="font-size:.8em; opacity:.5;">最近收到1个赞，0个评论</div>
            </van-col>
            <van-col span="4">
              <van-button type="info" size="small" plain>+关注</van-button>
            </van-col>
          </van-row>
          <van-row style="margin-top:1.5em">
            <van-col span="5">
              <img
                :src="require('@/assets/images/cat.jpg')"
                width="50"
                height="50"
                style="margin-left:1em"
              />
            </van-col>
            <van-col span="15">
              <label for>小猫喵喵</label>
              <div style="font-size:.8em; opacity:.5;">专注股民基金派,....,1074粉丝</div>
              <div style="font-size:.8em; opacity:.5;">最近收到2645个赞，22个评论</div>
            </van-col>
            <van-col span="4">
              <van-button type="info" size="small" plain>+关注</van-button>
            </van-col>
          </van-row>
        </van-tab>
        <van-tab title="财经">
          <van-row style="margin-top:1.1em;">
            <van-col span="5">
              <img
                :src="require('@/assets/images/cat.jpg')"
                width="50"
                height="50"
                style="margin-left:1em"
              />
            </van-col>
            <van-col span="15">
              <label for>少然说财经</label>
              <div style="font-size:.8em; opacity:.5;">基金实战派,...跟..,397758粉丝</div>
              <div style="font-size:.8em; opacity:.5;">最近收到264965个赞，52个评论</div>
            </van-col>
            <van-col span="4">
              <van-button type="info" size="small" plain>+关注</van-button>
            </van-col>
          </van-row>
          <van-row style="margin-top:1.5em">
            <van-col span="5">
              <img
                :src="require('@/assets/images/cat.jpg')"
                width="50"
                height="50"
                style="margin-left:1em"
              />
            </van-col>
            <van-col span="15">
              <label for>圣诞玫瑰</label>
              <div style="font-size:.8em; opacity:.5;">百万实盘养派,...跟..,397758粉丝</div>
              <div style="font-size:.8em; opacity:.5;">最近收到264965个赞，52个评论</div>
            </van-col>
            <van-col span="4">
              <van-button type="info" size="small" plain>+关注</van-button>
            </van-col>
          </van-row>
          <van-row style="margin-top:1.5em">
            <van-col span="5">
              <img
                :src="require('@/assets/images/cat.jpg')"
                width="50"
                height="50"
                style="margin-left:1em"
              />
            </van-col>
            <van-col span="15">
              <label for>骑牛看你</label>
              <div style="font-size:.8em; opacity:.5;">50万实盘派,...跟..,397758粉丝</div>
              <div style="font-size:.8em; opacity:.5;">最近收到264965个赞，52个评论</div>
            </van-col>
            <van-col span="4">
              <van-button type="info" size="small" plain>+关注</van-button>
            </van-col>
          </van-row>
          <van-row style="margin-top:1.5em">
            <van-col span="5">
              <img
                :src="require('@/assets/images/cat.jpg')"
                width="50"
                height="50"
                style="margin-left:1em"
              />
            </van-col>
            <van-col span="15">
              <label for>大财财经</label>
              <div style="font-size:.8em; opacity:.5;">投基技术派,...跟..,397758粉丝</div>
              <div style="font-size:.8em; opacity:.5;">最近收到264965个赞，52个评论</div>
            </van-col>
            <van-col span="4">
              <van-button type="info" size="small" plain>+关注</van-button>
            </van-col>
          </van-row>
          <van-row style="margin-top:1.5em">
            <van-col span="5">
              <img
                :src="require('@/assets/images/cat.jpg')"
                width="50"
                height="50"
                style="margin-left:1em"
              />
            </van-col>
            <van-col span="15">
              <label for>酷拉皮卡小杰</label>
              <div style="font-size:.8em; opacity:.5;">从行业潜力到市场派,...跟..,397758粉丝</div>
              <div style="font-size:.8em; opacity:.5;">最近收到264965个赞，52个评论</div>
            </van-col>
            <van-col span="4">
              <van-button type="info" size="small" plain>+关注</van-button>
            </van-col>
          </van-row>
          <van-row style="margin-top:1.5em">
            <van-col span="5">
              <img
                :src="require('@/assets/images/cat.jpg')"
                width="50"
                height="50"
                style="margin-left:1em"
              />
            </van-col>
            <van-col span="15">
              <label for>大章鱼</label>
              <div style="font-size:.8em; opacity:.5;">职业投资人，独特,...跟..,397758粉丝</div>
              <div style="font-size:.8em; opacity:.5;">最近收到264965个赞，52个评论</div>
            </van-col>
            <van-col span="4">
              <van-button type="info" size="small" plain>+关注</van-button>
            </van-col>
          </van-row>
          <van-row style="margin-top:1.5em">
            <van-col span="5">
              <img
                :src="require('@/assets/images/cat.jpg')"
                width="50"
                height="50"
                style="margin-left:1em"
              />
            </van-col>
            <van-col span="15">
              <label for>老股民的老研究</label>
              <div style="font-size:.8em; opacity:.5;">专注股民基金派,...跟..,397758粉丝</div>
              <div style="font-size:.8em; opacity:.5;">最近收到264965个赞，52个评论</div>
            </van-col>
            <van-col span="4">
              <van-button type="info" size="small" plain>+关注</van-button>
            </van-col>
          </van-row>
          <van-row style="margin-top:1.5em">
            <van-col span="5">
              <img
                :src="require('@/assets/images/cat.jpg')"
                width="50"
                height="50"
                style="margin-left:1em"
              />
            </van-col>
            <van-col span="15">
              <label for>酷辣辣</label>
              <div style="font-size:.8em; opacity:.5;">专注股民基金派,...758粉丝</div>
              <div style="font-size:.8em; opacity:.5;">最近收到1个赞，0个评论</div>
            </van-col>
            <van-col span="4">
              <van-button type="info" size="small" plain>+关注</van-button>
            </van-col>
          </van-row>
          <van-row style="margin-top:1.5em">
            <van-col span="5">
              <img
                :src="require('@/assets/images/cat.jpg')"
                width="50"
                height="50"
                style="margin-left:1em"
              />
            </van-col>
            <van-col span="15">
              <label for>小猫喵喵</label>
              <div style="font-size:.8em; opacity:.5;">专注股民基金派,....,1074粉丝</div>
              <div style="font-size:.8em; opacity:.5;">最近收到2645个赞，22个评论</div>
            </van-col>
            <van-col span="4">
              <van-button type="info" size="small" plain>+关注</van-button>
            </van-col>
          </van-row>
        </van-tab>
        <van-tab title="已关注">
          <van-row style="margin-top:1.5em">
            <van-col span="5">
              <img
                :src="require('@/assets/images/cat.jpg')"
                width="50"
                height="50"
                style="margin-left:1em"
              />
            </van-col>
            <van-col span="15">
              <label for>余额宝</label>
              <div style="font-size:.8em; opacity:.5;">暂时没有简介，48662413粉丝</div>
            </van-col>
            <van-col span="4">
              <van-button type="info" size="small" plain>已关注</van-button>
            </van-col>
          </van-row>
          <van-row style="margin-top:1.5em">
            <van-col span="5">
              <img
                :src="require('@/assets/images/cat.jpg')"
                width="50"
                height="50"
                style="margin-left:1em"
              />
            </van-col>
            <van-col span="15">
              <label for>蚂蚁财富生活号</label>
              <div style="font-size:.8em; opacity:.5;">暂时没有简介，96770493粉丝</div>
            </van-col>
            <van-col span="4">
              <van-button type="info" size="small" plain>已关注</van-button>
            </van-col>
          </van-row>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  data() {
    return {};
  },
  components: {},
  methods: {
    onReturn() {
      this.$router.push({ path: "/community" });
    },
  },
};
</script>

<style>
</style>
