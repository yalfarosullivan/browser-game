function newPlayableCharacter(x, y) {
    const element = createImage('assets/zara-character/zara.gif')
    element.style.zIndex = 1;

    function handleDirectionChange(direction) {
        if (direction === null) {
            element.src = `assets/zara-character/zara.gif`
        }
        if (direction === 'west') {
            element.src = `assets/zara-character/zara.gif`
        }
        if (direction === 'north') {
            element.src = `assets/zara-character/zara.gif`
        }
        if (direction === 'east') {
            element.src = `assets/zara-character/zara.gif`
        }
        if (direction === 'south') {
            element.src = `assets/zara-character/zara.gif`
        }
    }

    move(element).withArrowKeys(x, y, handleDirectionChange)

    return {
        element: element
    }
}