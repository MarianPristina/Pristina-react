// App.js
import React from 'react';
import Intro from './component/Intro'; 
import Signin from './component/Signin';
import Home from './component/Home';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Signup from './component/Signup';
import Tamil from './component/Tamil';
import English from './component/English';
import Hindi from './component/Hindi';

function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<Intro />} />
     
      </Routes>
      <Routes>
      <Route path="/Signin" element={<Signin />} />
     </Routes>
     <Routes>
     <Route path="/Signup" element={<Signup />} />
     
      </Routes>
      <Routes>
     <Route path="/Home" element={<Home />} />
     
      </Routes>
      <Routes>
      <Route path="/Tamil" element={<Tamil />} />
     
     </Routes>
     <Routes>
      <Route path="/English" element={<English />} />
     
     </Routes>
     <Routes>
      <Route path="/Hindi" element={<Hindi />} />
     
     </Routes>
   </Router>
  );
}

export default App;
