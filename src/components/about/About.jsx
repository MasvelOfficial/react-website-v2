import './about.scss'
import { SlScreenDesktop, SlGameController, SlRocket, SlSettings } from 'react-icons/sl'

const About = () => {
  return(
    <>
      <div className="text-wrapper mb-30">
        <h1>About me</h1>
      </div>
      <div className="text-wrapper primary-color mb-20">
        <h5><i>My introduction</i></h5>
      </div>
      <div className="text-wrapper mb-50">
        <p>I am a strong middle front-end developer with 5 years of commercial development experience. I have a lot of experience with different approaches to development. This includes the development and maintenance of sites both in React and in pure JavaScript (worked more with JS). I also have good taste in web design, I understand the principles of UI/UX. I try to constantly be aware of and learn new technologies and development principles. I am interested in modern approaches to web design and user-friendly interfaces. I like to work on interesting projects that require logic, as well as interesting design. At the moment I work in a company and initially my work here began in a team, but later I was simply distributed over several projects in which I remained to work alone and only occasionally a backend developer is needed here to solve problems directly with the backend. At the moment, I am the lead developer in my projects, but for the most part they are just one-page sites and the work has become a chore, and I want to develop my skills more towards development in react, and this technology is not needed by the company I currently work for , so I would like to find for myself a more interesting company that works in this direction, as well as the issue of income also matters.</p>
      </div>
      <hr className="mb-50" />
      <div className="text-wrapper mb-35">
        <h2>My services</h2>
      </div>
      <div className="grid-wrapper skills mb-50">
        <div className="item">
          <div className="icon-wrapper mb-15">
            <SlScreenDesktop />
          </div>
          <div className="text-wrapper mb-15">
            <h4>Development</h4>
          </div>
          <div className="text-wrapper">
            <p>I am skilled in UI development using HTML, CSS (SCSS), JavaScript and React, I can implement complex functionality such as animations, transitions and states.</p>
          </div>
        </div>
        <div className="item">
          <div className="icon-wrapper mb-15">
            <SlGameController />
          </div>
          <div className="text-wrapper mb-15">
            <h4>UI/UX design</h4>
          </div>
          <div className="text-wrapper">
            <p>I am fond of web design, so I can make not only a functional, but also an attractive site. I also have extensive experience with web design layouts and can participate in the process of developing a site, from the stage of creating a layout to its implementation.</p>
          </div>
        </div>
        <div className="item">
          <div className="icon-wrapper mb-15">
            <SlRocket />
          </div>
          <div className="text-wrapper mb-15">
            <h4>SEO optimization</h4>
          </div>
          <div className="text-wrapper">
            <p>Experience building websites with SEO priorities in mind, including optimizing titles, meta descriptions, keywords, and other metadata.</p>
          </div>
        </div>
        <div className="item">
          <div className="icon-wrapper mb-15">
            <SlSettings />
          </div>
          <div className="text-wrapper mb-15">
            <h4>Server technologies</h4>
          </div>
          <div className="text-wrapper">
            <p>Understanding how server technologies work, including Node.js and PHP, and being able to use them in a web development context.</p>
          </div>
        </div>
      </div>
      <hr className="mb-50" />
      <div className="text-wrapper mb-35">
        <h2>My skills</h2>
      </div>
    </>
  )
}

export default About