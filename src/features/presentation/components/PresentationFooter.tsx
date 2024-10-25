import { PresentationFoterItem } from "./PresentationFoterItem"

const footerItems = [
    {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/jsemalvarez/',
        imgPath: './assets/LinkedIn.png'
    },
    {
        name: 'GitHub',
        href: 'https://github.com/jsemalvarez',
        imgPath: './assets/GitHub.png'
    },
    {
        name: 'gmail',
        href: 'mailto:jsemalvarez@gmail.com',
        imgPath: './assets/gmail.png'
    }
]

export const PresentationFooter = () => {
  return (
    <footer className="presentation__footer">
        {
            footerItems.map( item => (
                <PresentationFoterItem  
                    key={item.name}
                    name={ item.name }
                    href={ item.href }
                    imgPath={ item.imgPath }
                />
            ))
        }
    </footer>
  )
}



