import { Input } from "antd";

function InputComponent({placeholder, width, type, value, onChange, id, name, onBlur, autoComplete}) {

    return (
        <Input type={type} placeholder={placeholder} style={{ width: width }} value={value} onChange={(event) => onChange(event)} id={id} name={name} onBlur={onBlur} autoComplete={autoComplete}/>
    )
}

export default InputComponent;