function isColliding(a, b){
    const aRect = a.getBoundingClientRect()
    const bRect = b.getBoundingClientRect()
    return !(
        ((aRect.top + aRect.height) < (bRect.top)) ||
        (aRect.top > (bRect.top + bRect.height)) ||
        ((aRect.left + aRect.width) < bRect.left) ||
        (aRect.left > (bRect.left + bRect.width))
    );

}

// function elementsOverlap(zaraCharacter, greyCat, siameseCat, blackCat, orangeCat, kitten) {
//     const domRect1 = zaraCharacter.getBoundingClientRect();
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
//      const zaraCharacter = document.querySelector("zaraCharacter")
//      const greyCat = document.querySelector("greycat")
//      const siameseCat = document.querySelector("siameseCat")
//      const blackCat = document.querySelector("blackCat")
//      const orangeCat = document.querySelector("orangeCat")
//      const kitten = document.querySelector("kitten")

//     console.log(elementsOverlap(zaraCharacter, greyCat)); //true
//      const isOverLaped = elementsOverlap(zaraCharacter, siameseCat)
//      const isOverLaped = elementsOverlap(zaraCharacter, blackCat)
//      const isOverLaped = elementsOverlap(zaraCharacter, greyCat)
//      const isOverLaped = elementsOverlap(zaraCharacter, orangeCat)
//       const isOverLaped = elementsOverlap(zaraCharacter, kitten)

