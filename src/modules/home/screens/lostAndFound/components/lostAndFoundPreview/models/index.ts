import { LostAndFoundDto } from 'models';

export interface LostAndFoundPreviewProps {
  data: LostAndFoundDto | null;
  onClose?: () => void;
}
