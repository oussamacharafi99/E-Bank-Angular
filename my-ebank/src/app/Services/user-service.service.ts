import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { JwtDto } from '../models/jwt-dto';
import { Account } from '../models/account';
import { AccountDTO } from '../models/account-dto';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  constructor(private http: HttpClient) { }

  private _API_SIGNUP : string = "http://localhost:8000/signup" ;
  private _API_LOGIN : string = "http://localhost:8000/login" ;
  private _API_GET_USER_ID_BY_NAME : string = "http://localhost:8000/get-username" ;
  private _API_ADD_ACCOUNT : string = "http://localhost:8000/add_compte";
  private _API_GET_ALL_ACCOUNTS : string = "http://localhost:8000/get_all_comptes";
  private _API__GET_CARDE : string = "http://localhost:8000/add_compte";

  /*/-- _signup_user --/*/
  public signup(user: User):Observable<User>{
      return this.http.post<User>(this._API_SIGNUP, user);
  }
  

  /*/-- _login_user --/*/
  public login(userDto : User):Observable<string>{
    return this.http.post<string>(this._API_LOGIN, userDto);
  }

  /*/-- _get_username --/*/
  public get_username(username : string):Observable<JwtDto>{
    return this.http.get<JwtDto>(this._API_GET_USER_ID_BY_NAME +  "/" +  username);
  }

    /*/-- _CREATE ACCOUNT  --/*/
    
    // public add_account(user_id : number , account : Account ):Observable<Account>{
    //   return this.http.post<Account>(this._API_ADD_ACCOUNT + "/" + user_id , account);
    // }

    public add_account(user_id: number, account: Account): Observable<Account> {
      return this.http.post<Account>(`${this._API_ADD_ACCOUNT}/${user_id}`, account);
    }


  /*/-- _get_all_accounts --/*/
  public get_all_accounts(id : number):Observable<AccountDTO>{
    return this.http.get<AccountDTO>(this._API_GET_ALL_ACCOUNTS + "/" + id);
  }


}
