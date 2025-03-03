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
        url: 'https://www.linkedin.com/in/sliwapiotr',
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
  certification: [
    {
      name: 'EF SET Certificate™ (C2 Proficient)',
      issuer: 'EF SET',
      date: 'Jan, 2020',
      link: {
        href: 'https://cert.efset.org/KSfvpT',
      }
    },
    {
      name: 'PRINCE2® Foundation Certificate (ID: GR633097576PS)',
      issuer: 'People Cert',
      date: 'Feb, 2018',
      link: {
        href: undefined
      }
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
      techStack: [
        'MVP',
        'Search Engine',
        'Scraping',
        'Embeddings',
        'Full Stack Development',
      ],
      description:
        'We built an MVP of the first AI-powered innovation search engine that helped clients finding partners, top talent, and solutions for their innovative projects using natural language.',
      logo: MonitoLogo,
      link: {
        href: 'https://www.tomorrowdb.com/',
      },
    },
    {
      title: 'fairpl[ai]',
      techStack: ['MVP', 'AI', 'Security', 'Agentic Systems', 'genAI'],
      description:
        'We helped companies secure their applications powered by AI. We employed a pioneering approach based on AI+Human agents, to achieve outstanding results in red and blue teaming in the AI context. We build AI to secure AI.',
      logo: MonitoLogo,
      link: {
        href: 'https://fairplai.co/',
      },
    },
    {
      title:
        'Secure Adoption and Operation Framework for Artificial Intelligence (SAOFAI)',
      techStack: ['Open Source', 'Risk Management', 'AI', 'Standardization'],
      description:
        'SAOFAI is a community-driven standard that provides guidelines and controls for entities (i.e., individuals and organizations) to minimize risks and maximize the value of using Artificial Intelligence (AI) in their operations.',
      logo: null,
      link: {
        href: 'https://github.com/SAOFAI/Framework',
      },
    },
    {
      title: 'Forecasting behavior of inter-organizational networks',
      techStack: ['Research', 'Big Data', 'Machine Learning'],
      description:
        'Leading a research project that won a PRELUDIUM17 grant financed by Polish National Science Center (ncn.gov.pl). The main objective is to develop and verify the predictive model of events occurring between nodes in an inter-organizational network using conjoint Big Data and Machine Learning techniques and descriptive data published by the network’s actors (via their social media profiles, web sites, etc.).',
      logo: null,
      link: {
        href: 'https://projekty.ncn.gov.pl/index.php?projekt_id=448695',
      },
    },
    {
      title: 'Identification of intellectual capital with predictive modelling',
      techStack: ['Research', 'Predictive Modelling', 'Supervised Learning'],
      description:
        'The goal of this work was to investigate the correlation between comment threads regarding issues in open source projects and eventual cost of fixing them. The study showed positive correlation between the two classes with a predictive model built on top of scikit-learn and trained/validated on data gathered from GitHub repositories. It resulted in a supervised learning pipeline which made continuous predictions about projected cost.',
      logo: null,
      link: {
        href: 'https://www.researchgate.net/publication/331223450_Identification_of_intellectual_capital_with_predictive_modelling',
      },
    },
    {
      title: 'Practical Aspects of Software Development',
      techStack: ['Workshops', 'Mentoring', 'Software Development'],
      description:
        'Teaching/mentoring a course of Practical Aspects of Software Development at Wroclaw University of Technology.',
      logo: null,
      link: null,
    },
    {
      title: 'EasyThings',
      techStack: ['MVP', 'IoT', 'Full Stack Development'],
      description:
        'Internet of Things platform featuring backend (Java 8 + MongoDb + Spring Framework) and fronted web based application (HTML5 + Javascript).',
      logo: null,
      link: null,
    },
    {
      title: 'Eiotec',
      techStack: ['Frontend Libraries', 'JavaScript', 'Web Development'],
      description:
        'Design, implementation and maintenance of a portfolio of generic JavaScript plugins for websites.',
      logo: null,
      link: {
        href: 'https://codecanyon.net/user/eiotec/portfolio',
      },
    },
    {
      title: 'Modular robotic platform based on ROS',
      techStack: ['Research', 'Robotics', 'ROS', 'Embedded Systems'],
      description:
        'Engineering Thesis for graduation in Automatics and Robotics from Wroclaw University of Technology. The projects consisted of design and development of "Modular robotic platform based on ROS (Robot Operating System)" - both hardware and software.',
      logo: null,
      link: {
        href: 'https://drive.google.com/open?id=0B8BQezmlU6tWVWhRUVQ0dnRYdlE',
      },
    },
    {
      title: 'DrukujBezKolejki',
      techStack: ['MVP', 'Full Stack Development', 'E-commerce'],
      description:
        'Responsive web application allowing users to order printing in chosen printing house or copy shop as well as pay for the service in order to avoid queues. Technologies used: PHP, HTML5, CSS3, MySQL, JavaScript, bash scripts.',
      logo: null,
      link: null,
    },
    {
      title: 'Forxweb.com',
      techStack: [
        'MVP',
        'Full Stack Development',
        'Predictive Modelling',
        'Social Networking',
      ],
      description:
        'Social networking website allowing users to add contents and tag them to build own collections of interesting things from all around the Internet. One-developer project created from scratch. Technologies used: PHP5, MySQL, HTML, CSS, JavaScript.',
      logo: null,
      link: {
        href: 'https://www.youtube.com/watch?v=yyn5geAZDpk',
      },
    },
  ],
  publicSpeeches: [
    {
      title: 'The 1001+ ways to attack your AI system (presentation)',
      publisher: 'Data Science Summit 2024',
      date: 'Nov 21, 2024',
      link: { href: 'https://main.dssconf.pl/#agenda' },
      abstract: (
        <>
          Problem: The field of AI/ML provides methodologies for building applications on top of flexible models that are trained rather than coded, allowing them to handle much more complex tasks with significantly less development effort. However, this huge booster comes with a correspondingly huge attack surface. How to utilize this magnificent power while maintaining robust security?
          Methodology: Meta-analysis of case studies and current research on the cybersecurity of AI systems.
          Conclusions: The analysis reveals significant vulnerabilities in AI/ML systems, including adversarial attacks, data poisoning, and model inversion. A key finding is that AI systems, particularly generative AI, are inherently open by nature, making it especially challenging to control potential vulnerabilities. The research emphasizes the urgent need for stronger defense mechanisms, alongside exploring counteroffensive strategies such as adversarial training and deception techniques to proactively safeguard AI systems against evolving threats.
          Implications for practitioners and businesses: This presentation is tailored specifically for data science practitioners, offering a perspective on AI systems from the standpoint of a hacker. The goal is to equip listeners with actionable knowledge on how to integrate cybersecurity into the development process, helping businesses proactively safeguard the confidentiality, integrity, and availability of their AI systems.
        </>
      ),
    },
    {
      title: 'Why do hackers love your AI application? (presentation)',
      publisher: 'Kraków Tech Summit 2024',
      date: 'Nov 7, 2024',
      link: { href: 'https://krakowtechsummit.com/agenda/6f93fd4d-5c27-4ecc-be44-90c20de665fb' },
      abstract: (
        <>
          The AI revolution has provided tools to build applications with unprecedented capabilities. Generative models can empower these applications with significant autonomy, offering user experiences that would have been considered sci-fi just a few years ago. With an abundance of open source models, datasets, and frameworks, we can now develop AI applications in days rather than years. We can do more with less. So, where&apos;s the catch? The easier it becomes to develop AI applications using pre-built components, and the more freedom they gain through powerful AI/ML models, the less control we have over their operation. In this session, we will deep dive into the challenges of AI cybersecurity, examining AI applications from a hacker&apos;s perspective to better understand the threats and risks. We will explore the fundamentals of AI cybersecurity, providing a foundation that will help you make more informed decisions.
        </>
      ),
    },
    {
      title: 'AI, rhyme me a secret or die! - advanced multimodal jailbreaking, surprising vectors, and mitigation (presentation)',
      publisher: 'The Hack Summit 2024',
      date: 'Oct 18, 2024',
      link: { href: 'https://thehacksummit.com/#agenda' },
      abstract: (
        <>
          Problem: The security of genAI applications is largely dependent on the security of the models themselves. Due to their open nature, they are susceptible to potentially unlimited attack vectors. &quot;Guardrails&quot; come to the rescue - model auto-moderation mechanisms that restrict the freedom of the output tensor. Does the use of guardrails guarantee the security of the model's operation?
          <br/><br/>
          Method: Case studies and meta-analysis of &quot;guardrails&quot; methods.
          <br/><br/>
          Conclusions: At the moment, there is no universal, “silver bullet” guardrail method, and those that exist do not guarantee the security of the model. In every analyzed case, there is an input configuration that allows bypassing the security and achieving the intended malicious output of the model. Individual methods vary in effectiveness for certain groups of inputs, impact on the model’s performance, as well as in the cost of implementation and maintenance. These findings allow for outlining a functional security framework for genAI models.
          <br/><br/>
          Significance for practitioners and business: The inability to definitively secure a model with guardrails methods, as well as their sheer diversity, means that each genAI application requires an individual security strategy. The presented conceptual functional security framework for genAI models aims to structure and facilitate this process.
        </>
      ),
    },
    {
      title: 'Are we ready to be governed by machines? (presentation)',
      publisher: 'Data Science Summit: Machine Learning Edition 2024',
      date: 'Jun 13, 2024',
      link: { href: 'https://ml.dssconf.pl/#agenda' },
      abstract: (
        <>
          AI has recently sparked a lot of excitement. There’s a plethora of new tools coming into light, that are built on top of sophisticated deep neural architectures, and can solve increasingly complex tasks, comparably or even better than humans. We have all heard that AGI is coming in great strides. From this point, it seems like a matter of time when we outsource management and governance of human organisations to AI, as yet another task to automate. Are we ready as a society, to make this step? What is the current state of art? What do we already know about both technological and societal opportunities and constraints? This lecture summarises a 6-year-long series of interdisciplinary research, funded by Polish National Science Centre, that I led at Wroclaw University of Economics and Business, which was featured in multiple scientific journals and conferences in Europe and the US.
        </>
      ),
    },
    {
      title: 'How To Teach Artificial Intelligence To Manage Our Organizations? (scientific article)',
      publisher: 'Procedia Computer Science',
      date: 'Sep 8, 2023',
      link: { href: 'https://www.researchgate.net/publication/373757460_How_To_Teach_Artificial_Intelligence_To_Manage_Our_Organizations' },
      abstract: (
        <>
          Abstract: Undoubtedly, Artificial Intelligence (AI) is going mainstream. More and more AI agents come into existence to augment human agents in their work by synthesizing a gigantic body of knowledge in a conversational interface (e.g., ChatGPT), generating art from a provided description (e.g., Stable Diffusion), creating software code based on a provided description (e.g., Codex), just to name a few. It becomes evident that at some point an AI agent will similarly help human managers in their daily operations, and, when it reaches the level of artificial general intelligence (AGI), unlock completely new levels of performance and sustainability. The authors used the critical review method and identified a research gap concerning the development of a generalized, numerical model of an organization and its environment that could be applied in machine learning pipelines, and effectively support managers in the key management functions.
        </>
      ),
    },
    {
      title: 'AI in a team - the theory and practice of integrating AI in business processes (presentation)',
      publisher: 'RefreshIT',
      date: 'May 31, 2023',
      link: { href: 'https://app.evenea.pl/event/refreshit05/' },
      abstract: (
        <>
          Presentation at the RefreshIT meetup.
          <br/><br/>
          Abstract: Artificial intelligence has hit the mainstream and hasn't left the lips of the media for several months, generating extreme emotions ranging from euphoria to despair. Before we declare ourselves on one side, let's summarize - from the theoretical and empirical side - what we know about the machine learning models driving the tools with the "AI" label and what impact this has on their use in business processes.
        </>
      ),
    },
    {
      title: 'Event Forecasting in Organizational Networks: A Discrete Dynamical System Approach (scientific article)',
      publisher: 'Discrete Dynamics in Nature and Society',
      date: 'Mar 15, 2022',
      link: { href: 'https://www.hindawi.com/journals/ddns/2022/3079936/' },
      abstract: (
        <>
          Abstract: Both inter- and intraorganizational networks draw the attention of researchers and practitioners from various disciplines who view them as the fabric of the socioeconomic world. The network perspective is believed to successfully model most of the socioeconomic phenomena, which, in combination with the prospects of continuously advancing tools for automated data mining and machine learning, gives a tempting promise to effectively forecast socioeconomic events occurring in our societies and businesses. Despite their significance, the topic of event forecasting in the context of organizational networks appears unexplored. Therefore, the objective of this study was (1) to fill the theoretical gap by proposing a mathematical model for organizational network event forecasting, rooted in the social science to remain consistent with the theory, and (2) to experimentally evaluate how the model performs on real data and validate if the results support its use in practical applications. An implementation of the proposed model, based on a decision tree classifier, achieved a prediction accuracy of 87% on a longitudinal data sample and thus demonstrated the practical usability of the model.
        </>
      ),
    },
    {
      title: 'Digital Network Twin - Mapping Socio-Economic Networks into the Virtual Reality (scientific article)',
      publisher: 'Transformations in Business & Economics',
      date: 'Dec 14, 2021',
      link: { href: 'http://www.transformations.knf.vu.lt/53b' },
      abstract: (
        <>
          Abstract: The concept of Digital Twin suggests that every physical product needs a virtual counterpart which can be used for simulating, forecasting, and reasoning about the real product without a costly and risky physical interaction. We argue that organizational networks - the fabric of the whole socio-economic world - need analogous virtual representations (digital network twins) for researchers' and practitioners' disposal. However, our systematic literature review revealed that current conceptualizations of organizational networks have significant limitations which make them unsuitable for being used as a framework for building digital network twins. Therefore, the aim of this article is to present a conceptual framework of a digital network twin based on a multi-level multi-modal organizational network model. The proposed multi-graph representation unifies the levels of analysis (inter- and intra-organizational) and minimizes a priori assumptions about network characteristics.
        </>
      ),
    },
    {
      title: 'Emergence of eSports Networks (scientific article)',
      publisher: 'AGH University of Science and Technology Press',
      date: 'Nov 4, 2021',
      link: { href: 'https://winntbg.bg.agh.edu.pl/skrypty4/0589/' },
      abstract: (
        <>
          Abstract: The eSports (“electronic sports”) phenomenon is relatively new and unexplored in the scientific literature, although it has existed in the practice long enough to evolve into a significant, rapidly expanding chunk of the economy. Its growth, reaching over 40% on a year-to-year basis, along with relatively young and open networks creates a space for remarkably interesting business opportunities. However, from the business model point of view, there is a significant gap in the literature providing practitioners with a view on emerging eSports networks and assisting the managerial process. This chapter contributes to the area with a research of several, emerging ego-networks of organizations. Methodologically, the study tested an approach leveraging the abundance of publicly available data on the organizations’ social media profiles which were found to be remarkably expressive and provided insight into the evolution of individual ego-networks. The research resulted in a number of observations: new roles, specific interactions between the actors, as well as specific structural and evolutionary patterns in the network. The findings are believed to find use in the managerial practice and future research of the inter-organizational network development.
        </>
      ),
    },
    {
      title: 'What will a whole nation do? Predicting events in human networks (presentation)',
      publisher: '4Developers 2021',
      date: 'May 26, 2021',
      link: { href: 'https://www.youtube.com/watch?v=olCDA0w3cQQ' },
      abstract: (
        <>
          Presentation at 4Developers 2021 (online event)
          <br/><br/>
          Abstract: Machine learning is employed to tackle a whole spectrum of decision processes in industries. It assesses credit risk for banks, it helps doctors diagnose illness, it even models traffic to drive autonomous cars. All happening basically on a daily basis, nothing unusual here. But what if it ruled us? In our most recent research we have been experimenting with networks of individuals and organisations to build predictive models providing forecasts of events occurring in the networks. If they prove satisfactory performance, they will underpin a new class of decision support systems augmenting decisions of managers, governments, and other executives, who will gain unprecedented viewpoint on the organisations they steer. This talk presents findings, methodology, and reflections coming from a research project financed by Polish National Science Centre as a part of a grant no. 2019/33/N/HS4/03086 carried out on Wrocław University of Economics and Business.
        </>
      ),
    },
    {
      title: 'Dynamic Modelling of Inter-Organizational Networks Using the Domain Knowledge and Big Data Analytics (scientific article)',
      publisher: 'Americas Conference on Information Systems 2020 (AMCIS2020) Proceedings',
      date: 'Aug 11, 2020',
      link: { href: 'https://aisel.aisnet.org/amcis2020/data_science_analytics_for_decision_support/data_science_analytics_for_decision_support/8/' },
      abstract: (
        <>
          Abstract: Inter-organizational networks are becoming deeply rooted in the organization management’s practice and theory. Still, there is an evident lack of a data-driven, adaptive tool aiding managerial decision-making processes in the network context. The inter-disciplinary team of authors showed that modern approach including big data analytics and data science has a great potential to support this particularly sophisticated task. The article presented a novel approach of combining a domain model with big data analytics and machine learning and graph algorithms to forecast network events. Then, the model was verified against a selection of known and current managerial tasks in the inter-organizational context. The resulting concept of a decision support system presented an implementation of a human-machine environment in which the machine solved tasks of pattern recognition and the human (i.e. domain expert) interpreted the results on different levels of abstraction using the domain knowledge.
        </>
      ),
    },
    {
      title: 'The Model of eSports Ecosystems (scientific article)',
      publisher: 'Hradec Economic Days 2020',
      date: 'Apr 1, 2020',
      link: { href: 'https://wir.ue.wroc.pl/docstore/download/WUT54a0ea0355df430591f15143ea699e85/Sliwa_P_Krzos_G_The_Model_of_eSports.pdf' },
      abstract: (
        <>
          Abstract: Electronic sports, widely known as eSports, are presumably the most profound evolutionary movement of the sports industry in the modern history. Despite the business potential, though, the eSports industry remains relatively unexplored in the literature of the management discipline, especially from the network perspective. To fill the gap confirmed in the literature review, the research aimed at answering a question regarding the contents of eSports ecosystems – who the actors are and how do they interact with each other. A multiple case study was carried out, involving content analysis of social media posts published by a selection of eSports-related organizations in order to identify and classify entities comprising the eSports networks. As a result, the authors proposed and described a network model of the eSports ecosystems consisting of distinct roles (stakeholders) and relationships observed in ego-networks of the investigated entities. The model can serve as a foundation for future research on the eSports ecosystems and provide a bird-view on the industry’s mode of work for practitioners.
        </>
      ),
    },
    {
      title: 'Holistic Systems Design (presentation)',
      publisher: 'Pragmatic Brains',
      date: 'Feb 6, 2020',
      link: { href: 'https://app.evenea.pl/event/holistic-software-development' },
      abstract: (
        <>
          Presentation at the "Holistic Software Development" meetup in Wrocław.
          <br/><br/>
          Abstract: We will rewind to the roots of Systems Design in an attempt to extend the traditional, technology-centric approach with a more holistic perspective, encompassing non-technological foundations as well. We will try to find out how to drive such a Holistic Systems Design process in order to create software (and hardware) that is not only a technological gem but also serves as an efficient form of communication for the team so that it can focus more on making awesome things.
        </>
      ),
    },
    {
      title: 'End-to-end testing with love (presentation)',
      publisher: 'Node.js Wrocław',
      date: 'Jul 25, 2019',
      link: { href: 'https://www.meetup.com/Node-js-Wroclaw/events/262841222/' },
      abstract: (
        <>
          Presentation at Node.js Wrocław #4 meetup.
        </>
      ),
    },
    {
      title: 'Discovering treasures in Natural Language data (presentation)',
      publisher: 'DataMass 2018',
      date: 'Sep 28, 2018',
      link: { href: 'http://summit.datamass.io' },
      abstract: (
        <>
          Speech at DataMass 2018 conference in Gdańsk, Poland.
        </>
      ),
    },
    {
      title: 'From The Idea to MVP and back again (presentation)',
      publisher: '4Developers Gdańsk 2018',
      date: 'Sep 25, 2018',
      link: { href: 'https://www.youtube.com/watch?v=ELJZz4tpL9o' },
      abstract: (
        <>
          Presentation at 4Developers Gdańsk 2018 conference.
          <br/><br/>
          Abstract:<br/>
          Have you ever dreamt of building your own startup? Or a cool game? Or a groundbreaking lib? Everyone has. Have you ever implemented a cool feature which no one has used ever since? Or a set of features? Or even a whole project? Creative work always comes with a set of [always] risky assumptions: “users need Functionality X”, “users will like the blue design”, “web developers will download My Library” and so on. How to check if they are right and avoid wasting a lot of time on building The Thing That No One Has Ever Used? Prototype quickly!
        </>
      ),
    },
    {
      title: 'The Concept of Knowledge Carriers Management (scientific article)',
      publisher: 'PDCA Group',
      date: 'Dec 18, 2017',
      link: { href: 'https://www.researchgate.net/publication/331152486_The_concept_of_knowledge_carriers_management' },
      abstract: (
        <>
          Abstract: The chapter describes a concept of knowledge carriers management. It exploits the assumptions of an activity-based knowledge management without enforcing an individual to record knowledge artifacts and store them in an IT system but rather assuming they obtained the knowledge needed to complete the activity and storing this as a kind of organizational metadata. Then, the knowledge sharing process can be triggered in the future if needed.
        </>
      ),
    },
    {
      title: 'Jakie instytucje mogą przyczynić się do wzrostu dobrobytu w Polsce? (article)',
      publisher: 'Towarzystwo Ekonomistów Polskich',
      date: 'Dec 14, 2016',
      link: { href: 'http://tep.org.pl/wp-content/uploads/II-miejsce-Piotr-Sliwa.pdf' },
      abstract: ''
    },
  ]
} as const
