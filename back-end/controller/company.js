
const Company = require('../model/company');
exports.getCompany = async (ctx) => {
    const id = ctx.params.id

    let commpanyFound = Company.Company.find(comp => comp.id == id);
    ctx.body = commpanyFound
}
exports.listCompanies = async (ctx) => {
    ctx.body = Company.Company
}
exports.createCompany = async (ctx) => {
    ctx.body = ctx.request.body
}
exports.updateCompany = async (ctx) => {
    let allCompany = Company.Company;

    let companyToUpdateIndex = Company.Company.findIndex(comp => comp.id == id);
    allCompany.splice(companyToUpdateIndex, 1, ctx.request.body)
    ctx.body = allCompany
}

exports.deleteCompany = async (ctx) => {
    const id = ctx.params.id;

    let deleteIndex = Company.Company.findIndex(comp => comp.id == id);
    let allCompany = Company.Company;
    allCompany.splice(deleteIndex, 1)
    ctx.body = allCompany;
}
