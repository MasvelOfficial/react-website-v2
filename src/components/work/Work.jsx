import './work.scss'
import { SlGraduation, SlBriefcase, SlCalender } from 'react-icons/sl'

const Work = () => {

  return(
    <>
      <div className="text-wrapper mb-30">
        <h1>Qualification</h1>
      </div>
      <div className="text-wrapper primary-color mb-20">
        <h5><i>My personal journey</i></h5>
      </div>
      <div className="text-wrapper mb-30">
        <p>I have a degree in computer engineering. Began to be interested in the direction of web development since school from computer science lessons, when they taught the base on HTML. Basicly studied the direction at the university. After graduating from the university, I began to be more specifically interested in layout and web design, and began to study JS. I got a job as a content manager, where I needed knowledge of HTML layout and basic CSS for layout of emails and publishing news on a site that worked on Drupal 7. At the same time, I took courses in front-end development, while studying on YouTube. I began to practice developing one-page sites, writing elementary functions. Then I got a job in a company as a front-end developer, where I still work, where I developed my skills to a strong middle level. I do not stop there and try in every possible way to develop and learn further.</p>
      </div>
      <div className="qualification-list">
        <div className="item mb-30">
          <div className="icon-wrapper">
            <SlGraduation />
          </div>
          <div className="text-wrapper ">
            <h4 className="mb-10">Computer engineer</h4>
            <p className="mb-10">College - Kyiv</p>
            <div className="flex-wrapper years">
              <div className="icon-wrapper">
                <SlCalender />
              </div>
              <div className="text-wrapper">
                <p>2010 - 2014</p>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="icon-wrapper">
            <SlGraduation />
          </div>
          <div className="text-wrapper ">
            <h4 className="mb-10">Computer networks and systems</h4>
            <p className="mb-10">University - Kyiv</p>
            <div className="flex-wrapper years">
              <div className="icon-wrapper">
                <SlCalender />
              </div>
              <div className="text-wrapper">
                <p>2014 - 2015</p>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="icon-wrapper">
            <SlBriefcase />
          </div>
          <div className="text-wrapper ">
            <h4 className="mb-10">Content-manager (html layout)</h4>
            <p className="mb-10">MEDIA-PRO - Kyiv</p>
            <div className="flex-wrapper years">
              <div className="icon-wrapper">
                <SlCalender />
              </div>
              <div className="text-wrapper">
                <p>2016 - 2018</p>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="icon-wrapper">
            <SlGraduation />
          </div>
          <div className="text-wrapper ">
            <h4 className="mb-10">Front-end development</h4>
            <p className="mb-10">Courses - Kyiv</p>
            <div className="flex-wrapper years">
              <div className="icon-wrapper">
                <SlCalender />
              </div>
              <div className="text-wrapper">
                <p>2018 - 2018 (6 months)</p>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="icon-wrapper">
            <SlBriefcase />
          </div>
          <div className="text-wrapper ">
            <h4 className="mb-10">Front-end developer</h4>
            <p className="mb-10">LP - Kyiv</p>
            <div className="flex-wrapper years">
              <div className="icon-wrapper">
                <SlCalender />
              </div>
              <div className="text-wrapper">
                <p>2018 - until today</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Work