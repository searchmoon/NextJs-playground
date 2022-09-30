import React from 'react';

// 배열 렌더링 하기
// 배열 안에 있는 각 원소를 반환하여 새로운 배열을 만들어주는 map() 사용. 꼭 key값을 각 원소의 고유의 값으로 세팅 해주어야 함
// 만약 key값이 없다면, map(item, index) 이렇게 두번째 파라미터인 index를 key로 사용할 수 있다.


function User({user}) {
    return (
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
        </div>
    );
}

function UserList() {
    const users = [
        {
            id: 1,
            username: 'rumi',
            email: 'public.velopert@gmail.com'
        },
        {
            id: 2,
            username: 'jessy',
            email: 'tester@example.com'
        },
        {
            id: 3,
            username: 'merry',
            email: 'liz@example.com'
        }
    ];

    return (
        <div>
            {users.map((user) => <User key={user.id} user={user}/>)}
        </div>
    );
}

export default UserList;

//벨로퍼트의 모던 리액트 참고
