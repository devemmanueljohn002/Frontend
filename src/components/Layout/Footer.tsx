const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">
            Elite Craft Furniture
          </h2>
          <p className="text-sm">
            Premium handcrafted furniture designed for elegance and durability.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>Home</li>
            <li>Products</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-white mb-4">Contact</h3>
          <p className="text-sm">Email: support@elitecraft.com</p>
          <p className="text-sm">Phone: +234 800 000 0000</p>
        </div>
      </div>

      <div className="text-center py-4 border-t border-gray-700 text-sm">
        © {new Date().getFullYear()} Elite Craft Furniture Limited. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
