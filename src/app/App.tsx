import { Navbar } from '../common'
import { Contact } from '../features/contact'
import { Jobs } from '../features/jobs'
import { Presentation } from '../features/presentation'
import { Projects } from '../features/projects'
import './style/App.css'

export const App = () => {
  return (
    <main>
      <Navbar />
      <Presentation />
      <Jobs />
      <Projects />
      <Contact />
    </main>
  )
}
