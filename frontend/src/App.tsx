import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import Navbar from './components/Navbar'

const App = () => {
    return (
        <div data-theme="bumblebee" className="w-full h-screen">
            <Navbar/>
            <Routes>
            
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    )
}

export default App;