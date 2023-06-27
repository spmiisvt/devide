import {classNames} from "src/shared/lib/classNames/classNames";
import cls from './ManageLecturePanel.module.scss';
import {Button, ThemeButton} from "src/shared/ui/Button/Button.tsx";
import {BsArrowLeft, BsArrowRight, BsJournalText, BsPersonBoundingBox} from "react-icons/bs";

interface ManageLecturePanelProps {
    className?: string;
}

export const ManageLecturePanel = ({className = ""}:ManageLecturePanelProps) => {
    return (
        <div className={classNames(cls.ManageLecturePanel, {}, [className])}>
            <div className={cls.buttonsWrapper}>
                <Button theme={ThemeButton.CLEAR}><BsArrowLeft className={cls.arrowLeft} size={18} /></Button>
                <span>|</span>
                <Button theme={ThemeButton.CLEAR}><BsArrowRight className={cls.arrowRight}  size={18} /></Button>
            </div>
            <div className={cls.helpElements}>
                <BsJournalText className={cls.journalIcon} size={18} />
                <BsPersonBoundingBox className={cls.profileIcon} size={18} />
            </div>
        </div>
    );
};
