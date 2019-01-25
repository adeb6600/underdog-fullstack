import React, { Component } from 'react';
import Company from './components/company';
import Rating from './components/ratings';
import { apiInstance } from './lib';
import { GoThumbsdown, GoThumbsup } from "react-icons/go";
import { APIURL } from './constants';
class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      companies: [],
      companyToRate: null,
      ratedCompanies: []
    }
    this.getCompany = this.getCompany.bind(this)
  }

  componentDidMount() {
    this.getCompany()
  }
  async getCompany() {
    try {
      this.setState({
        loading: true
      })
  
      let allCompanies = await apiInstance.get('/company')
        .then(c => c.data.data)
      this.setState({
        loading: false,
        companies: allCompanies,
        companyToRate: allCompanies[0],
        ratedCompanies: []
      })
    } catch (e) {
      console.log('get company failed')
    }



  }


  rateCompany(company, upVote) {

    let { companies, ratedCompanies } = this.state
    const currentCompanyIndex = companies
      .findIndex((comp) => comp.id == company.id)

    if (currentCompanyIndex >= 0) {
      let ratedCompany = companies.splice(currentCompanyIndex, 1)[0];
      ratedCompany.vote = upVote
      ratedCompanies.push(ratedCompany)
      this.setState(prevState => ({
        companies: companies,
        ratedCompanies: ratedCompanies,
        companyToRate: companies[0]
      }))
    }
  }


  render() {
    const { companyToRate, ratedCompanies } = this.state
    return (<div className="container">
      <div className="row align-items-center justify-content-center">
        <div className="d-flex flex-column flex-fill">
          <div className="page-header row align-items-center justify-content-center text-center">Tinder For Companies</div>
          <div className="row justify-content-between">

            <div className="col-md-7 col-xs-12 float-right">
              {this.state.companies.length ==  0 && <div className="card-base p-3 d-flex flex-column justify-content-center align-items-center">
                All Done</div>}
              {this.state.companies.length > 0 && <Company {...companyToRate} />}
              <div className="row  align-items-center justify-content-center">
                <button className="rating-button mt-3 mr-5"
                  onClick={() => {
                    this.rateCompany(companyToRate, true)
                  }}
                >
                  <GoThumbsup />
                </button>
                <button className="rating-button mt-3"
                  onClick={() => {
                    this.rateCompany(companyToRate, false)
                  }}
                >
                  <GoThumbsdown />
                </button>
              </div>
            </div>
            <div className="col-md-4 col-xs-12 row align-items-start justify-content-center justify-content-md-start">  <Rating
              ratings={ratedCompanies}
            /></div>
          </div>
        </div>
      </div>
    </div>)
  }
}

export default Application;
