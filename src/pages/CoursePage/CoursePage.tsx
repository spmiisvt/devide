import cls from './CoursePage.module.scss';
import {Navbar} from "src/widget/Navbar";
import {Sidebar} from "src/widget/Sidebar";
import {CodeBlock} from "src/widget/CodeBlock/ui/CodeBlock.tsx";
import {Console} from "src/widget/Console";
import {Outlet} from "react-router-dom";
import {ManageLecturePanel} from "src/widget/ManageLecturePanel/ui/ManageLecturePanel.tsx";


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
                <div className={cls.SizeChangeBlock}></div>
                <ManageLecturePanel/>
                <Outlet/>
            </div>
        </>
    );
};
