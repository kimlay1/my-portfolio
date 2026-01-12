import {Send} from "lucide-react"

const content = {
        en: {
            badge: "Get in touch with me",
            nameLabel: "Name",
            namePlace: "Enter your name...",
            emailLabel: "Email",
            msgLabel: "Message",
            msgPlace: "Enter your message...",
            btn: "Send Message"
        },
        jp: {
            badge: "お問い合わせ",
            nameLabel: "お名前",
            namePlace: "お名前を入力してください...",
            emailLabel: "メールアドレス",
            msgLabel: "メッセージ",
            msgPlace: "メッセージを入力してください...",
            btn: "メッセージを送信"
        }
    };


export function Contacts ({lang}) {
    return (
        <section id="contacts" className="py-32 relative overflow-hidden px-6">
            <div className="text-center mx-auto max-w-3xl mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">{content[lang].badge}</span>
                </div>
            <div className="max-w-2xl mx-auto">
                <div className="glass p-8 rounded-3xl border border-primary/30 mx-auto">
                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2">{content[lang].nameLabel}</label>
                            <input required placeholder={content[lang].namePlace} id="name" type="text" className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"></input>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2">{content[lang].emailLabel}</label>
                            <input required placeholder="yourname@example.com" className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"></input>
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-2">{content[lang].msgLabel}</label>
                            <textarea rows={4} required placeholder={content[lang].msgPlace} className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"/>
                        </div>
                        <button type="submit" className="w-full flex items-center justify-center gap-2 px-8 py-4 text-lg relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25">Send Message<Send/></button>
                    </form>
                </div>
            </div>
        </section>
    )
}