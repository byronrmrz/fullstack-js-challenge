const Footer = () => {
  return (
    <footer className="bg-offy-dark text-white py-8 mt-auto">
      <div className="container mx-auto px-6 text-center md:text-left">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          
          
          <div>
            <h3 className="text-xl font-bold text-offy-blue mb-2">Offymarket</h3>
            <p className="text-sm text-gray-400">
              La solución adecuada para su oficina.
            </p>
            <p className="text-sm text-gray-500 mt-1">
              © 2025 Offymarket. Todos los derechos reservados.
            </p>
          </div>

          <div className="text-sm text-gray-400 text-center md:text-right">
            <p>20 Calle 18-58, zona 10. Guatemala, C.A.</p>
            <p>+502 2428-7600</p>
            <p>ventas@offymarket.com</p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;