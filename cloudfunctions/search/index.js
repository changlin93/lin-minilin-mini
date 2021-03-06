// 云函数入口文件
const cloud = require('wx-server-sdk');
cloud.init({
    // env: cloud.DYNAMIC_CURRENT_ENV,
    env: 'mini-lin-nnbmo',
});

const DB = cloud.database();
const _ = DB.command;
// 云函数入口函数
exports.main = async (event, context) => {
    const { content } = event;
    return DB.collection('excel').where(_.or([{
        bookname: DB.RegExp({
            regexp: `.*${content}`,
            options: 'i',
        })
    }])).get().then(res => res).catch(error => error);
    // .skip(skip)
    // .limit(limit)
}