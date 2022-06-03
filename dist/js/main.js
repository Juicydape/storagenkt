const searchBox = document.querySelector('.searchbox')

const btnWithdraw = document.querySelectorAll('.withdraw')

const tr = document.querySelectorAll(`tr`)

const searchEngine = e => {     
	const text = e.target.value.toLowerCase()

	tr.forEach(element => {
		const task = element.textContent

		if (task.toLowerCase().indexOf(text) !== -1) {
			element.style.display = 'inline'
		} else {
			element.style.display = 'none'
		}
	})
}

searchBox.addEventListener('keyup', searchEngine)
