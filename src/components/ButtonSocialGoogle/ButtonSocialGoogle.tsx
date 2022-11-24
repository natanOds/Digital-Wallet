import React from "react";
import { Button, IconeGoogle, Title } from "./styles";
import PngGoogle from "../../assets/google.png";
import { RectButtonProps } from "react-native-gesture-handler";

interface Props extends RectButtonProps {
    title: string
}

const ButtonSocialGoogle: React.FC<Props> = ({ title, ...rest}) => {
    return (
        <Button {...rest}>
            <IconeGoogle source={PngGoogle} resizeMode="contain" />
            <Title>{title}</Title>
        </Button>
    );
};

export { ButtonSocialGoogle };

