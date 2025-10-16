/**
 * API client for communicating with the Python FastAPI backend
 */

const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';

interface ApiRequestOptions {
  method?: string;
  headers?: Record<string, string>;
  body?: unknown;
}

export class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string = API_BASE_URL) {
    this.baseUrl = baseUrl;
  }

  private async request<T>(
    endpoint: string,
    options: ApiRequestOptions = {}
  ): Promise<T> {
    const { method = 'GET', headers = {}, body } = options;

    const config: RequestInit = {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      credentials: 'include',
    };

    if (body) {
      config.body = JSON.stringify(body);
    }

    const url = `${this.baseUrl}${endpoint}`;
    const response = await fetch(url, config);

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`API Error (${response.status}): ${errorText || response.statusText}`);
    }

    return response.json();
  }

  // HTTP Methods
  async post<T>(endpoint: string, data: unknown, headers: Record<string, string> = {}): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'POST',
      headers,
      body: data
    });
  }

  // Auth endpoints
  async register(username: string, password: string) {
    return this.request<{
      accessToken: string;
      tokenType: string;
      user: {
        id: string;
        username: string;
        createdAt?: string;
      };
    }>('/auth/register', {
      method: 'POST',
      body: { username, password },
    });
  }

  async login(username: string, password: string) {
    return this.request<{
      accessToken: string;
      tokenType: string;
      user: {
        id: string;
        username: string;
        createdAt?: string;
      };
    }>('/auth/login', {
      method: 'POST',
      body: { username, password },
    });
  }

  async logout() {
    return this.request('/auth/logout', { method: 'POST' });
  }

  async getCurrentUser() {
    return this.request('/auth/me');
  }

  // RAG endpoints
  async queryRAG(payload: {
    userId: string;
    course: string;
    level: string | null;
    query: string;
  }) {
    return this.request<{
      answer: string;
      sources: Array<{ source?: string; id?: string }>;
    }>('/rag/query', {
      method: 'POST',
      body: payload,
    });
  }

  async uploadDocument(file: File, course: string, level: string) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('course', course);
    formData.append('level', level);

    const response = await fetch(`${this.baseUrl}/rag/upload`, {
      method: 'POST',
      body: formData,
      credentials: 'include',
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Upload Error (${response.status}): ${errorText || response.statusText}`);
    }

    return response.json();
  }

  // Study Plans endpoints
  async getStudyPlans(userId: string) {
    return this.request(`/study-plans?userId=${userId}`);
  }

  async createStudyPlan(payload: {
    userId: string;
    course: string;
    level: string;
    duration: number;
  }) {
    return this.request('/study-plans', {
      method: 'POST',
      body: payload,
    });
  }

  async updateStudyPlan(planId: string, updates: unknown) {
    return this.request(`/study-plans/${planId}`, {
      method: 'PUT',
      body: updates,
    });
  }

  // Assessments endpoints
  async getAssessments(userId: string) {
    return this.request(`/assessments?userId=${userId}`);
  }

  async generateAssessment(payload: {
    userId: string;
    course: string;
    level: string;
    numQuestions: number;
  }) {
    return this.request('/assessments/generate', {
      method: 'POST',
      body: payload,
    });
  }

  async submitAssessment(assessmentId: string, answers: unknown) {
    return this.request(`/assessments/${assessmentId}/submit`, {
      method: 'POST',
      body: { answers },
    });
  }

  // Health check
  async healthCheck() {
    return this.request('/health');
  }
}

// Export a singleton instance
export const apiClient = new ApiClient();
