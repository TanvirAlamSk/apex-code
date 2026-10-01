import Footer_Logo from "../../assets/footer_logo.png";

const LIME = "#C6F500";

const linkColumns = [
  ["Featured Courses", "Featured Categories", "Business", "IT", "Design"],
  ["Development", "Marketing", "Photography", "Finance", "Sport"],
  ["Become a Creator", "Affiliate Program", "Contact", "Help", "About"],
];

const legalLinks = ["Privacy Policy", "Terms of Service", "Cookies Settings"];

function Footer() {
  return (
    <footer className="w-full border-t border-neutral-200 bg-white text-neutral-800 px-4">
      <div className="mx-auto max-w-299 pt-15">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          {/* Brand + newsletter */}
          <div className="max-w-md px-6">
            <span className="flex items-baseline gap-3">
                <img src={Footer_Logo} alt="" />
                <h2 className="text-2xl font-bold">ByteSpace</h2>
            </span>
            
            <p className="mt-3 text-xs">
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>

            <form
              className="mt-8 flex items-center gap-3"
              onSubmit={(e) => e.preventDefault()}
            >
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                placeholder="Enter your email"
                className="h-10 w-full max-w-66.75 rounded-full border border-neutral-300 px-4 text-sm placeholder:text-neutral-700 focus:border-neutral-900 focus:outline-none"
              />
              <button
                type="submit"
                className="h-10 shrink-0 rounded-full px-6 text-sm font-medium text-neutral-900 transition hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                style={{ backgroundColor: LIME }}
              >
                Search
              </button>
            </form>

            <p className="mt-5 max-w-85 text-[11px] leading-snug">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>

          {/* Link columns */}
          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-x-12 gap-y-8 sm:grid-cols-3 lg:gap-x-14"
          >
            {linkColumns.map((col, i) => (
              <ul key={i} className="space-y-3.5">
                {col.map((label) => (
                  <li key={label}>
                    <a
                      href="#"
                      className="text-xs hover:underline focus-visible:underline"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="mt-24 flex flex-col gap-3 border-t border-neutral-200 py-6 text-[11px] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2023 ByteSpace. All rights reserved.</p>
          <ul className="flex gap-5">
            {legalLinks.map((label) => (
              <li key={label}>
                <a href="#" className="hover:underline focus-visible:underline">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;