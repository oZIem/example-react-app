import {object ,string } from 'yup';


const required_message = "Bu alan zorunludur";

const contactSchema = object({
    firstName: string().required(required_message),
    lastName: string().required(required_message),
    email: string().email().required(required_message),
    message: string().min(10 , "En az 10 karakter olmalıdır").required(required_message),

});

export default contactSchema;