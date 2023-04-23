import { LocationLink } from "@/styles/mixins";
import { listTitlePropsType } from "@/types/props";
import styled from "@emotion/styled";
import Desc from "./Desc";
import ListUl from "./ListUl";
import { useSetRecoilState } from "recoil";
import { isModalState } from "@/utils/store";

const List = ({
  title,
  isStack,
  stack,
  href,
  link,
  desc,
  lists,
  project,
}: listTitlePropsType) => {
  const setProjectValue = useSetRecoilState(isModalState);
  return (
    <ExperienceWrapper>
      <ExperienceTitle>
        {title !== "" && <h2>{title}</h2>}
        {stack !== "" && (
          <span>
            <span className="primary">{isStack === true ? "Stack :" : ""}</span>{" "}
            {stack}
          </span>
        )}
      </ExperienceTitle>
      {desc !== "" && <Desc desc={desc} />}
      <div className="bottom">
        {href === true && (
          <LocationLink href={link} target="_blank" rel="noopener noreferrer">
            바로가기
          </LocationLink>
        )}
        {lists && lists.length !== 0 && <ListUl lists={lists} />}
        {project !== "" && (
          <span className="detail" onClick={() => setProjectValue(project)}>
            상세보기
          </span>
        )}
      </div>
    </ExperienceWrapper>
  );
};

List.defaultProps = {
  title: "",
  isStack: true,
  stack: "",
  href: false,
  link: "",
  desc: "",
  project: "",
  lists: [],
};

const ExperienceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .bottom {
    display: flex;
    gap: 1rem;
  }
  h2 {
    font-size: 2.25rem;
  }
  span {
    font-size: 2rem;
    .primary {
      color: ${(props) => props.theme.primaryColor};
    }
  }
  a {
    width: fit-content;
  }
  .detail {
    text-decoration: underline;
  }
`;

const ExperienceTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export default List;
