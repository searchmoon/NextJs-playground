import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
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
                    <li><Link href={'/form/formikPage'}>formik 예제</Link></li>
                    <li><Link href={'/form/registerForm'}></Link></li>
                </ul>
            </div>
        </div>
    )
}
