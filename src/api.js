import { supabase } from './config/db';


export const fetchPostData = async (tableName) => {
    try {
        const { data, error } = await supabase
            .from(tableName)
            .select('*');
        if (error) throw error;
        return data;
    } catch (err) {
        console.error('Error fetching post data:', err);
    }
};
