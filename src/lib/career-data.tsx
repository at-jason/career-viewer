// src/lib/career-data.ts
'use client';
export interface Experience {
  company: string;
  role: string;
  period: string;
  achievements: string[];
}

export interface CareerSection {
  title: string;
  summary: string;
  experience: Experience[];
  keySkills: string[];
}

export interface CareerData {
  [key: string]: CareerSection;
}

export const careerData: CareerData = {
  product: {
     title: 'Product Management',
  summary: 'Product leader specializing in developing tech-enabled solutions that drive business growth. Strong track record of leading cross-functional teams and delivering scalable products that improve operational efficiency.',
  experience: [
    {
      company: 'Verizon',
      role: 'Customer Experience Data Measurement Lead (Contract)',
      period: 'May 2024 - Present',
      achievements: [
        'Built executive dashboard consolidating product requirements from VP and Director-level stakeholders into actionable KPIs',
        'Transformed department health metrics into intuitive visualizations for leadership decision-making',
        'Developed data-driven insights to inform CX and Design product strategy'
      ]
    },
    {
      company: 'General Mills - Blue Buffalo',
      role: 'Product Manager & Insights Manager, Customer Care',
      period: 'Feb 2022 - Jan 2024',
      achievements: [
        'Led product strategy for customer support platforms serving 1.3M users across Salesforce, Twilio, and Discourse',
        'Improved agent productivity 30% through Salesforce/Twilio platform enhancements',
        'Developed and launched automated support processes reducing wait times by 20%',
        'Established Voice of Customer program driving 0.75-star App Store rating increase',
        'Reduced churn 25% through data-driven product improvements',
        'Managed vendor relationships and $500k+ annual technology budget',
        'Led three-person Scrum team and served as Scrum of Scrums ambassador'
      ]
    },
    {
      company: 'REEF',
      role: 'Product Manager, Development & Excellence',
      period: 'Jun 2021 - Oct 2021',
      achievements: [
        'Scaled NYC delivery operations 200% through end-to-end product development',
        'Launched cross-client routing platform improving driver efficiency 50%',
        'Developed white-labeled communication features generating $150K monthly revenue',
        'Led alcohol delivery service integration with age verification systems',
        'Collaborated with Real Estate team to design optimal delivery hub layouts',
        'Gathered requirements from business partners to drive product roadmap'
      ]
    },
    {
      company: 'MakeSpace',
      role: 'Manager, Continuous Improvement',
      period: '2019 - 2021',
      achievements: [
        'Led product development for warehouse management system (WMS) reducing defects 20%',
        'Designed inventory visualization system for 18,000+ locations',
        'Integrated Zapier and Slack for automated route notifications',
        'Built webhook system decreasing late deliveries 15%',
        'Collaborated with PMs to define product strategy for enterprise apps'
      ]
    },
    {
      company: 'MakeSpace',
      role: 'Customer Support Operations Specialist',
      period: '2017 - 2019',
      achievements: [
        'Managed product backlog for customer-facing departments',
        'Wrote technical specifications and feature requests averaging 15 tickets monthly',
        'Collaborated with Product Managers on sprint planning and prioritization',
        'Maintained 4.8/5 CSAT rating while handling customer interactions'
      ]
    }
  ],
  keySkills: [
    'Product Strategy',
    'Agile/Scrum',
    'Cross-functional Leadership',
    'Data-Driven Decision Making',
    'User Experience',
    'Technical Writing',
    'Vendor Management',
    'Process Optimization'
  ]
  },
   support: {
   title: 'Customer Operations',
  summary: 'Customer operations leader focused on scaling support teams and optimizing service delivery. Proven track record of implementing Voice of Customer programs and driving operational improvements.',
  experience: [
    {
      company: 'General Mills - Blue Buffalo',
      role: 'Product Manager & Insights Manager, Customer Care',
      period: 'Feb 2022 - Jan 2024',
      achievements: [
        'Directed global team of 15 full-time and offshore agents maintaining 4.7/5 CSAT',
        'Managed social care team monitoring 15k monthly conversations',
        'Reduced wait times 20% through automated support processes',
        'Increased first contact resolution 15% via queue optimization',
        'Launched Voice of Customer program improving App Store rating',
        'Built comprehensive help center reducing contact volume 10%',
        'Developed chatbot redirecting FAQs and decreasing abandoned conversations 5%'
      ]
    },
    {
      company: 'MakeSpace',
      role: 'Associate Manager, Customer Operations',
      period: '2019 - 2021',
      achievements: [
        'Developed performance monitoring system with 85% of agents exceeding KPIs',
        'Reduced inter-department transfers 15% through automated status syncing',
        'Improved claims resolution time from 14 to 6 days',
        'Built predictive staffing model ensuring 95% service coverage',
        'Created comprehensive Voice of Customer report driving 20-point NPS improvement',
        'Designed QA system and agent coaching program improving call wait times'
      ]
    },
    {
      company: 'MakeSpace',
      role: 'Customer-Operations Liaison',
      period: '2018 - 2019',
      achievements: [
        'Streamlined claims process reducing resolution time by 8 days',
        'Led operational defect research improving NPS by 40 points',
        'Developed workflows for inventory discrepancy management',
        'Created knowledge base consolidating SOPs and training materials',
        'Partnered with Product team to implement digital tipping solution'
      ]
    },
    {
      company: 'MakeSpace',
      role: 'Customer Support Operations Specialist',
      period: '2017 - 2018',
      achievements: [
        'Maintained 4.8/5 CSAT rating for customer interactions',
        'Developed support knowledge base and documentation',
        'Created customer service macros improving response efficiency',
        'Built internal ticketing dashboard improving resolution time 40%'
      ]
    },
    {
      company: 'MakeSpace',
      role: 'Customer Support Specialist',
      period: '2016 - 2017',
      achievements: [
        'Handled email, phone, and chat support maintaining high satisfaction',
        'Created documentation for common customer inquiries',
        'Identified and escalated operational issues',
        'Contributed to knowledge base development'
      ]
    }
  ],
  keySkills: [
    'Team Leadership',
    'Process Optimization',
    'Voice of Customer',
    'Performance Management',
    'Quality Assurance',
    'Training Development',
    'Customer Experience',
    'Support Operations'
  ]
  },
  analytics: {
    title: 'Analytics & Insights',
  summary: 'Analytics leader focused on transforming data into actionable business insights. Expert in SQL, BI tools, and developing scalable reporting solutions.',
  experience: [
    {
      company: 'Verizon',
      role: 'Customer Experience Data Measurement Lead',
      period: 'May 2024 - Present',
      achievements: [
        'Built executive dashboard consolidating CX/Design KPIs',
        'Analyzed employee survey data to identify productivity trends',
        'Created visualization system for cross-department metrics',
        'Cross-referenced productivity data to optimize team composition'
      ]
    },
    {
      company: 'General Mills - Blue Buffalo',
      role: 'Product Manager & Insights Manager',
      period: 'Feb 2022 - Jan 2024',
      achievements: [
        'Developed Voice of Customer analytics processing 40k monthly contacts',
        'Created real-time monitoring system for product safety issues',
        'Built Power BI dashboard consolidating multi-platform support metrics',
        'Analyzed 2,000+ monthly reviews identifying product risks',
        'Generated weekly reports on social sentiment and market trends',
        'Developed automated reporting for digital marketing campaigns'
      ]
    },
    {
      company: 'REEF',
      role: 'Product Manager, Development & Excellence',
      period: 'Jun 2021 - Oct 2021',
      achievements: [
        'Designed performance tracking system for delivery operations',
        'Created weekly client reporting package with delivery metrics',
        'Built route optimization models improving efficiency 50%',
        'Developed growth modeling for market expansions',
        'Analyzed warehouse capacity and delivery patterns'
      ]
    },
    {
      company: 'MakeSpace',
      role: 'Manager, Continuous Improvement',
      period: '2019 - 2021',
      achievements: [
        'Developed predictive staffing models ensuring 95% service levels',
        'Built Looker dashboards saving $500k in revenue leakage',
        'Created inventory health monitoring system for 18k+ locations',
        'Designed defect tracking system reducing backlog 75%',
        'Automated transportation QA processes improving on-time performance'
      ]
    },
    {
      company: 'MakeSpace',
      role: 'Customer Operations Specialist',
      period: '2016 - 2019',
      achievements: [
        'Built analytics infrastructure for support performance monitoring',
        'Created Zendesk reporting suite for quality assurance',
        'Developed predictive models for staffing requirements',
        'Designed dashboards tracking billing and subscription metrics',
        'Automated status synchronization across CRM systems'
      ]
    }
  ],
  keySkills: [
    'SQL',
    'Python',
    'Looker',
    'Power BI',
    'ETL',
    'Statistical Analysis',
    'Dashboard Development',
    'Data Modeling',
    'Predictive Analytics'
  ]
  },
  operations: {
     title: 'Operations & Continuous Improvement',
  summary: 'Operations leader specializing in process optimization and continuous improvement. Proven track record of implementing scalable solutions and driving operational excellence.',
  experience: [
    {
      company: 'REEF',
      role: 'Product Manager, Development & Excellence',
      period: 'Jun 2021 - Oct 2021',
      achievements: [
        'Optimized vehicle loading reducing delivery issues 85%',
        'Achieved 90% on-time delivery rate across all products',
        'Designed hub layouts supporting 400 daily appointments',
        'Launched alcohol delivery operation in 14 days',
        'Created SOPs and KPIs for new delivery programs',
        'Managed contractor relationships across multiple hubs',
        'Scaled NYC delivery operations by 200%'
      ]
    },
    {
      company: 'MakeSpace',
      role: 'Manager, Continuous Improvement',
      period: '2019 - 2021',
      achievements: [
        'Led operational excellence initiatives across 24 markets',
        'Reduced defect tickets 75% in 90 days through process optimization',
        'Decreased late deliveries 15% through automated QA',
        'Managed supply chain for 2M+ stored items',
        'Designed inventory health dashboard for 18k+ locations',
        'Created scalable onboarding for operational leaders',
        'Developed WMS features reducing inbound defects 40%'
      ]
    },
    {
      company: 'MakeSpace',
      role: 'Customer-Operations Liaison',
      period: '2018 - 2019',
      achievements: [
        'Led insourcing of warehouse operations in multiple markets',
        'Directed Toronto market launch achieving $3M first-year revenue',
        'Installed WMS across facilities reducing delivery lead time',
        'Managed quality initiatives improving NPS by 40 points',
        'Led operational training for ten new markets',
        'Designed workflows for inventory management'
      ]
      }
    ],
    keySkills: ['Process Optimization', 'Quality Management', 'Supply Chain', 'Team Leadership', 'Project Management']
  }
};