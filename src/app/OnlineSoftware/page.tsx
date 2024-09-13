import Hero from "../components/HeroSection/Hero"
import  OnlineSoftware  from "./OnlineSoftware"
const page = () => {
  return (
    <div>
     <Hero
          title="Online Software"
          description= "Discover the latest and greatest software solutions designed to transform your business. Unlock new levels of efficiency, gain valuable insights, and achieve your goals faster than ever before."
          buttonText="Get Started"
          buttonLink="#"
          imageSrc="/images/cms-3.svg"
        />
     <OnlineSoftware/>
    </div>
  )
}

export default page
