import React from "react";
import NewsCard from "./NewsCard";

const BASE_URL = "https://hn.algolia.com/api/v1/search?query="

 class News extends React.Component{

    constructor(){
        super();
        this.state = {
            inputValue:"",
            news:[]
        }
    }
    
    handlerInputValue = (e) =>{
        const {value} = e.target
        this.setState({
            inputValue:value
        })
    }

   handlerSearch = async() =>{
    const req = await fetch(`${BASE_URL}${this.state.inputValue}`);
    const data = await req.json()
   this.setState({
    news:data.hits,
    inputValue:""
})
   }

    render(){
        const {state,handlerInputValue,handlerSearch} = this;
        const {inputValue,news} = state;
        return(
            <>
            <input type="text" name="search" onChange={handlerInputValue} value={inputValue}/>
            <button onClick={handlerSearch}>Submit</button>
            <ul>
                {news.map( newNewsData => {return <NewsCard newNewsData={newNewsData} key={newNewsData.story_id}/>})}
            </ul>
            </>
        )
    }
}

export default News