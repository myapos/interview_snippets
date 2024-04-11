// https://www.greatfrontend.com/questions/javascript/data-merging
/**
 * @param {Array<{user: number, duration: number, equipment: Array<string>}>} sessions
 * @return {Array}
 */
export default function mergeData(sessions) {
  const sessionsMap = new Map();

  sessions.forEach((session) => {
    if (!sessionsMap.has(session.user)) {
      sessionsMap.set(session.user, session);
      return;
    }

    const prevSession = sessionsMap.get(session.user);
    const newSession = {
      ...session,
      duration: prevSession.duration + session.duration,
      equipment: Array.from(
        new Set([...prevSession.equipment, ...session.equipment].sort())
      ),
    };
    sessionsMap.set(session.user, newSession);
  });

  return Array.from(sessionsMap.values());
}
