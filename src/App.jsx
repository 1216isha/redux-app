
import './App.css'
import JsonApi from './Components/api/JsonApi'
import UserData from './Components/formData/UserData'
import UserWelcome from './Components/formData/UserWelcome'


function App() {


  return (
    <div>

      <UserWelcome />
      <UserData />

      <JsonApi />
    </div>
  )
}

export default App
