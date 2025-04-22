import React, { useState } from 'react';
import logo from '../../assets/img/myFutClub-logo.png';
import { useForm } from 'react-hook-form';
import { Global } from '../../helpers/Global';

export const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    // States
    const [loginStatus, setLoginStatus] = useState('not_sended');


    const loginUser = async (data) => {
        // API login request
        const request = await fetch(Global.url + "user/login", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type" : "application/json"
            }
        });

        const response = await request.json();

        if (response.status === "success") {
            // Save token and user's data in browser for persist session.
            localStorage.setItem('token', response.token);
            localStorage.setItem('user', JSON.stringify(response.user));

            // Update login state
            setLoginStatus('login_success');

            

            // Redirecting
            setTimeout(() => {
                window.location.reload();
            }, 1500);

        } else {
            // Update login state
            setLoginStatus('login_error')
        }
    }

    return (
        <section className='login__container'>
            <div className='login-logo__container'>
                <img src={ logo } alt='logo-MyFutClub' />
            </div>

            <div className='form__container form-login__container'>
                <div className='title title-form__container'>
                    <h1>Iniciar sesión</h1>
                </div>

                <form className='form' onSubmit={handleSubmit(loginUser)}>
                    <div className='form-field'>
                        <label htmlFor='email' className='label-field'>Email</label>
                        <input type='email' id='email' placeholder='Email' {...register('email', {
                            required: true,
                            maxLength: 50,
                            pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
                        })} />

                        {errors.email?.type === 'required' && <p className='message message__error'>Campo requerido.</p>}
                        {errors.email?.type === 'maxLength' && <p className='message message__error'>Longitud máxima: 50 carateres.</p>}
                        {errors.email?.type === 'pattern' && <p className='message message__error'>Debes introducir un email válido.</p>}
                    </div>

                    <div className='form-field'>
                        <label htmlFor='password' className='label-field'>Contraseña</label>
                        <input type='password' id='password' placeholder='Contraseña' {...register('password', {
                            required: true,
                            maxLength: 50
                        })} />

                        {errors.password?.type === 'required' && <p className='message message__error'>Campo requerido.</p>}
                        {errors.password?.type === 'maxLength' && <p className='message message__error'>Longitud máxima: 50 caracteres.</p>}
                    </div>

                    {loginStatus === "login_success" && <p className='message message__success'>Has iniciado sesión correctamente.</p>}
                    {loginStatus === "login_error" && <p className='message message__error'>Email o contraseña incorrectos.</p>}

                    <div className='form-field form-field-button'>
                        <input type='submit' value='Entrar' className='button' />
                    </div>
                </form>
            </div>
        </section>
    )
}
