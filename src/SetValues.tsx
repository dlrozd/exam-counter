import {Button, ConfigProvider} from 'antd';
import {createStyles} from 'antd-style';
import type {InputNumberProps} from 'antd';
import {Flex, InputNumber} from 'antd';


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

const handleSpinnerChange: InputNumberProps['onChange'] = (value) => {
    console.log('changed', value);
};

const sharedProps: InputNumberProps = {
    mode: 'spinner' as const,
    min: 1,
    max: 10,
    defaultValue: 3,
    onChange: handleSpinnerChange,
    style: {width: 150},
};

export const SetValues = ({values, onChange, onSet, isSetDisabled, isError}: SetValuesPropsType) => {


    const inputClass = isError ? 'input-error' : '';

    const useStyle = createStyles(({prefixCls, css}) => ({
        linearGradientButton: css`
            &.${prefixCls}-btn-primary:not([disabled]):not(.${prefixCls}-btn-dangerous) {
                > span {
                    position: relative;
                }

                &::before {
                    content: '';
                    background: linear-gradient(135deg, #6253e1, #04befe);
                    position: absolute;
                    inset: -1px;
                    opacity: 1;
                    transition: all 0.3s;
                    border-radius: inherit;
                }

                &:hover::before {
                    opacity: 0;
                }
            }
        `,
    }));

    const {styles} = useStyle();

    return (
        <ConfigProvider
            button={{className: styles.linearGradientButton}}
        >
            <div className="counter-set">
                <div className="set-values">
                    <div>
                        <span>max value:</span>
                        <Flex vertical gap="middle">
                            <InputNumber
                                {...sharedProps}
                                placeholder="Outlined"
                                size="large"
                                value={values.maxValue}
                                onChange={(value) => onChange('maxValue', Number(value || 0))}
                                className={inputClass}/>
                        </Flex>
                    </div>
                    <div>
                        <span>start value:</span>
                        <Flex vertical gap="middle">
                            <InputNumber
                                {...sharedProps}
                                placeholder="Outlined"
                                size="large"
                                value={values.startValue}
                                onChange={(value) => onChange('startValue', Number(value || 0))}
                                className={inputClass}/>
                        </Flex>
                    </div>
                </div>
                <div className="set-button-container">
                    <Button
                        size="large"
                        type="primary"
                        onClick={onSet}
                        disabled={isSetDisabled || isError}
                    >
                        set
                    </Button>
                </div>
            </div>
        </ConfigProvider>
    );
};