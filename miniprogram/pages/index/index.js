// miniprogram/pages/index/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },
    /**
     * @description 获取用户信息
     * @param {*} event 
     */
    handleGetUserinfo(event) {
        console.log('event:', event)
        wx.cloud.callFunction({
            name: 'user',
            data: {},
            success: res => {
                console.log('res:', res)
            },
            error: (error) => console.error('获取用户信息：', error),
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

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