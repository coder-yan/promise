// logs.ts
// const util = require('../../utils/util.js')
import { formatTime } from '../../utils/util'

Page({
  data: {
    logs: [],
  },
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

  onShow() {
    console.log('lifecycle: index onShow')
    
  },
  onHide() {
    console.log('lifecycle: index onHide')
    
  },
  onReady() {
    console.log('lifecycle: index onReady')
    
  },
  onUnload() {
    console.log('lifecycle: index onUnload')
    
  },  
})
