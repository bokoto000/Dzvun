module.exports = (app, passport, csrfProtection) => {
    app.use('/login', require('../routers/login')(passport, csrfProtection));
    app.use('/get-sess-info', require('../routers/get-sess-info')(csrfProtection));
}