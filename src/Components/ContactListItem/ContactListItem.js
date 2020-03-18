import React,{Fragment, Component} from 'react';
import "./ContactListItem.css";

class ContactListItem extends Component{

    state = {
        name:this.props.name,
        phone: this.props.phone,
        email: this.props.email,
        gender: this.props.gender,
        avatar: this.props.avatar,
        isFavorite: this.props.isFavorite,
        starClass: this.props.starClass

    };

    rndBtnClick(){
        const rand = Math.floor(Math.random() * Math.floor(99));
        this.setState({
            avatar:rand
        });
       
    }
    setFavorite(){
        
        if(!this.state.isFavorite){
            this.setState({
                isFavorite: !this.state.isFavorite,
                starClass: "fa fa-star"
            });
        }
        else{
            this.setState({
                isFavorite: !this.state.isFavorite,
                starClass: "fa fa-star-o"
            });
        }
    }

    

    render(){
        const {gender,avatar} =this.state;
        const url = `https://api.randomuser.me/portraits/${gender}/${avatar}.jpg`;

        

    return (
        <Fragment>
            <li className="list-item">
                <img src={url} alt ="laps"></img>
                <h2>{this.state.name}</h2>
                <p>{this.state.phone}</p>
                <p>{this.state.email}</p>
                <span onClick={this.setFavorite.bind(this)}><i class={this.state.starClass}></i></span>
                <button onClick={this.rndBtnClick.bind(this)}>Random image</button>
            </li>
        </Fragment>
    )
    }
}
export default ContactListItem;

