export interface IPagination<T> {
  first: number;
  prev: number | null;
  next: number | null;
  last: number | null;
  pages: number | null;
  items: number;
  data: T;
}
