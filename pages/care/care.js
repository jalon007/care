var postData = require("../../data/data-1024.js");
var progressNum = 0;//进度条

//计时器
function timing(that) {
  var seconds = that.data.seconds
  if (seconds > 21599) {
    that.setData({
      time: '6小时，不想继续了gg'
    });
    return;
  }
  setTimeout(function () {
    that.setData({
      seconds: seconds + 1
    });
    timing(that);
  }
    , 1000)
  formatSeconds(that)
}
function formatSeconds(that) {
  var mins = 0, hours = 0, seconds = that.data.seconds, time = ''
  if (seconds < 60) {

  } else if (seconds < 3600) {
    mins = parseInt(seconds / 60)
    seconds = seconds % 60
  } else {
    mins = parseInt(seconds / 60)
    seconds = seconds % 60
    hours = parseInt(mins / 60)
    mins = mins % 60
  }
  that.setData({
    time: formatTime(hours) + ':' + formatTime(mins) + ':' + formatTime(seconds)
  });
}
function formatTime(num) {
  if (num < 10)
    return '0' + num
  else
    return num + ''
}
// pages/question/question.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    per:0,
    clear: false,
    A: 0,
    C: 0,
    B: 0, 
    score:0,
    index: 0,
    title: postData.describe,
    choice: postData.answer,
    key: postData.key,
    radios: ['A', 'C', 'B'],
    list: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
    seconds: 0,
    time: '00:00:00',
  },

  randSort: function () {
    return Math.random() > 0.5 ? 1 : -1;
  },

  setList: function () {
    var newList = this.data.list.sort(this.randSort);
    this.setData({
      list: newList
    });
  },

  setRadios: function () {
    var newRadios = this.data.radios.sort(this.randSort);
    this.setData({
      radios: newRadios
    });
  }, 
//点击按钮播放音乐
playmusic:function(){
  const innerAudioContext = wx.createInnerAudioContext()
  innerAudioContext.autoplay = true
  innerAudioContext.src = '/data/2310.mp3'
  innerAudioContext.onPlay(() => {
    console.log('开始播放')
  })
  innerAudioContext.onError((res) => {
    console.log(res.errMsg)
    console.log(res.errCode)
  })
},

  select: function (e) {
    var tmp = e.detail.value;
    progressNum = this.data.per + 10;

    this.setData({
      per:progressNum
      })
    console.log(this.data.index);
    console.log(this.data.list[this.data.index]);
    console.log(this.data.key[this.data.list[this.data.index]]);
    console.log(tmp);
    var yes = this.data.key[this.data.list[this.data.index]];
    if(tmp==yes){
      console.log("正确答案");
      this.setData({
        score: this.data.score + 10,
      });
    }
    if (tmp == 'A') {
      this.setData({
        A: this.data.A + 1
      })
    } else if (tmp == 'C') {
      this.setData({
        C: this.data.C + 1
      })
    } else if (tmp == 'B') {
      this.setData({
        B: this.data.B + 1
      });
    }
    if (this.data.index < 9) {
      this.setRadios();
      this.setData({
        index: this.data.index + 1,
        clear: false
      });
    }else{
      this.submit();
    }

  },

  submit: function () {
    wx.redirectTo({
      url: '/pages/result/result?score=' + this.data.score + '&A=' + this.data.A + '&C=' + this.data.C + '&B=' + this.data.B+'&time='+this.data.time,
    })
    
    /*
    wx.navigateTo({
      url: '../pages/result/result',
    })
    */
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    timing(this);
    this.setList();
    this.setRadios();
    this.setData({
      A: 0,
      C: 0,
      B: 0
    });
  }
  ,
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