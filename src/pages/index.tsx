import HeadInfo from "@/components/global/HeadInfo";
import HeadIntro from "@/components/introduction/HeadIntro";
import { pageMarginStyle } from "@/styles/mixins";
import styled from "@emotion/styled";

export default function Home() {
  return (
    <>
      <HeadInfo />
      <HomeWrapper>
        <HeadIntro />
      </HomeWrapper>
    </>
  );
}

export const HomeWrapper = styled.section`
  ${pageMarginStyle};
`;
