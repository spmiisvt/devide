import cls from './CodeBlock.module.scss';
import {classNames} from "src/shared/lib/classNames/classNames.ts";
import Editor from '@monaco-editor/react';

interface CodeBlockProps {
    className?: string;
    width?: number
}

export const CodeBlock = ({className = '', width}:CodeBlockProps) => {

    return (
        <div className={classNames(cls.CodeBlock, {}, [className])} style={{width: width}}>
            <Editor
                defaultLanguage="python"
                defaultValue="# Your code"
                height={'100%'}
                theme={'vs-dark'}
                options={{
                    wordWrap: 'on',
                    minimap: {enabled: false},
                    showUnused: false,
                    folding: false,
                    lineNumbersMinChars: 3,
                    fontSize: 16,
                    scrollBeyondLastLine: false,
                    automaticLayout: true,
                }}
            />


        </div>
    );
};
