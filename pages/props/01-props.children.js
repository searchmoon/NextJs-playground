import React from 'react';

// 컴포넌트 태그 사이에 넣은 값을 조회하고 싶을 땐, props.children 조회하기.
const style = {
    border: '2px solid blue',
    padding: '16px',
};

function Wrapper() {
    return (
        <div style={style}>

        </div>
    )
}

function Hello({color, name}) {
    return <div style={{color}}>안녕하세요 {name}</div>
}

Hello.defaultProps = {
    name: '정은'
}

function App() {
    return (
        <>
            <Wrapper>
                <Hello name="react" color="red"/>
                <Hello color="pink"/>
            </Wrapper>
            <Wrapper2>
                <Hello name="react" color="red"/>
                <Hello color="pink"/>
            </Wrapper2>
        </>
    );
}

export default App;

// 이렇게 해주게되면 Wrapper 태그 안의 Hello 컴포넌트는 보여지지 않는다.
// 내부의 내용이 보여지게 하기 위해서는 Wrapper에서 props.children을 렌더링 해줘야 한다.

function Wrapper2({children}) {
    const style = {
        border: '2px solid salmon',
        padding: '16px',
    };
    return (
        <div style={style}>
            {children}
        </div>
    )
}

// Wrapper2의 Hello 컴포넌트가 보여진다

//벨로퍼트의 모던 리액트 참고
