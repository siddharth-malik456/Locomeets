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
const getRatingStats = (userReviews) => {
  const stats = [-1, 0, 0, 0, 0, 0];
  userReviews.forEach((element) => {
    const rating = element.rating;
    stats[rating] = stats[rating] + 1;
  });
  return stats;
};
const ReviewCompnentTest = () => {
  const [reviews, setRevies] = useState([
    {
      //  userId: "1234",
      // servicesId: "x1234",
      userFirstName: "Nayan",
      userLastName: "Ansh Singh",
      rating: 4,
      heading: "It was an awesome experince ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ullamcorper ultricies cursus. Cras molestie mi nec ex convallis molestie. Donec consequat blandit consequat. Sed placerat ultricies porttitor. Aenean venenatis faucibus felis a placerat. Proin tristique orci et nisl convallis interdum. Duis feugiat tortor erat, rutrum sagittis dui imperdiet non. Nunc fringilla blandit dui sed hendrerit. Vivamus non tincidunt turpis. Mauris porttitor massa non velit sodales pulvinar. Praesent tempor nulla non libero sagittis commodo. Sed laoreet sed diam nec volutpat. Proin eu dolor non ligula porttitor convallis sed id diam. Praesent sollicitudin faucibus nisi ac pharetra. Nunc eget dui eu massa consequat tristique tincidunt sed neque. Nullam hendrerit nulla in mi cursus, non fermentum magna pulvinar. Mauris in justo ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget elit eu neque pharetra luctus quis vel ligula. Nulla sed massa eu lectus efficitur pulvinar. Suspendisse mollis consectetur odio in maximus.",
      images: [
        "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
        "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1444525873963-75d329ef9e1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
      ],
      profilePicture: "",
      nationality: "Armenia",
      date: new Date("2023-01-15T00:00:00"),
    },
    {
      //  userId: "1234",
      // servicesId: "x1234",
      userFirstName: "Nayan",
      userLastName: "Ansh Singh",
      rating: 4,
      heading: "It was an awesome experince ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ullamcorper ultricies cursus. Cras molestie mi nec ex convallis molestie. Donec consequat blandit consequat. Sed placerat ultricies porttitor. Aenean venenatis faucibus felis a placerat. Proin tristique orci et nisl convallis interdum. Duis feugiat tortor erat, rutrum sagittis dui imperdiet non. Nunc fringilla blandit dui sed hendrerit. Vivamus non tincidunt turpis. Mauris porttitor massa non velit sodales pulvinar. Praesent tempor nulla non libero sagittis commodo. Sed laoreet sed diam nec volutpat. Proin eu dolor non ligula porttitor convallis sed id diam. Praesent sollicitudin faucibus nisi ac pharetra. Nunc eget dui eu massa consequat tristique tincidunt sed neque. Nullam hendrerit nulla in mi cursus, non fermentum magna pulvinar. Mauris in justo ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget elit eu neque pharetra luctus quis vel ligula. Nulla sed massa eu lectus efficitur pulvinar. Suspendisse mollis consectetur odio in maximus.",
      images: [
        "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
        "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1444525873963-75d329ef9e1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
      ],
      profilePicture:
        "https://th.bing.com/th/id/OIP.KtbewMQNQ-6vli6ffsoZBwHaO5?rs=1&pid=ImgDetMain",
      nationality: "India",
      date: new Date("2023-01-15T00:00:00"),
    },
    {
      //  userId: "1234",
      // servicesId: "x1234",
      userFirstName: "Nayan",
      userLastName: "Ansh Singh",
      rating: 3,
      heading: "It was an awesome experince ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ullamcorper ultricies cursus. Cras molestie mi nec ex convallis molestie. Donec consequat blandit consequat. Sed placerat ultricies porttitor. Aenean venenatis faucibus felis a placerat. Proin tristique orci et nisl convallis interdum. Duis feugiat tortor erat, rutrum sagittis dui imperdiet non. Nunc fringilla blandit dui sed hendrerit. Vivamus non tincidunt turpis. Mauris porttitor massa non velit sodales pulvinar. Praesent tempor nulla non libero sagittis commodo. Sed laoreet sed diam nec volutpat. Proin eu dolor non ligula porttitor convallis sed id diam. Praesent sollicitudin faucibus nisi ac pharetra. Nunc eget dui eu massa consequat tristique tincidunt sed neque. Nullam hendrerit nulla in mi cursus, non fermentum magna pulvinar. Mauris in justo ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget elit eu neque pharetra luctus quis vel ligula. Nulla sed massa eu lectus efficitur pulvinar. Suspendisse mollis consectetur odio in maximus.",
      images: [
        "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
        "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1444525873963-75d329ef9e1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
      ],
      profilePicture: "",
      nationality: "Canada",
      date: new Date("2023-01-15T00:00:00"),
    },
    {
      //  userId: "1234",
      // servicesId: "x1234",
      userFirstName: "Nayan",
      userLastName: "Ansh Singh",
      rating: 4,
      heading: "It was an awesome experince ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ullamcorper ultricies cursus. Cras molestie mi nec ex convallis molestie. Donec consequat blandit consequat. Sed placerat ultricies porttitor. Aenean venenatis faucibus felis a placerat. Proin tristique orci et nisl convallis interdum. Duis feugiat tortor erat, rutrum sagittis dui imperdiet non. Nunc fringilla blandit dui sed hendrerit. Vivamus non tincidunt turpis. Mauris porttitor massa non velit sodales pulvinar. Praesent tempor nulla non libero sagittis commodo. Sed laoreet sed diam nec volutpat. Proin eu dolor non ligula porttitor convallis sed id diam. Praesent sollicitudin faucibus nisi ac pharetra. Nunc eget dui eu massa consequat tristique tincidunt sed neque. Nullam hendrerit nulla in mi cursus, non fermentum magna pulvinar. Mauris in justo ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget elit eu neque pharetra luctus quis vel ligula. Nulla sed massa eu lectus efficitur pulvinar. Suspendisse mollis consectetur odio in maximus.",
      images: [
        "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
        "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1444525873963-75d329ef9e1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
      ],
      profilePicture: "",
      nationality: "India",
      date: new Date("2023-01-15T00:00:00"),
    },
    {
      //  userId: "1234",
      // servicesId: "x1234",
      userFirstName: "Nayan",
      userLastName: "Ansh Singh",
      rating: 4,
      heading: "It was an awesome experince ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ullamcorper ultricies cursus. Cras molestie mi nec ex convallis molestie. Donec consequat blandit consequat. Sed placerat ultricies porttitor. Aenean venenatis faucibus felis a placerat. Proin tristique orci et nisl convallis interdum. Duis feugiat tortor erat, rutrum sagittis dui imperdiet non. Nunc fringilla blandit dui sed hendrerit. Vivamus non tincidunt turpis. Mauris porttitor massa non velit sodales pulvinar. Praesent tempor nulla non libero sagittis commodo. Sed laoreet sed diam nec volutpat. Proin eu dolor non ligula porttitor convallis sed id diam. Praesent sollicitudin faucibus nisi ac pharetra. Nunc eget dui eu massa consequat tristique tincidunt sed neque. Nullam hendrerit nulla in mi cursus, non fermentum magna pulvinar. Mauris in justo ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget elit eu neque pharetra luctus quis vel ligula. Nulla sed massa eu lectus efficitur pulvinar. Suspendisse mollis consectetur odio in maximus.",
      images: [
        "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
        "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1444525873963-75d329ef9e1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
      ],
      profilePicture: "",
      nationality: "India",
      date: new Date("2023-01-15T00:00:00"),
    },
    {
      //  userId: "1234",
      // servicesId: "x1234",
      userFirstName: "Nayan",
      userLastName: "Ansh Singh",
      rating: 2,
      heading: "It was an awesome experince ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ullamcorper ultricies cursus. Cras molestie mi nec ex convallis molestie. Donec consequat blandit consequat. Sed placerat ultricies porttitor. Aenean venenatis faucibus felis a placerat. Proin tristique orci et nisl convallis interdum. Duis feugiat tortor erat, rutrum sagittis dui imperdiet non. Nunc fringilla blandit dui sed hendrerit. Vivamus non tincidunt turpis. Mauris porttitor massa non velit sodales pulvinar. Praesent tempor nulla non libero sagittis commodo. Sed laoreet sed diam nec volutpat. Proin eu dolor non ligula porttitor convallis sed id diam. Praesent sollicitudin faucibus nisi ac pharetra. Nunc eget dui eu massa consequat tristique tincidunt sed neque. Nullam hendrerit nulla in mi cursus, non fermentum magna pulvinar. Mauris in justo ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget elit eu neque pharetra luctus quis vel ligula. Nulla sed massa eu lectus efficitur pulvinar. Suspendisse mollis consectetur odio in maximus.",
      images: [
        "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
        "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1444525873963-75d329ef9e1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
      ],
      profilePicture: "",
      nationality: "Chile",
      date: new Date("2023-01-15T00:00:00"),
    },
    {
      //  userId: "1234",
      // servicesId: "x1234",
      userFirstName: "Nayan",
      userLastName: "Ansh Singh",
      rating: 5,
      heading: "It was an awesome experince ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ullamcorper ultricies cursus. Cras molestie mi nec ex convallis molestie. Donec consequat blandit consequat. Sed placerat ultricies porttitor. Aenean venenatis faucibus felis a placerat. Proin tristique orci et nisl convallis interdum. Duis feugiat tortor erat, rutrum sagittis dui imperdiet non. Nunc fringilla blandit dui sed hendrerit. Vivamus non tincidunt turpis. Mauris porttitor massa non velit sodales pulvinar. Praesent tempor nulla non libero sagittis commodo. Sed laoreet sed diam nec volutpat. Proin eu dolor non ligula porttitor convallis sed id diam. Praesent sollicitudin faucibus nisi ac pharetra. Nunc eget dui eu massa consequat tristique tincidunt sed neque. Nullam hendrerit nulla in mi cursus, non fermentum magna pulvinar. Mauris in justo ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget elit eu neque pharetra luctus quis vel ligula. Nulla sed massa eu lectus efficitur pulvinar. Suspendisse mollis consectetur odio in maximus.",
      images: [
        "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
        "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1444525873963-75d329ef9e1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
      ],
      profilePicture: "",
      nationality: "India",
      date: new Date("2023-01-15T00:00:00"),
    },
    {
      //  userId: "1234",
      // servicesId: "x1234",
      userFirstName: "Nayan",
      userLastName: "Ansh Singh",
      rating: 4,
      heading: "It was an awesome experince ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ullamcorper ultricies cursus. Cras molestie mi nec ex convallis molestie. Donec consequat blandit consequat. Sed placerat ultricies porttitor. Aenean venenatis faucibus felis a placerat. Proin tristique orci et nisl convallis interdum. Duis feugiat tortor erat, rutrum sagittis dui imperdiet non. Nunc fringilla blandit dui sed hendrerit. Vivamus non tincidunt turpis. Mauris porttitor massa non velit sodales pulvinar. Praesent tempor nulla non libero sagittis commodo. Sed laoreet sed diam nec volutpat. Proin eu dolor non ligula porttitor convallis sed id diam. Praesent sollicitudin faucibus nisi ac pharetra. Nunc eget dui eu massa consequat tristique tincidunt sed neque. Nullam hendrerit nulla in mi cursus, non fermentum magna pulvinar. Mauris in justo ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget elit eu neque pharetra luctus quis vel ligula. Nulla sed massa eu lectus efficitur pulvinar. Suspendisse mollis consectetur odio in maximus.",
      images: [
        "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
        "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1444525873963-75d329ef9e1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
      ],
      profilePicture: "",
      nationality: "India",
      date: new Date("2023-01-15T00:00:00"),
    },
    {
      //  userId: "1234",
      // servicesId: "x1234",
      userFirstName: "Nayan",
      userLastName: "Ansh Singh",
      rating: 4,
      heading: "It was an awesome experince ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ullamcorper ultricies cursus. Cras molestie mi nec ex convallis molestie. Donec consequat blandit consequat. Sed placerat ultricies porttitor. Aenean venenatis faucibus felis a placerat. Proin tristique orci et nisl convallis interdum. Duis feugiat tortor erat, rutrum sagittis dui imperdiet non. Nunc fringilla blandit dui sed hendrerit. Vivamus non tincidunt turpis. Mauris porttitor massa non velit sodales pulvinar. Praesent tempor nulla non libero sagittis commodo. Sed laoreet sed diam nec volutpat. Proin eu dolor non ligula porttitor convallis sed id diam. Praesent sollicitudin faucibus nisi ac pharetra. Nunc eget dui eu massa consequat tristique tincidunt sed neque. Nullam hendrerit nulla in mi cursus, non fermentum magna pulvinar. Mauris in justo ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget elit eu neque pharetra luctus quis vel ligula. Nulla sed massa eu lectus efficitur pulvinar. Suspendisse mollis consectetur odio in maximus.",
      images: [
        "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
        "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1444525873963-75d329ef9e1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
      ],
      profilePicture: "",
      nationality: "India",
      date: new Date("2023-01-15T00:00:00"),
    },
    {
      //  userId: "1234",
      // servicesId: "x1234",
      userFirstName: "Nayan",
      userLastName: "Ansh Singh",
      rating: 4,
      heading: "It was an awesome experince ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ullamcorper ultricies cursus. Cras molestie mi nec ex convallis molestie. Donec consequat blandit consequat. Sed placerat ultricies porttitor. Aenean venenatis faucibus felis a placerat. Proin tristique orci et nisl convallis interdum. Duis feugiat tortor erat, rutrum sagittis dui imperdiet non. Nunc fringilla blandit dui sed hendrerit. Vivamus non tincidunt turpis. Mauris porttitor massa non velit sodales pulvinar. Praesent tempor nulla non libero sagittis commodo. Sed laoreet sed diam nec volutpat. Proin eu dolor non ligula porttitor convallis sed id diam. Praesent sollicitudin faucibus nisi ac pharetra. Nunc eget dui eu massa consequat tristique tincidunt sed neque. Nullam hendrerit nulla in mi cursus, non fermentum magna pulvinar. Mauris in justo ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget elit eu neque pharetra luctus quis vel ligula. Nulla sed massa eu lectus efficitur pulvinar. Suspendisse mollis consectetur odio in maximus.",
      images: [
        "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
        "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1444525873963-75d329ef9e1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
      ],
      profilePicture: "",
      nationality: "India",
      date: new Date("2023-01-15T00:00:00"),
    },
    {
      //  userId: "1234",
      // servicesId: "x1234",
      userFirstName: "Nayan",
      userLastName: "Ansh Singh",
      rating: 4,
      heading: "It was an awesome experince ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ullamcorper ultricies cursus. Cras molestie mi nec ex convallis molestie. Donec consequat blandit consequat. Sed placerat ultricies porttitor. Aenean venenatis faucibus felis a placerat. Proin tristique orci et nisl convallis interdum. Duis feugiat tortor erat, rutrum sagittis dui imperdiet non. Nunc fringilla blandit dui sed hendrerit. Vivamus non tincidunt turpis. Mauris porttitor massa non velit sodales pulvinar. Praesent tempor nulla non libero sagittis commodo. Sed laoreet sed diam nec volutpat. Proin eu dolor non ligula porttitor convallis sed id diam. Praesent sollicitudin faucibus nisi ac pharetra. Nunc eget dui eu massa consequat tristique tincidunt sed neque. Nullam hendrerit nulla in mi cursus, non fermentum magna pulvinar. Mauris in justo ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget elit eu neque pharetra luctus quis vel ligula. Nulla sed massa eu lectus efficitur pulvinar. Suspendisse mollis consectetur odio in maximus.",
      images: [
        "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
        "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1444525873963-75d329ef9e1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
      ],
      profilePicture: "",
      nationality: "India",
      date: new Date("2023-01-15T00:00:00"),
    },
    {
      //  userId: "1234",
      // servicesId: "x1234",
      userFirstName: "Nayan",
      userLastName: "Ansh Singh",
      rating: 2,
      heading: "It was an awesome experince ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ullamcorper ultricies cursus. Cras molestie mi nec ex convallis molestie. Donec consequat blandit consequat. Sed placerat ultricies porttitor. Aenean venenatis faucibus felis a placerat. Proin tristique orci et nisl convallis interdum. Duis feugiat tortor erat, rutrum sagittis dui imperdiet non. Nunc fringilla blandit dui sed hendrerit. Vivamus non tincidunt turpis. Mauris porttitor massa non velit sodales pulvinar. Praesent tempor nulla non libero sagittis commodo. Sed laoreet sed diam nec volutpat. Proin eu dolor non ligula porttitor convallis sed id diam. Praesent sollicitudin faucibus nisi ac pharetra. Nunc eget dui eu massa consequat tristique tincidunt sed neque. Nullam hendrerit nulla in mi cursus, non fermentum magna pulvinar. Mauris in justo ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget elit eu neque pharetra luctus quis vel ligula. Nulla sed massa eu lectus efficitur pulvinar. Suspendisse mollis consectetur odio in maximus.",
      images: [
        "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
        "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1444525873963-75d329ef9e1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
      ],
      profilePicture: "",
      nationality: "India",
      date: new Date("2023-01-15T00:00:00"),
    },
    {
      //  userId: "1234",
      // servicesId: "x1234",
      userFirstName: "Nayan",
      userLastName: "Ansh Singh",
      rating: 2,
      heading: "It was an awesome experince ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ullamcorper ultricies cursus. Cras molestie mi nec ex convallis molestie. Donec consequat blandit consequat. Sed placerat ultricies porttitor. Aenean venenatis faucibus felis a placerat. Proin tristique orci et nisl convallis interdum. Duis feugiat tortor erat, rutrum sagittis dui imperdiet non. Nunc fringilla blandit dui sed hendrerit. Vivamus non tincidunt turpis. Mauris porttitor massa non velit sodales pulvinar. Praesent tempor nulla non libero sagittis commodo. Sed laoreet sed diam nec volutpat. Proin eu dolor non ligula porttitor convallis sed id diam. Praesent sollicitudin faucibus nisi ac pharetra. Nunc eget dui eu massa consequat tristique tincidunt sed neque. Nullam hendrerit nulla in mi cursus, non fermentum magna pulvinar. Mauris in justo ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget elit eu neque pharetra luctus quis vel ligula. Nulla sed massa eu lectus efficitur pulvinar. Suspendisse mollis consectetur odio in maximus.",
      images: [
        "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
        "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1444525873963-75d329ef9e1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
      ],
      profilePicture: "",
      nationality: "India",
      date: new Date("2023-01-15T00:00:00"),
    },
    {
      //  userId: "1234",
      // servicesId: "x1234",
      userFirstName: "Nayan",
      userLastName: "Ansh Singh",
      rating: 3,
      heading: "It was an awesome experince ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ullamcorper ultricies cursus. Cras molestie mi nec ex convallis molestie. Donec consequat blandit consequat. Sed placerat ultricies porttitor. Aenean venenatis faucibus felis a placerat. Proin tristique orci et nisl convallis interdum. Duis feugiat tortor erat, rutrum sagittis dui imperdiet non. Nunc fringilla blandit dui sed hendrerit. Vivamus non tincidunt turpis. Mauris porttitor massa non velit sodales pulvinar. Praesent tempor nulla non libero sagittis commodo. Sed laoreet sed diam nec volutpat. Proin eu dolor non ligula porttitor convallis sed id diam. Praesent sollicitudin faucibus nisi ac pharetra. Nunc eget dui eu massa consequat tristique tincidunt sed neque. Nullam hendrerit nulla in mi cursus, non fermentum magna pulvinar. Mauris in justo ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget elit eu neque pharetra luctus quis vel ligula. Nulla sed massa eu lectus efficitur pulvinar. Suspendisse mollis consectetur odio in maximus.",
      images: [
        "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
        "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1444525873963-75d329ef9e1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
      ],
      profilePicture: "",
      nationality: "India",
      date: new Date("2023-01-15T00:00:00"),
    },
  ]);
  const ratingStats = getRatingStats(reviews);
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
        {reviews.map((review) => {
          return <ServiceReview review={review} />;
        })}
      </div>
    </div>
  );
};

export default ReviewCompnentTest;
