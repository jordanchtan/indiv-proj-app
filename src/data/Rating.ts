export interface Rating {
  value: string;
  userEmail: string;
  article_id: number;
}

export class Rating implements Rating {
  constructor(
    public ratingVal: number,
    public userEmail: string,
    public article_id: number
  ) {}
}
