// pages/my/myfollow/myfollow.js
const api = require("../../../utils/api.js");
const util = require("../../../utils/util.js");
const list = [{
  headimg: "../../../images/test/headimg.jpg",
  name: "溜影",
  role: "摄影师",
  city: "深圳市",
},
  {
    headimg: "../../../images/test/test6.jpg",
    name: "猪猪",
    role: "模特",
    city: "广州市",
  }
];

const fans = [{
  headimg: "../../../images/test/headimg.jpg",
  name: "方式",
  role: "摄影师",
  city: "广州市",
},
{
  headimg: "../../../images/test/test6.jpg",
  name: "大还不错",
  role: "模特",
  city: "广州市",
}
];
Page({

  /**
   * 页面的初始数据
   */
  data: {
  followlist:[],
  confollow:true,
  publicurl: util.pictureurl,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let uid = wx.getStorageSync('openid');
    let data = {};
    data.uid = {uid:uid};
   if(options.sort){
     if(options.sort=="follow"){
       wx.setNavigationBarTitle({
         title: '我的关注'
       })
       data.type='follow';
       this.getFollowList(data);
       this.setData({confollow:true,followlist:list})

     }
       else{
       wx.setNavigationBarTitle({
         title: '我的粉丝'
       })
       data.type = 'fans';
       this.getFollowList(data);
       this.setData({ confollow: false, followlist: fans })
       }
   }
  },
   getFollowList:function(data){
     let that = this
     api.addSave('http://127.0.0.1:7001/getFollowList',data).then(res => {
       console.log(res);
       let resArr = [];
       res.list.map((item, index) => {
         let itembeat = {};
         itembeat.id=item.followid||item.fid;
         itembeat.city = item.User.address.split("#")[1];
         itembeat.name = item.User.nickname;
         itembeat.role = item.User.role;
         itembeat.avatarUrl = item.User.imgurl;
         itembeat.imgurl = item.User.headimg;
         resArr.push(itembeat);
       })
       that.setData({
         followlist: resArr
       });
     })
  },
  deleteandfollow:function(e){
    let id = e.currentTarget.dataset.id;
    console.log(id);
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})