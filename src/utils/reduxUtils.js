export const REQUEST = (actionType) => `${actionType}_PENDING`;
export const SUCCESS = (actionType) => `${actionType}_FULFILLED`;
export const FAILURE = (actionType) => `${actionType}_REJECTED`;

export const SERVICE_STATUSES = {
  ok: 200,
};
