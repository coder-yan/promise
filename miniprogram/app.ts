import { getSetting, getUserInfo } from "./utils/util"

// app.ts
App<IAppOption>({
  globalData: {
    userInfo: new Promise((resolve, reject) => {
      // 获取用户信息 Promise版
      getSetting().then(res => {
        if (res.authSetting['scope.userInfo']) {
          return getUserInfo()
        }
        return Promise.resolve(undefined)
      }).then(res => {
        if (!res) {
          return
        }
        
        resolve(res.userInfo)
      }).catch(err => reject(err))
    })
  },

  onLaunch(opt) {
    console.log('lifecycle: app onLaunch')
    console.log(opt)
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        console.log(res.code)
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      },
    })


    // 获取用户信息，callback版
    //   wx.getSetting({
    //     success: res => {
    //       if (res.authSetting['scope.userInfo']){
    //         wx.getUserInfo({
    //           success: res => {
    //             this.globalData.userInfo = res.userInfo
    //             if (this.userInfoReadyCallback) {
    //               this.userInfoReadyCallback(res)
    //             }
    //           }
    //         })
    //       }
    //     }
    //   })
  },

  onShow() {
    console.log('lifecycle: app onShow')

  },
  onHide() {
    console.log('lifecycle: app onHide')

  },

})