export interface Destination {
  id: string;
  name: string;
  image: string;
  description: string;
  price: number;
  duration: string;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
}

export interface Metric {
  value: string;
  label: string;
}