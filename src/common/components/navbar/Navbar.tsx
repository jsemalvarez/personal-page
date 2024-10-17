import { ContactIcon } from '../icons/ContactIcon'
import { JobIcon } from '../icons/JobIcon'
import { ProjectIcon } from '../icons/ProjectIcon'
import { StudyIcon } from '../icons/StudyIcon'
import './navbar.css'

export const Navbar = () => {

    const navItems = [
        {
            name:'trabajos',
            path:'#jobs',
            icon: <JobIcon />,
        },
        {
            name:'proyectos',
            path:'#projects',
            icon: <ProjectIcon />
        },
        {
            name:'estudios',
            path:'#studies',
            icon: <StudyIcon />
        },
        {
            name:'contacto',
            path:'#contact',
            icon: <ContactIcon />
        },
    ]

    return (
        <nav className="navbar">
            <h2>JSM</h2>
            <ul>
                {
                    navItems.map( item => (
                        <li key={item.name}>
                            <a href={item.path}> { item.icon } <span>{ item.name }</span></a>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}