import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';  // Importa RouterTestingModule para pruebas
import { Router } from '@angular/router';  // Importa Router para mockear la navegación
import { Storage } from '@ionic/storage-angular';  // Importa Storage para mockearlo
import { AuthGuard } from './auth.guard';  // Importa el guardia AuthGuard

describe('AuthGuard', () => {
  let authGuard: AuthGuard;
  let router: Router;
  let storage: Storage;

  beforeEach(() => {
    // Configurar el TestBed
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],  // Configura RouterTestingModule
      providers: [
        AuthGuard,  // Provee AuthGuard
        {
          provide: Storage,
          useValue: { get: jasmine.createSpy().and.returnValue(Promise.resolve('mock-token')) }, // Mock de Storage
        },
        {
          provide: Router,
          useValue: { navigateByUrl: jasmine.createSpy() },  // Mock de Router
        }
      ]
    });

    // Inyectar dependencias
    authGuard = TestBed.inject(AuthGuard);
    router = TestBed.inject(Router);
    storage = TestBed.inject(Storage);
  });

  it('should be created', () => {
    expect(authGuard).toBeTruthy();  // Verificar que se creó correctamente
  });

  it('should return true if a token is found', async () => {
    // Mock para simular que el token está presente
    spyOn(storage, 'get').and.returnValue(Promise.resolve('mock-token'));  // Simula la existencia de un token

    const result = await authGuard.canActivate();  // Ejecutar el guardia
    expect(result).toBeTrue();  // El guardia debe permitir la navegación
  });

  it('should return false and navigate to login if no token is found', async () => {
    // Mock para simular que no hay token
    spyOn(storage, 'get').and.returnValue(Promise.resolve(null));  // Simula que no hay token

    const result = await authGuard.canActivate();  // Ejecutar el guardia
    expect(result).toBeFalse();  // El guardia debe denegar la navegación
    expect(router.navigateByUrl).toHaveBeenCalledWith('/login');  // Verificar que se redirige al login
  });
});
