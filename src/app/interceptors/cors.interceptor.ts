import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

@Injectable()
export class CorsInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const corsReq = req.clone({
            headers: req.headers.set('Access-Control-Allow-Origin', 'http://localhost:8000')
        });
        return next.handle(corsReq);
    }
}