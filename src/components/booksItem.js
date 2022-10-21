import React from 'react';
//import cards from bootstrap
import Card from 'react-bootstrap/Card';

export class BooksItem extends React.Component{

    render(){
        return(
            <div>

   {/* implementing the books state */}

      {/* <h3> {this.props.books.title}</h3>
      <img src= {this.props.books.thumbnailUrl}></img>
      <h6>{this.props.books.authors[0]}</h6> */}

      <Card>
      <Card.Header>{this.props.books.title}</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">

        <img src= {this.props.books.thumbnailUrl}></img>
        <footer>
        {this.props.books.authors[0]}
        </footer>
          
        </blockquote>
      </Card.Body>
    </Card>
      

            </div>
        );
    }
}
//export default BooksItem

