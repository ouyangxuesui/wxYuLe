Page({
  data: {
    imgUrls: [
      'http://anhaha.online/my/img1.jpg',
      'http://anhaha.online/my/img2.jpg',
      'http://anhaha.online/my/img3.jpg'
    ],
    
movieList:[
  {
    id:0,
    poster:'http://anhaha.online/music/music01.jpg',
    name:'暧昧',
    author:'薛之谦',
    src:'http://anhaha.online/music/music01.mp3'
  },
  {
    id:0,
    poster:'http://anhaha.online/music/music02.jpg',
    name:'祈愿',
    author:'张艺兴',
    src:'http://anhaha.online/music/music02.mp3'
  }
],

    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 1000
  },

  changeIndicatorDots: function(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function(e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function(e) {
    this.setData({
      duration: e.detail.value
    })
  }
})




