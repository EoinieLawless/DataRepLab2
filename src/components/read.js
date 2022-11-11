import React from "react";

import {Books} from './books';

// importing from axios to grab api from server
import axios from "axios";

export class Read extends React.Component{

    //lifeCycle method 
    componentDidMount() {

        axios.get('http://localhost:4000/api/books')
        .then((response)=>{
            this.setState({
                books:response.data.mybooks
            })
        })
        .catch((error)=>{
            console.log(error);
        });

    }


state = {
    books:[]
        
}

    render(){
        return(
            <div>
            <h3>Hello from read Component</h3>

                <Books books={this.state.books}></Books>

            </div>
        );
    }
}