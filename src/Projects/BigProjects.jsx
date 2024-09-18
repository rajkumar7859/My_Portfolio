import {React ,useState }  from "react"
import { Swiper, SwiperSlide } from "swiper/react";
import Tata_1mg from "../assets/images/Big_project_1.png";
import tripBook from "../assets/images/Big_project_2.png";
import GearBest from "../assets/images/Big_project_3.png";
import netmeds from "../assets/images/Big_project_4.png";
import projectSide from "../assets/images/projectSide.png";
import { Pagination, Autoplay } from "swiper";
import { BsGithub } from "react-icons/bs";
import { TiDocumentText } from "react-icons/ti";
import ScrollAnimation from "react-animate-on-scroll";


const BigProjects =()=>{

    const Big_projects = [
        {
          img: Tata_1mg,
          name: "Tata 1mg ",
          description:"It’s a indivisible project where I have show my creativity along with frontend and backend integration its Fully Responsive booking web application that allows you to book medicine and health related thing. In this website you can filter, sort hotels by price, rating and reviews.",
          github_link: "https://github.com/Sridhar-C-25",
          live_link: "https://tata-1mg-clone-project.vercel.app/",
        },
        {
          img: tripBook,
          name: "Tripbook.com",
          description:"It’s a group project where we've used Next.JS to make the TripBook.com with our creativity along with frontend and backend integration its Fully Responsive booking web application that allows you to book hotels, flights and car rental. In this website you can filter, sort hotels by price, rating and reviews.",
          github_link: "https://github.com/rajkumar7859/strong-cover-1612",
          live_link: "https://tripbook.vercel.app/",
        },
        {
          img: GearBest,
          name: "GearBest.com",
          description:"It’s a group project where we've used HTML ,CSS , & js with our creativity along with frontend and backend integration. In this website you can filter, sort hotels by price, rating and reviews.",
          github_link: "https://github.com/jayvaish/GearBest",
          live_link: "https://luxury-raindrop-e6b139.netlify.app/",
        },
        {
          img: netmeds,
          name: "Netmeds.com",
          description:"It’s a group project where I have show my creativity along with frontend and backend integration it's allows you to book medicine and health related thing. In this website you can filter, sort hotels by price, rating and reviews.",
          github_link:
            "https://github.com/lalitk1997/Construct-Project-Netmeds.com",
          live_link: "https://luminous-jelly-c4e3d7.netlify.app/landing.html",
        },
      ];


      const ProjectDescription = ({ description }) => {
        // State to track whether the full description is shown
        const [isExpanded, setIsExpanded] = useState(false);
      
        // Function to toggle the expanded state
        const toggleExpand = () => {
          setIsExpanded(!isExpanded);
        };
      

        return(

          <div>
          <p className="text-sm">
            {isExpanded ? description : `${description.substring(0, 70)}...`}
          </p>
          <button onClick={toggleExpand} className="text-blue-500">
            {isExpanded ? "See Less" : "See More"}
          </button>
        </div>
      );
    };
  

    return (
      <div>
         <ScrollAnimation animateIn="fadeInLeft" delay={0.2*1000} >
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative ">
        <div className="lg:w-2/3 w-full ">
          <Swiper
            slidesPerview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 2000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {Big_projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl  ">
                  <img src={project_info.img} alt="" className="rounded-lg  hover:scale-105 duration-150" />
                  <h3 className="text-xl mt-4">{project_info.name}</h3>
                  <ProjectDescription 
                      description={project_info.description}
                    />
                  {/* <p className="text-sm line-clamp-4 " >{project_info.description}</p> */}
                  <div className="flex gap-3 justify-between my-4">
                    <a
                    rel="noopener noreferrer"
                      href={project_info.github_link}
                      target="_blank"
                      >
                      GitHub <BsGithub className="inline mb-2 ml-2 text-[1.5rem] animate-bounce text-blue-400"></BsGithub>
                    </a>
                    <a
                    rel="noopener noreferrer"
                      href={project_info.live_link}
                      target="_blank"
                      >
                      Live <TiDocumentText  className="inline mb-2 ml-2 text-[1.5rem] animate-bounce text-blue-400" />
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="lg:block hidden lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg  ml-4">
          <img src={projectSide} alt="projectpng" className="w-full object-cover bg-cyan-600 rounded-xl" />
        </div>
      </div>
</ScrollAnimation>
    </div>
  )
}

export default BigProjects