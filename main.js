function was_package_received_yesterday(tz_from, tz_to, start, duration) {
  const time_diff = tz_to - tz_from;
  const receive_time = start + duration + time_diff;
  return receive_time < 0;
}