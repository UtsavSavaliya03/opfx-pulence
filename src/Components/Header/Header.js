import React, { useState } from 'react';
import './Header.scss';
import { Nav, NavDropdown, Navbar, } from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router-dom';
import { NavbarData } from './NavData.js'

export default function Header() {

  const location = useLocation();
  const navigate = useNavigate();
  const [openSidebar, setOpenSidebar] = useState(false);

  const isActiveUrl = (path) => {
    let active = false;

    path?.map((item) => {
      if (item == location?.pathname) {
        active = true;
      }
    })
    return active;
  }

  return (
    <div className='header-container'>
      <div className='header-top'>
        <div className='side-padding'>
          <div className='d-flex justify-content-between align-items-center'>
            <div className='d-flex align-items-center'>
              <div className='cursor-pointer d-flex align-items-center'>
                <img src='Assets/Images/question-mark-icon.svg' alt='icon' />
                <p className='m-0 ml-2'>Help Center</p>
              </div>
              <div className='cursor-pointer ml-2 ml-md-4'>
                <p className='m-0 ml-2'>Charity</p>
              </div>
            </div>
            <div>
              <img height={24} width={24} className='mx-1 mx-md-4 cursor-pointer' src='Assets/Images/instagram.svg' alt='icon' />
              <img height={24} width={24} className='mx-1 mx-md-4 cursor-pointer' src='Assets/Images/linkedin.svg' alt='icon' />
              <img height={24} width={24} className='mx-1 mx-md-4 cursor-pointer' src='Assets/Images/facebook.svg' alt='icon' />
              <img height={20} width={20} className='mx-1 mx-md-4 cursor-pointer' src='Assets/Images/twitter-x.svg' alt='icon' />
            </div>
          </div>
        </div>
      </div>
      <div className='header-main'>
        <div className='side-padding header-wrapper py-3'>
          <div className='d-flex justify-content-between'>
            <img  onClick={() => navigate('/')} className='cursor-pointer' src='Assets/Logo/Logo.svg' alt='icon' />
            <div className='bar-icon' onClick={() => setOpenSidebar(!openSidebar)}>
              ≡
            </div>
          </div>
          <div>
            <Navbar className='main-navbar p-0' collapseOnSelect>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  {
                    NavbarData?.map((nav, index) => (
                      nav?.children ? (
                        <div className={`mx-2 mx-lg-3 d-flex ${isActiveUrl(nav?.activeUrl) ? 'active-nav' : null}`}>
                          <NavDropdown key={index} title={nav?.title} id="basic-nav-dropdown">
                            {
                              nav?.children?.map((child, index) => (
                                <NavDropdown.Item
                                  key={index}
                                  eventKey={child?.title + '-' + index}
                                  onClick={() => navigate(child?.url)}
                                >
                                  {child?.title}
                                </NavDropdown.Item>
                              ))
                            }
                          </NavDropdown>
                          <div className='active-dot d-none'>●</div>
                        </div>
                      ) : (
                        <div className={`mx-2 mx-lg-3 d-flex ${isActiveUrl(nav?.activeUrl) ? 'active-nav' : null}`}>
                          <Nav.Link
                            key={index}
                            eventKey={nav?.title + '-' + index}
                            onClick={() => navigate(nav?.url)}
                          >
                            {nav?.title}
                          </Nav.Link>
                          <div className='active-dot d-none'>●</div>
                        </div>
                      )
                    ))
                  }
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
          <div className='login-controls'>
            <button className='btn-blue mr-3' onClick={() => navigate('/')}>Login</button>
            <button className='btn-blue-bg' onClick={() => navigate('/openLiveAccount')}>Open Account</button>
          </div>
        </div>
      </div>
      {
        openSidebar && (
          <div className='mobi-sidebar d-flex'>
            <div className='nav-drawwer'>
              <div className='text-right my-3 mx-2'>
                <button className='btn-close' onClick={() => setOpenSidebar(!openSidebar)}>✖</button>
              </div>
              {
                NavbarData?.map((nav, index) => (
                  nav?.children ? (
                    <NavDropdown key={index} title={nav?.title} id="basic-nav-dropdown" className='mx-3'>
                      {
                        nav?.children?.map((child, index) => (
                          <NavDropdown.Item
                            key={index}
                            eventKey={child?.title + '-' + index}
                            onClick={() => navigate(child?.url)}
                          >
                            {child?.title}
                          </NavDropdown.Item>
                        ))
                      }
                    </NavDropdown>
                  ) : (
                    <Nav.Link
                      className='mx-3'
                      key={index}
                      eventKey={nav?.title + '-' + index}
                      onClick={() => navigate(nav?.url)}
                    >
                      {nav?.title}
                    </Nav.Link>
                  )
                ))
              }
            </div>
          </div>
        )
      }
    </div>
  )
}
