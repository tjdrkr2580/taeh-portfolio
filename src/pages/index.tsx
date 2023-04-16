import HeadInfo from "@/components/global/HeadInfo";
import { pageMarginStyle } from "@/styles/mixins";
import styled from "@emotion/styled";

export default function Home() {
  return (
    <>
      <HeadInfo />
      <HomeWrapper>안녕</HomeWrapper>
    </>
  );
}

export const HomeWrapper = styled.section`
  ${pageMarginStyle};
`;
