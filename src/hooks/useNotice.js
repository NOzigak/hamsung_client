import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const useNotice = (id) => {
    const data = useSelector(state => state.Notices);
    const [NoticeItem, setNoticeItem] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const NoticeItem = data.find(
            (item) => String(item.id) === String(id)
        );
        if (!NoticeItem) {
            window.alert("잘못된 요청입니다.");
            navigate("/home", { replace: true });
        } else {
            setNoticeItem(NoticeItem);
        }
    }, [id, data, navigate]);

    return NoticeItem;
};

export default useNotice;
