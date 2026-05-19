import { useState } from "react";
import Card from "./Card.jsx";

/*
 * EJERCICIO 5: Lista de Productos con Filtrado
 * =============================================
 * Conceptos: .map() con key, .filter(), estado derivado,
 *            renderizado condicional, <select> y checkbox controlados
 *
 * Los productos NUNCA se modifican. Los filtros crean un array
 * derivado (productosFiltrados) que es el que se renderiza.
 */

// Datos fijos (no necesitan useState porque no cambian)
const PRODUCTOS = [
  { id: 1, nombre: "Unanimo Party",             precio: 30500,  categoria: "Familiar", imagen: "https://apioverde.com/cdn/shop/files/D_752953-MLA82943246847_032025-F_1024x1024.jpg?v=1752591096", enStock: true },
  { id: 2, nombre: "Masomenos",                 precio: 51500,  categoria: "Familiar", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1Jv-u0rkyDRsltEFQ1XkPr7cDFXoZuH8Lyw&s", enStock: true },
  { id: 3, nombre: "Catan",                     precio: 111500, categoria: "Experto",  imagen: "https://devirinvestments.s3.eu-west-1.amazonaws.com/img/catalog/product/8436017220100-1200-face3d.jpg", enStock: false },
  { id: 4, nombre: "Buscadores de Unicornios",  precio: 29700,  categoria: "Infantil", imagen: "https://acdn-us.mitiendanube.com/stores/393/260/products/caja-2-sin-fondo-50228732860869db5e17586395054900-480-0.webp", enStock: true },
  { id: 5, nombre: "Carcassonne",               precio: 47500,  categoria: "Experto",  imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0QZhisa2tKRa2YTmjEjXPBMwT3DkYtKgcuQ&s", enStock: true },
  { id: 6, nombre: "Dodo",                      precio: 81500,  categoria: "Infantil", imagen: "https://devirinvestments.s3.eu-west-1.amazonaws.com/img/catalog/product/8436589627406-1200-face3d.jpg", enStock: true },
  { id: 7, nombre: "La gran siete",             precio: 29000,  categoria: "Familiar", imagen: "https://acdn-us.mitiendanube.com/stores/117/811/products/la-gran-siete1-50b594c3bc539b637216580990369888-640-0.webp", enStock: true },
  { id: 8, nombre: "Azul",                      precio: 115000, categoria: "Experto",  imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_939158-MLA99525260442_122025-F.webp", enStock: false },
  ];

// Sacamos las categorias unicas del array
const CATEGORIAS = ["Todas", ...new Set(PRODUCTOS.map((p) => p.categoria))];

function ListaProductos() {
  // Estado de los filtros
  const [categoria, setCategoria] = useState("Todas");
  const [soloEnStock, setSoloEnStock] = useState(false);

  // Estado derivado: filtramos sin modificar el array original
  // Ambos filtros se aplican combinados (uno tras otro)
  const productosFiltrados = PRODUCTOS.filter((p) => {
    // Filtro 1: por categoria
    if (categoria !== "Todas" && p.categoria !== categoria) return false;
    // Filtro 2: por stock
    if (soloEnStock && !p.enStock) return false;
    return true;
  });

  return (
    <div>
      
      {/* Controles de filtro */}
      <div className="filtros">
        <select
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        >
          {CATEGORIAS.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>

        <label>
          <input
            type="checkbox"
            checked={soloEnStock}
            onChange={(e) => setSoloEnStock(e.target.checked)}
          />
          Solo en stock
        </label>

        <span style={{ marginLeft: "auto", fontSize: "0.85rem", color: "#666" }}>
          {productosFiltrados.length} producto{productosFiltrados.length !== 1 && "s"}
        </span>
      </div>

      {/* Lista de productos o mensaje vacio */}
      <div className="productos-grid">
        {productosFiltrados.length === 0 ? (
          <p className="vacio">No hay productos con esos filtros.</p>
        ) : (
          productosFiltrados.map((producto) => (
  <Card
    key={producto.id}
    titulo={producto.nombre}
    descripcion={producto.categoria}
    imagen={producto.imagen}
    precio={producto.precio}
  >
    <span
      className={`badge-stock ${
        producto.enStock ? "badge-si" : "badge-no"
      }`}
    >
      {producto.enStock ? "En stock" : "Sin stock"}
    </span>
  </Card>
))
        )}
      </div>
      
    </div>
  );
}

export default ListaProductos;