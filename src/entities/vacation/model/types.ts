export interface VacationData {
  name: string;
  country: string;
  resort: string;
  program: string;
}

export interface VacationState extends VacationData {
  setName: (name: string) => void;
  setCountry: (country: string) => void;
  setResort: (resort: string) => void;
  setProgram: (program: string) => void;
  reset: () => void;
}
