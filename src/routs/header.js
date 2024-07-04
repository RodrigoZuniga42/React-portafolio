import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header>
      <h4>Hi,</h4>
      <h4>I'm Rodrigo!</h4>
      <h4>Welcome to my Crib!</h4>
      <p>
      I am a passionate Jr. Java Developer and a Salesforce Analyst with a knack for creating innovative and efficient software. I possess strong object-oriented programming skills and am well-versed in the fundamental principles of software development. I have experience working with common Java tools and technologies, and I am eager to learn more and expand my skillset.
      </p>
      <Link to="/about">
        <button className="btn"> Read more..</button>
      </Link>
    </header>
  );
}