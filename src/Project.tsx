import  { useState } from 'react';
import image from'./Project-dishes.png';
import image2 from './Books-project.jpeg';
import image3 from './Authentication-project.jpeg'
import eccom from './Eccomerce.jpg'
import app from './WhatsApp Image 2024-07-11 at 14.46.10_02aa515a.jpg'
import ai from './Ai Voice Asistant.jpg'
import { FaGithub } from 'react-icons/fa';
import chatApp from './WhatsApp Image 2024-09-07 at 18.32.23.jpeg'


const Project = () => {
  const [projects] = useState([
    {
      title: "Food-DeliveryApp",
      description: "A fully functional animated Food Delivery website  ",
      technologies: ["Redux", "React", "TailwindCss",],
      image:image
    },
    {
      title: "BookStore App",
      description: "An application for buying and renting books, with features such as AdminPanel, user profile,favoriteProdcuts,User OrderHistory, user authentication,Caching,ApiKeys ...",
      technologies: ["HTML", "CSS", "React", "Asp.Net","SqlServer","Redux"],
      image:image2
    },
    {
      title: "Authentication System",
      description: "An Authentication System that has alot of features such as user authentication,forgot and reset password,RefreshTokens,ApiKeys,Role-based Authoriztion,HashedPasswords",
      technologies: ["Asp.Net","SqlServer"],
      image:image3
    
    },
    {
      title: "Eccomerce Platform",
      description: "An animated eccomerce platform for buying prodcuts, with features like buying AddTocart,Caching,product details and alot more .",
      technologies: ["HTML", "Tailwnd css", "React", "Asp.net", "Postgresql"],
      image:eccom
      
    },
    {
      title: "Diliveroo App",
      description: "",
      technologies: ["React Native", "TypeScript"],
      image:app
      
    },
    {
      title: "Ai Voice Assistant",
      description: "A powerful ai voice assistant with abilities of ChatGPT and Dall-E, poviding you the best of both worlds",
      technologies: ["React Native", "Javascript","ChatGPT OpenAI","Dall-E"],
      image:ai
      
    },
    {
        title: "Chat App ReactNative",
        description: "Dive into the world of real-time communication with this feature-packed chat app built using React Native and Firebase. This application showcases a seamless blend of cutting-edge technology and user-centric features, delivering an exceptional messaging experience.",
        technologies: ["React Native", "TypeScript","Firebase"],
        image:chatApp
        
      },
      {
        title: "Asp Net MicroServices Shop",
        description: "A powerful Shop Api Designed using Microservices Architecture utilizing Docker Compose for container orchestration. This app integrates SQL and NoSQL databases, Redis for caching, and employs CQRS with MediatR for efficient data handling. Key features include scalable architecture, robust data management, and optimized performance.",
        technologies: ["Asp Net", "Redis","MongoDb","Grpc","Polly"],
        image:"data:image/jpeg;base64,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"
        
      },

  ]);

  return (
    <div className='border-b  border-neutral-900 pb-4 lg:mb-35'>
      <h1 className='my-20 text-center text-4xl'>Projects</h1>
      <div>
        {projects.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center lg:flex">
            <div className='w-full lg:w-1/4 ' >
             
              
                  <img 
                width={150}
                height={150} 
                className='mb-6 rounded image-animate'
                src={project.image}
              />
               <a href='https://github.com/AliAlhadiAk?tab=repositories'> <FaGithub /></a>
             
            </div>
            <div className='w-full max-w-xl lg:w-3/4 div-animate'>
                <h6 className='mb-2 font-semibold'>{project.title}</h6>
            
                <p className=',b-4 text-neutral-400'>{project.description}</p>
                <div className='flex gap-2 flex-row flex-wrap'>
                {project.technologies.map((tech,index)=>(
                    <span key={index}
                    className='mr-2 rounded bg-neutral-900
                    py-1 px-2 text-small

                    font-medium
                    text-purple-900'>
                        {tech}
                    </span>
                ))}
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;