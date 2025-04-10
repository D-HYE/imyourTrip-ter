import supabase  from '../config/db';


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
        console.log("data 👉", data);   
        return data;
        
    } catch (err) {
        console.error('Error fetching post data:', err);
    }

};
