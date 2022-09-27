import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Components from "./pages/Components"
import { Form } from "./pages/Form"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="form" element={<Form />} />
            <Route path="components" element={<Components />} />
            <Route path="/" element={<Components />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
