import React from "react";

import { Container, SpecialText } from "./styles/label";

export function Label({children, ...props}) {
    return <Container {...props}>{children}</Container>
}

Label.SpecialText = function LabelText({children, ...props}) {
    return <SpecialText {...props}>{children}</SpecialText>
}