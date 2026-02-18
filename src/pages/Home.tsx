import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-500 to-amber-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Welcome to Our Store
          </h1>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Discover premium products at unbeatable prices. Fast delivery,
            secure payments, and top-notch support.
          </p>
          <Link
            to="/products"
            className="bg-white text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 text-center">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">Fast Delivery</h3>
            <p className="text-gray-600">
              Get your orders delivered quickly and reliably.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">Secure Payments</h3>
            <p className="text-gray-600">
              Your transactions are encrypted and protected.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">24/7 Support</h3>
            <p className="text-gray-600">
              Our team is here to help anytime you need us.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
