import styled from "@emotion/styled";

const Cursor = () => {
  return <CursorWrapper />;
};

const CursorWrapper = styled.section`
  position: fixed;
  left: 0;
  top: 0;
  width: 4rem;
  height: 4rem;
  background-color: transparent;
  border: 0.1rem solid ${(props) => props.theme.strongColor};
  border-radius: 50%;
  pointer-events: none;
  z-index: 1000;
`;

export default Cursor;
