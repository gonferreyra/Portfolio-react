import React, { useEffect } from 'react';
import { projects } from '../../data/data';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div id='projects' className='projects'>
      <h2>Proyectos</h2>
      {projects.map((project) => (
        <div
          key={project.id}
          className={
            project.right ? 'project__container right' : 'project__container'
          }
          data-aos={project.right ? 'fade-left' : 'fade-right'}
          data-aos-offset='390'
          data-aos-duration='700'
        >
          <div className='project__img'>
            <img src={project.projectImg} alt='project-img' />
          </div>
          <div className='project__info__container'>
            <div className='project__name'>
              <p>{project.name}</p>
            </div>
            <div className='project__description'>
              <p>{project.description}</p>
            </div>
            <div className='project__links'>
              <button>
                <a href={project.link} target='_blank' rel='noreferrer'>
                  Ver Proyecto
                </a>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
