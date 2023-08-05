import { styled } from "styled-components";
import ReportMissingBox from "./MisingReportBox";
import { useQuery } from "react-query";
import { getMissingList } from "../../utils/apis/missing";
import List from "../common/List";

const Content = () => {
  const { data } = useQuery("", () => getMissingList());
  return (
    <Container>
      <ReportMissingBox />
      {data?.map((data) => {
        return <List data={data} />;
      })}
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  gap: 16px 10px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(auto-fill);
  margin-bottom: 60px;
`;

export default Content;
