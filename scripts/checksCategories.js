function captureData() {
    let texto = document.getElementById('id_search').value
    let checks = Array.from(document.querySelectorAll('.class_checks:checked')).map(each => each.value)
    let filtro = events.filter(each => {
        return (each.category.includes(texto)) && (checks.length === 0 || checks.includes(each.categories))
    })
    console.log(filtro)
    if (filtro.length>0) {
        printTemplates('#card-container',filtro)
    } else {
        notFound('#card-container')
    }
}