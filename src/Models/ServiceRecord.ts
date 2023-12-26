import JobCard from './JobCard';
import UsedInventoryItem from './UsedInventoryItem';

interface ServiceRecord {
  id: number;
  checkIn: string;
  checkOut: string;
  customerName: string;
  customerNic: string;
  customerContact: string;
  status: string;
  employeeId: number;
  vehicleNo: string;
  usedInventoryItems: UsedInventoryItem[];
  jobCards: JobCard[];
}

export default ServiceRecord;
