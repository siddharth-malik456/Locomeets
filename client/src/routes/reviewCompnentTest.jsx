import React, { useState } from "react";
import ServiceReview from "../components/serviceReview";

const getRatingPercentage = (userRatingStats) => {
  let totalRating = 0;
  for (let i = 1; i < userRatingStats.length; i++) {
    totalRating += userRatingStats[i];
  }
  const ratingPercentage = [-1];
  for (let i = 1; i < 6; i++) {
    ratingPercentage.push(Math.round((userRatingStats[i] / totalRating) * 100));
  }
  return ratingPercentage;
};
const ReviewCompnentTest = () => {
  const ratingStats = [-1, 0, 0, 0, 3, 27];
  const ratingPercent = getRatingPercentage(ratingStats);

  return (
    <div>
      <div className="p-8 font-semibold lg:w-1/2 text-xl">
        <p>Reviews</p>
        <p>30 Reviews for this Service</p>
        <div className="ml-20 mt-4">
          {/* slider  */}
          <div class="w-[50%] relative mb-6  bg-gray-200 rounded-full h-2 dark:bg-gray-200">
            <p className="absolute -top-3 -left-20">5 stars</p>
            <div
              class=" bg-gray-800 h-2 rounded-full"
              style={{ width: `${ratingPercent[5]}%` }}
            ></div>
            <p
              className={`absolute -top-3 ${
                ratingPercent[5] ? "" : "text-gray-200"
              } -right-12`}
            >
              ({ratingStats[5]})
            </p>
          </div>
          {/* ----- */}
          {/* slider  */}
          <div class="w-[50%] relative mb-6 bg-gray-200 rounded-full h-2 dark:bg-gray-200">
            <p className="absolute -top-3 -left-20">4 stars</p>
            <div
              class=" bg-gray-800 h-2 rounded-full"
              style={{ width: `${ratingPercent[4]}%` }}
            ></div>
            <p
              className={`absolute -top-3 ${
                ratingPercent[4] ? "" : "text-gray-200"
              } -right-12`}
            >
              ({ratingStats[4]})
            </p>
          </div>
          {/* ----- */}
          {/* slider  */}
          <div class="w-[50%] relative mb-6 bg-gray-200 rounded-full h-2 dark:bg-gray-200">
            <p className="absolute -top-3 -left-20">3 stars</p>
            <div
              class=" bg-gray-800 h-2 rounded-full"
              style={{ width: `${ratingPercent[3]}%` }}
            ></div>
            <p
              className={`absolute -top-3 ${
                ratingPercent[3] ? "" : "text-gray-200"
              } -right-12`}
            >
              ({ratingStats[3]})
            </p>
          </div>
          {/* ----- */}
          {/* slider  */}
          <div class="w-[50%] relative mb-6 bg-gray-200 rounded-full h-2 dark:bg-gray-200">
            <p className="absolute -top-3 -left-20">2 stars</p>
            <div
              class=" bg-gray-800 h-2 rounded-full"
              style={{ width: `${ratingPercent[2]}%` }}
            ></div>
            <p
              className={`absolute -top-3 ${
                ratingPercent[2] ? "" : "text-gray-200"
              } -right-12`}
            >
              ({ratingStats[2]})
            </p>
          </div>
          {/* ----- */}
          {/* slider  */}
          <div class="w-[50%] relative mb-6 bg-gray-200 rounded-full h-2 dark:bg-gray-200">
            <p className="absolute -top-3 -left-20">1 stars</p>
            <div
              class=" bg-gray-800 h-2 rounded-full"
              style={{ width: `${ratingPercent[1]}%` }}
            ></div>
            <p
              className={`absolute -top-3 ${
                ratingPercent[1] ? "" : "text-gray-200"
              } -right-12`}
            >
              ({ratingStats[1]})
            </p>
          </div>
          {/* ----- */}
        </div>
      </div>
      <div className="lg:w-1/2">
        <ServiceReview />
      </div>
    </div>
  );
};

export default ReviewCompnentTest;
