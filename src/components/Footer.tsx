const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8" style={{ backgroundColor: 'var(--color-secondary)', color: 'var(--color-foreground)' }}>
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-mono text-sm">
            <span style={{ color: 'var(--color-primary)' }}>&lt;</span>
            <span> Md Sohel </span>
            <span style={{ color: 'var(--color-primary)' }}>/&gt;</span>
          </div>
          <div className="text-sm" style={{ color: 'var(--color-muted)' }}>
            © {currentYear} All rights reserved. Built with Next.js & Tailwind CSS
          </div>
          <div className="flex gap-4">
            <a href="#home" className="transition" style={{ color: 'var(--color-muted)' }}>
              <i className="fas fa-arrow-up"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer