import {classNames} from "src/shared/lib/classNames/classNames.ts";
import cls from './HomePage.module.scss';
import {Button} from "src/shared/ui/Button/Button.tsx";
import {useNavigate} from "react-router-dom";
interface HomePageProps {
    className?: string;
}

export const HomePage = ({className = ""}:HomePageProps) => {
    const navigate = useNavigate()
    return (
        <div className={classNames(cls.HomePage, {}, [className])}>
            <h1>
                Главная страница
            </h1>
            <Button onClick={() => navigate("/course")}>Перейти к курсу</Button>
        </div>
    );
};
