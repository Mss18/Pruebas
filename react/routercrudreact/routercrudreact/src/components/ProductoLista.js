import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

function ProductoLista({ producto, guardarRecargarProductos }) {
  const eliminarProducto = id => {
    console.log("eliminando", id);
    Swal.fire({
      title: "Estás seguro?",
      text: "Un plato eliminado no se puede recuperar!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar!",
      cancelButtonText: "Cancelar"
    }).then(async result => {
      if (result.value) {
        const url = `http://localhost:4000/restaurante/${id}`;

        const resultado = await axios.delete(url);

        try {
          if (resultado.status === 200) {
            Swal.fire("Eliminado!", "El producto ha sido eliminado", "success");

            //Consultar de nuevo la API
            guardarRecargarProductos(true);
          }
        } catch (error) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Se ha producido un error, vuelve a intentarlo"
          });
        }
      }
    });
  };

  return (
    <li
      data-categoria={producto.categoria}
      className="list-group-item d-flex justify-content-between align-items-center"
    >
      <p>
        {producto.nombrePlato}{" "}
        <span className="font-weight-bold">${producto.precioPlato}</span>
      </p>

      <div>
        <Link
          to={`/productos/editar/${producto.id}`}
          className="btn btn-success mr-2"
        >
          Editar
        </Link>

        <button
          type="button"
          className="btn btn-danger"
          onClick={() => eliminarProducto(producto.id)}
        >
          Eiminar
        </button>
      </div>
    </li>
  );
}

export default ProductoLista;
