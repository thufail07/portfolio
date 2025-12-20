import blog1Img from '../assets/blogs/1.jpg';
import blog2Img from '../assets/blogs/2.jpg';
import blog3Img from '../assets/blogs/3.jpg';
import blog4Img from '../assets/blogs/4.jpg';

const blogData = [
    {
        id: 1,
        title: "Getting Started with Web Development",
        img: blog1Img,
        slug: "getting-started-with-web-development",
        date: "June 10, 2025",
        readTime: "5 min read",
        content: `
      <p>Web development is one of the most exciting and in-demand skills in the tech industry today. It involves creating websites and web applications that are fast, responsive, and user-friendly.</p>
      <p>As a beginner, starting with <strong>HTML, CSS, and JavaScript</strong> is essential:</p>
      <ul>
        <li><strong>HTML</strong> helps structure your content semantically.</li>
        <li><strong>CSS</strong> styles it beautifully and enables responsive layouts.</li>
        <li><strong>JavaScript</strong> adds interactivity and dynamic behavior.</li>
      </ul>
      <p>With consistent practice and real-world projects—like building a personal portfolio or a to-do app—you can build a strong foundation. Don’t just follow tutorials; experiment, break things, and rebuild!</p>
      <p>Remember: every expert was once a beginner. Keep coding!</p>
    `
    },
    {
        id: 2,
        title: "Why I Chose React for Frontend Development",
        img: blog2Img,
        slug: "why-i-chose-react-for-frontend-development",
        date: "June 15, 2025",
        readTime: "4 min read",
        content: `
      <p>React is a powerful JavaScript library used for building modern user interfaces. I chose React because of its component-based architecture, reusability, and strong community support.</p>
      <p>Key reasons I love React:</p>
      <ul>
        <li>✅ <strong>Component Reusability</strong>: Write once, use anywhere.</li>
        <li>✅ <strong>Virtual DOM</strong>: Fast and efficient updates.</li>
        <li>✅ <strong>Rich Ecosystem</strong>: Tools like React Router, Redux, and Tailwind CSS integrate seamlessly.</li>
        <li>✅ <strong>Job Market Demand</strong>: One of the most sought-after frontend skills.</li>
      </ul>
      <p>Combining React with <strong>Tailwind CSS</strong> lets me build stunning UIs rapidly without leaving JavaScript.</p>
    `
    },
    {
        id: 3,
        title: "Understanding the MERN Stack",
        img: blog3Img,
        slug: "understanding-the-mern-stack",
        date: "June 20, 2025",
        readTime: "6 min read",
        content: `
      <p>The MERN stack consists of <strong>MongoDB, Express.js, React, and Node.js</strong>. It’s a full-stack JavaScript solution that allows you to build end-to-end applications using a single language.</p>
      <p>Here’s how it works:</p>
      <ul>
        <li><strong>MongoDB</strong>: NoSQL database for flexible data storage.</li>
        <li><strong>Express.js</strong>: Web framework for building REST APIs.</li>
        <li><strong>React</strong>: Frontend library for dynamic user interfaces.</li>
        <li><strong>Node.js</strong>: Runtime environment to run JavaScript on the server.</li>
      </ul>
      <p>My project <strong>Buddy Maga</strong> (a to-do app) was built using the MERN stack—giving me hands-on experience in authentication, CRUD operations, and deployment.</p>
    `
    },
    {
        id: 4,
        title: "My Journey as a Junior Web Developer",
        img: blog4Img,
        slug: "my-journey-as-a-junior-web-developer",
        date: "June 25, 2025",
        readTime: "5 min read",
        content: `
      <p>My journey as a Junior Web Developer has been full of learning and growth. From building simple static pages to developing full-stack applications, every project taught me something new.</p>
      <p>Key learnings:</p>
      <ul>
        <li>💡 <strong>Problem-Solving</strong> is more important than memorizing syntax.</li>
        <li>💡 <strong>Git & GitHub</strong> are essential for collaboration and version control.</li>
        <li>💡 <strong>Code Quality</strong> matters—clean, readable, and maintainable code wins.</li>
        <li>💡 <strong>Ask Questions</strong>—the dev community is incredibly supportive.</li>
      </ul>
      <p>I believe <strong>continuous learning, consistent practice, and genuine passion</strong> are the keys to becoming a successful developer.</p>
      <p>And the journey has only just begun!</p>
    `
    }
];

export default blogData;