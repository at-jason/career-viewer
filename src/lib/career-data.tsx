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
        'Developed performance dashboards integrating multiple data sources to drive strategic decision-making for CX leadership.',
        'Built executive dashboard consolidating product requirements from VP and Director-level stakeholders into actionable KPIs.',
        'Transformed department health metrics into intuitive visualizations for leadership decision-making.',
        'Provided data-driven insights to inform CX and Design product strategies.'
      ]
    },
    {
      company: 'General Mills - Blue Buffalo',
      role: 'Product Manager, Customer Care & Insights',
      period: 'Feb 2022 - Jan 2024',
      achievements: [
        'Directed product strategy for customer support platforms in the Buddies by Blue Buffalo app, supporting 1.3M users.',
        'Led Scrum team that delivered Salesforce and Twilio features, reducing case handling time by 30% and reclaiming 8 hours per agent weekly.',
        'Launched an automated loyalty point fulfillment feature, reducing churn by 25%.',
        'Introduced a Voice of the Customer program, achieving 95% user satisfaction with targeted product features and boosting App Store ratings from 3.5 to 4.25 stars.',
        'Drove a 33% increase in Help Center engagement by implementing a pre-chat question flow, redirecting ~3,000 monthly chat conversations to self-service tools.',
        'Managed vendor relationships and optimized a $500K technology budget for the Customer Insights Team.'
      ]
    },
    {
      company: 'REEF',
      role: 'Product Manager, Development & Excellence - Logistics as a Service',
      period: 'Jun 2021 - Oct 2021',
      achievements: [
        'Defined product vision and strategy for last-mile parcel delivery platform, generating $1.8M ARR.',
        'Developed and launched a cross-client routing management system, boosting per-route revenue by 50% and reducing labor costs by 30%.',
        'Built white-labeled messaging capabilities, unlocking $600K in pending partnerships.',
        'Identified and resolved temperature control issues, safeguarding the FreshDirect partnership.'
      ]
    },
    {
      company: 'MakeSpace',
      role: 'Manager, Continuous Improvement',
      period: '2019 - 2021',
      achievements: [
        'Co-developed product strategy and roadmap for warehousing and delivery platforms across 24 markets.',
        'Launched inventory management tools, reducing missing items by 30%.',
        'Decreased late arrivals by 15% and same-day cancellations by 30% through webhook-triggered automated QA processes.'
      ]
    },
    {
      company: 'MakeSpace',
      role: 'Associate Manager, Customer Operations',
      period: '2018 - 2019',
      achievements: [
        'Automated status synchronization across multiple CRMs, reducing interdepartmental transfers by 15%.',
        'Built a QA system identifying missing subscription assignments, recovering $500K annually.',
        'Pulled Zendesk API data to track agent adherence to coverage schedules, enhancing operational efficiency.'
      ]
    },
    {
      company: 'MakeSpace',
      role: 'Associate Manager, Quality & Special Projects',
      period: '2017 - 2018',
      achievements: [
        'Reduced price-related churn by 80% through a 72-hour buffer and manual review system for storage plan assignments.',
        'Led the Toronto market launch, designing WMS workflows that generated $3M in first-year revenue.'
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
  summary: 'Experienced customer operations leader with a proven track record of scaling teams, optimizing service delivery, and implementing Voice of Customer programs to enhance customer satisfaction and operational efficiency.',
  experience: [
    {
      company: 'General Mills - Blue Buffalo',
      role: 'Product Manager, Customer Care & Insights',
      period: 'Feb 2022 - Jan 2024',
      achievements: [
        'Directed customer support team of 15 remote staff, maintaining 4.25/5 CSAT while handling 40k+ monthly contacts for 1.3M users.',
        'Reduced case handling time by 30%, customer wait time by 20%, and improved first-contact resolution by 15% through Salesforce and Twilio automation.',
        'Developed comprehensive knowledge bases, SOPs, and customer-facing help center articles, increasing self-service resolution by 33%.',
        'Decreased churn by 25% MoM by identifying systemic user pain points and delivering automated support processes.',
        'Launched a Voice of Customer program, integrating BigQuery, Salesforce, Twilio, and Medallia sentiment analysis, boosting App Store ratings from 3.5 to 4.25 stars.',
        'Served as the primary facilitator for a 24/7 emergency response team handling high-risk social media escalations flagged by internal or off-hours teams.'
      ]
    },
    {
      company: 'REEF',
      role: 'Logistics Solutions Lead',
      period: 'Jun 2021 - Oct 2021',
      achievements: [
        'Scaled NYC delivery volume by 200% through strategic partnerships and end-to-end development of last-mile logistics solutions.',
        'Created operational and support playbooks for new product launches, enabling rapid scaling across multiple locations.'
      ]
    },
    {
      company: 'MakeSpace (Acquired by Clutter)',
      role: 'Continuous Improvement Manager',
      period: '2019 - 2021',
      achievements: [
        'Directed quality operations across 24 markets, managing 10 managers and specialists overseeing 2M+ warehoused items.',
        'Implemented quality programs that reduced defect ticket backlog by 75% within 90 days.',
        'Advanced 30% of direct reports from associate to management roles through mentorship and development programs.',
        'Developed comprehensive training materials and onboarding processes, enabling managers to achieve proficiency within 30 days.'
      ]
    },
    {
      company: 'MakeSpace',
      role: 'Associate Manager, Customer Operations',
      period: '2018 - 2019',
      achievements: [
        'Built and launched a performance monitoring program for a 50-agent team, ensuring 85% of agents exceeded KPIs within 90 days.',
        'Implemented predictive staffing models, maintaining 95% service levels while optimizing costs across customer-facing teams.',
        'Decreased average claims resolution time from 14 days to 6 days and increased NPS by 10 points through successful A/B testing and updated SOPs.',
        'Automated cross-departmental status synchronization, reducing interdepartmental transfers by 15%.',
        'Developed Python scripts to pull Zendesk API data into Google Sheets, automating schedule adherence tracking for support agents.'
      ]
    },
    {
      company: 'MakeSpace',
      role: 'Associate Manager, Quality and Special Projects',
      period: '2018 - 2019',
      achievements: [
        'Acted as Operations subject matter expert for support and sales teams, reducing ticket resolution time from 15 days to 6 days.',
        'Built a wiki using Notion to standardize issue management timelines and communication, reducing follow-up contacts by 25%.',
        'Directed the Toronto market launch, achieving full operational capacity within 60 days and generating $3M in first-year revenue.'
      ]
    },
    {
      company: 'MakeSpace',
      role: 'Senior Customer Support Operations Specialist',
      period: '2017 - 2018',
      achievements: [
        'Managed operational and technological escalations, VIP users, and B2C clients, maintaining a 4.5/5 CSAT on escalated tickets.',
        'Crafted Looker dashboards to track billing and account inconsistencies, resolving subscription issues and recovering $500k annually.'
      ]
    },
    {
      company: 'MakeSpace',
      role: 'Customer Support Specialist',
      period: '2016 - 2017',
      achievements: [
        'Handled email, phone, and chat support, consistently maintaining high customer satisfaction ratings.',
        'Created documentation for common customer inquiries to streamline support processes.',
        'Identified and escalated operational issues to improve service delivery.',
        'Contributed to the development of the customer service knowledge base.'
      ]
    }
  ],
  keySkills: [
    'Team Leadership',
    'Process Optimization',
    'Voice of Customer',
    'Performance Management',
    'Data Analytics',
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
      role: 'Customer Experience Data Measurement Lead (Contract)',
      period: 'May 2024 - Present',
      achievements: [
        'Developed a comprehensive Looker dashboard redefining the measurement of department health and translating executive stakeholder requirements into actionable KPIs.',
        'Analyzed three years of employee survey data to identify trends in team effectiveness and engagement.',
        'Leveraged insights from dashboards to recommend optimized team compositions and inform strategic FY25 hiring plans.',
        'Quantified "Verizon Design System" adoption by analyzing Figma usage and identifying areas for platform enhancement.'
      ]
    },
    {
      company: 'General Mills - Blue Buffalo',
      role: 'Product Manager, Customer Care & Insights',
      period: 'Feb 2022 - Jan 2024',
      achievements: [
        'Established a Voice of the Customer program processing insights from 40k monthly contacts, driving a 0.75-star increase in App Store rating.',
        'Created a real-time monitoring system for food safety issues, accelerating production issue detection by three weeks.',
        'Analyzed session data cross-referenced with chat and email logs, identifying trends that reduced churn by 25% MoM.',
        'Provided weekly sentiment and vulnerability trend reports to the CMO using social and support contacts data.',
        'Built Power BI dashboards consolidating multi-platform support metrics and automating digital marketing campaign reporting.'
      ]
    },
    {
      company: 'REEF',
      role: 'Product Manager, Development & Excellence',
      period: 'Jun 2021 - Oct 2021',
      achievements: [
        'Designed performance tracking systems for delivery operations, producing reports distributed to internal and external stakeholders.',
        'Developed route optimization models improving delivery efficiency by 50% and reducing labor costs.',
        'Created growth modeling for market expansions, analyzing warehouse capacity and delivery patterns.'
      ]
    },
    {
      company: 'MakeSpace',
      role: 'Manager, Continuous Improvement',
      period: '2019 - 2021',
      achievements: [
        'Developed predictive staffing models ensuring 95% service levels across customer-facing teams.',
        'Built Looker dashboards identifying $500k in annual revenue leakage and optimizing resource allocation.',
        'Created an inventory health monitoring system for 18k+ locations, reducing lost items by 30%.',
        'Designed defect tracking systems that reduced backlog by 75% within 90 days.',
        'Automated transportation QA processes improving on-time performance by 15%.'
      ]
    },
    {
      company: 'MakeSpace',
      role: 'Customer Operations Specialist',
      period: '2016 - 2019',
      achievements: [
        'Built analytics infrastructure for support performance monitoring, enabling real-time insights into operations.',
        'Created a Zendesk reporting suite for quality assurance and tracking agent productivity.',
        'Developed predictive models for staffing requirements, ensuring service levels were met efficiently.',
        'Designed dashboards tracking billing and subscription metrics to eliminate discrepancies.',
        'Automated status synchronization across CRM systems, reducing interdepartmental bottlenecks.'
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
    'Predictive Analytics',
    'Voice of Customer Analytics'
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
