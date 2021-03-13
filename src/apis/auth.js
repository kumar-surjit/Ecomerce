import {apiDelete, apiGet, apiPost, apiPut} from '../../utils/utils';
import {LOGIN} from '../config/urls';

export function login(data = {}) {
  return apiPost(LOGIN, data);
}
