import cls from './Navbar.module.scss';
import {BsFillPlayFill, BsFillStopFill, BsPauseFill} from "react-icons/bs";

import {useState} from "react";
import {classNames} from "src/shared/lib/classNames/classNames.ts";
import {ThemeSwitcher} from "src/shared/ui/ThemeSwitcher";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className = ''}: NavbarProps) => {

    const [isPlay, setPlay] = useState(false);

    const toggle = () => {
        setPlay(prev => !prev)
    }

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.navbarLogo}>
                лого
            </div>
            <div className={cls.navControl}>
                {isPlay
                    ? (<BsPauseFill size={20} className={cls.pauseIcon}/>)
                    : (<BsFillPlayFill onClick={toggle} size={20} className={cls.playIcon}/>)
                }
                <BsFillStopFill onClick={toggle} size={20} className={cls.stopIcon}/>

            </div>
            <div className={cls.navbarMenu}>
                <ThemeSwitcher/>
            </div>
        </div>
    );
};

