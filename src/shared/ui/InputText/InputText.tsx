
import cls from './InputText.module.scss';
import {InputHTMLAttributes} from "react";
import {classNames} from "src/shared/lib/classNames/classNames.ts";
interface InputTextProps extends InputHTMLAttributes<HTMLInputElement>{
    className?: string;
    filled?: boolean;
}

export const InputText = (props:InputTextProps) => {
    const {
        className = '',
        filled = true,
        type = 'text',
        ...other
    } = props;

    return (
        <input
            type={type}
            className={classNames(cls.InputText, {[cls.filled]: filled}, [className])}
            {...other}
        />

    );
};
