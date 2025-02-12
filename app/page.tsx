import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import { Navigation } from './components/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import React, { useEffect } from 'react';

export const runtime = "edge";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-2">
          Zohaib Shaik
        </h1>
        <p className="text-2xl md:text-3xl text-muted-foreground mb-4">
          Full Stack AI Developer and Enthusiast
        </p>
        <div className="flex gap-6">
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://github.com/20481A5450" target="_blank">
              <Github className="h-8 w-8" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://www.linkedin.com/in/zohaib-shaik-1a8877216/" target="_blank">
              <Linkedin className="h-8 w-8" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="mailto:shaikzohaibgec@gmail.com">
              <Mail className="h-8 w-8" />
              <span className="sr-only">Email</span>
            </Link>
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 md:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4 flex items-center gap-2">
          <span className="text-muted-foreground">01.</span> About Me
        </h2>
        <p className="text-xl text-muted-foreground leading-relaxed">
        I am Zohaib Shaik, an Artificial Intelligence and Data Science graduate with hands-on experience in Python, 
        AI, Machine Learning, Deep Learning, and Backend Development. I have worked on AI-driven applications, 
        scalable backend systems, and cloud technologies (GCP) to build efficient solutions for real-world problems.
        </p>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 md:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4 flex items-center gap-2">
          <span className="text-muted-foreground">02.</span> Experience
        </h2>
        <div className="relative border-l border-muted pl-8 ml-4">
          {[
            {
              title: "Backend Engineer Intern",
              company: "Smollan (Google)",
              date: "2024 July — Present",
              description: [
                "Developed 50+ backend endpoints for Google’s internal projects.",
                "Built scalable systems handling 10k+ daily uploads, integrating GCS Buckets, and NoSQL.",
                "Optimized APIs for 90% uptime, enhancing performance, error handling.",
                "Implemented real-time data pipelines across 5+ GCP services for seamless sync and analysis."
              ],
              tech_stack: [
                "Python", "FastAPI", "SQL", "Google Firebase", 
                "Google BigQuery", "Google Cloud Studio", 
                "Google Cloud Platform (App Engine, Cloud Run)", "Docker"
              ],
              company_url: "https://smollan.com/",
              doc_link: "https://drive.google.com/file/d/1y4ShBVUVvQMooeDhUv5ss80tzIKIn0iY/view"
            },
            {
              title: "Machine Learning Intern",
              company: "Smart Internz",
              date: "2023 Jan - 2023 Jun",
              description: [
                "Built a Sentiment Analysis model, reducing negative sentiment in customer feedback.",
                "Developed an ML model with 95% acc for feedback classification, cutting manual review time.",
                "Integrated models into a customer feedback system using Python, Flask, HTML, and CSS."
              ],
              tech_stack: [ 
                "Python", "NumPy", "Pandas", "Regex (re)", "NLP", 
                "NLTK", "Scikit-learn", "TensorFlow", "Keras", 
                "Sentiment Analysis","Flask", "HTML", "CSS"
              ],
              company_url: "https://www.smartinternz.com/",
              doc_link: "https://drive.google.com/file/d/1TDvmMNzpLPVpsNbL998PXbscmAuwYMTk/view"
            }
            ].map((job, index) => (
            <Card key={index} className="mb-6 relative">
              <div className="absolute -left-10 top-5 w-4 h-4 bg-primary rounded-full" />
              <CardContent className="pt-6">
                <h3 className="text-2xl font-semibold">
                  <a href={job.doc_link} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    {job.title}
                  </a>
                </h3>
                <p className="text-muted-foreground">
                  <a href={job.company_url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    {job.company}
                  </a>
                </p>
                <p className="text-sm text-muted-foreground mb-4">{job.date}</p>
                {job.description.length > 0 && (
                  <ul className="list-disc list-inside text-muted-foreground">
                    {job.description.map((item, i) => item && <li key={i}>{item}</li>)}
                  </ul>
                )}
                <div className="flex flex-wrap gap-2 mt-2">
                  {job.tech_stack.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-muted text-sm rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 px-4 md:px-6 lg:px-8 max-w-4xl mx-auto space-y-4"> {/* Increased space between sections */}
        <h2 className="text-3xl font-semibold mb-6 flex items-center gap-2"> {/* Increased margin-bottom */}
          <span className="text-muted-foreground">03.</span> Education
        </h2>
        <div className="space-y-8"> {/* Increased space between cards */}
          <Card>
            <CardContent className="pt-8 p-6 md:p-8"> {/* Increased padding */}
              <h3 className="text-xl md:text-xl font-semibold mb-4">B.Tech in Artificial Intelligence & Data Science</h3>
              <div className="space-y-3"> {/* Added spacing between details */}
                <p className="text-lg text-muted-foreground">Gudlavalleru Engineering College - Vijayawada, AP</p>
                <p className="text-base text-muted-foreground">2020 — 2024</p>
                <p className="text-lg text-muted-foreground"></p>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="space-y-8"> {/* Increased space between cards */}
          <Card>
            <CardContent className="pt-8 p-6 md:p-8"> {/* Increased padding */}
              <h3 className="text-xl md:text-xl font-semibold mb-4">Higher Secondary Classes (HSC)/11th & 12th Class</h3>
              <div className="space-y-3"> {/* Added spacing between details */}
                <p className="text-lg text-muted-foreground">Sri Sarada Educational Institutions - Vijayawada, AP</p>
                <p className="text-base text-muted-foreground">2018 — 2020</p>
                <p className="text-lg text-muted-foreground"></p>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="space-y-8"> {/* Increased space between cards */}
          <Card>
            <CardContent className="pt-8 p-6 md:p-8"> {/* Increased padding */}
              <h3 className="text-xl md:text-xl font-semibold mb-4">High School (SSC)/10th Class</h3>
              <div className="space-y-3"> {/* Added spacing between details */}
                <p className="text-lg text-muted-foreground">Ravindra Bharathi Public School - Vijayawada, AP</p>
                <p className="text-base text-muted-foreground">2017 — 2018</p>
                <p className="text-lg text-muted-foreground"></p>
              </div>
            </CardContent>
          </Card>
        </div>

      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 md:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4 flex items-center gap-2">
          <span className="text-muted-foreground">04.</span> Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-2"> {/* Increased gap from 6 to 8 */}
        {[
            {
              title: "Drug Recommendation System -- NLP",
              description: "The Project NLP-driven drug recommendation system analyzes patient reviews using TF-IDF and a Passive Aggressive Classifier to suggest optimal medications across 120 medical conditions.",
              technologies: ["Python", "NLTK", "Machine Learning - NLP", "Flask", "HTML", "CSS"],
              github: "https://github.com/20481A5450/Passive-Aggressive-Classifier-based-Drug-Review-System-main"
            },
            {
              title: "Fishery Advisory Services",
              description: "A deep learning-based advisory system that provides valuable insights on fish species, locations, and weather conditions to maximize profits and conserve resources for fishermen.",
              technologies: ["Python", "TensorFlow", "Flask", "API", "HTML", "CSS3"],
              github: ""
            },
            {
              title: "Django Notes App",
              description: "A web-based note-taking application built using Django, allowing users to efficiently manage, organize, and retrieve notes with a seamless backend integration.",
              technologies: ["Python", "Django", "HTML", "CSS", "Bootstrap"],
              github: "https://github.com/20481A5450/Django-React-NotesApp"
            },
            {
              title: "College Fest Web-page",
              description: "A user-friendly web page developed for a UI/UX design competition, ensuring smooth navigation and efficient performance within the given timeline.",
              technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
              github: "https://20481a5450.github.io/CollegeFestPage/"
            },
            {
              title: "InstaMint",
              description: "Advanced EMI Calculator is a modern, feature-rich EMI computation tool designed for Indian consumers in 2025. It helps users calculate EMIs for different loan types, compare multiple loan options, visualize, and estimate affordability based on income and expenses.",
              technologies: ["Python", "Streamlit", "Plotly", "Steamlit Cloud Community", "Pandas & Numpy"],
              github: "https://github.com/AjayK47/Face-Emotion-Detection_CNN"
            },
            {
              title: "Webcrawler",
              description: "This WebCrawler designed by scrapy where the web crawler, crawls through this website https://www.takeofftalent.com/ and some other and display's the results in here.",
              technologies: ["Python", "Scrapy","Markdown"],
              github: "https://github.com/20481A5450/WebCrawler"
            },
            {
              title: "Expense Tracker",
              description: "An Expense tracker using Streamlit with a NoSQL DB(Firebase) connected to it and deployed in the Streamlit Community Cloud",
              technologies: ["Python", "Streamlit", "Firebase", "Streamlit Cloud Community"],
              github: "https://expense-tracker-zo.streamlit.app/"
            },
          ].map((project, index) => (
            <Card key={index} className="overflow-hidden"> {/* Added overflow-hidden */}
              <CardContent className="pt-8 p-6 md:p-8"> {/* Increased padding */}
                <div className="flex justify-between items-start mb-4"> {/* Increased margin-bottom */}
                  <h3 className="text-xl md:text-2xl font-semibold pr-8"> {/* Added padding-right */}
                    {project.title}
                  </h3>
                  <Link 
                    href={project.github}
                    target="_blank"
                    className="text-muted-foreground hover:text-primary transition-colors flex-shrink-0"
                  >
                    <Github className="h-6 w-6 md:h-7 md:w-7" /> {/* Increased icon size */}
                  </Link>
                </div>
                <p className="text-muted-foreground mb-6 text-base md:text-lg"> {/* Increased text size and margin */}
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3"> {/* Increased gap */}
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="text-sm bg-muted px-3 py-1.5 rounded"> {/* Increased text size and padding */}
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-16 px-4 md:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4 flex items-center gap-2">
          <span className="text-muted-foreground">05.</span> Publications
        </h2>
        <div className="space-y-6">
          {[
            {
              title: "Passive-Aggressive Classifier Driven Drug Recommendation System",
              conference: "7th International Conference on Intelligent Computing(IConIC) held on",
              year: 2024,
              link: "https://drive.google.com/file/d/1LXNt7kOSDAjqr8IAc9-MqE-OHarN0Ay5/view"
            }
          ].map((publication, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-2">
                  <Link href={publication.link} className="hover:underline">
                    {publication.title}
                  </Link>
                </h3>
                <p className="text-muted-foreground">
                  {publication.conference}, {publication.year}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 md:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4 flex items-center gap-2">
          <span className="text-muted-foreground">06.</span> Contact
        </h2>
        <div className="rounded-lg border border-border bg-card p-6">
          <p className="text-lg text-muted-foreground mb-8">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Link 
              href="mailto:shaikzohaibgec@gmail.com"
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
            >
            <Mail className="h-5 w-5" />
              Email Me
            </Link>
            <Link 
              href="https://www.linkedin.com/in/zohaib-shaik-1a8877216/"
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
              target="_blank"
            >
            <Linkedin className="h-5 w-5" />
              Connect on LinkedIn
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
