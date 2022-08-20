import React from 'react';

// 조건부 렌더링(conditional rendering)
function Hello({ color, name, isSpecial }) {
    return (
        <div style={{ color }}>
            { isSpecial ? <b>*</b> : null }
            안녕하세요 {name}
        </div>
    );
}
// true, false일때 각각의 값이 달라지는게 아니라 true일때만 보여주고 false 일때는 보여주지 않기 때문에
// && 연산자로 사용하는것이 더 간편하다.
// 저걸 {isSpecial && <b>*</b>} 로 교체해준다.

Hello.defaultProps = {
    name: '이름없음'
}
function Wrapper({ children }) {
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

function App() {
    return (
        <Wrapper>
            <Hello name="react" color="red" isSpecial={true}/>
            <Hello color="pink" />
        </Wrapper>
    )
}
// isSpecial={true}로 설정해주었는데, isSpecial만 써주면, 동일한 의미이다.

export default App;