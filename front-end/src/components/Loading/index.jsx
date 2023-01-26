import { RotatingLines } from "react-loader-spinner";

import { Container } from "./style";

export default function Loading({ height }) {
    return (
        <Container height={height}>
            <RotatingLines
                strokeColor="#03045e"
                animationDuration="1.5"
                width="30"
            />
        </Container>
    );
}
