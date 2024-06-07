import { useEffect, useState } from "react";
import "../BoardEdit/BoardEdit.css";
import "./NoticeEdit.css"
import { useNavigate } from "react-router-dom";

export default function NoticeEdit(props){

    const selectList = ["어학","취업", "고시", "프로그래밍", "기타"]
    const [inputData, setInputData] = useState({
        title : "",
        capacity : 1,
        category : "어학",
        place : "",
        description : "",
    })
    const nav = useNavigate();

    useEffect(()=>{
        console.log(inputData)
    },[inputData])

    const handleinputData = (e) => {
        const {name, value} = e.target
        setInputData({
            ...inputData,
            [name] : value
        })
    }

    const cancelEditNotice = () => {
        nav("/noticeList")
    }
    return (
        <div className="boardWrapper">
            <div className="titleWrapper">
                <div className="boardTitle">
                    <h1>새 공지사항 {props.name}</h1> 
                </div> 
            </div>
            <div className="boardInput">
                <div>
                    제목 : <input className="noticeName" name="title" value={inputData.title} onChange={handleinputData}/>
                </div>
                
                <div className="descWrapper">
                    내용 : <textarea className="noticeDescription" name="description" placeholder="공지사항을 작성해주세요." value={inputData.description} onChange={handleinputData}/>
                </div>   
            </div>
            <div className="btnSection">
                <button className="createBtn">생성</button>
                <button className="cancleBtn" onClick={cancelEditNotice}>취소</button>
            </div>
        </div>
    )
}