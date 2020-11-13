import React from 'react';
import './App.scss';
import MainRouter from "./routes/Router";
import { createClient, Provider } from 'urql';

const client = createClient({ url: 'localhost:8000/graphql' });

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
