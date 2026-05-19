import { useState } from "react";

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
  { id: 1, nombre: "Unanimo Party",             precio: 30500,  categoria: "Familiar", enStock: true },
  { id: 2, nombre: "Masomenos",                 precio: 51500,  categoria: "Familiar", enStock: true },
  { id: 3, nombre: "Catan",                     precio: 111500, categoria: "Experto",  enStock: false },
  { id: 4, nombre: "Buscadores de Unicornios",  precio: 29700,  categoria: "Infantil", enStock: true },
  { id: 5, nombre: "Carcassonne",               precio: 47500,  categoria: "Experto",  enStock: true },
  { id: 6, nombre: "Dodo",                      precio: 81500,  categoria: "Infantil", enStock: true },
  { id: 7, nombre: "La gran siete",             precio: 29000,  categoria: "Familiar", enStock: true },
  { id: 8, nombre: "Azul",                      precio: 115000, categoria: "Experto",  enStock: false },
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
            <div
              key={producto.id}
              className={`producto-card ${!producto.enStock ? "sin-stock" : ""}`}
            >
              <div className="nombre">{producto.nombre}</div>
              <div className="precio">${producto.precio.toLocaleString("es-AR")}</div>
              <div className="categoria">{producto.categoria}</div>
              <span className={`badge-stock ${producto.enStock ? "badge-si" : "badge-no"}`}>
                {producto.enStock ? "En stock" : "Sin stock"}
              </span>
            </div>
          ))
        )}
      </div>
      
    </div>
  );
}

export default ListaProductos;