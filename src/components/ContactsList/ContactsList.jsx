import PropTypes from "prop-types";
import { ContactsItem } from "components/ContactsItem/ContactsItem";
import { List } from "./ContactsList.styled";

export const ContactsList = ({contacts, deleteContact}) => {
    return (
        <List>
            {contacts.length > 0 &&
                contacts.map(({ id, name, number }) => (
                <ContactsItem
                    key={id}
                    idContact={id}
                    contact={name}
                    number={number}
                    deleteContact={deleteContact}
                />
            ))}
        </List>
    )
};

ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        }).isRequired,
    ).isRequired,
    deleteContact: PropTypes.func.isRequired,
};

