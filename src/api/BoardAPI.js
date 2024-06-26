import client from "./client"

export const getBoards = async () => {
    try{
        const response = await client.get("/recruits");
        return response.data;
    } catch (error) {
        console.log("게시물 목록을 가져오는데 실패했습니다.", error)
        throw error;
    }
}

export const getTargetBoard = async (id) => {
    try {
        const response = await client.get(`/recruits/${id}`);
        return response.data;
    } catch (error) {
        console.log("게시물 상세정보를 불러오는데 실패했습니다.", error);
        throw error;
    }
}

export const updateBoard = async (id, inputData) => {
    try{
        const response = await client.put(`/recruits/${id}`, inputData);
        return response.data;
    } catch (error) {
        console.log("게시물을 수정하는데 실패하였습니다.", error);
        throw error;
    }
}