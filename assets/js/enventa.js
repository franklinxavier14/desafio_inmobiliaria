import propiedadesVenta from "./data/dptonuevo.js"


// Propiedades en Ventas

// cuerpo del HTML
const venta = document.querySelector("#propiedadVenta")
let templateVenta = `<div class="row ms-4 me-4 pt-5">`

// se recorre arreglo de propiedades en venta
for (const propiedad of propiedadesVenta) {
// ícono y clase de color según la condición
const iconoFumar = propiedad.smoke ? 'fas fa-smoking' : 'fas fa-smoking-ban';
const claseColorFumar = propiedad.smoke ? 'text-success' : 'text-danger';

const iconoMascotas = propiedad.pets ? 'fas fa-paw' : 'fa-solid fa-ban';
const claseColorMascotas = propiedad.pets ? 'text-success' : 'text-danger';

    templateVenta += `
           

          <div class="col-md-4 mb-4">
          <div class="card">
            <img
              src="${propiedad.src}"
              class="card-img-top"
              alt="Imagen del departamento"
            />
            <div class="card-body">
              <h5 class="card-title">${propiedad.nombre}</h5>
              <p class="card-text">${propiedad.descripcion}</p>
              <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
              <p><i class="fas fa-bed"></i> ${propiedad.habitaciones}</p>
              <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
              <p class="${claseColorFumar}">
                        <i class="${iconoFumar}"></i> ${propiedad.smoke ? 'Permitido fumar' : 'No se permite fumar'}
                    </p>
                    <p class="${claseColorMascotas}">
                        <i class="${iconoMascotas}"></i> ${propiedad.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'}
                    </p>
            </div>
          </div>
        </div>



    `;
}
   // template al cuerpo del HTML fuera del bucle
venta.innerHTML = templateVenta;


