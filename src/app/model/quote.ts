export class Quote {
  id: number;
  name: string;
  author: string;
  submitter: string;
  upVote: number;
  downVote: number;
  created: Date;
  showDetails: boolean;

  constructor(id: number, name: string, author: string, submitter: string, created: Date) {
    this.id = id;
    this.name = name;
    this.author = author;
    this.submitter = submitter;
    this.upVote = 0;
    this.downVote = 0;
    this.created = created;
    this.showDetails = false;
  }
}
