
import cls from './CodeBlock.module.scss';
import {classNames} from "src/shared/lib/classNames/classNames.ts";


interface CodeBlockProps {
    className?: string;
}

export const CodeBlock = ({className = ''}:CodeBlockProps) => {

    return (
        <div className={classNames(cls.CodeBlock, {}, [className])}>

        </div>
    );
};
