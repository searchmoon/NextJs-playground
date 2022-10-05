import '../styles/globals.css'
import {wrapper} from "../reducer/store";

function MyApp({Component, pageProps}) {
    return <Component {...pageProps} />
}

export default wrapper.withRedux(MyApp)
