import { findMaxReview } from "../../utils/findMaxReview";
import "./Applicant.css";
import applicant from "./../../assets/applicant.png";

const Applicant = ({nickname, review}) => {
    
    //const negativeReview = ["absent", "unkind", "passive", "slowAnswer"]
    //const positiveReview = ["noLate", "faithful", "kind", "fastAnswer"]

    const tag = findMaxReview(review);

    return (
        <div className="applicantWrapper">
            <div className="applicantName">
                <p>{nickname}</p>
            </div>
            <div className="userMaxTag">
                {tag.review_type} 
                <div className="tagImg">
                    <img src={applicant} className="applicantImg" alt=""/>
                </div>
                {tag.count}
            </div>
            <div className="addMember">
                <button className="addMemberBtn">멤버 추가</button>
            </div>
        </div>
    )
}

export default Applicant;