type ButtonProps = {
    title: string
    onClick: () => void
    disabled?: boolean
    className?: string
}

export const Button = ({ title, onClick, disabled, className }: ButtonProps) => {
    return (
        <button
            className={className || 'style-button'}
            onClick={onClick}
            disabled={disabled}
        >
            {title}
        </button>
    )
}