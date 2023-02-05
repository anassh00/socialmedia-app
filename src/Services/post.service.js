import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8000/";

const config = {headers: { 'content-type': 'multipart/form-data',"Authorization" : authHeader() }}

class PostService {
    uploadfile(file) {
        let data = new FormData();
        console.log(file + ' ' + 'this is file pathname')
        data.append('file', file);

        return axios
          .post(API_URL + "api/media_objects",data,config)
          .then(response => {
            if (response.data.token) {
              localStorage.setItem("user", JSON.stringify(response.data));
            }
            return response.data["@id"];
          });
    }

    savePost(description,image,user_id) {
      return axios
      .post(API_URL + "posts/create", {
        description,
        image,
        user_id
      },{headers: {"Authorization" : authHeader()} })
      .then(response => {
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
    }

    async getPost(){
      return axios.get(API_URL + "api/posts",{headers: {"Authorization" : authHeader()} }).then(response => {
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        console.log(response.data["hydra:member"])
        return Array.from(response.data["hydra:member"]);
      });
    }

    async getUserPosts(id){
      return axios.get(API_URL + "post/user/" + id,{headers: {"Authorization" : authHeader()} }).then(response => {
        console.log(response.data)
        return Array.from(response.data);
      });
    }
    
}

export default new PostService();
