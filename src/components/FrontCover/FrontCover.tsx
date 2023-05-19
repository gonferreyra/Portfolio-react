import TypewriterComponent from 'typewriter-effect';

const FrontCover = () => {
  return (
    <>
      <div className='frontcover'>
        <div className='frontcover__text'>
          <h2 className='frontcover__text--1'>Hola!</h2>
          {/* <h2 className='frontcover__text--2'>Soy Gonzalo,</h2> */}
          <h2 className='frontcover__text--2'>
            <TypewriterComponent
              options={{
                autoStart: true,
                loop: true,
                delay: 150,
                deleteSpeed: 150,

                strings: ['Soy Gonzalo'],
              }}
            />
          </h2>
          <h2 className='frontcover__text--3'>Fullstack developer</h2>
        </div>
        <div className='window__container'>
          <div className='window__web__container'>
            <div className='window__header__container'>
              <div className='window__header__btn'>
                <span className='dot1'></span>
                <span className='dot2'></span>
                <span className='dot3'></span>
              </div>
              <div className='window__header__direction'>
                <p>developer.com</p>
              </div>
            </div>
            <div className='window__web__content'>
              <p>
                .frontEnd <span>{'{'}</span>
              </p>
              <div className='window__web__content__p'>
                <p>
                  Lenguaje: <span>Javascript, Typescript;</span>
                </p>
                <p>
                  styles: <span>CSS, Sass, StyledComponents;</span>
                </p>
                <p>
                  libreria: <span>ReactJs, Redux;</span>
                </p>
              </div>
              <p>
                <span>{'}'}</span>
              </p>
            </div>
            <div className='window__web__content'>
              <p>
                .backEnd <span>{'{'}</span>
              </p>
              <div className='window__web__content__p'>
                <p>
                  Lenguaje: <span>NodeJS;</span>
                </p>
                <p>
                  framework: <span>ExpressJS;</span>
                </p>
                <p>
                  BaseDeDatos: <span>MongoDB;</span>
                </p>
              </div>
              <p>
                <span>{'}'}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FrontCover;
