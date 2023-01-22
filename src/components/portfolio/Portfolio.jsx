import './Portfolio.css';

import instaClone from '../../assets/InstaClone.jpg';
import MERNTodo from '../../assets/TodoMERN.png';
import youTubeClone from '../../assets/Youtube_Clone_Home.png';

const data = [
    {
        id: 1,
        image: instaClone,
        title: "Instagram Clone",
        github: "https://github.com/AmitxParmar/Instagram-Clone/",
        description: " Instagram: This was the Major project I've ever built This application (Instagram clone) was built using
React(Custom Hooks, Context), Firebase & Tailwind CSS, where I've built pages Like: Login, SignUp,
Dashboard, UserProle.Where I've learned how to create Schema, Conditional rendering, Routing,
Prop Drilling, Custom hooks, and TailwindCSS.
 Features: Comment, Like, Login, Logout, Create account, user posts, prole.
 My Job was to handle data ow using Context, handle rebase queries, create context, add dark theme,
    add sidebar, add update bio features.
"
    },
{
    id: 2,
        image: MERNTodo,
            title: "Full-Stack Todo App (MERN)",
                github: "https://github.com/AmitxParmar/MERN-TODO-APP",
                    description: ""
},
{
    id: 3,
        image: youTubeClone,
            title: "YouTube Clone",
                github: "https://github.com/AmitxParmar/Youtube-Clone",
                    description: ""
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

