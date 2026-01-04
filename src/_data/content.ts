import type iContent from '../interfaces/core.interface';

export const content: iContent = {
  es: {
    resume: {
      url: "https://cdn.javiert.dev/cv.pdf",
      filename: "CV - Luis Cortes.pdf"
    },
    aboutme: {
      description: "Soy un profesional *dinámico* y *proactivo* especializado en el _desarrollo web_. Mi /orientación analítica/ me permite abordar desafíos de manera *meticulosa*. _Comprometido_ con la *ética* profesional, especialmente en la protección de datos y *seguridad informática*. Mi /enfoque/ es el de un *aprendiz constante*, buscando _en todo momento_ oportunidades para *mejorar* y mantenerme al tanto de las _últimas tendencias_ y _vulnerabilidades_.\nMi *sólida experiencia* en la _creación_ y mantenimiento de *soluciones tecnológicas integrales* refleja mi _compromiso_ con la *excelencia técnica*. _Siempre_ busco *superar expectativas*, *contribuir* al _éxito del equipo_ y asegurar la entrega de _resultados *excepcionales*_.",
      image: "https://avatars.githubusercontent.com/u/25622605?v=4",
      name: "Luis Cortés",
      role: "Desarrollador FullStack",
      availableImmediately: true
    },
    skills: [
      { name: "Angular", icon: "https://skillicons.dev/icons?i=angular", link: "https://angular.dev", color: "#6366F1" },
      { name: "Svelte", icon: "https://skillicons.dev/icons?i=svelte", link: "https://svelte.dev", color: "#22D3EE" },
      { name: "TypeScript", icon: "https://skillicons.dev/icons?i=typescript", link: "https://www.typescriptlang.org", color: "#6366F1" },
      { name: "Astro", icon: "https://skillicons.dev/icons?i=astro", link: "https://astro.build", color: "#22D3EE" },
      { name: "Tailwind", icon: "https://skillicons.dev/icons?i=tailwind", link: "https://tailwindcss.com", color: "#22D3EE" },
      { name: "Sass", icon: "https://skillicons.dev/icons?i=sass", link: "https://sass-lang.com", color: "#22D3EE" },
      { name: "NodeJS", icon: "https://skillicons.dev/icons?i=nodejs", link: "https://nodejs.org/", color: "#6366F1" },
      { name: "BUN", icon: "https://skillicons.dev/icons?i=bun", link: "https://bun.sh/", color: "#22D3EE" },
      { name: "PHP", icon: "https://skillicons.dev/icons?i=php", link: "https://www.php.net/", color: "#6366F1" },
      { name: "Python", icon: "https://skillicons.dev/icons?i=python", link: "https://www.python.org/", color: "#22D3EE" },
      { name: "Git", icon: "https://skillicons.dev/icons?i=git", link: "https://git-scm.com/", color: "#22D3EE" },
      { name: "NPM", icon: "https://skillicons.dev/icons?i=npm", link: "https://www.npmjs.com/", color: "#6366F1" },
      { name: "Figma", icon: "https://skillicons.dev/icons?i=figma", link: "https://www.figma.com/", color: "#6366F1" },
      { name: "Java", icon: "https://skillicons.dev/icons?i=java", link: "https://www.java.com/", color: "#22D3EE" },
      { name: "SpringBoot", icon: "https://skillicons.dev/icons?i=spring", link: "https://spring.io/projects/spring-boot", color: "#22D3EE" },
    ],
    projects: [
      {
        title: "jtEssentials",
        description: "Una librería con una variedad de funciones muy útiles y esenciales en ~la mayoría~ *todos* los proyectos de desarrollo web.",
        logo: "https://s6.imgcdn.dev/Yleknq.png",
        repository: "https://github.com/javiertdev/jtEssentials",
        icon: "https://skillicons.dev/icons?i=npm",
        link: "https://npmjs.com/@javiert.dev/essentials"
      },
      {
        title: "jtYxtus",
        description: "Definitivamente el *mejor* procesador de texto plano a HTML con una _cantidad desbordante_ de *utilidades increíbles*.",
        logo: "https://s6.imgcdn.dev/Yle5CL.png",
        repository: "https://github.com/javiertdev/jtYxtus",
        icon: "https://skillicons.dev/icons?i=npm",
        link: "https://npmjs.com/@javiert.dev/yxtus"
      },
      {
        title: "jtAlium",
        description: "La extensión de VSCode *perfecta* para _complementar_ tus desarrollos y facilitarte la vida con utilidades muy necesarias para /no perder la cordura/.",
        logo: "https://s6.imgcdn.dev/YleQoN.png",
        repository: "https://github.com/javiertdev/jtAlium",
        icon: "https://skillicons.dev/icons?i=vscode",
        link: "https://marketplace.visualstudio.com/items?itemName=javiertdev.jt-alium"
      },
      {
        title: "jtCedula",
        description: "Una librería que te *facilitará* la vida si tu proyecto trabaja con datos de la _Cédula de Identidad Chilena_. *¡Recomendadísima!*",
        logo: "https://s6.imgcdn.dev/YlesHu.png",
        repository: "https://github.com/javiertdev/jtCedula",
        icon: "https://skillicons.dev/icons?i=npm",
        link: "https://npmjs.com/@javiert.dev/cedula"
      },
      {
        title: "jtTransform",
        description: "Una librería simple, pero increíblemente útil que te permite transformar distintos tipos de datos a otros formatos como `números`, `NATO`, `Braile` y más.",
        logo: "https://s6.imgcdn.dev/YleK7a.png",
        repository: "https://github.com/javiertdev/jtTransform",
        icon: "https://skillicons.dev/icons?i=npm",
        link: "https://npmjs.com/@javiert.dev/transform"
      },
      {
        title: "jtSnippets",
        description: "Si tomaste la *maravillosa decisión* de utilizar mis librerías, esta extensión de VSCode te ayuda a _autocompletar_ las utilidades *en tu proyecto*.",
        logo: "https://s6.imgcdn.dev/YleNRv.png",
        repository: "https://github.com/javiertdev/jtSnippets",
        icon: "https://skillicons.dev/icons?i=vscode",
        link: "https://marketplace.visualstudio.com/items?itemName=javiertdev.jt-snippets"
      },
    ],
    experiences: [
      {
        company: {
          name: "Angecom SpA",
          logo: "https://s6.imgcdn.dev/YleRsd.png"
        },
        promotions: [
          {
            role: "Desarrollador FrontEnd",
            period: "03/2024 • 12/2025",
            company: {
              name: "Claro Chile",
              logo: "https://s6.imgcdn.dev/YleV2l.png"
            },
            description: "Iniciamos un nuevo proyecto para el cliente Claro Chile en donde desarrollamos una plataforma que sacamos a producción y hoy en día se utiliza en los CallCenters y todas las sucursales de Chile, me integré en una etapa temprana por lo que tuve la oportunidad de ser parte de las definiciones técnicas del proyecto, además de establecer la arquitectura técnica y de diseño. El proyecto fue desarrollado en Angular 17, consumiendo Lambdas con API REST además de integrar un catálogo de productos utilizando Contentful CMS configurando este desde cero, complementando información con una base de datos Mongo, trabajando el versionamiento con Git y Gitlab en todo momento. Y también haciendo integraciones con Autentikar para validaciones faciales y Autentia para la huella digital. Sumado a esto, he diseñado en Figma el prototipo de una de las plataformas, en donde posteriormente desarrollé en Angular 20 en base a microfronts, además desarrollé una librería NPM interna para reutilizar componentes dentro de todos los microfronts.",
            technologies: [
              { name: "Angular 17-20", icon: "https://skillicons.dev/icons?i=angular" },
              { name: "NodeJS", icon: "https://skillicons.dev/icons?i=nodejs" },
              { name: "NPM", icon: "https://skillicons.dev/icons?i=npm" },
              { name: "Javascript", icon: "https://skillicons.dev/icons?i=javascript" },
              { name: "MongoDB", icon: "https://skillicons.dev/icons?i=mongodb" },
              { name: "GIT", icon: "https://skillicons.dev/icons?i=git" },
              { name: "Gitlab", icon: "https://skillicons.dev/icons?i=gitlab" },
              { name: "Figma", icon: "https://skillicons.dev/icons?i=figma" }
            ]
          }
        ]
      },
      {
        company: {
          name: "SII Group",
          logo: "https://s6.imgcdn.dev/Yleqpv.png"
        },
        promotions: [
          {
            role: "Consultor",
            period: "25/01/2024 • 23/02/2024",
            company: {
              name: "Correos Chile",
              logo: "https://s6.imgcdn.dev/YleWIV.png"
            },
            description: "Durante el período de vacaciones de un desarrollador Backend, asumí sus responsabilidades, centrando mis esfuerzos en el desarrollo de microservicios utilizando NodeJS con Javascript y ExpressJS. Integré la API de Strapi CMS Headless, así como otras APIs internas de CorreosChile. En este proceso, me encargué de la configuración y resolución de diversas incidencias, gestionando eficientemente el versionamiento a través de GIT y Gitlab. Para validar los microservicios y APIs, utilicé Postman, garantizando la robustez y correcto funcionamiento de las implementaciones realizadas. Adicionalmente, me involucré en la administración de tareas mediante Jira, asegurando una coordinación efectiva en el equipo.",
            technologies: [
              { name: "NodeJS", icon: "https://skillicons.dev/icons?i=nodejs" },
              { name: "Javascript", icon: "https://skillicons.dev/icons?i=javascript" },
              { name: "ExpressJS", icon: "https://skillicons.dev/icons?i=express" },
              { name: "GIT", icon: "https://skillicons.dev/icons?i=git" },
              { name: "Gitlab", icon: "https://skillicons.dev/icons?i=gitlab" }
            ]
          },
          {
            role: "Bench Interno - Mentor Técnico",
            period: "01/11/2023 • 27/02/2024",
            description: "Durante mi periodo en el Bench de SII Group, tuve la oportunidad de desempeñar el rol de Mentor Técnico, brindando apoyo al equipo de Semillero. Aproveché esta etapa para compartir mis conocimientos sobre diversas tecnologías, fomentar buenas prácticas de programación, y destacar la importancia de la optimización, limpieza y documentación del código. Mi enfoque fue orientar al equipo hacia la excelencia técnica, impulsando su capacidad para tomar decisiones de liderazgo en sus proyectos. Esta experiencia no solo fortaleció mis habilidades de mentoría, sino que también contribuyó al crecimiento y desarrollo profesional de los miembros del Semillero.",
            technologies: [
              { name: "NodeJS", icon: "https://skillicons.dev/icons?i=nodejs" },
              { name: "Javascript", icon: "https://skillicons.dev/icons?i=javascript" },
              { name: "ExpressJS", icon: "https://skillicons.dev/icons?i=express" },
              { name: "AngularJS", icon: "https://skillicons.dev/icons?i=angular" },
              { name: "ReactJS", icon: "https://skillicons.dev/icons?i=react" },
              { name: "Azure", icon: "https://skillicons.dev/icons?i=azure" },
              { name: "GIT", icon: "https://skillicons.dev/icons?i=git" },
              { name: "Gitlab", icon: "https://skillicons.dev/icons?i=gitlab" }
            ]
          },
          {
            role: "Consultor",
            period: "01/02/2022 • 30/10/2023",
            company: {
              name: "Banco Santander Chile",
              logo: "https://s6.imgcdn.dev/YledBK.png"
            },
            description: "Contribuí al desarrollo del nuevo botón de pago con millas Santander LATAM Pass para el Banco Santander. Desarrollé en Angular 12 las pantallas a partir de diseños en Invision, conectando servicios del BackEnd con API Rest. Realicé despliegues con pipelines para Jenkins, todo el versionamiento lo realicé con Git y Gitlab. Gestioné tareas e historias en JIRA y documentación en Confluence. Configuré una VPS desde terminal y cPanel, instalé Magento 2, y diseñé un Launcher con HTML/CSS/JS para utilizar el botón. Posteriormente, asumí nuevas responsabilidades al fusionarse dos células, trabajando en un portal adicional del Banco con Angular 13, Contentful, NodeJS, pruebas unitarias y corrección de detalles en APIGEE.",
            technologies: [
              { name: "Angular 12-13", icon: "https://skillicons.dev/icons?i=angular" },
              { name: "HTML", icon: "https://skillicons.dev/icons?i=html" },
              { name: "CSS", icon: "https://skillicons.dev/icons?i=css" },
              { name: "Javascript", icon: "https://skillicons.dev/icons?i=javascript" },
              { name: "NodeJS", icon: "https://skillicons.dev/icons?i=nodejs" },
              { name: "Jenkins", icon: "https://skillicons.dev/icons?i=jenkins" },
              { name: "GIT", icon: "https://skillicons.dev/icons?i=git" },
              { name: "Gitlab", icon: "https://skillicons.dev/icons?i=gitlab" }
            ]
          }
        ]
      },
      {
        company: {
          name: "Tecnova",
          logo: "https://s6.imgcdn.dev/YlemVg.png"
        },
        promotions: [
          {
            role: "Desarrollador Full Stack",
            period: "01/12/2020 • 31/12/2021",
            company: {
              name: "Isapre Colmena",
              logo: "https://s6.imgcdn.dev/Yleeln.png"
            },
            description: "Participé en el Refactoring de un sistema antiguo basado en VisualBasic4. Después de dos meses, asumí el rol de Desarrollador Full Stack para colaborar en la migración hacia nuevas tecnologías. Implementé Angular 12 para el FrontEnd, Java & SpringBoot para el BackEnd utilizando la metodología API Rest, y Sybase para procedimientos almacenados en la base de datos mediante Embarcadero DBArtisan. Lideré el diseño en código del Sistema de Beneficiarios Ambulatorios, empleando Angular Material 9 con adaptaciones en Sass. Utilicé Git y GitLab para el control de versiones, y DagTools en una máquina virtual con Windows XP para revisar el código VisualBasic4 del sistema antiguo.",
            technologies: [
              { name: "Angular 9 y 12", icon: "https://skillicons.dev/icons?i=angular" },
              { name: "Java", icon: "https://skillicons.dev/icons?i=java" },
              { name: "SpringBoot", icon: "https://skillicons.dev/icons?i=spring" },
              { name: "Sass", icon: "https://skillicons.dev/icons?i=sass" },
              { name: "GIT", icon: "https://skillicons.dev/icons?i=git" },
              { name: "Gitlab", icon: "https://skillicons.dev/icons?i=gitlab" }
            ]
          }
        ]
      },
      {
        company: {
          name: "API-UX",
          logo: "https://s6.imgcdn.dev/YlefXh.png"
        },
        promotions: [
          {
            role: "Ingeniero Informático",
            period: "18/12/2019 • 09/06/2020",
            company: {
              name: "Corporación Administrativa del Poder Judicial",
              logo: "https://s6.imgcdn.dev/YleZpM.png"
            },
            description: "Contribuí al desarrollo del innovador portal del Poder Judicial de Chile, especializándome en la traducción de diseños visuales a código funcional HTML/CSS junto con Javascript y jQuery. Lideré la integración visual eficiente de estos elementos en PHP con CakePHP, priorizando el diseño adaptativo (Responsive) para una experiencia consistente en diversas pantallas. Superé desafíos de compatibilidad FrontEnd y materialice con éxito todas las propuestas creativas del Product Owner.",
            technologies: [
              { name: "HTML", icon: "https://skillicons.dev/icons?i=html" },
              { name: "CSS", icon: "https://skillicons.dev/icons?i=css" },
              { name: "Javascript", icon: "https://skillicons.dev/icons?i=javascript" },
              { name: "jQuery", icon: "https://skillicons.dev/icons?i=javascript" },
              { name: "PHP", icon: "https://skillicons.dev/icons?i=php" },
              { name: "GIT", icon: "https://skillicons.dev/icons?i=git" },
            ]
          }
        ]
      },
      {
        company: {
          name: "YeslyDevs",
          logo: "https://s6.imgcdn.dev/YleX2q.png"
        },
        promotions: [
          {
            role: "Consultor Informático",
            period: "30/04/2019 • 30/11/2022",
            description: "Líder de un proyecto emprendedor junto a colegas del liceo, dedicado al ámbito informático. Nos especializamos en proporcionar servicios flexibles y económicos a pequeñas y medianas empresas, enfocándonos en el desarrollo de páginas web adaptadas a sus necesidades. Utilizo mis habilidades de liderazgo para dirigir el equipo y garantizar la calidad de los servicios. Nuestras tecnologías clave incluyen Angular o Svelte para el FrontEnd, PHP o NodeJS a través de API Rest para el BackEnd, MySQL para bases de datos, GitHub para control de versiones, Trello para la gestión de tareas y Confluence para la documentación. Además, implementamos diversas librerías y tecnologías según los requisitos de cada cliente, como Bootstrap, Material UI, jQuery, Javascript, hCaptcha, cURL y varias APIs del Gobierno Digital.",
            technologies: [
              { name: "Angular", icon: "https://skillicons.dev/icons?i=angular" },
              { name: "Svelte", icon: "https://skillicons.dev/icons?i=svelte" },
              { name: "PHP", icon: "https://skillicons.dev/icons?i=php" },
              { name: "NodeJS", icon: "https://skillicons.dev/icons?i=nodejs" },
              { name: "MySQL", icon: "https://skillicons.dev/icons?i=mysql" },
              { name: "Bootstrap", icon: "https://skillicons.dev/icons?i=bootstrap" },
              { name: "Javascript", icon: "https://skillicons.dev/icons?i=javascript" },
              { name: "jQuery", icon: "https://skillicons.dev/icons?i=javascript" },
              { name: "GIT", icon: "https://skillicons.dev/icons?i=git" },
              { name: "GitHub", icon: "https://skillicons.dev/icons?i=github" },
            ]
          }
        ]
      }
    ],
    contact: {
      email: "",
      phone: "",
      rrss: {
        linkedin: "https://linkedin.com/in/javiertdev",
        github: "https://github.com/javiertdev"
      }
    }
  },
  en: {
    resume: {
      url: "https://cdn.javiert.dev/CV - Luis Cortés.en.pdf",
      filename: "CV - Luis Cortés.en.pdf"
    },
    aboutme: {
      description: "I am a *dynamic* and *proactive* professional specialized in _web development_. My /analytical orientation/ allows me to address challenges in a *meticulous* way. _Committed_ to *professional ethics*, especially in data protection and *computer security*. My /approach/ is that of a *constant learner*, always seeking opportunities to *improve* and stay up to date with the _latest trends_ and _vulnerabilities_.\nMy *solid experience* in the _creation_ and maintenance of *comprehensive technological solutions* reflects my _commitment_ to *technical excellence*. _Always_ I seek to *exceed expectations*, *contribute* to the _team's success_ and ensure the delivery of _exceptional *results*_.",
      image: "https://avatars.githubusercontent.com/u/25622605?v=4",
      name: "Luis Cortés",
      role: "FullStack Developer",
      availableImmediately: true
    },
    skills: [
      { name: "Angular", icon: "https://skillicons.dev/icons?i=angular", link: "https://angular.dev", color: "#6366F1" },
      { name: "Svelte", icon: "https://skillicons.dev/icons?i=svelte", link: "https://svelte.dev", color: "#22D3EE" },
      { name: "TypeScript", icon: "https://skillicons.dev/icons?i=typescript", link: "https://www.typescriptlang.org", color: "#6366F1" },
      { name: "Astro", icon: "https://skillicons.dev/icons?i=astro", link: "https://astro.build", color: "#22D3EE" },
      { name: "Tailwind", icon: "https://skillicons.dev/icons?i=tailwind", link: "https://tailwindcss.com", color: "#22D3EE" },
      { name: "Sass", icon: "https://skillicons.dev/icons?i=sass", link: "https://sass-lang.com", color: "#22D3EE" },
      { name: "NodeJS", icon: "https://skillicons.dev/icons?i=nodejs", link: "https://nodejs.org/", color: "#6366F1" },
      { name: "BUN", icon: "https://skillicons.dev/icons?i=bun", link: "https://bun.sh/", color: "#22D3EE" },
      { name: "PHP", icon: "https://skillicons.dev/icons?i=php", link: "https://www.php.net/", color: "#6366F1" },
      { name: "Python", icon: "https://skillicons.dev/icons?i=python", link: "https://www.python.org/", color: "#22D3EE" },
      { name: "Git", icon: "https://skillicons.dev/icons?i=git", link: "https://git-scm.com/", color: "#22D3EE" },
      { name: "NPM", icon: "https://skillicons.dev/icons?i=npm", link: "https://www.npmjs.com/", color: "#6366F1" },
      { name: "Figma", icon: "https://skillicons.dev/icons?i=figma", link: "https://www.figma.com/", color: "#6366F1" },
      { name: "Java", icon: "https://skillicons.dev/icons?i=java", link: "https://www.java.com/", color: "#22D3EE" },
      { name: "SpringBoot", icon: "https://skillicons.dev/icons?i=spring", link: "https://spring.io/projects/spring-boot", color: "#22D3EE" }
    ],
    projects: [
      {
        title: "jtEssentials",
        description: "A library with a variety of very useful and essential functions in ~most~ *all* web development projects.",
        logo: "https://s6.imgcdn.dev/Yleknq.png",
        repository: "https://github.com/javiertdev/jtEssentials",
        icon: "https://skillicons.dev/icons?i=npm",
        link: "https://npmjs.com/@javiert.dev/essentials"
      },
      {
        title: "jtYxtus",
        description: "Definitely the *best* plain text to HTML processor with an _overflowing amount_ of *incredible utilities*.",
        logo: "https://s6.imgcdn.dev/Yle5CL.png",
        repository: "https://github.com/javiertdev/jtYxtus",
        icon: "https://skillicons.dev/icons?i=npm",
        link: "https://npmjs.com/@javiert.dev/yxtus"
      },
      {
        title: "jtAlium",
        description: "The *perfect* VSCode extension to _complement_ your developments and make your life easier with very necessary utilities for /not losing sanity/.",
        logo: "https://s6.imgcdn.dev/YleQoN.png",
        repository: "https://github.com/javiertdev/jtAlium",
        icon: "https://skillicons.dev/icons?i=vscode",
        link: "https://marketplace.visualstudio.com/items?itemName=javiertdev.jt-alium"
      },
      {
        title: "jtCedula",
        description: "A library that will *make your life easier* if your project works with data from the _Chilean National ID Card_. *Highly recommended!*",
        logo: "https://s6.imgcdn.dev/YlesHu.png",
        repository: "https://github.com/javiertdev/jtCedula",
        icon: "https://skillicons.dev/icons?i=npm",
        link: "https://npmjs.com/@javiert.dev/cedula"
      },
      {
        title: "jtTransform",
        description: "A simple, but incredibly useful library that allows you to transform different types of data to other formats like `numbers`, `NATO`, `Braille` and more.",
        logo: "https://s6.imgcdn.dev/YleK7a.png",
        repository: "https://github.com/javiertdev/jtTransform",
        icon: "https://skillicons.dev/icons?i=npm",
        link: "https://npmjs.com/@javiert.dev/transform"
      },
      {
        title: "jtSnippets",
        description: "If you took the *wonderful decision* to use my libraries, this VSCode extension helps you _autocomplete_ the utilities *in your project*.",
        logo: "https://s6.imgcdn.dev/YleNRv.png",
        repository: "https://github.com/javiertdev/jtSnippets",
        icon: "https://skillicons.dev/icons?i=vscode",
        link: "https://marketplace.visualstudio.com/items?itemName=javiertdev.jt-snippets"
      }
    ],
    experiences: [
      {
        company: {
          name: "Angecom SpA",
          logo: "https://s6.imgcdn.dev/YleRsd.png"
        },
        promotions: [
          {
            role: "FrontEnd Developer",
            period: "03/2024 • 12/2025",
            company: {
              name: "Claro Chile",
              logo: "https://s6.imgcdn.dev/YleV2l.png"
            },
            description: "We started a new project for the client Claro Chile where we developed a platform that we launched into production and is currently used in Call Centers and all branches of Chile. I joined at an early stage, so I had the opportunity to be part of the project's technical definitions, in addition to establishing the technical and design architecture. The project was developed in Angular 17, consuming Lambdas with REST API in addition to integrating a product catalog using Contentful CMS configuring it from scratch, complementing information with a Mongo database, working versioning with Git and Gitlab at all times. And also making integrations with Autentikar for facial validations and Autentia for digital fingerprint. In addition, I designed in Figma the prototype of one of the platforms, where I later developed in Angular 20 based on microfronts, in addition I developed an internal NPM library to reuse components within all microfronts.",
            technologies: [
              { name: "Angular 17-20", icon: "https://skillicons.dev/icons?i=angular" },
              { name: "NodeJS", icon: "https://skillicons.dev/icons?i=nodejs" },
              { name: "NPM", icon: "https://skillicons.dev/icons?i=npm" },
              { name: "Javascript", icon: "https://skillicons.dev/icons?i=javascript" },
              { name: "MongoDB", icon: "https://skillicons.dev/icons?i=mongodb" },
              { name: "GIT", icon: "https://skillicons.dev/icons?i=git" },
              { name: "Gitlab", icon: "https://skillicons.dev/icons?i=gitlab" },
              { name: "Figma", icon: "https://skillicons.dev/icons?i=figma" }
            ]
          }
        ]
      },
      {
        company: {
          name: "SII Group",
          logo: "https://s6.imgcdn.dev/Yleqpv.png"
        },
        promotions: [
          {
            role: "Consultant",
            period: "25/01/2024 • 23/02/2024",
            company: {
              name: "Correos Chile",
              logo: "https://s6.imgcdn.dev/YleWIV.png"
            },
            description: "During the vacation period of a Backend developer, I assumed their responsibilities, focusing my efforts on the development of microservices using NodeJS with Javascript and ExpressJS. I integrated the Strapi CMS Headless API, as well as other internal APIs from CorreosChile. In this process, I was in charge of the configuration and resolution of various incidents, efficiently managing versioning through GIT and Gitlab. To validate the microservices and APIs, I used Postman, guaranteeing the robustness and correct functioning of the implemented solutions. Additionally, I was involved in task management through Jira, ensuring effective coordination in the team.",
            technologies: [
              { name: "NodeJS", icon: "https://skillicons.dev/icons?i=nodejs" },
              { name: "Javascript", icon: "https://skillicons.dev/icons?i=javascript" },
              { name: "ExpressJS", icon: "https://skillicons.dev/icons?i=express" },
              { name: "GIT", icon: "https://skillicons.dev/icons?i=git" },
              { name: "Gitlab", icon: "https://skillicons.dev/icons?i=gitlab" }
            ]
          },
          {
            role: "Internal Bench - Technical Mentor",
            period: "01/11/2023 • 27/02/2024",
            description: "During my period in the SII Group Bench, I had the opportunity to perform the role of Technical Mentor, providing support to the Seedling team. I took advantage of this stage to share my knowledge about various technologies, promote good programming practices, and highlight the importance of code optimization, cleanliness and documentation. My focus was to guide the team towards technical excellence, boosting their ability to make leadership decisions in their projects. This experience not only strengthened my mentoring skills, but also contributed to the professional growth and development of the Seedling members.",
            technologies: [
              { name: "NodeJS", icon: "https://skillicons.dev/icons?i=nodejs" },
              { name: "Javascript", icon: "https://skillicons.dev/icons?i=javascript" },
              { name: "ExpressJS", icon: "https://skillicons.dev/icons?i=express" },
              { name: "AngularJS", icon: "https://skillicons.dev/icons?i=angular" },
              { name: "ReactJS", icon: "https://skillicons.dev/icons?i=react" },
              { name: "Azure", icon: "https://skillicons.dev/icons?i=azure" },
              { name: "GIT", icon: "https://skillicons.dev/icons?i=git" },
              { name: "Gitlab", icon: "https://skillicons.dev/icons?i=gitlab" }
            ]
          },
          {
            role: "Consultant",
            period: "01/02/2022 • 30/10/2023",
            company: {
              name: "Banco Santander Chile",
              logo: "https://s6.imgcdn.dev/YledBK.png"
            },
            description: "I contributed to the development of the new payment button with Santander LATAM Pass miles for Banco Santander. I developed the screens in Angular 12 from designs in Invision, connecting BackEnd services with Rest API. I performed deployments with Jenkins pipelines, all versioning was done with Git and Gitlab. I managed tasks and stories in JIRA and documentation in Confluence. I configured a VPS from terminal and cPanel, installed Magento 2, and designed a Launcher with HTML/CSS/JS to use the button. Subsequently, I assumed new responsibilities when two cells merged, working on an additional Bank portal with Angular 13, Contentful, NodeJS, unit tests and detail corrections in APIGEE.",
            technologies: [
              { name: "Angular 12-13", icon: "https://skillicons.dev/icons?i=angular" },
              { name: "HTML", icon: "https://skillicons.dev/icons?i=html" },
              { name: "CSS", icon: "https://skillicons.dev/icons?i=css" },
              { name: "Javascript", icon: "https://skillicons.dev/icons?i=javascript" },
              { name: "NodeJS", icon: "https://skillicons.dev/icons?i=nodejs" },
              { name: "Jenkins", icon: "https://skillicons.dev/icons?i=jenkins" },
              { name: "GIT", icon: "https://skillicons.dev/icons?i=git" },
              { name: "Gitlab", icon: "https://skillicons.dev/icons?i=gitlab" }
            ]
          }
        ]
      },
      {
        company: {
          name: "Tecnova",
          logo: "https://s6.imgcdn.dev/YlemVg.png"
        },
        promotions: [
          {
            role: "Full Stack Developer",
            period: "01/12/2020 • 31/12/2021",
            company: {
              name: "Isapre Colmena",
              logo: "https://s6.imgcdn.dev/Yleeln.png"
            },
            description: "I joined as a FrontEnd Developer at Colmena, participating in the Refactoring of an old system based on VisualBasic4. After two months, I assumed the role of Full Stack Developer to collaborate in the migration to new technologies. I implemented Angular 12 for the FrontEnd, Java & SpringBoot for the BackEnd using the REST API methodology, and Sybase for stored procedures in the database through Embarcadero DBArtisan. I led the code design of the Ambulatory Beneficiaries System, using Angular Material 9 with Sass adaptations. I used Git and GitLab for version control, and DagTools on a Windows XP virtual machine to review the old system's VisualBasic4 code.",
            technologies: [
              { name: "Angular 9 and 12", icon: "https://skillicons.dev/icons?i=angular" },
              { name: "Java", icon: "https://skillicons.dev/icons?i=java" },
              { name: "SpringBoot", icon: "https://skillicons.dev/icons?i=spring" },
              { name: "Sass", icon: "https://skillicons.dev/icons?i=sass" },
              { name: "GIT", icon: "https://skillicons.dev/icons?i=git" },
              { name: "Gitlab", icon: "https://skillicons.dev/icons?i=gitlab" }
            ]
          }
        ]
      },
      {
        company: {
          name: "API-UX",
          logo: "https://s6.imgcdn.dev/YlefXh.png"
        },
        promotions: [
          {
            role: "Computer Engineer",
            period: "18/12/2019 • 09/06/2020",
            company: {
              name: "Corporación Administrativa del Poder Judicial",
              logo: "https://s6.imgcdn.dev/YleZpM.png"
            },
            description: "I contributed to the development of the innovative portal of the Judicial Power of Chile, specializing in the translation of visual designs to functional HTML/CSS code along with Javascript and jQuery. I led the efficient visual integration of these elements in PHP with CakePHP, prioritizing responsive design for a consistent experience across various screens. I overcame FrontEnd compatibility challenges and successfully materialized all the Product Owner's creative proposals.",
            technologies: [
              { name: "HTML", icon: "https://skillicons.dev/icons?i=html" },
              { name: "CSS", icon: "https://skillicons.dev/icons?i=css" },
              { name: "Javascript", icon: "https://skillicons.dev/icons?i=javascript" },
              { name: "jQuery", icon: "https://skillicons.dev/icons?i=javascript" },
              { name: "PHP", icon: "https://skillicons.dev/icons?i=php" },
              { name: "GIT", icon: "https://skillicons.dev/icons?i=git" },
            ]
          }
        ]
      },
      {
        company: {
          name: "YeslyDevs",
          logo: "https://s6.imgcdn.dev/YleX2q.png"
        },
        promotions: [
          {
            role: "Computer Consultant",
            period: "30/04/2019 • 30/11/2022",
            description: "Leader of an entrepreneurial project together with colleagues from high school, dedicated to the computer field. We specialize in providing flexible and economical services to small and medium-sized enterprises, focusing on the development of websites adapted to their needs. I use my leadership skills to direct the team and ensure service quality. Our key technologies include Angular or Svelte for the FrontEnd, PHP or NodeJS through Rest API for the BackEnd, MySQL for databases, GitHub for version control, Trello for task management and Confluence for documentation. In addition, we implement various libraries and technologies according to each client's requirements, such as Bootstrap, Material UI, jQuery, Javascript, hCaptcha, cURL and various Government Digital APIs.",
            technologies: [
              { name: "Angular", icon: "https://skillicons.dev/icons?i=angular" },
              { name: "Svelte", icon: "https://skillicons.dev/icons?i=svelte" },
              { name: "PHP", icon: "https://skillicons.dev/icons?i=php" },
              { name: "NodeJS", icon: "https://skillicons.dev/icons?i=nodejs" },
              { name: "MySQL", icon: "https://skillicons.dev/icons?i=mysql" },
              { name: "Bootstrap", icon: "https://skillicons.dev/icons?i=bootstrap" },
              { name: "Javascript", icon: "https://skillicons.dev/icons?i=javascript" },
              { name: "jQuery", icon: "https://skillicons.dev/icons?i=javascript" },
              { name: "GIT", icon: "https://skillicons.dev/icons?i=git" },
              { name: "GitHub", icon: "https://skillicons.dev/icons?i=github" },
            ]
          }
        ]
      }
    ],
    contact: {
      email: "",
      phone: "",
      rrss: {
        linkedin: "https://linkedin.com/in/javiertdev",
        github: "https://github.com/javiertdev"
      }
    }
  },
};