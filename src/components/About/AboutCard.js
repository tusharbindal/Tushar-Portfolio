import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Tushar Bindal </span>
            from <span className="purple"> Agra, Uttar Pradesh.</span>
            <br />
            I am currently employed as a PHP Developer at Lloyd Group of Institutions.
            <br />
            I have completed Master of Computer Application (MCA) at GLA University, Mathura.
           
            <br />
            
            I have completed Bachelors in Computer Application (BCA) at Dr Bhimrao Ambedkar University, Agra.
            <br />
            <br />
            A part from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
       
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Tushar Bindal</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
