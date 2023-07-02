import cls from './Resizable.module.scss';
import React, {useEffect, useRef, useState} from "react";
import {classNames} from "src/shared/lib/classNames/classNames.ts";


interface ResizableProps {
    children?: React.ReactNode;
    direction: 'horizontal' | 'vertical';
    resizerPosition: 'left' | 'right';
    changedWidth: (w: number) => void;
}

export const Resizable: React.FC<ResizableProps> = (props) => {
    const {
        children,
        direction,
        resizerPosition = 'right',
        changedWidth,
    } = props;

    const resizerRef = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(900);

    useEffect(() => {
        const resizer = resizerRef.current;
        if (!resizer) {
            return;
        }

        let canMove = false;

        const handleMouseDown = () => {
            canMove = true
        }
        const handleMouseUp = () => {
            canMove = false
        }
        const handleMouseMove = (event: MouseEvent) => {
            if (canMove) {
                setWidth(event.x)
                changedWidth(event.x);
            }
        }

        resizer.addEventListener('mousedown', handleMouseDown)
        document.addEventListener('mouseup', handleMouseUp)
        document.addEventListener('mousemove', handleMouseMove)

        return () => {
            resizer.removeEventListener('mousedown', handleMouseDown)
            document.removeEventListener('mouseup', handleMouseUp)
            document.removeEventListener('mousemove', handleMouseMove)
        };
    }, [])

    return (
        <div className={classNames(cls.resizableContainer, {}, [direction])} style={{width: width}}>
            {resizerPosition === 'left' && <div ref={resizerRef} className={cls.resizerV}></div>}
                {children}
            {resizerPosition === 'right' && <div ref={resizerRef} className={cls.resizerV}></div>}
        </div>
    );
};
