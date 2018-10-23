// pages/result/result.js
Page({

  /** 
   * 页面的初始数据
   */
  data: {
    countA: 0,
    countC: 0,
    countB: 0,
    countScore:0,
    kind: '',
    time: '00:00:00',
    //弹出的选择按钮
    tip: '',
    buttonDisabled: false,
    modalHidden: true,
    show: false,
  },
  //弹出的选择提示
  modalBindaconfirm: function () {
    this.setData({
      modalHidden: !this.data.modalHidden,
      show: !this.data.show,
      tip: '您点击了【确认】按钮！',
      buttonDisabled: !this.data.buttonDisabled
    })
    wx.navigateTo({
      url: '../logs/logs',
    })
  },
  modalBindcancel: function () {
    this.setData({
      modalHidden: !this.data.modalHidden,
      tip: '您点击了【取消】按钮！'
    })
  },
  toSave: function () {
    if (wx.getStorageSync('key')) {
      //这里进行保存操作
    } else {
      this.setData({
        modalHidden: !this.data.modalHidden
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      countA: options.A - 0,
      countC: options.C - 0,
      countB: options.B - 0,
      countScore:options.score -0,
      time:options.time
    })
    var data = this.data;
  },
  saveImg: function () {
    wx.getImageInfo({
      src: '../../image/qz_share.png',
      success: function (res) {
        console.log(res.path)
          wx.saveImageToPhotosAlbum({
            filePath: res.path,
            success(res) {
              console.log(res)
            }
          })
      }
    })
  },
  onShareAppMessage: function (ops) {
    if (ops.from === 'button') {
      // 来自页面内转发按钮
      console.log(ops.target)
    }
    return {
      title: '10.24，关爱程序员，关爱健康',
      path: '/pages/begin/begin',
      imageUrl: '/image/ga_share.jpg',
      success: function (res) {
        // 转发成功
        console.log("转发成功:" + JSON.stringify(res));
        var shareTickets = res.shareTickets;
      },
      fail: function (res) {
        // 转发失败
        console.log("转发失败:" + JSON.stringify(res));

      }
    }
  }
})