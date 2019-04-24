import { HttpClient } from '@angular/common/http';
import { HttpService } from './../http-service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  constructor(private http: HttpService,private httpClient:HttpClient) {}
  getHotCity() {
    this.httpClient.get("http://wcf.open.cnblogs.com/news/GetData",).subscribe(res => {
      console.log(res);
    },
    error => {
      console.log(error);
    });
    this.http.POST("/v1/pois",{city_id:'1',keyword:'迪士尼',type:'search'},(res,error)=>{
      if(res){
        console.log(res);
      }
      if(error){
        console.log(error);
      }
      });
   }
}
