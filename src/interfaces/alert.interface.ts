export type AlertType = 'success' | 'info' | 'warning' | 'error' | 'neutral';

export interface AlertButton {
  id: string;
  text: string;
  type?: 'primary' | 'secondary' | 'outline' | 'ghost';
}

export interface AlertParams {
  icon?: string;
  emoji?: string;
  type: AlertType;
  showClose?: boolean;
  title?: string;
  message?: string;
  buttons?: AlertButton[];
  footer?: string;
  duration?: number;
}

export interface AlertInstance extends AlertParams {
  id: string;
  remainingTime: number;
  isPaused: boolean;
  resolve: (value: string) => void;
  reject: (reason?: any) => void;
}