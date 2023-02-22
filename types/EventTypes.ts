export interface Event {
  id: string;
  title: string;
  content: string;
  imageURL: string;
  logoAlt: string;
  logoURL: string;
  dateTime: Date | Array<string| Date> | string;
  createdAt: Date;
  updatedAt: Date;
}
export interface Events {
  events: Event[];
}
