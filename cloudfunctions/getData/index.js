// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
    console.log('')
    const { skip, limit} = event;
    const DB = cloud.database().collection('excel').skip(skip).limit(limit)
    return DB.get()
}