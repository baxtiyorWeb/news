let i = document.querySelectorAll('i');
let Xgamer = document.querySelectorAll('.X');
let Ogamer = document.querySelectorAll('.O');
// let tictac= document.querySelectorAll('#tictac')
let X = "X"
let O = "O"

let array = [
    1, 2, 3,
    4, 5, 6,
    7, 8, 9,
    1, 2, 3,
    4, 5, 6,
    7, 8, 9,
    1, 4, 7,
    2, 5, 8,
    3, 6, 9
]

// function XGames(){
//     Xgamer.forEach((item)=>{
//         item.addEventListener('click', function(){
//             if(Xgamer.classList.contains(".X")){
//                 Ogamer.innerHTML = O ;= ""
//             }
//         })
//     })

// }
// XGames()
// function OGames(){
//     Ogamer.forEach((item)=>{
//         item.addEventListener('click', function(){
//             item.innerHTML = O
//         })
//     })

// }
// OGames()
i.forEach(cell => {
    cell.addEventListener('click', handleClick, { once: true })
    cell.addEventListener('click', function () {
    })
    
    
})
let cturn;
function handleClick(e) {
    console.log('clicked')
    const cell = e.target;
    let current = cturn ? O : X;
    placemark(cell, current)
    swapturns()
}

function placemark(cell, current){
    cell.classList.add(current)
    current = O ? X : O ? X : O ? X : O;
    current.innerHTML = cell
    
}
function swapturns(cell){
    //    i.innerHTML =  
    cturn = !cturn
}