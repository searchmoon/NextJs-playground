import React, {useState} from 'react';

function Counter() {
    const [number, setNumber] = useState(0);

    const onIncrease = () => {
        setNumber(prev => prev + 1);
    }

    const onDecrease = () => {
        setNumber(prev => prev - 1);
    }

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    );
}

export default Counter;

//벨로퍼트의 모던 리액트 참고