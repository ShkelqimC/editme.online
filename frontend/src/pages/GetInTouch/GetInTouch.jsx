import React from "react";
import { Link } from "react-router-dom";

const GetInTouch = () => {
  return (
    <section>
      {/* start intro */}
      <article className="py-6">
        <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 md:px-24 xl:px-48">
          <h1 className="text-5xl font-bold leading-none text-center flex items-end">
            <img src="/img/logo-colorful.png" alt="edit me logo" width={50} />
            <span className="mx-4"> Editme.online</span>
          </h1>
          <p className="pt-2 pb-8 text-xl font-medium text-center">
            is a fantastic online image, photo editor that I highly recommend to anyone in need of quick and easy editing. The
            user-friendly interface and powerful editing tools make it incredibly easy to crop, resize, and enhance images to
            perfection. I have been using Editme for a while now and it has made my image editing process so much more efficient
            and enjoyable. The website is responsive and works seamlessly on any device. I am so grateful for this amazing tool
            and I recommend it to anyone looking for a fast, reliable, and high-quality image editing solution.
          </p>
        </div>
          <hr className="border-2 w-full" />
      </article>
      {/* endt intro*/}
      {/* Start About Editme */}
      <article>
        <div className="container flex flex-col-reverse mx-auto lg:flex-row items-center">
          <div className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5">
            <div className="flex space-x-2 sm:space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="flex-shrink-0 w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                ></path>
              </svg>
              <div className="space-y-2">
                <p className="text-lg font-medium leading-snug">Easy-to-Use Interface:</p>
                <p className="leading-snug">
                  Our user-friendly interface allows users to easily edit their photos without the need for any technical
                  knowledge or training.
                </p>
              </div>
            </div>
            <div className="flex space-x-2 sm:space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="flex-shrink-0 w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                ></path>
              </svg>
              <div className="space-y-2">
                <p className="text-lg font-medium leading-snug">Web-based Editing:</p>
                <p className="leading-snug">
                  Editme.online is a web-based image editor, which means users can access it from anywhere in the world with an
                  internet connection.
                </p>
              </div>
            </div>
            <div className="flex space-x-2 sm:space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="flex-shrink-0 w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                ></path>
              </svg>
              <div className="space-y-2">
                <p className="text-lg font-medium leading-snug">Fast and Responsive:</p>
                <p className="leading-snug">
                  Our image editor is optimized for speed and responsiveness, ensuring that users can edit their photos quickly
                  and without any lag or delays.
                </p>
              </div>
            </div>
            <div className="flex space-x-2 sm:space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="flex-shrink-0 w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                ></path>
              </svg>
              <div className="space-y-2">
                <p className="text-lg font-medium leading-snug">Supports Multiple File Formats:</p>
                <p className="leading-snug">
                  Our image editor supports a wide range of file formats including JPEG, PNG, GIF, and more, making it a versatile
                  tool for users.
                </p>
              </div>
            </div>
            <div className="flex space-x-2 sm:space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="flex-shrink-0 w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                ></path>
              </svg>
              <div className="space-y-2">
                <p className="text-lg font-medium leading-snug">Safe and Secure:</p>
                <p className="leading-snug">
                  We prioritize the safety and security of our users' images, and our image editor is designed to protect them
                  from unauthorized access or theft.
                </p>
              </div>
            </div>
            <div className="flex space-x-2 sm:space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="flex-shrink-0 w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                ></path>
              </svg>
              <div className="space-y-2">
                <p className="text-lg font-medium leading-snug">Regular Updates:</p>
                <p className="leading-snug">
                  We are committed to continually improving and updating our image editor to provide users with the latest
                  features and functionality.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 xl:w-3/5">
            <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
              <img
                src="/img/getintouch-image-1.jpg"
                alt=""
                className="rounded-lg shadow-lg sm:min-h-96"
              />
            </div>
          </div>
        </div>
        <hr className="border-2 w-full" />
      </article>
      {/* End About Editme */}
      {/*Start Contact */}
      <article className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32">
        <div className="flex flex-col justify-between">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Reach Us</h2>
            <div className="mt-10 text-justify">
              If you need to reach us for any reason, we're always here to help. You can use our contact form to send us a message
              and we'll get back to you as soon as possible. Additionally, you can follow us on social media to stay up to date
              with the latest news and updates from our team. We look forward to hearing from you!
            </div>
          </div>
          <img src="/img/getintouch-image-2.jpg" alt="reach us" className="p-6 w-4/6 mx-auto rounded-lg" />
        </div>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="text-sm">
              Full name
            </label>
            <input id="name" type="text" placeholder="" className="w-full p-3 rounded dark:bg-gray-800" />
          </div>
          <div>
            <label htmlFor="email" className="text-sm">
              Email
            </label>
            <input id="email" type="email" className="w-full p-3 rounded dark:bg-gray-800" />
          </div>
          <div>
            <label htmlFor="message" className="text-sm">
              Message
            </label>
            <textarea id="message" rows="3" className="w-full p-3 rounded dark:bg-gray-800"></textarea>
          </div>
          <button
            type="submit"
            className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded border-2 shadow-md hover:text-coral"
          >
            Send Message
          </button>
        </form>
      </article>
        <hr className="border-2 w-full" />
      {/*Start  Contact */}

      <article className="py-6 dark:bg-violet-400 dark:text-gray-900">
        <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 md:px-24 xl:px-48">
          <h1 className="text-5xl font-bold leading-none text-center">Something totally different</h1>
          <p className="pt-2 pb-8 text-xl font-medium text-center">
            Editme.online is the result of a school project that grew into something much bigger. We are passionate about what we
            do, and we believe that our platform can revolutionize the way people edit and enhance their images online. Try
            Editme.online today and experience the power of online image editing for yourself.
          </p>
        </div>
        <hr className="border-2 w-full" />
      </article>

      {/*Start  About Developers */}
      <section className="py-6">
	<div className="container p-4 mx-auto space-y-16 sm:p-10">
		<div className="space-y-4">
			<h3 className="text-2xl font-bold leading-none sm:text-5xl">Meet our talented and creative team who brings editme.online to life.</h3>
			<p className="max-w-2xl ">We are a team of passionate developers who strive to create innovative and user-friendly solutions. Our goal is to make your editing experience as seamless and enjoyable as possible.</p>
		</div>
		<div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
			<div className="flex space-x-6">
				<img alt="" className="flex-1 flex-shrink-0 object-cover h-56 mb-4 bg-center rounded-xl" src="https://source.unsplash.com/240x320/?portrait?0" />
				<div className="flex flex-col">
					<h4 className="text-xl font-semibold">Shekelqim Cakaj</h4>
					<p className="text-sm">Web developer</p>
					<div className="flex mt-2 space-x-2">				
						<Link to="https://github.com/ShkelqimC" title="GitHub">
							<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-4 h-4">
								<path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
							</svg>
						</Link>
					</div>
				</div>
			</div>
			<div className="flex space-x-6">
				<img alt="" className="flex-1 flex-shrink-0 object-cover h-56 mb-4 bg-center rounded-xl" src="https://source.unsplash.com/240x320/?portrait?1" />
				<div className="flex flex-col">
					<h4 className="text-xl font-semibold">Shenol Osman</h4>
					<p className="text-sm">Web developer</p>
					<div className="flex mt-2 space-x-2">					
						<Link to="https://github.com/shenolosman" title="GitHub">
							<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-4 h-4">
								<path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
							</svg>
						</Link>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
      {/*End  About Developers */}

    </section>
  );
};

export default GetInTouch;
