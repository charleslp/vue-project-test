exports.getMscamps = (req, res, next)=>{
    res.status(200).json({success:true,'message':`根据${req.params.id}获取数据`, data:req.data.msg}) 
}