import { Link } from 'react-router-dom';
import './App.css'

function App() {

  return (
    <div>
        <Link to={"/container-presentation"}>
            container_presentation
        </Link>
        <br/>
        <Link to={"/custom-hook"}>
            custom_hook
        </Link>
        <br/>
        <Link to={"/state-reducer"}>
            state_reducer
        </Link>
        <br/>
        <Link to={"/data-provider"}>
            data_provider
        </Link>
    </div>
  )
}

export default App
