  function createTemplate(){
    let events= data.events

    let templates=[]

    for(let one of events){
        templates.push(template(one.image,one.name,one.description,one.price))
    }
    let selector=document.getElementById("card-conteiner")

    selector.innerHTML=templates.join("")
  }

  createTemplate()