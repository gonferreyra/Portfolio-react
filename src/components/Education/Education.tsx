import { education } from '../../data/data';

const Education = () => {
  return (
    <div id='education' className='education'>
      <h2>Educacion</h2>
      <div className='education__boxes'>
        {education.map((course) => (
          <div key={course.id} className='education__container'>
            <div className='education__box'>
              <div className='education__header__btn'>
                <span className='dot1'></span>
                <span className='dot2'></span>
                <span className='dot3'></span>
              </div>
              <div className='education__header__direction'>
                <p>{course.webDirection}</p>
              </div>
            </div>
            <div className='education__content'>
              <div
                className={
                  course.shortTitle
                    ? 'education__content__title short'
                    : 'education__content__title'
                }
              >
                <h2>{course.title}</h2>
              </div>
              <div className='education__content__img'>
                <img src={course.logo} alt='logo' />
              </div>
              <div className='education__content__info'>
                <p>{course.status}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
