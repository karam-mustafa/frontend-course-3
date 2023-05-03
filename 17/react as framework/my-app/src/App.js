import logo from './logo.svg';
import './App.css';
// const Test = ({onPress}) => {
//   return (
//     <h1 onClick={onPress}>Test</h1>
//   )
// }
function Test({onPress}){
  return (
    <h1 onClick={onPress}>Test</h1>
  )
}

const Name = (data) => {

  return data.firstName + ' ' + data.lastName;
}

function App() {
  const visible = false;
  const appClicked = () =>   console.log(1);

  return (
    <div className="App" >
      <header className="App-header">
        <img  src={logo} className="App-logo" alt="logo" />
        <Test onPress={appClicked} />
        {visible ? <Name firstName='karam' lastName='mustafa' />: <h1>No name available</h1>}
      </header>
    </div>
  );
}

export default App;
