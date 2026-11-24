import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

function App() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-10 flex flex-col gap-10">

      <Navbar />      

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* Tarjeta 1*/}
        <div className="flex flex-col gap-2 p-4 rounded-xl shadow-md bg-white">
          <img src="https://images.unsplash.com/photo-1628832307345-7404b47f1751?w=400&h=300&fit=crop" className="rouded-lg"/>
          <h3 className="font-semibold text-lg">Mouse Inalambrico</h3>
          <p className="text-texto-dim text-sm">Mouse  ergonómico, conexion en bluetooth</p>
          <p className = "text-verde  font-extrabold">$89.900</p>
        </div>

        {/* Tarjeta 2*/}
        <div className="flex flex-col gap-2 p-4 rounded-xl shadow-md bg-white">
          <img src="https://images.unsplash.com/photo-1763136469657-d4e9aea1522f?w=400&h=300&fit=crop." className="rouded-lg"/>
          <h3 className="font-semibold text-lg">Teclado mecanico</h3>
          <p className="text-texto-dim text-sm">Switches azules, Retro iluminado RGB</p>
          <p className = "text-verde  font-extrabold">$149.900</p>
        </div>

        {/* Tarjeta 3*/}
        <div className="flex flex-col gap-2 p-4 rounded-xl shadow-md bg-white">
          <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop" className="rouded-lg"/>
          <h3 className="font-semibold text-lg">Monitor 24</h3>
          <p className="text-texto-dim text-sm">Full HD,72hz, Panel IPS</p>
          <p className = "text-verde  font-extrabold">$899.900</p>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default App