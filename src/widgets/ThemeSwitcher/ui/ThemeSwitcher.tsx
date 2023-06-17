import React from 'react'

import cls from './ThemeSwitcher.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from 'app/providers/ThemeProvider'

import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext'
import { Button, ThemeButton } from 'shared/ui/Button/Button'

interface IThemeSwitcher {
	className?: string
}

export const ThemeSwitcher = (props: IThemeSwitcher) => {
    const { className } = props
    const { theme, toggleTheme } = useTheme()
    console.log(theme)

    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames('', {}, [className])}
            onClick={toggleTheme}>
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    )
}
