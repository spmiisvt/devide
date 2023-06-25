import {classNames} from "src/shared/lib/classNames/classNames";
import cls from './LecturePage.module.scss';
interface LecturePageProps {
    className?: string;
}

export const LecturePage = ({className = ""}:LecturePageProps) => {
    return (
        <div className={classNames(cls.LecturePage, {}, [className])}>
            Some text
        </div>
    );
};
