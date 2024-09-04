import React from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const ContactDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const contacts = useSelector((state: RootState) => state.contacts.contacts);
    const contact = contacts.find(contact => contact.id === id);

    if (!contact) {
        return <div>
            <p>Contact not found</p>
            <div className="mt-4">
                <Link to="/" className="bg-blue-500 text-white px-4 py-2 rounded">
                    Back to Contact List
                </Link>
            </div>
        </div>;
    }
    return (
        <div className="p-6">
            <div className="p-6 border rounded bg-white">
                <h2 className="text-2xl font-bold mb-4">{contact.Fname + " " + contact.Lname}</h2>
                <p>First Name: {contact.Fname}</p>
                <p>Last Name: {contact.Lname}</p>
                <p>Email: {contact.email}</p>
                <p>Phone: {contact.phone}</p>
                <p className="capitalize">Status: {contact.status}</p>
            </div>
            <div className="mt-4">
                <Link to="/" className="bg-blue-500 text-white px-4 py-2 rounded">
                    Back to Contact List
                </Link>
            </div>
        </div>
    );
};

export default ContactDetails;

