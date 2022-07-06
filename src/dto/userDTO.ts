export type UserDTO = {
  id?: number;
  name: string;
  profile: string,
  address: string,
  experience?: string[],
  contact: string,
  languages?: string[],
  skills?: string[]
};