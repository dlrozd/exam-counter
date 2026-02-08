import {Input} from './Input';
import {Button} from './Button';

type ValuesType = {
    startValue: number;
    maxValue: number;
}

type SetValuesPropsType = {
    values: ValuesType;
    onChange: (field: 'startValue' | 'maxValue', value: number) => void;
    onSet: () => void;
    isSetDisabled: boolean;
    isError: boolean;
}

export const SetValues = ({values, onChange, onSet, isSetDisabled, isError}: SetValuesPropsType) => {

    const inputClass = isError ? 'input-error' : '';

    return (
        <div className="counter-set">
            <div className="set-values">
                <div>
                    <span>max value:</span>
                    <Input
                        value={values.maxValue}
                        onChange={(v) => onChange('maxValue', v)}
                        className={inputClass}
                    />
                </div>
                <div>
                    <span>start value:</span>
                    <Input
                        value={values.startValue}
                        onChange={(v) => onChange('startValue', v)}
                        className={inputClass}/>
                </div>
            </div>
            <div className="set-button-container">
                <Button
                    title="set"
                    onClick={onSet}
                    disabled={isSetDisabled || isError}
                /></div>
        </div>
    );
};