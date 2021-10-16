import { Inject, Service } from 'react-service-locator';
import { HttpService } from './HttpService';

@Service()
export class SessionService {

  @Inject(HttpService)
  private readonly httpService: HttpService;

  public async login(username: string, password: string): Promise<void> {
    await this.httpService.post('/login', { username, password });
  }
}
