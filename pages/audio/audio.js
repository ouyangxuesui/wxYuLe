Page({
  onReady: function (e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio')
  },
  data: {
    poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
    name: '此时此刻',
    author: '许巍',
    src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',

music:{
    id:0,
    poster:'http://anhaha.online/music/music01.jpg',
    name:'暧昧',
    author:'薛之谦',
    src:'http://anhaha.online/music/music01.mp3'
  },

musicList:[
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
  },
  {
    id:0,
    poster:'http://anhaha.online/music/music03.jpg',
    name:'住在地球晒夕阳',
    author:'朱隽言',
    src:'http://anhaha.online/music/music03.mp3'
  },
  {
    id:0,
    poster:'http://anhaha.online/music/music04.jpg',
    name:'流浪者',
    author:'丁薇',
    src:'http://anhaha.online/music/music04.mp3'
  },
  {
    id:0,
    poster:'http://anhaha.online/music/music05.jpg',
    name:'君行一叶舟',
    author:'小魂 ',
    src:'http://anhaha.online/music/music05.mp3'
  },
  {
    id:0,
    poster:'http://anhaha.online/music/music06.jpg',
    name:'君行一叶舟',
    author:'小魂 ',
    src:'http://anhaha.online/music/music06.mp3'
  },
  {
    id:0,
    poster:'http://anhaha.online/music/music07.jpg',
    name:'君行一叶舟',
    author:'小魂 ',
    src:'http://anhaha.online/music/music07.mp3'
  }
]

  },

  playMusic:function(event){
    var idx = event.target.dataset.idx;
    var that = this;
    that.setData({
      music: this.data.musicList[idx]
    })

    setTimeout(function(){
      that.audioCtx.play();
    },500)


  },

  endedHandle:function(){
    var that = this;
    var pos = 0;
    if( that.data.music.id + 1 >= that.data.musicList.length ){
      pos = 0;
    }else{
      pos = that.data.music.id + 1;
    }

    var playingMusic= that.data.musicList[pos];
    that.setData({
      music: playim=ngMusic
    })

    setTimeout(function(){
      that.audioCtx.play();
    },500)

  },

  audioPlay: function () {
    this.audioCtx.play()
  },
  audioPause: function () {
    this.audioCtx.pause()
  },
  audio14: function () {
    this.audioCtx.seek(200)
  },
  audioStart: function () {
    this.audioCtx.seek(0)
  }
})