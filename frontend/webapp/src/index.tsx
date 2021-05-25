import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from "ui-components";

function App () {
    return <>
        Webapp
        <br />
        <Button>Hello world</Button>
    </>
}

ReactDOM.render(<App />, document.querySelector('#app'))