import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FixedSizeList as List } from 'react-window';
import AutoSizer from "react-virtualized-auto-sizer";
const Row = () => {

  for (let i = 0; i < 100; i++) {
    return (
      <div >
        Row {i}
      </div>
    )
  }
}


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div>
        <AutoSizer>
          {({ height, width }) => (
            <List
              className="List"
              height={height}
              itemCount={1000}
              itemSize={35}
              width={width}>
              {Row}
            </List>
          )}
        </AutoSizer>
      </div >
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
