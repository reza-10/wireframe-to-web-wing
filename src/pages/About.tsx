const About = () => {
  return (
    <div className="min-h-screen bg-background pl-56">
      <div className="max-w-4xl mx-auto p-12">
        <h2 className="text-sm font-semibold text-muted-foreground mb-8 tracking-wide">
          ABOUT ME
        </h2>
        <div className="bg-card rounded-lg p-8 shadow-sm">
          <h1 className="text-4xl font-bold mb-6">Hi, I'm Reza</h1>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              I'm a UX Designer passionate about creating intuitive and impactful digital experiences. 
              With a focus on user-centered design, I help businesses transform their products and 
              drive meaningful engagement.
            </p>
            <p>
              My expertise spans user research, interface design, prototyping, and usability testing. 
              I believe in data-driven design decisions that balance business goals with user needs.
            </p>
            <p>
              Over the years, I've worked with various companies to improve conversion rates, 
              enhance user engagement, and digitize complex workflows.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
