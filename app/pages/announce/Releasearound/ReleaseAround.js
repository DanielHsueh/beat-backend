// pages/announce/Releasearound/ReleaseAround.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text: null,
    text1: null,
    text2: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    if (options.sort) {
      this.setData({
        text: options.sort,
        text1: options.sort1,
        text2: options.sort2
      })
    }
  },
  yuepaitap:function(){
   wx.navigateTo({
     url: '../../announce/yuepaiform/yuepaiform',
   })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})