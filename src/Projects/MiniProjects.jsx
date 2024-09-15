import {React , useState} from "react"
import { Swiper, SwiperSlide } from "swiper/react";
import Panorbit from "../assets/images/Mini_project_1.png";
import Greektrust from "../assets/images/Mini_project_2.png";
import TypingTest from "../assets/images/Mini_project_3.png";
import AdminUi from "../assets/images/Mini_project_4.png";
import UserLogin from "../assets/images/Mini_project_5.png";
import JobTracker from "../assets/images/Mini_project_6.png";
import UnsplashClone from "../assets/images/Mini_project_7.png";
import Cricket_Match_Scheduler from "../assets/images/Mini_project_8.png";
import Youtube_Clone from "../assets/images/Mini_project_9.png";
import Virtual_McDonald from "../assets/images/Mini_project_10.png";
import Student_management_system from "../assets/images/Mini_project_11.png";
import Weather_forecast from "../assets/images/Mini_project_12.png";
import chakkraUi_job_lending_page from "../assets/images/Mini_project_13.png";
import Random_Image_Generator from "../assets/images/Mini_project_14.png";
import Advance_todo_app_rander_api from "../assets/images/Mini_project_15.png";
import projectSide from "../assets/images/projectSide.png";
import { Pagination, Autoplay } from "swiper";
import { BsGithub } from "react-icons/bs";
import { TiDocumentText } from "react-icons/ti";
import ScrollAnimation from "react-animate-on-scroll";
const MiniProjects = () => {

    const mini_projects = [
        {
          img: Panorbit,
          name: "User detail",
          description:"This React JS and Tailwind CSS web application features a scrollable landing page with selectable user accounts, leading to a profile home page for logged-in users. The profile displays user details from an API, along with placeholder Coming Soon pages for posts, gallery, and to-do screens. Users can switch profiles via a dropdown, showing profile pictures and usernames, with a sign-out option returning to the landing page. Additionally, the app includes a chat box for user interaction.",
          github_link: "https://github.com/rajkumar7859/panorbit_services",
          live_link: "https://panorbit-services-rajkumar7859.vercel.app/",
        },
        {
          img:Greektrust,
          name: "TeeRex Store",
          description:"It’s a group project where we've used Next.JS to make the TripBook.com with our creativity along with frontend and backend integration its Fully Responsive booking web application that allows you to book hotels, flights and car rental. In this website you can filter, sort hotels by price, rating and reviews.",
          github_link: "https://github.com/rajkumar7859/All_React_app/tree/main/Geektrust_assign1/TeeRex_Store",
          live_link: "https://tee-rex-store-ewk97jgqc-rajkumar7859.vercel.app/",
        },
        {
          img: TypingTest,
          name: "Typing test website",
          description:"This is Typing Test website! This application allows users to test and improve their typing speed and accuracy. The test is designed with various features to provide a comprehensive typing experience, including live tracking of typing accuracy, words per minute (WPM), key count, and more.",
          github_link:
            "https://github.com/masai-course/Rajkumar_fw18_0315/tree/master/codingmock6/todoappmock",
          live_link: "https://chaabiassigntypingtestreact-rajkumar7859s-projects.vercel.app/",
        },
        {
          img: AdminUi,
          name: "Admin Ui page",
          description:"Admin UI is a streamlined web application for efficient employee management. It allows users to search, filter, edit, and delete employee records, with pagination to view 10 employees per page. The platform supports multiple deletions and is built using React.js, Tailwind CSS, and AWS for employee data management.",
          github_link: "https://github.com/rajkumar7859/All_React_app/tree/main/Geektrust_assign1/admin_ui",
          live_link: "https://admin-ui-vert.vercel.app/",
        },
        {
          img: UserLogin,
          name: "User sign up, login and Todo app",
          description:"Task Manager Web App is a React.js and Tailwind CSS application that allows users to securely sign up, log in, and manage tasks. It features a modern, responsive design and includes user authentication for managing tasks efficiently",
          github_link:
            "https://github.com/masai-course/Rajkumar_fw18_0315/tree/master/codingmock6/todoappmock",
          live_link: "https://todoappmock.vercel.app/",
        },
        {
          img: JobTracker,
          name: "job Tracker website",
          description:"Job Application Tracker is a user-friendly web application designed to streamline the process of managing job applications. The application allows users to easily submit their job application details, view a list of their applied jobs, and manage their bookmarked entries.",
          github_link:
            "https://github.com/rajkumar7859/All-codes/tree/main/job%20app%20full%20done",
          live_link: "https://lucent-brioche-5a0c20.netlify.app/",
        },
        {
          img: UnsplashClone,
          name: "Unsplash clone",
          description:"Unsplash Clone is a web application that allows users to search for high-quality images, wallpapers, and trending photos from a wide range of categories. This project is inspired by the popular Unsplash platform and integrates an external image API to deliver a vast collection of free, high-resolution images to users. ",
          github_link:
            "https://github.com/rajkumar7859/All-codes/tree/main/unslapsh1",
          live_link: "https://tranquil-banoffee-005265.netlify.app/",
        },
        {
          img: Cricket_Match_Scheduler,
          name: "Cricket Match Scheduler",
          description:"The Cricket Match Scheduler is a web application designed to manage and display cricket match schedules. Users can input match details such as the number of matches, teams playing, date, and venue through a simple form. The website consists of three main pages ",
          github_link:
            "https://github.com/rajkumar7859/All-codes/tree/main/Masai_match_website",
          live_link: "https://legendary-hamster-8e730e.netlify.app/",
        },
        {
          img: Youtube_Clone,
          name: "Youtube Website Clone",
          description:"The YouTube Website Clone is a web application that mimics the core functionality of YouTube. Users can search for trending videos, view video details, and play videos in a dynamic interface. By leveraging the YouTube API, this clone provides a real-time search feature, enabling users to discover and watch videos without leaving the site. ",
          github_link:
            "https://github.com/rajkumar7859/All-codes/tree/main/Youtube_app_with_trending",
          live_link: "https://youtube-website-clone-git-main-rajkumar7859s-projects.vercel.app/",
        },
        {
          img: Virtual_McDonald,
          name: "Virtual McDonald's",
          description:"Virtual McDonald's App is an interactive website where customers can simulate ordering burgers by selecting options via checkboxes. The app provides a simple and user-friendly interface to choose from various burger options. This is a fun demo app to showcase a virtual fast-food ordering experience.",
          github_link:
            "https://github.com/rajkumar7859/All-codes/tree/main/VIRTUAL%20MCDONALD'S",
          live_link: "https://effervescent-malabi-7c9e36.netlify.app/",
        },
        {
          img: Student_management_system,
          name: "Student management system",
          description:"The Student Management System is a simple web application where students can submit their details through a form. Once submitted, the student details are saved in the browser's local storage and displayed on a dashboard. Administrators can view all the student data on the dashboard and have the ability to remove any student using the Remove button.",
          github_link:
            "https://github.com/rajkumar7859/All-codes/tree/main/STUDENT-MANAGEMENT-SYSTEM",
          live_link: "https://student-management-system-sepia.vercel.app/",
        },
        {
          img: Weather_forecast,
          name: "Weather Forecast",
          description:"The Weather Forecast app provides real-time weather reports for users based on their current location. Users can also search for weather information for specific locations using the search feature. The app integrates Google Maps to display the current location, enhancing the user experience by visualizing location data along with weather information.",
          github_link:
            "https://github.com/rajkumar7859/All-codes/tree/main/wether_app",
          live_link: "https://luxury-gumption-748776.netlify.app/",
        },
        {
          img: chakkraUi_job_lending_page,
          name: "ChakkraUi job landing page",
          description:"This website is a sleek and modern job application platform built using Chakra UI, delivering an intuitive and visually appealing user experience. The clean design, with a minimalistic and responsive layout, ensures seamless navigation across devices.",
          github_link:
            "https://github.com/rajkumar7859/All_React_app/tree/main/chakkraUi_job_lending_page",
          live_link: "https://pbus6k.csb.app/",
        },
        {
          img: Random_Image_Generator,
          name: "Random Image Generator with Login",
          description:"This is a Random Image Generator web application where users can log in to view and interact with random images fetched from an API. After logging in, users are redirected to a dashboard where they can see a list of images with pagination. Clicking on an image name takes the user to a detailed page displaying the full image and its details.",
          github_link:
            "https://github.com/rajkumar7859/All_React_app/tree/main/react_random_image_generate_login",
          live_link: "https://7wo4cx.csb.app/dashboard?page=1",
        },
        {
          img: Advance_todo_app_rander_api,
          name: "Advance Todo App with rander api",
          description:"The Advance Todo App is a feature-rich todo list application built with React.js and styled using CSS. This application allows users to create, manage, and delete todo items, with additional functionality such as marking todos as completed and pagination.",
          github_link:
            "https://github.com/rajkumar7859/All_React_app/tree/main/Advance_todo_app_with_rander_api",
          live_link: "https://4bexsq.csb.app/",
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
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {mini_projects.map((project_info, i) => (
              <SwiperSlide key={i}   >
                <ScrollAnimation animateIn="zoomIn" >
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl " >
                  <img src={project_info.img} alt="" className="rounded-lg hover:shadow-blue-500 hover:scale-105 duration-150" />
                  <h3 className="text-xl mt-4">{project_info.name}</h3>
                  <ProjectDescription description={project_info.description} />
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
                </ScrollAnimation>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="lg:block hidden lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ml-4">
          <img src={projectSide} alt="projectpng" className="w-full object-cover bg-cyan-600 rounded-xl" />
        </div>
      </div>
    </div>
  );
};
export default MiniProjects;
