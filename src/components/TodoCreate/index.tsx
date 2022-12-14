import React, { FormEvent, ReactElement, useState } from 'react';
import { MdAdd } from 'react-icons/md';

import './TodoCreate.scss';

interface TodoCreateProps {
    onCreate: (text: string) => void;
}

const TodoCreate = ({ onCreate }: TodoCreateProps): ReactElement => {
    const [open, setOpen] = useState(false);
    const [text, setText] = useState('');

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (text.trim()) {
            onCreate(text);
        }
        setText('');
        setOpen(false);
    };

    return (
        <>
            {open && (
                <div className="insert-form-positioner">
                    <form className="insert-form" onSubmit={onSubmit}>
                        <input
                            autoFocus
                            placeholder="할 일을 입력 후, Enter를 누르세요"
                            onChange={(e) => setText(e.target.value)}
                            value={text}
                        />
                    </form>
                </div>
            )}
            <button className={open ? 'circle-button button-open' : 'circle-button'} onClick={() => setOpen(!open)}>
                <MdAdd />
            </button>
        </>
    );
};

export default TodoCreate;
