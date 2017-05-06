function getRandomColor () {
  let rgb = []
  for (let i = 0 ; i < 3; ++i){
    let color = Math.floor(Math.random() * 256).toString(16)
    color = color.length == 1 ? '0' + color : color
    rgb.push(color)
  }
  return '#' + rgb.join('')
}

Page({
  onReady: function (res) {
    this.videoContext = wx.createVideoContext('myVideo')
  },
  inputValue: '',
    data: {
      video:{
          id:0,
          name:'seve',
          src:'http://anhaha.online/video/seve.mp4'
        },

      videoList:[
        {
          id:0,
          name:'seve',
          src:'http://anhaha.online/video/seve.mp4'
        },
        {
          id:1,
          name:'river',
          src:'http://anhaha.online/video/river.mp4'
        },
        {
          id:2,
          name:'sam',
          src:'http://anhaha.online/video/sam.mp4'
        }
        
      ]

  },

  bindInputBlur: function(e) {
    this.inputValue = e.detail.value
  },
  bindButtonTap: function() {
    var that = this
    wx.chooseVideo({
      sourceType: ['album', 'camera'],
      maxDuration: 60,
      camera: ['front','back'],
      success: function(res) {
        that.setData({
          src: res.tempFilePath
        })
      }
    })
  },
  bindSendDanmu: function () {
    this.videoContext.sendDanmu({
      text: this.inputValue,
      color: getRandomColor()
    })
  }
})