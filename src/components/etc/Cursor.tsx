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
        x: mouseLocation.x - 24,
        y: mouseLocation.y - 24,
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
  width: 5rem;
  height: 5.15rem;
  border-radius: 50%;
  pointer-events: none;
  z-index: 1000;
  border: none;
  background: rgba(255, 255, 255, 0.15);
`;

export default Cursor;
