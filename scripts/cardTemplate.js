let template=(foto,titulo,descripcion,precio)=>{
    return`
    <div class="card">
    <img src="${foto}" alt="" class="card-img">
      <h4>${titulo}</h4>
      <p>${descripcion}</p>
      <div class="card-foot">
        <p>price: $${precio}</p>
        <a href="#">See More...</a>
      </div>
</div>`
}