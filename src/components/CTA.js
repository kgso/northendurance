import React from "react"

// const Cta = () => {
//   return (
//     <div className="my-10">
//       <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
//         <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
//           <span className="block text-red-500">Ready to get started?</span>
//           <span className="block text-gray sm:text-xl">
//             Click to schedule your free class or arrange a time to chat! We'd be
//             happy to talk with you about our membership options, learn about
//             you, and what brought you here today!
//           </span>
//         </h2>
//         <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
//           <div className="inline-flex rounded-md shadow">
//             <a
//               className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:text-gray-500"
//               href="mailto:info@northendurance.ca"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Get started
//             </a>
//           </div>
//           {/* <div className="ml-3 inline-flex rounded-md shadow">
//             <a
//               href="#"
//               className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:text-gray-500"
//             >
//               Learn more
//             </a>
//           </div> */}
//         </div>
//       </div>
//     </div>
//   )
// }

const Cta = () => {
  return (
    <div className="my-10">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <p className="tracking-tight sm:text-xl text-center">
          <span className="font-extrabold sm:text-xl">
            Ready to get started?
          </span>
          &nbsp;Click&nbsp;
          <a
            className="text-grey-700 hover:text-gray-300 cursor-pointer"
            href="mailto:info@northendurance.ca"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>{" "}
          to schedule your free class or arrange a time to chat! We'd be happy
          to talk with you about our membership options, learn about you, and
          what brought you here today!
        </p>
      </div>
    </div>
  )
}

export default Cta
