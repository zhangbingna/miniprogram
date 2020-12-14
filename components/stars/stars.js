// components/stars/stars.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    rate:{
      type:Number,
      value:0
    },
    startsize:{
      type:Number,
      value:20 //rpx
    },
    fontsize:{
      type:Number,
      value:20 //rpx
    },
    fontcolor:{
      type:String,
      value:"#ccc"
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  },

  lifetimes: {
    attached:function(){
      var that = this
      // console.log(that.properties.rate);
      var rate = that.properties.rate;
      var intRate = parseInt(rate + 0.5);
      var light = parseInt(intRate/2);
      var half = intRate%2;
      var gray = 5-light-half;
      // console.log(light);
      // console.log(half);
      // console.log(gray);
      var lights = [];
      var halfs = [];
      var grays = [];
      for(var index=1;index<=light;index++){
        lights.push(index)
      }
      for(var index=1;index<=half;index++){
        halfs.push(index)
      }
      for(var index=1;index<=gray;index++){
        grays.push(index)
      }
      var ratetext = rate && rate > 0 ? rate.toFixed(1) : "未评分"
      that.setData({
        lights:lights,
        halfs:halfs,
        grays:grays,
        ratetext:ratetext
      })
    }
  }
})
