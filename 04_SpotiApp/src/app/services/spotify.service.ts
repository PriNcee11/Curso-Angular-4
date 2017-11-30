import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas:any[] = [];
  urlBusqueda:string = "https://api.spotify.com/v1/search";
  urlArtista:string = "https://api.spotify.com/v1/artists";

  constructor( private http:Http ) { }

  getArtistas( termino:string ){

    let headers = new Headers();
    headers.append('authorization', 'Bearer BQCFOSgDAiCX-GEdL6wuqy2XUKHwPPQ4Y5L1QgR4554wpfuzt60AUVWxjHm9QdpFrMqtf88G3PIJGpwpMZkiCub4d9f3UTHdCSRag0J9KGPK-A9vaABOTlaSaDW8cKLTNOzf-HdZKg');
    
    let query = `?q=${ termino }&type=artist`;
    let url = this.urlBusqueda + query;

    return this.http.get( url, { headers } ).map( res => {
      console.log( res.json().artists.items ); 
      this.artistas = res.json().artists.items;

      return res.json().artists.items;
    })

  }

    getArtista( id:string ){
      
      let headers = new Headers();
      headers.append('authorization', 'Bearer BQDsJEjI-Oie4kJgdZrPVRR-6AmHQh-hPKtAc9sOpyS-C1PZ4sAr1Y645XqiENIPMuzVK2KF7sEgL69VJQtvOqZAQY9Kx5jQ-3QU2PY44A9piQwx7--cWmsvYlEV6FMNLBrQ4EFrXw');
      
      let query = `/${ id }`;
      let url = this.urlArtista + query;
  
      return this.http.get( url, { headers } ).map( res => {
        console.log( res.json() ); 
        return res.json();
      })
  
    }

}
