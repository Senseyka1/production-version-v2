type Mods = Record<string, boolean | string>

export function classNames(cls: string, mods: Mods = {}, additional: string[] = []): string {
	return [
		cls,
		...additional.filter((item) => Boolean(item)),
		...Object.entries(mods)
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			.filter(([className, value]) => Boolean(value))
			.map(([className]) => className),
	].join(' ')
}
