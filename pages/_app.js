import '../styles/globals.css'
import {wrapper} from "../reducer/store";
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'
import ErrorBoundary from "../components/wrapper/ErrorBoundary";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 0,
            useErrorBoundary: true,
        },
        mutations: {
            useErrorBoundary: true,
        },
    },
});

function MyApp({Component, pageProps}) {
    return <QueryClientProvider client={queryClient}>
        <ErrorBoundary>
            <Component {...pageProps} />
        </ErrorBoundary>
    </QueryClientProvider>
}

export default wrapper.withRedux(MyApp)
