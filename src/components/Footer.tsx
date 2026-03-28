const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-mono text-sm">
            <span className="text-blue-400">&lt;</span>
            <span> Md Sohel </span>
            <span className="text-blue-400">/&gt;</span>
          </div>
          <div className="text-sm text-gray-400">
            © {currentYear} All rights reserved. Built with Next.js & Tailwind CSS
          </div>
          <div className="flex gap-4">
            <a href="#home" className="text-gray-400 hover:text-white transition">
              <i className="fas fa-arrow-up"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer