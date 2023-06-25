import cls from './Navbar.module.scss';
import {classNames} from "src/shared/lib/classNames/classNames.ts";
import {ThemeSwitcher} from "src/shared/ui/ThemeSwitcher";
import {ExecutionControlPanel} from "src/features/ExecutionControlPanel/ExecutionControlPanel.tsx";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className = ''}: NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.navbarLogo}>
                лого
            </div>
            <ExecutionControlPanel/>
            <div className={cls.navbarMenu}>
                <ThemeSwitcher/>
            </div>
        </div>
    );
};

