import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
<main class="grid min-h-full place-items-center bg-white dark:bg-gradient-to-r dark:from-zinc-800 dark:to-stone-900 px-6 py-24 sm:py-32 lg:px-8">
  <div class="text-center">
    <p class="text-8xl font-semibold text-yellow-400">404</p>
    <h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">Page not found</h1>
    <p class="mt-6 text-base leading-7 text-gray-600 dark:text-slate-300">Sorry, we couldn’t find the page you’re looking for.</p>
    <div class="mt-10 flex items-center justify-center gap-x-6">
      <Link to="/" class="rounded-md bg-customYellow px-3.5 py-2.5 text-sm font-semibold text-white dark:text-black shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ">Go back home</Link>
      
    </div>
  </div>
</main>
     );
}
 
export default NotFound;