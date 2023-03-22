import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export abstract class CommonAPIOperations<T, D, O> {

  protected constructor(protected operationName: string, protected _url: string, protected httpClient: HttpClient) {
  }

  // findAll(page?: number, size?: number, sort?: string): Observable<HypermediaResponse<T>> {
  //   return this.httpClient.get<HypermediaResponse<T>>(this._url + (page || size || sort ? '?' : '') + (page ? 'page=' + page + '&' : '') + (size ? 'size=' + size + '&' : '') + (sort ? 'sort=' + sort + '&' : ''));
  // }

  findOne(id: string): Observable<T> {
    return this.httpClient.get<T>(this._url + '/' + id);
  }

  findOneDetail(id: string): Observable<D> {
    return this.httpClient.get<D>(`${this._url}/${id}?projection=${this.operationName + 'Detail'}`);
  }

  findOneOption(id: string): Observable<O> {
    return this.httpClient.get<O>(`${this._url}/${id}?projection=${this.operationName + 'Option'}`);
  }

  insert(entity: T): Observable<T> {
    return this.httpClient.post<T>(this._url, entity);
  }

  update(entity: T, id: string): Observable<T> {
    return this.httpClient.patch<T>(this._url + '/' + id, entity);
  }

  delete(id: string): Observable<void> {
    return this.httpClient.delete<void>(this._url + '/' + id, {responseType: 'text' as 'json'});
  }

}
