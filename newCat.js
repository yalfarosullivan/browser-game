function newCat(url){
    let item = newImage(url)
    item.addEventListener('click', () => {
        item.remove()
        let collectionCat = document.createElement('img')
        collectionCat.src = url;
        collection.append(collectionCat)
    })
    return cat
}