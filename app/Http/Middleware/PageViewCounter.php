<?php
// app/Http/Middleware/PageViewCounter.php
namespace App\Http\Middleware;

use Closure;
use App\Models\PageView;
use Illuminate\Http\Request;

class PageViewCounter
{
    public function handle(Request $request, Closure $next)
    {
        // Lista de rutas que no deseas contar
        $excludedRoutes = [
            'login',
            'dashboard',
            'admin/*',
            'api/*'
        ];

        // Lista de rutas específicas donde sí deseas contar visitas
        $includedRoutes = [
            'Welcome',
            '/',
            'register',
            'page/*'  // Ejemplo: para contar visitas en páginas dinámicas
        ];

        // Si la ruta está excluida, continúa sin contar la visita
        foreach ($excludedRoutes as $route) {
            if ($request->is($route)) {
                return $next($request);
            }
        }

        // Verifica si la ruta está en la lista de rutas específicas
        $shouldCount = false;
        foreach ($includedRoutes as $route) {
            if ($request->is($route)) {
                $shouldCount = true;
                break;
            }
        }

        // Si la ruta no está incluida, no se cuenta la visita
        if (!$shouldCount) {
            return $next($request);
        }

        // Lógica de conteo de visitas para las rutas incluidas
        $page = $request->path();
        $pageView = PageView::firstOrCreate(
            ['page' => $page],
            ['views' => 0]
        );

        $pageView->increment('views');

        return $next($request);
    }
}
