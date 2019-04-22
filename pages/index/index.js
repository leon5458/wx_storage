//index.js
//获取应用实例
const app = getApp()
 Page({
   /**
    * 页面的初始数据
    */
   data: {
     input_content:""
   },
   content:function(e){
    this.setData({
      input_content:e.detail.value
    })
    // console.log("=============", this.data.input_content)
   },
   click:function(){
     //同步方法
     console.log("==========", this.data.input_content)
    wx.setStorageSync("content1", this.data.input_content)
     //异步方法
     wx.setStorage({
       key: 'content1',
       data: this.data.input_content,
     })
   },

   click1:function(){
     //同步
     var con = wx.getStorageSync("content1")
     console.log(con)
      wx.showToast({
       title: con,
     })
    //  异步
    // var con= wx.getStorage({
    //   key: 'content1',
    //   success: function(res) {
    //     console.log(res.data)
    //   },
    // })
   },
 
   /**
    * 生命周期函数--监听页面加载
    */
   onLoad: function (options) {
     wx:wx.getStorageInfo({
       success: function(res) {
         console.log(res)
       },
       fail: function(res) {},
       complete: function(res) {},
     })
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
