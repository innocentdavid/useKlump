import React, { useEffect, useState } from 'react';

export default function Nav() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
      const onScroll = () => setOffset(window.pageYOffset);
      // clean up code
      window.removeEventListener('scroll', onScroll);
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
  }, []);

  let element = document.querySelector('.has-hero-section');
  let menuItems = document.querySelector('.menuItems');
  if(element){
    if(offset >= 3){
      element?.classList.remove("bg-transparent");
      element?.classList.add("sticky", "pb-2");
      menuItems?.classList.add("stickyMenuItems");
    }else{
      element?.classList.remove("sticky", "pb-2");
      element?.classList.add("bg-transparent");
      menuItems?.classList.remove("stickyMenuItems");
    }
  }
  

  return (
    <div class="z-40 w-full flex items-center top-0 left-0 bg-transparent has-hero-section absolute">
      <div class="container">
        <div class="flex -mx-4 items-center justify-between relative top-2">
          <div class="px-4 max-w-full">
            <a href="/" aria-current="page" class="navbar-logo w-full block py-5 nuxt-link-exact-active active-link">
              <svg width="123" height="30" viewBox="0 0 123 30" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Klump logo">
                <path d="M48.5669 1.90563H43.3999L34.6488 11.9992V1.90563H30.1924V23.2188H34.6488V16.9455L37.6953 13.4924L43.7232 23.2188H48.8251L40.8931 10.6209L48.5669 1.90563Z" fill="white"></path> <path d="M56.4777 20.2794C55.8754 20.2794 55.4448 20.129 55.1862 19.8274C54.928 19.5257 54.7987 18.999 54.7987 18.2448V-0.000476837H50.3745V18.7293C50.3745 20.4083 50.7351 21.6304 51.4567 22.3946C52.1775 23.1591 53.3243 23.541 54.8957 23.541C55.4336 23.541 55.9774 23.4815 56.5264 23.3634C57.0757 23.2447 57.5327 23.0785 57.8988 22.8627L58.2864 19.9563C57.9199 20.0642 57.6189 20.1451 57.3821 20.1985C57.1452 20.2527 56.8439 20.2794 56.4777 20.2794Z" fill="white"></path> <path d="M70.3955 15.7584C70.3955 16.5121 70.2987 17.1631 70.105 17.7121C69.9112 18.2609 69.6471 18.7079 69.3138 19.0523C68.9799 19.3967 68.5977 19.6494 68.1674 19.8109C67.7365 19.9728 67.2956 20.0534 66.8433 20.0534C65.8745 20.0534 65.1317 19.8109 64.6149 19.3267C64.0985 18.8422 63.8402 17.976 63.8402 16.7272V7.07156H59.416V17.7928C59.416 19.1491 59.669 20.2527 60.1749 21.1028C60.6806 21.9537 61.3641 22.5722 62.2254 22.9594C63.0863 23.3472 64.0551 23.541 65.1317 23.541C66.4447 23.541 67.5697 23.2875 68.5065 22.7821C69.4431 22.2765 70.1803 21.4853 70.7185 20.4083L70.8797 23.218H74.8196V7.07156H70.3955V15.7584Z" fill="white"></path> <path d="M100.597 7.39535C99.7257 6.96504 98.7616 6.74958 97.7072 6.74958C96.9753 6.74958 96.2542 6.86802 95.5437 7.10457C94.8331 7.34201 94.187 7.69698 93.6061 8.17038C93.0248 8.64408 92.5614 9.2359 92.2175 9.94645C91.7435 8.89206 91.0388 8.09505 90.102 7.55686C89.1657 7.01897 88.1161 6.74958 86.9535 6.74958C85.8127 6.74958 84.7741 7.01897 83.8373 7.55686C82.901 8.09505 82.1632 8.90262 81.6253 9.97869L81.4641 7.07232H77.4922V23.2188H81.9164V14.6611C81.9164 13.6068 82.0937 12.7558 82.449 12.11C82.8043 11.4643 83.2563 10.9909 83.8053 10.6892C84.354 10.3879 84.9083 10.2369 85.4682 10.2369C86.2863 10.2369 86.9588 10.4849 87.4867 10.9797C88.0138 11.4754 88.2776 12.3149 88.2776 13.4986V23.2188H92.7018V14.5322C92.7018 13.5851 92.858 12.7939 93.1699 12.1584C93.4818 11.5238 93.9127 11.0445 94.462 10.7215C95.011 10.3985 95.6081 10.2369 96.2542 10.2369C97.0717 10.2369 97.7395 10.4849 98.2563 10.9797C98.7728 11.4754 99.031 12.3149 99.031 13.4986V23.2188H103.423L103.455 12.6268C103.476 11.2922 103.224 10.1942 102.696 9.33294C102.169 8.47202 101.469 7.82625 100.597 7.39535Z" fill="white"></path> <path d="M116.744 18.8752C116.066 19.7258 115.134 20.1506 113.951 20.1506C113.197 20.1506 112.535 19.9518 111.964 19.5532C111.394 19.1551 110.958 18.5794 110.657 17.8258C110.355 17.0721 110.205 16.1787 110.205 15.1454C110.205 14.0907 110.366 13.1917 110.689 12.4489C111.012 11.7061 111.459 11.136 112.029 10.7373C112.6 10.3392 113.261 10.1399 114.015 10.1399C115.199 10.1399 116.119 10.5652 116.776 11.4153C117.433 12.2663 117.761 13.5094 117.761 15.1454C117.761 16.7816 117.422 18.0248 116.744 18.8752ZM121.297 10.6083C120.705 9.37046 119.892 8.41779 118.859 7.75034C117.826 7.08318 116.652 6.74929 115.339 6.74929C114.327 6.74929 113.412 6.95888 112.594 7.37893C111.776 7.79869 111.103 8.3747 110.576 9.10665C110.322 9.45928 110.108 9.83829 109.932 10.2408L109.753 7.07203H105.781V30H110.205V20.4065C110.569 21.1478 111.062 21.7991 111.706 22.3467C112.643 23.1431 113.821 23.5415 115.242 23.5415C116.577 23.5415 117.766 23.2079 118.81 22.5405C119.854 21.8733 120.678 20.9095 121.281 19.6499C121.884 18.3906 122.185 16.8784 122.185 15.1131C122.185 13.3479 121.889 11.8462 121.297 10.6083Z" fill="white"></path> <path d="M17.7895 16.4014L11.8369 15.0014C11.8618 14.8838 11.8909 14.7683 11.9237 14.6511C12.3763 13.0333 13.3738 11.7142 14.668 10.8398L17.7895 16.4014Z" fill="#5278C4"></path> <path d="M25.1865 18.4369C24.1796 22.0553 20.4011 24.1793 16.7285 23.1915C13.4625 22.3115 11.4059 19.2305 11.689 15.9547L18.6371 17.5895C18.6737 17.5971 18.7104 17.6012 18.747 17.6012C18.8953 17.6012 19.0395 17.5318 19.1319 17.4107C19.2456 17.2562 19.2591 17.0502 19.1665 16.8848L15.5018 10.3563C16.9577 9.6419 18.6758 9.43584 20.3739 9.89605C24.0717 10.8974 26.2227 14.7124 25.1865 18.4369Z" fill="#5278C4"></path> <path d="M10.3889 15.6505C9.47437 18.3098 6.65096 19.837 3.92398 19.0725C1.12987 18.2907 -0.547707 15.3964 0.163131 12.5826C0.885108 9.71525 3.82226 7.99721 6.7049 8.75818C7.31548 8.91969 7.87184 9.17208 8.36312 9.49745L4.79076 13.6071C4.67908 13.7343 4.6442 13.9114 4.69432 14.0714C4.7465 14.2309 4.87928 14.3543 5.04314 14.3927L10.3889 15.6505Z" fill="#74D2E7"></path> <path d="M10.6244 14.7168L6.04102 13.6384L9.11272 10.1047C10.3122 11.2658 10.9055 12.9586 10.6244 14.7168Z" fill="#74D2E7"></path> <path d="M14.0053 9.66113C13.1558 10.0463 12.1855 10.1656 11.2496 9.9229C10.7354 9.79011 10.2653 9.55502 9.85547 9.24694L12.2357 6.50853L14.0053 9.66113Z" fill="#68C985"></path> <path d="M16.38 6.88996C16.149 7.82211 15.5809 8.61356 14.8355 9.16992L12.7402 5.43986C12.6634 5.30502 12.5265 5.21267 12.3709 5.19714C12.2129 5.18189 12.0605 5.24346 11.9585 5.36101L9.15849 8.58278C8.29406 7.55624 7.91445 6.12724 8.28409 4.76771C8.885 2.54931 11.2479 1.21468 13.4528 1.84638C15.5924 2.46078 16.9156 4.74279 16.38 6.88996Z" fill="#68C985"></path></svg>
            </a>
          </div>

          <div class="flex px-4 justify-between items-center w-full">
            <div>
              <button id="navbarToggler" aria-label="Klump navbar toggle"
                class=" block absolute right-4 top-1/2 -translate-y-1/2 lg:hidden focus:ring px-3 py-[6px] rounded-lg focus:outline-none outline-none">
                <span class="relative w-[30px] h-[2px] my-[6px] block bg-white"></span>
                <span class="relative w-[30px] h-[2px] my-[6px] block bg-white"></span>
                <span class="relative w-[30px] h-[2px] my-[6px] block bg-white"></span>
              </button>

              <nav class="absolute py-5 lg:py-0 lg:px-4 xl:px-6 bg-white lg:bg-transparent shadow-lg rounded-lg max-w-[250px] w-full lg:max-w-full lg:w-full right-4 top-full lg:block lg:static lg:shadow-none hidden">
                <ul class="block lg:flex">
                  <li class="relative group submenu-item">
                    <div role="button" class="hasSubmenuItems menuItems">Industry</div>
                    <div class="submenuWrapper hidden">
                      <a href="/merchants" class="subMenuItems">
                        <div class="flex flex-row items-center">
                          <div class="w-1/4 h-[59px] bg-[#DEECFF] p-[7px] mr-2 flex justify-center items-center">
                            <img src="/images/icons/merchant.svg" alt="Merchant" />
                          </div>
                          <div class="w-3/4">
                            <div class="font-semibold">Merchant</div>
                            <span class="text-xs">Attach Klump to checkout</span>
                          </div>
                        </div>
                      </a>

                      <a href="/schools" class="subMenuItems">
                        <div class="flex flex-row items-center">
                          <div class="w-1/4 h-[59px] bg-[#DEECFF] p-[7px] mr-2 flex justify-center items-center">
                            <img src="/images/icons/stationery.svg" alt="School" />
                          </div>
                          <div class="w-3/4">
                            <div class="font-semibold">School</div>
                            <span class="text-xs">Get parents to pay by instalment</span>
                          </div>
                        </div>
                      </a>
                    </div>
                  </li>

                  <li class="relative group">
                    <a href="/how-it-works" class="menuItems">How it works</a>
                    {/* <!----> */}
                  </li>

                  <li class="relative group">
                    <a href="/about" class="menuItems">About us</a>
                    {/* <!----> */}
                  </li>

                  <li class="relative group">
                    <a href="/developers" class="menuItems">Developers</a>
                    {/* <!----> */}
                  </li>
                </ul>
              </nav>
            </div>

            <div class="sm:flex justify-end hidden pr-16 lg:pr-0">
              <a href="/login" class="font-medium py-[15px] px-6 text-white hover:opacity-70">Login</a>
              <a href="/signup" class="font-bold rounded-[3px] py-[15px] px-5 duration-300 ease-in-out text-primary bg-white hover:text-white hover:border hover:border-white hover:bg-transparent border border-transparent">Create an account</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}




/* This example requires Tailwind CSS v2.0+ */
// import { Fragment } from 'react'
// import { Popover, Transition } from '@headlessui/react'
// import {
//   BookmarkAltIcon,
//   CalendarIcon,
//   ChartBarIcon,
//   CursorClickIcon,
//   MenuIcon,
//   PhoneIcon,
//   PlayIcon,
//   RefreshIcon,
//   ShieldCheckIcon,
//   SupportIcon,
//   ViewGridIcon,
//   XIcon,
// } from '@heroicons/react/outline'
// import { ChevronDownIcon } from '@heroicons/react/solid'

// const industries = [
//   {
//     name: 'Merchant',
//     description: 'Attach Klump to checkout',
//     href: '#/merchants',
//     icon: ChartBarIcon,
//   },
//   {
//     name: 'School',
//     description: 'Get parents to pay by instalment',
//     href: '#/schools',
//     icon: CursorClickIcon,
//   },

//   // { name: 'Security', description: "Your customers' data will be safe and secure.", href: '#', icon: ShieldCheckIcon },
//   // {
//   //   name: 'Integrations',
//   //   description: "Connect with third-party tools that you're already using.",
//   //   href: '#',
//   //   icon: ViewGridIcon,
//   // },
//   // {
//   //   name: 'Automations',
//   //   description: 'Build strategic funnels that will drive your customers to convert',
//   //   href: '#',
//   //   icon: RefreshIcon,
//   // },
// ]
// const callsToAction = [
//   { name: 'Watch Demo', href: '#', icon: PlayIcon },
//   { name: 'Contact Sales', href: '#', icon: PhoneIcon },
// ]
// const resources = [
//   {
//     name: 'Help Center',
//     description: 'Get all of your questions answered in our forums or contact support.',
//     href: '#',
//     icon: SupportIcon,
//   },
//   {
//     name: 'Guides',
//     description: 'Learn how to maximize our platform to get the most out of it.',
//     href: '#',
//     icon: BookmarkAltIcon,
//   },
//   {
//     name: 'Events',
//     description: 'See what meet-ups and other events we might be planning near you.',
//     href: '#',
//     icon: CalendarIcon,
//   },
//   { name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#', icon: ShieldCheckIcon },
// ]
// const recentPosts = [
//   { id: 1, name: 'Boost your conversion rate', href: '#' },
//   { id: 2, name: 'How to use search engine optimization to drive traffic to your site', href: '#' },
//   { id: 3, name: 'Improve your customer experience', href: '#' },
// ]

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

// export default function Example() {
//   return (
//     <Popover className="relative bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6">
//         <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
//           <div className="flex justify-start lg:w-0 lg:flex-1">
//             <a href="#">
//               <span className="sr-only">Workflow</span>
//               <img
//                 className="h-8 w-auto sm:h-10"
//                 src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
//                 alt=""
//               />
//             </a>
//           </div>
//           <div className="-mr-2 -my-2 md:hidden">
//             <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
//               <span className="sr-only">Open menu</span>
//               <MenuIcon className="h-6 w-6" aria-hidden="true" />
//             </Popover.Button>
//           </div>
//           <Popover.Group as="nav" className="hidden md:flex space-x-10">
//             <Popover className="relative">
//               {({ open }) => (
//                 <>
//                   <Popover.Button
//                     className={classNames(
//                       open ? 'text-gray-900' : 'text-gray-500',
//                       'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
//                     )}
//                   >
//                     <span>Industry</span>
//                     <ChevronDownIcon
//                       className={classNames(
//                         open ? 'text-gray-600' : 'text-gray-400',
//                         'ml-2 h-5 w-5 group-hover:text-gray-500'
//                       )}
//                       aria-hidden="true"
//                     />
//                   </Popover.Button>

//                   <Transition
//                     as={Fragment}
//                     enter="transition ease-out duration-200"
//                     enterFrom="opacity-0 translate-y-1"
//                     enterTo="opacity-100 translate-y-0"
//                     leave="transition ease-in duration-150"
//                     leaveFrom="opacity-100 translate-y-0"
//                     leaveTo="opacity-0 translate-y-1"
//                   >
//                     <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
//                       <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
//                         <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
//                           {industries.map((item) => (
//                             <a
//                               key={item.name}
//                               href={item.href}
//                               className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
//                             >
//                               <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
//                               <div className="ml-4">
//                                 <p className="text-base font-medium text-gray-900">{item.name}</p>
//                                 <p className="mt-1 text-sm text-gray-500">{item.description}</p>
//                               </div>
//                             </a>
//                           ))}
//                         </div>
//                         <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
//                           {callsToAction.map((item) => (
//                             <div key={item.name} className="flow-root">
//                               <a
//                                 href={item.href}
//                                 className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
//                               >
//                                 <item.icon className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
//                                 <span className="ml-3">{item.name}</span>
//                               </a>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     </Popover.Panel>
//                   </Transition>
//                 </>
//               )}
//             </Popover>

//             <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
//               Pricing
//             </a>
//             <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
//               Docs
//             </a>

//             <Popover className="relative">
//               {({ open }) => (
//                 <>
//                   <Popover.Button
//                     className={classNames(
//                       open ? 'text-gray-900' : 'text-gray-500',
//                       'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
//                     )}
//                   >
//                     <span>More</span>
//                     <ChevronDownIcon
//                       className={classNames(
//                         open ? 'text-gray-600' : 'text-gray-400',
//                         'ml-2 h-5 w-5 group-hover:text-gray-500'
//                       )}
//                       aria-hidden="true"
//                     />
//                   </Popover.Button>

//                   <Transition
//                     as={Fragment}
//                     enter="transition ease-out duration-200"
//                     enterFrom="opacity-0 translate-y-1"
//                     enterTo="opacity-100 translate-y-0"
//                     leave="transition ease-in duration-150"
//                     leaveFrom="opacity-100 translate-y-0"
//                     leaveTo="opacity-0 translate-y-1"
//                   >
//                     <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
//                       <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
//                         <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
//                           {resources.map((item) => (
//                             <a
//                               key={item.name}
//                               href={item.href}
//                               className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
//                             >
//                               <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
//                               <div className="ml-4">
//                                 <p className="text-base font-medium text-gray-900">{item.name}</p>
//                                 <p className="mt-1 text-sm text-gray-500">{item.description}</p>
//                               </div>
//                             </a>
//                           ))}
//                         </div>
//                         <div className="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
//                           <div>
//                             <h3 className="text-sm tracking-wide font-medium text-gray-500 uppercase">Recent Posts</h3>
//                             <ul role="list" className="mt-4 space-y-4">
//                               {recentPosts.map((post) => (
//                                 <li key={post.id} className="text-base truncate">
//                                   <a href={post.href} className="font-medium text-gray-900 hover:text-gray-700">
//                                     {post.name}
//                                   </a>
//                                 </li>
//                               ))}
//                             </ul>
//                           </div>
//                           <div className="mt-5 text-sm">
//                             <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
//                               {' '}
//                               View all posts <span aria-hidden="true">&rarr;</span>
//                             </a>
//                           </div>
//                         </div>
//                       </div>
//                     </Popover.Panel>
//                   </Transition>
//                 </>
//               )}
//             </Popover>
//           </Popover.Group>
//           <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
//             <a href="#" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
//               Sign in
//             </a>
//             <a
//               href="#"
//               className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
//             >
//               Sign up
//             </a>
//           </div>
//         </div>
//       </div>

//       <Transition
//         as={Fragment}
//         enter="duration-200 ease-out"
//         enterFrom="opacity-0 scale-95"
//         enterTo="opacity-100 scale-100"
//         leave="duration-100 ease-in"
//         leaveFrom="opacity-100 scale-100"
//         leaveTo="opacity-0 scale-95"
//       >
//         <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
//           <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
//             <div className="pt-5 pb-6 px-5">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <img
//                     className="h-8 w-auto"
//                     src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
//                     alt="Workflow"
//                   />
//                 </div>
//                 <div className="-mr-2">
//                   <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
//                     <span className="sr-only">Close menu</span>
//                     <XIcon className="h-6 w-6" aria-hidden="true" />
//                   </Popover.Button>
//                 </div>
//               </div>
//               <div className="mt-6">
//                 <nav className="grid gap-y-8">
//                   {industries.map((item) => (
//                     <a
//                       key={item.name}
//                       href={item.href}
//                       className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
//                     >
//                       <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
//                       <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
//                     </a>
//                   ))}
//                 </nav>
//               </div>
//             </div>
//             <div className="py-6 px-5 space-y-6">
//               <div className="grid grid-cols-2 gap-y-4 gap-x-8">
//                 <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
//                   Pricing
//                 </a>

//                 <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
//                   Docs
//                 </a>
//                 {resources.map((item) => (
//                   <a
//                     key={item.name}
//                     href={item.href}
//                     className="text-base font-medium text-gray-900 hover:text-gray-700"
//                   >
//                     {item.name}
//                   </a>
//                 ))}
//               </div>
//               <div>
//                 <a
//                   href="#"
//                   className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
//                 >
//                   Sign up
//                 </a>
//                 <p className="mt-6 text-center text-base font-medium text-gray-500">
//                   Existing customer?{' '}
//                   <a href="#" className="text-indigo-600 hover:text-indigo-500">
//                     Sign in
//                   </a>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </Popover.Panel>
//       </Transition>
//     </Popover>
//   )
// }
