import { Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import CircleIcon from "@mui/icons-material/Circle";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

type paymentPageProps = {
  title: String;
  step: String;
};
export default function PaymentPage({ title, step }: paymentPageProps) {
  return (
    <div className="flex pt-5">
      <Checkbox
        {...label}
        icon={<PanoramaFishEyeIcon />}
        checkedIcon={<CircleIcon />}
      />
      <div className="flex flex-col">
        <Typography sx={{ color: "grey" }} variant="body2">
          step {step}
        </Typography>
        <Typography variant="h5">{title}</Typography>
        <Typography sx={{ color: "blue" }} variant="body2">
          waiting
        </Typography>
      </div>
    </div>
  );
}
