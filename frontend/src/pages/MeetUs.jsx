import { useEffect } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import ayush from "../assets/me-surkanda.jpg";

const MeetUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);

  const team = [
    {
      avatar:
        "https://media.licdn.com/dms/image/D4D03AQH90nj6oNDJ8g/profile-displayphoto-shrink_400_400/0/1677293866169?e=1720656000&v=beta&t=0yRohJ0pM_ReSWAWficOqLDiQSg4yJLGXdX_77tySvw",
      name: "Rishabh Bhatt",
      title: "Founder & Backend Developer",
      desc: "A MERN stack developer is someone who works with MongoDB, Express.js, React.js, and Node.js to build full-stack web applications. They're skilled in both front-end and back-end development, creating dynamic and interactive user experiences.",
      linkedin: "https://www.linkedin.com/in/rishabh-bhatt-493a10244/",
      Instagram: "#",
      github: "#",
    },
    {
      avatar: "https://media.licdn.com/dms/image/D5603AQFjhhiAvA8K4Q/profile-displayphoto-shrink_400_400/0/1691830326346?e=1720656000&v=beta&t=Fj41COyCMZ7G7cNQOmoWy1n5OwDbc4mV_NkMjuqtAbY",
      name: "Ayush Butola",
      title: "Founder & MERN Stack Developer",
      desc: "A MERN stack developer is someone who works with MongoDB, Express.js, React.js, and Node.js to build full-stack web applications. They're skilled in both front-end and back-end development, creating dynamic and interactive user experiences.",
      linkedin: "https://www.linkedin.com/in/ayush-butola-655456270/",
      Instagram: "#",
      github: "#",
    },
  ];

  return (
    <section className="py-14 font-Alice">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-4xl">
          <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Meet <span className="text-[#009c86]">Us</span>
          </h3>
          <p className="text-gray-600 mt-3">
            We are a team of two founders who are passionate about
            revolutionizing education through technology. Ayush, skilled MERN
            Stack developer, proficient in MongoDB, Express.js, React.js, and
            Node.js. He specializes in creating interactive and user-friendly
            interfaces. Rishabh, talented Backend Developer, brings expertise in
            building robust server-side solutions to ensure seamless
            functionality and data management for our e-learning platform.
            Together, we are committed to delivering an exceptional online
            learning experience for our users.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((item, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-xl p-6">
              <img
                src={item.avatar}
                className="w-full h-auto object-contain rounded-xl mb-4"
                alt=""
              />
              <h4 className="text-lg text-gray-700 font-semibold">
                {item.name}
              </h4>
              <p className="text-indigo-600">{item.title}</p>
              <p className="text-gray-600 mt-2">{item.desc}</p>
              <div className="mt-3 flex justify-center sm:justify-start gap-4 text-gray-400">
                <a href={item.linkedin}>
                  <FaLinkedin
                    size={25}
                    className="duration-150 hover:text-gray-600"
                  />
                </a>
                <a href={item.github}>
                  <FaSquareInstagram
                    size={25}
                    className="duration-150 hover:text-gray-600"
                  />
                </a>
                <a href={item.github}>
                  <FaGithub
                    size={25}
                    className="duration-150 hover:text-gray-600"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetUs;
