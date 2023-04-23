import { ModalSection, StrongTitle } from "@/styles/mixins";
import ListUl from "@/components/global/ListUl";

const Viking = () => {
  return (
    <ModalSection>
      <StrongTitle>Viking Band</StrongTitle>
      <ListUl
        lists={[
          "Axios 모듈화를 통해 개발 시간 소모 감소",
          "AccessToken을 통한 자동 로그인 기능 추가",
          "쿠키 여부에 따른 Redirect 기능 추가",
        ]}
      />
    </ModalSection>
  );
};

export default Viking;
