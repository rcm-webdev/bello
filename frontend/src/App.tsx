import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Campaign from './pages/Campaign'

const App = () => {
    return (
        <div data-theme="bumblebee" className="w-full h-screen">
            <Navbar/>
            <Routes>
            
                <Route path="/" element={<Home />} />
                <Route path="/campaign" element={<Campaign />} />
            </Routes>
        </div>
    )
}

export default App;