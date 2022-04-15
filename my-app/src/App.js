import {Routes, Route} from 'react-router-dom'
import Login from './routes/login/login.component'


function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index path="auth" element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;
