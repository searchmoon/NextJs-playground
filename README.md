
# 기본 개념
- mutations : 쓰기 

# QueryClient 옵션들

```
defaultOptions: {
    queries: {
        retry: 0,
        useErrorBoundary: true,
    },
    mutations: {
        useErrorBoundary: true,
    },
},


-----

useErrorBoundary: (error) => {
            console.log('useErrorBoundary : ');
            console.log(JSON.stringify(error));
            return error.response?.status >= 500
        },

```


# 소개
- 카카오 톡FE파트 :   https://tech.kakao.com/2022/06/13/react-query/
- 로스템? https://blog.rhostem.com/posts/2021-02-01T00:00:00.000Z

# 에러처리
- 화해블로그 :  http://blog.hwahae.co.kr/all/tech/tech-tech/7867/
