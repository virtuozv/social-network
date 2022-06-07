import React from 'react';

import { Container } from './styles/header';

export function Header({children, ...props}) {
    return <Container {...props}>{children}</Container>
}