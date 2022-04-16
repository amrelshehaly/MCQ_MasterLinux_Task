import {Routes, Route} from 'react-router-dom'
import Auth from './routes/authentication/auth.component'
import Questions from './routes/questions/questions.component'


function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index path="auth" element={<Auth />} />
        <Route path="home" element={<Questions />} />
      </Route>
    </Routes>
  );
}

export default App;
