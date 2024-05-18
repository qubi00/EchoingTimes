import './App.css'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import Table from './components/table/table'

function App() {
  return(
    <>
      <Navbar/>
      <Table/>
      <div className = 'separator'></div>
      <Footer/>
    </>
)}
export default App
