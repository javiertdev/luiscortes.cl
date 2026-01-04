export default interface iContent {
    [key: string]: {
        aboutme: {
            description: string,
            image: string,
            name: string,
            role: string
            availableImmediately: boolean,
        },
        resume: {
            url: string,
            filename: string
        },
        contact: {
            email: string,
            phone: string,
            rrss: {
                [key: string]: string
            }
        },
        skills: iSkill[],
        projects: iProject[],
        experiences: iExperience[],
    }
}

export interface iSkill {
    name: string,
    icon: string,
    link: string,
    color: string
}

export interface iProject {
    title: string,
    description: string,
    logo: string,
    repository: string,
    icon: string,
    link: string
}

export interface iExperience {
    company: iCompany,
    promotions: {
        period: string,
        role: string,
        description: string,
        company?: iCompany,
        technologies: iTech[]
    }[]
}

export interface iCompany {
    name: string,
    logo?: string,
    link?: string
}

export interface iTech {
    name: string,
    icon: string
}