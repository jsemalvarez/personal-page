import { PresentationFooter } from './PresentationFooter';
import { Details } from './Details';
import './presentation.css';
import { Profile } from './Profile';

export const Presentation = () => {
  return (
    <section id="presentation" className='presentation'>

      <Details />
      <Profile />
      <PresentationFooter />
      
    </section>
  )
}
