// Dashboard JavaScript - 2026 Goals Tracker

document.addEventListener('DOMContentLoaded', function() {
  updateTimeWidget();
  // Update every minute
  setInterval(updateTimeWidget, 60000);
});

function updateTimeWidget() {
  const now = new Date();
  const year = 2026;
  const startOfYear = new Date(year, 0, 1);
  const endOfYear = new Date(year, 11, 31, 23, 59, 59);

  // Format current date
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const dateStr = now.toLocaleDateString('en-US', options);

  const dateEl = document.getElementById('current-date');
  if (dateEl) {
    dateEl.textContent = dateStr;
  }

  // Calculate days and weeks remaining
  const msPerDay = 24 * 60 * 60 * 1000;
  const msPerWeek = 7 * msPerDay;

  // Check if we're in 2026
  const isCurrentYear = now.getFullYear() === year;

  let daysRemaining, weeksRemaining, yearProgress;

  if (now < startOfYear) {
    // Before 2026
    daysRemaining = Math.ceil((endOfYear - startOfYear) / msPerDay);
    weeksRemaining = 52;
    yearProgress = 0;
  } else if (now > endOfYear) {
    // After 2026
    daysRemaining = 0;
    weeksRemaining = 0;
    yearProgress = 100;
  } else {
    // During 2026
    daysRemaining = Math.ceil((endOfYear - now) / msPerDay);
    weeksRemaining = Math.ceil(daysRemaining / 7);
    const totalDays = Math.ceil((endOfYear - startOfYear) / msPerDay);
    const daysPassed = totalDays - daysRemaining;
    yearProgress = Math.round((daysPassed / totalDays) * 100);
  }

  // Update DOM
  const daysEl = document.getElementById('days-remaining');
  const weeksEl = document.getElementById('weeks-remaining');
  const progressEl = document.getElementById('year-progress-bar');
  const progressTextEl = document.getElementById('year-progress-text');

  if (daysEl) daysEl.textContent = daysRemaining;
  if (weeksEl) weeksEl.textContent = weeksRemaining;
  if (progressEl) progressEl.style.width = yearProgress + '%';
  if (progressTextEl) progressTextEl.textContent = yearProgress + '% of 2026 complete';
}
