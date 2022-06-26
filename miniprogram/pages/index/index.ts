// index.ts
// 获取应用实例
const app = getApp<IAppOption>()

Page({
  data: {
    motto: 'Hello World from vscode',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
    // canIUseOpenData: false
  },
  // 事件处理函数
  bindViewTap() {
    // wx.navigateTo({
    //   url: '../logs/logs?color=blue',
    // })
    console.log('tapped')
  },
  onLoad() {
    // @ts-ignore
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }

    this.updateMotto()
  },
  getUserProfile() {
    wx.getUserProfile({
      desc: '展示用户信息',
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e: any) {
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onBtnTap: function() {
    this.setData({
      motto: 'button clicked'
    })
  },

  updateMotto() {
    let shouldStop = false
    let count = 0
    
    setTimeout(() => {
      shouldStop = true
    }, 10000);

    const update = () => {
      count++
      if (!shouldStop) {
        this.setData({
          motto: `update count ${count}`
        }, () => {
          update()
        })
      }
    }

    update()
  }
})
