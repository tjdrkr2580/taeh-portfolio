import { flexCenterCenter } from "@/styles/mixins";
import { isModalState } from "@/utils/store";
import styled from "@emotion/styled";
import { useRef } from "react";
import { useRecoilValue, useResetRecoilState } from "recoil";
import Navis from "../introduction/projects/Navis";
import EzarK from "../introduction/projects/EzarK";
import EzarS from "../introduction/projects/EzarS";
import Richae from "../introduction/projects/Richae";
import Air from "../introduction/projects/Air";
import { modalBackGroundAnimation } from "@/styles/animation/keyframe";
import { motion } from "framer-motion";
import { modalVariants } from "@/styles/animation/varients";
import Mark from "../introduction/projects/Mark";
import Taeh from "../introduction/projects/Taeh";
import Blog from "../introduction/projects/Blog";

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
      <ModalContent
        variants={modalVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {modalState === "navis" && <Navis />}
        {modalState === "air" && <Air />}
        {modalState === "richae" && <Richae />}
        {modalState === "ezars" && <EzarS />}
        {modalState === "mark" && <Mark />}
        {modalState === "ezark" && <EzarK />}
        {modalState === "taeh" && <Taeh />}
        {modalState === "blog" && <Blog />}
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
  animation: 0.25s ${modalBackGroundAnimation} forwards ease-in-out;
`;

const ModalContent = styled(motion.div)`
  max-width: 65rem;
  width: 85vw;
  border-radius: 8px;
  padding: 3rem 0.8rem;
  background-color: ${(props) => props.theme.backgroundColor};
`;

export default Modal;
