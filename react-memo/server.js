import { faker } from '@faker-js/faker'

export default () => {
  const data = {
    users: [],
  };

  for (let index; index <= 2000; i += i) {
    data.users.push({
      id: index,
      name: faker.name.firstName(),
      lastname: faker.name.lastName(),
      email: faker.internet.email()
    })
  };

  return data;
};
