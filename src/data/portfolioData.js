export const personalInfo = {
  name: "Efendio De Sousa Xavier",
  title: "Web Developer & Cyber Security Graduate",
  email: "efendioxavier@gmail.com",
  github: "https://github.com/efendio",
  linkedin: "https://linkedin.com/in/efendio",
  location: "Dili, Timor-Leste",
  phone: "+670 75633053"
};

export const experiences = [
  {
    id: 1,
    title: "Developer & Security",
    company: "Ministry of State Administration, Dili",
    period: "Dec 2025 – Present",
    responsibilities: [
      "Develop and maintain SIIGSA, SEPAA, and Portal Municipio web systems",
      "Create RESTful APIs for inter-system communication",
      "Implement security patches and performance optimizations",
      "Ensure 99.9% system reliability in production"
    ],
    tech: ["React.js", "Laravel", "PostgreSQL", "Docker"]
  },
  {
    id: 2,
    title: "Corporate Network Security Intern",
    company: "Timor Telecom, Dili",
    period: "Jan 2025 – May 2025",
    responsibilities: [
      "Monitored network systems across Timor-Leste infrastructure",
      "Contributed to server deployment and configuration",
      "Developed Intrusion Detection System (IDS) prototype",
      "Analyzed telecom security vulnerabilities"
    ],
    tech: ["Python", "Wireshark", "Snort", "Linux"]
  },
  {
    id: 3,
    title: "IT Infrastructure Intern",
    company: "Ministry of Finance, Dili",
    period: "Sep 2024 – Jan 2025",
    responsibilities: [
      "Troubleshot network devices and IP phone systems",
      "Supported IT operations across multiple departments",
      "Assisted data center monitoring and maintenance",
      "Developed documentation for system procedures"
    ],
    tech: ["Cisco", "Windows Server", "Active Directory"]
  }
];

export const projects = [
  {
    id: 1,
    title: "Booking Ticket System",
    description: "Web-based passenger management with automated ticket generation, real-time availability, and PDF export.",
    tech: ["React.js", "Node.js", "MongoDB", "JWT"],
    //github: "https://github.com/efendio/booking-system",
    //live: "https://booking-demo.efendio.com",
    image: "/assets/booking.jpg"
  },
  {
    id: 2,
    title: "AI-Healthcare Platform",
    description: "Digital healthcare solution with appointment scheduling, medical records, and AI diagnostic tools integration.",
    tech: ["Django", "React.js", "TensorFlow", "PostgreSQL"],
    //github: "https://github.com/efendio/ai-healthcare",
    //live: "https://healthcare-demo.efendio.com",
    image: "/assets/healthcare.jpg"
  },
  {
    id: 3,
    title: "Bank Security Audit",
    description: "Comprehensive security audit for Bank Syariah Indonesia, identifying vulnerabilities and compliance gaps.",
    tech: ["Nessus", "Metasploit", "OWASP ZAP", "Report Writing"],
    //github: "https://github.com/efendio/security-audit",
    //live: null,
    image: "/assets/audit.jpg"
  },
  {
    id: 4,
    title: "Intrusion Detection System",
    description: "Network-based IDS using signature-based detection with real-time alerting dashboard.",
    tech: ["Python", "Scapy", "React.js", "WebSockets"],
    //github: "https://github.com/efendio/ids-project",
    //live: null,
    image: "/assets/ids.jpg"
  }
];

export const skills = {
  languages: ["JavaScript", "Python", "PHP", "C#", "SQL"],
  frontend: ["React.js", "Next.js", "Tailwind CSS", "Bootstrap"],
  backend: ["Node.js", "Laravel", "Django", "CodeIgniter"],
  cybersecurity: ["Penetration Testing", "IDS/IPS", "SQL Injection", "Network Security"],
  tools: ["Git", "Docker", "VS Code", "Postman", "Linux"]
};

export const certifications = [
  "Basic Web & Mobile Security (ITBOX)",
  "Python, C#, C for Ethical Hacking (ITBOX)",
  "Android Penetration Testing (ITBOX)",
  "SQL Injection for Web Security (ITBOX)",
  "DDOS & Wireless Hacking for Pentester (ITBOX)"
];