import React from "react"
import SelectCSV from './components/SelectCSV';

const App = () => {
    return <div>
        <SelectCSV onLoadFile={(files:FileList | null) => console.log(files)}/>
        </div>
}

export default App;