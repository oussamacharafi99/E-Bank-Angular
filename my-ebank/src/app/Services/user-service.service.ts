import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  constructor(private http: HttpClient) { }

  private _API_SIGNUP : string = "http://localhost:8000/signup" ;
  private _API_LOGIN : string = "http://localhost:8000/login" ;
  private _API_GET_USER_ID_BY_NAME : string = "http://localhost:8000/get-username" ;
  private _API_ADD_ACCOUNT : string = "http://localhost:8000/add_compte" ;

  /*/-- _signup_user --/*/
  public signup(user: User):Observable<User>{
      return this.http.post<User>(this._API_SIGNUP, user);
  }
  

  /*/-- _login_user --/*/
  public login(userDto : User):Observable<string>{
    return this.http.post<string>(this._API_LOGIN, userDto);
  }

  /*/-- _get_username --/*/
  public get_username(username : string):Observable<number>{
    return this.http.get<number>(this._API_GET_USER_ID_BY_NAME +  "/" +  username);
  }

   /*/-- _signup_user --/*/
   public add_account(username : string ):Observable<number>{
    return this.http.post<number>(this._API_SIGNUP, username);
}


}
