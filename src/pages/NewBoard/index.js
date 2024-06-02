import BoardEdit from "../../components/BoardEdit/BoardEdit";
import { Navbar } from "../../components/Navbar/Navbar";

const NewBoard = () => {
    return(
        <div>
            <Navbar />
            <BoardEdit name="생성"/>
        </div>
    )
}

export default NewBoard;