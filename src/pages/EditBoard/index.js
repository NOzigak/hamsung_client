import { useNavigate, useParams } from "react-router-dom";
import BoardEdit from "../../components/BoardEdit/BoardEdit";
import { Navbar } from "../../components/Navbar/Navbar";
import useBoard from "../../hooks/useBoard";
import { useDispatch } from "react-redux";
import { updateBoard } from "../../actions/boardList";

const EditBoard = () => {
    const params = useParams();
    const nav = useNavigate();
    const curBoardItem = useBoard(params.id);
    const dispatch = useDispatch();
    
    const onSubmit = (input) => {
        if(window.confirm("내용을 수정할까요?")){
            dispatch(updateBoard(input));
            nav('/home', {replace: true});
        }
    }

    return(
        <div>
            <Navbar />
            <BoardEdit initData={curBoardItem} onSubmit={onSubmit} name="수정"/>
        </div>
    )
}

export default EditBoard;