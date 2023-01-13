import { HomePage,ProductPage } from "./pages"
import {Header, Footer} from "./components/index"
import {Routes,Route} from 'react-router-dom'
import AppContext from "./utils/context"

function App() {

  return (
    <div >
      <AppContext>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path='/Product/:id' element={<ProductPage/>}></Route>
      </Routes>
      <Footer/>
    </AppContext>
    </div>
  )
}

export default App
