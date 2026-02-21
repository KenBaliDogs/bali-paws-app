import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Dogs from './pages/Dogs'
import DogDetail from './pages/DogDetail'
import Donate from './pages/Donate'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dogs" element={<Dogs />} />
          <Route path="/dogs/:id" element={<DogDetail />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
