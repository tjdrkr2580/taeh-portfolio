import ListTitle from "@/components/global/List";
import { Line, ListWrapper, StrongTitle } from "@/styles/mixins";
import styled from "@emotion/styled";

const SecondStory = () => {
  return (
    <ListWrapper>
      <Line />
      <StrongTitle>
        <span className="logo">Taeh</span>
      </StrongTitle>
    </ListWrapper>
  );
};

export default SecondStory;
