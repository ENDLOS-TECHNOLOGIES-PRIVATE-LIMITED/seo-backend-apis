import models from "../models";
import helpers from "../helpers";


export const login = async (body) => {



  try {
   

    console.log({body});

     //Destructuring data from request
    const { email, password } = body;

    
const User: any = await models.User.find({ email });

    if (!User) {

        

          throw new Error('Invalid username or password');

    }else{

    
      const passwordCompare = await helpers.bcryptHelper.comparePassword(password, User[0].password);

      if (!passwordCompare) {
       throw new Error('Invalid username or password');
      }
    
  }
  
}
catch (error: any) {

     throw new Error('An error occurred during login');
    
  }


}