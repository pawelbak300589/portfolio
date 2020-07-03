import PL from "../../assets/images/pl_flag.svg";
import UK from "../../assets/images/uk_flag.svg";
import PLUK from "../../assets/images/pl_uk_flag.svg";

import staveley from "../../assets/images/staveley.svg";
import goodcall_staveley from "../../assets/images/goodcall_staveley.svg";
import goodcall from "../../assets/images/goodcall.svg";
import profit_goodcall from "../../assets/images/profit_goodcall.svg";
import profit from "../../assets/images/profit.svg";
import university_profit from "../../assets/images/university_profit.svg";
import university from "../../assets/images/university.svg";
import techschool_university from "../../assets/images/techschool_university.svg";
import techschool from "../../assets/images/techschool.svg";

import school_logo from '../../assets/images/school_logo.png';
import sch_uni_logo from '../../assets/images/sch_uni_logo.png';
import uni_logo from '../../assets/images/uni_logo.jpg';
import uni_profit_logo from '../../assets/images/uni_profit_logo.png';
import profit_logo from '../../assets/images/profit_logo.png';
import profit_gc_logo from '../../assets/images/profit_gc_logo.png';
import goodcall_logo from '../../assets/images/goodcall_logo.png';
import gc_st_logo from '../../assets/images/gc_st_logo.png';
import staveley_logo from '../../assets/images/staveley_logo.png';

export const timelineData = [
    {
        year: 2005,
        country: PL,
        colour: techschool,
        image: school_logo,
        title: 'Studying for IT Technician',
        subtitle: 'at SECONDARY TECHNICAL SCHOOL',
        text: [
            'Lorem ipsum...',
            '...dolor sit amet...',
        ],
    },
    {
        year: 2006,
        country: PL,
        colour: techschool,
        image: school_logo,
        title: 'Studying for IT Technician',
        subtitle: 'at SECONDARY TECHNICAL SCHOOL',
        text: [
            'Lorem ipsum...',
            '...dolor sit amet...',
        ],
    },
    {
        year: 2007,
        country: PL,
        colour: techschool,
        image: school_logo,
        title: 'Studying for IT Technician',
        subtitle: 'at SECONDARY TECHNICAL SCHOOL',
        text: [
            'Lorem ipsum...',
            '...dolor sit amet...',
        ],
    },
    {
        year: 2008,
        country: PL,
        colour: techschool,
        image: school_logo,
        title: 'Studying for IT Technician',
        subtitle: 'at SECONDARY TECHNICAL SCHOOL',
        text: [
            'Lorem ipsum...',
            '...dolor sit amet...',
        ],
    },
    {
        year: 2009,
        country: PL,
        colour: techschool_university,
        image: sch_uni_logo,
        title: 'From IT Technician to IT Engineer',
        subtitle: 'From SECONDARY TECHNICAL SCHOOL to THE UNIVERSITY OF INFORMATION TECHNOLOGY AND MANAGEMENT',
        text: [
            'Lorem ipsum...',
            '...dolor sit amet...',
        ],
    },
    {
        year: 2010,
        country: PL,
        colour: university,
        image: uni_logo,
        title: 'Studying for IT Engineer',
        subtitle: 'at THE UNIVERSITY OF INFORMATION TECHNOLOGY AND MANAGEMENT',
        text: [
            'Lorem ipsum...',
            '...dolor sit amet...',
        ],
    },
    {
        year: 2011,
        country: PL,
        colour: university,
        image: uni_logo,
        title: 'Studying for IT Engineer',
        subtitle: 'at THE UNIVERSITY OF INFORMATION TECHNOLOGY AND MANAGEMENT',
        text: [
            'Lorem ipsum...',
            '...dolor sit amet...',
        ],
    },
    {
        year: 2012,
        country: PL,
        colour: university,
        image: uni_logo,
        title: 'Studying for IT Engineer',
        subtitle: 'at THE UNIVERSITY OF INFORMATION TECHNOLOGY AND MANAGEMENT',
        text: [
            'Lorem ipsum...',
            '...dolor sit amet...',
        ],
    },
    {
        year: 2013,
        country: PL,
        colour: university_profit,
        image: uni_profit_logo,
        title: 'From IT Engineer to Junior PHP Developer',
        subtitle: 'From THE UNIVERSITY OF INFORMATION TECHNOLOGY AND MANAGEMENT to PROFIT AGNIESZKA WALENDZIK',
        text: [
            'In 2015 I decided to move from Poland to UK and then I started to work in Good Call Consultants',
        ],
    },
    {
        year: 2014,
        country: PL,
        colour: profit,
        image: profit_logo,
        title: 'Working as Junior PHP Developer',
        subtitle: 'at PROFIT AGNIESZKA WALENDZIK',
        text: [
            [
                'Learned from scratch new PHP frameworks: Kohana HMVC & Codeigniter.',
                'Developed, tested and maintained new features for company’s websites.',
                'Created and maintained web system for exporting second hand car advertisements to numerous advertising portals such us AutoTrader etc. using REST API.',
                'Helped developing and maintaining websites for Polish branches of Citroen and Peugeot (second hand car dealers): citroenselect.pl & uzywanygwarantowany.pl',
                'Researched and implemented new front-end component library Twitter Bootstrap.'
            ]
        ],
    },
    {
        year: 2015,
        country: PLUK,
        colour: profit_goodcall,
        image: profit_gc_logo,
        title: 'From Junior PHP Developer to Web Developer',
        subtitle: 'From PROFIT AGNIESZKA WALENDZIK to GOOD CALL',
        text: [
            'In 2015 I decided to move from Poland to UK and then I started working for Good Call Consultants',
        ],
    },
    {
        year: 2016,
        country: UK,
        colour: goodcall,
        image: goodcall_logo,
        title: 'Working as Web Developer',
        subtitle: 'at GOOD CALL INTERNET MARKETING CONSULTANTS',
        text: [
            [
                'Created, tested and maintained WordPress-based websites for various clients.',
                'Maintained and developed OpenCart-based websites.',
                'Researched and implemented various client feature requests to content management system.',
                'Developed WordPress Themes and simple Plugins for client requests.',
                'Implemented best practices such as version control (GIT) and code standards.',
                'Managed cloud based server for all clients’ websites.',
            ]
        ],
    },
    {
        year: 2017,
        country: UK,
        colour: goodcall,
        image: goodcall_logo,
        title: 'Working as Web Developer',
        subtitle: 'at GOOD CALL INTERNET MARKETING CONSULTANTS',
        text: [
            [
                'Created, tested and maintained WordPress-based websites for various clients.',
                'Maintained and developed OpenCart-based websites.',
                'Researched and implemented various client feature requests to content management system.',
                'Developed WordPress Themes and simple Plugins for client requests.',
                'Implemented best practices such as version control (GIT) and code standards.',
                'Managed cloud based server for all clients’ websites.',
            ]
        ],
    },
    {
        year: 2018,
        country: UK,
        colour: goodcall_staveley,
        image: gc_st_logo,
        title: 'From Web Developer to Web Developer',
        subtitle: 'From GOOD CALL to STAVELEY HEAD',
        text: [
            'In 2018 I decided to move further in my developer career.',
        ],
    },
    {
        year: 2019,
        country: UK,
        colour: staveley,
        image: staveley_logo,
        title: 'Working as Web Developer',
        subtitle: 'at STAVELEY HEAD',
        text: [
            [
                'Developed, tested and maintained new features for company’s internal websites.',
                'Refactored and tested old code for company’s internal websites.',
                'Took part in researching and developing new quote calculation system.',
                'Partly worked as a support consultant (JIRA) for internal broker management system.',
                'Learned from scratch new PHP framework: Phalcon.'
            ]
        ],
    },
    {
        year: 2020,
        country: UK,
        colour: staveley,
        image: staveley_logo,
        title: 'Working as Web Developer',
        subtitle: 'at STAVELEY HEAD',
        text: [
            [
                'Developed, tested and maintained new features for company’s internal websites.',
                'Refactored and tested old code for company’s internal websites.',
                'Took part in researching and developing new quote calculation system.',
                'Partly worked as a support consultant (JIRA) for internal broker management system.',
                'Learned from scratch new PHP framework: Phalcon.'
            ]
        ],
    }
];