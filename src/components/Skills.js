import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <h3>Project Development</h3>
              <Carousel
                autoPlay={true}
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Web Development</h5>
                </div>

                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Mobile Development</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Computer Application</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Game Development</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Data Analysis</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>AI Development</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Project Manager</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Network and Security</h5>
                </div>
              </Carousel>
              <br></br>

              <br></br>
              <h3>Coding Languages</h3>
              <Carousel
                autoPlay={true}
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={"https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"} alt="Image" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={"https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/flask-256.png"} alt="Image" />
                  <h5>Flask</h5>
                </div>
                <div className="item">
                  <img
                    src={"https://cdn4.iconfinder.com/data/icons/logos-3/456/nodejs-new-pantone-black-256.png"}
                    alt="Image"
                  />
                  <h5>Nodejs</h5>
                </div>
                <div className="item">
                  <img
                    src={"https://cdn1.iconfinder.com/data/icons/hawcons/32/700048-icon-89-document-file-sql-256.png"}
                    alt="Image"
                  />
                  <h5>SQL</h5>
                </div>
                <div className="item">
                  <img
                    src={"https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-256.png"}
                    alt="Image"
                  />
                  <h5>Firebase</h5>
                </div>
                <div className="item">
                  <img src={"https://cdn4.iconfinder.com/data/icons/logos-3/512/mongodb-2-256.png"} alt="Image" />
                  <h5>MongoDB</h5>
                </div>
                <div className="item">
                  <img
                    src={"https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/187_Js_logo_logos-256.png"}
                    alt="Image"
                  />
                  <h5>JS</h5>
                </div>
                <div className="item">
                  <img
                    src={"https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/267_Python_logo-256.png"}
                    alt="Image"
                  />
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <img
                    src={"https://cdn0.iconfinder.com/data/icons/programming-1-1/32/Programming_C-4-256.png"}
                    alt="Image"
                  />
                  <h5>C#</h5>
                </div>
                <div className="item">
                  <img
                    src={"https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/181_Java_logo_logos-256.png"}
                    alt="Image"
                  />
                  <h5>Java</h5>
                </div>
                <div className="item">
                  <img src={"https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-html-5-256.png"} alt="Image" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img
                    src={"https://cdn4.iconfinder.com/data/icons/file-extension-names-vol-8/512/33-256.png"}
                    alt="Image"
                  />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={"https://cdn4.iconfinder.com/data/icons/logos-3/256/laravel-256.png"} alt="Image" />
                  <h5>Laravel Blade</h5>
                </div>
                <div className="item">
                  <img
                    src={
                      "https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-php-software-develop-command-language-256.png"
                    }
                    alt="Image"
                  />
                  <h5>PHP</h5>
                </div>
                <div className="item">
                  <img src={"https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/flutter-256.png"} alt="Image" />
                  <h5>Flutter</h5>
                </div>
                <div className="item">
                  <img src={"https://cdn2.iconfinder.com/data/icons/file-extension-22/63/C-256.png"} alt="Image" />
                  <h5>C++</h5>
                </div>
                <div className="item">
                  <img
                    src={"https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/20/express-js.png"}
                    alt="Image"
                  />
                  <h5>Express</h5>
                </div>
                <div className="item">
                  <img src={"https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg"} alt="Image" />
                  <h5>Vite</h5>
                </div>
                <div className="item">
                  <img
                    src={
                      "https://cdn0.iconfinder.com/data/icons/computer-and-hardware-free/32/Computer__Computer_Hardware_CPU_Processor_Technology-256.png"
                    }
                    alt="Image"
                  />
                  <h5>Arduino</h5>
                </div>
              </Carousel>
              <br></br>
              <h3>Languages</h3>
              <br></br>
              <Carousel
                autoPlay={true}
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img
                    src={
                      "https://cdn3.iconfinder.com/data/icons/world-flags-6/900/kurdish_kurdistan_flag_country_national_region_european-256.png"
                    }
                    alt="Image"
                  />
                  <h5>Kurdish</h5>
                </div>
                <div className="item">
                  <img
                    src={"https://cdn1.iconfinder.com/data/icons/unicons-line-vol-3/24/english-to-chinese-256.png"}
                    alt="Image"
                  />
                  <h5>English</h5>
                </div>
                <div className="item">
                  <img
                    src={"https://cdn0.iconfinder.com/data/icons/arabic-alphabet-3/1000/678044-tda-256.png"}
                    alt="Image"
                  />
                  <h5>Arabic</h5>
                </div>
              </Carousel>
              <br></br>
              <h3>Utils Skills</h3>

              <br></br>
              <Carousel
                arrows={false}
                autoPlay={true}
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <h5>Fast Learner</h5>
                </div>
                <div className="item">
                  <h5>Adapting</h5>
                </div>
                <div className="item">
                  <h5>Love Challenges</h5>
                </div>
                <div className="item">
                  <h5>Problem-Solving</h5>
                </div>
              </Carousel>
              <br></br>
              <Carousel
                arrows={false}
                autoPlay={true}
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <h5>Team Work</h5>
                </div>
                <div className="item">
                  <h5>Leadership</h5>
                </div>
                <div className="item">
                  <h5>Communication</h5>
                </div>
                <div className="item">
                  <h5>Deadline Master</h5>
                </div>
              </Carousel>
              <br></br>
              <Carousel
                arrows={false}
                autoPlay={true}
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <h5>Creativity</h5>
                </div>
                <div className="item">
                  <h5>Time management</h5>
                </div>
                <div className="item">
                  <h5>Critical Thinking</h5>
                </div>
                <div className="item">
                  <h5>Project Management</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
