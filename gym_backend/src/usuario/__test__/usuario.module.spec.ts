import { UsuarioController } from '../usuario.controller';
import { UsuarioService } from '../usuario.service';

describe('UsuarioController,UsuarioService', () => {
  let controller: UsuarioController;
  let service: UsuarioService;

  beforeEach(async () => {
    controller = new UsuarioController();
    service = new UsuarioService();
  });

  test('It is expected that we will be able to instantiate a controller independently', () => {
    expect(controller).toBeDefined();
  });

  test('It is expected that we will be able to instantiate a service independently', () => {
    expect(service).toBeDefined();
  });
});
