import React from "react";
import { Button, IconeFacebook, Title } from "./styles";
import { Fontisto } from "@expo/vector-icons";
import { RectButtonProps } from "react-native-gesture-handler";

interface Props extends RectButtonProps {
    title: string;
    iconName?: React.ComponentProps<typeof Fontisto>["name"]
}

const ButtonSocialFacebook: React.FC<Props> = ({ title, iconName, ...rest}) => {
    return (
        <Button {...rest}>
            <IconeFacebook name={iconName} />
            <Title>{title}</Title>
        </Button>
    );
};

export { ButtonSocialFacebook };

