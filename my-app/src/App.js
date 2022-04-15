import {Routes, Route} from 'react-router-dom'
import Auth from './routes/authentication/auth.component'


function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index path="auth" element={<Auth />} />
      </Route>
    </Routes>
  );
}

export default App;
