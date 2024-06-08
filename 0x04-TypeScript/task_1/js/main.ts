interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience: number;
  location: string;
  [key: string]: any;
}

const createTeacher = (teacher: Partial<Teacher>): Teacher => {
  const { firstName, lastName } = teacher;
  if (!firstName || !lastName) {
    throw new Error('firstName and lastName are required during initialization');
  }

  return {
    firstName,
    lastName,
    ...teacher,
  };
};
