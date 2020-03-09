/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useCallback, useState } from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";

import SearchBar from "@theme/SearchBar";
import Toggle from "@theme/Toggle";

import classnames from "classnames";

import useThemeContext from "@theme/hooks/useThemeContext";
import useHideableNavbar from "@theme/hooks/useHideableNavbar";
import useLockBodyScroll from "@theme/hooks/useLockBodyScroll";

import styles from "./styles.module.css";

function NavLink({ to, href, label, position, ...props }) {
  const toUrl = useBaseUrl(to);
  return (
    <Link
      className="navbar__item navbar__link"
      {...(href
        ? {
            target: "_blank",
            rel: "noopener noreferrer",
            href
          }
        : {
            activeClassName: "navbar__link--active",
            to: toUrl
          })}
      {...props}
    >
      {label}
    </Link>
  );
}
function Github() {
  return (
    <a
      data-v-150f9206
      href="https://github.com/ethereum/ethereum-org-website"
      target="_blank"
      rel="noopener noreferrer"
      title="Fork This Page (GitHub)"
      className="sm-hide nav-link"
    >
      <svg
        data-v-150f9206
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        aria-labelledby="github"
        role="presentation"
      >
        <title id="github" lang="en">
          github icon
        </title>{" "}
        <path d="M12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 16.42 4.87 20.17 8.84 21.5C9.34 21.58 9.5 21.27 9.5 21C9.5 20.77 9.5 20.14 9.5 19.31C6.73 19.91 6.14 17.97 6.14 17.97C5.68 16.81 5.03 16.5 5.03 16.5C4.12 15.88 5.1 15.9 5.1 15.9C6.1 15.97 6.63 16.93 6.63 16.93C7.5 18.45 8.97 18 9.54 17.76C9.63 17.11 9.89 16.67 10.17 16.42C7.95 16.17 5.62 15.31 5.62 11.5C5.62 10.39 6 9.5 6.65 8.79C6.55 8.54 6.2 7.5 6.75 6.15C6.75 6.15 7.59 5.88 9.5 7.17C10.29 6.95 11.15 6.84 12 6.84C12.85 6.84 13.71 6.95 14.5 7.17C16.41 5.88 17.25 6.15 17.25 6.15C17.8 7.5 17.45 8.54 17.35 8.79C18 9.5 18.38 10.39 18.38 11.5C18.38 15.32 16.04 16.16 13.81 16.41C14.17 16.72 14.5 17.33 14.5 18.26C14.5 19.6 14.5 20.68 14.5 21C14.5 21.27 14.66 21.59 15.17 21.5C19.14 20.16 22 16.42 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2Z" />
      </svg>
    </a>
  );
}

function Navbar() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  const { baseUrl, themeConfig = {} } = siteConfig;
  const { navbar = {}, disableDarkMode = false } = themeConfig;
  const { title, logo = {}, links = [], hideOnScroll = false } = navbar;

  const [sidebarShown, setSidebarShown] = useState(false);
  const [isSearchBarExpanded, setIsSearchBarExpanded] = useState(false);

  const { isDarkTheme, setLightTheme, setDarkTheme } = useThemeContext();
  const { navbarRef, isNavbarVisible } = useHideableNavbar(hideOnScroll);

  useLockBodyScroll(sidebarShown);

  const showSidebar = useCallback(() => {
    setSidebarShown(true);
  }, [setSidebarShown]);
  const hideSidebar = useCallback(() => {
    setSidebarShown(false);
  }, [setSidebarShown]);

  const onToggleChange = useCallback(
    e => (e.target.checked ? setDarkTheme() : setLightTheme()),
    [setLightTheme, setDarkTheme]
  );

  const logoLink = logo.href || baseUrl;
  const isExternalLogoLink = /http/.test(logoLink);
  const logoLinkProps = isExternalLogoLink
    ? {
        rel: "noopener noreferrer",
        target: "_blank"
      }
    : null;
  const logoSrc = logo.srcDark && isDarkTheme ? logo.srcDark : logo.src;
  const logoImageUrl = useBaseUrl(logoSrc);

  return (
    <nav
      ref={navbarRef}
      className={classnames("navbar", "navbar--light", "navbar--fixed-top", {
        "navbar-sidebar--show": sidebarShown,
        [styles.navbarHideable]: hideOnScroll,
        [styles.navbarHidden]: !isNavbarVisible
      })}
      style={{fontSize: "16px" }}
    >
      <div className="navbar__inner">
        <div className="navbar__items" style={{ marginLeft: "30px" }}>
          <div
            aria-label="Navigation bar toggle"
            className="navbar__toggle"
            role="button"
            tabIndex={0}
            onClick={showSidebar}
            onKeyDown={showSidebar}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              role="img"
              focusable="false"
            >
              <title>Menu</title>
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="2"
                d="M4 7h22M4 15h22M4 23h22"
              />
            </svg>
          </div>
          <Link className="navbar__brand" to={logoLink} {...logoLinkProps}>
            {logo != null && (
              <img className="navbar__logo" style={{ height:"25px", width:"104px"}} src={logoImageUrl} alt={logo.alt} />
            )}
            {title != null && (
              <strong
                className={isSearchBarExpanded ? styles.hideLogoText : ""}
                style={{fontSize: "22px", color: "#9FA8BA", fontWeight:"normal", marginRight:"300px"}}
              >
                {title}
              </strong>
            )}
          </Link>
          {links
            .filter(linkItem => linkItem.position !== "right")
            .map((linkItem, i) => (
              <NavLink {...linkItem} key={i} />
            ))
            }
        </div>
        <div className="navbar__items navbar__items--right" style={{marginRight: "10px"}}>
          {links
            .filter(linkItem => linkItem.position === "right")
            .map((linkItem, i) => (
              <NavLink {...linkItem} key={i} />
            ))}
          {!disableDarkMode && (
            <Toggle
              className={styles.displayOnlyInLargeViewport}
              aria-label="Dark mode toggle"
              checked={isDarkTheme}
              onChange={onToggleChange}
            />
          )}
          <SearchBar
            handleSearchBarToggle={setIsSearchBarExpanded}
            isSearchBarExpanded={isSearchBarExpanded}
          />
        </div>
      </div>
      <div
        role="presentation"
        className="navbar-sidebar__backdrop"
        onClick={hideSidebar}
      />
      <div className="navbar-sidebar">
        <div className="navbar-sidebar__brand">
          <Link
            className="navbar__brand"
            onClick={hideSidebar}
            to={logoLink}
            {...logoLinkProps}
          >
            {logo != null && (
              <img className="navbar__logo" src={logoImageUrl} alt={logo.alt} />
            )}
            {title != null && <strong>{title}</strong>}
          </Link>
          <Github />
          {!disableDarkMode && sidebarShown && (
            <Toggle
              aria-label="Dark mode toggle in sidebar"
              checked={isDarkTheme}
              onChange={onToggleChange}
            />
          )}
        </div>
        <div className="navbar-sidebar__items">
          <div className="menu">
            <ul className="menu__list">
              {links.map((linkItem, i) => (
                <li className="menu__list-item" key={i}>
                  <NavLink
                    className="menu__link"
                    {...linkItem}
                    onClick={hideSidebar}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;