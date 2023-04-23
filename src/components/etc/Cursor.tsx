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
        x: mouseLocation.x - 32,
        y: mouseLocation.y - 32,
        transition: {
          duration: 0,
        },
      }}
    />
  );
};

const CustomCursor = styled(motion.div)`
  position: absolute;
  top: 0%;
  left: 0%;
  width: 6.25rem;
  height: 6.25rem;
  border-radius: 50%;
  z-index: 1000;
  border: 0.1rem solid yellow;
`;

export default Cursor;
