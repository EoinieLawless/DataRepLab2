import React from "react";
import axios from "axios";

export class Create extends React.Component{
    constructor(){
        super();
        //Binding handlesubmit and the changebook elements
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeBookTitle = this.onChangeBookTitle.bind(this);
        this.onChangeBookAuthor = this.onChangeBookAuthor.bind(this);
        this.onChangeBookUrl = this.onChangeBookUrl.bind(this);
        this.onChangeBookCover = this.onChangeBookCover.bind(this);



        this.state = {
            title:'',
            cover:'',
            author:'',
            Url:''
        }
    }

    //to take the form
    handleSubmit(e) {
        e.preventDefault();
        console.log(`Button clicked
         ${this.state.title},
          ${this.state.cover}, 
          ${this.state.author}, 
          ${this.state.Url} `)

          const book ={
          title:this.state.title,
          cover:this.state.cover,
          author:this.state.author,
          Url:this.state.Url
          }

          axios.post('http://localhost:4000/api/books',book)
          .then()
          .catch();

        //to set it back to blank
        this.setState({
            title:'',cover:'',author:'',Url:''
        })
    }

    
    //functions to be called 
    onChangeBookTitle(e){
        this.setState({
            title:e.target.value
        })
    }

    onChangeBookAuthor(e){
        this.setState({
            author:e.target.value
        })
    }

    onChangeBookUrl(e){
        this.setState({
            Url:e.target.value
        })
    }

    onChangeBookCover(e){
        this.setState({
            cover:e.target.value
        })
    }

    render(){
        return(
            <div>

                <h3>Hello form create component </h3>
                <form onSubmit={this.handleSubmit}>
 
                {/* Creating the form table on the site */}
                <div className="form-group">

<label>Add Book Title: </label>
                <input type="text"
                className="form-control"
                value={this.state.title}
                onChange={this.onChangeBookTitle}
                />

<label>Add Book Cover: </label>
                <input type="text"
                className="form-control"
                value={this.state.cover}
                onChange={this.onChangeBookCover}
                />

<label>Add Book Author: </label>
                <input type="text"
                className="form-control"
                value={this.state.author}
                onChange={this.onChangeBookAuthor}
                />


<label>Add Book url: </label>
                <input type="text"
                className="form-control"
                value={this.state.Url}
                onChange={this.onChangeBookUrl}
                />

                {/* The submit button */}
                <input type="submit" value="Submit" />
                
                </div>
                </form>

            </div>
            
            
            

        );
    }
}