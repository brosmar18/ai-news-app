import React, { useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

const alanKey = process.env.REACT_APP_ALAN_KEY;
console.log(alanKey);


const App = () => {

    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({ command }) => {
                if(command === 'testCommand') {
                    alert ('this code was executed');
                }
            },
        });
    }, []);
    return (
        <div>
            <h1>AI News Application</h1>
        </div>
    );
}

export default App;
