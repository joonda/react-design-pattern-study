import { Link } from 'react-router-dom';
import './App.css'

function App() {

  return (
    <div>
        <Link to={"/container-presentation"}>
            container_presentation
        </Link>
        <Link to={"/custom-hook"}>
            custom_hook
        </Link>
    </div>
  )
}

export default App
