interface Props {
    name: string;
    href: string;
    imgPath: string;
}

export const PresentationFoterItem = ( {name, href, imgPath }: Props) => {
    return(
        <div className="presentation__footer-item">
            <a className="presentation__footer-link" href={ href}>
                <img 
                    className="presentation__footer-img"
                    src={ imgPath} 
                    alt={ name } 
                />
            </a>
            <div className="presentation__footer-animated-item"></div>
        </div>
    )
}