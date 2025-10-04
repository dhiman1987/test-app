
import './App.css'
import Counter from './components/counter/Counter'
import Header from './components/header/Header'
import Notification from './components/notification/Notification'

function App() {
  return ( 
    <>
    <Header></Header>
    <div className="container">
        <Counter></Counter>
        <Notification></Notification>
      </div>
    </>     

  )
}

export default App
