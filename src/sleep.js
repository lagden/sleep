'use strict'

function sleep(duration = 1, fulfilled = true, response = 'Awake') {
	return new Promise((resolve, reject) => {
		const timeoutID = setTimeout(() => {
			clearTimeout(timeoutID)
			if (fulfilled) {
				resolve(response)
			} else {
				reject(new Error('Nightmare while sleeping'))
			}
		}, duration * 1000)
	})
}

module.exports = sleep
// export default sleep
