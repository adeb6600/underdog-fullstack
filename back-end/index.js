const Koa = require('koa')
const BodyParser  =  require('koa-bodyparser')
const KoaRes = require('koa-res')
const error = require('koa-json-error')
const cors = require('@koa/cors');
// const handleError = require('koa-handle-error')
const router = require('koa-simple-router')
const company = require('./controller/company')
const rating = require('./controller/rating')
const app = new Koa()

app.use(cors());
// app.use(error()) 
app.use(BodyParser())
app.use(KoaRes())

app.use(router(_=>{
    _.get('/company',company.listCompanies),
    _.get('/company/:id', company.getCompany),
    _.post('/company', company.createCompany),
    _.put('/company/:id',company.updateCompany),
    _.delete('/company/:id',company.deleteCompany)
}))
app.listen(3500)