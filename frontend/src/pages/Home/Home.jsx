import React, { useState, useEffect } from "react";
import { DragDropImage } from "../../components/DragDropImage";
import { Link } from "react-router-dom";

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
      <article className=" h-screen flex align-center justify-center">
        <div className="container flex flex-col items-center px-5 py-16 mx-auto lg:px-20 lg:py-24 md:flex-row">
          <div className="flex flex-col items-center w-full pt-0 mb-16 text-left lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0 lg:text-center">
            <h2 className="mb-1 text-xs font-medium tracking-widest">Atomic Way To Edit Images</h2>
            <h1 className="mb-8 text-2xl font-bold tracking-tighter text-center  lg:text-left lg:text-5xl">
            Editme.online is a new way to edit your images
            </h1>
            <div className="font-montserrat font-extrabold leading-10 border-b-2 border-coral">
           Easy, Free, and Online
            </div>
          </div>
          <div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
            <DragDropImage />
          </div>
        </div>
      </article>
      {/* End Drag and drop */}

      {/* Start Hero*/}
      <article className="p-5 mx-auto sm:p-10 md:p-16">
        <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
          <img src="/img/home-image-1.jpg" alt="editme online" className="w-full h-60 sm:h-96" />
          <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md ">
            <div className="space-y-2">
              <Link to="/getintouch" className="inline-block text-2xl font-semibold sm:text-3xl hover:text-white">
            <span className="text-lightgray"> Are you tired of using clunky image editing </span> software that slows you down and limits your creativity?
              </Link>            
            </div>
            <div >
              <p> Look no further than Editme.online, the ultimate online photo editor that will revolutionize the way you edit images. With its sleek and modern design, Editme's hero section welcomes you to a world of endless possibilities, where you can edit your photos with ease and precision.</p>
            </div>
          </div>
        </div>
      </article>
      {/* End Hero */}

      {/* Start Hero2 */}
      <article>
        <div>
          <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32  ">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl ">
            Try Editme.online today and experience the magic of seamless image editing at your fingertips.
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl ">
            Whether you need to crop, resize, or add filters to your images, Editme's intuitive interface and advanced editing tools have got you covered.
            </p>
            <div className="flex justify-center">
              <Link to="/edit" className="px-8 py-3 m-2 text-lg border rounded hover:text-white">
                Start Using
              </Link>
            </div>
          </div>
        </div>
        <img
          src="/img/home-image-2.png"
          alt="editme online"
          className="w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40"
        />
      </article>
      {/* End Hero2 */}

      {/* Start prize */}
      <article className="py-6">
        <div className="container mx-auto flex flex-col items-center justify-center max-w-lg p-4 lg:max-w-full sm:p-10 lg:flex-row">
          <div className="flex flex-col items-center justify-center flex-1 p-4 pb-8 sm:p-8 lg:p-16 ">
            <span className="text-sm">Basic</span>
            <p className="text-5xl font-bold text-center">Free</p>
            <p className="font-semibold text-center">
              Start using Editme.online for free today and experience the magic of seamless image editing at your fingertips.
            </p>
            <Link to="/edit" className="px-8 py-3 mt-6 text-lg font-semibold rounded sm:mt-12 hover:text-white">No Need Sign up</Link>
          </div>
          <div className="flex flex-col items-center justify-center flex-1 p-4 pb-8 text-center rounded-md sm:p-8 lg:p-16 ">
            <span className="text-sm font-semibold">Advanced</span>
            <p className="text-5xl font-bold">Buy a Coffee</p>
            <p className="font-semibold">
              For more advanced features, you can buy a coffee for us. We will be very happy.
            </p>
            <Link to="/register" type="button" className="px-8 py-3 mt-6 text-lg font-semibold rounded sm:mt-12 border hover:text-white">
              Sign up
            </Link>
          </div>
        </div>
      </article>
      {/* End prize */}

      {/* Start hero3 */}
      <article className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
        <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
          <svg
            className="absolute left-0 hidden h-full text-darkgray dark:text-lightblack transform -translate-x-1/2 lg:block"
            viewBox="0 0 100 100"
            fill="currentColor"
            preserveAspectRatio="none slice"
          >
            <path d="M50 0H100L50 100H0L50 0Z" />
          </svg>
          <img
            className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
            src="/img/home-image-3.jpg"
            alt="editme.online new company"
          />
        </div>
        <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-coral uppercase rounded-full">
              Brand new company
            </p>
            <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none">
              Everything you need
              <br className="hidden md:block" />
              to edit is <span className="inline-block text-lightblue">free</span>
            </h2>
            <p className="pr-5 mb-5 text-base md:text-lg">
              Editme.online is a free online image editor. You can edit your images without any registration. You can crop, resize, add filters, and more.
            </p>           
          </div>
        </div>
      </article>
      {/* End hero3 */}

      {/* Start testimonial */}
      <article>
        <div className="container px-6 py-12 mx-auto">
          <div className="grid items-center gap-4 xl:grid-cols-5">
            <div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
              <h2 className="text-4xl font-bold">Some comments from our users</h2>
              <p>
                They are very happy to use Editme.online. You can also be happy like them.
              </p>
            </div>
            <div className="p-6 xl:col-span-3">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="grid content-center gap-4">
                  <div className="p-6 rounded shadow-md">
                    <p>
                    "I've been using Editme for a while now and it's made my photo editing process so much smoother! The filters are great and the user-friendly interface makes it easy to navigate."
                    </p>
                    <div className="flex items-center mt-4 space-x-4">
                      <img
                         src="/img/user-profile.png"
                        alt="user"
                        className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-lightgray"
                      />
                      <div>
                        <p className="text-lg font-semibold">Carl Kenth</p>
                        <p className="text-sm ">Developer</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 rounded shadow-md">
                    <p>
                    "I love how I can edit my photos on-the-go with Editme. The mobile interface is just as easy to use as the desktop version, and the editing tools are top-notch."
                    </p>
                    <div className="flex items-center mt-4 space-x-4">
                      <img
                       src="/img/user-profile.png"
                        alt="user"
                        className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-lightgray"
                      />
                      <div>
                        <p className="text-lg font-semibold">Su Jakupsson</p>
                        <p className="text-sm">Hr</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid content-center gap-4">
                  <div className="p-6 rounded shadow-md ">
                    <p>
                    "Editme has saved me so much time and hassle when it comes to editing my photos. The range of editing tools is impressive and the results are always high-quality."
                    </p>
                    <div className="flex items-center mt-4 space-x-4">
                      <img
                       src="/img/user-profile.png"
                        alt="user"
                        className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-lightgray"
                      />
                      <div>
                        <p className="text-lg font-semibold">Sheki C.</p>
                        <p className="text-sm ">Creator</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 rounded shadow-md ">
                    <p>
                    "As someone who isn't a professional photographer, I appreciate how Editme makes photo editing accessible and fun for everyone. I've been able to enhance my photos and create beautiful images that I'm proud to share on social media."
                    </p>
                    <div className="flex items-center mt-4 space-x-4">
                      <img
                        src="/img/user-profile.png"
                        alt="user"
                        className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-lightgray"
                      />
                      <div>
                        <p className="text-lg font-semibold">Ozturk M.</p>
                        <p className="text-sm ">Tester</p>
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

      {/* Start signup */}
      <article className="py-6">
        <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 md:px-24 xl:px-48">
          <h1 className="text-5xl font-bold leading-none text-center">Sign up now</h1>
          <p className="text-xl font-medium text-center">
           For more editme.online features and benefits sign up now. It's free! 
          </p>
          <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-8">
            <Link to="/edit" className="px-8 py-3 text-lg font-semibold rounded hover:text-white">Free Editor</Link>
            <Link to="register" className="px-8 py-3 text-lg font-normal border rounded hover:text-white">
              Register
            </Link>
          </div>
        </div>
      </article>
      {/* End signup */}
    </section>
  );
};

export default Home;
