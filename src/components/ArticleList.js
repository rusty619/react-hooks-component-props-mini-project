import Article from "./Article"
const ArticleList = ({blogData}) => {
    return(
    <div>
        <main>
           {blogData.posts.map((data) => {
               return(<Article key={data.id} title={data.title} date={data.date} preview={data.preview}/>)
           })}
           {/*<Article key={blogData.posts[0].id} title={blogData.posts[0].title} date={blogData.posts[0].date} preview={blogData.posts[0].preview}/>
           <Article key={blogData.posts[1].id} title={blogData.posts[1].title} date={blogData.posts[1].date} preview={blogData.posts[1].preview}/>
        <Article key={blogData.posts[2].id} title={blogData.posts[2].title} date={blogData.posts[2].date} preview={blogData.posts[2].preview}/>*/}
        </main>
    </div>
    )
}
export default ArticleList