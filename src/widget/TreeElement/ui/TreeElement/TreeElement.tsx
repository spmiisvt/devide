
import cls from './TreeElement.module.scss';
import {Branch} from "../Branch/Branch";
import {classNames} from "src/shared/lib/classNames/classNames.ts";
import {useAppSelector} from "src/app/hooks/redux.ts";

interface TreeFolderProps {
    className?: string;
}

export const TreeElement = ({className=''}:TreeFolderProps) => {
    const {TreeNodes} = useAppSelector(state => state.treeReducer)
    return (
        <div className={classNames(cls.TreeFolder, {}, [className])}>
            {TreeNodes.map((item) => <Branch key={item.id} item={item} level={0} />)}
        </div>
    );
};
