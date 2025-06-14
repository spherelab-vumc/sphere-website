
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ResearchPage from './pages/ResearchPage/ResearchPage';
import NewsPage from './pages/NewsPage/NewsPage';
import FeaturedPage from './pages/FeaturedPage/FeaturedPage';
import AboutUsPage from './pages/AboutUsPage/AboutUsPage';
import PublicationsPage from './pages/PublicationsPage/PublicationsPage';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import AlumniPage from './pages/AlumniPage/AlumniPage';

function App() {

  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      <Navbar/>
      <main>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/research' element={<ResearchPage/>}/>
          <Route path='/news' element={<NewsPage/>}/>
          <Route path='/featured' element={<FeaturedPage/>}/>
          <Route path='/about-us' element={<AboutUsPage/>}/>
          <Route path='/publications' element={<PublicationsPage/>}/>
          <Route path='/about-us/alumni' element={<AlumniPage/>}/>
        </Routes>
      </main>
      
      <Footer/>
    </div>
    </BrowserRouter>
  )
}

export default App
