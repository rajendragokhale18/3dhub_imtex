export interface PrintingOrder {
  id: string;
  userId: string;
  providerId: string;
  modelName: string;
  description: string;
  materialType: string;
  printerType: string;
  status: 'pending' | 'accepted' | 'printing' | 'completed';
  price: number;
  createdAt: Date;
  files: string[];
}

export interface Provider {
  id: string;
  name: string;
  location: string;
  printers: PrinterInfo[];
  rating: number;
  completedOrders: number;
}

export interface PrinterInfo {
  type: string;
  materials: string[];
  buildVolume: string;
  resolution: string;
  hourlyRate: number;
}

export interface Location {
  id: string;
  name: string;
  address: string;
  coordinates: [number, number];
  providers: Provider[];
}