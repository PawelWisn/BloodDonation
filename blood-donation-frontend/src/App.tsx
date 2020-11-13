import React from 'react';
import './App.scss';
import MainRouter from "./routes/Router";
import {createClient, dedupExchange, cacheExchange, fetchExchange, Provider} from 'urql';
import { authExchange } from '@urql/exchange-auth';

const client = createClient({
    url: 'http://localhost:8000/graphql/',
    exchanges: [
        dedupExchange,
        cacheExchange,
        // authExchange({
        //
        // }),
        fetchExchange,
    ],});

function App() {
    return (
        <Provider value={client}>
        <div className="App">
            <MainRouter/>
        </div>
        </Provider>
    );
}

export default App;
