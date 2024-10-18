import React from 'react';

function ContactAction() {
  return (
    <div>
      <section className="text-center py-8 bg-purple-600 text-white rounded-lg">
        <h2 className="text-3xl font-bold mb-4">Ready to work with us?</h2>
        <p className="text-lg mb-6">
          Since stock levels might vary daily, please do not hesitate to forward us your enquiry if you are interested in any of the products or if you should require any further information.
        </p>
        <a
          href="/contact"
          className="inline-block px-8 py-3 bg-white text-purple-600 font-semibold rounded-lg shadow-md hover:bg-gray-200"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
}

export default ContactAction;
