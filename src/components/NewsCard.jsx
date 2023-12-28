const NewsCard = ({newNewsData}) =>{
  
    const {title = "Tittle not found",author, url} = newNewsData
    return (
        <li>
            <a href={url} target="_blank" rel="noreferrer" >{title}</a><br/>
            <span>Author: {author ?? "Author not found"}</span>
        </li>
    )
}

export default NewsCard