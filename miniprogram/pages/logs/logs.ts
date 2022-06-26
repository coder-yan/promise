// logs.ts
// const util = require('../../utils/util.js')
import { formatTime } from '../../utils/util'

Page({
  data: {
    logs: [],
  },

  // 页面加载的回调函数
  onLoad(opt) {
    console.log(opt )

    this.setData({
      logs: (wx.getStorageSync('logs') || []).map((log: string) => {
        return {
          date: formatTime(new Date(log)),
          timeStamp: log
        }
      }),
      logColor: opt.color,
    })
  },
  // 页面显示的回调函数
  onShow() {
    console.log('lifecycle: index onShow')
    
  },
  // 页面显示出来以后，还需要一些其他的加载渲染
  onReady() {
    console.log('lifecycle: index onReady')
    
  },
  // 页面隐藏的回调
  onHide() {
    console.log('lifecycle: index onHide')
    
  },
  // 页面被关闭的时候 
  onUnload() {
    console.log('lifecycle: index onUnload')
    
  }, 
  
  onLogTap() {
    wx.redirectTo({
      url: '/pages/test/test'
    })
  }
})
