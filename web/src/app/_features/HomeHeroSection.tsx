import { Typography } from "@mui/material";

export const HomeHeroSection = () => {
  return (
    <div className="h-[480px] w-full flex justify-center relative">
      <div className="flex items-center justify-center container ">
        <div className="absolute top-0 left-0 w-full h-full">
          <img src="../marks.png" />
        </div>
        <div className="flex items-center justify-between">
          <div className="w-1/3">
            <Typography className="text-[#ffffff] border-b" variant="h3">
              Pinecone Food delivery
            </Typography>
            <Typography className="text-[#ffffff] font-semibold" variant="h6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Typography>
          </div>

          <img
            className="z-10 right-20 "
            src="./huurga.png"
            width={"400px"}
            alt="ricePhoto"
          />
          <img
            className="absolute z-20 right-20 "
            src="./budaatai.png"
            width={"300px"}
            alt="ricePhoto"
          />
        </div>
      </div>
    </div>
  );
};
