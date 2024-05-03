import BarDoZe from '../../assets/BarDoZe.svg'
import Local from '../../assets/Local.svg'
import Instagram from '../../assets/Instagram-logo.svg'
import Email from '../../assets/email.svg'

export function Footer() {
    return (
        <>
            <footer className=' list-none px-48 py-16 '>
                <div className='flex flex-row items-center '>
                    <img className=' ' src={BarDoZe} alt="BarDoZe-Logo" />
                    <ul className=' px-16 space-y-4'>
                        <li className='flex flex-row items-center' ><img src={Local}></img>Av.TesteBar,569 - Teste</li>
                        <li className='flex flex-row items-center' ><img src={Local}></img>Av.TesteBar,569 - Teste</li>
                        <li className='flex flex-row items-center' ><img src={Local}></img>Av.TesteBar,569 - Teste</li>
                    </ul>
                    <div className=' text-lg px-56  '>
                        <h1 className=' text-3xl mb-6'>Loja</h1>
                        <li >Comprar</li>
                        <li>Minha Conta</li>
                        <li>Termos e condições</li>
                        <li>Política de Privaciade</li>
                    </div>
                    <ul className='ml-10 space-y-4 '>
                    <li className='flex flex-row items-center'><img src={Instagram} alt="Instagram Icon"/>@ BardoZe</li>
                    <li className='flex flex-row items-center'><img src={Email} alt="Email Icon"/> contato@gmail.com</li>
                    </ul>
                </div>
                    <p className=' mt-5 flex justify-end '>2024 &copy; Rafael Souza</p>
            </footer>
        </>
    )
}