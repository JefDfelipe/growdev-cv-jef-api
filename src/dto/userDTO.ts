export type UserDTO = {
  id?: string;
  name: string;
  profile: string,
  address: string,
  experience?: string[],
  contact: string,
  languages?: string[],
  skills?: string[]
};