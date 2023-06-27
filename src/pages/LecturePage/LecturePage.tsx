import {classNames} from "src/shared/lib/classNames/classNames";
import cls from './LecturePage.module.scss';
import {useParams} from "react-router-dom";
interface LecturePageProps {
    className?: string;
}

export const LecturePage = ({className = ""}:LecturePageProps) => {
    const params = useParams()
    return (
        <div className={classNames(cls.LecturePage, {}, [className])}>
                <h1>Python это?</h1>
            <p>{params.slug}</p>
        </div>
    );
};
