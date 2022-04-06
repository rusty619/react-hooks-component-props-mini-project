const Article = ({title,date,preview}) => {

    function isDateEmpty(){
        if(date===undefined){
            return(<small>January 1, 1970</small>)
        } else{
            return(<small>{date}</small>)
        }
    }

    return(
      <div>
          <article>
              <h3>{title}</h3>
              {isDateEmpty()}
              <p>{preview}</p>
          </article>
      </div>
      )
}
export default Article;