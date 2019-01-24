import React, {Component} from 'react';
import { apiInstance } from '../lib';
import Company from './company';


class Stack extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading:false,
            companies : [],
            companyToRate:null
        }
        this.getCompany = this.getCompany.bind(this)
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
                companyToRate: allCompanies[0]
            })
        }catch(e){
            this.setState({
                loading:false,
                companies:[]
            })
        }
     


    }

    render(){
        return <main>
            <div>stack component</div>
        </main>
    }
}


export default Stack