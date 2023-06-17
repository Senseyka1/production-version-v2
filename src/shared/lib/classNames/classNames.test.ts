import { classNames } from './classNames'

describe('classNames', () => {
	test('test', () => {
		expect(classNames('hello')).toBe('hello')
	})
	test('with additional class', () => {
		const expected = 'someClass class1 class2'

		expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected)
	})
	test('with mods', () => {
		const expected = 'someClass class1 class2 hovered'

		expect(classNames('someClass', { hovered: true }, ['class1', 'class2'])).toBe(expected)
	})
	test('with mods false', () => {
		const expected = 'someClass class1 class2 hovered'

		expect(classNames('someClass', { hovered: true, hello: false }, ['class1', 'class2'])).toBe(
			expected
		)
	})
	test('with mods undefined', () => {
		const expected = 'someClass class1 class2 hovered'

		expect(classNames('someClass', { hovered: true, hello: null }, ['class1', 'class2'])).toBe(
			expected
		)
	})
})
