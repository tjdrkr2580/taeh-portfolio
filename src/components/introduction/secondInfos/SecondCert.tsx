import { Line, ListWrapper, StrongTitle } from "@/styles/mixins";
import React from "react";
import List from "@/components/global/List";

const SecondCert = () => {
  return (
    <ListWrapper>
      <Line />
      <StrongTitle>자격증</StrongTitle>
      <List
        title="Cisco Certified Network Associate"
        isStack={false}
        desc="취급 일자 : 2021.12."
      />
      <List
        title="정보처리기능사"
        isStack={false}
        desc="취급 일자 : 2021.06."
      />
      <List
        title="정보기기운용기능사"
        isStack={false}
        desc="취급 일자 : 2021.09."
      />
      <List
        title="통신선로기능사"
        isStack={false}
        desc="취급 일자 : 2022.07."
      />
      <List
        title="네트워크 관리사 2급"
        isStack={false}
        desc="취급 일자 : 2021.05."
      />
      <Line />
    </ListWrapper>
  );
};

export default SecondCert;
