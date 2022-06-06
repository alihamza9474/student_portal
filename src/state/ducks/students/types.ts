export type student = {
  _id: string;
  name: string;
  marks: number;
  subject: string;
  grade: string;
};

interface storeType {
  students: student[];
}

export default storeType;
