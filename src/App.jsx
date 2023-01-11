//example how import the default exports
// here I can change the name of the component on the import
// example
// import PostTest from './Post.jsx'
// it will work fine
import Post from './Post.jsx'

// example how import with named export
// here I must use the same name as the component was exported
import {Button} from "./Button.jsx";
import {Header} from "./componets/Header";
import './global.css'

function App() {
    return (<div>
        <Header/>
        <h1>Hello World</h1>

        {/*
            here I add to props to the component POST
            author and content
            to the Component access the props I will add it there
        */}
        <Post
            author="Jean Burda"
            content="sherpa"

        />

        <Post
            author="Marcus Mello"
            content="pixieset"
        />


        <Button/>


    </div>)
}

export default App


//  Default exports vs named exports


