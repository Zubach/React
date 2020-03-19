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
    
    

    render(){
        const {gender,avatar} =this.state;
        const url = `https://api.randomuser.me/portraits/${gender}/${avatar}.jpg`;

        

    return (
        <Fragment>
            <li className="list-item">
                    <span onClick={this.props.setFavorite} className="star-span"><i className={this.props.starClass}></i></span>
                <div>
                    <img src={url} alt ="laps"></img>
                </div>
                <div className="info">
                    <h2>{this.state.name}</h2>
                    <p>{this.state.email}</p>
                    <button onClick={this.rndBtnClick.bind(this)} className="btn btn-secondary">Random image</button>
                </div>
                    <div><p className="phone-number">{this.state.phone}</p></div>
            </li>
        </Fragment>
    )
    }
}
export default ContactListItem;

