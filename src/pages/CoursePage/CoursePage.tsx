import cls from './CoursePage.module.scss';
import {Navbar} from "src/widget/Navbar";
import {Sidebar} from "src/widget/Sidebar";
import {CodeBlock} from "src/widget/CodeBlock/ui/CodeBlock.tsx";
import {Console} from "src/widget/Console";
import {Outlet} from "react-router-dom";
import {ManageLecturePanel} from "src/widget/ManageLecturePanel/ui/ManageLecturePanel.tsx";
import {Resizable} from "src/shared/ui/Resizable/Resizable.tsx";
import {useState} from "react";


export const CoursePage = () => {
    const [width, setWidth] = useState(800)

    return (
        <>
            <Resizable direction={'horizontal'} resizerPosition={'right'} changedWidth={(v) => setWidth(v - 100)}>
                <div className={cls.userPanel}>
                    <Navbar/>
                    <Sidebar/>
                    <CodeBlock width={width}/>
                    <Console/>
                </div>
            </Resizable>

            <div className={cls.contentPanel}>
                <ManageLecturePanel/>
                <Outlet/>
            </div>
        </>
    );
};
