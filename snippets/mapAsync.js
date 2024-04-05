// https://www.greatfrontend.com/questions/javascript/map-async
/**
 * @param {Array<any>} iterable
 * @param {Function} callbackFn
 *
 * @return {Promise}
 */
export default function mapAsync(iterable, callbackFn) {
  return Promise.all(iterable.map((item) => callbackFn.call(this, item)));
}
