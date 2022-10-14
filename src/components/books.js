import React from 'react';
import {BooksItem} from './booksItem';

export class Books extends React.Component{
    render(){
        return this.props.books.map(
            (books)=>{
                return <BooksItem books={books} key={books.isbn}></BooksItem>
            }
        );
    }
}