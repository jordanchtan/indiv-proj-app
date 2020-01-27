export interface Rating {
  value: string;
}

export class Rating implements Rating {
  constructor(public ratingVal: number) {}
}
