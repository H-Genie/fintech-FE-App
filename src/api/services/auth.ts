import { api } from '@lib/apiClient';
import type { LoginDTO, RegisterDTO } from '@type/api';
import { API_ENDPOINTS } from '@constants/apiEndpoints';

export const authService = {
  login: (data: LoginDTO) => api.post(API_ENDPOINTS.USERS.LOGIN, data),

  register: (data: RegisterDTO) => api.post(API_ENDPOINTS.USERS.REGISTER, data),

  logout: () => api.post(API_ENDPOINTS.USERS.LOGOUT, {}),
};
