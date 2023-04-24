import React, { useState, useEffect } from "react";
import "./home.css";
import { DragDropImage } from "../../components/DragDropImage";

const imageMimeType = /image\/(png|jpg|jpeg)/i;

const Home = () => {
  const [file, setFile] = useState(null);

  useEffect(() => {
    let fileReader,
      isCancel = false;
    if (file) {
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        const { result } = e.target;
        if (result && !isCancel) {
          fileReader.setFileDataURL(result);
        }
      };
      fileReader.readAsDataURL(file);
    }
    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    };
  }, [file]);

  return (
    <section>
      {/* Start Drag and drop */}
      <article className="text-gray-700 body-font h-screen flex align-center justify-center">
        <div className="container flex flex-col items-center px-5 py-16 mx-auto lg:px-20 lg:py-24 md:flex-row">
          <div className="flex flex-col items-center w-full pt-0 mb-16 text-left lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0 lg:text-center">
            <h2 className="mb-1 text-xs font-medium tracking-widest text-blue-500 dark:text-white title-font">Atomic CSS Way</h2>
            <h1 className="mb-8 text-2xl font-bold tracking-tighter text-center text-blue-800 lg:text-left lg:text-5xl title-font">
              Longer medium lenght display headline to convert.
            </h1>
            <div className="flex flex-wrap -mx-4 -mt-4 -mb-10 sm:-m-4 ">
              <div className="flex flex-col items-center p-4 mb-6 text-center md:w-1/2 md:mb-0 lg:text-left lg:items-start">
                <div className="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mb-5 text-blue-800 bg-gray-200 rounded-full">
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    fill="currentColor"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M14 10h-4v4h4v-4zm2 0v4h3v-4h-3zm-2 9v-3h-4v3h4zm2 0h3v-3h-3v3zM14 5h-4v3h4V5zm2 0v3h3V5h-3zm-8                           5H5v4h3v-4zm0 9v-3H5v3h3zM8 5H5v3h3V5zM4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
                  </svg>
                </div>
                <div className="flex-grow">
                  <h2 className="mb-3 text-lg font-medium dark:text-white tracking-tighter text-gray-700 title-font">
                    Information 1
                  </h2>
                  <p className="text-base leading-relaxed dark:text-gray-100 ">
                    Explain 2 great feature here. Information about the feature.
                  </p>
                  <a
                    href="javascript.void(0)"
                    className="inline-flex items-center font-semibold text-blue-700 md:mb-2 lg:mb-0 hover:text-blue-400 "
                  >
                    Learn More
                    <svg
                      className="w-4 h-4 ml-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="20"
                      height="20"
                      fill="currentColor"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-center p-4 mb-6 text-center md:w-1/2 md:mb-0 lg:text-left lg:items-start">
                <div className="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mb-5 text-blue-800 bg-gray-200 rounded-full">
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    fill="currentColor"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M21 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18zM11 13H4v6h7v-6zm9 0h-7v6h7v-6zm-9-8H4v6h7V5zm9 0h-7v6h7V5z" />
                  </svg>
                </div>
                <div className="flex-grow">
                  <h2 className="mb-3 text-lg font-medium tracking-tighter text-gray-700 dark:text-white title-font">
                    Information 1
                  </h2>
                  <p className="text-base leading-relaxed dark:text-gray-100">
                    Explain 2 great feature here. Information about the feature.
                  </p>
                  <a
                    href="javascript.void(0)"
                    className="inline-flex items-center font-semibold text-blue-700 md:mb-2 lg:mb-0 hover:text-blue-400 "
                  >
                    Learn More
                    <svg
                      className="w-4 h-4 ml-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="20"
                      height="20"
                      fill="currentColor"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
            <DragDropImage />
          </div>
        </div>
      </article>
      {/* End Drag and drop */}

      {/* Start Hero*/}
      <article className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-800 dark:text-gray-100">
        <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
          <img src="https://source.unsplash.com/random/480x360" alt="" className="w-full h-60 sm:h-96 dark:bg-gray-500" />
          <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-900">
            <div className="space-y-2">
              <a rel="noopener noreferrer" href="#" className="inline-block text-2xl font-semibold sm:text-3xl">
                The Best Activewear from the Nordstrom Anniversary Sale
              </a>
              <p className="text-xs dark:text-gray-400">
                By
                <a rel="noopener noreferrer" href="#" className="text-xs hover:underline">
                  Leroy Jenkins
                </a>
              </p>
            </div>
            <div className="dark:text-gray-100">
              <p>Insert the actual text content here...</p>
            </div>
          </div>
        </div>
      </article>
      {/* End Hero */}

      {/* Start Hero2 */}
      <article>
        <div className="dark:bg-violet-400">
          <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-900">
              Provident blanditiis cum exercitationem
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-900">
              Cupiditate minima voluptate temporibus quia? Architecto beatae esse ab amet vero eaque explicabo!
            </p>
            <div className="flex flex-wrap justify-center">
              <button type="button" className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-gray-800 dark:text-gray-50">
                Get started
              </button>
              <button type="button" className="px-8 py-3 m-2 text-lg border rounded dark:border-gray-700 dark:text-gray-900">
                Learn more
              </button>
            </div>
          </div>
        </div>
        <img
          src="https://source.unsplash.com/random/480x320"
          alt=""
          className="w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 dark:bg-gray-500"
        />
      </article>
      {/* End Hero2 */}

      {/* Start prize */}
      <article className="py-6 dark:bg-gray-800 dark:text-gray-50">
        <div className="container mx-auto flex flex-col items-center justify-center max-w-lg p-4 lg:max-w-full sm:p-10 lg:flex-row">
          <div className="flex flex-col items-center justify-center flex-1 p-4 pb-8 sm:p-8 lg:p-16 dark:bg-gray-900">
            <span className="text-sm">Basic</span>
            <p className="text-5xl font-bold text-center">39€</p>
            <p className="font-semibold text-center">
              Nemo deserunt possimus quo provident recusandae! Dolores qui architecto omnis pariatur eos voluptatibus sequi cum,
              non nesciunt aspernatur a?
            </p>
            <button className="px-8 py-3 mt-6 text-lg font-semibold border rounded sm:mt-12 dark:border-gray-700">Sign up</button>
          </div>
          <div className="flex flex-col items-center justify-center flex-1 p-4 pb-8 text-center rounded-md sm:p-8 lg:p-16 dark:bg-violet-400 dark:text-gray-900">
            <span className="text-sm font-semibold">Advanced</span>
            <p className="text-5xl font-bold">89€</p>
            <p className="font-semibold">
              Nemo deserunt possimus quo provident recusandae! Dolores qui architecto omnis pariatur eos voluptatibus sequi cum,
              non nesciunt aspernatur a?
            </p>
            <button className="px-8 py-3 mt-6 text-lg font-semibold rounded sm:mt-12 dark:bg-gray-800 dark:text-gray-50">
              Sign up
            </button>
          </div>
        </div>
      </article>
      {/* End prize */}

      {/* Start hero3 */}
      <article className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
        <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
          <svg
            className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
            viewBox="0 0 100 100"
            fill="currentColor"
            preserveAspectRatio="none slice"
          >
            <path d="M50 0H100L50 100H0L50 0Z" />
          </svg>
          <img
            className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
        </div>
        <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Brand new
            </p>
            <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Everything you
              <br className="hidden md:block" />
              can imagine <span className="inline-block text-deep-purple-accent-400">is real</span>
            </h2>
            <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
              eaque ipsa quae. explicabo.
            </p>
            <div className="flex items-center">
              <a
                href="/"
                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                Get started
              </a>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </article>
      {/* End hero3 */}

      {/* Start testimonial */}
      <article className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container px-6 py-12 mx-auto">
          <div className="grid items-center gap-4 xl:grid-cols-5">
            <div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
              <h2 className="text-4xl font-bold">Duo assum utroque appetere an</h2>
              <p className="dark:text-gray-400">
                Pri ex magna scaevola moderatius. Nullam accommodare no vix, est ei diceret alienum, et sit cetero malorum. Et sea
                iudico consequat, est sanctus adipisci ex.
              </p>
            </div>
            <div className="p-6 xl:col-span-3">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="grid content-center gap-4">
                  <div className="p-6 rounded shadow-md dark:bg-gray-900">
                    <p>
                      An audire commodo habemus cum. Ne sed corrumpit repudiandae. Tota aliquip democritum pro in, nec democritum
                      intellegam ne. Propriae volutpat dissentiet ea sit, nec at lorem inani tritani, an ius populo perfecto
                      vituperatoribus. Eu cum case modus salutandi, ut eum vocent sensibus reprehendunt.
                    </p>
                    <div className="flex items-center mt-4 space-x-4">
                      <img
                        src="https://source.unsplash.com/50x50/?portrait?1"
                        alt=""
                        className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
                      />
                      <div>
                        <p className="text-lg font-semibold">Leroy Jenkins</p>
                        <p className="text-sm dark:text-gray-400">CTO of Company Co.</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 rounded shadow-md dark:bg-gray-900">
                    <p>
                      Sit wisi sapientem ut, pri civibus temporibus voluptatibus et, ius cu hinc fabulas. Nam meliore minimum et,
                      regione convenire cum id. Ex pro eros mucius consectetuer, pro magna nulla nonumy ne, eam putent iudicabit
                      consulatu cu.
                    </p>
                    <div className="flex items-center mt-4 space-x-4">
                      <img
                        src="https://source.unsplash.com/50x50/?portrait?2"
                        alt=""
                        className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
                      />
                      <div>
                        <p className="text-lg font-semibold">Leroy Jenkins</p>
                        <p className="text-sm dark:text-gray-400">CTO of Company Co.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid content-center gap-4">
                  <div className="p-6 rounded shadow-md dark:bg-gray-900">
                    <p>
                      Putant omnium elaboraret per ut. Id dicta tritani nominavi quo, mea id justo errem elaboraret. Agam mollis
                      scripserit ea his, ut nec postea verear persecuti. Ea noster senserit eam, ferri omittantur ei nec. Id mel
                      solet libris efficiantur, commune explicari et eos. Case movet ad est, sed tota vocent appetere ea.
                    </p>
                    <div className="flex items-center mt-4 space-x-4">
                      <img
                        src="https://source.unsplash.com/50x50/?portrait?3"
                        alt=""
                        className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
                      />
                      <div>
                        <p className="text-lg font-semibold">Leroy Jenkins</p>
                        <p className="text-sm dark:text-gray-400">CTO of Company Co.</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 rounded shadow-md dark:bg-gray-900">
                    <p>
                      Te omnes virtute volutpat sed. Ei esse eros interesset vel, ei populo denique ocurreret vix, eu cum pertinax
                      mandamus vituperatoribus. Solum nihil luptatum per ex, ei amet viderer eos. Ea illum labitur mnesarchum pro.
                      Eius meis salutandi ei nam, alterum expetenda et nec. Expetenda intellegat at eum, per mazim sanctus
                      honestatis ad. Ei noluisse invenire vix. Te ancillae patrioque qui, probo bonorum vivendum ex vim.
                    </p>
                    <div className="flex items-center mt-4 space-x-4">
                      <img
                        src="https://source.unsplash.com/50x50/?portrait?4"
                        alt=""
                        className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
                      />
                      <div>
                        <p className="text-lg font-semibold">Leroy Jenkins</p>
                        <p className="text-sm dark:text-gray-400">CTO of Company Co.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
      {/* End testimonial */}

      {/* Start Drag and drop */}
      <article className="homeContainer m-auto text-center py-10">
        <div className="hero p-8">
          <div className="leftHero flex justify-center flex-col">
            <h1 className="text-5xl ">Free & easy to use online image editor</h1>
            <p className="infoText text-xl pt-4">
              Edit your photos, add photo effects, text and more with just a few clicks. No popups, no ads.<span>100% free </span>{" "}
            </p>
          </div>
        </div>

        <DragDropImage />

        <div className="examples bg-lightgray dark:bg-darkgray">div3</div>
      </article>
      {/* End Drag and drop */}

      {/* Start signup */}
      <article className="py-6 dark:bg-gray-800 dark:text-gray-50">
        <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 md:px-24 xl:px-48">
          <h1 className="text-5xl font-bold leading-none text-center">Sign up now</h1>
          <p className="text-xl font-medium text-center">
            At a assumenda quas cum earum ut itaque commodi saepe rem aspernatur quam natus quis nihil quod, hic explicabo
            doloribus magnam neque, exercitationem eius sunt!
          </p>
          <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-8">
            <button className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Get started</button>
            <button className="px-8 py-3 text-lg font-normal border rounded dark:bg-gray-100 dark:text-gray-900 dark:border-gray-300">
              Learn more
            </button>
          </div>
        </div>
      </article>
      {/* End signup */}
    </section>
  );
};

export default Home;
