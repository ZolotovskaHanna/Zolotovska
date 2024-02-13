import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from "../components/Header/ihdex";
import Index from '../pages/Index';
import Info from '../pages/Info';
import { store } from "../../shared/store";
import routers from '../../shared/routers'

function App() {
  
  return (
     <Provider store={store}>
            <BrowserRouter>
                <div>
                    <Header/>
                    <Routes>
                        <Route path={routers.main} element={<Index/>} />
                        <Route path={routers.info} element={<Info/>} />
                    </Routes>
                </div>
            </BrowserRouter>
    </Provider>
  )
}

export default App

