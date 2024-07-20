import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { JwtDto } from "../models/jwt-dto";

export class InterceptorAuth implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // const storedJwtData = localStorage.getItem('jwtData');
        // console.log("/////////////////interceptor");
        
        // if (storedJwtData) {
        
            
        //     const jwtData: JwtDto = JSON.parse(storedJwtData);
        //     const token = jwtData.token;
        //     console.log("----------> " + token);
        //     if (token) {
            console.log("//////////////////////////////////////")
            const token="eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJvdXNzYW1hIiwiaWF0IjoxNzIxNDkzMzk3LCJleHAiOjE3MjE1Nzk3OTd9.g0gMXYHG96SMzWeZIPqAFSsWv2QalJPfUFmVvHQ5BNI"
            

                const cloned = req.clone({
                    setHeaders: {
                        Authorization: `Bearer ${token}`
                    }
                });
            
                return next.handle(cloned);
            }
        } 
            
        
        
    

