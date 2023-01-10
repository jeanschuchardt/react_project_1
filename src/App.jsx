//example how import the default exports
// here I can change the name of the component on the import
// example
// import PostTest from './Post.jsx'
// it will work fine
import Post from './Post.jsx'

// example how import with named export
// here I must use the same name as the component was exported
import {Button} from "./Button.jsx";

function App() {
    return (<div>
        <h1>Hello World</h1>

        <Post/>
        <Button/>


    </div>)
}

export default App


//  Default exports vs named exports


