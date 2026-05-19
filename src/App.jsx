// ═══════════════════════════════════════════════════════════════
//  App.jsx — Componente principal (raíz)
// ═══════════════════════════════════════════════════════════════
//  Acá COMPONEMOS todos los componentes hijos.
//  Fijate cómo el MISMO <Card /> se usa 3 veces con props distintas.
//  Eso es la magia de React: 1 componente → muchos resultados.
// ═══════════════════════════════════════════════════════════════

// 1) IMPORTAMOS los componentes desde la carpeta /components
import Header from './components/Header.jsx'
import Card from './components/Card.jsx'
import Footer from './components/Footer.jsx'
import Contador from './components/Contador.jsx'
import Formulario from './components/ContactForm.jsx'
import ListaProductos from './components/ProductList.jsx'
import ListaTareas from './components/TodoApp.jsx'
import './App.css'

function App() {
  return (
    // <> ... </>  =  Fragment de React (envoltorio invisible)
    // sirve cuando querés devolver varios elementos sin <div> extra.
    <>
      {/* ── Componente con UNA prop ─────────────────────────── */}
      <Header titulo="TP6-REACT" />

      <main className="contenido">
        <h2 className="seccion-titulo">Ejercicio N°2: Cards</h2>

        <section className="cards">
          {/* ── Mismo componente <Card />, distintas props ──── */}

          {/* Card 1: sin children */}
          <Card
            titulo="Catan"
            descripcion="Juego de estrategia y azar"
            imagen="https://devirinvestments.s3.eu-west-1.amazonaws.com/img/catalog/product/8436017220100-1200-face3d.jpg"
            precio={200000}
          />

          <Card
            titulo="Carcassone"
            descripcion="Juego de estrategia con losetas"
            imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0QZhisa2tKRa2YTmjEjXPBMwT3DkYtKgcuQ&s"
            precio={150000}
          />

          <Card
            titulo="El Espía"
            descripcion="Juego de roles ocultos"
            imagen="https://diadejuegos.pe/2009-large_default/el-espia-que-se-perdio.jpg"
            precio={30000}
          />          

          {/* Card 2: con children (un <Boton /> adentro(ya no)) */}
          <Card
            titulo="Buscadores de unicornios"
            descripcion="Juego infantil"
            imagen="https://acdn-us.mitiendanube.com/stores/393/260/products/caja-2-sin-fondo-50228732860869db5e17586395054900-480-0.webp"
            precio={15000}
          >
          </Card>
        </section>
      </main>

      <h2 className="seccion-titulo">Ejercicio N°3: Contador</h2>
      <Contador/>

      <h2 className="seccion-titulo">Ejercicio N°4: Formulario</h2>      
      <Formulario/>

      <h2 className="seccion-titulo">Ejercicio N°5: Lista de productos</h2> 
      <ListaProductos/>
      
      <h2 className="seccion-titulo">Ejercicio N°6: Lista de tareas</h2> 
      <ListaTareas/>

      {/* ── Footer SIN prop → usa el valor por defecto ──────── */}
      <Footer/>
    </>
  )
}

export default App