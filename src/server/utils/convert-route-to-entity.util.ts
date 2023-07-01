const mapping: Record<string, string> = {
  companies: 'company',
  rides: 'ride',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
