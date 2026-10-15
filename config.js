const CONFIG = {
  day: (() => {
    const parts = new Intl.DateTimeFormat("en-CA", {
      timeZone: "Asia/Yekaterinburg",
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    }).formatToParts(new Date());
    const date = Object.fromEntries(parts.map(p => [p.type, p.value]));
    const today = Date.UTC(+date.year, +date.month - 1, +date.day);
    return Math.floor((today - Date.UTC(2026, 5, 17)) / 86400000) + 1;
  })(),
  title: "Город Аша",
  coords: "54.985168, 57.26581",
  place: "Аша"
};
