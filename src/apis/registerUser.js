import {apiDelete, apiGet, apiPost, apiPut} from '../utils/utils';
import {SIGNUP} from '../config/urls';

export function registerUser(data = {}) {
  return apiPost(SIGNUP, data);
}
