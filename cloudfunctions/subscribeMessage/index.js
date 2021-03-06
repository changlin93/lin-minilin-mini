// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
    const openid = cloud.wxContext().OPENID;
    try {
        return await cloud.openapi.subscribeMessage.send({
            touser: openid,
            page: '/pages/index/index',
            lang: 'zh_CN',
            data: {
                date2: {
                    value: '2020年12月04日 14:05'
                },
                thing9: {
                    value: '提醒打卡'
                },
                time13: {
                    value: '2020年12月04日 23:59:59'
                }
            },
            templateId: 'i9JUI9HiP3-A9UhNUvKbrrPUtZH-5MUJJB55VSGCxrk',
            miniprogramState: 'developer'
        })
    } catch (err) {
        return err
    }
}