

// Create Points

//Music

// Create zara-character
const pc = newPlayableCharacter(0, 375)

// Create a dog
const npc = newNonPlayableCharacter(920, 375)


// dog to move random

async function moveNPC(){
    await npc.walkWest(150)
    }
moveNPC()


// Create the catInventory
const inventory = newInventory()
move(inventory).to(0, 0)

// add cats to collect
move(newImage('assets/rock.png')).to(150, 350)
move(newImage('assets/rock.png')).to(250, 255)
move(newImage('assets/rock.png')).to(550, 150)
move(newImage('assets/rock.png')).to(700, 300)
move(newItem('assets/greycat.png')).to(950, 75)
move(newItem('assets/Siamesecat.png')).to(750, 250)
move(newItem('assets/blackcat.png')).to(625, 50)
move(newItem('assets/orangecat.png')).to(300, 125)
move(newItem('assets/kitten.png')).to(500, 325)