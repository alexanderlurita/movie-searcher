import Header from './components/Header'
import Main from './components/Main'
import MoviesProvider from './contexts/movies'
import './App.css'

export default function App() {
  return (
    <MoviesProvider>
      <Header />
      <Main />
    </MoviesProvider>
  )
}
