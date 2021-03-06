//index.js
//获取应用实例

var app = getApp();
var math = require("../../modules/javascript/test.js");

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    value: 123,
    years: math.array(2010, 2020),
    months: math.array(1, 12),
    days: math.array(1, 31),
    bgc: "#F7F7F7",
    condition: {
      loading: false,
      season: ""
    },
    template_name: "iam-template"
  },
  custom_data: {
    init_bgc: "#F7F7F7"
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../user_info/user_info'
    })
  },
  change_date: function(e){
    this.setData({
      "condition.season": Math.ceil(e.detail.value[1] / 3)
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  onPullDownRefresh: function(){
    var that = this;
    this.setData({
      "condition.loading": true
    });
    setTimeout(function(){
      that.setData({
        "condition.loading": false,
        bgc: that.custom_data.init_bgc
      });
      setTimeout(function(){
        wx.stopPullDownRefresh();
      }, 100);
    }, 1000);
  },
  onReachBottom: function(){
    this.setData({
      bgc: "gray"
    });
  },
  onShareAppMessage: function(){
    return {
      title: "demo",
      desc: "just a desc",
      path: "/pages/index/index"
    }
  }
})
