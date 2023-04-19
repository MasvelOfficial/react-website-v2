import './nav.scss'
import { SlMenu, SlUser, SlPhone, SlBriefcase, SlEyeglass, SlCloudDownload } from 'react-icons/sl'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="nav flex-wrapper">
      <div className="item icon-wrapper flex-wrapper">
        <SlMenu />
      </div>
      <div className="item flex-wrapper icons">
        <div className="item icon-wrapper active">
          <NavLink to="/about">
            <SlUser />
          </NavLink>
        </div>
        <div className="item icon-wrapper">
          <SlPhone />
        </div>
        <div className="item icon-wrapper">
          <SlBriefcase />
        </div>
        <div className="item icon-wrapper">
          <SlEyeglass />
        </div>
      </div>
      <div className="item icon-wrapper flex-wrapper">
        <SlCloudDownload />
      </div>
    </nav>
  )
}

export default Nav