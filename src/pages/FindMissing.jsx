import { useState, useRef, useCallback } from "react";
import { styled } from "styled-components";
import Webcam from "react-webcam";
import ShotBtn from "../assets/shotBtn.svg";


const videoConstraints = {
    width: 390,
    height: 700,
    facingMode: "user"
};

const FindMissing = () => {
    const webcamRef = useRef(null);
    const [imgSrc, setImgSrc] = useState(null);
    const capture = useCallback(
      () => {
        setImgSrc(webcamRef.current.getScreenshot())
      },
      [webcamRef]
    );
    return (
        <>
            <div style={{marginTop: '15px'}}>
                <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                videoConstraints={videoConstraints}
                />
                <Filter>
                    <Photo img={imgSrc}/>
                    <img onClick={capture} src={ShotBtn} width={72}/>
                </Filter>
            </div>
        </>
    );
}

const Filter = styled.div`
    width: 100%;
    height: 120px;
    background: rgba(33, 36, 44, 0.70);
    backdrop-filter: blur(8px);
    z-index: 30;
    display: flex;
    gap: 70px;
    align-items: center;
    position: absolute;
    bottom: 70px;
    padding: 0 40px;
`
const Photo = styled.div`
    width: 48px;
    height: 48px;
    border-radius: 6px;
    z-index: 50;
    background: ${props => `url(${props.img}) center/ cover no-repeat`}
`
export default FindMissing;