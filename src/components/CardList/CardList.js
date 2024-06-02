import { PostCard } from "../PostCard/PostCard";
import "./CardList.css";

export const CardList = () => {

    const mockData = [
        {
            id : 1,
            category : "프로그래밍",
            writer : "홍길동",
            title : "랙트고",
            place : "서울",
            isRecruit : 1,
            created_at : new Date("2024-06-01").getTime(),
            view : 21,

        },
        {
            id : 2,
            category : "어학",
            writer : "아무개1",
            title : "지각하지 말자",
            place : "서울",
            isRecruit : 0,
            created_at : new Date("2024-06-02").getTime(),
            view : 44,
        },
        {
            id : 3,
            category : "고시",
            writer : "홍길동",
            title : "노지각",
            place : "서울",
            isRecruit : 1,
            created_at : new Date("2024-06-01").getTime(),
            view : 22,
        },
        {
            id : 4,
            category : "고시",
            writer : "아무개2",
            title : "인기스터디",
            place : "서울",
            isRecruit : 1,
            created_at : new Date("2024-06-01").getTime(),
            view : 100,
        },
    ]
    mockData.sort((a, b) => b.view - a.view)

    return (
        <div className="cardList">
            <div className="listWrapper">
                {mockData.slice(0, 3).map((item) => <PostCard key={item.id} {...item}/>)}
            </div>
        </div>
    )
}