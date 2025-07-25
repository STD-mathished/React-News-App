
const News = ({title, description, src, url}) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2 overflow-hidden" style={{maxWidth:"345px"}}>
  <img src={src} className="card-img-top" style={{height:"200px", width:"360px"}} alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,50)}</h5>
    <p className="card-text">{description?description.slice(0,90):"There are no description provided with this article "}</p>
    <a href={url} className="btn btn-primary">Voir plus</a>
  </div>
</div>
  )
}

export default News
