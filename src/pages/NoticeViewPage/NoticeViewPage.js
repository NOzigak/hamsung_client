import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import NoticeBtn from "../../components/BoardBtn/BoardBtn";
import { Navbar } from "../../components/Navbar/Navbar";
import Viewer from "../../components/Viewer/Viewer";
import "../../pages/NoticeViewPage/NoticeViewPage.css";
import useNotice from "../../hooks/useNotice";
import { useDispatch } from "react-redux";
import { deleteNotice } from "../../actions/noticeList";

const NoticeViewPage = () => {
    const params = useParams();
    const nav = useNavigate();
    const NoticeItem = useNotice(params.id);
    const dispatch = useDispatch();

    if (!NoticeItem) {
        return <div>데이터 로딩중...</div>;
    }
    const onClickDelete = () => {
        if (
            window.confirm("게시물을 정말 삭제할까요? 복구되지 않습니다!")
        ){
            dispatch(deleteNotice(params.id));
            nav('/home', {replace: true});
        }
    }

    return (
        <div>
            <Navbar />
            <div className="detailWrapper">
                <div className="detailTitle">
                    {NoticeItem.title}
                </div>

                <div>
                    <Viewer
                        leader = {NoticeItem.writer}
                        created_at = {NoticeItem.created_at}
                        description = {NoticeItem.description}
                    />
                </div>
                {NoticeItem.writer==="노성균" ? 
                    <div className="writeBtn">
                        <NoticeBtn title="수정하기" onClick={()=>nav(`/editNotice/${params.id}`)}/>
                        <NoticeBtn title="삭제하기" onClick={onClickDelete}/>
                    </div> 
                    :  null                            
                }
            </div>
        </div>
    );
}

export default NoticeViewPage;
