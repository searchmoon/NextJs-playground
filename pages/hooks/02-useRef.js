import React, {useState, useRef} from 'react';

// useRef로 특정 DOM 선택하기.
// 리액트에서 DOM을 직접 선택할 때 useRef를 쓴다.
// ref 를 사용할 때에는 useRef 라는 hook 함수를 사용한다.
// 이 예제는 useRef로 특정 DOM을 선택하여, 초기화 버튼을 눌렀을 때, 첫번째 input 창에 포커스가 잡히도록 하는 예제다.

function InputSample() {
    const [inputs, setInputs] = useState({
        name: '',
        nickname: ''
    });
    const nameInput = useRef();

    const {name, nickname} = inputs; // 비구조화 할당을 통해 값 추출

    const onChange = e => {
        const {value, name} = e.target; // 우선 e.target 에서 name 과 value 를 추출
        setInputs({
            ...inputs, // 기존의 input 객체를 복사한 뒤
            [name]: value // name 키를 가진 값을 value 로 설정
        });
    };

    const onReset = () => {
        setInputs({
            name: '',
            nickname: ''
        });
        nameInput.current.focus();
    };

    return (
        <div>
            <input
                name="name"
                placeholder="이름"
                onChange={onChange}
                value={name}
                ref={nameInput}
            />
            <input
                name="nickname"
                placeholder="닉네임"
                onChange={onChange}
                value={nickname}
            />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {name} ({nickname})
            </div>
        </div>
    );
}

export default InputSample;

//벨로퍼트의 모던 리액트 참고
