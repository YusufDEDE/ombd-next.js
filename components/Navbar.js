import Link from 'next/link';
import { observer, inject } from 'mobx-react';

const Navbar = (props) => (
    <nav className="navbar navbar-expand navbar-dark bg-dark mb-4">
        <div className="container">
            <a className="navbar-brand" href="/">Ombd WebApp</a>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link href="/">
                            <a className="nav-link">Home</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/favorites">
                            <a className="nav-link">Favorites( <b>{props.store.count}</b> )</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);


export default inject('store')(observer(Navbar));