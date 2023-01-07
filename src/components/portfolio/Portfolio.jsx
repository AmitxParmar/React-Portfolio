import './Portfolio.css';

import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';

const data = [
    {
        id: 1,
        image: IMG1,
        title: "Lorem Ipsum fo now",
        github: "https://github.com/amitxparmar/instagram clone",
    },
    {
        id: 2,
        image: IMG2,
        title: "Lorem Ipsum fo now",
        github: "https://github.com/amitxparmar/instagram clone",
    },
    {
        id: 1,
        image: IMG3,
        title: "Lorem Ipsum fo now",
        github: "https://github.com/amitxparmar/instagram clone",
    },
];

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className='container portfolio__container'>
                {data.map(({ id, image, title, github }) => (<>
                    <article key={id} className='portfolio__items'>
                        <div className='portfolio__item-image'>
                            <img src={image} alt={title} />
                        </div>
                        <h3>{title}</h3>
                        <div className='portfolio__item-cta'>
                            <a className="btn" href={github} target="_blank" rel="noreferrer">Github</a>
                        </div>
                    </article>
                </>))}
            </div>
        </section>
    );
};

export default Portfolio;

