import { flexCenterCenter } from "@/styles/mixins";
import { isModalState } from "@/utils/store";
import styled from "@emotion/styled";
import { ReactNode, useEffect, useRef } from "react";
import { useResetRecoilState } from "recoil";

const Modal = ({ children }: { children: ReactNode }) => {
  const resetModal = useResetRecoilState(isModalState);
  const modalRef = useRef<HTMLDivElement>(null);
  return (
    <ModalWrapper
      ref={modalRef}
      onClick={(e) => {
        if (modalRef.current === e.target) {
          resetModal();
        }
      }}
    >
      <ModalContent>{children}</ModalContent>
    </ModalWrapper>
  );
};

const ModalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  ${flexCenterCenter};
  top: 0;
  left: 0;
  z-index: 1001;
  background: rgba(0, 0, 0, 0.3);
`;

const ModalContent = styled.section`
  max-width: 65rem;
  max-height: 80rem;
  width: 80vw;
  height: 80vh;
  border-radius: 8px;
  background-color: ${(props) => props.theme.backgroundColor};
`;

export default Modal;
