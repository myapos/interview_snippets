// https://www.greatfrontend.com/questions/javascript/data-selection

const getNewSession = ({ storedSession, session }) => ({
  ...storedSession,
  duration: storedSession.duration + session.duration,
  equipment: Array.from(
    new Set([...storedSession.equipment, ...session.equipment])
  ).sort(),
});

const merge = (sessions, merged) => {
  sessions.forEach((session) => {
    if (!merged.has(session.user)) {
      // initialization
      merged.set(session.user, session);
      return; // skip the current iteration
    }

    const storedSession = merged.get(session.user);
    const newSession = getNewSession({ storedSession, session });
    // store
    // delete first and then create a new key to latest position
    merged.delete(session.user);
    merged.set(session.user, newSession);
  });

  // convert mergedMap to array
  let mergedAr = merged.size > 0 ? [] : [...sessions];
  merged.forEach((session, user) => {
    mergedAr.push(session);
  });

  return mergedAr;
};

const applyConditions = (mergedAr, options) => {
  const hasUserInOptions = options?.user;
  const hasDurationInOptions = options?.minDuration;
  const hasEquipmentInOptions = options?.equipment;

  const filterEquipment = (session) => {
    if (hasEquipmentInOptions) {
      return options.equipment.some((optionsEq) => {
        return session.equipment.some((userEq) => {
          return optionsEq === userEq;
        });
      });
    }

    return true;
  };
  const filterMinDuration = (session) =>
    hasDurationInOptions ? session.duration >= options.minDuration : true;

  const filterSession = (session) =>
    hasUserInOptions ? session.user === options.user : true;

  let filtered = mergedAr
    .filter(filterSession)
    .filter(filterMinDuration)
    .filter(filterEquipment);

  return filtered;
};

const selectData = (sessions, options) => {
  if (sessions.length === 0) return sessions;

  const mergedMap = new Map();
  let mergedAr = [...sessions];

  const hasMergeInOptions = options?.merge;

  // merge option
  if (hasMergeInOptions) {
    mergedAr = merge(sessions, mergedMap);
  }

  return applyConditions(mergedAr, options);
};

export default selectData;
