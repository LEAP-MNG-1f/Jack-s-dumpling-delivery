import { marketingArray } from "@/constants/mockdatas";
import MarketingCard from "../../ui/MarketingCard";


export const HomeMarketingSection = () => {
  return (
    <div className="grid grid-cols-4 gap-10">
      {marketingArray.map((detail) => {
        return (
          <div key={detail.id}>
            <MarketingCard
              id={detail.id}
              icon={detail.icon}
              title={detail.title}
              desc={detail.desc}
            />
          </div>
        );
      })}
    </div>
  );
};
