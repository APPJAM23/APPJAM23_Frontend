import { useState, useRef, useCallback } from "react";
import { styled } from "styled-components";
import Webcam from "react-webcam";
import ShotBtn from "../assets/shotBtn.svg";
import backBtn from "../assets/backBtn.svg";

const videoConstraints = {
    width: 390,
    height: 700,
    facingMode: "user"
};

const FindMissing = () => {
    const webcamRef = useRef(null);
    const [imgSrc, setImgSrc] = useState(null);
    const [ visability, setVisability ] = useState(false);

    const capture = useCallback(
      () => {
        setImgSrc(webcamRef.current.getScreenshot())
      },
      [webcamRef]
    );
    return (
        <>
            <div style={{marginTop: '15px'}}>
                { visability && 
                    <> 
                        <img src={backBtn} onClick={()=>{setVisability(false)}} />
                        <Photo img={imgSrc}/>
                    </>
                }
                <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                videoConstraints={videoConstraints}
                />
                <Filter>
                    <SmallPhoto onClick={()=>{setVisability(true)}} img={imgSrc}/>
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
    z-index: 10;
    display: flex;
    gap: 70px;
    align-items: center;
    position: absolute;
    bottom: 70px;
    padding: 0 40px;
`
const Photo = styled.div`
    width: 100%;
    height: 800px;
    z-index: 80;
    position: absolute;
    background: ${props => `url(${props.img}) center/ cover no-repeat`};
`;
const SmallPhoto = styled.div`
    width: 48px;
    height: 48px;
    border-radius: 6px;
    z-index: 50;
    background: ${props => `url(${props.img}) center/ cover no-repeat`}
`
export default FindMissing;