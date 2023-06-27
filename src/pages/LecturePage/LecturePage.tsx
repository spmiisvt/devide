import {classNames} from "src/shared/lib/classNames/classNames";
import cls from './LecturePage.module.scss';
// import {useParams} from "react-router-dom";
import {Button, ThemeButton} from "src/shared/ui/Button/Button.tsx";
import lecture from "src/shared/assets/mocks/lecture.json"

interface LecturePageProps {
    className?: string;
}

export const LecturePage = ({className = ""}: LecturePageProps) => {
    // const params = useParams()
    const rawHTML = lecture.lecture;

    return (
        <div className={classNames(cls.LecturePage, {}, [className])}>
            <div className={cls.lectureContent} dangerouslySetInnerHTML={{__html: rawHTML}}></div>
            <div className={cls.lectureFooter}>
                <Button theme={ThemeButton.PRIMARY}>Проверить</Button>
            </div>
        </div>
    );
};
