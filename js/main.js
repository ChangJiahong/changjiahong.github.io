const i922 = "./img/bg.2daf906c.png"


    // 假设接口的请求速度是1s
let musics = document.getElementById("audio_music");


const myLucky = new LuckyCanvas.LuckyWheel('#my-lucky', {
  width: '800px',
  height: '800px',
  //设置背景 - block
  blocks: [{
    padding: "70px",
    imgs: [{
      left: "3px",
      width: "100%",
      height: "100%",
      src: "./img/bg.2daf906c.png"
    }]
  }],
  //设置奖品 - prizes
  prizes: [{
    background: '#b8c5f2',
    range: 8,
    fonts: [{text: '英语本', top: '20%', lineClamp: 3}]
  }, {
    background: '#e9e8fe',
    range: 8,
    fonts: [{text: 'mini口袋笔记本', top: '20%', lineClamp: 3}]
  }, {
    background: '#b8c5f2',
    range: 12,
    fonts: [{text: '胶带', top: '20%', lineClamp: 3}]
  }, {
    background: '#e9e8fe',
    range: 8,
    fonts: [{text: '记事本', top: '20%', lineClamp: 3}]
  },{
    // 7
    background: '#b8c5f2',
    range: 1,
    fonts: [{text: '神秘大礼', top: '20%', lineClamp: 3}]
  },{
    // 7
    background: '#e9e8fe',
    range: 32,
    fonts: [{text: '小夹子', top: '20%', lineClamp: 3}]
  },{
    // 7
    background: '#b8c5f2',
    range: 8,
    fonts: [{text: '发卡', top: '20%', lineClamp: 3}]
  },{
    // 7
    background: '#e9e8fe',
    range: 8,
    fonts: [{text: '狗狗便利贴', top: '20%', lineClamp: 3}]
  },{
    // 7
    background: '#b8c5f2',
    range: 8,
    fonts: [{text: '圣诞发夹', top: '20%', lineClamp: 3}]
  },{
    // 7
    background: '#e9e8fe',
    range: 4,
    fonts: [{text: '组合便利贴', top: '20%', lineClamp: 3}]
  },{
    // 7
    background: '#b8c5f2',
    range: 32,
    fonts: [{text: '动物造型便利贴', top: '20%', lineClamp: 3}]
  },{
    // 7
    background: '#e9e8fe',
    range: 8,
    fonts: [{text: '星球便利贴', top: '20%', lineClamp: 3}]
  },{
    // 7
    background: '#b8c5f2',
    range: 8,
    fonts: [{text: '方形星球便利贴', top: '20%', lineClamp: 3}]
  },{
    // 7
    background: '#e9e8fe',
    range: 8,
    fonts: [{text: '叶子便利贴', top: '20%', lineClamp: 3}]
  },{
    // 7
    background: '#b8c5f2',
    range: 8,
    fonts: [{text: '盲盒中性笔', top: '20%', lineClamp: 3}]
  },{
    // 7
    background: '#e9e8fe',
    range: 8,
    fonts: [{text: '小熊便利贴', top: '20%', lineClamp: 3}]
  },{
    // 7
    background: '#b8c5f2',
    range: 8,
    fonts: [{text: '不倒翁盲盒', top: '20%', lineClamp: 3}]
  },{
    // 7
    background: '#e9e8fe',
    range: 8,
    fonts: [{text: '渐变色荧光笔', top: '20%', lineClamp: 3}]
  },{
    // 7
    background: '#b8c5f2',
    range: 8,
    fonts: [{text: '木制书签', top: '20%', lineClamp: 3}]
  },{
    // 7
    background: '#e9e8fe',
    range: 4,
    fonts: [{text: '卡通小兔子', top: '20%', lineClamp: 3}]
  },{
    // 7
    background: '#b8c5f2',
    range: 10,
    fonts: [{text: '圣诞贴纸', top: '20%', lineClamp: 3}]
  },{
    // 7
    background: '#e9e8fe',
    range: 4,
    fonts: [{text: '小火箭笔筒', top: '20%', lineClamp: 3}]
  },{
    // 7
    background: '#b8c5f2',
    range: 4,
    fonts: [{text: '文具盲盒', top: '20%', lineClamp: 3}]
  },{
    // 7
    background: '#e9e8fe',
    range: 20,
    fonts: [{text: '立体小拼图', top: '20%', lineClamp: 3}]
  },{
    // 7
    background: '#b8c5f2',
    range: 8,
    fonts: [{text: '涂鸦风车', top: '20%', lineClamp: 3}]
  },{
    // 7
    background: '#e9e8fe',
    range: 8,
    fonts: [{text: '胶带笔', top: '20%', lineClamp: 3}]
  },{
    // 7
    background: '#b8c5f2',
    range: 8,
    fonts: [{text: '油画便利贴', top: '20%', lineClamp: 3}]
  },{
    // 7
    background: '#e9e8fe',
    range: 20,
    fonts: [{text: '笔', top: '20%', lineClamp: 3}]
  }



],
  //默认配置
  defaultConfig: {
    speed: 10//旋转速度峰值
  }
  ,
  //抽奖按钮
  buttons: [{
    imgs: [{//奖品按钮 可以用图片
      src: './img/btn.7450afac.png',
      width: '100%',
      top: '-125%'
    }],
    radius: '40%',
  },],
  //默认样式
  defaultStyle: {
    background: '#b8c5f2'//格子背景颜色
  },
  //开始抽奖前
  start: function () {
    myLucky.play()//开始抽奖

	musics.play();
    setTimeout(_ => {
      //缓慢通知
      // myLucky.stop(Math.floor((Math.random() * 6)))
     
      myLucky.stop()
       musics.pause();
    }, 4990)
  },
  //抽奖结束后
  end: function (prize) {
    alert('恭喜中奖: ' + prize.fonts[0].text)
  }
})










