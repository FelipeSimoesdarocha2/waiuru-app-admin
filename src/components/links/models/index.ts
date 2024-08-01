export interface DataProps {
  value: string;
  name?: string;
}

export interface LinksProps {
  label?: string;
  data?: DataProps[];
  type?: 'primary' | 'secondary' | 'link';
}
