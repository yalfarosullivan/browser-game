

// Create Points

//Music

// Create zara-character
const zc = zaraCharacter(0, 375)

// Create a dog
const npd = nonPlayableDog(920, 375)


// dog to move toward character

async function moveNPD(){
    await npd.walkWest(50)
    }
moveNPD()


// Create the catInventory
const inventory = newInventory()
move(inventory).to(0, 0)

// add cats to collect and rocks
move(createImage('assets/rock.png')).to(150, 350)
move(createImage('assets/rock.png')).to(250, 255)
move(createImage('assets/rock.png')).to(550, 150)
move(createImage('assets/rock.png')).to(700, 300)
move(newCat('assets/greycat.png', 'greyCat')).to(950, 75)
move(newCat('assets/Siamesecat.png', 'siameseCat')).to(750, 250)
move(newCat('assets/blackcat.png', 'blackCat')).to(625, 50)
move(newCat('assets/orangecat.png', 'orangeCat')).to(300, 125)
move(newCat('assets/kitten.png', 'kitten')).to(500, 325)