import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  app.setGlobalPrefix('api');
  const port = process.env.PORT ?? 3000;
  await app.listen(process.env.PORT ?? 3000);

  // Obtener y mostrar información del servidor
  const server = app.getHttpServer();
  const router = server._events.request._router;

  console.log('🚀' + '='.repeat(50));
  console.log(`🚀 Servidor NestJS ejecutándose`);
  console.log(`🚀 Puerto: ${port}`);
  console.log(`🚀 URL: http://localhost:${port}`);
  console.log('CEIBERAPP');
  console.log('🚀' + '='.repeat(50));

  type RouteInfo = { method: string; path: string };
  const routes: RouteInfo[] = [];
  // Opcional: Mostrar rutas disponibles (solo en desarrollo)
  if (process.env.NODE_ENV !== 'production') {
    console.log('\n📋 Rutas disponibles:');
    router.stack.forEach((layer: any) => {
      if (layer.route && layer.route.stack && layer.route.stack[0]) {
        const method = String(layer.route.stack[0].method).toUpperCase();
        const path = `${layer.route.path}`;
        routes.push({ method, path });
      }
    });

    // Ordenar y mostrar rutas
    routes.sort((a, b) => a.path.localeCompare(b.path));
    routes.forEach(route => {
      console.log(`   ${route.method.padEnd(6)} ${route.path}`);
    });
  }
  console.log('🚀' + '='.repeat(50));
}
bootstrap();
