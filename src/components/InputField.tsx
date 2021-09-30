interface InputFieldInterface {
    label: string, 
    defualtValue: string 
    placeholder: string,
    onChange: React.ChangeEventHandler<HTMLInputElement> | undefined, 
    name: string
}
const InputField = ({ label, defualtValue, placeholder, onChange, name }: InputFieldInterface) => {
    return (
        <div className="row">
            <div className="col-25">
            <label>{label}</label>
            </div>
            <div className="col-75">
            <input type="text" value={defualtValue} name={name} onChange={onChange} placeholder={placeholder} />
            </div>
        </div>
    )
}

export default InputField;