export interface UserT {
    email: string;
    password: string;
  }
  
  export interface UserContextT {
    user: UserT;
    LoginUser: (user: UserT) => void;
  }