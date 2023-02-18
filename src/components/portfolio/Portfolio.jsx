import './Portfolio.css';

import instaClone from '../../assets/InstaClone.jpg';
import MERNTodo from '../../assets/TodoMERN.png';
import youTubeClone from '../../assets/Youtube_Clone_Home.png';

const data = [
    {
        id: 1234,
        image: instaClone,
        title: "Instagram Clone",
        features: "Realtime Database Update, like, comment, profile, feed, Login, LogOut",
        github: "https://github.com/AmitxParmar/Instagram-Clone/",
        description: `
        • The project includes a user authentication system, a feature for creating and viewing, liking and commenting on posts and follow/unfollow feature.
        
        • I faced the challenge of integrating Firebase with React as I tried to use firebase V9 and global state management, but was able to successfully implement real-time data updates. Through this project, I gained experience in building full stack applications, working with Firebase, and implementing design with TailwindCSS.

        • Managed global state using context API, handled Firebase queries, add dark theme, sidebar and update bio feature.
        `
    },
    {
        id: 2345,
        image: MERNTodo,
        title: "Full-Stack Todo App (MERN)",
        Features: "Create, Update, Delete Todos",
        github: "https://github.com/AmitxParmar/MERN-TODO-APP",
        description:
            `
        • Built the front-end using React and implemented features such as creating, editing, and deleting to-do items.

        • Utilized MongoDB for storing and retrieving user data and to-do items and Implemented a RESTful API using Express.js for communicating with the MongoDB database, Node.js for the server-side logic and handling API routes.
        `
    },
    {
        id: 3456,
        image: youTubeClone,
        title: "YouTube Clone",
        Features: "Video Player, Feed",
        github: "https://github.com/AmitxParmar/Youtube-Clone",
        description: `
        • Developed a YouTube clone web application utilizing React and Material-UI for the front-end, and integrated the YouTube Data API to retrieve and display video information.
        
        • Implemented features such as a search bar, video player and channel details page. implemented responsive design for optimal user experience on all devices.
        `
    },
];

const Portfolio = ({ directionLeft }) => {


    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className='container portfolio__container' >
                {data.map(({ id, image, title, github, description, features }) => (
                    <>
                        <article key={id} className='portfolio__items' >
                            <div className='portfolio__item-image'>
                                <img src={image} alt={title} />
                            </div>
                            <h3>{title}</h3>

                            <h4>
                                {features}
                            </h4>

                            <p> {description} </p>

                            <div className='portfolio__item-cta'>
                                <a className="btn" href={github} target="_blank" rel="noreferrer">
                                    Github
                                </a>
                            </div>

                        </article>
                    </>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;

