import { mapReview } from "./mapReview";

export function findMaxReview(data) {
    const reviewCnts = {
        noLate: data.noLate || 0,
        faithful: data.faithful || 0,
        kind: data.kind || 0,
        unkind: data.unkind || 0,
        fastAnswer: data.fastAnswer || 0,
        slowAnswer: data.slowAnswer || 0,
        passive: data.passive || 0,
        absent: data.absent || 0
    };

    let maxReviewType = "";
    let maxReviewCount = -Infinity;

    for (const key in reviewCnts) {
        if (reviewCnts.hasOwnProperty(key)) {
            if (reviewCnts[key] > maxReviewCount) {
                maxReviewCount = reviewCnts[key];
                maxReviewType = key;
            }
        }
    }

    if (maxReviewCount === 0) {
        return "리뷰가 없습니다.";
    }

    return {
        review_type: mapReview(maxReviewType),
        count: maxReviewCount
    } // 한국어로 매핑된 최고 점수 리뷰 타입 반환
}