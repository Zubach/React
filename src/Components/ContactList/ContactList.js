import React,{Fragment} from 'react';
import ContactListItem from '../ContactListItem/ContactListItem'
import "./ContactList.css";

const ContactList = ({List})=>{


    const singleContact = List.map(item => {
        return (
            <ContactListItem name={item.name} phone={item.phone} email={item.email} gender={item.gender} avatar={item.avatar} isFavorite={item.isFavorite} starClass={item.starClass}></ContactListItem> 
        );
    });

    return (
        <Fragment>
            <ul className="list">
                
                {singleContact}
            </ul>
    </Fragment>
    )
}

export default ContactList;