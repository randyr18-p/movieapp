import {Route, Routes} from 'react-router-dom';
import Movie from '../Components/Movie'
import Series from '../Components/Series'
import Home from '../Components/Home'


const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/series" element={<Series />} />
      </Routes>
    </>
  )
}

export default AppRouter