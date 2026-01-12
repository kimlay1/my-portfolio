import { ArrowUpRight, Github } from "lucide-react"

const projects = [
    {
        title:"Money Detection using YOLO",
        description: "A computer vision based project that trains YOLOv12x model to detect and count KHMER RIELs and US Dollars. The model is then trained and uploaded to huggingface for deployment",
        image: "/projects/1.jpg",
        tags: ["AI", "Python", "Streamlit"],
        link:"https://huggingface.co/spaces/kimlay1/yolo11s-khmer-money-identification"
    },

    {
        title:"Spam SMS Detection",
        description: "This AI model can read messages and classify whether the message is a spam or not. DistilBERT is trained on 50k messages, then deployed to huggingface.",
        image: "/projects/2.png",
        tags: ["AI", "Python", "Streamlit"],
        link:"https://huggingface.co/spaces/kimlay1/spam-classifier-app"
    },

    {
        title:"Goalify",
        description:"A football match tracking site that allows users to track when their favorite teams are playing.",
        image: "/projects/3.jpg",
        tags: ["Javascript", "Tailwind", "Vite", "HTML",],
        link:"https://github.com/kimlay1/goalify"
    },

    {
        title:"Gemini Chatbot",
        description:"A chatbot that connects with Gemini's API to let users chat with the LLM.",
        image: "/projects/4.jpg",
        tags: ["AI", "Python", "API",],
        link:"https://github.com/kimlay1/ai-chatbot-app"
    }


]

export function Projects () {
    return (
        <section id="projects" className="py-32 relative overflow-hidden">
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl"/>
            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mx-auto max-w-3xl mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">Featured Work</span>
                    <p className="text-muted-foreground ">Some of the Projects that I've worked on.</p>
                </div>

                {/* Projects */}
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, idx) => (
                    <div key={idx} className="group glass rounded-2xl overflow-hidden">
                        {/* Image */}
                        <div className="relative overflow-hidden aspect-video">
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 duration 200"> 
                            <a href={project.link} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"> <ArrowUpRight className="w-5 h-5"/></a>
                        </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 space-y-4">
                            <div className="flex items-start justify-between"> 
                                <h3 className=" text-xl font-semibold group-hover:text-primary transition-colors">{project.title}</h3>
                                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover: translate-x-1 group-hover:-translate-y-1 transition-all"/>
                            </div>
                            <p className="text-muted-foreground text-sm">{project.description}</p>
                            <div className="flex flex-wrap gap-2"> 
                                {project.tags.map((tag, tagIdx) => ( 
                                    <span className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary duration-100">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </section>
    )
}