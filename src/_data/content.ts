import type iContent from '../interfaces/core.interface';

export const content: iContent = {
  es: {
    resume: {
      url: "",
      filename: ""
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
      { name: "NPM", icon: "https://skillicons.dev/icons?i=npm", link: "https://www.npmjs.com/", color: "#6366F1" },
      { name: "Figma", icon: "https://skillicons.dev/icons?i=figma", link: "https://www.figma.com/", color: "#6366F1" },
      { name: "Git", icon: "https://skillicons.dev/icons?i=git", link: "https://git-scm.com/", color: "#22D3EE" },
      { name: "PHP", icon: "https://skillicons.dev/icons?i=php", link: "https://www.php.net/", color: "#6366F1" },
      { name: "Python", icon: "https://skillicons.dev/icons?i=python", link: "https://www.python.org/", color: "#22D3EE" },
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
        description: "La extensión para *VSCode* que _transforma_ tu *experiencia de desarrollo*. Con _útilidades_ que *simplifican* tu /trabajo/ en los proyectos *robustos*.",
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
            description: "Participé como arquitecto frontend desde fase inicial de plataforma omnicanal para Claro Chile, actualmente operativa en callcenters y sucursales a nivel nacional. Definí la arquitectura técnica y de diseño, estableciendo el stack tecnológico y patrones de desarrollo. Arquitecté una nueva solución frontend en Angular con arquitectura de microfrontends, desarrollando una librería NPM interna de componentes compartidos para escalar el desarrollo. Implementé una integración headless CMS con Contentful configurado desde cero, consumo de AWS Lambdas vía API REST, y base de datos MongoDB. Integré servicios de biometría (Autentikar para reconocimiento facial y Autentia para huella digital). Diseñé prototipo en Figma traducido posteriormente a código, asegurando consistencia entre diseño y desarrollo.",
            technologies: [
              { name: "Angular 17-20", icon: "https://skillicons.dev/icons?i=angular" },
              { name: "NodeJS", icon: "https://skillicons.dev/icons?i=nodejs" },
              { name: "NPM", icon: "https://skillicons.dev/icons?i=npm" },
              { name: "Javascript", icon: "https://skillicons.dev/icons?i=javascript" },
              { name: "MongoDB", icon: "https://skillicons.dev/icons?i=mongodb" },
              { name: "GIT", icon: "https://skillicons.dev/icons?i=git" },
              { name: "Gitlab", icon: "https://skillicons.dev/icons?i=gitlab" },
              { name: "BitBucket", icon: "https://skillicons.dev/icons?i=bitbucket" },
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
            period: "01/2024 • 02/2024",
            company: {
              name: "Correos Chile",
              logo: "https://s6.imgcdn.dev/YleWIV.png"
            },
            description: "Asumí temporalmente desarrollo backend (por reemplazo) para Correos Chile, implementando microservicios en Node.js/Express integrados con Strapi Headless CMS y APIs internas corporativas. Diseñé y validé endpoints REST utilizando Postman, asegurando robustez y cumplimiento de especificaciones técnicas. Resolví incidencias críticas de producción y gestioné deployments mediante Git/GitLab. Coordiné trabajo con equipo mediante JIRA, garantizando continuidad operacional durante período de transición.",
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
            period: "11/2023 • 12/2023",
            description: "Ejercí como Mentor Técnico para el programa Semillero, liderando capacitación técnica de desarrolladores junior en arquitectura de software, patrones de diseño y mejores prácticas de desarrollo. Implementé code reviews estructurados y sesiones de pair programming para acelerar curva de aprendizaje del equipo.",
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
            period: "02/2022 • 10/2023",
            company: {
              name: "Banco Santander Chile",
              logo: "https://s6.imgcdn.dev/YledBK.png"
            },
            description: "Desarrollé la solución de pago con millas LATAM Pass para Banco Santander, implementando el FrontEnd con Angular e integrando APIs REST. Configuré pipelines CI/CD en Jenkins y para los deployments automatizados a producción. Establecí entorno de pruebas configurando una VPS con Magento 2 para validación de integración del botón de pago. Posteriormente, contribuí al desarrollo de portal corporativo implementando una arquitectura headless CMS con Contentful y Node.js, aplicando testing unitario y optimizando integraciones APIGEE. Gestioné trabajo ágil con JIRA/Confluence y versionamiento con Git/GitLab.",
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
            period: "12/2020 • 12/2021",
            company: {
              name: "Isapre Colmena",
              logo: "https://s6.imgcdn.dev/Yleeln.png"
            },
            description: "Participé en la modernización de un sistema legacy VisualBasic 4 hacia stack moderno con Angular y Spring Boot. Lideré el diseño y arquitectura front-end del módulo crítico de Beneficiarios Ambulatorios, estableciendo patrones de componentes reutilizables con Angular Material y Sass. Desarrollé funcionalidades full-stack implementando APIs REST en Java/Spring Boot integradas con procedimientos almacenados Sybase. Gestioné versionamiento con Git/GitLab y realicé ingeniería inversa del sistema legacy para garantizar migración completa de funcionalidades sin pérdida de datos.",
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
            period: "12/2019 • 06/2020",
            company: {
              name: "Corporación Administrativa del Poder Judicial",
              logo: "https://s6.imgcdn.dev/YleZpM.png"
            },
            description: "Desarrollé componentes front-end para el portal institucional del Poder Judicial de Chile, implementando interfaces responsive y accesibles según especificaciones de diseño. Lideré la integración de componentes visuales con arquitectura backend CakePHP, optimizando rendimiento y compatibilidad cross-browser. Resolví desafíos técnicos complejos de compatibilidad front-end y traduje requerimientos de producto en soluciones técnicas escalables, asegurando entrega consistente de funcionalidades según roadmap definido por el cliente.",
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
            period: "04/2019 • 11/2022",
            description: "Cofundé y lideré técnicamente una empresa de desarrollo web para PyMEs, definiendo arquitectura de soluciones full-stack y estándares de desarrollo. Arquitecté aplicaciones con arquitectura de microservicios utilizando API REST, implementé pipelines CI/CD con GitHub, y establecí procesos ágiles con Trello y Confluence. Gestioné el ciclo completo de proyectos desde diseño de arquitectura hasta entrega, liderando equipo de desarrollo y asegurando calidad mediante code reviews. Implementé integraciones con APIs gubernamentales y servicios de terceros, optimizando bases de datos MySQL para alto rendimiento.",
            technologies: [
              { name: "Angular", icon: "https://skillicons.dev/icons?i=angular" },
              { name: "React", icon: "https://skillicons.dev/icons?i=react" },
              { name: "PHP", icon: "https://skillicons.dev/icons?i=php" },
              { name: "NodeJS", icon: "https://skillicons.dev/icons?i=nodejs" },
              { name: "MySQL", icon: "https://skillicons.dev/icons?i=mysql" },
              { name: "Bootstrap", icon: "https://skillicons.dev/icons?i=bootstrap" },
              { name: "Typescript", icon: "https://skillicons.dev/icons?i=ts" },
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
      url: "",
      filename: ""
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
      { name: "NPM", icon: "https://skillicons.dev/icons?i=npm", link: "https://www.npmjs.com/", color: "#6366F1" },
      { name: "Figma", icon: "https://skillicons.dev/icons?i=figma", link: "https://www.figma.com/", color: "#6366F1" },
      { name: "Git", icon: "https://skillicons.dev/icons?i=git", link: "https://git-scm.com/", color: "#22D3EE" },
      { name: "PHP", icon: "https://skillicons.dev/icons?i=php", link: "https://www.php.net/", color: "#6366F1" },
      { name: "Python", icon: "https://skillicons.dev/icons?i=python", link: "https://www.python.org/", color: "#22D3EE" },
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
        description: "The extension for *VSCode* that _transforms_ your *development experience*. With _utilities_ that *simplify* your /work/ in *robust* projects.",
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
            description: "I participated as a frontend architect from the initial phase of the omnichannel platform for Claro Chile, currently operational in call centers and branches nationwide. I defined the technical and design architecture, establishing the technological stack and development patterns. I architected a new frontend solution in Angular with microfrontends architecture, developing an internal NPM library of shared components to scale development. I implemented a headless CMS integration with Contentful configured from scratch, consumption of AWS Lambdas via REST API, and MongoDB database. I integrated biometric services (Autentikar for facial recognition and Autentia for digital fingerprint). I designed the prototype in Figma subsequently translated to code, ensuring consistency between design and development.",
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
            description: "I temporarily assumed backend development (as a replacement) for Correos Chile, implementing microservices in Node.js/Express integrated with Strapi Headless CMS and internal corporate APIs. I designed and validated REST endpoints using Postman, ensuring robustness and compliance with technical specifications. I resolved critical production incidents and managed deployments through Git/GitLab. I coordinated work with the team through JIRA, ensuring operational continuity during the transition period.",
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
            description: "I served as Technical Mentor for the Seedling program, leading technical training of junior developers in software architecture, design patterns, and best development practices. I implemented structured code reviews and pair programming sessions to accelerate the team's learning curve.",
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
            description: "I developed the payment solution with LATAM Pass miles for Banco Santander, implementing the FrontEnd with Angular and integrating REST APIs. I configured CI/CD pipelines in Jenkins and for automated deployments to production. I established a testing environment by configuring a VPS with Magento 2 for validation of the payment button integration. Subsequently, I contributed to the development of the corporate portal implementing a headless CMS architecture with Contentful and Node.js, applying unit testing and optimizing APIGEE integrations. I managed agile work with JIRA/Confluence and versioning with Git/GitLab.",
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
            description: "I participated in the modernization of a legacy VisualBasic 4 system towards a modern stack with Angular and Spring Boot. I led the design and front-end architecture of the critical Ambulatory Beneficiaries module, establishing reusable component patterns with Angular Material and Sass. I developed full-stack functionalities implementing REST APIs in Java/Spring Boot integrated with Sybase stored procedures. I managed versioning with Git/GitLab and performed reverse engineering of the legacy system to ensure complete migration of functionalities without data loss.",
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
            description: "I developed front-end components for the institutional portal of the Judicial Power of Chile, implementing responsive and accessible interfaces according to design specifications. I led the integration of visual components with CakePHP backend architecture, optimizing performance and cross-browser compatibility. I resolved complex technical challenges of front-end compatibility and translated product requirements into scalable technical solutions, ensuring consistent delivery of functionalities according to the client's defined roadmap.",
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
            description: "I co-founded and led technically a web development company for SMEs, defining full-stack solution architecture and development standards. I architected applications with microservices architecture using REST APIs, implemented CI/CD pipelines with GitHub, and established agile processes with Trello and Confluence. I managed the complete project cycle from architecture design to delivery, leading the development team and ensuring quality through code reviews. I implemented integrations with governmental APIs and third-party services, optimizing MySQL databases for high performance.",
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