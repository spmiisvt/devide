
import cls from './Sidebar.module.scss';

import {useCallback, useState} from "react";
import {BsPlusCircle, BsTextIndentLeft, BsTextIndentRight} from "react-icons/bs";
import {classNames} from "src/shared/lib/classNames/classNames.ts";
import {Button, ThemeButton} from "src/shared/ui/Button/Button.tsx";
import {Modal} from "src/shared/ui/Modal/Modal.tsx";
import {AddElement, TreeElement} from "src/widget/TreeElement";


interface SidebarProps {
    className?: string;
}

export const Sidebar = (props:SidebarProps) => {
    const {
        className = '',
    } = props;
    const [isCollapse, setCollapsed] = useState(false);
    const [isAddItemModal, setAddItemModal] = useState(false);

    const onToggle = () => {
        setCollapsed(prev => !prev);
    }
    const onToggleModal = useCallback(() => {
        setAddItemModal((prev) => !prev);
    }, []);

    return (
        <div className={classNames(cls.Sidebar,
            {[cls.isCollapse]: isCollapse},
            [className])}>
            <div className={classNames(cls.foldersPanel,{}, [])}>
                <TreeElement />
            </div>
            <div className={classNames(cls.controlPanel,{}, [])}>
                <Button onClick={onToggle} theme={ThemeButton.CLEAR}>
                    { isCollapse ? <BsTextIndentRight size={25}/> : <BsTextIndentLeft size={25}/>}
                </Button>
                <Button onClick={onToggleModal} theme={ThemeButton.CLEAR}>
                    <BsPlusCircle size={20} />
                </Button>
            </div>
            <Modal isOpen={isAddItemModal} onClose={onToggleModal}>
                <AddElement />
            </Modal>
        </div>
    );
};
