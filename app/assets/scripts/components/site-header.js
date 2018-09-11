'use strict';
import React from 'react';
import {
  compose,
  getContext,
  mapProps
} from 'recompose';
import {
  Link,
  withRouter
} from 'react-router';
import c from 'classnames';
import T, {
  translate
} from './t';
import Dropdown from './dropdown';

const classForLanguage = (current, lang) => c('drop__menu-item', {'drop__menu-item--active': current === lang});

const SiteHeader = ({language, pathname}) => (
  <header className='site__header'>
    <div className='inner'> 
      <div className='site__headline'>
        <h1 className='site__logo'>
          <Link to={`/${language}`}>
            <img src='assets/graphics/layout/openroads-vn-logo-hor-neg.svg' width='736' height='106' alt='OpenRoads Vietnam logo' /><span>OpenRoads</span> 
          </Link>
        </h1>
      </div>
      <div className = 'site__title'> Cost Benefit Analyses and Prioritization </div>
      <div className = 'user'>  
      <img className = 'user_icon'  src='assets/graphics/layout/user.svg' alt='Sync icon' /> 
      <div style = {{marginTop: '2px', fontWeight: 'bold'}}>
      Tran Thi Kim Dang
      </div> 
       <img className = 'dropdown_icon' src='assets/graphics/layout/dropdown.svg' alt='Sync icon' />
       </div>
    </div>
  
    <nav className='site__nav' role='navigation'>
        {/* <Dropdown
          className='site__menu-language'
          triggerClassName='button-language'
          triggerActiveClassName='button--active'
          triggerText={language === 'en' ? 'English' : 'Tiếng Việth'}
          triggerTitle={translate(language, 'Change Language')}
          direction='down'
          alignment='center' >
          <h3 className='drop__title'><T>Select language</T></h3>
          <ul className='drop__menu drop__menu--select'>
            <li><Link to={pathname.replace(/^\/[a-z]+/, '/en')} className={classForLanguage(language, 'en')}>English</Link></li>
            <li><Link to={pathname.replace(/^\/[a-z]+/, '/vi')} className={classForLanguage(language, 'vi')}>Tiếng Việt</Link></li>
          </ul>
        </Dropdown> */}
        <ul className='site__menu-global'>
          {/* <li>
            <Link
              to={`/${language}/assets`}
              className='site__menu-global-item'
              activeClassName='site__menu-global-item--active'>
              <T>Assets</T>
            </Link>
          </li>
          <li>
            <Link
              to={`/${language}/explore`}
              className='site__menu-global-item'
              activeClassName='site__menu-global-item--active'>
              <T>Explore</T>
            </Link>
          </li>
          <li>
            <Link
              to={`/${language}/editor`}
              className='site__menu-global-item'
              activeClassName='site__menu-global-item--active'>
              <T>Editor</T>
            </Link>
          </li>
          <li>
            <Link
              to={`/${language}/tasks`}
              className='site__menu-global-item'
              activeClassName='site__menu-global-item--active'>
              <T>Tasks</T>
            </Link>
          </li>
          <li>
            <Link
              to={`/${language}/upload`}
              className='site__menu-global-item'
              activeClassName='site__menu-global-item--active'>
              <T>Upload</T>
            </Link>
          </li>
          <li>
            <Link
              to={`/${language}/faq`}
              className='site__menu-global-item'
              activeClassName='site__menu-global-item--active'>
              <T>FAQ</T>
            </Link>
          </li> */}
          <li>
            <Link
              to={`/${language}/demo`}
              className='site__menu-global-item'
              activeClassName='site__menu-global-item--active'>
              <T>Road Inventory Data</T>
            </Link>
          </li>
          <li>
            <Link
              to={`/${language}/configurations`}
              className='site__menu-global-item'
              activeClassName='site__menu-global-item--active'>
              <T>Configurations</T>
            </Link>
          </li>
          <li>
            <Link
              to={`/${language}/prioritized`}
              className='site__menu-global-item'
              activeClassName='site__menu-global-item--active'>
              <T>Road Work Prioritization</T>
            </Link>
          </li>
          <li>
            <Link
              to={`/${language}/c`}
              className='site__menu-global-item'
              activeClassName='site__menu-global-item--active'>
              <T>G-MTEP</T>
            </Link>
          </li>
        </ul>
      </nav>
  </header>
);


SiteHeader.propTypes = {
  language: React.PropTypes.string.isRequired,
  pathname: React.PropTypes.string.isRequired
};


module.exports = compose(
  getContext({ language: React.PropTypes.string }),
  withRouter,
  mapProps(({ language, router: { location: { pathname } } }) => ({
    language,
    pathname
  }))
)(SiteHeader);
