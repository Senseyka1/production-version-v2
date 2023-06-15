import React, { FC } from 'react'
import { Link, LinkProps } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'

import cls from './AppLink.module.scss'

export enum AppLinkTheme {
	PRIMARY = 'primary',
	SECONDAY = 'secondary',
}

interface IAppLink extends LinkProps {
	className?: string
	theme: AppLinkTheme
}

export const AppLink: FC<IAppLink> = (props) => {
    const { to, children, className, theme = AppLinkTheme.PRIMARY, ...otherProps } = props

    return (
        <Link to={to} className={classNames(cls.appLink, {}, [className, cls[theme]])} {...otherProps}>
            {children}
        </Link>
    )
}
