import React from "react";

function Footer() {
  return (
    <footer className="bg-gradient-to-t from-gray-900 to-gray-900 text-center text-surface/75 dark:bg-neutral-700 dark:text-white/75 lg:text-left">
      <div className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-white/10 lg:justify-between">
        <div className="me-12 hidden lg:block">
          <span>Get connected with us on social networks:</span>
        </div>
        <div className="flex justify-center">
          <a href="#!" className="me-6 h-4 w-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 320 512"
            >
              <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
            </svg>
          </a>
          <a href="#!" className="me-6 h-4 w-4 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 512 512"
            >
              <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
            </svg>
          </a>
          {/* Add other social icons here */}
        </div>
      </div>

      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* TW Elements section */}
          <div>
            <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
              <span className="me-3 h-4 w-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
                </svg>
              </span>
              FormaScholar
            </h6>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
              dignissimos nihil voluptatum vero et nemo quam quo quisquam
              necessitatibus impedit.
            </p>
          </div>
          {/* Products section */}
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Products
            </h6>
            <p className="mb-4">
              <a href="#!">Angular</a>
            </p>
            <p className="mb-4">
              <a href="#!">React</a>
            </p>
            <p className="mb-4">
              <a href="#!">Vue</a>
            </p>
            <p>
              <a href="#!">Laravel</a>
            </p>
          </div>
          {/* Useful links section */}
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Useful links
            </h6>
            <p className="mb-4">
              <a href="#!">Pricing</a>
            </p>
            <p className="mb-4">
              <a href="#!">Settings</a>
            </p>
            <p className="mb-4">
              <a href="#!">Orders</a>
            </p>
            <p>
              <a href="#!">Help</a>
            </p>
          </div>
          {/* Contact section */}
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Contact
            </h6>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <span className="me-3 h-5 w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                  <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                </svg>
              </span>
              New York, NY 10012, US
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <span className="me-3 h-5 w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.487 2 2 6.487 2 12c0 5.514 4.487 10 10 10 5.513 0 10-4.486 10-10 0-5.513-4.487-10-10-10zm0 18c-4.411 0-8-3.589-8-8 0-2.101.814-4.033 2.146-5.482l.015.01c1.188-1.274 2.72-2.253 4.431-2.87.405-.149.825-.278 1.261-.386.61-.154 1.253-.234 1.911-.234s1.301.08 1.911.234c.436.108.856.237 1.261.386 1.71.617 3.243 1.596 4.431 2.87l.015-.01c1.331 1.45 2.146 3.382 2.146 5.482 0 4.411-3.589 8-8 8zm0-12a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
              </span>
              +1 234 567 8901
            </p>
            <p className="flex items-center justify-center md:justify-start">
              <span className="me-3 h-5 w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.487 2 2 6.487 2 12c0 5.514 4.487 10 10 10 5.513 0 10-4.486 10-10 0-5.513-4.487-10-10-10zm0 18c-4.411 0-8-3.589-8-8 0-2.101.814-4.033 2.146-5.482l.015.01c1.188-1.274 2.72-2.253 4.431-2.87.405-.149.825-.278 1.261-.386.61-.154 1.253-.234 1.911-.234s1.301.08 1.911.234c.436.108.856.237 1.261.386 1.71.617 3.243 1.596 4.431 2.87l.015-.01c1.331 1.45 2.146 3.382 2.146 5.482 0 4.411-3.589 8-8 8zm0-12a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
              </span>
              formascholar@example.com
            </p>
          </div>
        </div>
      </div>

      {/* Copyright section */}
      <div className="bg-black/5 p-6 text-center">
        <span>© 2023 Copyright:</span>
        <a className="font-semibold" href="https://tw-elements.com/">
          FormaScholar
        </a>
      </div>
    </footer>
  );
}

export default Footer;
