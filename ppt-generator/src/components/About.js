//Plain home page component
import React from 'react';

function About() {
  return (
    <div className="about">
      <h1 className="text-2xl font-semibold mb-4">Welcome to Caballito PPT Generator!</h1>
      <p>
        This is a simple web app that generates a PowerPoint presentation with images of horses.
      </p>
      <p>Click on the "PPT Generator" link in the navigation bar to get started.</p>
    </div>
  );
}

export default About;
