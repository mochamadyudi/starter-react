import React from "react";
import {Card, CardBody} from "@heroui/react";
import {statCards} from "@common/constants/mockdata";
import type {StatCard} from "@common/types/mockdata.type";
import classNames from "classnames";

const StatCardItem: React.FC<{card: StatCard; delay: number}> = ({
  card,
  delay,
}) => {
  const gradientMap: Record<StatCard["gradient"], string> = {
    indigo:
      "bg-gradient-to-tl from-indigo-300 border border-indigo-500 to-indigo-700 shadow-indigo-400",
    rose: "bg-gradient-to-tl from-rose-300 border border-rose-500 to-rose-700 shadow-rose-400",
    sky: "bg-gradient-to-tl from-sky-300 border border-sky-500 to-sky-700  shadow-sky-400",
    amber:
      "bg-gradient-to-tl from-amber-300 border border-amber-500 to-amber-700 shadow-amber-400",
  };

  console.log({card, map: gradientMap[card.gradient]});
  return (
    <Card
      isPressable
      disableRipple
      className={classNames(
        gradientMap[card.gradient],
        `rounded-2xl text-white`,
        " transition-transform duration-200 cursor-pointer ",
      )}
      style={{animationDelay: `${delay}ms`, animationFillMode: "both"}}>
      <CardBody className="p-6 relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute -top-5 -right-5 w-24 h-24 rounded-full bg-white/10 pointer-events-none" />
        <div className="absolute right-3 -bottom-7 w-16 h-16 rounded-full bg-white/7 pointer-events-none" />

        <div className="relative z-10">
          <span className="text-2xl">{card.icon}</span>
          <p className="text-xs font-medium opacity-80 mt-3 mb-1">
            {card.label}
          </p>
          <p className="font-display font-bold text-3xl tracking-tight leading-none">
            {card.value}
          </p>
          <div className="text-xs opacity-75 mt-2 flex items-center gap-1">
            {card.trend === "up" && (
              <span
                className={classNames(
                  {
                    ["text-white bg-green-500"]: card.gradient === "indigo",
                  },
                  "font-semibold px-2 py-1 rounded-full inline-block",
                )}>
                ↑ {card.trendValue}
              </span>
            )}
            {card.trend === "down" && (
              <span className="font-semibold text-red-500">
                ↓ {card.trendValue}
              </span>
            )}
            <span>{card.sub}</span>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

const StatCards: React.FC = () => (
  <div className="grid grid-cols-4 gap-4">
    {statCards.map((card, i) => (
      <StatCardItem key={card.id} card={card} delay={(i + 1) * 60} />
    ))}
  </div>
);

export default StatCards;
