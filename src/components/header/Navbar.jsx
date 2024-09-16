import React, { createContext, useContext } from "react";
import links from "../../services/links";
import { FaArrowRightLong } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
//
const Context = React.createContext("");

export default function Navbar({ show, setShow }) {
  React.useEffect(() => {
    console.log("Navebar");
  });
  return (
    <div
      className={` ${
        !show ? "hidden lg:block" : "block"
      }  lg:translate-x-0 transition-transform w-lvw h-full fixed lg:static inset-0 flex flex-col p-3 lg:p-0 bg-white overflow-auto`}
    >
      <div className="ml-auto  lg:hidden border border-transparent hover:border-slate-300">
        <button
          onClick={() => setShow(false)}
          className="flex justify-center items-center"
        >
          <RxCross2 size={28} />
        </button>
      </div>
      <div className="mt-2 lg:mt-0 overflow-scroll lg:overflow-visible">
        <ul className="lg:flex gap-2 capitalize text-nowrap rounded-lg lg:rounded-none border-l-2 lg:border-none">
          {links.map((link, i) => (
            <li key={i} className="relative group">
              <Provider>
                <AccordionHeader className="p-2 lg:py-0 border-t border-b lg:border-none">
                  {link.name}
                </AccordionHeader>
                {link?.subLinks && (
                  <>
                    <AccordionBody
                      className={`${
                        link?.subLinks[0]?.subLinks
                          ? "lg:-translate-x-1/2 lg:left-1/2"
                          : ""
                      } overflow-hidden lg:overflow-visible lg:hidden group-hover:block lg:absolute top-10`}
                    >
                      <ul
                        className={`${
                          link?.subLinks[0]?.subLinks ? "lg:flex" : "block"
                        } lg:gap-4  ml-2 lg:ml-0 rounded-lg border-l-2 lg:border-b-2 border-green-600 lg:p-4 lg:pt-0 bg-white`}
                      >
                        {link.subLinks.map((link, i) => (
                          <li key={i}>
                            <Provider>
                              <AccordionHeader
                                key={i}
                                className={`${
                                  link?.subLinks
                                    ? "lg:text-green-500 lg:font-semibold"
                                    : ""
                                } p-2 border-t border-b`}
                              >
                                {link.name}
                              </AccordionHeader>
                              {link?.subLinks && (
                                <AccordionBody className={`overflow-hidden`}>
                                  <ul
                                    className={`ml-2 lg:ml-0 rounded-lg border-l-2  border-green-600`}
                                  >
                                    {link.subLinks.map((link, i) => (
                                      <li key={i}>
                                        <Provider>
                                          <AccordionHeader
                                            key={i}
                                            className={`p-2 border-t border-b`}
                                          >
                                            {link.name}
                                          </AccordionHeader>
                                        </Provider>
                                      </li>
                                    ))}
                                  </ul>
                                </AccordionBody>
                              )}
                            </Provider>
                          </li>
                        ))}
                      </ul>
                    </AccordionBody>
                    <div className="hidden lg:block opacity-0 h-4 w-full top-full left-0 absolute "></div>
                  </>
                )}
              </Provider>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Provider({ children }) {
  const [show, setShow] = React.useState(true);
  return (
    <Context.Provider value={{ show, setShow }}>{children}</Context.Provider>
  );
}

function AccordionHeader({ children, className }) {
  const { show, setShow } = useContext(Context);
  const [media, setMedia] = React.useState(
    matchMedia("(max-width: 768px)").matches
  );
  React.useEffect(() => {
    window.matchMedia("(max-width: 768px)").onchange = (e) =>
      setMedia(e.matches);
    setShow(false);
    console.log(media);
  }, [media, setShow]);
  return (
    <div onClick={() => (media ? setShow(!show) : null)} className={className}>
      <a
        href="#"
        target="_self"
        rel="noopener noreferrer"
        className="inline-block hover:text-green-500 hover:underline active:underline active:text-green-500"
      >
        {children}
      </a>
    </div>
  );
}
function AccordionBody({ children, className }) {
  const { show } = useContext(Context);
  return (
    <div className={`${show ? "h-auto" : "h-0 lg:h-auto"} ${className}`}>
      {children}
    </div>
  );
}
