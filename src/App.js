import React from 'react';
import Counter from "./component/counter"

class App extends React.Component {

    render() {
        return (<div  style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <Counter/>
            </div>
        );
    }
}

export default App;