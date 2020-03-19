import React, { Fragment, Component } from 'react';
import ContactList from './Components/ContactList/ContactList';
import ContactCreate from './Components/ContactCreate/ContactCreate';
import uuid from 'react-uuid';
import ReactDOM from 'react-dom';
import './index.css';

class App extends Component{

    state = {
        List: [
            {
                id:uuid(),
                name:"Andrii Riabii",
                phone: "+380 22 222 2222",
                email: "---.com",
                gender: "men",
                avatar: 9,
                isFavorite: false,
                starClass: "fa fa-star-o"
        
            },
            {
                id:uuid(),
                name:"Vania Kage",
                phone: "+380 97 083 4073",
                email: "vanyakage@gmail.com",
                gender: "men",
                avatar: 7,
                isFavorite: false,
                starClass: "fa fa-star-o"
        
            },
            {
                id:uuid(),
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

    setFavorite = id =>{
        const index = this.state.List.findIndex(x=> x.id === id);
        let tempList = this.state.List.slice();
        tempList[index].isFavorite = !tempList[index].isFavorite;
        if(tempList[index].isFavorite) {
            tempList[index].starClass = "fa fa-star"
        }
        else{
            tempList[index].starClass = "fa fa-star-o"
        }
        
        this.setState(state => {
            return {
                isFavorite: !this.tempList,
                starClass : !this.tempList
            }
        });
        
    }

    contactCreate = (name,avatar,phone,email,gender) => {
        let tempList = this.state.List.slice();
        tempList.push({
            name: name,
            avatar: avatar,
            phone: phone,
            email: email,
            isFavorite: false,
            starClass: "fa fa-star-o",
            id: uuid(),
            gender:gender
        });

        this.setState({
            List:tempList
        });
        
    }

    render(){
    return (
        <Fragment>
    <header className="hat">
        <h2>Contacts</h2>
    </header>
    <main>
        <ContactList List={this.state.List} setFavorite={this.setFavorite}>
           
        </ContactList>

        
        <ContactCreate contactCreate={this.contactCreate}>
        </ContactCreate>
    </main>
    </Fragment>)
    }
    
}

ReactDOM.render(<App />, document.getElementById('root'));



