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

function createTemplate(){
    let events=data.events

    let templates=[]

    for(let one of events){
        if(one.date < data.currentDate){
        templates.push(template(one.image,one.name,one.description,one.price))
        }
    }
    console.log(templates)
    let selector=document.getElementById("card-conteiner")

    selector.innerHTML=templates.join("")
    }

createTemplate()