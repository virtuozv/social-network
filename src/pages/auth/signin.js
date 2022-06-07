import React from "react";
import { Form } from "../../components/form";
import { Label } from "../../components/label";
import { AuthContainer } from "../../containers/auth";
import { HeadContainer } from "../../containers/header";
import { LogoSpider } from "../../components/logo/spider";

export function SignIn() {
    return (
        <>
        {/* <HeadContainer /> */}
        <LogoSpider />
        <AuthContainer>
            <Label>
                <Label.SpecialText>
                The Social Exmin Network
                </Label.SpecialText>
            </Label>
            <Label>Log in to your account</Label>
            <Form>
                <Form.Title>E-mail: </Form.Title>
                <Form.TextInput placeholder="Enter email" />
                <Form.Title>Password: </Form.Title>
                <Form.TextInput placeholder="Enter password" type="password" />
                <Form.TextSubmit>Submit</Form.TextSubmit>
            </Form>
            <Label>Don't have an account? Start a free&nbsp;<Form.TextLink to="/signup">register</Form.TextLink>.</Label>
         </AuthContainer>
         </>
    )
}