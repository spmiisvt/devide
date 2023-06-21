
import cls from './TreeElement.module.scss';
import {IDataTree} from '../../lib/data'
import {Branch} from "../Branch/Branch";
import {classNames} from "src/shared/lib/classNames/classNames.ts";
interface TreeFolderProps {
    className?: string;
    data?: IDataTree[];
}

export const TreeElement = ({className='', data}:TreeFolderProps) => {

    return (
        <div className={classNames(cls.TreeFolder, {}, [className])}>
            {data?.map((item) => <Branch key={item.id} item={item} level={0} />)}
        </div>
    );
};
