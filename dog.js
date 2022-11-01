

function newNonPlayableCharacter(x, y) {
    let element = newImage('assets/dog.png')
    element.style.zIndex = 1;
    
    let direction = null;

    function moveCharacter() {
        if (direction === 'west') {
            x -= 1
        }
        if (direction === 'north') {
            y += 1
        }
        if (direction === 'east') {
            x += 1
        }
        if (direction === 'south') {
            y -= 1
        }
        element.style.left = x + 'px'
        element.style.bottom = y + 'px'
    }

    setInterval(moveCharacter, 1)

    async function walkEast(time) {
        direction = 'east'
        element.src = 'assets/dog.png'
        await sleep()
        stop()
    }

    function walkNorth() {
        direction = 'north'
        element.src = 'assets/dog.png'
        
    }

    function walkWest() {
        direction = 'west'
        element.src = 'assets/dog.png'
    }

    function walkSouth() {
        direction = 'south'
        element.src = 'assets/dog.png'
    }

    function stop() {
        direction = null
        element.src = 'assets/dog.png'
    }

    return {
        element: element,
        walkWest: walkWest,
        walkNorth: walkNorth,
        walkEast: walkEast,
        walkSouth: walkSouth,
        stop: stop
    }
    function sleep(time){
        return new Promise(resolve => {
            setTimeout(resolve, time)
        })  
    }
    
}