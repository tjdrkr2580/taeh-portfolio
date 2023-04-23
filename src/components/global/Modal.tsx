import { flexCenterCenter } from "@/styles/mixins";
import { isModalState } from "@/utils/store";
import styled from "@emotion/styled";
import { useRef } from "react";
import { useRecoilValue, useResetRecoilState } from "recoil";
import Navis from "../introduction/projects/Navis";
import EzarK from "../introduction/projects/EzarK";
import EzarS from "../introduction/projects/EzarS";
import Viking from "../introduction/projects/Viking";
import Taeh from "../introduction/projects/Taeh";
import Richae from "../introduction/projects/Richae";

const Modal = () => {
  const resetModal = useResetRecoilState(isModalState);
  const modalState = useRecoilValue(isModalState);
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
      <ModalContent>
        {modalState === "taeh" && <Taeh />}
        {modalState === "navis" && <Navis />}
        {modalState === "air" && <></>}
        {modalState === "viking" && <Viking />}
        {modalState === "richae" && <Richae />}
        {modalState === "ezars" && <EzarS />}
        {modalState === "ezark" && <EzarK />}
      </ModalContent>
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
  width: 85vw;
  height: 40rem;
  border-radius: 8px;
  padding: 2rem 0.8rem;
  background-color: ${(props) => props.theme.backgroundColor};
`;

export default Modal;
