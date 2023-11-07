import { useEffect } from "react"
import { useState } from "react"
import NewsItem from "./NewsItem"


const NewsBand = ({category}) => {
    const [articles, setArticles] = useState([])
    useEffect(()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`
        fetch(url)
        .then(res => res.json())
        .then(data => setArticles(data.articles))
    }, [category])
  return (
    <div className="my-3 ">
        <h2 className="text-center">latest <span className="badge bg-danger ">News</span></h2>
        <div className="d-flex g-3 flex-wrap justify-content-center align-items-center">
        {
            articles.map((item, i)=> (
                <NewsItem key= {i} item={item}/>
            ))
        }
        </div>
       
    </div>
  )
}

export default NewsBand