import './css/App.css'
import Changing from './components/Changing.js';
import Disabled from './components/Disabled.js';
import Hidden from './components/Hidden.js';
import Layout from './components/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Bouncing from './components/Bouncing';
import Mode from './components/Mode';
import Iframe from './components/Iframe';
import Svg from './components/Svg';
import Alerts from './components/Alerts';
import Login from './components/Login';
import FileUpload from './components/FileUpload';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
          <Route path="layout" element={<Layout />} />
          <Route path="disabled" element={<Disabled />} />
          <Route path="changing" element={<Changing />} />
          <Route path="hidden" element={<Hidden />} />
          <Route path="bouncing" element = {<Bouncing />} />
          <Route path="mode" element = {<Mode />} />
          <Route path="iframe" element = {<Iframe />} />
          <Route path="svg" element = {<Svg />} />
          <Route path="alerts" element = {<Alerts />} />
          <Route path="fileUpload" element = {<FileUpload />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
