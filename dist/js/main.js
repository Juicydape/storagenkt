const searchBox = document.querySelector('.searchbox')

const btnWithdraw = document.querySelectorAll('.withdraw')

const trItem = document.querySelectorAll(`.item`)

const searchEngine = e => {
	const text = e.target.value.toLowerCase()

	trItem.forEach(element => {
		const task = element.textContent

		if (task.toLowerCase().indexOf(text) !== -1) {
			element.style.display = 'table-row'
		} else {
			element.style.display = 'none'
		}
	})
}

searchBox.addEventListener('keyup', searchEngine)
