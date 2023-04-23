import './nav.scss'
import { SlMenu, SlHome, SlUser, SlPhone, SlBriefcase, SlEyeglass, SlCloudDownload } from 'react-icons/sl'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="nav flex-wrapper">
      <div className="item icon-wrapper flex-wrapper">
        <SlMenu />
      </div>
      <div className="item flex-wrapper icons">
        <div className="item icon-wrapper">
          <NavLink to="/">
            <SlHome />
          </NavLink>
        </div>
        <div className="item icon-wrapper">
          <NavLink to="/about">
            <SlUser />
          </NavLink>
        </div>
        <div className="item icon-wrapper">
          <NavLink to="/work">
            <SlBriefcase />
          </NavLink>
        </div>
        <div className="item icon-wrapper">
          <NavLink to="/portfolio">
            <SlEyeglass />
          </NavLink>
        </div>
        <div className="item icon-wrapper">
          <a href="/">
            <SlPhone />
          </a>
        </div>
      </div>
      <div className="item icon-wrapper flex-wrapper">
        <a href="/">
          <SlCloudDownload />
        </a>
      </div>
    </nav>
  )
}

export default Nav