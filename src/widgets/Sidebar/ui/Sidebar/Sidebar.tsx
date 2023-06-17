import React, { useState } from 'react'

import cls from './Sidebar.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'

interface ISidebar {
	className?: string
}

export const Sidebar = (props: ISidebar) => {
	const { className } = props
	const [collapsed, setCollapsed] = useState(false)

	const onToggle = () => {
		setCollapsed((prev) => !prev)
	}

	return (
		<div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
			<button onClick={onToggle}>toggle</button>
			<div className={classNames(cls.swithcers, { [cls.collapsed]: collapsed }, [])}>
				<ThemeSwitcher />
				<LangSwitcher className={classNames(cls.lang, {}, [])} collapsed={collapsed} />
			</div>
		</div>
	)
}
