import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import '../../services/api';
import './styles.css';

import logoImg from '../../assets/logo.svg';
import api from '../../services/api';

export default function Register(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [cidade, setCidade] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();

    async function handleRegister(e){
        e.preventDefault();

        const data = {
            name,
            email,
            whatsapp,
            cidade,
            uf
        };

        try{
        const response = await api.post('ongs', data);

        alert(`Seu ID de acesso: ${response.data.id}`);
        history.push('/');
        }catch(erro){
         alert('Erro no cadastro, tente novamente');   
        }
    }

    return (
        <div className="register-container">

            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, ajude pessoas encontrar casos de várias ONG'S</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={22} color="#e02041"/>
                        Não possuo cadastro
                    </Link>
                </section>

                <form onSubmit={handleRegister}>
                    <input placeholder="Nome da ONG"
                    value={name}
                    onChange = {e => setName(e.target.value)} 
                    />
                    <input type="email" placeholder="E-mail" 
                    value={email}
                    onChange = {e => setEmail(e.target.value)} 
                    />
                    <input placeholder="Whatsapp" maxLength="11"
                    value={whatsapp}
                    onChange = {e => setWhatsapp(e.target.value)} 
                    />

                    <div className="input-group">
                        <input placeholder="Cidade" 
                        value={cidade}
                        onChange = {e => setCidade(e.target.value)} 
                        />
                        <input placeholder ="UF" maxLength="2" style={{ width: 80 }} 
                        value={uf}
                        onChange = {e => setUf(e.target.value)} 
                        />
                    </div>
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>  

        </div>
    );
}
