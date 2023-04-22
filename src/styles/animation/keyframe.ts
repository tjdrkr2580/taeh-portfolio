import { keyframes } from "@emotion/react";

export const logoFlyAnimation = keyframes`
    0% {
        transform: translateY(0);
    }
    25% {
        transform: translateY(10px);
    }
    50% {
        transform: translateY(0);
    }
    75% {
        transform: translateY(10px);
    }
    100% {
        transform: translateY(0);
    }
`;

export const logoFillAnimation = keyframes`
    0% {
        fill: transparent;
    }
    100% {    
        fill: #d9d9d9;
    }
`;
