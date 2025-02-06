
function CoreConcept({image, title, description}){ //tambien se puede con props.image... y tambien con const {image,title,description} = props
    return (
        <li>
            <img src={image} alt={title}/>
            <h2>{title}</h2>
            <p>{description}</p>
        </li>
    )
}

export default CoreConcept;