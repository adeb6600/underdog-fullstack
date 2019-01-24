import React, {Component} from 'react';
import Company from './components/company';
import Rating from './components/ratings';
import { apiInstance } from './lib';
import { Grid, Col ,Row,
   Button, Glyphicon} from 'react-bootstrap'
class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {
        loading:false,
        companies : [],
        companyToRate:null,
        ratedCompanies:[]
    }
    this.getCompany = this.getCompany.bind(this)
}

componentDidMount(){
this.getCompany()
}
async getCompany(){
    try{
        this.setState({
            loading:true
        })
        let allCompanies = await apiInstance.get('/company')
        .then(c=>c.data.data.Company)    
        this.setState({
            loading:false,
            companies:allCompanies,
            companyToRate: allCompanies[0],
            ratedCompanies:[]
        })
    }catch(e){
        console.log('get company failed')
    }
 


}


rateCompany(company, upVote){
 
  let {companies ,ratedCompanies}  = this.state
   const currentCompanyIndex= companies
   .findIndex((comp)=> comp.id == company.id)

   if(currentCompanyIndex >= 0){
    let ratedCompany = companies.splice(currentCompanyIndex,1)[0];
        ratedCompany.vote = upVote
    ratedCompanies.push(ratedCompany)
    this.setState(prevState=>({
      companies: companies,
      ratedCompanies: ratedCompanies,
      companyToRate:companies[0]
    }))
   }
}


  render () {
    const { companyToRate,ratedCompanies} = this.state
    return (
      <div className="container text-center">
        <h2>Tinder for Companies</h2>
        <Row >
          <Col xs={12} md={6} >
            {this.state.companies.length ==0 && <div className="company-container">All Done</div>}
            {this.state.companies.length > 0 && <Company {...companyToRate} />}
            <Row>
            <Button bsStyle="success"
            onClick={()=>{
              this.rateCompany(companyToRate, true)
            }}
             bsSize="small">
        Vote <Glyphicon glyph="thumbs-up" /> 
      </Button>
      <Button bsStyle="danger" className="rating-button"
            onClick={()=>{
              this.rateCompany(companyToRate, false)
            }}
             bsSize="small">
        Vote <Glyphicon glyph="thumbs-down" />
      </Button>
            </Row>
          </Col>
          <Col xs={12} md={6} >
          <Rating
          ratings= {ratedCompanies} 
        />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Application;
