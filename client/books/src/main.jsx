import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Update from './Pages/Update/Update';
import Books from './Pages/Books/Books';
import Add from './Pages/Add/Add';

ReactDOM.createRoot(document.getElementById('root')).render(
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Books />}/>
            <Route path="/add" element={< Add />}/>
            <Route path="/update" element={< Update />}/>
        </Routes>
      </BrowserRouter>
)
