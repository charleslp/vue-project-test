const express = require('express');
const router = express.Router()
// 引入控制器
const {getMscamps} = require('../controllers/mscamps.js')
// router.get('/api/v1/mscamps/:id',(req,res)=>{
//     // res.send('<h1>大家好，程序跑起来了</h1>')
    
// })
router.route('/api/v1/mscamps/:id').get(getMscamps)
router.post('/api/v1/mscamps',(req,res)=>{
    // res.send('<h1>大家好，程序跑起来了</h1>')
    res.status(200).json({success:true,'message':`创建数据`})
})
router.put('/api/v1/mscamps/:id',(req,res)=>{
    // res.send('<h1>大家好，程序跑起来了</h1>')
    res.status(400).json({success:true,'message':`根据${req.params.id}更新数据`})
})
router.delete('/api/v1/mscamps/:id',(req,res)=>{
    // res.send('<h1>大家好，程序跑起来了</h1>')
    res.status(400).json({success:true,'message':`根据${req.params.id}删除数据`})
})
module.exports = router;