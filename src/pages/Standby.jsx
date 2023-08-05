import {Logo} from "../assets/index";

const Standby = () => {
    return(
        <div>
            <div style={{position: 'absolute', top: '45%', left: '30%'}}>
                <img src={Logo} width={180} />
            </div>
        </div>
    );
}

export default Standby;