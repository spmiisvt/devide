import cls from './AddElement.module.scss';
import {classNames} from "src/shared/lib/classNames/classNames.ts";
import {InputText} from "src/shared/ui/InputText/InputText.tsx";
import {Button} from "src/shared/ui/Button/Button.tsx";

interface AddElementProps {
    className?: string;
}

export const AddElement = ({className = ''}:AddElementProps) => {
    return (
        <div className={classNames(cls.AddElement, {}, [className])}>
            <p>Введите название папки или файла с расширением</p>
            <InputText placeholder={'Введите имя'} />
            <Button className={cls.Button} >Создать</Button>
        </div>
    );
};
