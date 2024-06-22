
export function mapReview(key) {
    const mapping = {
        "noLate" : "지각하지 않아요.",
        "faithful": "성실해요.",
        "kind": "친절해요",
        "unkind": "불친절해요",
        "fastAnswer": "답변이 빨라요",
        "slowAnswer": "답변이 느려요",
        "passive": "소극적으로 참여해요",
        "absent": "결석을 자주해요",
    }

    return mapping[key] || key; //매핑 없으면 그대로 반환
}
