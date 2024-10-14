import { useEffect, useRef } from "react"

export default function Navbar() {
    const navRef = useRef()
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY >= 80)
                navRef.current.classList.add('nav-dark')
            else
                navRef.current.classList.remove('nav-dark')

        })
    }, [])

    return (
        <>
            <div className="navbar" ref={navRef}>
                <div className="navbar-pages">
                    <div className="browse-netflix-logo">
                        <svg height="25" viewBox=".238 .034 919.406 248.488" width="90" xmlns="http://www.w3.org/2000/svg"><path d="m870.46 118.314 49.184 130.208c-14.495-2.07-28.982-4.663-43.733-6.999l-27.707-71.945-28.468 66.006c-13.973-2.336-27.698-3.114-41.672-4.928l49.955-113.89-45.309-116.732h41.937l25.362 65.22 27.185-65.22h42.442zm-120.864-118.28h-38.052v225.71c12.425.779 25.362 1.292 38.052 2.841zm-70.927 223.118c-34.68-2.328-69.37-4.39-104.829-5.177v-217.94h38.823v181.188c22.264.514 44.52 2.32 66.006 3.355zm-146.252-134.847v38.822h-53.06v88.263h-38.3v-215.356h108.713v38.822h-70.405v49.45h53.06zm-156.597-49.449v178.605c-12.946 0-26.14 0-38.83.514v-179.119h-40.122v-38.822h119.322v38.822zm-120.88 90.334c-17.08 0-37.274 0-51.769.787v57.715c22.778-1.557 45.556-3.363 68.59-4.141v37.273l-107.412 8.548v-229.338h107.405v38.822h-68.584v52.29c15.017 0 38.052-.778 51.768-.778v38.83zm-215.109-21.743v135.633c-13.965 1.557-26.398 3.371-39.593 5.442v-248.488h37.017l50.469 141.076v-141.076h38.83v232.436c-13.717 2.336-27.698 3.114-42.45 5.177z" fill="#e50914" /></svg>
                    </div>
                    <ul>
                        <li>Home</li>
                        <li>Tv Shows</li>
                        <li>Movies</li>
                        <li>New & Popular</li>
                        <li>My List</li>
                        <li>Browse by Languages</li>
                    </ul>


                </div>
                <div className="navbar-right">
                    <svg width="24" height="24" fill="white" clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m15.97 17.031c-1.479 1.238-3.384 1.985-5.461 1.985-4.697 0-8.509-3.812-8.509-8.508s3.812-8.508 8.509-8.508c4.695 0 8.508 3.812 8.508 8.508 0 2.078-.747 3.984-1.985 5.461l4.749 4.75c.146.146.219.338.219.531 0 .587-.537.75-.75.75-.192 0-.384-.073-.531-.22zm-5.461-13.53c-3.868 0-7.007 3.14-7.007 7.007s3.139 7.007 7.007 7.007c3.866 0 7.007-3.14 7.007-7.007s-3.141-7.007-7.007-7.007z" fillRule="nonzero" /></svg>
                    <p>Kids</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="24" height="24" viewBox="0 0 24 24"><path d="M15 21c0 1.598-1.392 3-2.971 3s-3.029-1.402-3.029-3h6zm.137-17.055c-.644-.374-1.042-1.07-1.041-1.82v-.003c.001-1.172-.938-2.122-2.096-2.122s-2.097.95-2.097 2.122v.003c.001.751-.396 1.446-1.041 1.82-4.668 2.709-1.985 11.715-6.862 13.306v1.749h20v-1.749c-4.877-1.591-2.193-10.598-6.863-13.306zm-3.137-2.945c.552 0 1 .449 1 1 0 .552-.448 1-1 1s-1-.448-1-1c0-.551.448-1 1-1zm-6.451 16c1.189-1.667 1.605-3.891 1.964-5.815.447-2.39.869-4.648 2.354-5.509 1.38-.801 2.956-.76 4.267 0 1.485.861 1.907 3.119 2.354 5.509.359 1.924.775 4.148 1.964 5.815h-12.903z" /></svg>
                    <div className="navbar-profile">
                        <img src="https://i.hizliresim.com/bptk8pj.png" alt="Profile Photo" width="40" height="40" />
                        <svg width="24" height="24" fill="white" clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m16.843 10.211c.108-.141.157-.3.157-.456 0-.389-.306-.755-.749-.755h-8.501c-.445 0-.75.367-.75.755 0 .157.05.316.159.457 1.203 1.554 3.252 4.199 4.258 5.498.142.184.36.29.592.29.23 0 .449-.107.591-.291 1.002-1.299 3.044-3.945 4.243-5.498z" /></svg>
                        <div className="dropdown">
                            <ul>
                                <li>Manage Profiles</li>
                                <li>Account</li>
                                <li>Help Center</li>
                                <li className="signout">Sign out of Netflix</li>
                            </ul>
                        </div>
                    </div>

                </div>

            </div >



        </>
    )
}