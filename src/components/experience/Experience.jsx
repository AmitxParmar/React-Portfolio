import './Experience.css';

import { BsPatchCheckFill } from 'react-icons/bs';

const Experience = () => {
    return (
        <section id='experience'>
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>

            <div className='container experience__container'>
                <div className='experience__frontend'>
                    <h3> Front Development </h3>
                    <div className='experience__content'>
                        <article className="experience__details">
                            <BsPatchCheckFill />
                            <h4> HTML </h4>
                            <small className='text-light'> Intermediate </small>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill />
                            <h4> CSS3s </h4>
                            <small className='text-light'> Intermediate </small>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill />
                            <h4> JavaScript </h4>
                            <small className='text-light'> Intermediate </small>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill />
                            <h4> React / NextJS </h4>
                            <small className='text-light'> Intermediate </small>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill />
                            <h4> Tailwind </h4>
                            <small className='text-light'> Intermediate </small>
                        </article>
                    </div>
                </div>
                <div className='experience__backend'>
                    <h3> Back End Development </h3>
                    <div className='experience__content'>
                        <article className="experience__details">
                            <BsPatchCheckFill />
                            <h4> Firebase </h4>
                            <small className='text-light'> Intermediate </small>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill />
                            <h4> Node.js </h4>
                            <small className='text-light'> Basics </small>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill />
                            <h4> Express.js </h4>
                            <small className='text-light'> Basics </small>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill />
                            <h4> MySQL </h4>
                            <small className='text-light'> Basics </small>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill />
                            <h4> MongoDB </h4>
                            <small className='text-light'> Basics </small>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;