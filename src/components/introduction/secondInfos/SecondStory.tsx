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
        title="😁 사람들이 사용하고 싶어 하는 페이지를 개발하는 것에 관심이 있습니다."
        desc="기업의 의도와 맞는 페이지를 개발하기 위해 역량을 키워내 가며, 이를 토대로 적용해보는 
        것을 좋아합니다."
        isStack={false}
      />
      <List
        title="🤔 더 나은 결과물을 위한 팀원들과의 의사소통을 좋아합니다."
        desc="
        팀원의 의견들을 다양한 관점으로 보고자 
        노력합니다. 타인의 의견은 다를 뿐이지 틀린 것이 아니기 때문입니다."
        isStack={false}
      />
      <List
        title="🙁 객관적인 자신의 옳고 그름을 검증하며 개발합니다"
        desc="다음에는 어긋나지 않고, 더 좋은 결과를 이끌어낼 수 있는 자신이 될 수 있도록 피드백을 바탕으로 회고를 하려 합니다."
        isStack={false}
      />
    </ListWrapper>
  );
};

export default SecondStory;
