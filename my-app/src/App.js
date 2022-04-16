import {Routes, Route} from 'react-router-dom'
import Auth from './routes/authentication/auth.component'
import Questions from './routes/questions/questions.component'
import Total from './routes/total/total.component'

function App() {
  return (
    <Routes>
        <Route path="/"  element={<Auth />} />
        <Route index path="home" element={<Questions />} />
        <Route path="total" element={<Total />} />
    </Routes>
  );
}

export default App;
