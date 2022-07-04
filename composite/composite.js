const runner = ({ name }) => {
  return {
    runner: () => {
      console.log(`${name} can run`);
    },
  };
};

const footballer = ({ name }) => {
  return {
    ...runner({ name }),
    football: () => {
      console.log(`${name} can play Football`);
    },
  };
};

const padeler = ({ name }) => {
  return {
    ...runner({ name }),
    padel: () => {
      console.log(`${name} can play Padel`);
    },
  };
};

const hockeyman = ({ name }) => {
  return {
    ...runner({ name }),
    hockey: () => {
      console.log(`${name} can play Hockey`);
    },
  };
};

const createFootballer = (name) => {
  const sportsman = { name };
  return {
    ...sportsman,
    ...footballer(sportsman),
  };
};

const createPadeler = (name) => {
  const sportsman = { name };
  return {
    ...sportsman,
    ...padeler(sportsman),
  };
};

const createHockeyman = (name) => {
  const sportsman = { name };
  return {
    ...sportsman,
    ...hockeyman(sportsman),
  };
};

const createUltrasportsman = (name) => {
  const sportsman = { name };
  return {
    ...sportsman,
    ...footballer(sportsman),
    ...padeler(sportsman),
    ...hockeyman(sportsman),
  };
};

const tim = createFootballer("Tim");
tim.football();
tim.runner();

const grace = createHockeyman("Grace");
grace.hockey();
grace.runner();

const jean = createUltrasportsman("Jean");
jean.football();
jean.padel();
jean.hockey();
jean.runner();
