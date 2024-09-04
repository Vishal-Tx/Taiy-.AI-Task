import React, { useState } from "react";
import ContactList from "../components/ContactList";
import ContactForm from "../components/ContactForm";
import { Contact } from "../store/contactsSlice";

const Contacts: React.FC = () => {
    const [isFormVisible, setIsFormVisible] = useState<boolean>(false);
    const [selectedContact, setSelectedContact] = useState<Contact | null>(null);


    const handleAddClick = () => {
        setSelectedContact(null);
        setIsFormVisible(true);
    };

    const handleEditContact = (contact: Contact) => {
        setSelectedContact(contact);
        setIsFormVisible(true);
    };

    const handleCloseForm = () => {
        setIsFormVisible(false);
    };

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6">Contacts</h1>
            {!isFormVisible && <button
                onClick={handleAddClick}
                className="bg-blue-500 text-white px-4 py-2 rounded mb-4 hover:bg-blue-600"
            >
                Add Contact
            </button>}
            {isFormVisible ? (
                <ContactForm contact={selectedContact || undefined} onClose={handleCloseForm} />
            ) : (
                <ContactList onEditContact={handleEditContact} />
            )}
        </div>
    );
};

export default Contacts;
