
import cls from './Button.module.scss';
import {ButtonHTMLAttributes, FC} from "react";
import {classNames} from "src/shared/lib/classNames/classNames.ts";


export enum ThemeButton {
    CLEAR = 'clear',
    PRIMARY = 'primary',
    SUCCESS = 'success',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ThemeButton
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className = '',
        children,
        disabled = false,
        theme = ThemeButton.PRIMARY,
        ...other
    } = props;
    return (
        <button
            type='button'
            className={classNames(cls.Button, {[cls.disable]:disabled}, [className, cls[theme]])}
            disabled={disabled}
            {...other}
        >
            {children}
        </button>
    );
};
