
export type ButtonProps = {
    count: number
    increment: () => void
    reset: () => void
}

export const Button = ({count, increment, reset}: ButtonProps) => {

    const incrementDisable = count === 5
    const resetDisable = count === 0

    return (
        <div className={'buttons-container'}>
            <button className={'style-button'} disabled={incrementDisable} onClick={increment}>inc</button>
            <button className={'style-button'} disabled={resetDisable} onClick={reset}>reset</button>
        </div>
    )

}