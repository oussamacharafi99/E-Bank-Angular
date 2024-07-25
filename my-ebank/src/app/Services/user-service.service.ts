import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { JwtDto } from '../models/jwt-dto';
import { Account, Beneficier, Carte, Transaction } from '../models/account';
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
  private _API__GET_CARDE : string = "http://localhost:8000/carte/get";
  private _API__GET_ALL_CARDE : string = "http://localhost:8000/carte/get_all";
  private _API_GET_ACCOUNT : string = "http://localhost:8000/get_compte";
  private _API_GET_ALL_TRANSACTION : string = "http://localhost:8000/transaction/get";
  private _API_GET_ALL_BENEFICIERS : string = "http://localhost:8000/beneficiers/get_all";
  private _API_ADD_TRANSACTION: string = "http://localhost:8000/transaction/add";
  private _API_GET_BENEFICIER_BY_ID: string = "http://localhost:8000/beneficiers/get";
  private _API_UPDATE_BENEFICIER: string = "http://localhost:8000/beneficiers/update";
  private _API_DELETE_BENEFICIER: string = "http://localhost:8000/beneficiers/delete";


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

    public add_account(user_id : number, account: Account): Observable<Account> {
      return this.http.post<Account>(`${this._API_ADD_ACCOUNT}/${user_id}`, account);
    }


  /*/-- _get_all_accounts --/*/
  public get_all_accounts(id : number):Observable<Array<AccountDTO>>{
    return this.http.get<Array<AccountDTO>>(`${this._API_GET_ALL_ACCOUNTS}/${id}`);
  }

  /*/-- _get_account --/*/
  public get_account(id : number):Observable<AccountDTO>{
    return this.http.get<AccountDTO>(`${this._API_GET_ACCOUNT}/${id}`);
  }

    /*/-- _get_first_card --/*/
    public getfirstCarte(id : number): Observable<Carte> {
      return this.http.get<Carte>(`${this._API__GET_CARDE}/${id}`);
    }

    /*/-- _get_all_cards --/*/
    public get_all_Cartes(id : number): Observable<Array<Carte>> {
      return this.http.get<Array<Carte>>(`${this._API__GET_ALL_CARDE}/${id}`);
    }

     /*/-- _get_all_transacion --/*/
     public get_all_tarnsaction(id : number): Observable<Array<Transaction>> {
      return this.http.get<Array<Transaction>>(`${this._API_GET_ALL_TRANSACTION}/${id}`);
    }
    /*/-- _get_all_beneficiers --/*/
    public get_all_beneficiers(id : number): Observable<Array<Beneficier>> {
      return this.http.get<Array<Beneficier>>(`${this._API_GET_ALL_BENEFICIERS}/${id}`);
    }
      /*/-- _add_transaction --/*/
      public add_transaction(transaction: Transaction, accountId: number): Observable<Transaction> {
        return this.http.post<Transaction>(`${this._API_ADD_TRANSACTION}/${accountId}`, transaction);
      }

     /*/-- _get_Beneficier --/*/
     public get_Beneficier(id : number):Observable<Beneficier>{
      return this.http.get<Beneficier>(`${this._API_GET_BENEFICIER_BY_ID}/${id}`);
    }

     /*/-- _Update_Beneficier --/*/
     public update_Beneficier(id : number , beneficier : Beneficier):Observable<Beneficier>{
      return this.http.put<Beneficier>(`${this._API_UPDATE_BENEFICIER}/${id}` , beneficier);
    }

     /*/-- _Delete_Beneficier --/*/
     public delete_Beneficier(id: number): Observable<void> {
      return this.http.delete<void>(`${this._API_DELETE_BENEFICIER}/${id}`);
    }
}
