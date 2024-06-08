import {Navbar} from "../../components/Navbar/Navbar";
import NoticeEdit from "../../components/NoticeEdit/NoticeEdit"; 

const NoticeEditPage = () => {
    return(
        <div>
            <Navbar />
            <NoticeEdit name="작성"/>
        </div>
    )
}

export default NoticeEditPage;