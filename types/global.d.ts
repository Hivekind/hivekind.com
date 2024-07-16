interface Iubenda {
  csConfiguration?: {
    callback?: (data: any) => void;
  };
  cons_instructions?: {
    [key: string]: any;
  };
}

interface Window {
  _iub?: Iubenda;
}
