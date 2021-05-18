import axios from 'axios';
const API_URL = "http://localhost:8080/api/auth";

class AuthApi{
    login(username, password) {
        return axios
          .post(API_URL + "/signin", { username, password })
          .then((response) => {
            if (response.data.accessToken) {
              localStorage.setItem("user", JSON.stringify(response.data));
            }
    
            return response.data;
          });
      }
      logout() {
        localStorage.removeItem("user");
      }    
    register(username,password,email){
        return axios.post(API_URL + "/signup",{
            username,
            password,
            email
        });
    }

}
export default new AuthApi();