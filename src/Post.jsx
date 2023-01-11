/*
I add props as a parameter of post because I'm passing the properties to it
so when I do a console log I can see the {author: 'Jean Burda', content: 'pixieset'}
* */

function Post(props) {
    console.log(props)
    return (
        <div>
            <h1>Post</h1>
            <strong>{props.author}</strong>
            <p>{props.content}</p>
        </div>
    )
}

export default Post