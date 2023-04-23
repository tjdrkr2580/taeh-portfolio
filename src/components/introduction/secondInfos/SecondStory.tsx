import { Line, ListWrapper, StrongTitle } from "@/styles/mixins";
import List from "@/components/global/List";

const SecondStory = () => {
  return (
    <ListWrapper>
      <Line />
      <StrongTitle>
        <span className="logo">Taeh</span>
      </StrongTitle>

      <List
        title="😀 리액트 라이브러리를 이용한 SPA 개발에 관심이 많습니다."
        isStack={false}
        desc="렌더링 없이 페이지가 전환되는 SPA 방식을 이용한 웹 페이지의 매력을 느끼고 React를 접했습니다.
여러 모듈 및 라이브러리를 통해 React라는 뼈대에 살을 추가하는 개발에 주로 시간을 내며
새로운 지식과 도구에 대해 거부감 없이 배워나갈 수 있습니다."
      />
      <List
        title="😁 사람들이 사용하고 싶어 하는 페이지를 개발하는 것에 관심이 있습니다."
        desc="사용하고 싶은 페이지는 사용하기 좋은 페이지이며, 주요 기능들이 매력적이어야 한다고 생각합니다.
그리하여 기업의 의도와 맞는 페이지를 계속해서 개발하기 위해 역량을 키워내 가며, 이를 토대로 적용해보는 
것을 좋아합니다."
        isStack={false}
      />
      <List
        title="🤔 더 나은 결과물을 위한 팀원들과의 의사소통을 좋아합니다."
        desc="소속되어 있는 팀에서 나올 수 있는 성과물의 완성도는 팀원들과의 소통을 통해 결정됩니다.
        더 나은 결과물과 기업의 성장을 위하여 팀에 융화되어 팀원의 의견들을 다양한 관점으로 보고자 
        노력합니다. 그 이유로는 모두의 의견은 서로 다를 뿐이지 틀린 것이 아니기 때문입니다."
        isStack={false}
      />
      <List
        title="🙁 객관적인 자신의 옳고 그름을 검증하며 개발합니다"
        desc="자신의 옳고 그름을 검증하는 것을 당연시 여깁니다, 비록 그 끝에 도달한 결론이 올바르지 
        않을지언정 다음에는 어긋나지 않고, 더 좋은 결과를 이끌어낼 수 있는 자신이 될 수 있도록 피드백을 바탕으로 회고를 하려 합니다."
        isStack={false}
      />
    </ListWrapper>
  );
};

export default SecondStory;
