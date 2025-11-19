
// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace TemplateTypes {
  export interface CardRowProps {
    label: string;
    version: string;
  }

  export interface Item {
    id: string;
    label: string;
    version: string;
  }

  export interface TemplateColumnProps {
    title: string;
    items: Item[];
  }
}
