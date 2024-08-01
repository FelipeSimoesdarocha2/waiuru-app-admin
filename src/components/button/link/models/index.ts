export interface LinkProps {
  color?: string
  label?: string;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
  type?: 'primary' | 'secondary';
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
