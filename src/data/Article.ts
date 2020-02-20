export interface Article {
  article_id: number;
  article_json: string;
  batch_id: number;
}

export class ArticleItem {
  constructor(
    public article_id: number,
    public batch_id: number,
    public title: string,
    public description: string,
    public url: string
  ) {}
}
