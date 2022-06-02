import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UploadButton from './components/Upload';
import SignInButton from './components/SignIn';
import StackedBarChart from './components/StackedBarChart';
import data from './data/survivorData';
import colors from './data/colors';
import keys from './data/keys';
import "./styles/styles.css";
import { useEffect, useState } from 'react';
import { useData, useUserState } from './utilities/firebase';

const Banner = ({ title }) => (
  <h1 class='Banner'>
    {title}
  </h1>
);

function App() {
  return (
    <>
      <div className='App'>
        
        <div className='Login'>
          <SignInButton/>
        </div>

        <div className='Content'>
          <Banner title={'Data by Daylight'} />
          <UploadButton/>
        </div>

        <div className='Data'>
          <StackedBarChart colors={colors} data={data} keys={keys} />
        </div>
      </div>
    </>
  );
}

export default App;