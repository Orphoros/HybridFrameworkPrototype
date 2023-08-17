/*
  This file contains the models for the objects used in the app.
*/

// Model for the Invite object
type Invite = {
  name: string;
  email: string;
};

// Model for the Party object
type Party = {
  title: string;
  desc: string;
  attendants: number;
  date: string;
};

export type {Invite, Party};
