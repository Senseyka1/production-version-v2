import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'

import cls from './Navbar.module.scss'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'

interface INavbarProps {
	className?: string
}

export const Navbar = ({ className }: INavbarProps) => {
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink to={'/'} theme={AppLinkTheme.SECONDAY} className={cls.mainLink}>
                    Главная
                </AppLink>
                <AppLink to={'/about'} theme={AppLinkTheme.SECONDAY}>
                    О сайте
                </AppLink>
            </div>
        </div>
    )
}
