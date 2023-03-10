let events = data.events

let categories = []

let categoriesElements = ``;

events.forEach(each => {
    if (! categories.includes(each.category)){
        categories.push(each.category)
    }
})
