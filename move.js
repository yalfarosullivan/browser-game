// const catCoordinates = [{name:'greyCat', coordinates:[950, 75]},{name:'siameseCat', coordinates:[750, 250]},{name:'blackCat', coordinates:[625, 50]},{name:'orangeCat', coordinates:[950, 75]},{name:'kitten', coordinates:[950, 75]}]

// move(newItem('assets/greycat.png')).to(950, 75)
        // move(newItem('assets/Siamesecat.png')).to(750, 250)
        // move(newItem('assets/blackcat.png')).to(625, 50)
        // move(newItem('assets/orangecat.png')).to(300, 125)
        // move(newItem('assets/kitten.png')).to(500, 325)
        

function move(element) {
    element.style.position = 'fixed'

    function moveToCoordinates(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }

    function moveWithArrowKeys(left, bottom, callback){
        let direction = null;
        let x = left;
        let y = bottom;
       
        element.style.left = x + 'px'
        element.style.bottom = y + 'px'
        
        function moveCharacter(){ 
            if(direction === 'west'){
                x-=1
            }
            if(direction === 'north'){
                y+=1
        
            }
            if(direction === 'east'){
                x+=1
                
            }
            if(direction === 'south'){
                y-=1
                
            }
            element.style.left = x + 'px'
            element.style.bottom = y + 'px'
            //This is where our x and y coordinates live

        //     for (let i = 0; i < catCoordinates.length; i++){
        //         if(catCoordinates[i].coordinates[0] === x && catCoordinates[i].coordinates[1] === y){
        //             console.log('test')
        //             const cat = document.querySelector(`[data-id="${catCoordinates[i].name}"]`)
        //             cat.remove()
                    
        //         }
            }

        // }
        // function elementsOverlap(newPlayableCharacter, greyCat, siameseCat, blackCat, orangeCat, kitten) {
        //     const domRect1 = newPlayableCharacter.getBoundingClientRect();
        //     const domRect2 = greyCat.getBoundingClientRect();
        //     const domRect3 = siameseCat.getBoundingClientRect();
        //     const domRect4 = blackCat.getBoundingClientRect();
        //     const domRect5 = orangeCat.getBoundingClientRect();
        //     const domRect6 = kitten.getBoundingClientRect();
          
        //     return (
        //       !(
        //         domRect1.top > domRect2.bottom ||
        //         domRect1.right < domRect2.left ||
        //         domRect1.bottom < domRect2.top ||
        //         domRect1.left > domRect2.right
        //       ) ||
        //       !(
        //         domRect1.top > domRect3.bottom ||
        //         domRect1.right < domRect3.left ||
        //         domRect1.bottom < domRect3.top ||
        //         domRect1.left > domRect3.right
        //       ) ||
        //       !(
        //         domRect1.top > domRect4.bottom ||
        //         domRect1.right < domRect4.left ||
        //         domRect1.bottom < domRect4.top ||
        //         domRect1.left > domRect4.right
        //       ) ||
        //       !(
        //         domRect1.top > domRect5.bottom ||
        //         domRect1.right < domRect5.left ||
        //         domRect1.bottom < domRect5.top ||
        //         domRect1.left > domRect5.right
        //       ) ||
        //       !(
        //         domRect1.top > domRect6.bottom ||
        //         domRect1.right < domRect6.left ||
        //         domRect1.bottom < domRect6.top ||
        //         domRect1.left > domRect6.right
        //       )
        //     );
        //   }
        //   const zaraCharacter = document.querySelector("id")
        //   const greyCat = document.querySelector("greycat")
        //      const siameseCat = document.querySelector("siameseCat")
        //      const blackCat = document.querySelector("blackCat")
        //      const orangeCat = document.querySelector("orangeCat")
        //      const kitten = document.querySelector("kitten")

        // const isOverLaped = elementsOverlap(newPlayableCharacter, greyCat)
        // const isOverLaped = elementsOverlap(newPlayableCharacter, siameseCat)
        // const isOverLaped = elementsOverlap(newPlayableCharacter, blackCat)
        // const isOverLaped = elementsOverlap(newPlayableCharacter, greyCat)
        // const isOverLaped = elementsOverlap(newPlayableCharacter, orangeCat)
        // const isOverLaped = elementsOverlap(newPlayableCharacter, kitten)

        // console.log("add to collection")
          


        //   move(newItem('assets/greycat.png', 'greyCat')).to(950, 75)
        //   move(newItem('assets/Siamesecat.png', 'siameseCat')).to(750, 250)
        //   move(newItem('assets/blackcat.png', 'blackCat')).to(625, 50)
        //   move(newItem('assets/orangecat.png', 'orangeCat')).to(300, 125)
        //   move(newItem('assets/kitten.png', 'kitten')).to(500, 325)
        
        setInterval(moveCharacter, 1)
        
        document.addEventListener('keydown', function(e){
            if(e.repeat) return;
        
            if(e.key === 'ArrowLeft'){
                direction = 'west'
            }
            if(e.key === 'ArrowUp'){
                direction = 'north'
            }
            if(e.key === 'ArrowRight'){
                direction = 'east'
            }
            if(e.key === 'ArrowDown'){
                direction = 'south'
            }
            callback(direction)
        })
        
        document.addEventListener('keyup', function(e){
            direction = null
            callback(direction)
        })
    }

    return {
        to: moveToCoordinates,
        withArrowKeys: moveWithArrowKeys
    }
}