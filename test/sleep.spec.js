import test from 'ava'
import sleep from '../src/sleep.js'

test('awake', async t => {
	const response = await sleep()
	t.snapshot(response)
})

test('awake with custom response', async t => {
	const response = await sleep(0.1, true, {custom: 'response'})
	t.snapshot(response)
})

test('nightmare', async t => {
	const error = await t.throwsAsync(sleep(0.1, false))
	t.snapshot(error.message)
})
