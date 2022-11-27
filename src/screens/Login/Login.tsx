import React from "react";
import { SafeAreaView, Text } from "react-native";
import { ButtonSocialFacebook } from "../../components/ButtonSocialFacebook/ButtonSocialFacebook";
import { ButtonSocialGoogle } from "../../components/ButtonSocialGoogle/ButtonSocialGoogle";
import {
    Container,
    Title,
    ContentHeader,
    Description,
    ViewButton,
    ContentBody,
    ContentFooter
} from "./styles";

const Login: React.FC = () => {
    return (
        <SafeAreaView>
            <Container>

                <ContentHeader>

                    <Title>Welcome to {"\n"}Wallet App</Title>

                    <Description>Sign Up With</Description>

                    <ViewButton>
                    <ButtonSocialGoogle title="Google" />
                    <ButtonSocialFacebook iconName="facebook" title="Facebook" />
                    </ViewButton>

                </ContentHeader>

                <ContentBody>

                </ContentBody>

                <ContentFooter></ContentFooter>
            </Container>
        </SafeAreaView>
    );
};

export { Login };
