import styled from "@emotion/styled";
import { motion } from "framer-motion";

const Cursor = ({
  mouseLocation,
}: {
  mouseLocation: { x: number; y: number };
}) => {
  return (
    <CustomCursor
      animate={{
        x: mouseLocation.x - 34.5,
        y: mouseLocation.y - 35,
        transition: {
          duration: 0,
        },
      }}
    />
  );
};

const CustomCursor = styled(motion.div)`
  position: fixed;
  top: 0%;
  left: 0%;
  width: 7rem;
  height: 7.15rem;
  border-radius: 50%;
  pointer-events: none;
  z-index: 1000;
  border: 0.1rem solid yellow;
`;

export default Cursor;
