import React from 'react'
import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[600px] space-y-4">
      <div className="space-y-2 text-center">
        <h1 className="text-4xl font-extrabold tracking-tighter sm:text-6xl">404 Error</h1>
        <h2 className="text-2xl tracking-tight">Page Not Found</h2>
        <p className="mx-auto max-w-[600px] text-gray-500/60 md:text-xl/relaxed dark:text-gray-400/60">
          Sorry, we couldn't find the page you're looking for. If you entered a URL, please check that it is correct.
        </p>
      </div>
      <Link to="/" className="inline-flex h-10 items-center rounded-md bg-purple-500 text-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-purple-600">
        Go back
      </Link>
    </div>
  )
}
