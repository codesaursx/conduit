import Link from 'next/link'

export const Nav = () => {
  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link href="/">
          <a className="">conduit</a>
        </Link>
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            <Link href="/">
              <a className="">Home</a>
            </Link>
          </li>
          {/* Only logged */}
          {/* <li className="nav-item">
            <Link href="">
              <a className="">
                <i className="ion-compose"></i>&nbsp;New Article
              </a>
            </Link>
          </li> */}
          {/* Only logged */}
          {/* <li className="nav-item">
            <Link href="">
              <a className="">
                <i className="ion-gear-a"></i>&nbsp;Settings
              </a>
            </Link>
          </li> */}
          <li className="nav-item">
            <Link href="/signin">
              <a className="">Sign in</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/signup">
              <a className="">Sign up</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
