export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <span className="text-lg font-light tracking-[0.3em] uppercase">
            Marco<span className="font-semibold">                                    Antonio</span>
          </span>

          {/* Social links */}
          <div className="flex items-center gap-6">
            {["Instagram", "Pinterest", "LinkedIn"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-xs tracking-wider uppercase text-zinc-400 hover:text-white transition-colors"
              >
                {social}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-xs text-zinc-500">
            © {new Date().getFullYear()} Marco Antonio Escobedo Arquitectura
          </p>
        </div>
      </div>
    </footer>
  );
}
