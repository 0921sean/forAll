import DropDown from "../../components/DropDown";
import ImageInputs from "../../components/ImageInputs";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {useCallback, useEffect, useState} from "react";
import Modal from "react-modal";

const HostRegistry4 = () => {
    const location = useLocation();
    const data = {...location.state};
    const navigate = useNavigate();
    let isPublic = false;
    const firePitData = ["1개","2개","3개","4개","5개","6개","직접 입력"];

    const [firePit, setFirePit] = useState(firePitData[0]);
    const [exactFirePit, setExactFirePit] = useState();
    const [capacity, setCapacity] = useState();
    const [fryer, setFryer] = useState(false);
    const [oven, setOven] = useState(false);
    const [dishWasher, setDishWasher] = useState(false);
    const [iceMaker, setIceMaker] = useState(false);
    const [someThing, setSomeThing] = useState(false);
    const [extraMachine, setExtraMachine] = useState("");
    const [sidePlate, setSidePlate] = useState([]);
    const [countSidePlate, setCountSidePlate] = useState();
    const [cup, setCup] = useState([]);
    const [countCup, setCountCup] = useState();
    const [cuttrary, setCuttrary] = useState([]);
    const [countCuttrary, setCountCuttrary] = useState();

    const [isModalOpen, setIsModalOpen] = useState(false);

    const onChangeFirePit = useCallback((e) => {
        setExactFirePit(e.target.value);
    }, []);
    const onChangeCapacity = useCallback((e) => {
        setCapacity(e.target.value);
    }, []);
    const toggleFryer = useCallback(() => {
        if (fryer === true) setFryer(false);
        else setFryer(true);
    }, [fryer]);
    const toggleOven = useCallback(() => {
        if (oven) setOven(false);
        else setOven(true);
    }, [oven]);
    const toggleDishWasher = useCallback(() => {
        if (dishWasher) setDishWasher(false);
        else setDishWasher(true);
    }, [dishWasher]);
    const toggleIceMaker = useCallback(() => {
        if (iceMaker) setIceMaker(false);
        else setIceMaker(true);
    }, [iceMaker]);
    const toggleSomeThing = useCallback(() => {
        if(someThing) setSomeThing(false);
        else setSomeThing(true);
    }, [someThing]);
    const onChangeExtraMachine = useCallback((e) => {
        setExtraMachine(e.target.value);
    }, []);
    const onChangeCountSidePlate = useCallback((e) => {
        setCountSidePlate(e.target.value);
    }, []);
    const onChangeCountCup = useCallback((e) => {
        setCountCup(e.target.value);
    }, []);
    const onChangeCountCuttrary = useCallback((e) => {
        setCountCuttrary(e.target.value);
    }, []);

    const handleButton = () => {
        if ((firePit !== undefined) && (capacity !== undefined) && (sidePlate !== undefined) && (countSidePlate !== undefined) && (cup !== undefined) && (countCup !== undefined)
            && (cuttrary !== undefined) && (countCuttrary !== undefined)){
            isPublic = true;
            submit();
        }
        else setIsModalOpen(true);
    };
    const submit = () => {
        const equip = [];
        if (fryer) equip.push("튀김기");
        if (oven) equip.push("오븐");
        if (dishWasher) equip.push("식기세척기");
        if (iceMaker) equip.push("제빙기");
        data.isPublic = data.isPublic && isPublic;
        navigate("/hostRegistry5", {
            state: {
                ...data,
                firePit: firePit === "직접 입력" ? exactFirePit : firePit.split("개")[0],
                capacity: capacity,
                equip: equip.join(","),
                extraMachine: extraMachine,
                sidePlate: sidePlate,
                countSidePlate: countSidePlate,
                cup: cup,
                countCup: countCup,
                cuttrary: cuttrary,
                countCuttrary: countCuttrary,
            }
        })
    };

    return (
        <div>
            <h1>2. 이용 안내</h1>
            <div>
                <h4>주방 정보*</h4>
                <hr style={{ height: "2px", backgroundColor: "black" }} />
            </div>
            <div>
                <p>화구</p>
                <DropDown dataArr={firePitData} onChange={setFirePit} placeholder={"화구 개수를 선택해주세요"}/>
                {firePit === "직접 입력" ? (
                    <div>
                        <span><input onChange={onChangeFirePit} style={{width:"10vw"}} />개 </span>
                        
                        {exactFirePit < 7 ? <p>7 이상의 숫자만 입력하여주세요. 직접입력의 층수는 '지상'으로 적용됩니다</p> : null}
                    </div>
                ) : null}
            </div>
            <div>
                <p>주방 수용 인원 수</p>
                <span><input val={capacity} onChange={onChangeCapacity} placeholder={"주방이 수용 가능한 최대 인원 수를 입력해주세요."} style={{width:"10vw"}}/>명</span>
            </div>
            <div>
                <p>주방기계*</p>
                <div className={fryer === true ? "btn_selected" : ""} onClick={toggleFryer}>튀김기</div>
                <div className={oven === true ? "btn_selected" : ""} onClick={toggleOven}>오븐</div>
                <div className={dishWasher === true ? "btn_selected" : ""} onClick={toggleDishWasher}>식기세척기</div>
                <div className={iceMaker === true ? "btn_selected" : ""} onClick={toggleIceMaker}>제빙기</div>
                <div className={someThing === true ? "btn_selected" : ""} onClick={toggleSomeThing}>내용</div>

            </div>

            <div>
                <p>추가 사용 가능 기계*</p>
                <input onChange={onChangeExtraMachine} placeholder={"사용 가능한 기계를 입력해주세요. ex) 수비드 기계"}/>
            </div>
            <h4>매장 물품</h4>
            <hr style={{ height: "2px", backgroundColor: "black" }} />
            <div style={{display:"flex", justifyContent:"space-around"}} >
                <div>
                    <p>앞접시*</p>
                    <ImageInputs setImg={setSidePlate} vals={sidePlate}/>
                    <input onChange={onChangeCountSidePlate} placeholder={"최대 개수를 기준으로 입력해주세요"}/>
                </div>
                <div>
                    <p>물컵*</p>
                    <ImageInputs setImg={setCup} vals={cup}/>
                    <input onChange={onChangeCountCup} placeholder={"최대 개수를 기준으로 입력해주세요"}/>
                </div>
            </div>
            <div style={{display:"flex"}} >
                <div>
                    <p>커트러리*</p>
                    <ImageInputs setImg={setCuttrary} vals={cuttrary}/>
                    <input onChange={onChangeCountCuttrary} placeholder={"최대 개수를 기준으로 입력해주세요"}/>
                </div>
            </div>

            <div style={{display: "flex"}}>
                <button onClick={()=>navigate(-1,data)} style={{backgroundColor: "red"}} className="next_button" >이전</button>
                <button style={{backgroundColor: "grey"}} className="next_button"
                            onClick={handleButton}
                >다음</button>
            </div>
            <Modal isOpen={isModalOpen} ariaHideApp={false}>
                <p>현재 필수 입력사항이 모두 기입되지 않았습니다.</p>
                <p>이 경우 해당 공간은 '비공개' 상태로 등록되며, 게스트들에게 노출되지 않습니다.</p>
                <button onClick={() => setIsModalOpen(false)}>뒤로</button>
                <button onClick={() => submit()}>다음</button>
            </Modal>
        </div>
    )
};
export default HostRegistry4;