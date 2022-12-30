import project1 from "../assets/projects/project1.jpg";
import project2 from "../assets/projects/project2.jpg";
import project3 from "../assets/projects/project3.jpg";
import project4 from "../assets/projects/project4.jpg";

import development from "../assets/services/development.jpg";
import webDesign from "../assets/services/webDesign.jpg";
import contentWriting from "../assets/services/contentWriting.jpg";

export const projects = [
     {
          title: 'Website for Euromobila',
          description: 'This website was created for our friends at Euromobila. They wanted a clean, modern website, so that their clients could easily find their products.',
          id:1,
          image: project1,
          url: 'https://euromobila.vercel.app'
     },
     {
          title: 'House Marketplace',
          description: 'This is a house marketplace website, where people can post their houses for sale or rent. It includes authentication, a personal profile where you can manage your listings and many features.',
          id:2,
          image: project3,
          url:'https://houses-for-sale.vercel.app',
     }, 
     {
          title: 'Photography Portfolio',
          description: 'This is a photography portfolio. The client wanted a simple website to showcase his work and make it it easier for clients to contact him.',
          id:3,
          image: project4,
          url: 'https://daniel-s-website.vercel.app'
     },
     {
          title: 'Portfolio Website',
          description: 'This is the personal portfolio of one of our team members.',
          id:4,
          image: project2,
          url: 'https://damianwebdev.vercel.app'
     }
]

export const services = [
     {
       text: "UI/UX Design",
       id: 1,
       description: "We design user-friendly and aesthetically pleasing interfaces to make sure that your clients will enjoy using your website.",
       image: webDesign
     },
     {
       text: "Development",
       id: 2,
       description: "We'll develop your website using the latest technologies and best practices.",
       image: development
     },
     {
       text: "Content Writing",
       id: 3,
       description: "We'll write compelling content for your website to keep your clients engaged and motivate them to take action.",
       image: contentWriting
     }
     ]
