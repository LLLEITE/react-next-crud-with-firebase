interface ButtonProps {
    className?: string
    children: any
    color?: string
    onClick?: () => void
}

export default function Button(props: ButtonProps) {

    return (
        <button onClick={props.onClick} className={`bg-gradient-to-r from-green-400 to-green-700 text-white px-4 py-2 rounded-md ${props.className}`}>
            {props.children}
        </button>
    )
}