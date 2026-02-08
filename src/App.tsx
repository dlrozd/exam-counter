import './App.css';
import {useState} from 'react';
import {SetValues} from './SetValues';
import {Counter} from './Counter';
import {Button} from './Button';

type SettingsType = {
    startValue: number
    maxValue: number
}

function App() {
    const [isSettingsMode, setIsSettingsMode] = useState(false);

    const [tempSettings, setTempSettings] = useState<SettingsType>(() => {
        const saved = localStorage.getItem('counter-params');
        return saved ? JSON.parse(saved) : {startValue: 0, maxValue: 5};
    });

    const [count, setCount] = useState(() => {
        const saved = localStorage.getItem('counter-params');
        return saved ? JSON.parse(saved).startValue : 0;
    });


    const isError = tempSettings.startValue >= tempSettings.maxValue ||
        tempSettings.startValue < 0 ||
        tempSettings.maxValue < 0;

    const handleParamChange = (field: keyof SettingsType, value: number) => {
        setTempSettings((prev: SettingsType) => ({
            ...prev,
            [field]: value
        }));
    };

    const applySettings = () => {
        if (!isError) {
            localStorage.setItem('counter-params', JSON.stringify(tempSettings));
            setCount(tempSettings.startValue);
            setIsSettingsMode(false);
        }
    };

    return (
        <div className="app-container">
            {isSettingsMode ? (
                <SetValues
                    isError={isError}
                    values={tempSettings}
                    onChange={handleParamChange}
                    onSet={applySettings}
                    isSetDisabled={isError}
                />
            ) : (
                <div className="container-counter">
                    <Counter
                        isError={false}
                        count={count}
                        maxValue={tempSettings.maxValue}
                        isSettingsApplied={true}
                    />
                    <div className="buttons-container">
                        <Button
                            onClick={() => count < tempSettings.maxValue && setCount(count + 1)}
                            title="inc"
                            disabled={count >= tempSettings.maxValue}
                        />
                        <Button
                            onClick={() => setCount(tempSettings.startValue)}
                            title="reset"
                        />
                        <Button
                            onClick={() => setIsSettingsMode(true)}
                            title="set"
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;