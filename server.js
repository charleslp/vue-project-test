const express = require('express');
const dotenv = require('dotenv');
const router = require('./routes/toutes')
const {logger}=require('./middleware/middleware')
const colors = require('colors')
const connectDB = require('./config/db.js')
dotenv.config({
    path:'./config/config.env'
});

const app = express();
//连接mongoDB数据库
connectDB();
//创建中间件
// const logger = (req, res, next)=>{
//     req.data = {msg:'中间件设置的数据'}
//     console.log(`${req.method}${req.protocol}://${req.get('host')}${req.originalUrl}`)
//     next()
// }
app.use(logger)
// app.use(colors)
app.get('/',(req,res)=>{
    // res.send('<h1>大家好，程序跑起来了</h1>')
    res.status(400).json({success:true})
})
//挂载路由节点
app.use(router)
const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on ${PORT}`.yellow.bold))
process.on('unhandledRejection',(err, Promise) => {
    console.log(`Error:${err.message}`)
    server.close(()=>{
        process.exit(1)
    })
})