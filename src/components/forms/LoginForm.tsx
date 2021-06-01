// @ts-nocheck
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { NavLink } from 'react-router-dom';
import { Input } from './elements';
import { schemaLogIn } from './schema/schemaLogIn';
import { useLogin } from '../../hooks/useLogin';

export const LoginForm = () => {
    const login = useLogin();

    const form = useForm({
        mode:     'onBlur',
        resolver: yupResolver(schemaLogIn),
    });

    const submitForm = form.handleSubmit(async (data) => {
        await login.mutateAsync(data);
        form.reset();
    });

    return (
        <section className = 'login'>
            <section className = 'publish-tip'>
                <form onSubmit = { form.handleSubmit(submitForm) }>
                    <fieldset>
                        <legend>Залогиниться</legend>

                        <Input
                            label = 'Электр.почта'
                            error = { form.formState.errors.email }
                            register = { form.register('email') } />

                        <Input
                            label = 'Пароль'
                            type  = 'password'
                            error = { form.formState.errors.password }
                            register = { form.register('password') } />

                        <input type = 'submit' value = 'Войти' />

                    </fieldset>
                    Если у вас до сих пор нет учётной записи, вы можете <NavLink to = '/signup'><u>зарегистрироваться</u></NavLink>.
                </form>
            </section>
        </section>
    );
};
