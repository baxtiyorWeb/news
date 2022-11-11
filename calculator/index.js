let numbers = document.querySelectorAll('button')

let input = document.querySelector("input")
numbers.forEach(item => {
    item.addEventListener('click', function(){
        let s = item.innerHTML
        input.value = s
        if(item.innerText == "="){
            input.value = eval(input.value)
        }
    })
});