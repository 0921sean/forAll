export const TimeUtil = {
    now: () => new Date().toJSON(),
<<<<<<< HEAD
<<<<<<< HEAD
    parse: (str) => new Date(str).toJSON(),
    setHour: (str, hour) => {
        const date = new Date(str);
        date.setHours(hour);
        return date.toJSON();
    },
    checkPast: (json) => {
        const from = new Date(json).getTime();
        const now = new Date().getTime();
        return now - from > 0;
    },
    checkToday: (json) => {
        const date = new Date().toJSON().split("T")[0]
        return date === json.split("T")[0];
    },
    getDiffSecond: (json) => {
        const from = new Date(json).getTime();
        const now = new Date().getTime();
        return Math.floor(Math.abs(now - from)/1000);
=======
=======
>>>>>>> e9549e8 ([01.25 예찬] 모달 정보 수정 구현 완료)
    getDiffSecond: (json) => {
        const from = new Date(json).getTime();
        const now = new Date().getTime();
        return Math.floor((now - from)/1000);
<<<<<<< HEAD
>>>>>>> 087f6a3 ([01.24 예찬] 메뉴사진, 트라이얼, 새벽배달, 워크인, 미장 모달 구현 중+ModalStyles 세가지로 구분)
=======
>>>>>>> e9549e8 ([01.25 예찬] 모달 정보 수정 구현 완료)
    },
    getDiffStr: (json) => {
        const from = new Date(json).getTime();
        const now = new Date().getTime();
        const sec = Math.floor((now - from)/1000);
        if (sec < 10) return "방금";
        else if (sec < 60) return sec+"초";
        else if (sec < 60*60) return Math.floor(sec / 60)+"분";
        else if (sec < 24*60*60) return Math.floor(sec / 60 / 60) + "시간";
        else return Math.floor(sec / 60 / 60 / 24) + "일";
    },
    toChatTime: (json)=>{
            const date = new Date(json).toLocaleDateString().replaceAll(".", "/").replaceAll(" ","");
            const time = new Date(json).toLocaleTimeString("en-US",{hour12: false}).split(":").slice(0,2).join(":");
            return date + time;
    }

}