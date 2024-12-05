import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Item {
  id?: number;
  name: string;
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  private apiUrl = 'http://localhost:8080/api/items';

  constructor(private http: HttpClient) {}

  getAllItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.apiUrl);
  }

  createItem(item: Item): Observable<Item> {
    return this.http.post<Item>(this.apiUrl, item);
  }
}
