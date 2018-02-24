module.exports = function(req, res, next) {
    const { session.user } = req;

    if(!session.user){
        session.user = {
            username: '', 
            cart: [], 
            total: 0
        }
    }
    next();
}