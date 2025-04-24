import type { Project } from "./projects";

export const projects: Project[] = [
  {
    title: "Sales Analytics Dashboard",
    description:
      "Interactive dashboard providing real-time insights into sales performance, trends, and forecasting. Built with React, D3.js, and a Python backend for data processing.",
    image: "/blog-placeholder-3.jpg",
    category: "Data Analysis",
    tags: ["Python", "React", "D3.js", "SQL"],
    details: [
      "Real-time data visualization with WebSocket integration",
      "Machine learning-powered sales forecasting",
      "Custom reporting engine with PDF export",
      "Role-based access control system",
      "Integration with major CRM platforms",
      "Mobile-responsive design",
    ],
    link: "https://github.com/neuro9ine/sales-analytics",
    dateCompleted: new Date("2024-03-15"),
    client: "TechCorp",
    testimonial: {
      text: "The sales analytics dashboard transformed how we track and analyze our performance. The real-time insights have been invaluable for our decision-making process.",
      author: "John Smith",
      role: "CEO",
      company: "TechCorp",
    },
    metrics: [
      {
        label: "Processing Time",
        value: "-65%",
      },
      {
        label: "User Adoption",
        value: "94%",
      },
      {
        label: "Data Accuracy",
        value: "99.9%",
      },
      {
        label: "ROI",
        value: "312%",
      },
    ],
  },
  {
    title: "Modern E-commerce Platform",
    description:
      "Full-featured e-commerce solution with inventory management, analytics, and mobile-first design. Integrated with multiple payment providers and shipping services.",
    image: "/blog-placeholder-4.jpg",
    category: "Web Development",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
    details: [
      "Headless CMS integration with Contentful",
      "Real-time inventory tracking system",
      "Advanced search with Algolia integration",
      "Multi-currency support",
      "Automated email marketing workflows",
      "A/B testing capabilities",
    ],
    link: "https://demo-ecommerce.neuro9ine.com",
    dateCompleted: new Date("2024-02-01"),
    client: "Fashion Retail Co",
    testimonial: {
      text: "Our online sales have increased by 200% since launching the new platform. The user experience is exceptional and the backend management tools save us hours every day.",
      author: "Sarah Johnson",
      role: "E-commerce Director",
      company: "Fashion Retail Co",
    },
    metrics: [
      {
        label: "Conversion Rate",
        value: "+85%",
      },
      {
        label: "Page Load",
        value: "0.8s",
      },
      {
        label: "Mobile Sales",
        value: "+150%",
      },
      {
        label: "Cart Value",
        value: "+35%",
      },
    ],
  },
  {
    title: "Data Pipeline Automation",
    description:
      "Automated data processing pipeline that reduces manual work and improves data accuracy. Handles ETL processes and generates automated reports.",
    image: "/blog-placeholder-5.jpg",
    category: "Automation",
    tags: ["Python", "Apache Airflow", "Docker", "AWS"],
    details: [
      "Automated ETL workflows with Apache Airflow",
      "Real-time data quality monitoring",
      "Automated error detection and alerting",
      "Cloud-native architecture on AWS",
      "Scalable to handle 100TB+ data",
      "Custom reporting engine",
    ],
    link: "https://github.com/neuro9ine/data-pipeline",
    dateCompleted: new Date("2024-01-15"),
    client: "DataFlow Inc",
    testimonial: {
      text: "The data pipeline automation project reduced our processing time by 75% and eliminated manual errors. Exceptional work that exceeded our expectations.",
      author: "Michael Chen",
      role: "CTO",
      company: "DataFlow Inc",
    },
    metrics: [
      {
        label: "Processing Time",
        value: "-75%",
      },
      {
        label: "Error Rate",
        value: "-99%",
      },
      {
        label: "Cost Savings",
        value: "$450K",
      },
      {
        label: "Data Volume",
        value: "100TB+",
      },
    ],
  },
  {
    title: "Customer Segmentation Tool",
    description:
      "Machine learning-powered tool for customer segmentation and behavior analysis. Helps businesses understand and target their customers better.",
    image: "/blog-placeholder-1.jpg",
    category: "Data Analysis",
    tags: ["Python", "scikit-learn", "Pandas", "Plotly"],
    details: [
      "K-means clustering",
      "Interactive visualizations",
      "Automated reporting",
      "API integration",
    ],
    dateCompleted: new Date("2023-12-15"),
    link: "#",
  },
  {
    title: "Inventory Management System",
    description:
      "Cloud-based inventory management system with real-time tracking, automated reordering, and comprehensive reporting features.",
    image: "/blog-placeholder-2.jpg",
    category: "Web Development",
    tags: ["React", "Node.js", "MongoDB", "WebSocket"],
    details: [
      "Real-time updates",
      "Barcode scanning",
      "Multi-location support",
      "Mobile app",
    ],
    dateCompleted: new Date("2023-11-01"),
    link: "#",
  },
  {
    title: "Marketing Automation Suite",
    description:
      "Comprehensive marketing automation tool that handles email campaigns, social media posting, and analytics tracking.",
    image: "/blog-placeholder-about.jpg",
    category: "Automation",
    tags: ["Node.js", "React", "Redis", "AWS"],
    details: [
      "Email campaign automation",
      "Social media scheduling",
      "A/B testing",
      "Analytics dashboard",
    ],
    dateCompleted: new Date("2023-09-15"),
    link: "#",
  },
] as const;
