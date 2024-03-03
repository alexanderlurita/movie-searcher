import Movies from './Movies'
import Searcher from './Searcher'

export default function Main() {
  return (
    <main className='app-main'>
      <Searcher />
      <Movies />
    </main>
  )
}
