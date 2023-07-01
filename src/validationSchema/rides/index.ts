import * as yup from 'yup';

export const rideValidationSchema = yup.object().shape({
  driver_id: yup.string().nullable().required(),
  passenger_id: yup.string().nullable(),
  company_id: yup.string().nullable().required(),
});
