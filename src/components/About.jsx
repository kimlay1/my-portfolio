const content = {
        en: {
            badge: "About Me",
            greeting: "Hi, I'm Kimlay SOK",
            bio: "Currently, I'm a senior majoring in software development. I've built web apps, applications, and trained various AI models. My latest project was about a computer vision model that could segment money. In my free time, I enjoy playing badminton and games. Thanks for visiting my portfolio!"
        },
        jp: {
            badge: "自己紹介",
            greeting: "こんにちは、ソク・キムレイです",
            bio: "カンボジアからきました。AUPP大学でコンピュータサイエンスを専攻しています。特にウェブ開発です。趣味はゲームとバドミントンです。どうぞ よろしくおねがいします。"
        }
    };


export function About ({lang}) {
    return (
        <section id="about" className="py-32 relative overflow-hidde bg-background">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">{content[lang].badge}</span>
                        <h2 className="text-4xl font-bold leading-tight">{content[lang].greeting}<span className="text-primary">.</span></h2>
                        <div className="space-y-4 text-muted-foreground">
                            <p>{content[lang].bio}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}