import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

import './styles.css';

export default function NewIncident(){
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [valor_custo, setValor_custo] = useState('');

    const history = useHistory();

    const ongId = localStorage.getItem('ongId');
    
    async function handleNewIncident(e){
        e.preventDefault();

        const data = {
            titulo,
            descricao,
            valor_custo,
        }; try{
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId, 
                }
            })
            history.push('/profile');
        }catch(erro){
            alert('Não foi possível adicionar novo caso, tente novamente');
        }
    }
    
    return (
        <div className="new-incident-container">

        <div className="content">
            <section>
                <img src={logoImg} alt="Be The Hero"/>

                <h1>Cadastrar novo caso</h1>
                <p>Escreva detalhes do caso e o valor pedido e encontre um Herói para ajudar!</p>

                <Link className="back-link" to="/profile">
                    <FiArrowLeft size={22} color="#e02041"/>
                    Voltar aos Casos
                </Link>
            </section>

            <form onSubmit={handleNewIncident}>
                <input placeholder="Titulo do Caso" 
                value = {titulo}
                onChange = {e => setTitulo(e.target.value)}
                />
                <textarea placeholder="Descrição" 
                value = {descricao}
                onChange = {e => setDescricao(e.target.value)}
                />
                <input placeholder="Valor em R$" 
                value = {valor_custo}
                onChange = {e => setValor_custo(e.target.value)}
                />
                    
                <button className="button" type="submit">Cadastrar</button>
            </form>
        </div>  

    </div>
    )
}