import { UserRequest, UserLogin, UserResponse, User} from '../../app/UserInterface';
import axios from 'axios';

const COMIC_API_URL = 'http://localhost:3000';

export function createUser(params: UserRequest) {
  return new Promise<{ data: UserResponse }>((resolve) =>
    axios.post('/users', params, { withCredentials: true, baseURL: COMIC_API_URL, headers: {'Accept': 'application/json', 'Access-Control-Allow-Origin': '*'} })
      .then((response) => resolve(response))
  );
}

export function loginUser(params: UserLogin) {
  return new Promise<{ data: UserResponse }>((resolve) =>
    axios.post('/users/login', params, { withCredentials: true, baseURL: COMIC_API_URL, headers: {'Accept': 'application/json'} })
      .then((response) => resolve(response))
  );
}

export function logoutUser() {
  return new Promise<{ data: UserResponse }>((resolve) =>
    axios.get('/users/logout', { withCredentials: true, baseURL: COMIC_API_URL, headers: {'Accept': 'application/json'} })
      .then((response) => resolve(response))
  );
}
