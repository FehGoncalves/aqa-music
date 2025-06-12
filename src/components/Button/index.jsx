export const Button = props => {
    const VARIANTS = {
        primary: "bg-[#525B76] max-w-xs",
        secondary: "bg-red-600"
    }

    return (
        <button className={'w-full px-4x py-2 rounded-lg hover:brightness-110 transition-colors text-lg font-semibold text-neutral-50 ' + VARIANTS[props.variant]} {...props}>{props.children}</button>

    )
}