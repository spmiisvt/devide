import cls from './ThemeSwitcher.module.scss';
import {useTheme} from "src/app/providers/ThemeProvider";
import {classNames} from "src/shared/lib/classNames/classNames.ts";

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({className = ''}:ThemeSwitcherProps) => {
    const {toggleTheme} = useTheme();
    return (
        <div className={classNames(cls.ThemeSwitcher, {}, [className])}>
            <input
                id="switch"
                type="checkbox"
                onClick={toggleTheme}
            />
            <label htmlFor="switch"></label>
        </div>
    );
};
