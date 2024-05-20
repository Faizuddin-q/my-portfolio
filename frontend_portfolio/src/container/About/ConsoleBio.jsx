import React from 'react'
import { motion } from "framer-motion";

const ConsoleBio = () => {
  return (
     <motion.div
     whileInView={{ y: [100, 0], opacity: [0, 1] }}
     transition={{ duration: 0.6 }}

     className=" mt-4 order-1 lg:order-2 from-[#0f0c29] via-[#302b63] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#24243e]   w-[85%]">
          <div className="flex flex-row ">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
            <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
          </div>
          <div className="px-4 lg:px-8 py-5">
            <div className="flex flex-row space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-400"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-300"></div>
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
            </div>
          </div>
          <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
            <code className="font-mono text-xs md:text-sm lg:text-base">
              <div className="blink">
                <span className="mr-2 text-pink-500">const</span>
                <span className="mr-2 text-white">coder</span>
                <span className="mr-2 text-pink-500">=</span>
                <span className="text-gray-400">{'{'}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
                <span className="text-gray-400">{`'`}</span>
                <span className="text-cyan-400">Faiz Uddin</span>
                <span className="text-gray-400">{`',`}</span>
              </div>
              <div className="ml-4 lg:ml-8 mr-2">
                <span className=" text-white">skills:</span>
                <span className="text-gray-400">{`['`}</span>
                <span className="text-amber-300">React JS</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Redux</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Javascript</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">HTML</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">CSS</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Tailwind</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Framer Motion</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">BootStrap</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">C/C++</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Sanity.io</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">MySQL</span>
                <span className="text-gray-400">{"'],"}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">hardWorker:</span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">quickLearner:</span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">problemSolver:</span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-green-400">openToIntern:</span>
                <span className="text-orange-400">function</span>
                <span className="text-gray-400">{'() {'}</span>
              </div>
              <div>
                <span className="ml-8 lg:ml-16 mr-2 text-orange-400">return</span>
                <span className="text-gray-400">{`(`}</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                <span className="mr-2 text-white">hardWorker</span>
                <span className="text-amber-300">&amp;&amp;</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                <span className="mr-2 text-white">problemSolver</span>
                <span className="text-amber-300">&amp;&amp;</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                <span className="mr-2 text-white">skills.length</span>
                <span className="mr-2 text-amber-300">&gt;=</span>
                <span className="text-orange-400">10</span>
              </div>
              <div><span className="ml-8 lg:ml-16 mr-2 text-gray-400">{`);`}</span></div>
              <div><span className="ml-4 lg:ml-8 text-gray-400">{`};`}</span></div>
              <div><span className="text-gray-400">{`};`}</span></div>
            </code>
          </div>
        </motion.div> 
  )
}

export default ConsoleBio