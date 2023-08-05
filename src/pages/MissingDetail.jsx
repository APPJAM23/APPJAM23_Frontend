import { useRef } from "react";
import { styled } from "styled-components";
import Webcam from "react-webcam";
import ShotBtn from "../assets/shotBtn.svg";
import { useQuery } from 'react-query';
import { findMissing } from '../utils/apis/missing';
import { useNavigate } from 'react-router-dom';

const videoConstraints = {
  width: 390,
  height: 700,
  facingMode: "user"
};

const FindMissing = () => {
  const webcamRef = useRef(null);
  const navigate = useNavigate();

  const { refetch } = useQuery([], findMissing, {
    enabled: false,
    onSuccess: (data) => {
      navigate(`/home/detail/${data.id}`)
    }
  })

  return (
    <>
      <div style={{ marginTop: '15px' }}>
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          videoConstraints={videoConstraints}
        />
        <Filter>
          <img alt='capture' onClick={() => refetch()} src={ShotBtn} width={72} />
        </Filter>
      </div>
    </>
  );
}

const Filter = styled.div`
  width: 100vw;
  height: 120px;
  background: rgba(33, 36, 44, 0.70);
  backdrop-filter: blur(8px);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 67px;
  padding: 0 40px;
`
const Photo = styled.div`
  width: 100%;
  height: 100%;
  z-index: 80;
  position: absolute;
  background: ${props => `url(${props.img}) center/ cover no-repeat`};
  bottom: 0;
`;
const SmallPhoto = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 6px;
  z-index: 50;
  background: ${props => `url(${props.img}) center/ cover no-repeat`}
`
export default FindMissing;
