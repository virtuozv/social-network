import React from "react";
import { Form } from "../../components/form";
import { Label } from "../../components/label";
import { LogoSpider } from "../../components/logo/spider";
import { AuthContainer } from "../../containers/auth";
import { HeadContainer } from "../../containers/header";

export function SignUp() {
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
            <Label>Sign up to your account</Label>
            <Form>
                <Form.Title>E-Name: </Form.Title>
                <Form.TextInput placeholder="Enter Name" />
                <Form.Title>Surname: </Form.Title>
                <Form.TextInput placeholder="Enter Surname" type="password" />
                <Form.Title>Age: </Form.Title>
                <Form.TextInput placeholder="Enter Age" />
                <Form.Title>ID: </Form.Title>
                <Form.TextInput placeholder="Enter ID" type="password" />
                <Form.Title>E-mail: </Form.Title>
                <Form.TextInput placeholder="Enter email" />
                <Form.Title>Password: </Form.Title>
                <Form.TextInput placeholder="Enter password" type="password" />
                <Form.Title>Confirme password: </Form.Title>
                <Form.TextInput placeholder="Confirme password" type="password" />
                <Form.TextSubmit>Submit</Form.TextSubmit>
            </Form>
            <Label>Do you already have an account? Then&nbsp;<Form.TextLink to="/signin">sign in</Form.TextLink>.</Label>
         </AuthContainer>
        </>
    )
}