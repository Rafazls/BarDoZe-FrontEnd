import BarDoZe  from '../../assets/BarDoZe.svg'

export function Header(){
    return(
        <>
        <header className="flex-row flex buttonst-none justify-between " >
        <a href="/"><img className='mt-10 ml-16' src={BarDoZe} alt="BarDoZe-Logo"/></a>
        <nav className=' flex flex-row justify-between items-center text-2xl space-x-16 mr-28 '>
           <button> Sobre</button>
           <button>Delivery</button>
           <button>Unidades</button>
           <button>Loja</button>
           <button className='select-none rounded-lg bg-red-500 py-3 px-6 text-center abuttongn-middle font-sans text-xl font-bold  text-white shadow-md shadow-red-500/20 transition-all hover:shadow-xl hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'>Pedir Agora</button>
        </nav>
        </header>
        </>
    )
}