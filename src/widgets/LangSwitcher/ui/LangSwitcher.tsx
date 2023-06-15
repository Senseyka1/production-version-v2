import React from 'react'

import cls from './LangSwitcher.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import i18n from 'shared/config/i18n/i18n'
import { Button, ThemeButton } from 'shared/ui/Button/Button'

interface ILangSwitcher {
	className?: string;
	collapsed: boolean;
}

export const LangSwitcher = (props: ILangSwitcher) => {
    const { className, collapsed } = props
    const { t } = useTranslation()

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ua' ? 'en' : 'ua')
    }

    return (
        <Button
            className={classNames(cls.LangSwitcher, {}, [className])}
            theme={ThemeButton.CLEAR}
            onClick={toggle}
        >
            {collapsed ? t('languageSmall') : t('languageLarge')}
        </Button>
    )
}
