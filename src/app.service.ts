import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

 
  getTeste(): any {
    let teste = {
      id: 1,
      nome: "Talison"
    }
    return teste
  }
}
