export const navItems = [
  { name: "Top", link: "#top" },
  { name: "Projects", link: "#projects" },
  { name: "Gallery", link: "#gallery" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "MATHEMATICIAN",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-2 lg:min-h-[60vh]",
    ImageClassName: "w-full h-full",
    titleClassName: "justify-end",
    Image: "/b1.svg",
    spareImage: "",
  },
  {
    id: 2,
    title: "STAY TUNED FOR MORE COOL STUFF",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    ImageClassName: "",
    titleClassName: "justify-start",
    Image: "",
    spareImage: "",
  },
  {
    id: 3,
    title: "MY TECH STACK",
    description: "The more the better!",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    ImageClassName: "",
    titleClassName: "justify-center",
    Image: "",
    spareImage: "",
  },
  {
    id: 4,
    title: "ARTIST",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2 object-cover",
    ImageClassName: "",
    titleClassName: "justify-start",
    Image: "/bowei-scanner-light.jpg",
    spareImage: "/b4.svg",
  },

  {
    id: 5,
    title: "REACT & NEXTJS DEVELOPER",
    description: "Website development",
    className: "md:col-span-3 md:row-span-2",
    ImageClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    Image: "/b5.svg",
    spareImage: "/grid.svg",
  },
  // {
  //   id: 6,
  //   title: "Do you want to start a project together?",
  //   description: "",
  //   className: "lg:col-span-2 md:col-span-3 md:row-span-1",
  //   ImageClassName: "",
  //   titleClassName: "justify-center md:max-w-full max-w-60 text-center",
  //   Image: "",
  //   spareImage: "",
  // },
];
export const icons = {
  // Languages
  JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  TypeScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  Python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  Java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  SQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  C: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  "C++": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  "C#": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
  Bash: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
  HTML: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",

  // Frameworks
  PostgreSQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  "Spring Boots": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  Tailwind: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  Unity: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg",
  "GameMaker Studio": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/godot/godot-original.svg", // Placeholder icon for GameMaker Studio

  // Libraries
  React: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "React Native": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "React Three Fiber": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg",
  Pandas: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
  Numpy: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
  TensorFlow: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  Matplotlib: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", // Placeholder for Matplotlib
  "scikit-learn": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", // Placeholder for scikit-learn

  // Software Tools
  Blender: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg",
  Photoshop: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-line.svg",
  "3D Substance Painter": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-line.svg", // Placeholder for Substance Painter
  "Premiere Pro": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-original.svg",
  WordPress: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg",
  Wix: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg", // Placeholder for Wix
};


export const projects = [
  {
    id: 1,
    title: "React Motion Graphics",
    des: "React Motion Graphics Application, visit for immersive and interactive experiences!",
    src: "/motionGraphics.svg",
    iconLists: [
      icons["JavaScript"],
      icons["Blender"],
      "/three.svg",
    ],
    link: "https://motion-graphics-aniu.vercel.app/",
  },
  {
    id: 2,
    title: "InfoSTU",
    des: "Student Info Application, developed with Next.js and Spring Boot",
    src: "/infoSTU.svg",
    iconLists: [
      icons["React"],
      icons["Next.js"],
      icons["Java"],
      icons["TypeScript"],
      icons["PostgreSQL"],
    ],
    link: "https://info-stu.vercel.app/",
  },
]

export const Drawings = [
  {
    src: "/bowei-e.jpg",
  },
  {
    src: "/bowei-asset (1).jpg"
  },
  {
    src: "/bowei-asset (2).jpg"
  },
  {
    src: "/bowei-img-2472.jpg"
  },
  {
    src: "/bowei-img-9360.jpg"
  }
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    Image: "/cloud.svg",
    nameImage: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    Image: "/app.svg",
    nameImage: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    Image: "/host.svg",
    nameImage: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    Image: "/s.svg",
    nameImage: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    Image: "/dock.svg",
    nameImage: "/dockerName.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    Image: "/git.svg",
    link: "https://github.com/DuperBSG/"
  },
  {
    id: 2,
    Image: "/ArtStation-logomark-dark.svg",
    link: "https://www.artstation.com/duperbsg"
  },
  {
    id: 3,
    Image: "/link.svg",
    link: "https://www.linkedin.com/in/bowei-zhang-0710a32a8/"
  },
];