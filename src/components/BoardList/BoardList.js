
import { useState } from "react";
import "./BoardList.css";
import RecruitBtn from "../RecruitBtn/RecruitBtn";
import { useNavigate } from "react-router-dom";
import BoardItem from "../BoardItem/BoardItem";

export default function BoardList() {

    const selectList = ["어학","취업", "고시", "프로그래밍", "기타"]
    const [category, setCategory] = useState("");

    const handleOption = (e) => {
        setCategory(e.target.value);
    }
    const nav = useNavigate();
    const mockData = [
        {
            id : 1,
            category : "프로그래밍",
            writer : "홍길동",
            title : "랙트고",
            place : "서울",
            isRecruit : 1,
            created_at : new Date("2024-06-01").getTime()
        },
        {
            id : 2,
            category : "어학",
            writer : "아무개1",
            title : "지각하지 말자",
            place : "서울",
            isRecruit : 0,
            created_at : new Date("2024-06-02").getTime()
        },
        {
            id : 3,
            category : "고시",
            writer : "홍길동",
            title : "노지각",
            place : "서울",
            isRecruit : 1,
            created_at : new Date("2024-06-01").getTime()
        },
    ]

  return (
    <div className="tableContainer">
        <div className="searchFilter">
            <select className="studyCategory" name="category" onChange={handleOption} >
                {selectList.map((item) => (
                    <option value={item} key={item}>{item}</option>
                ))}
            </select>
            <input className="searchBar" type="text" placeholder="제목으로 검색"/>
            <RecruitBtn text="스터디 모집하기" onClick={()=>nav("/newBoard")}/>
            <RecruitBtn text="검색하기" />
        </div>

        <div className="tableWrapper">
            <div className="tableTop"/>
            <div className="HeaderRow">
                <div className="columnHeaderBasic">종류</div>
                <div className="columnHeaderBasic">작성자</div>
                <div className="columnHeaderTitle">스터디명</div>
                <div className="columnHeaderBasic">장소</div>
                <div className="columnHeaderBasic">상태</div>
                <div className="columnHeaderBasic">작성일</div>
            </div>
            {mockData.map((item)=><BoardItem key={item.id} {...item} />)}

        </div>
    </div>

  );
}