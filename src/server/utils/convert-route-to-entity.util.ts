const mapping: Record<string, string> = {
  files: 'file',
  organizations: 'organization',
  tasks: 'task',
  users: 'user',
  'video-conferences': 'video_conference',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
