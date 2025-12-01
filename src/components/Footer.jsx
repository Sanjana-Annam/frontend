export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t mt-16">
      <div className="container py-12 grid gap-10 md:grid-cols-3">
        
        {/* About */}
        <div>
          <h3 className="font-bold text-lg">WEEP</h3>
          <p className="text-sm text-gray-600 mt-3">
            Empowering women through skills, mentorship, funding access,
            and marketplace opportunities.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>Programs</li>
            <li>Mentors</li>
            <li>Marketplace</li>
            <li>Partner with Us</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <p className="text-sm text-gray-600">
            Email: hello@weep.org<br />
            Phone: +91 98765 43210<br />
            WhatsApp: +91 98765 43210
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs text-gray-500 py-4 bg-gray-100">
        © {new Date().getFullYear()} WEEP — All Rights Reserved.
      </div>
    </footer>
  );
}
