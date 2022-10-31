import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <div>
                <h2>form</h2>
                <ul>
                    <Link href={"/form/formikPage"}>formik 예제1</Link>
                    <br/>
                    <Link href={"/form/registerForm"}>formik 예제2</Link>
                    <br/>
                    <Link href={"/hooks/00-useState"}>useState 예제1</Link>
                    <br/>
                    <Link href={"/hooks/01-useState-input"}>useState 예제2</Link>
                    <br/>
                    <Link href={"/hooks/02-useRef"}>useRef 예제1</Link>
                    <br/>
                    <Link href={"/array/00-array-rendering"}>array 예제1</Link>
                    <br/>
                    <Link href={"/array/01-array-addList"}>array 예제2</Link>
                    <br/>
                    <Link href={"/props/00-defaultprops"}>props 예제1</Link>
                    <br/>
                    <Link href={"/props/01-props.children"}>props 예제2</Link>
                    <br/>
                    <Link href={"/rendering/00-conditional-rendering"}>
                        rendering 예제1
                    </Link>
                    <br/>
                    <Link href={"/layout/00-layout-practice"}>layout 연습</Link>
                    <br/>
                    <Link href={"/test/get-list"}>데이터 받아오기 연습(get)</Link>
                    <br/>
                    <Link href={"/test/post-list"}>데이터 받아오기 연습(post)</Link>
                    <br/>
                    <Link href={"/materialui/practice1"}>material ui 연습</Link>
                    <br/>
                    <Link href={"/materialui/login"}>material ui 로그인 기능 연습</Link>
                </ul>
            </div>
        </div>
    );
}
