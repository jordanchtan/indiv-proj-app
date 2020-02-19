export interface Rating {
  value: string;
  userEmail: string;
}

export class Rating implements Rating {
  constructor(public ratingVal: number, public userEmail: string) {}
}
