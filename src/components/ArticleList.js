import React from "react";
import Article from "./Article"


function ArticleList({articles}){

    const allArticles = articles.map( (article) => {
        return(
        <Article key = {article.id} title = {article.title} date = {article.date} preview = {article.preview}/>
    )})



    return(
        <main>
            {allArticles}
        </main>
    )
}

export default ArticleList


