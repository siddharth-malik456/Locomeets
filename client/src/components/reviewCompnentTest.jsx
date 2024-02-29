import React, { useEffect, useState } from "react";
import ServiceReview from "./ReviewsComponents/serviceReview";
import ReviewEditor from "./ReviewsComponents/reviewEditor";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";
import { Drawer, Button } from "@mantine/core";
import Cookies from "universal-cookie";
const INITIAL_REVIEW_SEEK_VALUES = [-1, 1, 1, 1, 1, 1]; // each value represents  is % of seek filled the oth index is not used anywhere
const getRatingPercentage = (userRatingStats) => {
  if (JSON.stringify(userRatingStats) === JSON.stringify([-1, 0, 0, 0, 0, 0]))
    return INITIAL_REVIEW_SEEK_VALUES;
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
  const [currentReview, setCurrentRevice] = useState([]);
  const [openReviewDrawer, setopenReviewDrawer] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);
  const cookies = new Cookies(null, { path: "/" });
  const uid = cookies.get("userUid");
  const auth = cookies.get("auth");
  useEffect(() => {
    const getReviews = async () => {
      const userReviews = await axios.get(
        `http://localhost:3000/review/${params.id}`
      );
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

      setreviews(temp);
    };
    getReviews();
  }, []);
  useEffect(() => {
    const d = async () => {
      if (!auth) {
        console.log("Not logged in");
        return;
      }
      const r = (await axios.get("http://localhost:3000/review/getuser/" + uid))
        .data;
      console.log("HERE IN SINGE REVIEW");
      r.map((re) => {
        if (re.service == params.id) {
          console.log("found");
          setCurrentRevice({
            userFirstName: re.user.firstName,
            userLastName: re.user.lastName,
            rating: re.rating,
            heading: re.heading,
            description: re.description,
            images: re.images,
            profilePicture: "",
            nationality: re.user.nationality,
            date: re.dateOfReview,
          });
        }
      });
    };
    d();
    return;
  }, []);
  const ratingStats = getRatingStats(reviews);
  const ratingPercent = getRatingPercentage(ratingStats);

  return (
    <div className="flex flex-col justify-center">
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
      {currentReview.length != 0 ? (
        <div className=" flex flex-col p-2">
          <p className="mx-auto font-bold text-lg p-4 ">Your Review</p>
          <div className="bg-white border mx-auto lg:px-24  border-blue-200  ">
            <ServiceReview review={currentReview} />
          </div>
        </div>
      ) : (
        <div className="flex justify-center mt-4">
          <Button className=" m-8" onClick={open}>
            Write a Review
          </Button>
        </div>
      )}

      <Drawer opened={opened} onClose={close} position="bottom" size="lg">
        <div className="">
          <ReviewEditor />
        </div>
      </Drawer>

      <div className="w-full">
        {reviews.map((review) => {
          return <ServiceReview review={review} />;
        })}
      </div>
    </div>
  );
};

export default ReviewCompnentTest;
