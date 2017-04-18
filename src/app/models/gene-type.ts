export class GeneType {
  geneName:string;
  numberOfReactionsThatIsPartOf:number;

  constructor(geneName, numberOfReactionsThatIsPartOf) {
      this.geneName = geneName;
      this.numberOfReactionsThatIsPartOf = numberOfReactionsThatIsPartOf;
  }
}
