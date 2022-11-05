function collectCat(url, dataAttribute){
    let item = createImage(url)
    item.setAttribute('data-id', dataAttribute)
    item.addEventListener('click', () => {
        item.remove()
        let inventoryItem = document.createElement('img')
        inventoryItem.src = url;
        inventory.append(inventoryItem)
    })
    return item
}