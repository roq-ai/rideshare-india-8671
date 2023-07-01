import { UserInterface } from 'interfaces/user';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface RideInterface {
  id?: string;
  driver_id: string;
  passenger_id?: string;
  company_id: string;
  created_at?: any;
  updated_at?: any;

  user_ride_driver_idTouser?: UserInterface;
  user_ride_passenger_idTouser?: UserInterface;
  company?: CompanyInterface;
  _count?: {};
}

export interface RideGetQueryInterface extends GetQueryInterface {
  id?: string;
  driver_id?: string;
  passenger_id?: string;
  company_id?: string;
}
