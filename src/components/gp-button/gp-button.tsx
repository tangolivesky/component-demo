import React from "react";
import { Button, ButtonProps } from 'antd';


// 自定义按钮组件，继承 AntD Button 的所有属性
interface GPButtonProps extends ButtonProps {
}

const GPButton: React.FC<GPButtonProps> = (props) => {
  const { ...rest } = props;
  return (
    <Button {...rest}>
      {props.children}
    </Button>
  );
};

export default GPButton;