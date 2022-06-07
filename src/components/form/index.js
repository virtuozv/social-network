import React from "react";

import { Container, TextInput, Title, TextSubmit, TextLink } from "./styles/form";

export function Form({children, ...props}) {
    return <Container {...props}>{children}</Container>
}

Form.TextInput = function FormInput({children, ...props}) {
    return <TextInput {...props}>{children}</TextInput>
}

Form.Title = function FormTitle({children, ...props}) {
    return <Title {...props}>{children}</Title>
}

Form.TextSubmit = function FormSubmit({children, ...props}) {
    return <TextSubmit {...props}>{children}</TextSubmit>
}

Form.TextLink = function FormTextLink({children, ...props}) {
    return <TextLink {...props}>{children}</TextLink>
}