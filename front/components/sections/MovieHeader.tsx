import Link from "next/link"
const MovieHeader = () => {
  return (
      <header className="header header-horizontal">
    <nav className="navbar">
   <Link className="navbar-brand" href="/"> 
      <span className="logo-element">
        <span className="logo-tape">
          <span
            className="svg-content svg-fill-theme"
            data-svg="/pattern/images/svg/logo-part.svg"
          >
            <svg
              viewBox="0 0 55 43"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ height: "1.2em", width: "1.5349em" }}
            >
              <path
                className="fill-path"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 0H47V3H51V0H55V43H51V40H47V43H8V40H4V43H0V0H4V3H8V0ZM8 7H4V11H8V7ZM4 15H8V19H4V15ZM8 23H4V27H8V23ZM4 32H8V36H4V32ZM51 7H47V11H51V7ZM47 15H51V19H47V15ZM51 23H47V27H51V23ZM47 32H51V36H47V32Z"
                fill="#FF8A00"
              />
            </svg>
          </span>
        </span>
        <span className="logo-text text-uppercase">
          <span>M</span>emico
        </span>
      </span>
    </Link>
    <button className="navbar-toggler" type="button">
      <span className="th-dots-active-close th-dots th-bars">
        <span />
        <span />
        <span />
      </span>
    </button>
    <div className="navbar-collapse">
      <ul className="navbar-nav">
        <li className="nav-item nav-item-arrow-down nav-hover-show-sub">
          <a className="nav-link" href="#">
            Movies
          </a>
          <div className="nav-arrow">
            <i className="fas fa-chevron-down" />
          </div>
          <ul className="collapse nav">
            <li className="nav-item">
             <Link className="nav-link"  href="/movies/573a1396f29313caabce4a9a"> 
              The Godfather
              </Link>
            </li>
            <li className="nav-item">
             <Link className="nav-link"  href="/movies/573a1390f29313caabcd60e4"> 
              The Immigrant
              </Link>
            </li>
            <li className="nav-item">
             <Link className="nav-link"  href="/movies/573a1394f29313caabcde875"> 
              Rocketship X-M
              </Link>
            </li>
           
          </ul>
        </li>
       </ul>
    </div>
  </nav>
  </header>
  )
}

export default MovieHeader;