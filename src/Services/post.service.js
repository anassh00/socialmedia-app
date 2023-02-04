import axios from "axios";

const API_URL = "http://localhost:8000/";

const config = {headers: { 'content-type': 'multipart/form-data' }}

class PostService {
    uploadfile(file) {
        let data = new FormData();
        console.log(file + ' ' + 'this is file pathname')
        data.append('file', file);

        return axios
          .post(API_URL + "api/media_objects",data)
          .then(response => {
            if (response.data.token) {
              localStorage.setItem("user", JSON.stringify(response.data));
            }
    
            return response.data["@id"];
          });
    }

    savePost(description,image) {
      return axios
      .post(API_URL + "posts/create", {
        description,
        image
      })
      .then(response => {
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
    }

    async getPost(){
      return axios.get(API_URL + "api/posts").then(response => {
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        console.log(response.data["hydra:member"])
        return Array.from(response.data["hydra:member"]);
      });
    }
}

export default new PostService();
