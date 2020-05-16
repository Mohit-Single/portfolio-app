import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src={require("../img/MHUMAN.jpg")}
                alt="avatar"
                style={{ height: "200px" }}
              />
            </div>

            <h2 style={{ paddingTop: "2em" }}>Mohit Jain</h2>
            <h4 style={{ color: "grey" }}>Full Stack Web Developer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              Web Developer with 2 years of experience in both frontend and
              backend web development, primarily using JavaScript,Python and
              Java. I am seeking a position where I can continue to grow, both
              as a developer and collaborator.
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Address</h5>
            <p>Whitefield,Banglore</p>
            <h5>Phone</h5>
            <p>(+91) 856-20-15152</p>
            <h5>Email</h5>
            <p>mohitkumarjain.it18@gmail.com</p>
            <h5>Web</h5>
            <p>mhuman.tk</p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>

            <Education
              startYear={2014}
              endYear={2018}
              schoolName="JECRC,Jaipur"
              schoolDescription="Bachelor of Technology in Informational Technology &emsp;&nbsp;&nbsp;&emsp;&nbsp;&nbsp;&nbsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&emsp;&nbsp;&nbsp;&nbsp;&emsp;&emsp;&nbsp;&nbsp;&emsp;&nbsp;&nbsp;&nbsp;
              Notable Accomplishments:&emsp;&nbsp;&nbsp;&emsp;&nbsp;&nbsp;&nbsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&emsp;&nbsp;&nbsp;&nbsp;&emsp;&emsp;&nbsp;&nbsp;&emsp;&nbsp;&nbsp;&nbsp;&emsp;&nbsp;&nbsp;&emsp;&nbsp;&nbsp;&nbsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&emsp;&nbsp;&nbsp;&nbsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;--Secured 3rd position in Java Let’s Inter-College Competition &emsp;&nbsp;&nbsp;&emsp;&nbsp;&nbsp;&nbsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;--Selected for Final Round Of Rajasthan Hackathon "
            />

            <Education
              startYear={2012}
              endYear={2014}
              schoolName="Shiv Jyoti School,Kota"
              schoolDescription="PCM"
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />

            <h2>Experience</h2>

            <Experience
              startYear={2018}
              endYear={2020}
              jobName="TCS"
              jobDescription="Served as a Full Stack Web Developer. Working with different clients projects, in which i used javascript,java as well as python"
            />

            <Experience
              startYear={2017}
              endYear={2016}
              jobName="Bodhi AI"
              jobDescription="Worked as Backend Web Developer"
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Skills</h2>
            <Skills skill="Javascript" progress={80} />
            <Skills skill="HTML/CSS" progress={70} />
            <Skills skill="NodeJS" progress={50} />
            <Skills skill="React" progress={40} />
            <Skills skill="Java" progress={60} />
            <Skills skill="Python" progress={25} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
