import supabase  from '../config/db';
// 하나로뭉치기 crud는 안됐음

export const fetchPostData = async (tableName) => {
    try {
        const { data, error } = await supabase
            .from(tableName)
            .select(`
                *,
                user_info:user_num (
                  user_id,
                  user_nickname
                )
              `)
        if (error) throw error; 
        return data;
        
    } catch (err) {
        console.error('Error fetching post data:', err);
    }

};

export const loginRegister = async (user_info) => {
    const { user_id, user_pw } = user_info;

    const { data, error } = await supabase
      .from("user_info")
      .select("*")
      .eq("user_id", user_id)
      .eq("user_pw", user_pw)
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

export const signUpRegister = async (user_info) => {
    const { error } = await supabase
      .from("user_info")
      .insert({
        user_id: user_info.user_id,
        user_pw: user_info.user_pw,
        user_name: user_info.user_name,
        user_phone: user_info.user_phone,
        user_email: user_info.user_email,
        user_nickname: user_info.user_nickname,
        marketing_agree: user_info.marketing_agree,
        location_agree: user_info.location_agree,
        privacy_agree: user_info.privacy_agree
      });
  
    return error;
  };