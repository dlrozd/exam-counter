import './App.css'
import {Counter} from "./Counter.tsx";
import {useState} from "react";
import {SetValues} from "./SetValues.tsx";
import {Button} from "./Buttons.tsx";

function App() {

    const [count, setCount] = useState(0)
    const increment = () => setCount(count + 1)
    const reset = () => setCount(0)


    return (
        <div className={'app-container'}>
            <SetValues/>

            <div className={'container-counter'}>
                <Counter count={count}/>
                <Button count={count} increment={increment} reset={reset}/>
            </div>
        </div>
    )
}

export default App
