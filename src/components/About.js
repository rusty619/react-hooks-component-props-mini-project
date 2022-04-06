const About = ({image, text}) => {

    function isImage(){
        if(image === image){
            return( <img src={`${image}`} alt='blog logo'/>)
        } else if(image === undefined){
            return(<img src={`https://via.placeholder.com/215`} alt='blog logo'/>)
        }
    }

    return(
    <div>
     <aside>
        {isImage()}
        <p>{text}</p>
     </aside>
    </div>
    )
}

export default About