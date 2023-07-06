import {create} from 'zustand';

type Profile = {
  name: string;
  email: string;
  password: string;
  dob: string;
  country: string;
};

type ProfileState = {
  profile: Profile;
  updateProfile: (profile: Profile) => void;
};

const useProfileStore = create<ProfileState>(set => ({
  profile: {
    name: 'mike bui',
    email: 'mike@gmail.com',
    password: '123456',
    dob: '14/01/1994',
    country: 'Viet Nam',
  },
  updateProfile: profile => set(state => ({...state, profile})),
}));

export default useProfileStore;
