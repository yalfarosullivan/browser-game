function zaraCharacter (x, y) {
    const element = newImage('assets/Zara-Character/Zara.gif')
    element.style.zIndex = 1;

}

function handleDirectionChange(direction){
    if (direction === null) {
        element.src = 'assets/Zara-Character/zarastill.png'
    }
    if (direction === 'east', 'north', 'south', 'west') {
        element.src = 'assets/Zara-Character/Zara.gif'
    }
}

move(element).withArrowKeys(x,y, handleDirectionChange)
return{
    element: element
}