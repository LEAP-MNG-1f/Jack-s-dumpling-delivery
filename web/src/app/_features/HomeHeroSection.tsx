import TracedIcon from "@/icons/TracedIcon";
import { Typography } from "@mui/material";

export default function HomeHeroSection() {
  return (
    <>
      <div className="h-[788px] w-full flex justify-center bg-[#18BA51] relative">
        <div className="flex items-center justify-center container ">
          <div className="absolute top-0 left-0">
            <TracedIcon />
          </div>
          <div className="flex w-4/5 absolute left-4/5 justify-between items-center ">
            <div className="w-1/3">
              <Typography className="text-[#ffffff] border-b" variant="h3">
                Pinecone Food delivery
              </Typography>
              <Typography className="text-[#ffffff] font-semibold" variant="h6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </Typography>
            </div>
            <div className="">
              <img
                className="relative z-10 right-40 "
                src="./huurga.png"
                width={"400px"}
                alt="ricePhoto"
              />
              <img
                className="absolute z-20 bottom-3 -right-4 "
                src="./budaatai.png"
                width={"300px"}
                alt="ricePhoto"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
