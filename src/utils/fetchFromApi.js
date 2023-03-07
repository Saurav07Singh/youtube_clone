import axios from 'axios'
const Base_Url='https://youtube-v31.p.rapidapi.com'

const options = { 
  params: {
    maxResults: '50',
  },
  headers: {
    'X-RapidAPI-Key': '1f1bb15903msh8d01553bdff5450p1a0953jsnf4242e583bc8',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

  export const fetchFromApi = async (url)=>{
      const {data}= await axios.get(`${Base_Url}/${url}`,options)
      return data
  }