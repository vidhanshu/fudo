import { FC } from "react";
import { ICategory } from "../type";
import Card from "@/src/common/components/Card";

const CategoryCard: FC<ICategory> = ({ name, emote, count }) => {
  return (
    <Card className="flex flex-col gap-2 items-center hover:border-primary-light hover:bg-primary-main hover:text-white transition-colors">
      <span className="p-2 bg-white rounded-full text-3xl">{emote}</span>
      <h4>{name}</h4>
      <small>{count} Items</small>
    </Card>
  );
};

export default CategoryCard;
