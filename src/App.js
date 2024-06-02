
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import Navbar from './components/Navbar';
import PhotoUpload from './components/PhotoUpload';
import Gallery from './components/Gallery';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="container mx-auto p-4">
        <PhotoUpload />
        <Gallery />
        <Profile />
      </main>
    </div>
  );
}

export default App;

