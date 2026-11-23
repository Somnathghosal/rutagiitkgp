// Centralized image references.
// Swap these URLs at any time — every section reads from this file.
import skillDevImg1 from "./assests/Skill_Dev_Prog/Skill_Dev_Prog_Img_1.png";
import workshopImg1 from "./assests/HandsOn_Workshop/Workshop_Img1.png";
import fieldTripImg1 from "./assests/Field_Trips/Field_Trip_Img1.png";
import techFamiImg1 from "./assests/Tech_Familiarisation/Tech_Familizn_Img1.png";
import visitorsImg1 from "./assests/Visitors_Exchange/Visitors_Img1.png";




const pexels = (url, w = 1600) => {
  const base = url.split('?')[0];
  return `${base}?auto=compress&cs=tinysrgb&w=${w}`;
};

export const heroImage = pexels(
  'https://images.pexels.com/photos/17718720/pexels-photo-17718720.jpeg',
  1800
);

export const storyImages = [
  {
    src: pexels('https://images.pexels.com/photos/37495850/pexels-photo-37495850.jpeg', 1800),
    caption: 'Listening Before Innovating',
    sub: 'Understanding the realities of rural communities before designing solutions.',
  },
  {
    src: pexels('https://images.pexels.com/photos/28240873/pexels-photo-28240873.jpeg', 1800),
    caption: 'Engineering for Communities',
    sub: 'Adapting technology to work within the constraints it must serve.',
  },
  {
    src: pexels('https://images.pexels.com/photos/5506058/pexels-photo-5506058.jpeg', 1800),
    caption: 'Innovation Creating Impact',
    sub: 'Translating research from the lab into dependable, lasting impact.',
  },
];

export const aboutImage = pexels(
  'https://images.pexels.com/photos/20458079/pexels-photo-20458079.jpeg',
  1400
);





// ---- Activities ----
export const activityImages = {
  training: skillDevImg1,
  workshop: workshopImg1,
  fieldTrip: fieldTripImg1,
  skillDev: skillDevImg1,
  repair: pexels('https://images.pexels.com/photos/35305055/pexels-photo-35305055.jpeg', 1200),
  electronics: pexels('https://images.pexels.com/photos/31800980/pexels-photo-31800980.jpeg', 1200),
  classroom: pexels('https://images.pexels.com/photos/30902103/pexels-photo-30902103.jpeg', 1200),
  practical: pexels('https://images.pexels.com/photos/34212681/pexels-photo-34212681.jpeg', 1200),
};

export const activities = [
  {
    icon: 'GraduationCap',
    title: 'Skill Development Programmes',
    image: activityImages.training,
    accent: 'accent',
    desc: 'Structured training programmes designed to equip rural youth with practical, employable skills — from carpentry and metalwork to basic electronics and mechanical repair.',
    points: ['Carpentry & Woodworking', 'Basic Electronics', 'Mechanical Repair', 'Solar Panel Installation'],
  },
  {
    icon: 'Wrench',
    title: 'Hands-on Workshops',
    image: activityImages.workshop,
    accent: 'amber',
    desc: 'Interactive workshops where participants build, test, and iterate on real prototypes — learning by doing rather than by instruction alone.',
    points: ['Live Prototyping', 'Tool & Material Familiarity', 'Collaborative Problem Solving', 'Safety & Best Practices'],
  },
  {
    icon: 'Map',
    title: 'Field Trips & Village Visits',
    image: fieldTripImg1,
    accent: 'emerald',
    desc: 'Immersive visits to rural communities where participants observe real conditions firsthand, understand local needs, and ground their designs in lived reality.',
    points: ['Community Interaction', 'Needs Assessment', 'Ground Truthing', 'Cultural Context'],
  },
  {
    icon: 'Users',
    title: 'Visitors & Knowledge Exchange',
    image: visitorsImg1,
    accent: 'sky',
    desc: 'Welcoming researchers, students, and organisations to explore rural technologies and exchange ideas for meaningful field impact.',
    points: ['Centre Visits', 'Technology Demonstrations', 'Knowledge Exchange', 'Field Impact Discussions'],
  },
  {
    icon: 'Cpu',
    title: 'Technology Familiarisation',
    image: techFamiImg1,
    accent: 'violet',
    desc: 'Sessions that introduce rural youth to modern technology — sensors, circuits, and embedded systems — demystifying the tools that power rural innovation.',
    points: ['Sensor Basics', 'Circuit Assembly', 'Embedded Systems Intro', 'Diagnostic Techniques'],
    



  },
  // {
  //   icon: 'Hammer',
  //   title: 'Traditional Craft Integration',
  //   image: activityImages.skillDev,
  //   accent: 'rose',
  //   desc: 'Programmes that bridge traditional rural craftsmanship with modern engineering, preserving heritage while improving durability and efficiency.',
  //   points: ['Craft + Engineering', 'Material Innovation', 'Heritage Preservation', 'Market Linkage'],
  // },
];

// ---- Events ----
export const eventImages = {
  conference: pexels('https://images.pexels.com/photos/9275222/pexels-photo-9275222.jpeg', 1200),
  seminar: pexels('https://images.pexels.com/photos/1708936/pexels-photo-1708936.jpeg', 1200),
  workshop: pexels('https://images.pexels.com/photos/38020816/pexels-photo-38020816.jpeg', 1200),
  handsOn: pexels('https://images.pexels.com/photos/9242216/pexels-photo-9242216.jpeg', 1200),
  auditorium: pexels('https://images.pexels.com/photos/301987/pexels-photo-301987.jpeg', 1200),
  soldering: pexels('https://images.pexels.com/photos/34007246/pexels-photo-34007246.jpeg', 1200),
};

export const events = [
  {
    type: 'Conference',
    title: 'Rural Technology Innovation Conference',
    date: 'March 2025',
    location: 'IIT Kharagpur Campus',
    image: eventImages.conference,
    desc: 'An annual gathering of researchers, practitioners, and community leaders exploring the intersection of technology and rural development.',
    featured: true,
  },
  {
    type: 'Seminar',
    title: 'Sustainable Rural Engineering Seminar',
    date: 'January 2025',
    location: 'Rajendra Mishra Hall',
    image: eventImages.seminar,
    desc: 'A focused seminar series on designing engineering solutions that are environmentally sustainable and socially appropriate.',
    featured: false,
  },
  {
    type: 'Hands-on Training',
    title: 'Embedded Systems for Rural Applications',
    date: 'February 2025',
    location: 'RuTAG Workshop',
    image: eventImages.handsOn,
    desc: 'A multi-day intensive programme training participants in building low-cost embedded systems for real-world rural deployment.',
    featured: true,
  },
  {
    type: 'Workshop',
    title: 'Appropriate Technology Design Workshop',
    date: 'April 2025',
    location: 'Innovation Lab',
    image: eventImages.workshop,
    desc: 'A collaborative design workshop where multidisciplinary teams prototype solutions to challenges identified during field visits.',
    featured: false,
  },
  {
    type: 'Seminar',
    title: 'Community-Driven Innovation Talks',
    date: 'May 2025',
    location: 'Seminar Complex',
    image: eventImages.auditorium,
    desc: 'A talk series featuring community members and innovators sharing firsthand experiences of technology adoption in rural settings.',
    featured: false,
  },
  {
    type: 'Hands-on Training',
    title: 'Precision Fabrication Programme',
    date: 'June 2025',
    location: 'RuTAG Workshop',
    image: eventImages.soldering,
    desc: 'An advanced training programme on precision fabrication techniques — machining, welding, and assembly for durable rural technology.',
    featured: false,
  },
];

// ---- Infrastructure (section-wise, each with multiple images) ----
export const infraSections = [
  {
    id: 'central-office',
    title: 'RuTAG Central Office',
    tag: 'Organisation',
    desc: 'The administrative hub coordinating research, field operations, partnerships, and student engagement across all RuTAG initiatives. It is where strategy is shaped, projects are managed, and collaborations are forged.',
    images: [
      pexels('https://images.pexels.com/photos/36631701/pexels-photo-36631701.jpeg', 1200),
      pexels('https://images.pexels.com/photos/6285158/pexels-photo-6285158.jpeg', 1200),
      pexels('https://images.pexels.com/photos/1181370/pexels-photo-1181370.jpeg', 1200),
      pexels('https://images.pexels.com/photos/6804606/pexels-photo-6804606.jpeg', 900),
    ],
  },
  {
    id: 'operation-unit',
    title: 'RuTAG Operation Unit',
    tag: 'Operations',
    desc: 'The operational nerve centre managing project lifecycles — from community needs assessment through deployment and long-term monitoring. Teams here coordinate field visits, logistics, and on-ground execution.',
    images: [
      pexels('https://images.pexels.com/photos/15389577/pexels-photo-15389577.jpeg', 1200),
      pexels('https://images.pexels.com/photos/8853388/pexels-photo-8853388.jpeg', 1200),
      pexels('https://images.pexels.com/photos/3862135/pexels-photo-3862135.jpeg', 1200),
      pexels('https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg', 900),
    ],
  },
  {
    id: 'fabrication-workshop',
    title: 'Innovation & Fabrication Workshop',
    tag: 'Workshop',
    desc: 'A fully-equipped fabrication space with precision machining, welding, and assembly capabilities. This is where concepts take physical form — where prototypes are built, tested, iterated, and refined into durable solutions.',
    images: [
      pexels('https://images.pexels.com/photos/11951233/pexels-photo-11951233.jpeg', 1400),
      pexels('https://images.pexels.com/photos/5845903/pexels-photo-5845903.jpeg', 1200),
      pexels('https://images.pexels.com/photos/1571736/pexels-photo-1571736.jpeg', 1200),
      pexels('https://images.pexels.com/photos/15603045/pexels-photo-15603045.jpeg', 800),
    ],
  },
  {
    id: 'training-centre',
    title: 'Training Centre',
    tag: 'Training',
    desc: 'Dedicated training facilities where rural youth, students, and field staff participate in hands-on skill development programmes. The centre is designed for practical learning — with workbenches, tool stations, and collaborative spaces.',
    images: [
      pexels('https://images.pexels.com/photos/30902103/pexels-photo-30902103.jpeg', 1200),
      pexels('https://images.pexels.com/photos/34212681/pexels-photo-34212681.jpeg', 1200),
      pexels('https://images.pexels.com/photos/30902113/pexels-photo-30902113.jpeg', 1200),
      pexels('https://images.pexels.com/photos/35645528/pexels-photo-35645528.jpeg', 900),
    ],
  },
  {
    id: 'electronics-lab',
    title: 'Electronics & Embedded Lab',
    tag: 'Laboratory',
    desc: 'A specialized laboratory for circuit design, sensor integration, and embedded system development tailored to field conditions. Equipped with oscilloscopes, soldering stations, and prototyping tools for rugged rural electronics.',
    images: [
      pexels('https://images.pexels.com/photos/19895784/pexels-photo-19895784.jpeg', 1200),
      pexels('https://images.pexels.com/photos/15470540/pexels-photo-15470540.jpeg', 1200),
      pexels('https://images.pexels.com/photos/19895788/pexels-photo-19895788.jpeg', 1200),
      pexels('https://images.pexels.com/photos/7286029/pexels-photo-7286029.jpeg', 800),
    ],
  },
  {
    id: 'machinery-bay',
    title: 'Machinery & Equipment Bay',
    tag: 'Equipment',
    desc: 'A bay housing industrial-grade machinery — lathes, drilling units, and fabrication equipment essential for producing durable rural technology. Maintained to professional standards and accessible to trained personnel.',
    images: [
      pexels('https://images.pexels.com/photos/18569750/pexels-photo-18569750.jpeg', 1400),
      pexels('https://images.pexels.com/photos/8489874/pexels-photo-8489874.jpeg', 1200),
      pexels('https://images.pexels.com/photos/7480242/pexels-photo-7480242.jpeg', 1200),
      pexels('https://images.pexels.com/photos/6895069/pexels-photo-6895069.jpeg', 800),
    ],
  },
];

// ---- Gallery page ----
export const infraImages = {
  office: pexels('https://images.pexels.com/photos/36631701/pexels-photo-36631701.jpeg', 1200),
  building: pexels('https://images.pexels.com/photos/15389577/pexels-photo-15389577.jpeg', 1200),
  workspace: pexels('https://images.pexels.com/photos/5483188/pexels-photo-5483188.jpeg', 1200),
  workshop: pexels('https://images.pexels.com/photos/11951233/pexels-photo-11951233.jpeg', 1400),
  machines: pexels('https://images.pexels.com/photos/18569750/pexels-photo-18569750.jpeg', 1400),
  factoryFloor: pexels('https://images.pexels.com/photos/31352672/pexels-photo-31352672.jpeg', 1200),
  interior: pexels('https://images.pexels.com/photos/19341494/pexels-photo-19341494.jpeg', 1200),
  lab: pexels('https://images.pexels.com/photos/5506058/pexels-photo-5506058.jpeg', 1400),
};








// ---- Machines (Products page) ----
export const machines = [
  { name: 'Treadle Pump', image: pexels('https://images.pexels.com/photos/32789444/pexels-photo-32789444.jpeg', 800) },
  { name: 'Hand Water Pump', image: pexels('https://images.pexels.com/photos/15799684/pexels-photo-15799684.jpeg', 800) },
  { name: 'Windmill Generator', image: pexels('https://images.pexels.com/photos/39323130/pexels-photo-39323130.jpeg', 800) },
  { name: 'Irrigation Pump', image: pexels('https://images.pexels.com/photos/38360727/pexels-photo-38360727.jpeg', 800) },
  { name: 'Agricultural Tractor', image: pexels('https://images.pexels.com/photos/39119029/pexels-photo-39119029.jpeg', 800) },
  { name: 'Classic Tractor Unit', image: pexels('https://images.pexels.com/photos/27872063/pexels-photo-27872063.jpeg', 800) },
  { name: 'Precision Lathe', image: pexels('https://images.pexels.com/photos/15603045/pexels-photo-15603045.jpeg', 800) },
  { name: 'Industrial Grinder', image: pexels('https://images.pexels.com/photos/6263102/pexels-photo-6263102.jpeg', 800) },
  { name: 'Pipe Cutting Machine', image: pexels('https://images.pexels.com/photos/12951632/pexels-photo-12951632.jpeg', 800) },
  { name: 'Heavy Machinery Unit', image: pexels('https://images.pexels.com/photos/12951623/pexels-photo-12951623.jpeg', 800) },
  { name: 'Control Panel System', image: pexels('https://images.pexels.com/photos/35072831/pexels-photo-35072831.jpeg', 800) },
  { name: 'Lathe Machine', image: pexels('https://images.pexels.com/photos/28929513/pexels-photo-28929513.jpeg', 800) },
];

