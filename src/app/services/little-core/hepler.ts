export function playerStatsPremap(playersStats: any) {
  if (playersStats?.data?.length >= 60) throw new Error('wrong API params');
}
