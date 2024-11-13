import Image from "next/image";
import Link from "next/link";
import LogoutForm from "../../components/logoutForm/logoutForm";
import { getSession } from "@/action";

 async function Navbar() {
  const session = await getSession();

    return (
   
    <div className="container-fluid">
    <header className="d-flex flex-wrap align-items-center justify-content-between py-2 border-bottom">
      {/* Logo */}
      <div className="col-md-1">
        <Link href="/">
          <Image
            className="img-fluid " 
            src="/images/logo-nav-list.png"
            width={500}
            height={500}  
            alt="Pinata Logo"
          />
        </Link>
      </div>

      {/* Navigation Links */}
      <ul className="nav col-10 col-md-auto justify-content-center mb-md-0">
       { session.isLoggedIn && <li>
          <Link href="/list" className="nav-link px-4 link-dark">
            <span className="navbar-text-bold" style={{fontFamily : 'SF Pro Display' , fontWeight : "1000"}}>Listed</span>
          </Link>
        </li>}
        {  session.isLoggedIn && <li>
          <Link href="/listedProperty" className="nav-link px-4 link-dark">
            <span className="navbar-text-bold" style={{fontFamily : 'SF Pro Display' , fontWeight : "1000"}}>List My Property!</span>
          </Link>
        </li>}
        { !session.isLoggedIn &&<li>
          <Link href="/login" className="nav-link px-4 link-dark">
            <span className="navbar-text-bold" style={{fontFamily : 'SF Pro Display' , fontWeight : "1000"}}>Login</span>
          </Link>
        </li>}
      { session.isLoggedIn && <LogoutForm/>}
      </ul>
    </header>
  </div>

  
    );
}
export default Navbar;