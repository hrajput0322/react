import './App.css'
import Card from './components/card'

function App() {

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind test</h1>
      <Card source="https://photos.xgroovy.com/contents/albums/main/420x999/554000/554145/581770.jpg" heading="Card 1"/>
      <Card source="https://photos.xgroovy.com/contents/albums/main/420x999/552000/552109/578882.jpg" heading="Card 2"/>
    </>
  )
}

export default App
