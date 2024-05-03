import { Header } from "../components/Header"
// import { Footer } from "../components/Footer"
import Undraw1 from '../assets/UndrawIcon-PaginaPrincipal.svg'


export default function Home() {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Body */}
      <div className="flex flex-row space-x-10 px-36 py-28 ">
        <div>
          <p className="text-2xl mb-1 0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt gravida nisi venenatis hendrerit. Vestibulum viverra arcu et nisl lacinia, ut dictum ante efficitur. Sed id feugiat dolor.</p>
          <p className="text-2xl mb-10"> Nullam non cursus enim, sed ultricies libero. Nulla ac aliquam odio. Morbi convallis nulla in est tempor sollicitudin. Morbi at ante vitae est dignissim tempor.</p>
          <button className='select-none rounded-lg bg-red-500 py-3 px-6 text-center align-middle font-sans text-xl font-bold  text-white shadow-md shadow-red-500/20 transition-all hover:shadow-xl hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'>Conheça nossa História</button>
        </div>
        <img className="" src={Undraw1} alt="Undraw Image 1" />
      </div>

      <div>
        <h1>Serviços</h1>
        <div>
          <div><img src="" alt="" /> <h2>Delivery</h2></div>
          <div><img src="" alt="" /> <h2>Unidades</h2></div>
          <div><img src="" alt="" /> <h2>Loja</h2></div>
        </div>
      </div>


    </>

  )
}