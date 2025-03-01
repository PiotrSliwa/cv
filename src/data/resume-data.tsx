import {
  ClevertechLogo,
  ConsultlyLogo,
  JojoMobileLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
} from '@/images/logos'
import { GitHubIcon, LinkedInIcon, XIcon } from '@/components/icons'

export const RESUME_DATA = {
  name: 'Piotr Sliwa',
  initials: 'PS',
  location: 'Wrocław, Poland, CET',
  locationLink: 'https://www.google.com/maps/place/Wrocław',
  about: 'Engineering Leader | Startup Builder | Researcher',
  summary: (
    <>
      As an Engineering Lead, I have led, always hands-on, engineering and
      research teams at Fortune 500 companies, universities, and startups. I
      have had an opportunity to build 4 startups from scratch, and
      bootstrapping one of them. Rapid prototyping, agile environment and lean
      processes that flexibly adjust to the extreme environment of startups make
      these organizations my favourite when it comes to the managerial
      challenges I can solve. I enjoy building and scaling highly efficient,
      trust-based teams shipping amazing products that change the world.
      <br />
      <br />
      As a Research Lead, I spearheaded a 5-year-long research project funded by
      the Polish National Science Centre, dedicated to developing a prototype of
      a digital manager - an AI system that manages a human organization.
      Findings from the research encompass, among others, models of AI-powered
      managerial functions, AI-powered managerial processes, digital twins of
      organizations, and predictive models of organizations.
      <br />
      <br />
      As an Engineer, I can contribute especially in the areas of cloud
      computing (AWS and GCP), distributed systems, security, predictive
      modelling with machine learning, data storage and processing, scraping,
      DevOps, and full-stack web development. Technologies are just tools - it's
      the outcome that matters, but I feel particularly fluent in the
      JavaScript/TypeScript, Python, Java, React, SQL (i.e., PostrgreSQL and
      Oracle), MongoDB, and AWS ecosystems. I have trained quite a few ML
      models, too, mostly with the help of HuggingFace, SciPy, and Keras.
      <br />
      <br />
      I ❤️ coding, building dynamic, innovation-oriented organizations, and
      raising my 2 amazing sons.
      <br />
      <br />
      You can also find me there:
      <br />
      🎓 https://www.researchgate.net/profile/Piotr_Sliwa3
      <br />
      💻 https://github.com/PiotrSliwa
    </>
  ),
  avatarUrl: 'https://avatars.githubusercontent.com/u/2964304?v=4',
  personalWebsiteUrl: 'https://google.com/',
  contact: {
    email: 'iodosite@gmail.com',
    tel: '+48506903200',
    social: [
      {
        name: 'GitHub',
        url: 'https://github.com/PiotrSliwa',
        icon: GitHubIcon,
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/sliwapiotr/',
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: 'Wroclaw University of Economics and Business',
      degree:
        'Doctor of Philosophy - PhD (Thesis: The Methodology for Digital Managers)',
      start: '2018',
      end: '2025 (estimated)',
    },
    {
      school: 'Wroclaw University of Economics and Business',
      degree: 'Master’s Degree in Management',
      start: '2016',
      end: '2018',
    },
    {
      school: 'Technical University of Wroclaw',
      degree: 'Engineer’s Degree in Robotics',
      start: '2010',
      end: '2015',
    },
  ],
  work: [
    {
      company: 'Mistho',
      link: 'https://mistho.io/',
      badges: [
        'Leadership',
        'Startup',
        'Fintech',
        'Cloud',
        'Full Stack Development',
        'Machine Learning',
        'ETL',
        'Scraping',
        'Security',
        'Compliance',
        'GenAI',
        'Software Architecture',
        'Due Diligence',
      ],
      title: 'Head of Engineering',
      logo: ConsultlyLogo,
      start: '2022',
      end: '2025',
      description: (
        <>
          As the Head of Engineering, I had the great opportunity to lead a team
          of outstanding engineers in building a pioneering instant income and
          employment verification solution that has helped underwriting teams
          around the world. Operating in a highly sensitive and regulated
          environment, we had to constantly think outside the box to maintain
          our innovative edge and reduce the time required for the traditional
          process by orders of magnitude, all while ensuring compliance with
          stringent regulations and the highest standards of data security.
          <br />
          <br />
          I was responsible for the overall architecture and security of the
          product that relied heavily on cutting-edge technology (AI/ML, cloud
          computing, interactive low-latency web applications), directly
          managing and scaling the engineering team, overseeing cross-functional
          dependencies, fostering creative and collaborative environment in the
          remote-first setting, and ensuring engineering compliance with
          security standards. As part of the Information Security Management
          leadership team, I played a key role in successfully guiding the
          company through the certification process for ISO 27001, GDPR, and UK
          DIATF. Additionally, I represented the engineering department in all
          due diligence processes and was responsible for maintaining top
          quality and ensuring the continuous, on-time delivery of software.
          <br />
          <br />I coded every day.
        </>
      ),
    },
    {
      company: 'BotRaise',
      link: 'https://botraise.com/',
      badges: [
        'Leadership',
        'Startup',
        'Business Administration',
        'RPA',
        'Product Engineering',
        'Cloud',
        'Full Stack Development',
        'Machine Learning',
        'Solution Architecture',
      ],
      title: 'CEO',
      logo: ParabolLogo,
      start: '2021',
      end: '2022',
      description: (
        <>
          I founded and bootstrapped a startup that developed an innovative
          approach to affordable Robotic Process Automation (RPA). With a small
          team of full-stack engineers, we delivered two tailor-made solutions:
          a phone bot that automated over-the-phone registration for a massage
          therapist franchise (developed before the GenAI revolution and the
          widespread adoption of such solutions), an automated debt collection
          process for a law firm. To get more funding, we took a contract to
          build a cash flow forecasting system based on a data lake.
          <br />
          <br />I learned a lot about developing a business model from scratch
          and taking the full responsibility for a business entity.
        </>
      ),
    },
    {
      company: 'Pragmatic Brains',
      link: 'https://www.linkedin.com/company/pragmaticbrains',
      badges: [
        'Leadership',
        'Startup',
        'Real-time Systems',
        'Distributed Systems',
        'Full Stack Development',
        'Domain-Driven Design',
        'Enterprise Architecture',
        'Video Streaming',
      ],
      title: 'Principal Software Engineer',
      logo: ClevertechLogo,
      start: '2019',
      end: '2021',
      description: (
        <>
          I led two teams of engineers working on a pioneer video cloud
          solution, and I had a great opportunity to spearhead a project
          developing a novel, distributed video streaming platform, integrated
          with corporate and governmental infrastructures, that helped thousands
          of people communicate with the governmental institutions during the
          times of pandemic lockdowns.
          <br />
          <br />I had the privilege to work with world-class experts in Domain
          Driven Design (DDD), distributed systems, and real-time interactive
          applications.
        </>
      ),
    },
    {
      company: 'Roche',
      link: 'https://www.roche.com/',
      badges: [
        'Leadership',
        'Corporate',
        'Greenfield',
        'Machine Learning',
        'Solution Architecture',
      ],
      title: 'Solution Architect',
      logo: JojoMobileLogo,
      start: '2019',
      end: '2020',
      description: (
        <>
          I was responsible for the design and architecture of a system that
          processed corporate documents to identify discrepancies and
          non-compliance issues.
        </>
      ),
    },
    {
      company: 'Roche',
      link: 'https://www.roche.com/',
      badges: [
        'Leadership',
        'Corporate',
        'ERP',
        'Pharma',
        'Full Stack Development',
        'Compliance',
      ],
      title: 'Lead Developer',
      logo: JojoMobileLogo,
      start: '2017',
      end: '2019',
      description: (
        <>
          I had an incredible experience leading a team of outstanding engineers
          in building a custom ERP system that integrated drug development,
          manufacturing, and marketing processes using diverse internal and
          external data sources (business, clinical trials, documents, etc.).
          I’m particularly proud of initiating and executing the transition from
          a waterfall development process to Kanban, which significantly
          improved our ability to manage the project’s complexity and
          uncertainty.
        </>
      ),
    },
    {
      company: 'Credit Suisse',
      link: 'https://www.credit-suisse.com/',
      badges: [
        'Leadership',
        'Corporate',
        'Risk Management',
        'Predictive Modelling',
        'Risk Calculation',
        'Machine Learning',
      ],
      title: 'Software Developer',
      logo: JojoMobileLogo,
      start: '2016',
      end: '2017',
      description: (
        <>
          I worked in a team developing a distributed, high-throughput credit
          risk calculation system. I had a chance to lead of the Regional
          Innovation Team which built a proof-of-concept and evaluated a
          predictive model for transaction risk sentiment.
        </>
      ),
    },
    {
      company: 'Nokia Networks',
      link: 'https://www.nokia.com/',
      badges: ['Corporate', 'Telco', 'Embedded Systems', 'Real-time Systems'],
      title: 'Software Engineer',
      logo: JojoMobileLogo,
      start: '2014',
      end: '2016',
      description: (
        <>
          I was a part of the team developing an embedded BTS Operating System.
          I leaned a lot about agile methodologies applied to a huge R&D
          project.
        </>
      ),
    },
    {
      company: 'Nokia Networks',
      link: 'https://www.nokia.com/',
      badges: [
        'Corporate',
        'Greenfield',
        'Full Stack Development',
        'Scraping',
        'Search Engine',
      ],
      title: 'Software Developer',
      logo: JojoMobileLogo,
      start: '2014',
      end: '2014',
      description: (
        <>
          I was part of a team developing a corporate intranet search engine
          that indexed terabytes of corporate data. Having the great opportunity
          to join the project from its inception, I was able to actively
          participate in design sessions that shaped the final solution.
        </>
      ),
    },
    {
      company: 'Freelancing',
      link: '#',
      badges: ['Freelance', 'Full Stack Development', 'Predictive Modelling'],
      title: 'Software Developer',
      logo: JojoMobileLogo,
      start: '2011',
      end: '2014',
      description: (
        <>
          After handing the project over, I decided to return to building my own
          products. To fund them, I freelanced and led multiple web development
          projects. I launched my own social platform, Forxweb, which aimed to
          connect people based on their interests and browsing history.
          <br />
          <br />
          As it turned out, users weren’t particularly eager to share their
          browsing history (duh!), and the project eventually failed. However,
          this experience taught me one of the most important lessons in startup
          development—gather user feedback from the start and validate
          hypotheses early!
          <br />
          <br />
          Overview of the projects:
          <ul>
            <li>
              - multi-purpose web plugins/frameworks (see:
              https://codecanyon.net/user/eiotec/portfolio),
            </li>
            <li>- tailor-made social media automation tools,</li>
            <li>
              - DrukujBezKolejki web application allowing users to print via the
              app for a local printing service (c-13.pl),
            </li>
            <li>
              - Forxweb.com social platform connecting users based on their
              interests - browsing history,
            </li>
            <li>- a few other freelancing jobs.</li>
          </ul>
        </>
      ),
    },
    {
      company: 'Omni-System',
      link: '#',
      badges: ['Startup', 'SEO', 'Full Stack Development', 'Scraping'],
      title: 'Software Developer',
      logo: JojoMobileLogo,
      start: '2010',
      end: '2010',
      description: (
        <>
          After months of freelancing, I was hired to spearhead the development
          of an SEO monitoring and optimization toolset. I made a lot of rookie
          mistakes but learned a lot about scraping and full-stack development,
          and successfully shipped the novel software that help numerous
          companies improve their online visibility.
        </>
      ),
    },
  ],
  skills: [],
  projects: [
    {
      title: 'TomorrowDB',
      techStack: ['MVP', 'Search Engine', 'Scraping', 'Embeddings', 'Full Stack Development'],
      description: 'We built an MVP of the first AI-powered innovation search engine that helped clients finding partners, top talent, and solutions for their innovative projects using natural language.',
      logo: MonitoLogo,
      link: {
        href: 'https://www.tomorrowdb.com/',
      },
    },
    {
      title: 'fairpl[ai]',
      techStack: ['MVP', 'AI', 'Security', 'Agentic Systems', 'genAI'],
      description: 'We helped companies secure their applications powered by AI. We employed a pioneering approach based on AI+Human agents, to achieve outstanding results in red and blue teaming in the AI context. We build AI to secure AI.',
      logo: MonitoLogo,
      link: {
        href: 'https://fairplai.co/',
      },
    },
    {
      title: 'Secure Adoption and Operation Framework for Artificial Intelligence (SAOFAI)',
      techStack: ['Open Source', 'Risk Management', 'AI', 'Standardization'],
      description: 'SAOFAI is a community-driven standard that provides guidelines and controls for entities (i.e., individuals and organizations) to minimize risks and maximize the value of using Artificial Intelligence (AI) in their operations.',
      logo: null,
      link: {
        href: 'https://github.com/SAOFAI/Framework',
      },
    },
    {
      title: 'Forecasting behavior of inter-organizational networks',
      techStack: ['Research', 'Big Data', 'Machine Learning'],
      description: 'Leading a research project that won a PRELUDIUM17 grant financed by Polish National Science Center (ncn.gov.pl). The main objective is to develop and verify the predictive model of events occurring between nodes in an inter-organizational network using conjoint Big Data and Machine Learning techniques and descriptive data published by the network’s actors (via their social media profiles, web sites, etc.).',
      logo: null,
      link: {
        href: 'https://projekty.ncn.gov.pl/index.php?projekt_id=448695',
      },
    },
    {
      title: "Identification of intellectual capital with predictive modelling",
      techStack: ['Research', 'Predictive Modelling', 'Supervised Learning'],
      description: 'The goal of this work was to investigate the correlation between comment threads regarding issues in open source projects and eventual cost of fixing them. The study showed positive correlation between the two classes with a predictive model built on top of scikit-learn and trained/validated on data gathered from GitHub repositories. It resulted in a supervised learning pipeline which made continuous predictions about projected cost.',
      logo: null,
      link: {
        href: 'https://www.researchgate.net/publication/331223450_Identification_of_intellectual_capital_with_predictive_modelling',
      },
    },
    {
      title: 'Practical Aspects of Software Development',
      techStack: ['Workshops', 'Mentoring', 'Software Development'],
      description: 'Teaching/mentoring a course of Practical Aspects of Software Development at Wroclaw University of Technology.',
      logo: null,
      link: null,
    },
    {
      title: 'EasyThings',
      techStack: ['MVP', 'IoT', 'Full Stack Development'],
      description: 'Internet of Things platform featuring backend (Java 8 + MongoDb + Spring Framework) and fronted web based application (HTML5 + Javascript).',
      logo: null,
      link: null,
    },
    {
      title: 'Eiotec',
      techStack: ['Frontend Libraries', 'JavaScript', 'Web Development'],
      description: 'Design, implementation and maintenance of a portfolio of generic JavaScript plugins for websites.',
      logo: null,
      link: {
        href: 'https://codecanyon.net/user/eiotec/portfolio',
      },
    },
    {
      title: 'Modular robotic platform based on ROS',
      techStack: ['Research', 'Robotics', 'ROS', 'Embedded Systems'],
      description: 'Engineering Thesis for graduation in Automatics and Robotics from Wroclaw University of Technology. The projects consisted of design and development of "Modular robotic platform based on ROS (Robot Operating System)" - both hardware and software.',
      logo: null,
      link: {
        href: 'https://drive.google.com/open?id=0B8BQezmlU6tWVWhRUVQ0dnRYdlE',
      },
    },
    {
      title: 'DrukujBezKolejki',
      techStack: ['MVP', 'Full Stack Development', 'E-commerce'],
      description: 'Responsive web application allowing users to order printing in chosen printing house or copy shop as well as pay for the service in order to avoid queues. Technologies used: PHP, HTML5, CSS3, MySQL, JavaScript, bash scripts.',
      logo: null,
      link: null,
    },
    {
      title: 'Forxweb.com',
      techStack: ['MVP', 'Full Stack Development', 'Predictive Modelling', 'Social Networking'],
      description: 'Social networking website allowing users to add contents and tag them to build own collections of interesting things from all around the Internet. One-developer project created from scratch. Technologies used: PHP5, MySQL, HTML, CSS, JavaScript.',
      logo: null,
      link: {
        href: 'https://www.youtube.com/watch?v=yyn5geAZDpk',
      },
    },
  ]
} as const
