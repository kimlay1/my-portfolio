import {
  ArrowRight,
  Github,
  Download,
  Facebook,
} from "lucide-react";

const skills = [
    "React",
    "Laravel",
    "Javascript",
    "HTML",
    "CSS",
    "Java",
    "Python",
    "Machine Learning",
    "GitHub",
    "AWS",
    "JSX",
    "Packet Tracer",
]

const content = {
        en: {
            badge: "Aspiring Software Developer",
            title1: "Welcome to my",
            title2: "Portfolio",
            desc: "Hi, I'm Kimlay SOK - a student majoring in computer science. I build websites, applications, and train AI models.",
            contact: "Contact Me",
            cv: "Download CV",
            follow: "Follow me:"
        },
        jp: {
            badge: "ソフトウェア開発者志望",
            title1: "私の",
            title2: "ポートフォリオへようこそ",
            desc: "こんにちは、ソク・キムレイです。コンピューターサイエンス専攻の学生です。ウェブサイトやアプリの開発、AIモデルをトレニングしますｓ。",
            contact: "お問い合わせ",
            cv: "履歴書をダウンロード",
            follow: "SNSでフォロー:"
        }
    };


export function Hero ({lang}) {
    

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            <div className="absolute inset-0">
                <img src="/heroimg.jpg" className="w-full h-full object-cover opacity-40"/>
                <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background"/>
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className="space-y-8">
                        <div>
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"/>{content[lang].badge}
                            </span>
                        </div>
                        {/* Headline */}
                        <div>
                            <h1 className="text-5xl font-bold leading-tight"> {content[lang].title1}
                                <br/><span className="text-primary glow-text">{content[lang].title2}</span> 
                            </h1>
                            <p className="text-lg text-muted-foreground max-w-lg">{content[lang].desc}</p>
                        </div>
                        {/* Buttons */}
                        <div className="flex flex-wrap gap-4">
                            <a className="flex items-center justify-center gap-2 px-8 py-4 text-lg relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25" href="#contacts"> {content[lang].contact} <ArrowRight className="w-4 h-4" /> </a>
                            <button className="flex items-center justify-center gap-2 px-8 py-4 text-lg relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25" > {content[lang].cv} <Download className="w-5 h-5" /></button>
                        </div>

                        {/* Socials */}
                        <div className="flex items-center gap-4">
                            <span className="text-sm text-muted-foreground">{content[lang].follow}</span>
                            {[
                                { icon: Github, href: "https://github.com/kimlay1"},
                                { icon: Facebook, href: "https://www.facebook.com/kimlaysok2"},
                                    ].map((social, idx) => (
                                <a key={idx} href={social.href} target="_blank" className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary">
                                {<social.icon className="w-5 h-5" />}
                                </a>
                            ))}
                        </div>

                    </div>
                    {/* Profile Image Content */}
                    <div>
                        {/* Profile Image */}
                        <div className="relative max-w-md mx-auto">
                            <div className="relative glass rounded-3xl p-2 glow-border">
                                <img 
                                src="profile.jpg"
                                className="w-full aspect-3/3 object-cover rounded-4xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Skills */}
                <div className="mt-20">
                    <p className="text-sm text-muted-foreground mb-6 text-center">Technologies that I've worked with</p>
                    <div className="relative overflow-hidden">
                        <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-background to-transparent z-10"/>
                        <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-background to-transparent z-10"/>

                        <div className="flex animate-marquee">
                            {[...skills,...skills].map((skill, idx) =>(
                           <div key={idx} className="shrink-0 px-8 py-4">
                            <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors"> {skill} </span>
                            </div>))}
                        </div>
                            

                    </div>
                </div>
            </div>
        </section>
    )
}