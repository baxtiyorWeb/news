let text = document.querySelector('#text')
let add = document.querySelector('.add')
let ul = document.querySelector('ul')

document.addEventListener('DOMContentLoaded', getLocal)
add.addEventListener('click', function (e) {
	let li = document.createElement("li")
	let span = document.createElement("span")
	span.innerHTML = "❌"
	li.append(span)
	if (text.value !== "") {
		ul.append(li)
		li.innerHTML = text.value;
		local(text.value)
			let span = document.createElement("span")
			span.innerHTML = "❌"
			li.append(span)
			span.addEventListener('click', function (todo) {
				li.style.display = 'none'
				removeElement(todo)
				
			})
		}

	})
function local(todo) {
	let todos;
	if (localStorage.getItem("todos") === null) {
		todos = [];
	} else {
		todos = JSON.parse(localStorage.getItem("todos"))
	}
	todos.push(todo)
	localStorage.setItem('todos', JSON.stringify(todos))
	

}




function getLocal() {
	let todos;
	if (localStorage.getItem("todos") === null) {
		todos = [];
	} else {
		todos = JSON.parse(localStorage.getItem("todos"))
	}

	todos.forEach(function (todo) {

		let li = document.createElement("li")
		// let span = document.createElement("span")
		ul.append(li)
		li.innerHTML = todo;
		// span.innerHTML = "❌"
		// li.append(span)
	})
}

function removeElement(todo) {
	let todos;
	if (localStorage.getItem("todos") === null) {
		todos = [];
	} else {
		todos = JSON.parse(localStorage.getItem("todos"))
	}
	console.log(todos)
	let todoIndex = ul.innerHTML
	todos.splice(todoIndex, 1)
	console.log(todoIndex)

}