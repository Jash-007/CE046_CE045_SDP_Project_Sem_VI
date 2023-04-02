import React,{ useState }  from 'react'
function Footer() {
    return (
        <footer class="bg-white">
        <div class="container mx-auto px-8">
          <div class="w-full flex flex-col md:flex-row py-6">
            <div class="flex-1 mb-6 text-black">
              <a class="text-pink-600 no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="#">
              
              <svg fill="none" viewBox="0 0 35 32" xmlns="http://www.w3.org/1000/svg">
  <path fill="#6366f1" d="M15.258 26.865a4.043 4.043 0 01-1.133 2.917A4.006 4.006 0 0111.253 31a3.992 3.992 0 01-2.872-1.218 4.028 4.028 0 01-1.133-2.917c.009-.698.2-1.382.557-1.981.356-.6.863-1.094 1.47-1.433-.024.109.09-.055 0 0l1.86-1.652a8.495 8.495 0 002.304-5.793c0-2.926-1.711-5.901-4.17-7.457.094.055-.036-.094 0 0A3.952 3.952 0 017.8 7.116a3.975 3.975 0 01-.557-1.98 4.042 4.042 0 011.133-2.918A4.006 4.006 0 0111.247 1a3.99 3.99 0 012.872 1.218 4.025 4.025 0 011.133 2.917 8.521 8.521 0 002.347 5.832l.817.8c.326.285.668.551 1.024.798.621.33 1.142.826 1.504 1.431a3.902 3.902 0 01-1.504 5.442c.033-.067-.063.036 0 0a8.968 8.968 0 00-3.024 3.183 9.016 9.016 0 00-1.158 4.244zM19.741 5.123c0 .796.235 1.575.676 2.237a4.01 4.01 0 001.798 1.482 3.99 3.99 0 004.366-.873 4.042 4.042 0 00.869-4.386 4.02 4.02 0 00-1.476-1.806 3.994 3.994 0 00-5.058.501 4.038 4.038 0 00-1.175 2.845zM23.748 22.84c-.792 0-1.567.236-2.226.678a4.021 4.021 0 00-1.476 1.806 4.042 4.042 0 00.869 4.387 3.99 3.99 0 004.366.873A4.01 4.01 0 0027.08 29.1a4.039 4.039 0 00-.5-5.082 4 4 0 00-2.832-1.18zM34 15.994c0-.796-.235-1.574-.675-2.236a4.01 4.01 0 00-1.798-1.483 3.99 3.99 0 00-4.367.873 4.042 4.042 0 00-.869 4.387 4.02 4.02 0 001.476 1.806 3.993 3.993 0 002.226.678 4.003 4.003 0 002.832-1.18A4.04 4.04 0 0034 15.993z"/>
  <path fill="#6366f1" d="M5.007 11.969c-.793 0-1.567.236-2.226.678a4.021 4.021 0 00-1.476 1.807 4.042 4.042 0 00.869 4.386 4.001 4.001 0 004.366.873 4.011 4.011 0 001.798-1.483 4.038 4.038 0 00-.5-5.08 4.004 4.004 0 00-2.831-1.181z"/>
</svg>
            
              </a>
            </div>
            <div class="flex-1">
              <p class="uppercase text-gray-500 md:mb-6">Links</p>
              <ul class="list-reset mb-6">
                <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">FAQ</a>
                </li>
                <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">Help</a>
                </li>
                <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">Support</a>
                </li>
              </ul>
            </div>
            <div class="flex-1">
              <p class="uppercase text-gray-500 md:mb-6">Legal</p>
              <ul class="list-reset mb-6">
                <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">Terms</a>
                </li>
                <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">Privacy</a>
                </li>
              </ul>
            </div>
            <div class="flex-1">
              <p class="uppercase text-gray-500 md:mb-6">Social</p>
              <ul class="list-reset mb-6">
                <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">Facebook</a>
                </li>
                <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">Linkedin</a>
                </li>
                <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">Twitter</a>
                </li>
              </ul>
            </div>
            <div class="flex-1">
              <p class="uppercase text-gray-500 md:mb-6">Company</p>
              <ul class="list-reset mb-6">
                <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">Official Blog</a>
                </li>
                <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">About Us</a>
                </li>
                <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer> 
    );
}
export default Footer