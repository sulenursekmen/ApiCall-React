import axios from 'axios';
const searchImages =async (term)=>{
    const response= await axios.get('https://api.unsplash.com/search/photos',{
      headers:{
        Authorization: 'Client-ID HOFcUsOniu1jBDQGrN-PTfue76Ab3p3apLl1WIfCAvM'
      },
      params:{
        query:term
      }
     })
     debugger;
     return response.data.results;
  }

  export default searchImages;