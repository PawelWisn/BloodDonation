import React from 'react';
import './App.scss';
import MainRouter from "./routes/Router";
import {createClient, dedupExchange, cacheExchange, fetchExchange, Provider} from 'urql';
import {getToken} from "./components/utils";


const client = createClient({
    url: 'http://localhost:8000/graphql/',
    exchanges: [dedupExchange, cacheExchange, fetchExchange],
    fetchOptions: () => {
        const token = getToken();
        return token ? {headers: {Authorization: `JWT ${token}`}} : {};
    }
});

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
