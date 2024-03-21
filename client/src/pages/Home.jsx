import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../components/layout/Input'
import Button from '../components/layout/Button'

export default function Home() {
  return (
    <div>
      <div className="flex flex-col min-h-[100dvh]">
        <main className="flex-1 z-[10]">
          <section className="w-full py-6">
            <div className="container px-4 md:px-6">
              <div className='flex items-center gap-10 p-5'>
                <div className='tags'>
                  <h1 className="text-4xl font-bold tracking-wide sm:text-5xl xl:text-5xl/none">Welcome to</h1>
                  <h3 className="text-4xl font-bold tracking-normal sm:text-5xl xl:text-7xl/none">GEO-GUIDE</h3>
                  <p className="max-w-[500px] font-medium my-5 text-gray-500 md:text-lg/snug lg:text-base/snug xl:text-lg/snug dark:text-gray-400">
                    Your one stop destination for all your travel needs. We provide you with the best travel guides
                  </p>

                  <Button className='ml-4'>
                    <Link to='/signup'>Get Started</Link>
                  </Button>
                </div>

                <div>
                  <img
                    alt="Hero"
                    className="mx-auto overflow-hidden "
                    src="/hero-1.png"
                    width="500"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* features sectoins start*/}
          <section className="w-full px-10 border-2 py-10">
            <div className='tag text-3xl text-center font-bold uppercase leading-4 tracking-wide'>
              <h1>Features</h1>
            </div>

            <div className='flex py-10 gap-10 text-center'>
              <div className="flex flex-col items-center justify-center bg-white border rounded-xl shadow-xl p-6 hover:bg-[#bc76fd] hover:text-white transition ease-in">
                <div className="text-4xl mb-4">😄</div>
                <h2 className="text-xl font-semibold mb-2">Kuch bhi</h2>
                <p className="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, dolorum?</p>
              </div>

              <div className="flex flex-col items-center justify-center bg-white rounded-xl shadow-xl p-6 hover:bg-[#bc76fd] hover:text-white transition ease-in">
                <div className="text-4xl mb-4">😄</div>
                <h2 className="text-xl font-semibold mb-2">Kuch bhi</h2>
                <p className="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, dolorum?</p>
              </div>

              <div className="flex flex-col items-center justify-center bg-white rounded-xl shadow-xl p-6 hover:bg-[#bc76fd] hover:text-white transition ease-in">
                <div className="text-4xl mb-4">😄</div>
                <h2 className="text-xl font-semibold mb-2">Kuch bhi</h2>
                <p className="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, dolorum?</p>
              </div>
            </div>

          </section>

          {/* about section start  */}
          <section className="w-full py-12 md:py-24 border-2 mt-10">
            <div className="container flex flex-col items-center px-4 text-center gap-3  md:flex-row">
              <div className=''>
                <img
                  alt="Image"
                  className="overflow-hidden rounded-xl object-cover object-center"
                  height="400"
                  src="/img-2.webp"
                  width="600"
                />
              </div>

              <div className="grid gap-4 max-w-prose">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Mission</h2>
                </div>
                <p className="text-gray-500 md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed dark:text-gray-400">
                  We're on a journey to empower creativity and innovation by providing the tools and resources for the next
                  generation of builders. Our mission is to make the web more accessible, more performant, and more delightful
                  for everyone.
                </p>
              </div>
            </div>
          </section>

          {/* how it work */}
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container space-y-12 px-4 md:px-6">
              <div className="space-y-2 text-center">
                <div className="space-y-2 inline-block">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">How It Works</h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    A brief overview of the process. Four blocks, each explaining a different step or feature.
                  </p>
                </div>
              </div>

              <div className="mx-auto grid max-w-sm items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-4">
                <div className="flex flex-col items-center justify-center space-y-2">
                  <div className="rounded-full p-3 bg-gray-100 dark:bg-gray-800">
                    <h1>icon</h1>
                  </div>
                  <div className="space-y-2 text-center">
                    <h3 className="text-lg font-bold">Connect your repository</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Get started in seconds. Connect your Git repository and start building.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center space-y-2">
                  <div className="rounded-full p-3 bg-gray-100 dark:bg-gray-800">
                    <h1>icon</h1>
                  </div>
                  <div className="space-y-2 text-center">
                    <h3 className="text-lg font-bold">Automate your workflow</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Let the robots do the work. Automate your build, test, and deployment process.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center space-y-2">
                  <div className="rounded-full p-3 bg-gray-100 dark:bg-gray-800">
                    <h1>icon</h1>
                  </div>
                  <div className="space-y-2 text-center">
                    <h3 className="text-lg font-bold">Deploy with confidence</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Ship faster with built-in CI/CD. Every push is automatically built, tested, and deployed.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center space-y-2">
                  <div className="rounded-full p-3 bg-gray-100 dark:bg-gray-800">
                    <h1>icon</h1>
                  </div>
                  <div className="space-y-2 text-center">
                    <h3 className="text-lg font-bold">Scale with ease</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Deliver your app to the world. Our global edge network ensures fast and secure delivery.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </section>


          {/* contact us section start here */}

          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-lg">Contact Us</div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">We'd love to hear from you.</h2>
                    <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                      Let us know how we can help. Fill out the form below and we'll get back to you as soon as possible.
                    </p>
                  </div>
                </div>

                <div>
                  <img
                    alt="Image"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                    height="310"
                    src="/placeholder.svg"
                    width="550"
                  />
                </div>
              </div>
            </div>
          </section>

        </main>

      </div>
    </div>
  )
}
