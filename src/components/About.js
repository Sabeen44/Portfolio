
import Nav from "./MyNavbar";
import Profile from "./Profile";
import Intro from "./Intro";
import Footer from "./Footer"

export default function About() {
  return (
    
    <div className='grid-container'>
    <Nav /> 
    <Profile/>
    <Intro/>
    <Footer/>
   

      {/* <div className="container px-5 py-10 mx-auto text-center lg:px-40 intro" >
        <div className="flex flex-col w-full mb-20">
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base intro">
            I am excited to share my portfolio with you. You can find my
            web-developement projects in this portfolio. I have experience in
            HTML, CSS, JavaScript, React, Node.js, MongoDB. I enjoy learning new
            technologies and tools, and I’m looking for new challenges and
            opportunities to improve my skills and grow as a web developer. I’m
            passionate about creating beautiful and functional web solutions
            that meet the needs and expectations of the users. I’m also
            interested in web design, UX/UI design, SEO, and web accessibility.
            I am currently available for freelance work.
          </p>
        </div>
      </div> */}
    </div>
    
    
  );
}


