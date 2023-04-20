import { LocationLink } from "@/styles/mixins";
import { listTitlePropsType } from "@/types/props";
import styled from "@emotion/styled";

const ListTitle = ({ title, stack, href, link }: listTitlePropsType) => {
  return (
    <ExperienceWrapper>
      <ExperienceTitle>
        <h2>{title}</h2>
        <span>
          <span className="primary">Stack</span> : {stack}
        </span>
      </ExperienceTitle>
      {href === true && (
        <LocationLink href={link} target="_blank" rel="noopener noreferrer">
          바로가기
        </LocationLink>
      )}
    </ExperienceWrapper>
  );
};

ListTitle.defaultProps = {
  title: "",
  stack: "",
  href: false,
  link: "",
};

const ExperienceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  h2 {
    font-size: 2.25rem;
  }
  span {
    font-size: 2rem;
    .primary {
      color: ${(props) => props.theme.primaryColor};
    }
  }
`;

const ExperienceTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export default ListTitle;
