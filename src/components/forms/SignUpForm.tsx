// @ts-nocheck
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { NavLink } from 'react-router-dom';
import { Input } from './elements';
import { schemaSignUp } from './schema/schemaSignUp';
import { useSignUp } from '../../hooks/useSignUp';

export const SignUpForm = () => {
    const createData = useSignUp();

    const form = useForm({
        mode:     'onBlur',
        resolver: yupResolver(schemaSignUp),
    });

    const submitForm = form.handleSubmit(async (newData) => {
        await createData.mutateAsync(newData);
        form.reset();
    });

    return (
        <section className = 'login'>
            <section className = 'publish-tip'>
                <form onSubmit = { form.handleSubmit(submitForm) }>
                    <fieldset>
                        <legend>Залогиниться</legend>

                        <Input
                            label = 'Имя и фамилия'
                            error = { form.formState.errors.name }
                            register = { form.register('name') } />

                        <Input
                            label = 'Электр.почта'
                            error = { form.formState.errors.email }
                            register = { form.register('email') } />

                        <Input
                            label = 'Пароль'
                            type = 'password'
                            error = { form.formState.errors.password }
                            register = { form.register('password') } />

                        <Input
                            label = 'Подтверждение пароля'
                            type = 'password'
                            error = { form.formState.errors.confirmPassword }
                            register = { form.register('confirmPassword') } />

                        <input type = 'submit' value = 'Зарегистрироваться' />

                    </fieldset>
                    Перейти к <NavLink to = '/login'><u>логину</u></NavLink>.
                </form>
            </section>
        </section>
    );
};
