import React from 'react';

//defaultProps로 기본값 설정하기

function Hello({ color, name }) {
    return <div style={{ color }}>안녕하세요 {name}</div>
}

Hello.defaultProps = {
    name: '정은'
}

function App() {
    return (
        <>
            <Hello name="react" color="red"/>
            <Hello color="gray"/>
        </>
    );
}

export default App;

//벨로퍼트의 모던 리액트 참고