export async function HomeLoader() {
    try {
        //throw new Error("HomeLoader is not implemented yet");

    }catch (error) {
        console.error("Error loading home page:", error);
        throw error; // 에러를 던져서 라우터가 에러 핸들러로 전달하도록 함
    }
}