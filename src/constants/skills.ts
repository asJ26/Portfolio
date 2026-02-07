import {
  SiPython, SiJavascript, SiTypescript, SiGo,
  SiHtml5, SiCss3, SiTailwindcss, SiJquery,
  SiRedux, SiGraphql, SiApachekafka,
  SiAmazon, SiMicrosoftazure, SiGooglecloud,
  SiMysql, SiPostgresql, SiMicrosoftsqlserver,
  SiOracle, SiMongodb, SiRedis,
  SiDocker, SiKubernetes, SiJenkins, SiGit,
  SiSpringboot, SiReact,
  SiNextdotjs, SiNodedotjs, SiAngular,
  SiPostman, SiJira
} from 'react-icons/si';
import {
  FaJava, FaTerminal, FaSwift, FaCode
} from 'react-icons/fa';
import { TbBrandCSharp } from 'react-icons/tb';

export const skillRows = [
  // Programming Languages
  [
    { name: 'Java', icon: FaJava, color: '#007396' },
    { name: 'Python', icon: SiPython, color: '#3776AB' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'C++', icon: FaCode, color: '#00599C' },
    { name: 'C', icon: TbBrandCSharp, color: '#A8B9CC' },
    { name: 'Swift', icon: FaSwift, color: '#FA7343' },
    { name: 'Go', icon: SiGo, color: '#00ADD8' },
    { name: 'Shell', icon: FaTerminal, color: '#4EAA25' },
  ],
  // Web & Cloud
  [
    { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
    { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
    { name: 'Tailwind', icon: SiTailwindcss, color: '#38B2AC' },
    { name: 'jQuery', icon: SiJquery, color: '#0769AD' },
    { name: 'Redux', icon: SiRedux, color: '#764ABC' },
    { name: 'GraphQL', icon: SiGraphql, color: '#E10098' },
    { name: 'AWS', icon: SiAmazon, color: '#FF9900' },
    { name: 'Azure', icon: SiMicrosoftazure, color: '#0089D6' },
    { name: 'GCP', icon: SiGooglecloud, color: '#4285F4' },
  ],
  // Frameworks & DevOps
  [
    { name: 'Spring', icon: SiSpringboot, color: '#6DB33F' },
    { name: 'React.js', icon: SiReact, color: '#61DAFB' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
    { name: 'Angular', icon: SiAngular, color: '#DD0031' },
    { name: 'Docker', icon: SiDocker, color: '#2496ED' },
    { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5' },
    { name: 'Jenkins', icon: SiJenkins, color: '#D24939' },
    { name: 'Git', icon: SiGit, color: '#F05032' },
  ],
  // Databases & Tools
  [
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
    { name: 'Oracle', icon: SiOracle, color: '#F80000' },
    { name: 'SQL Server', icon: SiMicrosoftsqlserver, color: '#CC2927' },
    { name: 'Redis', icon: SiRedis, color: '#DC382D' },
    { name: 'Kafka', icon: SiApachekafka, color: '#231F20' },
    { name: 'JIRA', icon: SiJira, color: '#0052CC' },
    { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
  ],
];
