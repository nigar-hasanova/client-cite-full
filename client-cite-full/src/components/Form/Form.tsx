import classes from './form.module.css';
import BtnDark from '../BtnDark/BtnDark';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';

export default function Form() {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            subject: '',
            select: '',
            message: ''
        },

        validationSchema: Yup.object({
            name: Yup.string().trim().min(2, 'Name must be at least 2 characters').required('Name is required'),
            email: Yup.string().email('Email is not valid').required('Email is required'),
            subject: Yup.string().trim().min(2, 'Subject must be at least 2 characters').required('Subject is required'),
            select: Yup.string().required('Please select subject'),
            message: Yup.string()
                .test('len', 'Max 200 characters', val => {
                    const text = val?.replace(/<[^>]+>/g, '') || '';
                    return text.length <= 200;
                })
                .required('Message is required')
        }),

        onSubmit: (_values, { resetForm }) => {
            Swal.fire({
                icon: 'success',
                title: 'Message Sent!',
                text: 'Your message has been sent successfully.'
            });

            toast.success("Form submitted successfully!");
            resetForm();
        }
    });

    const handleErrorToast = () => {
        toast.error("Please fill all fields correctly!");
    };

    return (
        <>
            <form
                className={classes.form}
                onSubmit={(e) => {
                    e.preventDefault();
                    formik.handleSubmit();

                    if (!formik.isValid) {
                        handleErrorToast();
                    }
                }}
            >
                <div className={classes.formGridBox}>

                    <div className={classes.formBox}>
                        <label>Name</label>
                        <input
                            type="text"
                            placeholder='Enter your name'
                            {...formik.getFieldProps('name')}
                            className={formik.touched.name && formik.errors.name ? classes.errorInput : ""}
                        />
                        {formik.touched.name && formik.errors.name &&
                            <span className={classes.error}>{formik.errors.name}</span>}
                    </div>

                    <div className={classes.formBox}>
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder='Enter your email'
                            {...formik.getFieldProps('email')}
                            className={formik.touched.email && formik.errors.email ? classes.errorInput : ""}
                        />
                        {formik.touched.email && formik.errors.email &&
                            <span className={classes.error}>{formik.errors.email}</span>}
                    </div>

                    <div className={classes.formBox}>
                        <label>Subject</label>
                        <input
                            type="text"
                            placeholder='Provide context'
                            {...formik.getFieldProps('subject')}
                            className={formik.touched.subject && formik.errors.subject ? classes.errorInput : ""}
                        />
                        {formik.touched.subject && formik.errors.subject &&
                            <span className={classes.error}>{formik.errors.subject}</span>}
                    </div>

                    <div className={classes.formBox}>
                        <label>Subject</label>
                        <select
                            {...formik.getFieldProps('select')}
                            className={formik.touched.select && formik.errors.select ? classes.errorInput : ""}
                        >
                            <option value="">Select subject</option>
                            <option value="lorem">Lorem</option>
                            <option value="ipsum">Ipsum</option>
                            <option value="dolor">Dolor</option>
                        </select>
                        {formik.touched.select && formik.errors.select &&
                            <span className={classes.error}>{formik.errors.select}</span>}
                    </div>

                </div>

                <div className={classes.messageBox}>
                    <label>Message</label>

                    <ReactQuill
                        theme="snow"
                        value={formik.values.message || ''}
                        onChange={(value) => {
                            if (value === '<p><br></p>') {
                                formik.setFieldValue('message', '');
                            } else {
                                formik.setFieldValue('message', value);
                            }
                        }}
                        onBlur={() => formik.setFieldTouched('message', true)}
                        className={formik.touched.message && formik.errors.message ? classes.errorInput : ""}
                    />

                    <div className={classes.messageInfo}>
                        <span className={classes.error}>
                            {formik.touched.message && formik.errors.message}
                        </span>

                        <span>
                            {
                                formik.values.message.replace(/<[^>]+>/g, '').length
                            }/200
                        </span>
                    </div>
                </div>

                <BtnDark
                    title={'Send Message'}
                    type="submit"
                    disabled={!formik.isValid || !formik.dirty}
                />
            </form>

            <ToastContainer position="top-right" autoClose={2000} />
        </>
    );
}