import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/Upload'

const Banner = ({ title }) => (
  <h1 className='banner'>{title}</h1>
);

function App() {
  return (
    <>
      <Banner title={'Data by Daylight'} />
      <div className='App'>
      </div>
        <br />
        <br />
    </>
  );
}

export default App;
