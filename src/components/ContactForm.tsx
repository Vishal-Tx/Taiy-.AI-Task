import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact, updateContact, Contact } from "../store/contactsSlice";

interface ContactFormProps {
    contact?: Contact;
    onClose: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ contact, onClose }) => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState<Contact>(
        contact || { id: "", Fname: "", Lname: "", email: "", phone: "", status: "active" }
    );
    const [errors, setErrors] = useState({
        Fname: "",
        Lname: "",
        email: "",
        phone: "",
    });

    const validateForm = () => {
        const newErrors: typeof errors = { Fname: "", Lname: "", email: "", phone: "" };
        let isValid = true;

        if (!formData.Fname.trim()) {
            newErrors.Fname = "First Name is required.";
            isValid = false;
        }
        if (!formData.Lname.trim()) {
            newErrors.Lname = "First Name is required.";
            isValid = false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            newErrors.email = "Email is required.";
            isValid = false;
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = "Invalid email format.";
            isValid = false;
        }

        const phoneRegex = /^[0-9]{10}$/;
        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required.";
            isValid = false;
        } else if (!phoneRegex.test(formData.phone)) {
            newErrors.phone = "Phone number must be 10 digits.";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (validateForm()) {
            if (formData.Fname && formData.Lname && formData.email && formData.phone) {
                if (contact) {
                    // Updating the existing contact
                    dispatch(updateContact(formData));
                } else {
                    // Adding the new contact
                    dispatch(addContact({ ...formData, id: Date.now().toString() }));
                }
                onClose();
            }
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <h2 className="text-xl font-bold mb-4">{contact ? "Edit" : "Add"} Contact</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor='Fname' className="block text-sm font-medium">First Name</label>
                    <input
                        type="text"
                        name="Fname"
                        value={formData.Fname}
                        onChange={handleChange}
                        className="border p-2 w-full"
                    />
                    {errors.Fname && <p className="text-red-500 text-sm">{errors.Fname}</p>}
                </div>
                <div className="mb-4">
                    <label htmlFor='Lname' className="block text-sm font-medium">Last Name</label>
                    <input
                        type="text"
                        name="Lname"
                        value={formData.Lname}
                        onChange={handleChange}
                        className="border p-2 w-full"
                    />
                    {errors.Lname && <p className="text-red-500 text-sm">{errors.Lname}</p>}
                </div>
                <div className="mb-4">
                    <label htmlFor='email' className="block text-sm font-medium">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="border p-2 w-full"
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>
                <div className="mb-4">
                    <label htmlFor="phone" className="block text-sm font-medium">Phone</label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="border p-2 w-full"
                    />
                    {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}

                </div>
                <div className="mb-4">
                    <label className="block font-medium text-sm mb-2">Status:</label>
                    <div className="flex items-center">
                        <input
                            type="radio"
                            id="status-active"
                            name="status"
                            value="active"
                            checked={formData.status === "active"}
                            onChange={() => setFormData(prev => ({ ...prev, status: "active" }))}
                            className="mr-2"
                        />
                        <label htmlFor="status-active" className="mr-4">
                            Active
                        </label>
                        <input
                            type="radio"
                            id="status-inactive"
                            name="status"
                            value="inactive"
                            checked={formData.status === "inactive"}
                            onChange={() => setFormData(prev => ({ ...prev, status: "inactive" }))}
                            className="mr-2"
                        />
                        <label htmlFor="status-inactive">Inactive</label>
                    </div>
                </div>
                <div className="flex space-x-2">
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                        {contact ? "Update" : "Add"} Contact
                    </button>
                    <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded" onClick={onClose}>
                        Cancel
                    </button>
                </div>
            </form >
        </div >
    );
};

export default ContactForm;
