type CounterProps = {
    count: number
    maxValue: number
    isSettingsApplied: boolean
    isError: boolean
}

export const Counter = ({ count, maxValue, isSettingsApplied, isError}: CounterProps) => {

    if (isError) {
        return (
            <div className="counter-container">
                <div className="counter max-value" style={{ fontSize: '20px' }}>
                    Incorrect value!
                </div>
            </div>
        );
    }

    if (!isSettingsApplied) {
        return (
            <div className="counter-container">
                <div className="counter" style={{ fontSize: '20px' }}>
                    Enter values and press 'set'
                </div>
            </div>
        );
    }

    return (
        <div className="counter-container">
            <div className={count >= maxValue ? "counter max-value" : "counter"}>
                {count}
            </div>
        </div>
    );
}