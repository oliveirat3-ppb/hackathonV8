import type { TemplateTypes } from "./types";
import { CardRow } from "./CardRow";

export const TemplateColumn = ({ title, items }: TemplateTypes.TemplateColumnProps) => {
  return (
    <section className="template-column">
      <h2 className="column-title">{title}</h2>
      <div className="card">
        <div className="card-inner">
          {items.map(item => (
            <CardRow
              key={item.id}
              id={item.id}
              label={item.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
