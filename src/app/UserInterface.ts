export interface User {
  email: string
  logged: boolean
}
export interface UserResponse {
  user: User
}

export interface UserRequest {
  user: {
    email: string,
    password: string,
    passwordConfirmation: string
  }
}

export interface UserLogin {
  email: string,
  password: string,
}

