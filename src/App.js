import React/*, { Component }*/ from 'react';
import './css/App.css';
import DialogButtonContainer from './container/DialogButtonContainer';
import DialogPopUpContainer from './container/DialogPopUpContainer';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <DialogButtonContainer />
//         <DialogPopUpContainer />
//       </div>
//     );
//   }
// }

const App = () => {
  return (
    <div className="App">
    <DialogButtonContainer />
    <DialogPopUpContainer />
  </div>);
}

export default App;