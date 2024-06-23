export const selectEntityFromResult = (entityId) => (result) => ({
  ...result,
  data: result.data?.find(({ id }) => id === entityId),
});
