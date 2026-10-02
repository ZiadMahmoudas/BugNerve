import { FiArrowLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import mark from '../assets/bugnerve-mark.png'
export default function NotFound(){return <section className="notfound"><div><img src={mark} alt="BugNerve"/><span>404 · ISSUE NOT FOUND</span><h1>Looks like this issue doesn’t exist.</h1><p>The route may have moved, or the bug was never created.</p><Link className="btn btn--primary" to="/"><FiArrowLeft/> Return home</Link></div></section>}
