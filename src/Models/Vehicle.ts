import ServiceRecord from './ServiceRecord';

interface Vehicle {
  vehicleNo: string;
  model: string;
  color: string;
  make: string;
  ownerNIC: string;
  ownerContact: string;
  ownerEmail: string;
  serviceRecords: ServiceRecord[];
}

export default Vehicle;
