export const Button = props => {
    return (
        <button className="bg-[#525B76] text-neutral-50 w-full px-4x py-2 rounded-lg hover:brightness-110 transition-colors text-lg font-semibold max-w-xs" {...props}>{props.children}</button>

    )
}