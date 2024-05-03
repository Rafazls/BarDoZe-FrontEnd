import BarDoZe from '../../assets/Login_logo.svg'
import Undraw_login from '../../assets/Undraw-login.svg'
import GoogleLogo from '../../assets/Google-Logo.svg'
import { useState } from 'react';
import axios from 'axios';

export default function Cadastro() {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const NomeVazio = () =>
        alert("O Campo do nome está vazio!");
    const EmailVazio = () =>
        alert("O Campo do email está vazio!");
    const SenhaVazio = () =>
        alert("O Campo de senha está vazio!");
    const ExistUser = () =>
        alert("Usuário Já existe!");

    return (
        <>
            <div className="flex flex-row h-full ">
                <div className="w-[2800px] bg-red-900 rounded-r-2xl  ">
                    <img className='w-[20%] mt-4 ml-4' src={BarDoZe} alt="BarDoZe-Logo" />
                    <img className='w-[50%] mt-10 ml-72' src={Undraw_login} alt="Undraw_login" />
                </div>

                <div className="w-full mt-16 ml-56 ">
                    <h1 className='text-4xl mb-3'>Cadastro</h1>
                    <h2 className='text-lg mb-5'>Seja-bem vindo ao Bar do Zé!<br />Cadastre-se Agora!</h2>
                    <button type="button" className="h-10 w-[450px] mb-8 justify-center items-center flex  text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2">
                        <img className='w-6 h-5 me-2 -ms-1' src={GoogleLogo} alt="Google logo" />
                        Connect with Google
                    </button>
                    <p>___________________________OU___________________________</p>

                    <label className="block mt-10 mb-2 text-lg font-medium text-gray-900 dark:text-black"> Nome</label>
                    <input type="email" value={nome} onChange={e => setNome(e.target.value)} className="bg-gray-50 border mb-8 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[450px] p-2.5  dark:bg-white dark:border-gray-600 dark:placeholder-gray-800 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="João Silva" required />

                    <label className="block mt-10 mb-2 text-lg font-medium text-gray-900 dark:text-black"> Email</label>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="bg-gray-50 border mb-8 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[450px] p-2.5  dark:bg-white dark:border-gray-600 dark:placeholder-gray-800 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@gmail.com" required />

                    <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-black">Senha</label>
                    <input type="password" value={senha} onChange={e => setSenha(e.target.value)} className="bg-gray-50 border mb-8 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[450px] p-2.5  dark:bg-white dark:border-gray-600 dark:placeholder-gray-800 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    <div className='ml-36'>
                        <button type="submit" className="h-12 text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center   dark:focus:ring-red-600 dark:bg-red-800 dark:border-red-700 dark:text-white dark:hover:bg-red-700 me-2 mb-2"
                            onClick={(event) => {
                                event.preventDefault();

                                // Verificação de campos vazios
                                if (!nome) {
                                    NomeVazio();
                                    return;
                                }
                                if (!email) {
                                    EmailVazio();
                                    return;
                                }
                                if (!senha) {
                                    SenhaVazio();
                                    return;
                                }

                                // Realizando a requisição de POST para o servidor
                                axios.post('http://localhost:3000/users/create', {
                                    name: nome,
                                    email: email,
                                    password: senha
                                })
                                    .then((response) => {
                                        // Verificação do status da resposta do servidor
                                        if (response.data.message === 'OK') {
                                            alert("Usuário Criado com sucesso!");
                                            return window.location.href = '/login';                                      
                                         }
                                    })
                                    .catch(error => {
                                        // Tratamento de erros baseado na resposta do servidor
                                        if (error.response) {
                                            if (error.response.status === 400) {
                                                ExistUser();
                                            }
                                        }
                                    });
                            }}
                        >CONTINUAR</button></div>
                    <p className='text-lg ml-20 mt-7'>Já tem uma conta?<a className='text-red-400 ml-2' href="/login">Entre agora!</a></p>
                </div>
            </div>
        </>
    )
}