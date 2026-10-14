const CONFIG = {
  day: (() => {
    const parts = new Intl.DateTimeFormat("en-CA", {
      timeZone: "Asia/Yekaterinburg",
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    }).formatToParts(new Date());

    const date = Object.fromEntries(
      parts.map(part => [part.type, part.value])
    );

    const today = Date.UTC(
      Number(date.year),
      Number(date.month) - 1,
      Number(date.day)
    );

    // День 1 — 17 июня 2026 года
    const start = Date.UTC(2026, 5, 17);

    return Math.floor((today - start) / 86400000) + 1;
  })(),

  title: "Затерялся в прекрасных горах Южного Урала",
  coords: "54.918786, 58.902582",
  place: "Между Саткой и Юрюзанью"
};
