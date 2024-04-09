import React from "react";

export const Notification = () => {

    const customDateFormat = (dateString) => {
        const date = new Date(dateString);
        const now = new Date();
    
        const diffInMilliseconds = now - date;
        const diffInHours = Math.floor(diffInMilliseconds / (1000 * 60 * 60));
        const diffInMinutes = Math.floor(diffInMilliseconds / (1000 * 60));
    
        let formattedDate;
        if (diffInHours < 24) {
          if (diffInHours < 1) {
            formattedDate = `${diffInMinutes} mins`;
          } else {
            formattedDate = `${diffInHours} hr`;
          }
        } else {
          const options = { month: "short", day: "numeric" };
          const formatted = date.toLocaleDateString("en-US", options);
          formattedDate = formatted;
        }
    
        return formattedDate;
      };
      
  return (
    <div class="mx-auto h-full overflow-y-auto hide-scroll">
      <div class="fixed h-[64px] flex justify-between items-center px-4 top-[64px]  border-b w-full md:sticky z-50 bg-slate-100 md:top-0 left-0 border-slate-200">
        <p class="text-xl font-bold text-gray-700">Notifications</p>
        <button class="text-sm font-medium text-blue-700 focus:outline-none focus:ring-1">
          Notification Settings
        </button>
      </div>
      <div className="px-6">
        <div
          class="mb-3 space-y-4 py-2 focus:outline-none focus:ring-1"
          tabindex="0"
        >
          <div class="relative flex items-center">
            <img
              class="h-10 w-10 rounded-full object-cover"
              src="/images/ddHJYlQqOzyOKm4CSCY8o.png"
              alt="Simon Lewis"
            />
            <div class="ml-4 flex flex-col sm:w-96">
              <p class="mb-1 font-medium text-gray-700">Johanson Levinsiki</p>
              <div class="text-sm text-gray-400">
                <span class="shrink-0 mr-1 text-rose-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="inline h-3 w-3"
                  >
                    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                  </svg>
                </span>
                <span class="mr-1 font-medium text-rose-500">
                  liked your comment:
                </span>
                <span class="">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </span>
              </div>
            </div>
            <span class="absolute top-0 right-2 text-sm text-gray-400">
              1min ago
            </span>
          </div>
        </div>
        <div
          class="mb-3 space-y-4 py-2 focus:outline-none focus:ring-1"
          tabindex="0"
        >
          <div class="relative flex items-center">
            <img
              class="h-10 w-10 rounded-full object-cover"
              src="/images/ddHJYlQqOzyOKm4CSCY8o.png"
              alt="Simon Lewis"
            />
            <div class="ml-4 flex flex-col sm:w-96">
              <p class="mb-1 font-medium text-gray-700">Johanson Levinsiki</p>
              <div class="mb-2 text-sm text-gray-400">
                <span class="shrink-0 mr-1 text-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="inline h-3 w-3"
                  >
                    <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z" />
                    <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 001.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0015.75 7.5z" />
                  </svg>
                </span>
                <span class="mr-1 font-medium text-blue-500">
                  replied to your comment:
                </span>
                <span class="">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </span>
              </div>
              <div class="rounded-xl bg-blue-50 p-4 text-gray-500">
                <p class="text-sm">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Rerum, soluta modi? Amet, sequi distinctio.
                </p>
              </div>
            </div>
            <span class="absolute top-0 right-2 text-sm text-gray-400">
              1min ago
            </span>
          </div>
        </div>
        <div
          class="mb-3 space-y-4 py-2 focus:outline-none focus:ring-1"
          tabindex="0"
        >
          <div class="relative flex items-center">
            <img
              class="h-10 w-10 rounded-full object-cover"
              src="/images/ddHJYlQqOzyOKm4CSCY8o.png"
              alt="Simon Lewis"
            />
            <div class="ml-4 flex flex-col sm:w-96">
              <p class="mb-1 font-medium text-gray-700">Johanson Levinsiki</p>
              <div class="mb-2 text-sm text-gray-400">
                <span class="shrink-0 mr-1 text-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="inline h-3 w-3"
                  >
                    <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z" />
                    <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 001.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0015.75 7.5z" />
                  </svg>
                </span>
                <span class="mr-1 font-medium text-blue-500">
                  replied to your comment:
                </span>
                <span class="">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </span>
              </div>
              <div class="rounded-xl bg-blue-50 p-4 text-gray-500">
                <p class="text-sm">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Rerum, soluta modi? Amet, sequi distinctio.
                </p>
              </div>
            </div>
            <span class="absolute top-0 right-2 text-sm text-gray-400">
              1min ago
            </span>
          </div>
        </div>
        <div
          class="mb-3 space-y-4 py-2 focus:outline-none focus:ring-1"
          tabindex="0"
        >
          <div class="relative flex items-center">
            <img
              class="h-10 w-10 rounded-full object-cover"
              src="/images/ddHJYlQqOzyOKm4CSCY8o.png"
              alt="Simon Lewis"
            />
            <div class="ml-4 flex flex-col sm:w-96">
              <p class="mb-1 font-medium text-gray-700">Johanson Levinsiki</p>
              <div class="mb-2 text-sm text-gray-400">
                <span class="shrink-0 mr-1 text-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="inline h-3 w-3"
                  >
                    <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z" />
                    <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 001.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0015.75 7.5z" />
                  </svg>
                </span>
                <span class="mr-1 font-medium text-blue-500">
                  replied to your comment:
                </span>
                <span class="">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </span>
              </div>
              <div class="rounded-xl bg-blue-50 p-4 text-gray-500">
                <p class="text-sm">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Rerum, soluta modi? Amet, sequi distinctio.
                </p>
              </div>
            </div>
            <span class="absolute top-0 right-2 text-sm text-gray-400">
              1min ago
            </span>
          </div>
        </div>
        <div
          class="mb-3 space-y-4 py-2 focus:outline-none focus:ring-1"
          tabindex="0"
        >
          <div class="relative flex items-center">
            <img
              class="h-10 w-10 rounded-full object-cover"
              src="/images/ddHJYlQqOzyOKm4CSCY8o.png"
              alt="Simon Lewis"
            />
            <div class="ml-4 flex flex-col sm:w-96">
              <p class="mb-1 font-medium text-gray-700">Johanson Levinsiki</p>
              <div class="mb-2 text-sm text-gray-400">
                <span class="shrink-0 mr-1 text-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="inline h-3 w-3"
                  >
                    <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z" />
                    <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 001.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0015.75 7.5z" />
                  </svg>
                </span>
                <span class="mr-1 font-medium text-blue-500">
                  replied to your comment:
                </span>
                <span class="">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </span>
              </div>
              <div class="rounded-xl bg-blue-50 p-4 text-gray-500">
                <p class="text-sm">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Rerum, soluta modi? Amet, sequi distinctio.
                </p>
              </div>
            </div>
            <span class="absolute top-0 right-2 text-sm text-gray-400">
              1min ago
            </span>
          </div>
        </div>
        <div
          class="mb-3 space-y-4 py-2 focus:outline-none focus:ring-1"
          tabindex="0"
        >
          <div class="relative flex items-center">
            <img
              class="h-10 w-10 rounded-full object-cover"
              src="/images/ddHJYlQqOzyOKm4CSCY8o.png"
              alt="Simon Lewis"
            />
            <div class="ml-4 flex flex-col sm:w-96">
              <p class="mb-1 font-medium text-gray-700">Johanson Levinsiki</p>
              <div class="mb-2 text-sm text-gray-400">
                <span class="shrink-0 mr-1 text-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="inline h-3 w-3"
                  >
                    <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z" />
                    <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 001.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0015.75 7.5z" />
                  </svg>
                </span>
                <span class="mr-1 font-medium text-blue-500">
                  replied to your comment:
                </span>
                <span class="">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </span>
              </div>
              <div class="rounded-xl bg-blue-50 p-4 text-gray-500">
                <p class="text-sm">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Rerum, soluta modi? Amet, sequi distinctio.
                </p>
              </div>
            </div>
            <span class="absolute top-0 right-2 text-sm text-gray-400">
              1min ago
            </span>
          </div>
        </div>
        <div
          class="mb-3 space-y-4 py-2 focus:outline-none focus:ring-1"
          tabindex="0"
        >
          <div class="relative flex items-center">
            <img
              class="h-10 w-10 rounded-full object-cover"
              src="/images/ddHJYlQqOzyOKm4CSCY8o.png"
              alt="Simon Lewis"
            />
            <div class="ml-4 flex flex-col sm:w-96">
              <p class="mb-1 font-medium text-gray-700">Johanson Levinsiki</p>
              <div class="mb-2 text-sm text-gray-400">
                <span class="shrink-0 mr-1 text-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="inline h-3 w-3"
                  >
                    <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z" />
                    <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 001.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0015.75 7.5z" />
                  </svg>
                </span>
                <span class="mr-1 font-medium text-blue-500">
                  replied to your comment:
                </span>
                <span class="">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </span>
              </div>
              <div class="rounded-xl bg-blue-50 p-4 text-gray-500">
                <p class="text-sm">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Rerum, soluta modi? Amet, sequi distinctio.
                </p>
              </div>
            </div>
            <span class="absolute top-0 right-2 text-sm text-gray-400">
              1min ago
            </span>
          </div>
        </div>
        <div
          class="mb-3 space-y-4 py-2 focus:outline-none focus:ring-1"
          tabindex="0"
        >
          <div class="relative flex items-center">
            <img
              class="h-10 w-10 rounded-full object-cover"
              src="/images/ddHJYlQqOzyOKm4CSCY8o.png"
              alt="Simon Lewis"
            />
            <div class="ml-4 flex flex-col sm:w-96">
              <p class="mb-1 font-medium text-gray-700">Johanson Levinsiki</p>
              <div class="mb-2 text-sm text-gray-400">
                <span class="shrink-0 mr-1 text-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="inline h-3 w-3"
                  >
                    <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z" />
                    <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 001.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0015.75 7.5z" />
                  </svg>
                </span>
                <span class="mr-1 font-medium text-blue-500">
                  replied to your comment:
                </span>
                <span class="">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </span>
              </div>
              <div class="rounded-xl bg-blue-50 p-4 text-gray-500">
                <p class="text-sm">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Rerum, soluta modi? Amet, sequi distinctio.
                </p>
              </div>
            </div>
            <span class="absolute top-0 right-2 text-sm text-gray-400">
              1min ago
            </span>
          </div>
        </div>
        <div
          class="mb-3 space-y-4 py-2 focus:outline-none focus:ring-1"
          tabindex="0"
        >
          <div class="relative flex items-center">
            <img
              class="h-10 w-10 rounded-full object-cover"
              src="/images/ddHJYlQqOzyOKm4CSCY8o.png"
              alt="Simon Lewis"
            />
            <div class="ml-4 flex flex-col sm:w-96">
              <p class="mb-1 font-medium text-gray-700">Johanson Levinsiki</p>
              <div class="mb-2 text-sm text-gray-400">
                <span class="shrink-0 mr-1 text-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="inline h-3 w-3"
                  >
                    <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z" />
                    <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 001.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0015.75 7.5z" />
                  </svg>
                </span>
                <span class="mr-1 font-medium text-blue-500">
                  replied to your comment:
                </span>
                <span class="">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </span>
              </div>
              <div class="rounded-xl bg-blue-50 p-4 text-gray-500">
                <p class="text-sm">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Rerum, soluta modi? Amet, sequi distinctio.
                </p>
              </div>
            </div>
            <span class="absolute top-0 right-2 text-sm text-gray-400">
              1min ago
            </span>
          </div>
        </div>
        <div
          class="mb-3 space-y-4 py-2 focus:outline-none focus:ring-1"
          tabindex="0"
        >
          <div class="relative flex items-center">
            <img
              class="h-10 w-10 rounded-full object-cover"
              src="/images/ddHJYlQqOzyOKm4CSCY8o.png"
              alt="Simon Lewis"
            />
            <div class="ml-4 flex flex-col sm:w-96">
              <p class="mb-1 font-medium text-gray-700">Johanson Levinsiki</p>
              <div class="mb-2 text-sm text-gray-400">
                <span class="shrink-0 mr-1 text-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="inline h-3 w-3"
                  >
                    <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z" />
                    <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 001.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0015.75 7.5z" />
                  </svg>
                </span>
                <span class="mr-1 font-medium text-blue-500">
                  replied to your comment:
                </span>
                <span class="">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </span>
              </div>
              <div class="rounded-xl bg-blue-50 p-4 text-gray-500">
                <p class="text-sm">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Rerum, soluta modi? Amet, sequi distinctio.
                </p>
              </div>
            </div>
            <span class="absolute top-0 right-2 text-sm text-gray-400">
              1min ago
            </span>
          </div>
        </div>
        <div
          class="mb-3 space-y-4 py-2 focus:outline-none focus:ring-1"
          tabindex="0"
        >
          <div class="relative flex items-center">
            <img
              class="h-10 w-10 rounded-full object-cover"
              src="/images/ddHJYlQqOzyOKm4CSCY8o.png"
              alt="Simon Lewis"
            />
            <div class="ml-4 flex flex-col sm:w-96">
              <p class="mb-1 font-medium text-gray-700">Johanson Levinsiki</p>
              <div class="mb-2 text-sm text-gray-400">
                <span class="shrink-0 mr-1 text-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="inline h-3 w-3"
                  >
                    <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z" />
                    <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 001.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0015.75 7.5z" />
                  </svg>
                </span>
                <span class="mr-1 font-medium text-blue-500">
                  replied to your comment:
                </span>
                <span class="">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </span>
              </div>
              <div class="rounded-xl bg-blue-50 p-4 text-gray-500">
                <p class="text-sm">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Rerum, soluta modi? Amet, sequi distinctio.
                </p>
              </div>
            </div>
            <span class="absolute top-0 right-2 text-sm text-gray-400">
              1min ago
            </span>
          </div>
        </div>
        <div
          class="mb-3 space-y-4 py-2 focus:outline-none focus:ring-1"
          tabindex="0"
        >
          <div class="relative flex items-center">
            <img
              class="h-10 w-10 rounded-full object-cover"
              src="/images/ddHJYlQqOzyOKm4CSCY8o.png"
              alt="Simon Lewis"
            />
            <div class="ml-4 flex flex-col sm:w-96">
              <p class="mb-1 font-medium text-gray-700">Johanson Levinsiki</p>
              <div class="mb-2 text-sm text-gray-400">
                <span class="shrink-0 mr-1 text-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="inline h-3 w-3"
                  >
                    <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z" />
                    <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 001.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0015.75 7.5z" />
                  </svg>
                </span>
                <span class="mr-1 font-medium text-blue-500">
                  replied to your comment:
                </span>
                <span class="">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </span>
              </div>
              <div class="rounded-xl bg-blue-50 p-4 text-gray-500">
                <p class="text-sm">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Rerum, soluta modi? Amet, sequi distinctio.
                </p>
              </div>
            </div>
            <span class="absolute top-0 right-2 text-sm text-gray-400">
              1min ago
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
