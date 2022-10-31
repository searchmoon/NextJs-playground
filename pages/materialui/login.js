import React from 'react';

import styled from "@emotion/styled";
import {
    Avatar,
    Box,
    Button,
    Checkbox,
    Container,
    FormControlLabel,
    Grid,
    Link,
    TextField, ThemeProvider,
    Typography
} from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const Login = () => {
    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <TextField margin="normal"
                           required
                           fullWidth
                           label="Email Address"
                           name="email"
                           autoComplete="email"
                           autoFocus/>
                <TextField margin="normal"
                           required
                           fullWidth
                           name="password"
                           label="Password"
                           type="password"
                           autoComplete="current-password"/>
                <FormControlLabel control={<Checkbox value="remember" color="primary"/>}
                                  label="Remember me"/>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{mt: 3, mb: 2}}
                >
                    Sign In
                </Button>
                <Grid container>
                    <Grid item xs>
                        <Link href="#" variant="body2">
                            Forgot password?
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link href="#" variant="body2">
                            Sign Up
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Login;


//LockOutlinedIcon를 Avatar로 감싸서 동그랗게 만들고, 색상을 변경할 수 있다.

//Typography 의 component="h1" variant="h5" 는 h1 태그의 h5 크기(디자인)를 의미한다.

//Button의 sx={{mt: 3}} 는 margin-top: 3rem; 을 의미한다.

//FormControlLabel 안에 Checkbox를 넣으면, checkbox의 label을 클릭했을 때, checkbox가 체크된다.

//Grid item에다가 xs만 지정해놓으면 나머지 여백을 다 차지한다는 뜻
// 둘중에 앞의 한 아이템에다가만 지정해놓으니 마치 justify-content: space-between; 처럼 동작한다.


// 생활코딩 https://www.youtube.com/watch?v=PWePBteFeeE 로그인 참고
