import React, { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
    children?: ReactNode;
}

export const LoginForm: React.FC<LoginFormProps> = (props: LoginFormProps) => {
    const { t } = useTranslation();

    const {
        className,
        children,
        ...otherProps
    } = props;

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input autoFocus placeholder={t('Введите username')} type="text" className={cls.input} />
            <Input placeholder={t('Введите пароль')} type="text" className={cls.input} />
            <Button className={cls.loginBtn}>
                {t('Войти')}
            </Button>
        </div>
    );
};