import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UploadButton from './components/Upload';

const Banner = ({ title }) => (
  <h1 class='Banner'>
    {title}
  </h1>
);

function App() {
  return (
    <>
      <div className='App'>
        <Banner title={'Data by Daylight'} />
        <UploadButton/>
      </div>
    </>
  );
}

export default App;
