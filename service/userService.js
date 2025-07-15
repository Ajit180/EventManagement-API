import User from "../model/user.js";

export const CreateUserService = async (data) => {
  try {
    const name = data.name;
    const email = data.email;

    const createuser = await User.create({name,email});
    return createuser;
  } catch (error) {
    console.log("Error while creating the user",error);
    throw error;
  }
};
