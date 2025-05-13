import { Button } from "antd";

function ButtonComponent({ children, type, size, ...rest }) {

    return (
        <Button htmlType={type} size={size} {...rest}>{children}</Button>
    )
}

export default ButtonComponent;