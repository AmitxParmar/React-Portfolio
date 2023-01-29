import './Portfolio.css';

import instaClone from '../../assets/InstaClone.jpg';
import MERNTodo from '../../assets/TodoMERN.png';
import youTubeClone from '../../assets/Youtube_Clone_Home.png';
import { motion } from 'framer-motion'

const data = [
    {
        id: 1234,
        image: instaClone,
        title: "Instagram Clone",
        github: "https://github.com/AmitxParmar/Instagram-Clone/",
        description: `
        • I recently built a full stack Instagram clone using Firebase for the backend, React for the frontend,
        and TailwindCSS for styling. The project includes a user authentication system, a feature for creating and viewing posts, and a system for liking and commenting on posts.
        • I faced the challenge of integrating Firebase with React as I tried to use firebase V9, but was able to
        successfully implement real-time data updates and user authentication. Through this project, I
        gained experience in building full stack applications, working with Firebase, and implementing design with TailwindCSS.
        • Managed global state using context API, handled Firebase queries, add dark theme, add sidebar,
        add update bio feature.
        `
    },
    {
        id: 2345,
        image: MERNTodo,
        title: "Full-Stack Todo App (MERN)",
        github: "https://github.com/AmitxParmar/MERN-TODO-APP",
        description: `Built the front-end using React and implemented features such as creating, editing, and deleting to-do items.
        Utilized MongoDB for storing and retrieving user data and to-do items and Implemented a RESTful API using Express.js for communicating with the MongoDB database, Node.js for the server-side logic and handling API routes.`
    },
    {
        id: 3456,
        image: youTubeClone,
        title: "YouTube Clone",
        github: "https://github.com/AmitxParmar/Youtube-Clone",
        description: `
        Developed a YouTube clone web application utilizing React and Material-UI for the front-end, and integrated the YouTube Data API to retrieve and display video information.
        Implemented features such as a search bar, video player and channel details page. implemented responsive design for optimal user experience on all devices.`
    },
];

const Portfolio = ({ directionLeft }) => {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className='container portfolio__container'>
                {data.map(({ id, image, title, github, description }) => (<>
                    <motion.article key={github} className='portfolio__items'
                        initial={{ y: -300, opacity: 0 }}
                        transition={{ duration: 1.2 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className='portfolio__item-image'>
                            <img src={image} alt={title} />
                        </div>
                        <h3>{title}</h3>
                        <p>{description}</p>
                        <div className='portfolio__item-cta'>
                            <a className="btn" href={github} target="_blank" rel="noreferrer">
                                Github
                            </a>
                        </div>
                    </motion.article>
                </>))}
            </div>
        </section>
    );
};

export default Portfolio;

