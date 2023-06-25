import {classNames} from "src/shared/lib/classNames/classNames";
import cls from './ExecutionControlPanel.module.scss';
import {BsFillPlayFill, BsFillStopFill, BsPauseFill} from "react-icons/bs";
import {useState} from "react";
interface ExecutionControlPanelProps {
    className?: string;
}

export const ExecutionControlPanel = ({className=""}:ExecutionControlPanelProps) => {
    const [isPlay, setPlay] = useState(false);

    const toggle = () => {
        setPlay(prev => !prev)
    }
    return (
        <div className={classNames(cls.controlPanel, {}, [className])}>
                {isPlay
                    ? (<BsPauseFill size={20} className={cls.pauseIcon}/>)
                    : (<BsFillPlayFill onClick={toggle} size={20} className={cls.playIcon}/>)
                }
                <BsFillStopFill onClick={toggle} size={20} className={cls.stopIcon}/>
        </div>
    );
};
