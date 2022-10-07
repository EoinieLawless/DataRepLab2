import React from 'react';

//Content page
export class Content extends React.Component{
    render(){
        return(
            <div>

        <h1>Hello world!</h1>

        <h2>It is {new Date().toLocaleTimeString()}.</h2>

            </div>
        );
    }
}