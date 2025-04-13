export interface NodeInterface {
  code: string;
  name: string;
  registration_date: Date;
  introducer_code: string;
  l: NodeInterface[] | [];
  r: NodeInterface[] | [];
}
