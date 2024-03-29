import React, { memo, useCallback } from 'react';
import { Currency } from '../../model/types/currency';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    readonly?: boolean;
    onChange?: (value: Currency) => void;
}

const currencyOptions = [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.USD, content: Currency.USD },
    { value: Currency.EUR, content: Currency.EUR },
]

export const CurrencySelect: React.FC<CurrencySelectProps> = memo((props: CurrencySelectProps) => {
    const {t} = useTranslation()

    const {
        className,
        value,
        readonly,
        onChange,
    } = props

    const onChangeHandler = useCallback((value: string) => {
        return onChange?.(value as Currency)
    }, [onChange])

    return (
        <Select 
            className={classNames('', {}, [className])}
            label={t('Укажите валюту')} 
            options={currencyOptions}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
});
