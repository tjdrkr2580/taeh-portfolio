import { ModalSection, StrongTitle } from "@/styles/mixins";
import ListUl from "@/components/global/ListUl";

const Navis = () => {
  return (
    <ModalSection>
      <StrongTitle>Navis</StrongTitle>
      <ListUl
        lists={[
          "직관적인 로딩, 에러 핸들링을 위한 React-Query 채택",
          "State 관련 보일러 플레이트를 줄이기 위한 Recoil 채택",
          "실시간 기능을 개발하기 위한 Websocket, SSE 채택",
          "시간 관리 및 빠른 피드백을 위한 AWS S3, CodeDeploy, Github Actions으로 자동 배포",
        ]}
      />
      <ListUl
        lists={[
          "실사용자 68명, UI/UX, 기능 피드백 24개 모두 반영",
          "구글 애널리틱스를 통한 정보 수집으로 관심 페이지 집중 개발",
          "SSE 연결이 끊어지지 않고 무한대로 요청을 계속 보내서 브라우저 성능 크게 감소 -> 클린업을 통해 SSE 연결을 끊어 렌더링 0.4초 감소",
          "state 객체화 시켜 전체적인 코드 감소 및 리펙토링",
        ]}
      />
    </ModalSection>
  );
};

export default Navis;
