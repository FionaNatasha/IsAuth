import axios from 'axios';


const Axios = axios.create({
  baseURL: `https://jsonplaceholder.typicode.com`
});

let axiosURL = {
  getPosts(count) {
 
    return Axios.get(`/posts?_page=${count}`)
      .then((result) => {return result.data })
     
  }
}

export default  axiosURL