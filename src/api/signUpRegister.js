import supabase from '../config/db';

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