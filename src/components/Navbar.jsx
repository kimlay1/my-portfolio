

const navLinks = [
    { href: "#about", label: { en: "About", jp: "自己紹介" } },
    { href: "#projects", label: { en: "Projects", jp: "プロジェックト" } },
    { href: "#contacts", label: { en: "Contact", jp: "連絡先" } },
];

export function Navbar ({ lang, toggleLanguage }) {
    return (
        <header className="fixed top-0 left-0 right-0 bg-transparent py-5 z-50">
            <nav className="container mx-auto px-6 flex items-center justify-between">
                <div className="flex items-center gap-6">
                    <a href="#" className="text-xl font-bold tracking-tight hover:text-primary">KS<span className="text-primary">.</span></a>
                    <div className="glass rounded-full px-2 py-2 flex items-center gap-5">
                    <button onClick={toggleLanguage} className="px-3 py-2 text-sm text-muted-foreground hover:text-primary-foreground hover:bg-surface rounded-full">
                        {lang === 'en' ? '日本語' : 'ENGLISH'}
                    </button>
                    </div>
                </div>
                <div className="flex items-center gap-1">
                    <div className="glass rounded-full px-2 py-2 flex items-center gap-5">
                        {navLinks.map((link) => (
                            <a key={link.href} href={link.href} className="px-5 py-2 text-sm text-muted-foreground hover:text-primary-foreground hover:bg-surface rounded-full">
                                {link.label[lang]}
                            </a>
                        ))}
                    </div>
                </div>
                

            </nav>
        </header>
    )
}

