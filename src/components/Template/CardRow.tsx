import PackageVersion from "../../PackageVersion";
import type { TemplateTypes } from "./types";

export const CardRow = ({ id, label }: TemplateTypes.CardRowProps) => {
  return (
    <div className="card-row">
      <span className="card-row-label">
        {label} <PackageVersion packageName={id}/>
      </span>
      <input type="checkbox" className="card-checkbox" />
    </div>
  );
};
