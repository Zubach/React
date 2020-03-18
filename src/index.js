import React, { Fragment, Component } from 'react';
import ContactList from './Components/ContactList/ContactList';

import ReactDOM from 'react-dom';
import './index.css';

class App extends Component{

    state = {
        List: [
            {
                name:"Andrii Riabii",
                phone: "+380 22 222 2222",
                email: "---.com",
                gender: "men",
                avatar: 9,
                isFavorite: false,
                starClass: "fa fa-star-o"
        
            },
            {
                name:"Vania Kage",
                phone: "+380 97 083 4073",
                email: "vanyakage@gmail.com",
                gender: "men",
                avatar: 7,
                isFavorite: false,
                starClass: "fa fa-star-o"
        
            },
            {
                name:"Pirog Vadim",
                phone: "+380 77 777 7777",
                email: "-.com",
                gender: "men",
                avatar: 3,
                isFavorite: false,
                starClass: "fa fa-star-o"
        
            }
        ]
    };
    render(){
    return (
        <Fragment>
    <header className="hat">
        <h2>Contacts</h2>
    </header>
    <main>
        <ContactList List={this.state.List}>
           
        </ContactList>
    </main>
    </Fragment>)
    }
    
}

ReactDOM.render(<App />, document.getElementById('root'));



