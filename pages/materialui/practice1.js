import React, {useState} from 'react';
import {
    Button,
    ButtonGroup,
    Container,
    Grid,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from "@material-ui/core";

function Practice1() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Container fixed>
                <Grid container>
                    <Grid item xs={3}>
                        <ButtonGroup>
                            <Button variant="contained" color="primary" onClick={() => {
                                setOpen(true);
                            }}>
                                CREATE
                            </Button>
                            <Button variant="outlined" color="primary">
                                UPDATE
                            </Button>
                        </ButtonGroup>
                        <Button variant="outlined" color="primary">
                            DELETE
                        </Button>
                        <Dialog open={open}>
                            <DialogTitle>Create</DialogTitle>
                            <DialogContent><DialogContentText>Hello!</DialogContentText></DialogContent>
                            <DialogActions>
                                <Button variant="outlined">Create</Button>
                                <Button variant="outlined" onClick={() => {
                                    setOpen(false);
                                }}>Cancel</Button>
                            </DialogActions>
                        </Dialog>
                    </Grid>
                    <Grid item xs={9}>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the
                            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                            of type
                            and scrambled it to make a type specimen book. It has survived not only five centuries, but
                            also the
                            leap into electronic typesetting, remaining essentially unchanged. It was popularised in the
                            1960s
                            with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                            desktop
                            publishing software like Aldus PageMaker including versions of Lorem Ipsum.t is a long
                            established
                            fact that a reader will be distracted by the readable content of a page when looking at its
                            layout.
                        </p>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

export default Practice1;

//Container -> 화면 가운데로 보내기: layout에 container. 반응형 레이아웃. 일정 크기 이상의 width 사이즈가 되면, 그 이상 늘어나지 않고 가운데 정렬됨
//fixed 속성을 넣으면 사이즈를 줄였을때 단계적으로 사이즈 줄어든다.

// button group화 시키키: ButtonGroup 사용

//Grid : grid는 바깥쪽 부모인 container 속성, 자식인 item 을 설정하고 xs로 크기를 정해준다. xs는 합쳐서 12가 나오게 한다.

//Dialog : 를 통한 모달창? 만들기.
