import Content from "../components/MissingReportDetail";
import PageContainer from "../components/PageContainer";

const MissingReportDetailPage = () => {
  return (
    <PageContainer title="실종 신고" subTitle="*표시는 필수 작성 항목입니다.">
      <Content />
    </PageContainer>
  );
};

export default MissingReportDetailPage;
