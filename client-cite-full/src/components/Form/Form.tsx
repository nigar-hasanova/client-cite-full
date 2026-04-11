import classes from './form.module.css';
import BtnDark from '../BtnDark/BtnDark';
import { useState } from "react";
import Swal from "sweetalert2";

type FormDataType = {
    name: string;
    email: string;
    subject: string;
    select: string;
    message: string;
}

type ErrorsType = {
    name?: string;
    email?: string;
    subject?: string;
    select?: string;
    message?: string;
};

export default function Form() {
    const [formData, setFormData] = useState<FormDataType>({
        name: "",
        email: "",
        subject: "",
        select: "",
        message: ""
    });

    const [errors, setErrors] = useState<ErrorsType>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        if (name === "message" && value.length > 200) return;

        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validate = () : boolean => {
        const newErrors: ErrorsType = {};

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        }

        if (!formData.email) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email is not valid";
        }

        if (!formData.subject) {
            newErrors.subject = "Subject is required";
        }

        if (!formData.select) {
            newErrors.select = "Please select subject";
        }

        if (!formData.message) {
            newErrors.message = "Message is required";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (validate()) {

            Swal.fire({
                icon: "success",
                title: "Message Sent!",
                text: "Your message has been sent successfully.",
            });

        } else {

            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please fill all required fields correctly!",
            });

        }
    };

    return (
        <form className={classes.form} onSubmit={handleSubmit}>
            <div className={classes.formGridBox}>
                <div className={classes.formBox}>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder='Enter your name'
                        value={formData.name}
                        onChange={handleChange}
                        className={errors.name ? classes.errorInput : ""}
                    />
                    {errors.name && <span className={classes.error}>{errors.name}</span>}

                </div>
                <div className={classes.formBox}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder='Enter your email'
                        value={formData.email}
                        onChange={handleChange}
                        className={errors.email ? classes.errorInput : ""}
                    />
                    {errors.email && <span className={classes.error}>{errors.email}</span>}

                </div>
                <div className={classes.formBox}>
                    <label htmlFor="subject">Subject</label>
                    <input
                        type="text"
                        name="subject"
                        id="subject"
                        placeholder='Provide context'
                        value={formData.subject}
                        onChange={handleChange}
                        className={errors.subject ? classes.errorInput : ""}
                    />
                    {errors.subject && <span className={classes.error}>{errors.subject}</span>}

                </div>
                <div className={classes.formBox}>
                    <label htmlFor="select">Subject</label>
                    <select
                        name="select"
                        id="select"
                        value={formData.select}
                        onChange={handleChange}
                        className={errors.select ? classes.errorInput : ""}
                    >
                        <option value="">Select subject</option>
                        <option value="lorem">Lorem</option>
                        <option value="ipsum">Ipsum</option>
                        <option value="dolor">Dolor</option>
                    </select>
                    {errors.select && <span className={classes.error}>{errors.select}</span>}

                </div>
            </div>
            <div className={classes.messageBox}>
                <label htmlFor="message">Message</label>
                <textarea
                    name="message"
                    id="message"
                    placeholder='Write your  question here'
                    value={formData.message}
                    onChange={handleChange}
                    className={errors.message ? classes.errorInput : ""}
                ></textarea>
                <div className={classes.messageInfo}>
                    <span className={classes.error}>
                        {errors.message}
                    </span>

                    <span>
                        {formData.message.length}/200
                    </span>
                </div>
            </div>
            <BtnDark title={'Send Messege'}
                disabled={!formData.name || !formData.email || !formData.message}
            />
        </form>
    )
}