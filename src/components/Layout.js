import { Outlet, Link } from "react-router-dom";
import '../css/Layout.css';

const Layout = () => {
  return (
    <>
    <h1>Automation Website</h1>
      <nav>
        <ol>
          <li>
            <Link to="/disabled"><p>Disabled - Disabled button</p></Link>
          </li>
          <li>
            <Link to="/changing"><p>Changing - Class name changing on every time page reloads</p></Link>
          </li>
          <li>
            <Link to="/hidden"><p>Hidden - Hide and show button every 2 seconds and class name changes everytime button reappears</p></Link>
          </li>
          <li>
            <Link to="/bouncing"><p>Bouncing Ball - Check the bouncing of the ball</p></Link>
          </li>
          <li>
            <Link to="/mode"><p>Theme - Change theme</p></Link>
          </li>
          <li>
            <Link to="/iframe"><p>Iframe - Nested IFrames</p></Link>
          </li>
          <li>
            <Link to="/svg"><p>SVG - Svg Element</p></Link>
          </li>
          <li>
            <Link to="/alerts"><p>Alerts - Confirmation, Prompt alert</p></Link>
          </li>
          <li>
            <Link to="/fileUpload"><p>File Upload</p></Link>
          </li>
        </ol>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;