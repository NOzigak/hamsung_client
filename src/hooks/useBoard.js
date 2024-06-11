import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const useBoard = (id) => {
    const data = useSelector(state => state.boards);
    const [curBoardItem, setCurBoardItem] = useState();
    const nav = useNavigate();

    useEffect(() => {
        const currentBoardItem = data.find(
            (item) => String(item.id) === String(id)
        ) // 모든 게시물 중 params의 id 값과 일치하는 값 반환
        if(!currentBoardItem){
            window.alert("잘못된 요청입니다.")
            nav("/home", {replace: true});
        }
        setCurBoardItem(currentBoardItem);
    }, [id, data]);
    console.log("조회된 게시물 : ", curBoardItem);
    return curBoardItem;
};

export default useBoard;