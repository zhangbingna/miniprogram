//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function (option) {
    var that = this;
    //电影
    wx.request({
      url: 'https://m.douban.com/rexxar/api/v2/subject_collection/movie_showing/items?count=7',
      success:function(res){
        var movies = res.data.subject_collection_items;
        that.setData({
          movies: movies
        });
        console.log(movies)
      }
    });

    //电视剧
    wx.request({
      url: 'https://m.douban.com/rexxar/api/v2/subject_collection/tv_hot/items?count=7',
      success:function(res){
        var tvs = res.data.subject_collection_items;
        that.setData({
          tvs: tvs
        });
        console.log(tvs)
      }
    });
    //综艺
    wx.request({
      url: 'https://m.douban.com/rexxar/api/v2/subject_collection/tv_variety_show/items?count=7',
      success:function(res){
        var shows = res.data.subject_collection_items;
        that.setData({
          shows: shows
        });
        console.log(shows)
      }
    });

    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
