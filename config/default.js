/**
 * Created by hust on 2017/1/16.
 */
module.exports={
    port:3000,
    session:{
        secret:'starblog',
        key:'starblog',
        maxAge:2592000000
    },
    mongodb:'mongodb://localhost:27017/starblog'
};