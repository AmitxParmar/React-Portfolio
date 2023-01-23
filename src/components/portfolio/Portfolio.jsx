import './Portfolio.css';

import instaClone from '../../assets/InstaClone.jpg';
import MERNTodo from '../../assets/TodoMERN.png';
import youTubeClone from '../../assets/Youtube_Clone_Home.png';

const data = [
    {
        id: 1234,
        image: instaClone,
        title: "Instagram Clone",
        github: "https://github.com/AmitxParmar/Instagram-Clone/",
        description: "This was the Major project I've ever built This application (Instagram clone) was built using React(Custom Hooks, Context), Firebase and Tailwind CSS, where I've built pages Like: Login,SignUp, Dashboard, UserProfile. Where I've learned how to create,Conditional rendering, Routing, Prop Drilling, Custom hooks, and TailwindCSS.Features: Comment, Like, Login, Logout, Create account, user posts, profile. My Job was to handle data ow using Context, handle firebase queries, create context, add dark theme, add sidebar, add update bio features."
    },
    {
        id: 2345,
        image: MERNTodo,
        title: "Full-Stack Todo App (MERN)",
        github: "https://github.com/AmitxParmar/MERN-TODO-APP",
        description: "Built the App made using MERN stack. The back-end handles CRUD operations on the data sent from the Front- end which is built using CSS and React.Which has features like: Complete, Add, Delete,Update Todos.where I've learned how to create basic Database Schema and create API building this Project."
    },
    {
        id: 3456,
        image: youTubeClone,
        title: "YouTube Clone",
        github: "https://github.com/AmitxParmar/Youtube-Clone",
        description: "The clone gets video data like views, channel and videos from YouTube API. The UI is built using React and Material- UI.it has pages like Feed, Video Screen (Which uses React Player Library), Search Results, and Channel."
    },
];

const Portfolio = ({ children }) => {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className='container portfolio__container'>
                {data.map(({ id, image, title, github, description }) => (<>
                    <article key={github} className='portfolio__items'>
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
                    </article>
                </>))}
            </div>
        </section>
    );
};

export default Portfolio;

