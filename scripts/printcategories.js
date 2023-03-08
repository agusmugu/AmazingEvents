function printChecks (id_etiqueta, array_categories) {
    let container = document.querySelector(id_etiqueta)
    array_categories = array_categories.map(each => {
        return `
        <fieldset>
            <label class="checks.searcher" for="${each}" >${each}</label>
            <input onClick="captureData()" class="class_checks contact-input" type="checkbox" value="${each}" name="tipo" id="${each}">
        </fieldset>
        `
    })
    array_categories.push(`<input onkeyup="captureData()" id="id_search" class="buscador" type="text" name="texto" placeholder="search">`)
    container.innerHTML = array_categories.join('')
}
printChecks('#table_checks',categories)