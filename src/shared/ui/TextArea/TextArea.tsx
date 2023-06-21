import cls from './TextArea.module.scss';
import {SyntheticEvent, TextareaHTMLAttributes} from "react";
import {classNames} from "src/shared/lib/classNames/classNames.ts";
interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{
    className?: string;
    filled?: boolean;
    autoResize?: boolean;
}

export const TextArea = (props:TextAreaProps) => {
    const {
        className = '',
        filled = false,
        autoResize = true,
        ...other
    } = props;
    const handleKeyDown = (event: SyntheticEvent) => {
        const target = event.target as HTMLTextAreaElement;
        target.style.height = '1rem';
        target.style.height = `${target.scrollHeight}px`;
    }


    return (
        <textarea
            className={classNames(cls.TextArea,
                {[cls.filled]: filled, [cls.resizeable]: autoResize},
                [className])}
            onKeyUp={autoResize ? handleKeyDown : undefined}
            {...other}
        >
        </textarea>
    );
};
