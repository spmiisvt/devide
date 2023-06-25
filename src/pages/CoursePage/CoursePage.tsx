import cls from './CoursePage.module.scss';
import {Navbar} from "src/widget/Navbar";
import {Sidebar} from "src/widget/Sidebar";
import {CodeBlock} from "src/widget/CodeBlock/ui/CodeBlock.tsx";
import {Console} from "src/widget/Console";


export const CoursePage = () => {
    return (
        <>
            <div className={cls.userPanel}>
                <Navbar/>
                <Sidebar/>
                <CodeBlock/>
                <Console/>
            </div>
            <div className={cls.contentPanel}>

            </div>
        </>
    );
};
