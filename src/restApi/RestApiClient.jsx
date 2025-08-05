import AxisoWrapper from "@/restApi/AxiosWrapper"; // Assuming you have an Axios wrapper set up

export default class RestApiClient {

    static async login(userId, password) {
        try {
            const response = await AxisoWrapper.post('/login', { userId, password });
            return response;
        } catch (error) {
            console.error("Login failed:", error);
            throw error;
        }
    }
}