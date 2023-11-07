import image from '../assets/images.jpeg'

const NewsItem = ({item}) => {
  return (
    <div className="card m-3 p-2 bg-dark text-light d-inline-block" style={{maxWidth: "345px", height: "500px"}}>
    <img src={item.urlToImage? item.urlToImage : image} style={{height: "200px", width: "325px"}} className="card-img-top " alt={item.title} />
    <div className="card-body">
      <h5 className="card-title">{item.title?item.title.slice(0, 30) : "title news"}</h5>
      <p className="card-text">{item.description? item.description.slice(0.60): item.title}...</p>
      <a href={item.url} className="btn btn-primary">read more</a>
    </div>
  </div>
  )
}

export default NewsItem