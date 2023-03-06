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