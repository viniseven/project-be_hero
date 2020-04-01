import React, { useState } from 'react';
import { Link, useHistory }  from 'react-router-dom';
import { FiUserPlus } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

export default function Logon(){
    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();

        try{
            const response = await api.post('session', { id });
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);

            history.push('/profile');
        }catch (erro){
            alert('Falha no login, tente novamente');
        }
    }

    return (
        <div className='logon-container'>
            <section className="form">
                <img src={logoImg} alt="Logo Hero" />

                <form onSubmit={handleLogin}>
                    <h1>Realizar Login</h1>

                    <input placeholder="Insira seu ID" 
                    value = {id}
                    onChange = {e => setId(e.target.value)}
                    />
                    <button className="button" type="submit">Entrar</button>
                    
                    <Link className="back-link" to="/register">
                        <FiUserPlus size={22} color="#e02041"/>
                        Não possuo cadastro
                    </Link>
                </form>
            </section>

            <img src={heroesImg} alt="Heroes" />
        </div>
    );
};