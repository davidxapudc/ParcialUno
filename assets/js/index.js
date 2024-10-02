    fetch('data/datos.json')
        .then(response => response.json())
        .then(data => {
            const tituloPagina = document.getElementById('titulo');
            tituloPagina.innerHTML = data.titulo_pagina;

            const datosTienda = document.getElementById('datos_tienda');
            datosTienda.innerHTML = `
                <p>${data.datos_tienda.nombre}</p> 
                <p>${data.datos_tienda.direccion}</p>     
                <p>${data.datos_tienda.telefono}</p> 
                <p>${data.datos_tienda.correo}</p> 
            `;

            const horariosDeAtencion = document.getElementById('horarios_de_atencion');
            horariosDeAtencion.innerHTML = `
                <h2> Horarios de atencion:</h2>
                <p>Lunes a viernes: ${data.datos_tienda.horario_atencion.lunes_a_viernes}</p>         
                <p>Sábados: ${data.datos_tienda.horario_atencion.sabados}</p>
                <p>Domingos: ${data.datos_tienda.horario_atencion.domingos}</p>         
            `;

            const productos = data.productos;
            let productosHTML = "";
            for (let i = 0; i < productos.length; i++) {
                let imagenesHTML = "";
                for (let j = 0; j < productos[i].imagenes.length; j++) {
                    imagenesHTML += `<img src="${productos[i].imagenes[j]} width="150" > `;
                }

                let reseñasHTML = "";
                for (let k = 0; k < productos[i].reseñas.length; k++) {
                    reseñasHTML += `
                        <p>${productos[i].reseñas[k].usuario}</>: ${productos[i].reseñas[k].comentario} (${productos[i].reseñas[k].calificacion} estrellas, ${productos[i].reseñas[k].fecha})</p>
                    `;
                }

                productosHTML += `
                    <tr>
                        <td>${productos[i].id}</td>
                        <td>${productos[i].nombre}</td>
                        <td>${productos[i].categoria}</td>
                        <td>${productos[i].descripcion}</td>
                        <td>${productos[i].precio}</td>
                        <td>${reseñasHTML}</td>
                        <td>${imagenesHTML}</td>
                    </tr>
                `;
            }

            const tablaProductos = document.getElementById('tabla_productos');
            tablaProductos.innerHTML = productosHTML;
        });
