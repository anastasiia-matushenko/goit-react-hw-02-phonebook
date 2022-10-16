import PropTypes from "prop-types";
import { Button, Item } from "./ContactsItem.styled";

export const ContactsItem = ({ idContact, contact, number, deleteContact }) => {
    console.log("ContactsItem: ", idContact);
    return (
        <Item>
            <span>{contact}: </span><span>{number}</span>
            <Button type="button" onClick={() => deleteContact(idContact)}>Delete</Button>
        </Item>
    )
};

ContactsItem.propTypes = {
    idContact: PropTypes.string.isRequired,
    contact: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    deleteContact: PropTypes.func.isRequired,
};