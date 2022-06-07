import React from "react";
import { Form } from "../../components/form";
import { Label } from "../../components/label";
import { AuthContainer } from "../../containers/auth";

export function SignIn() {
    return (
        <>
        <AuthContainer>
            <Label>
                <Label.SpecialText>
                The Social Exmin Network
                </Label.SpecialText>
            </Label>
            <Label>Log in to your account</Label>
            <Form>
                <Form.Title>E-mail: </Form.Title>
                <Form.TextInput placeholder="Email ..." />
                <Form.Title>Password: </Form.Title>
                <Form.TextInput placeholder="Password ..." type="password" />
                <Form.TextSubmit>Okay</Form.TextSubmit>
            </Form>
            <Label>Don't have an account? Start a free register</Label>
         </AuthContainer>
        </>
    )
}