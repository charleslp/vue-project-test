exports.logger=(req, res, next)=>{
    req.data = {msg:'中间件设置的数据'}
    console.log(`${req.method}${req.protocol}://${req.get('host')}${req.originalUrl}`)
    next()
}