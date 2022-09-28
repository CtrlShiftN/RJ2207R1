import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Layout({ children }) {
    return (
        <div className="wrapper pt-3">
            <div className="row">
                <div className="col-3">
                    <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark h-100">
                        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                            <span className="fs-4">CodeGym</span>
                        </a>
                        <hr />
                        <ul className="nav nav-pills flex-column mb-auto">
                            <li className="nav-item">
                                <Link href="/users">
                                    <a className="nav-link">Users</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/articles">
                                    <a className="nav-link">Articles</a>
                                </Link>
                            </li>
                            
                        </ul>
                    </div>
                </div>
                <div className="col-9">
                    {children}
                </div>
            </div>
        </div>
    );
}