import * as yup from 'yup';

export const schemaSignUp = yup.object().shape({
    name:            yup.string().required('минимальная длина — 2 символов'),
    email:           yup.string().email('почта должна быть настоящей').required('*'),
    password:        yup.string().min(8, 'минимальная длина — 8 символов').required('*'),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'Пароли должны совпадать').required('*'),
});
