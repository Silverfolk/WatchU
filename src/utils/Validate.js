export const ValidateState=(email,password)=>{
    const patterne = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if(!patterne.test(email)){ //if it fails to validate it will return false then we will return a message
      return "Invalid Email Address";
    }
  
    const patternp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,}$/;
  
     if(!patternp.test(password)){
        return "Invalid Password";
     }

     return null;//both  email and password satisfies constraints 
    /*
    ^(?=.*[a-z]) requires at least one lowercase letter.
(?=.*[A-Z]) requires at least one uppercase letter.
(?=.*\d) requires at least one digit.
(?=.*[@$!%*?&]) requires at least one special character (you can customize this character set).
[A-Za-z\d@$!%*?&]{5,} ensures that the password is at least 5 characters long and only contains the specified character set.
*/

}