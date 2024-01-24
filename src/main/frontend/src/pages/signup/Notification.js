import "../../components/Styles.css";
<<<<<<< HEAD
<<<<<<< HEAD
import {useLocation, useNavigate} from "react-router-dom";

const Notification = () => {
    const location = useLocation();
    const data = {...location.state};
=======
import { useNavigate } from "react-router-dom";

const Notification = () => {
>>>>>>> 087f6a3 ([01.24 예찬] 메뉴사진, 트라이얼, 새벽배달, 워크인, 미장 모달 구현 중+ModalStyles 세가지로 구분)
=======
import { useNavigate } from "react-router-dom";

const Notification = () => {
>>>>>>> e9549e8 ([01.25 예찬] 모달 정보 수정 구현 완료)
    const navigate = useNavigate();
    return (
        <div style={{ display: "inline-flex", flexDirection: "column", justifyContent: "center", textAlign: "left", gap: '2rem', width: '100%', fontSize: '0.9375rem',padding:'1rem' }} >
            <div style={{ textAlign: 'center' }} >
                <p style={{marginTop:'1.75rem'}} >3.안내 사항</p>
            </div>
            <div style={{ height: '2.75rem' }} >
                <p>포 올은 아래의 권한들이 필요합니다.</p>
                <p>서비스 사용 시 웹에서 요청 시 허용해 주세요.</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }} >
                <p style={{ fontWeight: '700', textDecorationLine: 'underline' }}>필수 접근 권한</p>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <p>• SMS</p>
                    <p>회원 가입 및 로그인 시 인증 번호 수신에 필요합니다.</p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <p>• 카메라</p>
                    <pre>
                        {`보건증(1년 이내 )은 반드시 스캔하여 등록해야 하며, 
대관 전 매장 확인,마감 후 매장 확인, 매장 등록 시 
반드시 실시간 촬영이 필요합니다.`}
                    </pre>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <p>• 전화</p>
                    
                    <pre>
                        {`본인 이용 확인을 위해 포 올을 사용 중인 휴대폰의 
전화번호를 조회합니다.`}
                    </pre>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <p>• 계약서</p>
                    <p>안전 대관을 위해 계약서 제도를 도입하고 있습니다.</p>
                </div>
            </div>
            <div>
                <a style={{ fontWeight: '700', textDecorationLine: 'underline' }}>선택 접근 권한</a>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <p>• 저장공간</p>
                    <p>대관 시작 전 매장 확인 시 촬영한 사진이 저장됩니다.</p>
                </div>
            </div>
<<<<<<< HEAD
<<<<<<< HEAD
            <button className="bottom_button" style={{ backgroundColor: "#FF2929", position: "fixed" }} onClick={() => { navigate("/signUpComplete",{state:{
                    id: data.loginId,
                    name: data.name,
                    email: data.email,
                    profileImg: data.profileImg,
                }}) }} >가입하기</button>
=======
            <button className="bottom_button" style={{ backgroundColor: "#FF2929", position: "fixed" }} onClick={() => { navigate("/signUpComplete") }} >가입하기</button>
>>>>>>> 087f6a3 ([01.24 예찬] 메뉴사진, 트라이얼, 새벽배달, 워크인, 미장 모달 구현 중+ModalStyles 세가지로 구분)
=======
            <button className="bottom_button" style={{ backgroundColor: "#FF2929", position: "fixed" }} onClick={() => { navigate("/signUpComplete") }} >가입하기</button>
>>>>>>> e9549e8 ([01.25 예찬] 모달 정보 수정 구현 완료)
        </div>
    )
};
export default Notification;
