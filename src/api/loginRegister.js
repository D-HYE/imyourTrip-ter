import supabase  from '../config/db';

export const loginRegister = async (userInfo) => {
    const { userID, userPW } = userInfo;

    const { data, error } = await supabase
      .from("userInfo")
      .select("*")
      .eq("userID", userID)
      .eq("userPW", userPW)
      .limit(1);
  
    if (error) {
      console.error("로그인 실패:", error.message);
      return { success: false, error: error.message };
    }
  
    if (!data || data.length === 0) {
        return { success: false, error: "아이디 또는 비밀번호가 일치하지 않습니다." };
    }
    
    return { success: true, data: data[0] };

};