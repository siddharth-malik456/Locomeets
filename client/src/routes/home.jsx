import { Carousel } from "@mantine/carousel";
import ServiceCard from "../components/ServiceCard";
import classes from "../Demo.module.css";
export default function Home() {
  return (
    <div>
      <img src="images/homepage_main.png" alt="" className="w-full" />
      <div className="bg-white">
        <div className=" px-16">
          <h1 className="text-3xl font-semibold mb-8 pt-16 text-center">
            BEST SELLERS
          </h1>
          <div className="w-full bg-white">
            <Carousel
              height={400}
              slideSize="25%"
              slideGap="md"
              loop
              align="start"
              slidesToScroll={4}
              className="pl-16"
            >
              <Carousel.Slide>
                <ServiceCard />
              </Carousel.Slide>
              <Carousel.Slide>
                <ServiceCard />
              </Carousel.Slide>
              <Carousel.Slide>
                <ServiceCard />
              </Carousel.Slide>
              <Carousel.Slide>
                <ServiceCard />
              </Carousel.Slide>
              <Carousel.Slide>
                <ServiceCard />
              </Carousel.Slide>
              <Carousel.Slide>
                <ServiceCard />
              </Carousel.Slide>
            </Carousel>
          </div>
        </div>
        <div className=" px-16">
          <h1 className="text-3xl font-semibold mb-8 pt-16 text-center">
            CATEGORIES
          </h1>
          <div className="w-full">
            <Carousel
              height={400}
              slideSize="25%"
              slideGap="md"
              loop
              align="start"
              slidesToScroll={4}
              className="pl-16"
            >
              <Carousel.Slide>
                <ServiceCard />
              </Carousel.Slide>
              <Carousel.Slide>
                <ServiceCard />
              </Carousel.Slide>
              <Carousel.Slide>
                <ServiceCard />
              </Carousel.Slide>
              <Carousel.Slide>
                <ServiceCard />
              </Carousel.Slide>
              <Carousel.Slide>
                <ServiceCard />
              </Carousel.Slide>
              <Carousel.Slide>
                <ServiceCard />
              </Carousel.Slide>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}
