import supabase  from '../config/db';
// 하나로뭉치기 crud는 안됐음

export const fetchPostData = async (tableName) => {
    try {
        const { data, error } = await supabase
            .from(tableName)
            .select(`
                *,
                userInfo:userNum (
                  userID,
                  userNickname
                )
              `)
        if (error) throw error; 
        return data;
        
    } catch (err) {
        console.error('Error fetching post data:', err);
    }

};

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

export const signUpRegister = async (userInfo) => {
    const { error } = await supabase
      .from("userInfo")
      .insert({
        userID: userInfo.userID,
        userPW: userInfo.userPW,
        userName: userInfo.userName,
        userPhone: userInfo.userPhone,
        userEmail: userInfo.userEmail,
        userNickname: userInfo.userNickname,
        marketingAgree: userInfo.marketingAgree,
        locationAgree: userInfo.locationAgree
      });
  
    return error;
  };