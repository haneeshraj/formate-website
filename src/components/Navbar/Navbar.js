import Link from "next/link";
import { useState } from "react";
import Logo from "../../components/Logos/OriginalLogo";
import style from "./Navbar.module.css";

function Navbar({ home, about, discography, gallery, contact }) {
  const [open, setOpen] = useState(false);
  return (
    <header className={style.header}>
      <nav className={style.navbar}>
        <div className={style.image}>
          <Logo />
        </div>
        <ul className={`${style.navList} ${open ? style.active : ""}`}>
          <Link
            href="/"
            className={`${style.navListItem} ${home && style.currentPage}`}
          >
            <li>Home</li>
          </Link>
          <Link
            href="/discography"
            className={`${style.navListItem} ${
              discography && style.currentPage
            }`}
          >
            <li>Discography</li>
          </Link>
          <Link
            href="/gallery"
            className={`${style.navListItem} ${gallery && style.currentPage}`}
          >
            <li>Gallery</li>
          </Link>
          <Link
            href="/about"
            className={`${style.navListItem} ${about && style.currentPage}`}
          >
            <li>About</li>
          </Link>
          <Link
            href="/contact"
            className={`${style.navListItem} ${contact && style.currentPage}`}
          >
            <li>Contact</li>
          </Link>
        </ul>
        <div
          className={`${style.hamburger} ${open ? style.active : ""}`}
          onClick={() => {
            setOpen(!open);
          }}
        >
          <span className={style.bar}></span>
          <span className={style.bar}></span>
          <span className={style.bar}></span>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
