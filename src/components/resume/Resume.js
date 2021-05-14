import React from "react";
import "./Resume.css";

const Resume = (props) => {
  return (
    <div className="resume-container">
      <div>
        <div className="header">
          <h1>Adam Gawish</h1>
          <ul>
            <li>
              <h5>954.479.2291</h5>
            </li>
            <li>
              <h5>GawishAdam@gmail.com</h5>
            </li>
            <li>
              <h5>/in/AdamGawish</h5>
            </li>
            <li>
              <h5>AdamGawish.com</h5>
            </li>
          </ul>
        </div>
        <div className="resume-content">
          <section>
            <h3>SKILLS</h3>
            <ul>
              <li>
                Proficient in React.js, JavaScript, CSS, Semantic-UI, HTML, Git,
                and Github
              </li>
              <li>
                Knowledgable in Node.js, Webpack, Babel, RestAPIs, Bootstrap,
                AWS, and Redux
              </li>
              <li>
                Understanding of Agile Processes; ability to design and build
                single-page web applications
              </li>
              <li>
                Ability to deconstruct and prioritize tasks effectively with
                strong attention to detail
              </li>
              <li>
                Excellent organizational and time management skills; capacity to
                meet scheduled deadlines
              </li>
              <li>
                Growth mindset, innovative problem-solver, strong sense of
                integrity, dependable
              </li>
            </ul>
          </section>
          <section>
            <h3>PROFESSIONAL EXPERIENCE </h3>
            <h4>
              MapTopia // San Jose, CA December 2018 – Present{" "}
              <h4>Front-End Developer</h4>
            </h4>
            <ul>
              <li>
                Contract developer working remotely for tech start-up based in
                Silicon Valley
              </li>
              <li>
                Establish front-end presence for emerging Start-Up to meet
                company goals and standards
              </li>
              <li>
                Design and develop initial user interface using React.js,
                Semantic-UI, JavaScript, and other web technologies
              </li>
              <li>
                Collaborate with other engineers and senior managers to
                strategize, coordinate, and accomplish project objectives
              </li>
              <li>
                Maintain confidentiality of technology as MapTopia is in stealth
                mode
              </li>
            </ul>
          </section>
          <section>
            <h4>
              Mobile Marketing Association // New York, NY September 2017 –
              Present <h4>Events Team</h4>
            </h4>
            <ul>
              <li>
                Responsible for setup of conference and special event technology
                including laptops, tablets, mobile phones, display monitors, and
                network printers and troubleshoot accordingly
              </li>
              <li>
                Perform daily checks on equipment functionality and address
                onsite issues quickly and efficiently
              </li>
              <li>
                Oversee Internet of Things (IoT) Showcase and interact with
                attendees to demo the latest trends
              </li>
              <li>
                Update event spec sheets prior to events and organize, package,
                label, and transport sponsor collateral
              </li>
              <li>
                Track and receive all packages; assemble gift bags and
                distribute materials and signage appropriately
              </li>
              <li>
                Support the MMA Events Team with onsite registration, event
                flow, and allocation of sponsor deliverables
              </li>
            </ul>
          </section>
          <section>
            <h4>
              Sinbad Sports and Entertainment // Fort Lauderdale, FL December
              2015 – September 2017{" "}
              <h4>Assistant Manager & Event Coordinator</h4>
            </h4>
            <ul>
              <li>
                Oversaw day to day operations including store opening and
                closing procedures
              </li>
              <li>
                Worked closely with upper management to achieve sales goals and
                develop marketing strategies
              </li>
              <li>
                Handled merchandising, inventory control systems, ordering, cash
                control, and security/alarm systems
              </li>
              <li>
                Analyzed data to prepare daily, weekly and monthly sales reports
              </li>
              <li>
                Organized, inventoried, and staged new merchandise shipments and
                maintained the memorabilia collection
              </li>
              <li>
                Traveled for Super Bowl and other special events, set up
                merchandise, handled sales transactions
              </li>
              <li>
                Managed online ticket sales for Athlete signing events and
                tracked signed merchandise
              </li>
            </ul>
          </section>
          <section>
            <h4>
              American Cap Exchange // Miami, FL July 2013 – December 2015
              <h4>Warehouse Associate</h4>
            </h4>
            <ul>
              <li>
                Unloaded truck shipments, reconciled purchase orders with sales
                orders, tagged incoming merchandise with warehouse
                identifications, pulled samples for showroom and placed
                merchandise in designated areas accordingly
              </li>
              <li>
                Pulled orders for shipping and boxed and padded appropriately
              </li>
              <li>
                Monitored inventory counts and prepared purchase order to
                replenish packing station materials and supplies
              </li>
            </ul>
          </section>
          <section>
            <h3>EDUCATION</h3> Broward College // Fort Lauderdale, FL 2016 –
            2017
          </section>
        </div>
        <section className="references">
          <h6>Professional references available upon request</h6>
        </section>
      </div>
    </div>
  );
};

export default Resume;
