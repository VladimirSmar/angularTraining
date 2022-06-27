export interface IUserApi {
  dob: {
    date: Date;
    age: number;
  };
  gender: string;
  location: {
    city: string;
    country: string;
    postcode: number;
  };
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
  login: {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  phone: number;
  nat: string;
}
