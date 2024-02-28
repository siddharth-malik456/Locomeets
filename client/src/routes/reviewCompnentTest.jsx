import React, { useEffect, useState } from "react";
import ServiceReview from "../components/ReviewsComponents/serviceReview";
import ReviewEditor from "../components/ReviewsComponents/reviewEditor";
import axios from "axios";
import { useParams } from "react-router-dom";

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
const getRatingStats = (userReviews) => {
  const stats = [-1, 0, 0, 0, 0, 0];
  userReviews.forEach((element) => {
    const rating = element.rating;
    stats[rating] = stats[rating] + 1;
  });
  return stats;
};
const ReviewCompnentTest = () => {
  const params = useParams();
  const [reviews, setreviews] = useState([]);
  useEffect(() => {
    const getReviews = async () => {
      const userReviews = await axios.get(
        `http://localhost:3000/review/${params.id}`
      );
      console.log(userReviews.data[0]);
      const temp = [];
      userReviews.data.map((r) => {
        temp.push({
          userFirstName: r.user.firstName,
          userLastName: r.user.lastName,
          rating: r.rating,
          heading: r.heading,
          description: r.description,
          images: r.images,
          profilePicture: "",
          nationality: r.user.nationality,
          date: r.dateOfReview,
        });
      });
      // setreviews([
      //   ...reviews,
      //   {
      //     userFirstName: r.user.firstName,
      //     userLastName: r.user.lastName,
      //     rating: r.rating,
      //     heading: r.heading,
      //     description: r.description,
      //     images: r.images,
      //     profilePicture: "",
      //     nationality: r.user.nationality,
      //     date: r.dateOfReview,
      //   },
      // ]);
      setreviews(temp);
    };
    getReviews();
  }, []);
  const ratingStats = getRatingStats(reviews);
  const ratingPercent = getRatingPercentage(ratingStats);

  return (
    <div>
      <div className="p-8 font-semibold lg:w-1/2 text-xl">
        <p>Reviews</p>
        <p>{reviews.length} Reviews for this Service</p>
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
      <ReviewEditor />
      <div className="lg:w-1/2">
        {reviews.map((review) => {
          return <ServiceReview review={review} />;
        })}
      </div>
    </div>
  );
};

export default ReviewCompnentTest;
