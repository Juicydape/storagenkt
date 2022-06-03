const searchBox = document.querySelector('.searchbox')
const btnWithdraw = document.querySelectorAll('.withdraw')
const btnDeposit = document.querySelectorAll(`.deposit`)

// const btnWithdrawSingle = btnWithdraw.map()
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

btnWithdraw.forEach(element => {
	element.addEventListener(`click`, () => {
		let row = element.closest(`tr`).querySelector(`.amount`)
		// let rowAmount = row.querySelector(`.amount`)
		let amount = element.closest(`tr`).querySelector(`.input-amount`)
		let firstNumber = Number(row.innerHTML)
		// let secondNumber = Number(amount.value)
		row.innerHTML = Number(row.innerHTML) - Number(amount.value)
	})
})

btnDeposit.forEach(element => {
	element.addEventListener(`click`, () => {
		let row = element.closest(`tr`).querySelector(`.amount`)
		let amount = element.closest(`tr`).querySelector(`.input-amount`)
		let firstNumber = Number(row.innerHTML)
		// let secondNumber = Number(amount.value)
		row.innerHTML = Number(row.innerHTML) + Number(amount.value)
	})
})

searchBox.addEventListener('keyup', searchEngine)
