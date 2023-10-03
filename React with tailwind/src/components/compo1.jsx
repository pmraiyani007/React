import React from "react";

function Compo1({ Name, img, clickme }) {
  return (
    <div>
      <a
        href={clickme}
        className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
      >
        <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

        <div className="sm:flex sm:justify-between sm:gap-4">
          <div className="m-auto">
            <h3 className="text-lg font-bold text-white sm:text-xl">
              Building a SaaS product as a software developer
            </h3>

            <p className="mt-1 text-xs font-medium text-white">By {Name}</p>
            <div className="mt-4">
              <p className="text-sm text-white text-center">
                Click on the card to visit my linkedin profile.🙂
              </p>
            </div>

            <dl className="mt-6 flex gap-4 sm:gap-6 justify-center">
              <div className="flex flex-col-reverse">
                <dt className="text-sm font-medium text-white">Published</dt>
                <dd className="text-xs text-white">31st June, 2021</dd>
              </div>

              <div className="flex flex-col-reverse">
                <dt className="text-sm font-medium text-white">Reading time</dt>
                <dd className="text-xs text-white">3 minute</dd>
              </div>
            </dl>
          </div>

          <div className="hidden sm:block sm:shrink-0">
            <img
              alt="Paul Clapton"
              src={img}
              className="h-max w-96 rounded-lg object-cover shadow-sm"
            />
          </div>
        </div>
      </a>
    </div>
  );
}

export default Compo1;
