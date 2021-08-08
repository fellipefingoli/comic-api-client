import { UserRequest, UserLogin, User} from '../../app/UserInterface';

export function createUser(params: UserRequest) {
  return new Promise<{ data: User }>((resolve) =>
    setTimeout(() => resolve({
      data: {
        email: 'fellipe.fingoli@gmail.com',
        logged: true
      }}), 2000)
  );
}

export function loginUser(params: UserLogin) {
  return new Promise<{ data: User }>((resolve) =>
    setTimeout(() => resolve({
      data: {
        email: 'fellipe.fingoli@gmail.com',
        logged: true
      }}), 2000)
  );
}

export function logoutUser(params: User) {
  return new Promise<{ data: User }>((resolve) =>
    setTimeout(() => resolve({
      data: {
        email: 'fellipe.fingoli@gmail.com',
        logged: false
      }}), 2000)
  );
}
