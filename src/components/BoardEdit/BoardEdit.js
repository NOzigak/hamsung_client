import { useEffect, useState } from "react";
import "./BoardEdit.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createBoard } from "../../actions/boardList";

export default function BoardEdit({name}){

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
       //console.log(inputData)
    },[inputData])

    const handleinputData = (e) => {
        const {name, value} = e.target
        setInputData({
            ...inputData,
            [name] : value
        })
    }

    const cancleEdit = () => {
        nav("/home")
    }

    // redux create 액션을 디스패치를 통해 리듀서에 전달.
    const dispatch = useDispatch();
    const onClickSubmitBtn = () => {
        console.log(inputData);
        dispatch(createBoard(inputData));
        nav("/home", {replace : true});
    }

    return (
        <div className="boardWrapper">
            <div className="titleWrapper">
                <div className="boardTitle">
                    <h1>스터디 {name}하기</h1> 
                </div> 
            </div>
            <div className="boardInput">
                <div>
                    스터디명 : <input className="studyName" name="title" value={inputData.title} onChange={handleinputData}/>
                </div>
                <div>
                    스터디 인원 : <input className="capacity" name="capacity" value={inputData.capacity} type="number" onChange={handleinputData}/>
                </div>
                <div>
                    스터디 종류 : <select className="studyCategory" name="category" onChange={handleinputData} >
                        {selectList.map((item) => (
                            <option value={item} key={item}>{item}</option>
                        ))}
                </select>
                </div>
                <div>
                    스터디 장소 : <input className="place" type="text" name="place" value={inputData.place} onChange={handleinputData}/>
                </div>
                <div className="descWrapper">
                    스터디 소개 : <textarea className="description" name="description" placeholder="스터디를 설명해주세요." value={inputData.description} onChange={handleinputData}/>
                </div>   
            </div>
            <div className="btnSection">
                <button className="createBtn" onClick={onClickSubmitBtn}>생성</button>
                <button className="cancleBtn" onClick={cancleEdit}>취소</button>
            </div>
        </div>
    )
}

//스터디명, 인원, 종류, 스터디 장소, 스터디 소개 =>생성 or 취소
