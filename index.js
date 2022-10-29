// Create the zara-character
const pc = newPlayableCharacter(100, 110)

// Create a dog
const npc = newNonPlayableCharacter(20, 100)

// dog to move random

async function moveNPC(){
    await npc.walkNorth(0)
    await npc.walkEast(100)
    await npc.walkWest(200)
    await npc.walkSouth(25)
    await npc.walkEast(1500)
    await npc.walkNorth(400)
    
}
moveNPC()


// Create the catInventory
const inventory = newInventory()
move(inventory).to(0, 0)

// add cats to collect
move(newImage('assets/rock.png')).to(200, 150)
move(newImage('assets/rock.png')).to(450, 75)
move(newImage('assets/rock.png')).to(550, 150)
move(newImage('assets/rock.png')).to(700, 100)
move(newItem('assets/greycat.png')).to(950, 75)
move(newItem('assets/Siamesecat.png')).to(850, 150)
move(newItem('assets/blackcat.png')).to(600, 50)
move(newItem('assets/orangecat.png')).to(300, 125)
move(newItem('assets/kitten.png')).to(500, 125)