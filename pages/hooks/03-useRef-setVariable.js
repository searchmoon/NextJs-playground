import React, {useRef} from 'react';


// useRef 로 관리하는 변수는 값이 바뀐다고 해서 컴포넌트가 리렌더링되지 않는다.
// DOM 을 선택해야 할 때 말고 한가지 용도가 더있다.
// 이 변수를 사용하여 다음과 같은 값을 관리 할 수 있다.
// 1. setTimeout, setInterval 을 통해서 만들어진 id
// 2. 외부 라이브러리를 사용하여 생성된 인스턴스
// 3. scroll 위치
// useRef() 를 사용 할 때 파라미터를 넣어주면, 이 값이 .current 값의 기본값이 된다.
// 이 값을 수정 할때에는 .current 값을 수정하면 되고 조회 할 때에는 .current 를 조회하면 된다.

function User({user}) {
    return (
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
        </div>
    );
}

function UserList({users}) {
    return (
        <div>
            {users.map(user => (
                <User user={user} key={user.id}/>
            ))}
        </div>
    );
}

function App() {
    const users = [
        {
            id: 1,
            username: 'velopert',
            email: 'public.velopert@gmail.com'
        },
        {
            id: 2,
            username: 'tester',
            email: 'tester@example.com'
        },
        {
            id: 3,
            username: 'liz',
            email: 'liz@example.com'
        }
    ];

    const nextId = useRef(4);
    const onCreate = () => {
        // 나중에 구현 할 배열에 항목 추가하는 로직
        // ...

        nextId.current += 1;
    };
    return <UserList users={users}/>;
}

export default App;
