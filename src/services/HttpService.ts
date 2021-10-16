import { Service } from 'react-service-locator';

@Service()
export class HttpService {
  post(url: string, payload: { [key: string]: string }): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
