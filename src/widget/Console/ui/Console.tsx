import cls from './Console.module.scss';
import {classNames} from "src/shared/lib/classNames/classNames.ts";
interface ConsoleProps {
    className?: string;
}

export const Console = ({className = ''}:ConsoleProps) => {
    return (
        <div className={classNames(cls.Console, {}, [className])}>
            Hello world!
        </div>
    );
};
