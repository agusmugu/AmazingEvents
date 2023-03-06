let events = data.events

let categories = []
events.forEach(each => {
    if (! categories.includes(each.category)){
        categories.push(each.category)
    }
})

console.log(categories)