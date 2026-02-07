import { type ButtonProps} from "./Buttons.tsx";

type CounterProps = {
    count: ButtonProps['count']
}

export const Counter = (props: CounterProps) => {

    const counterClassName = props.count === 5 ? 'counter max-value' : 'counter';

    return (

        <div className={'counter-container'}>
            <div className={counterClassName}>
                {props.count}
            </div>
        </div>
    )
}
