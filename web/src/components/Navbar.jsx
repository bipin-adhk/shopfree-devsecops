export default function Navbar() {
  return (
    <nav className="bg-primary text-white px-6 py-4 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold">Shopfree</h1>
      <ul className="flex space-x-6">
        <li><a href="#hero" className="hover:text-secondary">Home</a></li>
        <li><a href="#services" className="hover:text-secondary">Services</a></li>
        <li><a href="#about" className="hover:text-secondary">About</a></li>
        <li><a href="#testimonials" className="hover:text-secondary">Testimonials</a></li>
        <li><a href="#contact" className="hover:text-secondary">Contact</a></li>
      </ul>
    </nav>
  );
}
