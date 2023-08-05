import { styled } from "styled-components";
import ReportMissingBox from "./MisingReportBox";
import { datas } from "../../constants/ReportMissing";
import List from "../common/List";

const Content = () => {
  return (
    <Container>
      <ReportMissingBox />
      {datas.map((data, idx) => {
        return <List key={idx} data={data} />;
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
