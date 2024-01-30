import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Card from "./components/Card"
function App() {
  

  /* 
  Entry Ponit - App.jsx
  
  */ 
  return (
    <>
    
     <Navbar/>
     <div className="cards">
                <Card title="card 1" description="This is card 1"/>
                <Card title="card 2" description="This is card 2" />
                <Card title="card 3" description="This is card 3" />
                <Card title="card 4" description="This is card 4" />
     </div>
     
     <Footer/>
    </>
  )
}

export default App
