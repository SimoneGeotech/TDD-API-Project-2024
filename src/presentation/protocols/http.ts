export interface HttpResponse {
  statusCode: number;
  body: any;
}

export interface HttpResquest {
  body?: any; //é opcional pq no get nao tem body
}
