export interface Project {
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
  details: string[];
  link: string;
  dateCompleted: Date;
  client?: string;
  testimonial?: {
    text: string;
    author: string;
    role: string;
    company: string;
  };
  metrics?: {
    label: string;
    value: string;
  }[];
}
