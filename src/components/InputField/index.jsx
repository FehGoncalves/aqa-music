export const InputField = props => {
    return (
        <fieldset className="w-full flex flex-col gap-2 text-neutral-50">
            <label htmlFor={props.id} className="text-lg font-medium">{props.label}</label>

            <input className="bg-[#525B76] rounded-lg p-2 ring-neutral-50" {...props} />
        </fieldset>
    )
}