const getReplies = (comments, commentId) => {
    // 주어진 댓글의 id를 가진 댓글을 찾습니다.
    const comment = comments.find(comment => comment.id === commentId);

    if (!comment || !comment.replies) {
        return []; // 해당 댓글이나 대댓글이 없을 경우 빈 배열을 반환합니다.
    }

    // 주어진 댓글의 대댓글을 필터링하고 최신 대댓글이 먼저 오도록 정렬합니다.
    return comment.replies.sort((a, b) => new Date(b.insertDate).getTime() - new Date(a.insertDate).getTime());
};

export default getReplies;