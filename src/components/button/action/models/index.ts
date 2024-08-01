// Next
import { StaticImageData } from 'next/image';

export interface ActionProps {
  src?: StaticImageData;
  label?: string | null;
  active?: boolean;
  className?: string;
  loading?: boolean;
  disabled?: boolean;
  type?: 'primary' | 'secondary' | 'ghost' | 'ghost_secondary';
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
