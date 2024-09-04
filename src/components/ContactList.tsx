import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { Contact, deleteContact } from "../store/contactsSlice";
import { useNavigate } from "react-router-dom";

interface ContactListProps {
    onEditContact: (contact: Contact) => void;
}

const ContactList: React.FC<ContactListProps> = ({ onEditContact }) => {
    const contacts = useSelector((state: RootState) => state.contacts.contacts);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleDelete = (id: string) => {
        dispatch(deleteContact(id));
    };

    const handleView = (id: string) => {
        navigate(`/contacts/${id}`);
    };

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Contact List</h2>
            {contacts.length === 0 ? (
                <p>No contacts available.</p>
            ) : (
                contacts.map((contact) => (
                    <div
                        key={contact.id}
                        className="border rounded p-4 mb-2 flex justify-between items-center flex-wrap"
                    >
                        <div>{contact.Fname + " " + contact.Lname}</div>
                        <div className="flex space-x-2 mt-2">
                            <button
                                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                                onClick={() => onEditContact(contact)}
                            >
                                Edit
                            </button>
                            <button
                                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
                                onClick={() => handleView(contact.id)}
                            >
                                View
                            </button>
                            <button
                                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
                                onClick={() => handleDelete(contact.id)}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default ContactList;
