import axios from "axios";


const client = axios.create({
    //baseURL: process.env.SERVER_BASE_URL // 배포 url은 env로 관리
    //headers: {"Content-Type": "application/json"}
});

// 인터셉터 설정
client.interceptors.request.use(
    response => {
        // 요청 성공 시 특정 작업 수행
        const token = localStorage.getItem("token");
        if (token) {
            response.headers.Authorization = `Bearer ${token}`;
        }
        return response;
    },
    error => {
        // 요청 실패 시 특정 작업 수행
        return Promise.reject(error);
    }
)

export default client;