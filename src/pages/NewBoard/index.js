
import { useDispatch } from "react-redux";
import { Navbar } from "../../components/Navbar/Navbar";
import BoardEdit from "../../components/BoardEdit/BoardEdit";
import { createBoard } from "../../actions/boardList";
import { useNavigate } from "react-router-dom";

const NewBoard = () => {

    const nav = useNavigate();
    const dispatch = useDispatch();
    const onClickSubmitBtn = (input) => {
        console.log("create this : ", input)
        dispatch(createBoard(input));
        nav("/home", {replace : true});
    }

    return(
        <div>
            <Navbar />
            <BoardEdit name="생성" onSubmit={onClickSubmitBtn}/>
        </div>
    )
}

export default NewBoard;