import React from "react";
import { ContainerComponent } from "../../../../components";
import mms from "../../../../assets/images/mms.png";
import { Link } from "react-router-dom";
const FooterComponent = () => {
  const date = new Date().getFullYear();
  return (
    <ContainerComponent className={`mt-auto`}>
      <footer className="border-t-2 border-gray-200 antialiased dark:bg-gray-800">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <div className="py-6 md:py-8">
            <div className="gap-4 space-y-5 xl:flex xl:items-center xl:justify-between xl:space-y-0">
              <Link to="/" className="block">
                <img className="block h-8 w-auto dark:hidden" src={mms} />
                <img className="hidden h-8 w-auto dark:block" src={mms} />
              </Link>
              <ul className="flex flex-wrap items-center gap-4 text-sm text-gray-900 dark:text-white xl:justify-center">
                <li>
                  <Link to={"/login"} className="font-medium hover:underline">
                    {" "}
                    MMS Express{" "}
                  </Link>
                </li>
                <li>
                  <a href="#" className="font-medium hover:underline">
                    {" "}
                    Legal Notice{" "}
                  </a>
                </li>
                <li>
                  <a href="#" className="font-medium hover:underline">
                    {" "}
                    Product Listing Policy{" "}
                  </a>
                </li>
                <li>
                  <a href="#" className="font-medium hover:underline">
                    {" "}
                    Terms of Use{" "}
                  </a>
                </li>
              </ul>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                © {date}{" "}
                <Link to="/login" className="hover:underline">
                  MMS Solution
                </Link>
                , Inc. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </ContainerComponent>
  );
};

export default FooterComponent;
