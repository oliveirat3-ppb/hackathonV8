import type { TemplateTypes } from "./types";

export const CardRow = ({ label, version }: TemplateTypes.CardRowProps) => {
  return (
    <div className="card-row">
      <span className="card-row-label">
        {label} ({version})
      </span>
      <input type="checkbox" className="card-checkbox" />
    </div>
  );
};
