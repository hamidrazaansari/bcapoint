import { useState, useEffect } from 'react';
import axios from 'axios';
import './Navbar.css'
import logo from '../logo.png';
import { Link,useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa'
import { BiArrowBack } from 'react-icons/bi'

const Navbar1 = () => {
  const [searcStyle, setSearchStyle] = useState('search-block');
  const [searchBtn, setSearchBtn] = useState('searchBtn')
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const [stog, setStog] = useState(false)
  const navigate = useNavigate();

  const changStyle = () => {
    setSearchStyle('search-block2');
    setSearchBtn('searchBtn2');
  }

  const removeStyle = () => {
    setSearchStyle('search-block');
    setSearchBtn('searchBtn');
  }

  const fetchData = () => {
    return (
      axios.get(`http://localhost:8000/api/posts`).then((response) => setData(response.data))
    )
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='navContainer mx-4 px-5 py-3'>
      <div className='firstNav'>
        <Link to="/" ><img className='logo' src={logo} alt="logo" /></Link>

        <nav className="navbar navbar-expand-lg navbar-light bg">
        <button className="navbar-toggler navMenu" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0  ul navForPhone">
              <li className="nav-item li">
                <Link className="nav-link links active" aria-current="page" to="/">Home</Link>
              </li>

              <li className="nav-item dropdown li">
                <Link className="nav-link dropdown-toggle drop-link links" to="/subjct" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Subject
                </Link>
                <ul className="dropdown-menu drop-menu " aria-labelledby="navbarDropdown">
                  <li className="nav-item dropdown li">
                    <Link className="nav-link dropdown-toggle drop-link links" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      First Semester </Link>
                    <ul className="dropdown-menu drop-menu-2 " aria-labelledby="navbarDropdown">
                      <li><Link className="dropdown-item links" to="/subjct/It tools & Application">IT Tools & Application</Link></li>
                      <li><Link className="dropdown-item links" to="/subjct/Functional English">Functional English</Link></li>
                      <li><Link className="dropdown-item links" to="/subjct/Introduction to C Language">Introduction to C language</Link></li>
                      <li><Link className="dropdown-item links" to="/subjct/Principle Of mathematic">Principles of mathmetics</Link></li>
                    </ul>
                  </li>

                  <li><hr className="dropdown-divider" /></li>

                  <li className="nav-item dropdown li">
                    <Link className="nav-link dropdown-toggle drop-link links" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Second Semester </Link>
                    <ul className="dropdown-menu drop-menu-2 " aria-labelledby="navbarDropdown">
                      <li><Link className="dropdown-item links" to="/subjct/Descrite mathematics">Discrete Mathematics</Link></li>
                      <li><Link className="dropdown-item links" to="/subjct/Accounting & Financial management">Accounting & F. Management</Link></li>
                      <li><Link className="dropdown-item links" to="/subjct/Digital Circuit & Logic Design">Digital Circuit & Logic Design</Link></li>
                      <li><Link className="dropdown-item links" to="/subjct/Introduction to Object Oriented Programing & C++">Interoduction To Opps & C++</Link></li>
                    </ul>
                  </li>

                  <li><hr className="dropdown-divider" /></li>

                  <li className="nav-item dropdown li">
                    <Link className="nav-link dropdown-toggle drop-link links" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Third Semester </Link>
                    <ul className="dropdown-menu drop-menu-2 " aria-labelledby="navbarDropdown">
                      <li><Link className="dropdown-item links" to="/subjct/Operating System">Operating System</Link></li>
                      <li><Link className="dropdown-item links" to="/subjct/Computer Oriented Mathematic">Computer Oriented Mathematic</Link></li>
                      <li><Link className="dropdown-item links" to="/subjct/Data Structure">Data Structure</Link></li>
                      <li><Link className="dropdown-item links" to="/subjct/Computer Organization & Architecture">Computer Organization & Architecture</Link></li>
                    </ul>
                  </li>

                  <li><hr className="dropdown-divider" /></li>

                  <li className="nav-item dropdown li">
                    <Link className="nav-link dropdown-toggle drop-link links" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Fourth Semester </Link>
                    <ul className="dropdown-menu drop-menu-2 " aria-labelledby="navbarDropdown">
                      <li><Link className="dropdown-item links" to="/subjct/Introduction to DBMS">Introduction to DBMS</Link></li>
                      <li><Link className="dropdown-item links" to="/subjct/Operation Research">Operation Research</Link></li>
                      <li><Link className="dropdown-item links" to="/subjct/Software Engineering">Software Engineering</Link></li>
                      <li><Link className="dropdown-item links" to="/subjct/Computer Graphics">Computer Graphics</Link></li>
                    </ul>
                  </li>

                  <li><hr className="dropdown-divider" /></li>

                  <li className="nav-item dropdown li">
                    <Link className="nav-link dropdown-toggle drop-link links" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Fifth Semester </Link>
                    <ul className="dropdown-menu drop-menu-2 " aria-labelledby="navbarDropdown">
                      <li><Link className="dropdown-item links" to="/subjct/Internet & JAVA Programing">Internet & JAVA Programing</Link></li>
                      <li><Link className="dropdown-item links" to="/subjct/ORACLE & PL-SQL">ORACLE & PL/SQL</Link></li>
                      <li><Link className="dropdown-item links" to="/subjct/Software Project Management">Software Project Management</Link></li>
                      <li><Link className="dropdown-item links" to="/subjct/Computer Networks">Computer Networks</Link></li>
                    </ul>
                  </li>

                  <li><hr className="dropdown-divider" /></li>

                  <li className="nav-item dropdown li">
                    <Link className="nav-link dropdown-toggle drop-link links" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Six Semester </Link>
                    <ul className="dropdown-menu drop-menu-2 " aria-labelledby="navbarDropdown">
                      <li><Link className="dropdown-item links" to="/subjct/Advance Network & Network Security">Advance Network & Network Security</Link></li>
                      <li><Link className="dropdown-item links" to="/subjct/Web Development Tools & Techniques">Web Development Tools & Techniques</Link></li>
                    </ul>
                  </li>

                </ul>
              </li>
              <li className="nav-item li">
                <Link className="nav-link links" to="/paper">Questions Paper</Link>
              </li>
              <li className="nav-item li">
                <Link className="nav-link links" to="/blog">Blog</Link>
              </li>
              <li className="nav-item li">
                <Link className="nav-link links" to="/books">Books</Link>
              </li>
              <li className="nav-item li">
                <Link className="nav-link links" to="/about">About</Link>
              </li>
              <li className="nav-item li">
                <Link className="nav-link links" to="/contact">Contact</Link>
              </li>
            </ul>
            
          </div>
        </nav>

        <span className={searchBtn} onClick={changStyle} ><FaSearch /></span>
        <div class={searcStyle}>
          <span onClick={removeStyle} ><BiArrowBack /></span>
          <input onChange={(e) => setSearch(e.target.value)} onClick={() => { setStog(!stog) }} value={search} type="search" name="search" class="search-input" placeholder="Search here..." />
        </div>
      </div>
      {stog && <div className='searchArea container'>
          {search !== '' && data.map(item => <div key={Math.random() * 10}>{item.title.toUpperCase().includes(search.toUpperCase()) && <Link className='searchFont' onClick={() => { setStog(!stog) }} to={`/search/${item.title}`}>{item.title}</Link>}</div>)}<br />
          {search ==='' && <span>Enter at least one later</span>}
        </div>}
      
    </div>
  )
}

export default Navbar1