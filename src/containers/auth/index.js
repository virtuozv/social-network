import React from 'react';

import { Container } from './styles/auth';

export function AuthContainer({children, ...props}) {
    return (
        <Container {...props}>
            {children}
        </Container>
    );
}