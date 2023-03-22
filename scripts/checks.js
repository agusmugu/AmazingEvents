function printTabla(id_etiqueta, datos){
    let container = document.querySelector(id_etiqueta)
    datos = datos.map(each => {
        return `
        <td class="tabla">${each}</td>
        `
    })
    container.innerHTML = datos.join('')
}

function printTabla2(id_etiqueta, datos){
    let container = document.querySelector(id_etiqueta)
    datos = datos.map(each => {
        return `<tr>
                    <td class="tabla">${each.categoria}</td>
                    <td class="tabla">${each.ingresos}</td>
                    <td class="tabla">${each.asistencia}</td>
                </tr>`;
    })
    container.innerHTML = datos.join('')
}