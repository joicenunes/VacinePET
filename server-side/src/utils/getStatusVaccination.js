import statusVaccination from '../constants/statusVaccination.js';

export function getStatusVaccination(status) {
  return statusVaccination[status];
}