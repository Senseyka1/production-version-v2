import React, { ButtonHTMLAttributes, FC } from 'react'

import cls from './Button.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'

export enum ThemeButton {
	CLEAR = 'clear',
}

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string
	theme?: ThemeButton
}

export const Button: FC<IButton> = (props) => {
    const { className, children, theme, ...otherProps } = props
    return (
        <button className={classNames(cls.Button, {}, [className, cls[theme]])} {...otherProps}>
            {children}
        </button>
    )
}
